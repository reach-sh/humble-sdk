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
    computeMint_: ((_v11442, _v11443, _v11444 ) => {
        const v11442 = stdlib.protect(ctc1, _v11442, null);
        const v11443 = stdlib.protect(ctc1, _v11443, null);
        const v11444 = stdlib.protect(ctc1, _v11444, null);
      
      const v11445 = v11442.A;
      const v11446 = v11442.B;
      const v11447 = v11443.A;
      const v11448 = v11443.B;
      const v11450 = v11444.B;
      let v11451;
      const v11458 = stdlib.eq(v11450, stdlib.checkedBigNumberify('298:19:decimal', stdlib.UInt_max, '0'));
      if (v11458) {
        const v11459 = stdlib.cast(false, true, v11445);
        const v11460 = stdlib.cast(false, true, v11446);
        const v11461 = stdlib.mul256(v11459, v11460);
        const v11462 = stdlib.sqrt256(v11461);
        const v11463 = stdlib.cast(true, false, v11462);
        v11451 = v11463;
        }
      else {
        const v11472 = stdlib.muldiv(v11445, v11450, v11447);
        const v11479 = stdlib.muldiv(v11446, v11450, v11448);
        const v11481 = stdlib.lt(v11472, v11479);
        const v11482 = v11481 ? v11472 : v11479;
        v11451 = v11482;
        }
      
      return v11451;}),
    computeSwap_: ((_v11483, _v11484, _v11485, _v11486 ) => {
        const v11483 = stdlib.protect(ctc2, _v11483, null);
        const v11484 = stdlib.protect(ctc1, _v11484, null);
        const v11485 = stdlib.protect(ctc1, _v11485, null);
        const v11486 = stdlib.protect(ctc4, _v11486, null);
      
      const v11487 = v11484.A;
      const v11488 = v11484.B;
      const v11489 = v11485.A;
      const v11490 = v11485.B;
      const v11492 = v11486.protoFee;
      const v11493 = v11486.lpFee;
      const v11494 = v11486.totFee;
      const v11495 = stdlib.lt(v11492, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v11496 = stdlib.lt(v11493, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v11497 = v11495 ? v11496 : false;
      const v11498 = stdlib.add(v11493, v11492);
      const v11499 = stdlib.eq(v11494, v11498);
      const v11500 = v11497 ? v11499 : false;
      const v11501 = stdlib.lt(v11494, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v11502 = v11500 ? v11501 : false;
      const v11503 = stdlib.gt(v11494, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v11504 = v11502 ? v11503 : false;
      stdlib.assert(v11504, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v11506 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v11506, {
        at: '289:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v11507;
      if (v11483) {
        const v11512 = stdlib.eq(v11488, stdlib.checkedBigNumberify('./index.rsh:276:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v11512, {
          at: './index.rsh:276:10:application',
          fs: ['at 290:31:application call to "computeSwap" (defined at: ./index.rsh:272:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v11521 = stdlib.add(v11489, v11487);
        const v11529 = stdlib.muldiv(v11487, v11490, v11521);
        const v11530 = stdlib.cast(false, true, v11487);
        const v11531 = stdlib.cast(false, true, v11494);
        const v11532 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v11531);
        const v11533 = stdlib.mul256(v11530, v11532);
        const v11534 = stdlib.cast(false, true, v11521);
        const v11535 = stdlib.mul256(v11534, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v11536 = stdlib.add256(v11535, v11533);
        const v11537 = stdlib.cast(false, true, v11490);
        const v11538 = stdlib.mul256(v11533, v11537);
        const v11539 = stdlib.div256(v11538, v11536);
        const v11540 = stdlib.cast(true, false, v11539);
        const v11545 = stdlib.sub(v11529, v11540);
        const v11549 = stdlib.mul(v11492, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
        const v11550 = stdlib.div(v11549, v11494);
        const v11556 = stdlib.muldiv(v11545, v11550, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
        const v11561 = stdlib.muldiv(v11487, v11492, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
        const v11569 = stdlib.muldiv(v11561, v11490, v11521);
        const v11570 = stdlib.gt(v11569, v11556);
        const v11571 = [v11561, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v11572 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11556];
        const v11573 = v11570 ? v11571 : v11572;
        const v11575 = v11573[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
        const v11576 = v11573[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
        const v11578 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v11540
          };
        const v11580 = {
          A: v11575,
          B: v11576
          };
        const v11581 = [v11578, v11580];
        v11507 = v11581;
        }
      else {
        const v11582 = stdlib.eq(v11487, stdlib.checkedBigNumberify('./index.rsh:281:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v11582, {
          at: './index.rsh:281:10:application',
          fs: ['at 290:31:application call to "computeSwap" (defined at: ./index.rsh:272:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v11591 = stdlib.add(v11490, v11488);
        const v11599 = stdlib.muldiv(v11488, v11489, v11591);
        const v11600 = stdlib.cast(false, true, v11488);
        const v11601 = stdlib.cast(false, true, v11494);
        const v11602 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v11601);
        const v11603 = stdlib.mul256(v11600, v11602);
        const v11604 = stdlib.cast(false, true, v11591);
        const v11605 = stdlib.mul256(v11604, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v11606 = stdlib.add256(v11605, v11603);
        const v11607 = stdlib.cast(false, true, v11489);
        const v11608 = stdlib.mul256(v11603, v11607);
        const v11609 = stdlib.div256(v11608, v11606);
        const v11610 = stdlib.cast(true, false, v11609);
        const v11615 = stdlib.sub(v11599, v11610);
        const v11619 = stdlib.mul(v11492, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
        const v11620 = stdlib.div(v11619, v11494);
        const v11626 = stdlib.muldiv(v11615, v11620, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
        const v11631 = stdlib.muldiv(v11488, v11492, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
        const v11639 = stdlib.muldiv(v11631, v11489, v11591);
        const v11640 = stdlib.gt(v11639, v11626);
        const v11641 = [v11631, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v11642 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11626];
        const v11643 = v11640 ? v11641 : v11642;
        const v11645 = v11643[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
        const v11646 = v11643[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
        const v11648 = {
          A: v11610,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v11650 = {
          A: v11646,
          B: v11645
          };
        const v11651 = [v11648, v11650];
        v11507 = v11651;
        }
      const v11652 = v11507[stdlib.checkedBigNumberify('290:11:array', stdlib.UInt_max, '0')];
      const v11653 = v11507[stdlib.checkedBigNumberify('290:11:array', stdlib.UInt_max, '1')];
      const v11654 = v11652.A;
      const v11655 = v11652.B;
      const v11656 = v11653.A;
      const v11657 = v11653.B;
      const v11658 = {
        A: v11654,
        B: v11655
        };
      const v11659 = {
        A: v11656,
        B: v11657
        };
      const v11660 = [v11658, v11659];
      
      return v11660;})
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
            const [v14840, v14841, v14870, v14898, v14932, v14933, v14934, v14935] = svs;
            return (await ((async () => {
              
              const v19837 = v14932.A;
              const v19838 = v14932.B;
              const v19839 = v14933.A;
              const v19840 = v14933.B;
              const v19841 = v14935.protoFee;
              const v19842 = v14935.lpFee;
              const v19843 = v14935.totFee;
              const v19844 = v14935.protoAddr;
              const v19845 = v14935.locked;
              const v19846 = v14934.A;
              const v19847 = v14934.B;
              const v19848 = {
                A: v19837,
                B: v19838
                };
              const v19849 = {
                A: v19839,
                B: v19840
                };
              const v19850 = {
                locked: v19845,
                lpFee: v19842,
                protoAddr: v19844,
                protoFee: v19841,
                totFee: v19843
                };
              const v19851 = {
                A: v19846,
                B: v19847
                };
              const v19853 = {
                liquidityToken: v14898,
                lptBals: v19848,
                poolBals: v19849,
                protoBals: v19851,
                protoInfo: v19850,
                tokA: v14870,
                tokB: v14841
                };
              
              return v19853;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939] = svs;
            return (await ((async () => {
              
              const v15008 = v14932.A;
              const v15009 = v14932.B;
              const v15010 = v14933.A;
              const v15011 = v14933.B;
              const v15012 = v14935.protoFee;
              const v15013 = v14935.lpFee;
              const v15014 = v14935.totFee;
              const v15015 = v14935.protoAddr;
              const v15016 = v14935.locked;
              const v15017 = v14934.A;
              const v15018 = v14934.B;
              const v15019 = {
                A: v15008,
                B: v15009
                };
              const v15020 = {
                A: v15010,
                B: v15011
                };
              const v15021 = {
                locked: v15016,
                lpFee: v15013,
                protoAddr: v15015,
                protoFee: v15012,
                totFee: v15014
                };
              const v15022 = {
                A: v15017,
                B: v15018
                };
              const v15024 = {
                liquidityToken: v14898,
                lptBals: v15019,
                poolBals: v15020,
                protoBals: v15022,
                protoInfo: v15021,
                tokA: v14870,
                tokB: v14841
                };
              
              return v15024;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
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
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc15 = stdlib.T_Data({
    Protocol_harvest0_11914: ctc10,
    Provider_deposit0_11914: ctc12,
    Provider_withdraw0_11914: ctc13,
    Trader_swapAForB0_11914: ctc14,
    Trader_swapBForA0_11914: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc11, ctc4]);
  const ctc17 = stdlib.T_Tuple([]);
  
  
  const v14828 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v14829 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v14830 = stdlib.protect(ctc2, interact.proto, 'for Admin\'s interact field proto');
  const v14831 = stdlib.protect(ctc3, interact.tokA, 'for Admin\'s interact field tokA');
  const v14832 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v14836 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v14836, {
    at: './index.rsh:362:10:application',
    fs: ['at ./index.rsh:371:15:application call to "checkInput" (defined at: ./index.rsh:361:37:function exp)', 'at ./index.rsh:365:13:application call to [unknown function] (defined at: ./index.rsh:365:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v14837 = stdlib.tokenEq(v14831, v14832);
  const v14838 = v14837 ? false : true;
  stdlib.assert(v14838, {
    at: './index.rsh:363:10:application',
    fs: ['at ./index.rsh:371:15:application call to "checkInput" (defined at: ./index.rsh:361:37:function exp)', 'at ./index.rsh:365:13:application call to [unknown function] (defined at: ./index.rsh:365:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v14831, v14832, v14828, v14829, v14830],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:373:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:373:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v14840, v14841, v14842, v14843, v14844], secs: v14846, time: v14845, didSend: v11687, from: v14839 } = txn1;
      
      const v14847 = stdlib.tokenEq(v14840, v14841);
      const v14848 = v14847 ? false : true;
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v14840
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v14841
        });
      ;
      const v14864 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      ;
      const v14867 = await ctc.getContractInfo();
      const v14870 = ['Some', v14840];
      const v14871 = [stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
        accs: [],
        bills: stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'),
        fees: stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'),
        kind: 'remote',
        obj: v14844,
        pays: stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'),
        toks: []
        })), undefined)];
      const v14872 = await txn1.getOutput('internal', 'v14871', ctc8, v14871);
      const v14874 = v14872[stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0')];
      const v14875 = v14872[stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '1')];
      const v14876 = v14875.protoFee;
      const v14877 = v14875.lpFee;
      const v14878 = v14875.totFee;
      const v14879 = stdlib.lt(v14876, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v14880 = stdlib.lt(v14877, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v14881 = v14879 ? v14880 : false;
      const v14882 = stdlib.add(v14877, v14876);
      const v14883 = stdlib.eq(v14878, v14882);
      const v14884 = v14881 ? v14883 : false;
      const v14885 = stdlib.lt(v14878, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v14886 = v14884 ? v14885 : false;
      const v14887 = stdlib.gt(v14878, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v14888 = v14886 ? v14887 : false;
      ;
      const v14893 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'), v14874);
      ;
      const v14894 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v14895 = '                                                                                                ';
      const v14896 = '                                ';
      const v14897 = stdlib.simTokenNew(sim_r, v14842, v14843, v14895, v14896, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v14898 = await txn1.getOutput('internal', 'v14897', ctc3, v14897);
      const v14899 = [v14840, v14841];
      const v14900 = await stdlib.Array_asyncReduce([v14899], false, async([v14902], v14901, v14903) => {
        const v14904 = stdlib.tokenEq(v14898, v14902);
        const v14906 = v14901 ? v14901 : v14904;
        
        return v14906;})
      const v14907 = v14900 ? false : true;
      ;
      
      const v14929 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v14931 = false;
      const v14932 = v14894;
      const v14933 = v14929;
      const v14934 = v14929;
      const v14935 = v14875;
      const v14936 = v14845;
      const v14939 = v14874;
      
      if (await (async () => {
        const v15007 = v14931 ? false : true;
        
        return v15007;})()) {
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
  const {data: [v14840, v14841, v14842, v14843, v14844], secs: v14846, time: v14845, didSend: v11687, from: v14839 } = txn1;
  const v14847 = stdlib.tokenEq(v14840, v14841);
  const v14848 = v14847 ? false : true;
  stdlib.assert(v14848, {
    at: './index.rsh:373:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  const v14864 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v14864, {
    at: './index.rsh:362:10:application',
    fs: ['at ./index.rsh:374:13:application call to "checkInput" (defined at: ./index.rsh:361:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v14867 = await ctc.getContractInfo();
  const v14870 = ['Some', v14840];
  const v14871 = undefined /* Remote */;
  const v14872 = await txn1.getOutput('internal', 'v14871', ctc8, v14871);
  const v14874 = v14872[stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0')];
  const v14875 = v14872[stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '1')];
  const v14876 = v14875.protoFee;
  const v14877 = v14875.lpFee;
  const v14878 = v14875.totFee;
  const v14879 = stdlib.lt(v14876, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v14880 = stdlib.lt(v14877, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v14881 = v14879 ? v14880 : false;
  const v14882 = stdlib.add(v14877, v14876);
  const v14883 = stdlib.eq(v14878, v14882);
  const v14884 = v14881 ? v14883 : false;
  const v14885 = stdlib.lt(v14878, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v14886 = v14884 ? v14885 : false;
  const v14887 = stdlib.gt(v14878, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v14888 = v14886 ? v14887 : false;
  stdlib.assert(v14888, {
    at: './index.rsh:378:14:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v14893 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'), v14874);
  stdlib.assert(v14893, {
    at: './index.rsh:378:14:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v14894 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v14895 = '                                                                                                ';
  const v14896 = '                                ';
  const v14897 = undefined /* TokenNew */;
  const v14898 = await txn1.getOutput('internal', 'v14897', ctc3, v14897);
  const v14899 = [v14840, v14841];
  const v14900 = await stdlib.Array_asyncReduce([v14899], false, async([v14902], v14901, v14903) => {
    const v14904 = stdlib.tokenEq(v14898, v14902);
    const v14906 = v14901 ? v14901 : v14904;
    
    return v14906;})
  const v14907 = v14900 ? false : true;
  stdlib.assert(v14907, {
    at: './index.rsh:382:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  stdlib.protect(ctc9, await interact.signalPoolCreation(v14898), {
    at: './index.rsh:390:36:application',
    fs: ['at ./index.rsh:390:36:application call to [unknown function] (defined at: ./index.rsh:390:36:function exp)', 'at ./index.rsh:390:36:application call to "liftedInteract" (defined at: ./index.rsh:390:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v14929 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v14931 = false;
  let v14932 = v14894;
  let v14933 = v14929;
  let v14934 = v14929;
  let v14935 = v14875;
  let v14936 = v14845;
  let v14939 = v14874;
  
  while (await (async () => {
    const v15007 = v14931 ? false : true;
    
    return v15007;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn2;
    switch (v15659[0]) {
      case 'Protocol_harvest0_11914': {
        const v15662 = v15659[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        ;
        const v15830 = v15662[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '0')];
        const v15831 = v15662[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '1')];
        const v15832 = v14935.protoAddr;
        const v15833 = stdlib.addressEq(v15658, v15832);
        stdlib.assert(v15833, {
          at: './index.rsh:420:14:application',
          fs: ['at ./index.rsh:518:32:application call to "doHarvest" (defined at: ./index.rsh:419:50:function exp)', 'at ./index.rsh:518:20:application call to [unknown function] (defined at: ./index.rsh:518:20:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Admin'
          });
        const v15834 = v15831.protoFee;
        const v15835 = v15831.lpFee;
        const v15836 = v15831.totFee;
        const v15837 = stdlib.lt(v15834, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
        const v15838 = stdlib.lt(v15835, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
        const v15839 = v15837 ? v15838 : false;
        const v15840 = stdlib.add(v15835, v15834);
        const v15841 = stdlib.eq(v15836, v15840);
        const v15842 = v15839 ? v15841 : false;
        const v15843 = stdlib.lt(v15836, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
        const v15844 = v15842 ? v15843 : false;
        const v15845 = stdlib.gt(v15836, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
        const v15846 = v15844 ? v15845 : false;
        stdlib.assert(v15846, {
          at: './index.rsh:78:29:application',
          fs: ['at ./index.rsh:421:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:518:32:application call to "doHarvest" (defined at: ./index.rsh:419:50:function exp)', 'at ./index.rsh:518:20:application call to [unknown function] (defined at: ./index.rsh:518:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v15848 = (stdlib.le(await ctc.getBalance(), v14939) ? stdlib.checkedBigNumberify('./index.rsh:422:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v14939));
        const v15849 = stdlib.add(v15848, v14939);
        const v15851 = v14932.B;
        const v15854 = v15831.locked;
        const v15855 = stdlib.eq(v15851, stdlib.checkedBigNumberify('./index.rsh:425:56:decimal', stdlib.UInt_max, '0'));
        const v15856 = v15854 ? v15855 : false;
        const v15857 = v14933.A;
        const v15858 = v14933.B;
        const v15859 = stdlib.eq(v15857, stdlib.checkedBigNumberify('./index.rsh:406:37:decimal', stdlib.UInt_max, '0'));
        const v15860 = stdlib.eq(v15858, stdlib.checkedBigNumberify('./index.rsh:406:47:decimal', stdlib.UInt_max, '0'));
        const v15861 = v15859 ? v15860 : false;
        const v15862 = v15856 ? v15861 : false;
        const v15863 = v14934.A;
        const v15864 = v14934.B;
        const v15894 = stdlib.sub(v15849, v15848);
        ;
        ;
        ;
        const v15921 = {
          A: v15863,
          B: v15864
          };
        const v15922 = [v15921, v15848];
        await txn2.getOutput('Protocol_harvest', 'v15922', ctc16, v15922);
        const v15950 = v15831.protoAddr;
        const v15952 = {
          locked: v15854,
          lpFee: v15835,
          protoAddr: v15950,
          protoFee: v15834,
          totFee: v15836
          };
        null;
        const cv14931 = v15862;
        const cv14932 = v14932;
        const cv14933 = v14933;
        const cv14934 = v14929;
        const cv14935 = v15831;
        const cv14936 = v15660;
        const cv14939 = v15894;
        
        v14931 = cv14931;
        v14932 = cv14932;
        v14933 = cv14933;
        v14934 = cv14934;
        v14935 = cv14935;
        v14936 = cv14936;
        v14939 = cv14939;
        
        continue;
        break;
        }
      case 'Provider_deposit0_11914': {
        const v16497 = v15659[1];
        undefined /* setApiDetails */;
        const v16521 = v16497[stdlib.checkedBigNumberify('./index.rsh:525:9:spread', stdlib.UInt_max, '0')];
        const v16522 = v16521.A;
        const v16523 = v16521.B;
        ;
        ;
        ;
        ;
        const v16795 = v14935.locked;
        const v16796 = v16795 ? false : true;
        stdlib.assert(v16796, {
          at: './index.rsh:446:14:application',
          fs: ['at ./index.rsh:528:27:application call to "doDeposit" (defined at: ./index.rsh:445:37:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        let v16797;
        const v16800 = v14932.A;
        const v16801 = v14932.B;
        const v16803 = stdlib.eq(v16801, stdlib.checkedBigNumberify('./index.rsh:298:19:decimal', stdlib.UInt_max, '0'));
        if (v16803) {
          const v16804 = stdlib.cast(false, true, v16522);
          const v16805 = stdlib.cast(false, true, v16523);
          const v16806 = stdlib.mul256(v16804, v16805);
          const v16807 = stdlib.sqrt256(v16806);
          const v16808 = stdlib.cast(true, false, v16807);
          v16797 = v16808;
          }
        else {
          const v16809 = v14933.A;
          const v16810 = v14933.B;
          const v16814 = stdlib.muldiv(v16522, v16801, v16809);
          const v16818 = stdlib.muldiv(v16523, v16801, v16810);
          const v16819 = stdlib.lt(v16814, v16818);
          const v16820 = v16819 ? v16814 : v16818;
          v16797 = v16820;
          }
        const v16822 = v14933.A;
        const v16826 = stdlib.add(v16522, v16822);
        const v16828 = v14933.B;
        const v16832 = stdlib.add(v16523, v16828);
        const v16833 = {
          A: v16826,
          B: v16832
          };
        const v16840 = stdlib.sub(v16800, v16797);
        const v16844 = stdlib.add(v16801, v16797);
        const v16845 = {
          A: v16840,
          B: v16844
          };
        ;
        await txn2.getOutput('Provider_deposit', 'v16797', ctc4, v16797);
        const v16891 = {
          A: v16522,
          B: v16523
          };
        const v16892 = {
          A: v16826,
          B: v16832
          };
        const v16893 = {
          A: v16840,
          B: v16844
          };
        null;
        const cv14931 = false;
        const cv14932 = v16845;
        const cv14933 = v16833;
        const cv14934 = v14934;
        const cv14935 = v14935;
        const cv14936 = v15660;
        const cv14939 = v14939;
        
        v14931 = cv14931;
        v14932 = cv14932;
        v14933 = cv14933;
        v14934 = cv14934;
        v14935 = cv14935;
        v14936 = cv14936;
        v14939 = cv14939;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_11914': {
        const v17332 = v15659[1];
        undefined /* setApiDetails */;
        const v17380 = v17332[stdlib.checkedBigNumberify('./index.rsh:520:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        ;
        const v17739 = v14932.A;
        const v17740 = v14932.B;
        const v17743 = v14933.A;
        const v17744 = v14933.B;
        const v17748 = stdlib.muldiv(v17380, v17743, v17740);
        const v17752 = stdlib.muldiv(v17380, v17744, v17740);
        const v17761 = stdlib.add(v17739, v17380);
        const v17764 = stdlib.sub(v17740, v17380);
        const v17765 = {
          A: v17761,
          B: v17764
          };
        const v17770 = stdlib.sub(v17743, v17748);
        const v17774 = stdlib.sub(v17744, v17752);
        const v17775 = {
          A: v17770,
          B: v17774
          };
        ;
        ;
        const v17826 = {
          A: v17748,
          B: v17752
          };
        await txn2.getOutput('Provider_withdraw', 'v17826', ctc11, v17826);
        const v17836 = {
          A: v17770,
          B: v17774
          };
        const v17837 = {
          A: v17761,
          B: v17764
          };
        null;
        const cv14931 = false;
        const cv14932 = v17765;
        const cv14933 = v17775;
        const cv14934 = v14934;
        const cv14935 = v14935;
        const cv14936 = v15660;
        const cv14939 = v14939;
        
        v14931 = cv14931;
        v14932 = cv14932;
        v14933 = cv14933;
        v14934 = cv14934;
        v14935 = cv14935;
        v14936 = cv14936;
        v14939 = cv14939;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_11914': {
        const v18167 = v15659[1];
        undefined /* setApiDetails */;
        const v18233 = v18167[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        ;
        const v18683 = v18167[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '1')];
        const v18686 = v14935.locked;
        const v18687 = v18686 ? false : true;
        stdlib.assert(v18687, {
          at: './index.rsh:458:14:application',
          fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v18688 = v14933.A;
        const v18689 = v14933.B;
        const v18690 = v14935.protoFee;
        const v18691 = v14935.totFee;
        const v18695 = stdlib.add(v18688, v18233);
        const v18699 = stdlib.muldiv(v18233, v18689, v18695);
        const v18700 = stdlib.cast(false, true, v18233);
        const v18701 = stdlib.cast(false, true, v18691);
        const v18702 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18701);
        const v18703 = stdlib.mul256(v18700, v18702);
        const v18704 = stdlib.cast(false, true, v18695);
        const v18705 = stdlib.mul256(v18704, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v18706 = stdlib.add256(v18705, v18703);
        const v18707 = stdlib.cast(false, true, v18689);
        const v18708 = stdlib.mul256(v18703, v18707);
        const v18709 = stdlib.div256(v18708, v18706);
        const v18710 = stdlib.cast(true, false, v18709);
        const v18713 = stdlib.sub(v18699, v18710);
        const v18716 = stdlib.mul(v18690, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
        const v18717 = stdlib.div(v18716, v18691);
        const v18720 = stdlib.muldiv(v18713, v18717, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
        const v18722 = stdlib.muldiv(v18233, v18690, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
        const v18726 = stdlib.muldiv(v18722, v18689, v18695);
        const v18727 = stdlib.gt(v18726, v18720);
        const v18728 = [v18722, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v18729 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18720];
        const v18730 = v18727 ? v18728 : v18729;
        const v18732 = v18730[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
        const v18733 = v18730[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
        const v18752 = stdlib.sub(v18689, v18710);
        const v18756 = stdlib.sub(v18695, v18732);
        const v18759 = stdlib.sub(v18752, v18733);
        const v18760 = {
          A: v18756,
          B: v18759
          };
        const v18761 = v14934.A;
        const v18765 = stdlib.add(v18761, v18732);
        const v18766 = v14934.B;
        const v18770 = stdlib.add(v18766, v18733);
        const v18771 = {
          A: v18765,
          B: v18770
          };
        const v18772 = stdlib.le(v18683, v18710);
        stdlib.assert(v18772, {
          at: './index.rsh:479:14:application',
          fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v18775 = stdlib.cast(false, true, v18688);
        const v18777 = stdlib.mul256(v18775, v18707);
        const v18778 = stdlib.cast(false, true, v18756);
        const v18779 = stdlib.cast(false, true, v18759);
        const v18780 = stdlib.mul256(v18778, v18779);
        const v18781 = stdlib.ge256(v18780, v18777);
        stdlib.assert(v18781, {
          at: './index.rsh:489:14:application',
          fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        const v18820 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v18710
          };
        await txn2.getOutput('Trader_swapAForB', 'v18820', ctc11, v18820);
        const v18830 = {
          A: v18233,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v18832 = {
          A: v18756,
          B: v18759
          };
        null;
        const cv14931 = false;
        const cv14932 = v14932;
        const cv14933 = v18760;
        const cv14934 = v18771;
        const cv14935 = v14935;
        const cv14936 = v15660;
        const cv14939 = v14939;
        
        v14931 = cv14931;
        v14932 = cv14932;
        v14933 = cv14933;
        v14934 = cv14934;
        v14935 = cv14935;
        v14936 = cv14936;
        v14939 = cv14939;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_11914': {
        const v19002 = v15659[1];
        undefined /* setApiDetails */;
        const v19087 = v19002[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        ;
        const v19678 = v19002[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '1')];
        const v19681 = v14935.locked;
        const v19682 = v19681 ? false : true;
        stdlib.assert(v19682, {
          at: './index.rsh:458:14:application',
          fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v19683 = v14933.A;
        const v19684 = v14933.B;
        const v19685 = v14935.protoFee;
        const v19686 = v14935.totFee;
        const v19690 = stdlib.add(v19684, v19087);
        const v19694 = stdlib.muldiv(v19087, v19683, v19690);
        const v19695 = stdlib.cast(false, true, v19087);
        const v19696 = stdlib.cast(false, true, v19686);
        const v19697 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v19696);
        const v19698 = stdlib.mul256(v19695, v19697);
        const v19699 = stdlib.cast(false, true, v19690);
        const v19700 = stdlib.mul256(v19699, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v19701 = stdlib.add256(v19700, v19698);
        const v19702 = stdlib.cast(false, true, v19683);
        const v19703 = stdlib.mul256(v19698, v19702);
        const v19704 = stdlib.div256(v19703, v19701);
        const v19705 = stdlib.cast(true, false, v19704);
        const v19708 = stdlib.sub(v19694, v19705);
        const v19711 = stdlib.mul(v19685, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
        const v19712 = stdlib.div(v19711, v19686);
        const v19715 = stdlib.muldiv(v19708, v19712, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
        const v19717 = stdlib.muldiv(v19087, v19685, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
        const v19721 = stdlib.muldiv(v19717, v19683, v19690);
        const v19722 = stdlib.gt(v19721, v19715);
        const v19723 = [v19717, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v19724 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19715];
        const v19725 = v19722 ? v19723 : v19724;
        const v19727 = v19725[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
        const v19728 = v19725[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
        const v19745 = stdlib.sub(v19683, v19705);
        const v19751 = stdlib.sub(v19745, v19728);
        const v19754 = stdlib.sub(v19690, v19727);
        const v19755 = {
          A: v19751,
          B: v19754
          };
        const v19756 = v14934.A;
        const v19760 = stdlib.add(v19756, v19728);
        const v19761 = v14934.B;
        const v19765 = stdlib.add(v19761, v19727);
        const v19766 = {
          A: v19760,
          B: v19765
          };
        const v19767 = stdlib.le(v19678, v19705);
        stdlib.assert(v19767, {
          at: './index.rsh:479:14:application',
          fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v19772 = stdlib.cast(false, true, v19684);
        const v19773 = stdlib.mul256(v19702, v19772);
        const v19774 = stdlib.cast(false, true, v19751);
        const v19775 = stdlib.cast(false, true, v19754);
        const v19776 = stdlib.mul256(v19774, v19775);
        const v19777 = stdlib.ge256(v19776, v19773);
        stdlib.assert(v19777, {
          at: './index.rsh:489:14:application',
          fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        const v19816 = {
          A: v19705,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn2.getOutput('Trader_swapBForA', 'v19816', ctc11, v19816);
        const v19826 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v19087
          };
        const v19828 = {
          A: v19751,
          B: v19754
          };
        null;
        const cv14931 = false;
        const cv14932 = v14932;
        const cv14933 = v19755;
        const cv14934 = v19766;
        const cv14935 = v14935;
        const cv14936 = v15660;
        const cv14939 = v14939;
        
        v14931 = cv14931;
        v14932 = cv14932;
        v14933 = cv14933;
        v14934 = cv14934;
        v14935 = cv14935;
        v14936 = cv14936;
        v14939 = cv14939;
        
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
  const {data: [v19864], secs: v19866, time: v19865, didSend: v14338, from: v19863 } = txn2;
  undefined /* setApiDetails */;
  ;
  const v19867 = null;
  await txn2.getOutput('Protocol_delete', 'v19867', ctc9, v19867);
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
  
  
  const [v14840, v14841, v14870, v14898, v14932, v14933, v14934, v14935] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7]);
  const v19862 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:543:3:application',
    fs: ['at ./index.rsh:543:3:application call to [unknown function] (defined at: ./index.rsh:543:3:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v14840, v14841, v14870, v14898, v14932, v14933, v14934, v14935, v19862],
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
      
      
      const {data: [v19864], secs: v19866, time: v19865, didSend: v14338, from: v19863 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v19867 = null;
      const v19868 = await txn1.getOutput('Protocol_delete', 'v19867', ctc1, v19867);
      
      stdlib.simTokenBurn(sim_r, v14898, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v14898);
      sim_r.txns.push({
        kind: 'halt',
        tok: v14841
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v14840
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
  const {data: [v19864], secs: v19866, time: v19865, didSend: v14338, from: v19863 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v19867 = null;
  const v19868 = await txn1.getOutput('Protocol_delete', 'v19867', ctc1, v19867);
  stdlib.protect(ctc1, await interact.out(v19864, v19868), {
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
    Protocol_harvest0_11914: ctc8,
    Provider_deposit0_11914: ctc10,
    Provider_withdraw0_11914: ctc11,
    Trader_swapAForB0_11914: ctc12,
    Trader_swapBForA0_11914: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc9, ctc3]);
  
  
  const [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v15031 = ctc.selfAddress();
  const v15033 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:516:17:application call to [unknown function] (defined at: ./index.rsh:516:17:function exp)', 'at ./index.rsh:393:19:application call to "runProtocol_harvest0_11914" (defined at: ./index.rsh:515:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v15035 = v15033[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15036 = v15035.protoFee;
  const v15037 = v15035.lpFee;
  const v15038 = v15035.totFee;
  const v15039 = stdlib.lt(v15036, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v15040 = stdlib.lt(v15037, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v15041 = v15039 ? v15040 : false;
  const v15042 = stdlib.add(v15037, v15036);
  const v15043 = stdlib.eq(v15038, v15042);
  const v15044 = v15041 ? v15043 : false;
  const v15045 = stdlib.lt(v15038, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v15046 = v15044 ? v15045 : false;
  const v15047 = stdlib.gt(v15038, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v15048 = v15046 ? v15047 : false;
  stdlib.assert(v15048, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:516:17:application call to [unknown function] (defined at: ./index.rsh:516:17:function exp)', 'at ./index.rsh:393:19:application call to "runProtocol_harvest0_11914" (defined at: ./index.rsh:515:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v15052 = v14935.protoAddr;
  const v15053 = stdlib.addressEq(v15031, v15052);
  stdlib.assert(v15053, {
    at: './index.rsh:420:14:application',
    fs: ['at ./index.rsh:516:41:application call to "doHarvest" (defined at: ./index.rsh:419:50:function exp)', 'at ./index.rsh:516:17:application call to [unknown function] (defined at: ./index.rsh:516:17:function exp)', 'at ./index.rsh:516:17:application call to [unknown function] (defined at: ./index.rsh:516:17:function exp)', 'at ./index.rsh:393:19:application call to "runProtocol_harvest0_11914" (defined at: ./index.rsh:515:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  (stdlib.le(await ctc.getBalance(), v14939) ? stdlib.checkedBigNumberify('./index.rsh:422:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v14939));
  const v15092 = ['Protocol_harvest0_11914', v15033];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939, v15092],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:385:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:517:25:decimal', stdlib.UInt_max, '0'), v14898], [stdlib.checkedBigNumberify('./index.rsh:517:28:decimal', stdlib.UInt_max, '0'), v14840], [stdlib.checkedBigNumberify('./index.rsh:517:31:decimal', stdlib.UInt_max, '0'), v14841]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn1;
      
      switch (v15659[0]) {
        case 'Protocol_harvest0_11914': {
          const v15662 = v15659[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          ;
          ;
          ;
          const v15830 = v15662[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '0')];
          const v15831 = v15662[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '1')];
          const v15832 = v14935.protoAddr;
          const v15833 = stdlib.addressEq(v15658, v15832);
          ;
          const v15834 = v15831.protoFee;
          const v15835 = v15831.lpFee;
          const v15836 = v15831.totFee;
          const v15837 = stdlib.lt(v15834, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
          const v15838 = stdlib.lt(v15835, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
          const v15839 = v15837 ? v15838 : false;
          const v15840 = stdlib.add(v15835, v15834);
          const v15841 = stdlib.eq(v15836, v15840);
          const v15842 = v15839 ? v15841 : false;
          const v15843 = stdlib.lt(v15836, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v15844 = v15842 ? v15843 : false;
          const v15845 = stdlib.gt(v15836, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v15846 = v15844 ? v15845 : false;
          ;
          const v15848 = (stdlib.le(await ctc.getBalance(), v14939) ? stdlib.checkedBigNumberify('./index.rsh:422:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v14939));
          const v15849 = stdlib.add(v15848, v14939);
          const v15851 = v14932.B;
          const v15854 = v15831.locked;
          const v15855 = stdlib.eq(v15851, stdlib.checkedBigNumberify('./index.rsh:425:56:decimal', stdlib.UInt_max, '0'));
          const v15856 = v15854 ? v15855 : false;
          const v15857 = v14933.A;
          const v15858 = v14933.B;
          const v15859 = stdlib.eq(v15857, stdlib.checkedBigNumberify('./index.rsh:406:37:decimal', stdlib.UInt_max, '0'));
          const v15860 = stdlib.eq(v15858, stdlib.checkedBigNumberify('./index.rsh:406:47:decimal', stdlib.UInt_max, '0'));
          const v15861 = v15859 ? v15860 : false;
          const v15862 = v15856 ? v15861 : false;
          const v15863 = v14934.A;
          const v15864 = v14934.B;
          const v15894 = stdlib.sub(v15849, v15848);
          sim_r.txns.push({
            amt: v15848,
            kind: 'from',
            to: v15830,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v15863,
            kind: 'from',
            to: v15830,
            tok: v14840
            });
          sim_r.txns.push({
            amt: v15864,
            kind: 'from',
            to: v15830,
            tok: v14841
            });
          const v15921 = {
            A: v15863,
            B: v15864
            };
          const v15922 = [v15921, v15848];
          const v15923 = await txn1.getOutput('Protocol_harvest', 'v15922', ctc14, v15922);
          
          const v15950 = v15831.protoAddr;
          const v15952 = {
            locked: v15854,
            lpFee: v15835,
            protoAddr: v15950,
            protoFee: v15834,
            totFee: v15836
            };
          null;
          const v23727 = v14932;
          const v23728 = v14933;
          const v23729 = v14929;
          const v23730 = v15831;
          const v23732 = v15894;
          if (v15862) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_11914': {
          const v16497 = v15659[1];
          
          break;
          }
        case 'Provider_withdraw0_11914': {
          const v17332 = v15659[1];
          
          break;
          }
        case 'Trader_swapAForB0_11914': {
          const v18167 = v15659[1];
          
          break;
          }
        case 'Trader_swapBForA0_11914': {
          const v19002 = v15659[1];
          
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
  const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn1;
  switch (v15659[0]) {
    case 'Protocol_harvest0_11914': {
      const v15662 = v15659[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      ;
      const v15830 = v15662[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '0')];
      const v15831 = v15662[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '1')];
      const v15832 = v14935.protoAddr;
      const v15833 = stdlib.addressEq(v15658, v15832);
      stdlib.assert(v15833, {
        at: './index.rsh:420:14:application',
        fs: ['at ./index.rsh:518:32:application call to "doHarvest" (defined at: ./index.rsh:419:50:function exp)', 'at ./index.rsh:518:20:application call to [unknown function] (defined at: ./index.rsh:518:20:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v15834 = v15831.protoFee;
      const v15835 = v15831.lpFee;
      const v15836 = v15831.totFee;
      const v15837 = stdlib.lt(v15834, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v15838 = stdlib.lt(v15835, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v15839 = v15837 ? v15838 : false;
      const v15840 = stdlib.add(v15835, v15834);
      const v15841 = stdlib.eq(v15836, v15840);
      const v15842 = v15839 ? v15841 : false;
      const v15843 = stdlib.lt(v15836, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v15844 = v15842 ? v15843 : false;
      const v15845 = stdlib.gt(v15836, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v15846 = v15844 ? v15845 : false;
      stdlib.assert(v15846, {
        at: './index.rsh:78:29:application',
        fs: ['at ./index.rsh:421:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:518:32:application call to "doHarvest" (defined at: ./index.rsh:419:50:function exp)', 'at ./index.rsh:518:20:application call to [unknown function] (defined at: ./index.rsh:518:20:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v15848 = (stdlib.le(await ctc.getBalance(), v14939) ? stdlib.checkedBigNumberify('./index.rsh:422:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v14939));
      const v15849 = stdlib.add(v15848, v14939);
      const v15851 = v14932.B;
      const v15854 = v15831.locked;
      const v15855 = stdlib.eq(v15851, stdlib.checkedBigNumberify('./index.rsh:425:56:decimal', stdlib.UInt_max, '0'));
      const v15856 = v15854 ? v15855 : false;
      const v15857 = v14933.A;
      const v15858 = v14933.B;
      const v15859 = stdlib.eq(v15857, stdlib.checkedBigNumberify('./index.rsh:406:37:decimal', stdlib.UInt_max, '0'));
      const v15860 = stdlib.eq(v15858, stdlib.checkedBigNumberify('./index.rsh:406:47:decimal', stdlib.UInt_max, '0'));
      const v15861 = v15859 ? v15860 : false;
      const v15862 = v15856 ? v15861 : false;
      const v15863 = v14934.A;
      const v15864 = v14934.B;
      const v15894 = stdlib.sub(v15849, v15848);
      ;
      ;
      ;
      const v15921 = {
        A: v15863,
        B: v15864
        };
      const v15922 = [v15921, v15848];
      const v15923 = await txn1.getOutput('Protocol_harvest', 'v15922', ctc14, v15922);
      if (v13482) {
        stdlib.protect(ctc1, await interact.out(v15662, v15923), {
          at: './index.rsh:515:10:application',
          fs: ['at ./index.rsh:515:10:application call to [unknown function] (defined at: ./index.rsh:515:10:function exp)', 'at ./index.rsh:428:12:application call to "k" (defined at: ./index.rsh:518:20:function exp)', 'at ./index.rsh:518:47:application call to [unknown function] (defined at: ./index.rsh:426:20:function exp)', 'at ./index.rsh:518:20:application call to [unknown function] (defined at: ./index.rsh:518:20:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v15950 = v15831.protoAddr;
      const v15952 = {
        locked: v15854,
        lpFee: v15835,
        protoAddr: v15950,
        protoFee: v15834,
        totFee: v15836
        };
      null;
      const v23727 = v14932;
      const v23728 = v14933;
      const v23729 = v14929;
      const v23730 = v15831;
      const v23732 = v15894;
      if (v15862) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_11914': {
      const v16497 = v15659[1];
      return;
      break;
      }
    case 'Provider_withdraw0_11914': {
      const v17332 = v15659[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_11914': {
      const v18167 = v15659[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_11914': {
      const v19002 = v15659[1];
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
    Protocol_harvest0_11914: ctc10,
    Provider_deposit0_11914: ctc9,
    Provider_withdraw0_11914: ctc11,
    Trader_swapAForB0_11914: ctc12,
    Trader_swapBForA0_11914: ctc12
    });
  
  
  const [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v15144 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:526:12:application call to [unknown function] (defined at: ./index.rsh:526:12:function exp)', 'at ./index.rsh:393:19:application call to "runProvider_deposit0_11914" (defined at: ./index.rsh:525:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v15145 = v15144[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15146 = v15145.A;
  const v15147 = v15145.B;
  const v15150 = v14935.locked;
  const v15151 = v15150 ? false : true;
  stdlib.assert(v15151, {
    at: './index.rsh:446:14:application',
    fs: ['at ./index.rsh:526:36:application call to "doDeposit" (defined at: ./index.rsh:445:37:function exp)', 'at ./index.rsh:526:12:application call to [unknown function] (defined at: ./index.rsh:526:12:function exp)', 'at ./index.rsh:526:12:application call to [unknown function] (defined at: ./index.rsh:526:12:function exp)', 'at ./index.rsh:393:19:application call to "runProvider_deposit0_11914" (defined at: ./index.rsh:525:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  const v15207 = ['Provider_deposit0_11914', v15144];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939, v15207],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:389:36:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:389:50:decimal', stdlib.UInt_max, '0'), v14898], [v15146, v14840], [v15147, v14841]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn1;
      
      switch (v15659[0]) {
        case 'Protocol_harvest0_11914': {
          const v15662 = v15659[1];
          
          break;
          }
        case 'Provider_deposit0_11914': {
          const v16497 = v15659[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v16521 = v16497[stdlib.checkedBigNumberify('./index.rsh:525:9:spread', stdlib.UInt_max, '0')];
          const v16522 = v16521.A;
          const v16523 = v16521.B;
          ;
          ;
          sim_r.txns.push({
            amt: v16522,
            kind: 'to',
            tok: v14840
            });
          sim_r.txns.push({
            amt: v16523,
            kind: 'to',
            tok: v14841
            });
          const v16795 = v14935.locked;
          const v16796 = v16795 ? false : true;
          ;
          let v16797;
          const v16800 = v14932.A;
          const v16801 = v14932.B;
          const v16803 = stdlib.eq(v16801, stdlib.checkedBigNumberify('./index.rsh:298:19:decimal', stdlib.UInt_max, '0'));
          if (v16803) {
            const v16804 = stdlib.cast(false, true, v16522);
            const v16805 = stdlib.cast(false, true, v16523);
            const v16806 = stdlib.mul256(v16804, v16805);
            const v16807 = stdlib.sqrt256(v16806);
            const v16808 = stdlib.cast(true, false, v16807);
            v16797 = v16808;
            }
          else {
            const v16809 = v14933.A;
            const v16810 = v14933.B;
            const v16814 = stdlib.muldiv(v16522, v16801, v16809);
            const v16818 = stdlib.muldiv(v16523, v16801, v16810);
            const v16819 = stdlib.lt(v16814, v16818);
            const v16820 = v16819 ? v16814 : v16818;
            v16797 = v16820;
            }
          const v16822 = v14933.A;
          const v16826 = stdlib.add(v16522, v16822);
          const v16828 = v14933.B;
          const v16832 = stdlib.add(v16523, v16828);
          const v16833 = {
            A: v16826,
            B: v16832
            };
          const v16840 = stdlib.sub(v16800, v16797);
          const v16844 = stdlib.add(v16801, v16797);
          const v16845 = {
            A: v16840,
            B: v16844
            };
          sim_r.txns.push({
            amt: v16797,
            kind: 'from',
            to: v15658,
            tok: v14898
            });
          const v16881 = await txn1.getOutput('Provider_deposit', 'v16797', ctc3, v16797);
          
          const v16891 = {
            A: v16522,
            B: v16523
            };
          const v16892 = {
            A: v16826,
            B: v16832
            };
          const v16893 = {
            A: v16840,
            B: v16844
            };
          null;
          const v23817 = v16845;
          const v23818 = v16833;
          const v23819 = v14934;
          const v23820 = v14935;
          const v23822 = v14939;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_11914': {
          const v17332 = v15659[1];
          
          break;
          }
        case 'Trader_swapAForB0_11914': {
          const v18167 = v15659[1];
          
          break;
          }
        case 'Trader_swapBForA0_11914': {
          const v19002 = v15659[1];
          
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
  const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn1;
  switch (v15659[0]) {
    case 'Protocol_harvest0_11914': {
      const v15662 = v15659[1];
      return;
      break;
      }
    case 'Provider_deposit0_11914': {
      const v16497 = v15659[1];
      undefined /* setApiDetails */;
      const v16521 = v16497[stdlib.checkedBigNumberify('./index.rsh:525:9:spread', stdlib.UInt_max, '0')];
      const v16522 = v16521.A;
      const v16523 = v16521.B;
      ;
      ;
      ;
      ;
      const v16795 = v14935.locked;
      const v16796 = v16795 ? false : true;
      stdlib.assert(v16796, {
        at: './index.rsh:446:14:application',
        fs: ['at ./index.rsh:528:27:application call to "doDeposit" (defined at: ./index.rsh:445:37:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      let v16797;
      const v16800 = v14932.A;
      const v16801 = v14932.B;
      const v16803 = stdlib.eq(v16801, stdlib.checkedBigNumberify('./index.rsh:298:19:decimal', stdlib.UInt_max, '0'));
      if (v16803) {
        const v16804 = stdlib.cast(false, true, v16522);
        const v16805 = stdlib.cast(false, true, v16523);
        const v16806 = stdlib.mul256(v16804, v16805);
        const v16807 = stdlib.sqrt256(v16806);
        const v16808 = stdlib.cast(true, false, v16807);
        v16797 = v16808;
        }
      else {
        const v16809 = v14933.A;
        const v16810 = v14933.B;
        const v16814 = stdlib.muldiv(v16522, v16801, v16809);
        const v16818 = stdlib.muldiv(v16523, v16801, v16810);
        const v16819 = stdlib.lt(v16814, v16818);
        const v16820 = v16819 ? v16814 : v16818;
        v16797 = v16820;
        }
      const v16822 = v14933.A;
      const v16826 = stdlib.add(v16522, v16822);
      const v16828 = v14933.B;
      const v16832 = stdlib.add(v16523, v16828);
      const v16833 = {
        A: v16826,
        B: v16832
        };
      const v16840 = stdlib.sub(v16800, v16797);
      const v16844 = stdlib.add(v16801, v16797);
      const v16845 = {
        A: v16840,
        B: v16844
        };
      ;
      const v16881 = await txn1.getOutput('Provider_deposit', 'v16797', ctc3, v16797);
      if (v13482) {
        stdlib.protect(ctc1, await interact.out(v16497, v16881), {
          at: './index.rsh:525:10:application',
          fs: ['at ./index.rsh:525:10:application call to [unknown function] (defined at: ./index.rsh:525:10:function exp)', 'at ./index.rsh:452:12:application call to "k" (defined at: ./index.rsh:528:15:function exp)', 'at ./index.rsh:528:37:application call to [unknown function] (defined at: ./index.rsh:450:20:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v16891 = {
        A: v16522,
        B: v16523
        };
      const v16892 = {
        A: v16826,
        B: v16832
        };
      const v16893 = {
        A: v16840,
        B: v16844
        };
      null;
      const v23817 = v16845;
      const v23818 = v16833;
      const v23819 = v14934;
      const v23820 = v14935;
      const v23822 = v14939;
      return;
      
      break;
      }
    case 'Provider_withdraw0_11914': {
      const v17332 = v15659[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_11914': {
      const v18167 = v15659[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_11914': {
      const v19002 = v15659[1];
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
    Protocol_harvest0_11914: ctc9,
    Provider_deposit0_11914: ctc11,
    Provider_withdraw0_11914: ctc8,
    Trader_swapAForB0_11914: ctc12,
    Trader_swapBForA0_11914: ctc12
    });
  
  
  const [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v15096 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:521:11:application call to [unknown function] (defined at: ./index.rsh:521:11:function exp)', 'at ./index.rsh:393:19:application call to "runProvider_withdraw0_11914" (defined at: ./index.rsh:520:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v15097 = v15096[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15140 = ['Provider_withdraw0_11914', v15096];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939, v15140],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:385:34:decimal', stdlib.UInt_max, '0'), [[v15097, v14898], [stdlib.checkedBigNumberify('./index.rsh:522:25:decimal', stdlib.UInt_max, '0'), v14840], [stdlib.checkedBigNumberify('./index.rsh:522:28:decimal', stdlib.UInt_max, '0'), v14841]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn1;
      
      switch (v15659[0]) {
        case 'Protocol_harvest0_11914': {
          const v15662 = v15659[1];
          
          break;
          }
        case 'Provider_deposit0_11914': {
          const v16497 = v15659[1];
          
          break;
          }
        case 'Provider_withdraw0_11914': {
          const v17332 = v15659[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v17380 = v17332[stdlib.checkedBigNumberify('./index.rsh:520:9:spread', stdlib.UInt_max, '0')];
          ;
          sim_r.txns.push({
            amt: v17380,
            kind: 'to',
            tok: v14898
            });
          ;
          ;
          const v17739 = v14932.A;
          const v17740 = v14932.B;
          const v17743 = v14933.A;
          const v17744 = v14933.B;
          const v17748 = stdlib.muldiv(v17380, v17743, v17740);
          const v17752 = stdlib.muldiv(v17380, v17744, v17740);
          const v17761 = stdlib.add(v17739, v17380);
          const v17764 = stdlib.sub(v17740, v17380);
          const v17765 = {
            A: v17761,
            B: v17764
            };
          const v17770 = stdlib.sub(v17743, v17748);
          const v17774 = stdlib.sub(v17744, v17752);
          const v17775 = {
            A: v17770,
            B: v17774
            };
          sim_r.txns.push({
            amt: v17748,
            kind: 'from',
            to: v15658,
            tok: v14840
            });
          sim_r.txns.push({
            amt: v17752,
            kind: 'from',
            to: v15658,
            tok: v14841
            });
          const v17826 = {
            A: v17748,
            B: v17752
            };
          const v17827 = await txn1.getOutput('Provider_withdraw', 'v17826', ctc10, v17826);
          
          const v17836 = {
            A: v17770,
            B: v17774
            };
          const v17837 = {
            A: v17761,
            B: v17764
            };
          null;
          const v23907 = v17765;
          const v23908 = v17775;
          const v23909 = v14934;
          const v23910 = v14935;
          const v23912 = v14939;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_11914': {
          const v18167 = v15659[1];
          
          break;
          }
        case 'Trader_swapBForA0_11914': {
          const v19002 = v15659[1];
          
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
  const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn1;
  switch (v15659[0]) {
    case 'Protocol_harvest0_11914': {
      const v15662 = v15659[1];
      return;
      break;
      }
    case 'Provider_deposit0_11914': {
      const v16497 = v15659[1];
      return;
      break;
      }
    case 'Provider_withdraw0_11914': {
      const v17332 = v15659[1];
      undefined /* setApiDetails */;
      const v17380 = v17332[stdlib.checkedBigNumberify('./index.rsh:520:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      ;
      const v17739 = v14932.A;
      const v17740 = v14932.B;
      const v17743 = v14933.A;
      const v17744 = v14933.B;
      const v17748 = stdlib.muldiv(v17380, v17743, v17740);
      const v17752 = stdlib.muldiv(v17380, v17744, v17740);
      const v17761 = stdlib.add(v17739, v17380);
      const v17764 = stdlib.sub(v17740, v17380);
      const v17765 = {
        A: v17761,
        B: v17764
        };
      const v17770 = stdlib.sub(v17743, v17748);
      const v17774 = stdlib.sub(v17744, v17752);
      const v17775 = {
        A: v17770,
        B: v17774
        };
      ;
      ;
      const v17826 = {
        A: v17748,
        B: v17752
        };
      const v17827 = await txn1.getOutput('Provider_withdraw', 'v17826', ctc10, v17826);
      if (v13482) {
        stdlib.protect(ctc1, await interact.out(v17332, v17827), {
          at: './index.rsh:520:10:application',
          fs: ['at ./index.rsh:520:10:application call to [unknown function] (defined at: ./index.rsh:520:10:function exp)', 'at ./index.rsh:440:12:application call to "k" (defined at: ./index.rsh:523:14:function exp)', 'at ./index.rsh:523:36:application call to [unknown function] (defined at: ./index.rsh:438:20:function exp)', 'at ./index.rsh:523:14:application call to [unknown function] (defined at: ./index.rsh:523:14:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v17836 = {
        A: v17770,
        B: v17774
        };
      const v17837 = {
        A: v17761,
        B: v17764
        };
      null;
      const v23907 = v17765;
      const v23908 = v17775;
      const v23909 = v14934;
      const v23910 = v14935;
      const v23912 = v14939;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_11914': {
      const v18167 = v15659[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_11914': {
      const v19002 = v15659[1];
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
    Protocol_harvest0_11914: ctc9,
    Provider_deposit0_11914: ctc11,
    Provider_withdraw0_11914: ctc12,
    Trader_swapAForB0_11914: ctc8,
    Trader_swapBForA0_11914: ctc8
    });
  
  
  const [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v15211 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapAForB0_11914" (defined at: ./index.rsh:530:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v15212 = v15211[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15213 = v15211[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15219 = v14935.locked;
  const v15220 = v15219 ? false : true;
  stdlib.assert(v15220, {
    at: './index.rsh:458:14:application',
    fs: ['at ./index.rsh:531:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapAForB0_11914" (defined at: ./index.rsh:530:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v15221 = v14933.A;
  const v15222 = v14933.B;
  const v15223 = v14935.protoFee;
  const v15224 = v14935.totFee;
  const v15228 = stdlib.add(v15221, v15212);
  const v15232 = stdlib.muldiv(v15212, v15222, v15228);
  const v15233 = stdlib.cast(false, true, v15212);
  const v15234 = stdlib.cast(false, true, v15224);
  const v15235 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15234);
  const v15236 = stdlib.mul256(v15233, v15235);
  const v15237 = stdlib.cast(false, true, v15228);
  const v15238 = stdlib.mul256(v15237, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v15239 = stdlib.add256(v15238, v15236);
  const v15240 = stdlib.cast(false, true, v15222);
  const v15241 = stdlib.mul256(v15236, v15240);
  const v15242 = stdlib.div256(v15241, v15239);
  const v15243 = stdlib.cast(true, false, v15242);
  const v15246 = stdlib.sub(v15232, v15243);
  const v15249 = stdlib.mul(v15223, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
  const v15250 = stdlib.div(v15249, v15224);
  const v15253 = stdlib.muldiv(v15246, v15250, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
  const v15255 = stdlib.muldiv(v15212, v15223, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
  const v15259 = stdlib.muldiv(v15255, v15222, v15228);
  const v15260 = stdlib.gt(v15259, v15253);
  const v15261 = [v15255, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v15262 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15253];
  const v15263 = v15260 ? v15261 : v15262;
  const v15265 = v15263[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
  const v15266 = v15263[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
  const v15285 = stdlib.sub(v15222, v15243);
  const v15289 = stdlib.sub(v15228, v15265);
  const v15292 = stdlib.sub(v15285, v15266);
  const v15305 = stdlib.le(v15213, v15243);
  stdlib.assert(v15305, {
    at: './index.rsh:479:14:application',
    fs: ['at ./index.rsh:531:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapAForB0_11914" (defined at: ./index.rsh:530:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v15308 = stdlib.cast(false, true, v15221);
  const v15310 = stdlib.mul256(v15308, v15240);
  const v15311 = stdlib.cast(false, true, v15289);
  const v15312 = stdlib.cast(false, true, v15292);
  const v15313 = stdlib.mul256(v15311, v15312);
  const v15314 = stdlib.ge256(v15313, v15310);
  stdlib.assert(v15314, {
    at: './index.rsh:489:14:application',
    fs: ['at ./index.rsh:531:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapAForB0_11914" (defined at: ./index.rsh:530:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v15319 = ['Trader_swapAForB0_11914', v15211];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939, v15319],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:385:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:532:25:decimal', stdlib.UInt_max, '0'), v14898], [v15212, v14840], [stdlib.checkedBigNumberify('./index.rsh:532:31:decimal', stdlib.UInt_max, '0'), v14841]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn1;
      
      switch (v15659[0]) {
        case 'Protocol_harvest0_11914': {
          const v15662 = v15659[1];
          
          break;
          }
        case 'Provider_deposit0_11914': {
          const v16497 = v15659[1];
          
          break;
          }
        case 'Provider_withdraw0_11914': {
          const v17332 = v15659[1];
          
          break;
          }
        case 'Trader_swapAForB0_11914': {
          const v18167 = v15659[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v18233 = v18167[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '0')];
          ;
          ;
          sim_r.txns.push({
            amt: v18233,
            kind: 'to',
            tok: v14840
            });
          ;
          const v18683 = v18167[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '1')];
          const v18686 = v14935.locked;
          const v18687 = v18686 ? false : true;
          ;
          const v18688 = v14933.A;
          const v18689 = v14933.B;
          const v18690 = v14935.protoFee;
          const v18691 = v14935.totFee;
          const v18695 = stdlib.add(v18688, v18233);
          const v18699 = stdlib.muldiv(v18233, v18689, v18695);
          const v18700 = stdlib.cast(false, true, v18233);
          const v18701 = stdlib.cast(false, true, v18691);
          const v18702 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18701);
          const v18703 = stdlib.mul256(v18700, v18702);
          const v18704 = stdlib.cast(false, true, v18695);
          const v18705 = stdlib.mul256(v18704, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v18706 = stdlib.add256(v18705, v18703);
          const v18707 = stdlib.cast(false, true, v18689);
          const v18708 = stdlib.mul256(v18703, v18707);
          const v18709 = stdlib.div256(v18708, v18706);
          const v18710 = stdlib.cast(true, false, v18709);
          const v18713 = stdlib.sub(v18699, v18710);
          const v18716 = stdlib.mul(v18690, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
          const v18717 = stdlib.div(v18716, v18691);
          const v18720 = stdlib.muldiv(v18713, v18717, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
          const v18722 = stdlib.muldiv(v18233, v18690, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
          const v18726 = stdlib.muldiv(v18722, v18689, v18695);
          const v18727 = stdlib.gt(v18726, v18720);
          const v18728 = [v18722, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v18729 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18720];
          const v18730 = v18727 ? v18728 : v18729;
          const v18732 = v18730[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
          const v18733 = v18730[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
          const v18752 = stdlib.sub(v18689, v18710);
          const v18756 = stdlib.sub(v18695, v18732);
          const v18759 = stdlib.sub(v18752, v18733);
          const v18760 = {
            A: v18756,
            B: v18759
            };
          const v18761 = v14934.A;
          const v18765 = stdlib.add(v18761, v18732);
          const v18766 = v14934.B;
          const v18770 = stdlib.add(v18766, v18733);
          const v18771 = {
            A: v18765,
            B: v18770
            };
          const v18772 = stdlib.le(v18683, v18710);
          ;
          const v18775 = stdlib.cast(false, true, v18688);
          const v18777 = stdlib.mul256(v18775, v18707);
          const v18778 = stdlib.cast(false, true, v18756);
          const v18779 = stdlib.cast(false, true, v18759);
          const v18780 = stdlib.mul256(v18778, v18779);
          const v18781 = stdlib.ge256(v18780, v18777);
          ;
          sim_r.txns.push({
            amt: v18710,
            kind: 'from',
            to: v15658,
            tok: v14841
            });
          const v18820 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v18710
            };
          const v18821 = await txn1.getOutput('Trader_swapAForB', 'v18820', ctc10, v18820);
          
          const v18830 = {
            A: v18233,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v18832 = {
            A: v18756,
            B: v18759
            };
          null;
          const v23997 = v14932;
          const v23998 = v18760;
          const v23999 = v18771;
          const v24000 = v14935;
          const v24002 = v14939;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_11914': {
          const v19002 = v15659[1];
          
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
  const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn1;
  switch (v15659[0]) {
    case 'Protocol_harvest0_11914': {
      const v15662 = v15659[1];
      return;
      break;
      }
    case 'Provider_deposit0_11914': {
      const v16497 = v15659[1];
      return;
      break;
      }
    case 'Provider_withdraw0_11914': {
      const v17332 = v15659[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_11914': {
      const v18167 = v15659[1];
      undefined /* setApiDetails */;
      const v18233 = v18167[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      ;
      const v18683 = v18167[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '1')];
      const v18686 = v14935.locked;
      const v18687 = v18686 ? false : true;
      stdlib.assert(v18687, {
        at: './index.rsh:458:14:application',
        fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v18688 = v14933.A;
      const v18689 = v14933.B;
      const v18690 = v14935.protoFee;
      const v18691 = v14935.totFee;
      const v18695 = stdlib.add(v18688, v18233);
      const v18699 = stdlib.muldiv(v18233, v18689, v18695);
      const v18700 = stdlib.cast(false, true, v18233);
      const v18701 = stdlib.cast(false, true, v18691);
      const v18702 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18701);
      const v18703 = stdlib.mul256(v18700, v18702);
      const v18704 = stdlib.cast(false, true, v18695);
      const v18705 = stdlib.mul256(v18704, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v18706 = stdlib.add256(v18705, v18703);
      const v18707 = stdlib.cast(false, true, v18689);
      const v18708 = stdlib.mul256(v18703, v18707);
      const v18709 = stdlib.div256(v18708, v18706);
      const v18710 = stdlib.cast(true, false, v18709);
      const v18713 = stdlib.sub(v18699, v18710);
      const v18716 = stdlib.mul(v18690, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
      const v18717 = stdlib.div(v18716, v18691);
      const v18720 = stdlib.muldiv(v18713, v18717, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
      const v18722 = stdlib.muldiv(v18233, v18690, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
      const v18726 = stdlib.muldiv(v18722, v18689, v18695);
      const v18727 = stdlib.gt(v18726, v18720);
      const v18728 = [v18722, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v18729 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18720];
      const v18730 = v18727 ? v18728 : v18729;
      const v18732 = v18730[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
      const v18733 = v18730[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
      const v18752 = stdlib.sub(v18689, v18710);
      const v18756 = stdlib.sub(v18695, v18732);
      const v18759 = stdlib.sub(v18752, v18733);
      const v18760 = {
        A: v18756,
        B: v18759
        };
      const v18761 = v14934.A;
      const v18765 = stdlib.add(v18761, v18732);
      const v18766 = v14934.B;
      const v18770 = stdlib.add(v18766, v18733);
      const v18771 = {
        A: v18765,
        B: v18770
        };
      const v18772 = stdlib.le(v18683, v18710);
      stdlib.assert(v18772, {
        at: './index.rsh:479:14:application',
        fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v18775 = stdlib.cast(false, true, v18688);
      const v18777 = stdlib.mul256(v18775, v18707);
      const v18778 = stdlib.cast(false, true, v18756);
      const v18779 = stdlib.cast(false, true, v18759);
      const v18780 = stdlib.mul256(v18778, v18779);
      const v18781 = stdlib.ge256(v18780, v18777);
      stdlib.assert(v18781, {
        at: './index.rsh:489:14:application',
        fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      ;
      const v18820 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v18710
        };
      const v18821 = await txn1.getOutput('Trader_swapAForB', 'v18820', ctc10, v18820);
      if (v13482) {
        stdlib.protect(ctc1, await interact.out(v18167, v18821), {
          at: './index.rsh:530:10:application',
          fs: ['at ./index.rsh:530:10:application call to [unknown function] (defined at: ./index.rsh:530:10:function exp)', 'at ./index.rsh:492:12:application call to "k" (defined at: ./index.rsh:533:18:function exp)', 'at ./index.rsh:533:54:application call to [unknown function] (defined at: ./index.rsh:490:20:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v18830 = {
        A: v18233,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v18832 = {
        A: v18756,
        B: v18759
        };
      null;
      const v23997 = v14932;
      const v23998 = v18760;
      const v23999 = v18771;
      const v24000 = v14935;
      const v24002 = v14939;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_11914': {
      const v19002 = v15659[1];
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
    Protocol_harvest0_11914: ctc9,
    Provider_deposit0_11914: ctc11,
    Provider_withdraw0_11914: ctc12,
    Trader_swapAForB0_11914: ctc8,
    Trader_swapBForA0_11914: ctc8
    });
  
  
  const [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v15323 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapBForA0_11914" (defined at: ./index.rsh:535:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v15324 = v15323[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15325 = v15323[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15331 = v14935.locked;
  const v15332 = v15331 ? false : true;
  stdlib.assert(v15332, {
    at: './index.rsh:458:14:application',
    fs: ['at ./index.rsh:536:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapBForA0_11914" (defined at: ./index.rsh:535:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v15333 = v14933.A;
  const v15334 = v14933.B;
  const v15335 = v14935.protoFee;
  const v15336 = v14935.totFee;
  const v15340 = stdlib.add(v15334, v15324);
  const v15344 = stdlib.muldiv(v15324, v15333, v15340);
  const v15345 = stdlib.cast(false, true, v15324);
  const v15346 = stdlib.cast(false, true, v15336);
  const v15347 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15346);
  const v15348 = stdlib.mul256(v15345, v15347);
  const v15349 = stdlib.cast(false, true, v15340);
  const v15350 = stdlib.mul256(v15349, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v15351 = stdlib.add256(v15350, v15348);
  const v15352 = stdlib.cast(false, true, v15333);
  const v15353 = stdlib.mul256(v15348, v15352);
  const v15354 = stdlib.div256(v15353, v15351);
  const v15355 = stdlib.cast(true, false, v15354);
  const v15358 = stdlib.sub(v15344, v15355);
  const v15361 = stdlib.mul(v15335, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
  const v15362 = stdlib.div(v15361, v15336);
  const v15365 = stdlib.muldiv(v15358, v15362, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
  const v15367 = stdlib.muldiv(v15324, v15335, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
  const v15371 = stdlib.muldiv(v15367, v15333, v15340);
  const v15372 = stdlib.gt(v15371, v15365);
  const v15373 = [v15367, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v15374 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15365];
  const v15375 = v15372 ? v15373 : v15374;
  const v15377 = v15375[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
  const v15378 = v15375[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
  const v15395 = stdlib.sub(v15333, v15355);
  const v15401 = stdlib.sub(v15395, v15378);
  const v15404 = stdlib.sub(v15340, v15377);
  const v15417 = stdlib.le(v15325, v15355);
  stdlib.assert(v15417, {
    at: './index.rsh:479:14:application',
    fs: ['at ./index.rsh:536:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapBForA0_11914" (defined at: ./index.rsh:535:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v15422 = stdlib.cast(false, true, v15334);
  const v15423 = stdlib.mul256(v15352, v15422);
  const v15424 = stdlib.cast(false, true, v15401);
  const v15425 = stdlib.cast(false, true, v15404);
  const v15426 = stdlib.mul256(v15424, v15425);
  const v15427 = stdlib.ge256(v15426, v15423);
  stdlib.assert(v15427, {
    at: './index.rsh:489:14:application',
    fs: ['at ./index.rsh:536:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapBForA0_11914" (defined at: ./index.rsh:535:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v15432 = ['Trader_swapBForA0_11914', v15323];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14840, v14841, v14870, v14898, v14929, v14932, v14933, v14934, v14935, v14939, v15432],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:385:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:537:25:decimal', stdlib.UInt_max, '0'), v14898], [stdlib.checkedBigNumberify('./index.rsh:537:28:decimal', stdlib.UInt_max, '0'), v14840], [v15324, v14841]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn1;
      
      switch (v15659[0]) {
        case 'Protocol_harvest0_11914': {
          const v15662 = v15659[1];
          
          break;
          }
        case 'Provider_deposit0_11914': {
          const v16497 = v15659[1];
          
          break;
          }
        case 'Provider_withdraw0_11914': {
          const v17332 = v15659[1];
          
          break;
          }
        case 'Trader_swapAForB0_11914': {
          const v18167 = v15659[1];
          
          break;
          }
        case 'Trader_swapBForA0_11914': {
          const v19002 = v15659[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v19087 = v19002[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '0')];
          ;
          ;
          ;
          sim_r.txns.push({
            amt: v19087,
            kind: 'to',
            tok: v14841
            });
          const v19678 = v19002[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '1')];
          const v19681 = v14935.locked;
          const v19682 = v19681 ? false : true;
          ;
          const v19683 = v14933.A;
          const v19684 = v14933.B;
          const v19685 = v14935.protoFee;
          const v19686 = v14935.totFee;
          const v19690 = stdlib.add(v19684, v19087);
          const v19694 = stdlib.muldiv(v19087, v19683, v19690);
          const v19695 = stdlib.cast(false, true, v19087);
          const v19696 = stdlib.cast(false, true, v19686);
          const v19697 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v19696);
          const v19698 = stdlib.mul256(v19695, v19697);
          const v19699 = stdlib.cast(false, true, v19690);
          const v19700 = stdlib.mul256(v19699, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v19701 = stdlib.add256(v19700, v19698);
          const v19702 = stdlib.cast(false, true, v19683);
          const v19703 = stdlib.mul256(v19698, v19702);
          const v19704 = stdlib.div256(v19703, v19701);
          const v19705 = stdlib.cast(true, false, v19704);
          const v19708 = stdlib.sub(v19694, v19705);
          const v19711 = stdlib.mul(v19685, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
          const v19712 = stdlib.div(v19711, v19686);
          const v19715 = stdlib.muldiv(v19708, v19712, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
          const v19717 = stdlib.muldiv(v19087, v19685, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
          const v19721 = stdlib.muldiv(v19717, v19683, v19690);
          const v19722 = stdlib.gt(v19721, v19715);
          const v19723 = [v19717, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v19724 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19715];
          const v19725 = v19722 ? v19723 : v19724;
          const v19727 = v19725[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
          const v19728 = v19725[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
          const v19745 = stdlib.sub(v19683, v19705);
          const v19751 = stdlib.sub(v19745, v19728);
          const v19754 = stdlib.sub(v19690, v19727);
          const v19755 = {
            A: v19751,
            B: v19754
            };
          const v19756 = v14934.A;
          const v19760 = stdlib.add(v19756, v19728);
          const v19761 = v14934.B;
          const v19765 = stdlib.add(v19761, v19727);
          const v19766 = {
            A: v19760,
            B: v19765
            };
          const v19767 = stdlib.le(v19678, v19705);
          ;
          const v19772 = stdlib.cast(false, true, v19684);
          const v19773 = stdlib.mul256(v19702, v19772);
          const v19774 = stdlib.cast(false, true, v19751);
          const v19775 = stdlib.cast(false, true, v19754);
          const v19776 = stdlib.mul256(v19774, v19775);
          const v19777 = stdlib.ge256(v19776, v19773);
          ;
          sim_r.txns.push({
            amt: v19705,
            kind: 'from',
            to: v15658,
            tok: v14840
            });
          const v19816 = {
            A: v19705,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v19817 = await txn1.getOutput('Trader_swapBForA', 'v19816', ctc10, v19816);
          
          const v19826 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v19087
            };
          const v19828 = {
            A: v19751,
            B: v19754
            };
          null;
          const v24087 = v14932;
          const v24088 = v19755;
          const v24089 = v19766;
          const v24090 = v14935;
          const v24092 = v14939;
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
  const {data: [v15659], secs: v15661, time: v15660, didSend: v13482, from: v15658 } = txn1;
  switch (v15659[0]) {
    case 'Protocol_harvest0_11914': {
      const v15662 = v15659[1];
      return;
      break;
      }
    case 'Provider_deposit0_11914': {
      const v16497 = v15659[1];
      return;
      break;
      }
    case 'Provider_withdraw0_11914': {
      const v17332 = v15659[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_11914': {
      const v18167 = v15659[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_11914': {
      const v19002 = v15659[1];
      undefined /* setApiDetails */;
      const v19087 = v19002[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      ;
      const v19678 = v19002[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '1')];
      const v19681 = v14935.locked;
      const v19682 = v19681 ? false : true;
      stdlib.assert(v19682, {
        at: './index.rsh:458:14:application',
        fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v19683 = v14933.A;
      const v19684 = v14933.B;
      const v19685 = v14935.protoFee;
      const v19686 = v14935.totFee;
      const v19690 = stdlib.add(v19684, v19087);
      const v19694 = stdlib.muldiv(v19087, v19683, v19690);
      const v19695 = stdlib.cast(false, true, v19087);
      const v19696 = stdlib.cast(false, true, v19686);
      const v19697 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v19696);
      const v19698 = stdlib.mul256(v19695, v19697);
      const v19699 = stdlib.cast(false, true, v19690);
      const v19700 = stdlib.mul256(v19699, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v19701 = stdlib.add256(v19700, v19698);
      const v19702 = stdlib.cast(false, true, v19683);
      const v19703 = stdlib.mul256(v19698, v19702);
      const v19704 = stdlib.div256(v19703, v19701);
      const v19705 = stdlib.cast(true, false, v19704);
      const v19708 = stdlib.sub(v19694, v19705);
      const v19711 = stdlib.mul(v19685, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
      const v19712 = stdlib.div(v19711, v19686);
      const v19715 = stdlib.muldiv(v19708, v19712, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
      const v19717 = stdlib.muldiv(v19087, v19685, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
      const v19721 = stdlib.muldiv(v19717, v19683, v19690);
      const v19722 = stdlib.gt(v19721, v19715);
      const v19723 = [v19717, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v19724 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19715];
      const v19725 = v19722 ? v19723 : v19724;
      const v19727 = v19725[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
      const v19728 = v19725[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
      const v19745 = stdlib.sub(v19683, v19705);
      const v19751 = stdlib.sub(v19745, v19728);
      const v19754 = stdlib.sub(v19690, v19727);
      const v19755 = {
        A: v19751,
        B: v19754
        };
      const v19756 = v14934.A;
      const v19760 = stdlib.add(v19756, v19728);
      const v19761 = v14934.B;
      const v19765 = stdlib.add(v19761, v19727);
      const v19766 = {
        A: v19760,
        B: v19765
        };
      const v19767 = stdlib.le(v19678, v19705);
      stdlib.assert(v19767, {
        at: './index.rsh:479:14:application',
        fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v19772 = stdlib.cast(false, true, v19684);
      const v19773 = stdlib.mul256(v19702, v19772);
      const v19774 = stdlib.cast(false, true, v19751);
      const v19775 = stdlib.cast(false, true, v19754);
      const v19776 = stdlib.mul256(v19774, v19775);
      const v19777 = stdlib.ge256(v19776, v19773);
      stdlib.assert(v19777, {
        at: './index.rsh:489:14:application',
        fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      ;
      const v19816 = {
        A: v19705,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v19817 = await txn1.getOutput('Trader_swapBForA', 'v19816', ctc10, v19816);
      if (v13482) {
        stdlib.protect(ctc1, await interact.out(v19002, v19817), {
          at: './index.rsh:535:10:application',
          fs: ['at ./index.rsh:535:10:application call to [unknown function] (defined at: ./index.rsh:535:10:function exp)', 'at ./index.rsh:492:12:application call to "k" (defined at: ./index.rsh:538:18:function exp)', 'at ./index.rsh:538:55:application call to [unknown function] (defined at: ./index.rsh:490:20:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v19826 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v19087
        };
      const v19828 = {
        A: v19751,
        B: v19754
        };
      null;
      const v24087 = v14932;
      const v24088 = v19755;
      const v24089 = v19766;
      const v24090 = v14935;
      const v24092 = v14939;
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
  appApproval: `BiAVAAgYBAFkEAIDoI0GSZBOteDwwQeZ66OHCtmUrKAKuPeR5Qf89bu8Au6I6cQCGf///////////wEGJgUBAQEAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAQ81lT6IjUAMRhBC7gqZEkiWzUBI1s1AjYaABdJQQGuIjUEIQQ1BkkhDAxAAVBJIQ0MQAEgSSEODEAA/yEOEkQ0AUklDEAAeSUSRClkKGRQSTUDSUpXMRA1/1dBEDX+V1EQNf1XYTk1/DQDVxkINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXAAg0/FcICFA0/FcQCFA0/FcYIFA0/Fc4AVBQNP1XAAg0/VcICFBQNANXCAhQNANXEAlQNQdCCvwhBxJEKWQoZFBJNQNJSlchEDX/VzEQNf5XQRA1/VdROTX8NANXGQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cICFA0A1cQCVA1B0IKgiENEkQ2GgE2GgJQNf+AAQM0/1AhCq9QQgCYSSEPDEAAGiEPEkQ2GgE2GgJQNf+AAQQ0/1AhCq9QQgB3IQwSRCpCBxNJIRAMQAAvSSERDEAAFCEREkQ2GgE2GgJQNf8pNP9QQgBNIRASRDYaATX/KDT/UCEKr1BCADmB5PzqgQISRDYaATX/gAECNP9QgVGvUEIAHzYaAhc1BDYaAzYaARdJIQcMQAcsSSEIDEAGpyEIEkQlNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSiJbNf8jWzX+VxAJNf0hEls1/FchEDX7VzEQNfpXQRA1+VdREDX4V2E5NfeBmgFbNfZJNQU19YAER2hHHzT1ULA09SJVSSEHDEAD80khCAxAAwxJJQxAAYQlEkQ09VcBEDX0NPQiWzXzNPM0/ogJbzT3VzgBFxRENPkiWzXyNPkjWzXxNPciWzXwNPchBls17zTxNPMINe4krzTzFlArJK807xZQoYgJVqOICVI17SSvNPIWUDXsNO007KOICUAkrzTuFlAro4gJNTTtoIgJL6KICStJSiEGWyISRCNbIhJEIlsiEkQkWzXrNPM08h007pc06wk08CEFCzTvCh0hBZc16jTzNPAdIQuXNekjrzTqFlA06RYjr1A06TTyHTTulzTqDU1JNegiWzXnNOgjWzXmNPI06wk05gk15TTuNOcJNeQ09CNbNOsORCSvNOUWUCSvNOQWUKOICKQ07CSvNPEWUKOICJinRLEisgE067ISJbIQMQCyFDT/shGzNOsWI69QNeOACAAAAAAAAE1oNONQsDTjNQcnBDEAUCOvNPMWUFA041A05RY05BZQULA0/zT+NP00/DT7IjT6NOUWNOQWUDT4Ils05ggWNPgjWzTnCBZQNPcyBjT2QgcBSDT1VwEQNfQ09CJbNfM08zT/iAftNPdXOAEXFEQ0+SJbNfI0+SNbNfE09yJbNfA09yEGWzXvNPI08wg17iSvNPMWUCskrzTvFlChiAfUo4gH0DXtJK808RZQNew07TTso4gHviSvNO4WUCujiAezNO2giAetoogHqUlKIQZbIhJEI1siEkQiWyISRCRbNes08zTxHTTulzTrCTTwIQULNO8KHSEFlzXqNPM08B0hC5c16SOvNOoWUDTpFiOvUDTpNPEdNO6XNOoNTUk16CJbNec06CNbNeY07jTnCTXlNPE06wk05gk15DT0I1s06w5EJK805RZQJK805BZQo4gHIiSvNPIWUDTso4gHFqdEsSKyATTrshIlshAxALIUNP6yEbMjrzTrFlA144AIAAAAAAAASYQ041CwNOM1BycEMQBQNPMWI69QUDTjUDTlFjTkFlBQsDT/NP40/TT8NPsiNPo05RY05BZQNPgiWzTnCBY0+CNbNOYIFlA09zIGNPZCBX9INPVXAQg19DT0FzXzNPM0/IgGbDT6I1s18jT5Ils18TT5I1s18DTzNPEdNPKXNe808zTwHTTylzXuNPoiWzTzCDXtNPI08wk17DTxNO8JNes08DTuCTXqsSKyATTvshIlshAxALIUNP+yEbOxIrIBNO6yEiWyEDEAshQ0/rIRszTvFjTuFlA16YAIAAAAAAAARaI06VCwNOk1B4AEHNSuXzEAUDTzFlA06VA06xY06hZQUDTtFjTsFlBQsDT/NP40/TT8NPsiNO0WNOwWUDTrFjTqFlA0+DT3MgY09kIEn0khBAxAARxINPVXARA19DT0STXzIls18jTzI1s18TTyNP+IBXs08TT+iAV0NPdXOAEXFEQ0+iNbSTXvIhJBAC0krzTyFlAkrzTxFlCjiAVwlogFbElKIQZbIhJEI1siEkQiWyISRCRbNfBCACI08jTvHTT5IluXNe408TTvHTT5I1uXSTXtNO5JNO0MTTXwNPI0+SJbCDXuNPE0+SNbCDXtNPoiWzTwCTXsNO808Ag167EisgE08LISJbIQMQCyFDT8shGzgAgAAAAAAABBnTTwFlCwNPAWNQeABN4bKfUxAFA08hY08RZQUDTwFlA07hY07RZQUDTsFjTrFlBQsDT/NP40/TT8NPsiNOwWNOsWUDTuFjTtFlA0+DT3MgY09kIDfEg09VcBWTX0NPRXACA18zT0VyA5NfIxADT3VxggEkQ08iJbNfE08iNbNfA08iEGWzXvNPEhBQw08CEFDBA07zTwNPEIEhA07yEFDBA07yINEEQyCmAyCngJNPYJNe408lc4ARc17TT4Ils17DT4I1s167EisgE07rIIIQSyEDTzsgezsSKyATTsshIlshA087IUNP+yEbOxIrIBNOuyEiWyEDTzshQ0/rIRs4AIAAAAAAAAPjI07BY06xZQNO4WUFCwNOwWNOsWUDTuFlA1B4AEVq11PDTxFjTwFlA07xZQNPJXGCBQNO0WUQcIUFCwNP80/jT9NPw0+zTtNPojWyISEDT5IlsiEjT5I1siEhAQNPo0+TT7NPIyBjTuNPYINO4JQgJXSCEHNAESRDQESSISTDQCEhFEKWQoZFBJNQMhEls1/0k1BTX+gAQlPLfXNP5QsIAIAAAAAAAATZuwKjUHsSKyASEIshA0/7Ihs7EisgEishIlshAyCbIVMgqyFDQDI1uyEbOxIrIBIrISJbIQMgmyFTIKshQ0AyJbshGzQgJkIhJEIjQBEkQ0BEkiEkw0AhIRREk1BUlKSSJbNf8jWzX+VxAgNf1XMAg1/IE4WzX7gASmZOJhNP8WUDT+FlA0/VA0/FA0+xZQsCEJiAJyNP80/hNEIQmIAmexIrIBIrISJbIQMgqyFDT/shGzIQmIAk+xIrIBIrISJbIQMgqyFDT+shGzIRMhCw1EKDT/FlA1+oAFYXBwSUQ0+xZQAzX4MgpgMgp4CRY197EisgEhFLIQNPuyGIAESVoKaLIaMRgWsho0+rIaNP4WshqzMgpgMgp4CTT3FwkWtwA+VwQAUDX5gAgAAAAAAAA6FzT5ULA0+Uk1+CJbNfc0+FcIOUk19iJbNfU09iNbNfQ09iEGWzXzNPUhBQw09CEFDBA08zT0NPUIEhA08yEFDBA08yINEEQiNPcSRCEJiAGFsSKyASEIshAhE7IiIRSyIzT8siU0/bImgWCvsicyA7IoMgqyKbO0PDXygAgAAAAAAAA6MTTyFlCwNPI18SI18CI17zT/FjT+FlAjNO8LI1gXNe408TTuEjTwSU018DTvIQQISTXvIQcMQP/XNPAURCEGrzXvNP80/jT6NPE07yKAEP//////////AAAAAAAAAAA070k09jIGNPdCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ0+UEANDT0FjT1FlA09lA09xZQNPpQNPtQNPxQNP1QKUsBVwB/ZyhLAVd/C2dIIQc1ATIGNQJCAFc09BY09RZQNPZQNPcWUDT4UDT6UDT7UDT8UDT9UDT/FlApSwFXAH9nKEsBV38jZ0glNQEyBjUCQgAdMRmBBRJEsSKyASKyCCEEshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSEECDIEEkQxFhJEIQRDMRkiEkRC/90iNQEiNQJC/8E0AElKIQQINQA4BzIKEkQ4ECEEEkQ4CBJEiTQASUpJIQQINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJSRWBIEwJr0xQiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 162,
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
                "internalType": "address payable",
                "name": "v14840",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v14841",
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
                "name": "v14842",
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
                "name": "v14843",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v14844",
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
                "internalType": "address payable",
                "name": "v14840",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v14841",
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
                "name": "v14842",
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
                "name": "v14843",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v14844",
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
                "name": "v19864",
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
                    "name": "_Protocol_harvest0_11914",
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
                    "name": "_Provider_deposit0_11914",
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
                    "name": "_Provider_withdraw0_11914",
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
                    "name": "_Trader_swapAForB0_11914",
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
                    "name": "_Trader_swapBForA0_11914",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v15659",
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
    "name": "_reach_oe_v14871",
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
    "name": "_reach_oe_v14897",
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
    "name": "_reach_oe_v15922",
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
    "name": "_reach_oe_v16797",
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
    "name": "_reach_oe_v17826",
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
    "name": "_reach_oe_v18820",
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
    "name": "_reach_oe_v19816",
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
    "name": "_reach_oe_v19867",
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
                "name": "v19864",
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
                    "name": "_Protocol_harvest0_11914",
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
                    "name": "_Provider_deposit0_11914",
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
                    "name": "_Provider_withdraw0_11914",
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
                    "name": "_Trader_swapAForB0_11914",
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
                    "name": "_Trader_swapBForA0_11914",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v15659",
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
  Bytecode: `0x608060405260405162005e6338038062005e63833981016040819052620000269162000eb8565b60008055436003556200003862000a17565b6040805133815283516020808301919091528085015180516001600160a01b0390811684860152918101518216606080850191909152818501515160808086019190915290820151516001600160c01b03191660a085015201511660c082015290517f66095a5d4ca377fa5a0b722e6c172d5ca90f298b536389b9d6a157cb6c4a67a29181900360e00190a1620001058260200151602001516001600160a01b03168360200151600001516001600160a01b031614620000fa576001620000fd565b60005b60086200075a565b62000113341560096200075a565b620001216001600a6200075a565b8051600190526020820180515182516001600160a01b03909116604090910152515160009062000152903062000785565b6200015e919062000fcb565b6101c082015260208083015101516000906200017b903062000785565b62000187919062000fcb565b6102008201526200019a60004762000fcb565b6101a082015280516020808401510151604051600092633b02a71760e01b92620001cb923092919060240162001028565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460200151608001516001600160a01b03166000846040516200022791906200108d565b60006040518083038185875af1925050503d806000811462000266576040519150601f19603f3d011682016040523d82523d6000602084013e6200026b565b606091505b5090925090506200027f8282600d62000869565b506101c084015160208601515162000298903062000785565b620002a4919062000fcb565b6101e08501819052620002ba9015600b6200075a565b6102008401516020808701510151620002d4903062000785565b620002e0919062000fcb565b6102208501819052620002f69015600c6200075a565b6101a084015162000308904762000fcb565b60208086015191909152815162000327919083018101908301620010ab565b6020808601805190910191909152516040808601829052517f77e164f6a4ab37a535157511c7c24686c6724d9970906faa9cda3945f0c7291f916200036c9162001177565b60405180910390a1620004226064856040015160200151600001511062000395576000620003a6565b606485604001516020015160200151105b620003b3576000620003de565b60408501516020908101518051910151620003cf91906200119b565b85604001516020015160400151145b620003eb576000620003fc565b606485604001516020015160400151105b620004095760006200041a565b600085604001516020015160400151115b600e6200075a565b604084015151620004369015600f6200075a565b606084018051600019905251600060209182018190526080860180518290528051830182905251604090810182905260a08701519190915286820151810151518151928301520160408051601f198184030181529082905260208781015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260808881015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a089015151602084015291016040516020818303038152906040526000196012604051620005219062000af9565b6200053296959493929190620011e4565b604051809103906000f0801580156200054f573d6000803e3d6000fd5b506001600160a01b031660c0850181905260e085018190526040517f2c597fd56cba0a39de01d448d155f0977ac076797f0336f8b92a277dacbefb199162000597916200124f565b60405180910390a16020858101805151610100870180516001600160a01b039283169052915183015191519116910152600061014085018190525b60028110156200065d578461010001518160028110620005f657620005f662001263565b60200201516001600160a01b031661016086015261014085015162000639578461016001516001600160a01b03168560e001516001600160a01b03161462000640565b8461014001515b151561014086015280620006548162001279565b915050620005d2565b50610140840151151561012085018190526200068b906200068057600162000683565b60005b60106200075a565b61018084018051600090819052905160200152620006a862000b07565b602080870180515183516001600160a01b03918216905290518201518351908216908301528651835160409081019190915260e088015184519216606092830152610180880180518551608090810191909152858501805160009052848b0151815187015282518151850152915182519094019390935290880180519093015181519092019190915280514360a090910152905151905160c001526200074e81620008af565b5050505050506200146b565b81620007815760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000806000846001600160a01b031660006370a0823160e01b86604051602401620007b191906200124f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051620007f191906200108d565b60006040518083038185875af1925050503d806000811462000830576040519150601f19603f3d011682016040523d82523d6000602084013e62000835565b606091505b509092509050620008498282600662000869565b508080602001905181019062000860919062001297565b95945050505050565b606083156200087a575081620008a8565b8251156200088b5782518084602001fd5b60405163100960cb60e01b81526004810183905260240162000778565b9392505050565b602081015151156200097257620008c562000b30565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151818501528451606090810151909316838501528185018051830151608080870191909152815183015160a087015281519094015160c0860152519092015160e084015260026000554360015590516200094791839101620012c0565b604051602081830303815290604052600290805190602001906200096d92919062000b95565b505050565b6200097c62000c24565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152828601805184015160a0870152805183015160c08088019190915281519095015160e087015280519091015161010086015251909201516101208401526004600055436001559051620009479183910162001358565b60405180610240016040528062000a2d62000ca5565b815260200162000a3c62000cc7565b815260200162000a4b62000cc7565b815260200162000a5a62000ce3565b81526040805160608101825260008082526020828101829052928201529101908152604080516020818101909252600081529101908152600060208201819052604082015260600162000aac62000cfd565b815260006020820181905260408201819052606082015260800162000ad062000ce3565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6110298062004e3a83390190565b604051806040016040528062000b1c62000d1b565b815260200162000b2b62000d52565b905290565b60408051610100810182526000808252602082015290810162000b5262000ca5565b81526000602082015260400162000b6862000ce3565b815260200162000b7762000ce3565b815260200162000b8662000ce3565b815260200162000b2b62000db1565b82805462000ba3906200142e565b90600052602060002090601f01602090048101928262000bc7576000855562000c12565b82601f1062000be257805160ff191683800117855562000c12565b8280016001018555821562000c12579182015b8281111562000c1257825182559160200191906001019062000bf5565b5062000c2092915062000deb565b5090565b60408051610140810182526000808252602082015290810162000c4662000ca5565b81526000602082015260400162000c5c62000ce3565b815260200162000c6b62000ce3565b815260200162000c7a62000ce3565b815260200162000c8962000ce3565b815260200162000c9862000db1565b8152602001600081525090565b6040805160608101909152806000815260006020820181905260409091015290565b60405180604001604052806000815260200162000b2b62000db1565b604051806040016040528060008152602001600081525090565b60405180604001604052806002906020820280368337509192915050565b6040805160a0810182526000808252602082015290810162000d3c62000ca5565b81526000602082015260400162000b2b62000ce3565b6040518060e0016040528060001515815260200162000d7062000ce3565b815260200162000d7f62000ce3565b815260200162000d8e62000ce3565b815260200162000d9d62000db1565b815260200160008152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b5b8082111562000c20576000815560010162000dec565b604080519081016001600160401b038111828210171562000e3357634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b038111828210171562000e3357634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b038111828210171562000e3357634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811462000eb357600080fd5b919050565b600081830360c081121562000ecc57600080fd5b62000ed662000e02565b8351815260a0601f198301121562000eed57600080fd5b62000ef762000e39565b62000f056020860162000e9b565b815262000f156040860162000e9b565b60208201526020605f198401121562000f2d57600080fd5b62000f3762000e6a565b6060860151815260408201526020607f198401121562000f5657600080fd5b62000f6062000e6a565b60808601519093506001600160c01b03198116811462000f7f57600080fd5b83526060810183905262000f9660a0860162000e9b565b60808201526020820152949350505050565b6001600160a01b03169052565b634e487b7160e01b600052601160045260246000fd5b60008282101562000fe05762000fe062000fb5565b500390565b8051600281106200100657634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03848116825260a082019062001049602084018662000fe5565b808416608084015250949350505050565b60005b83811015620010775781810151838201526020016200105d565b8381111562001087576000848401525b50505050565b60008251620010a18184602087016200105a565b9190910192915050565b600060a08284031215620010be57600080fd5b60405160a081016001600160401b0381118282101715620010ef57634e487b7160e01b600052604160045260246000fd5b80604052508251815260208301516020820152604083015160408201526200111a6060840162000e9b565b6060820152608083015180151581146200113357600080fd5b60808201529392505050565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260208083015160c083019162001194908401826200113f565b5092915050565b60008219821115620011b157620011b162000fb5565b500190565b60008151808452620011d08160208601602086016200105a565b601f01601f19169290920160200192915050565b60c081526000620011f960c0830189620011b6565b82810360208401526200120d8189620011b6565b90508281036040840152620012238188620011b6565b90508281036060840152620012398187620011b6565b6080840195909552505060a00152949350505050565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052603260045260246000fd5b600060001982141562001290576200129062000fb5565b5060010190565b600060208284031215620012aa57600080fd5b5051919050565b80518252602090810151910152565b81516001600160a01b03908116825260208084015182169083015260408084015161022084019291620012f69085018262000fe5565b5060608401511660a083015260808301516200131660c0840182620012b1565b5060a08301516200132c610100840182620012b1565b5060c083015162001342610140840182620012b1565b5060e0830151620011946101808401826200113f565b6000610280820190506200136e82845162000fa8565b602083015162001382602084018262000fa8565b50604083015162001397604084018262000fe5565b506060830151620013ac60a084018262000fa8565b506080830151620013c160c0840182620012b1565b5060a0830151610100620013d881850183620012b1565b60c08501519150620013ef610140850183620012b1565b60e0850151915062001406610180850183620012b1565b84015190506200141b6101c08401826200113f565b5061012083015161026083015292915050565b600181811c908216806200144357607f821691505b602082108114156200146557634e487b7160e01b600052602260045260246000fd5b50919050565b6139bf806200147b6000396000f3fe6080604052600436106100985760003560e01c80630e36a72c146100a15780631e93b0f1146100ca57806332020fec146100e95780633e59bac4146101095780634012e02e1461011c5780634272dbc21461013e5780638323075714610151578063842463da14610166578063ab53f2c61461017e578063c8867ae9146101a1578063d02b6307146101b4578063dc8d714f146101c757005b3661009f57005b005b6100b46100af366004612ea2565b6101da565b6040516100c19190612ee7565b60405180910390f35b3480156100d657600080fd5b506003545b6040519081526020016100c1565b6100fc6100f7366004612f0a565b610249565b6040516100c19190612f23565b61009f610117366004612f31565b6102a7565b34801561012857600080fd5b506101316102cb565b6040516100c19190612fd2565b6100db61014c36600461308b565b610625565b34801561015d57600080fd5b506001546100db565b61016e61067c565b60405190151581526020016100c1565b34801561018a57600080fd5b506101936106b3565b6040516100c19291906130d3565b6100fc6101af36600461310d565b610750565b61009f6101c236600461312f565b6107b5565b6100fc6101d536600461310d565b6107d5565b6101e26125d6565b6101ea6125f6565b6101f2612645565b6101fa61265f565b6040805180820182526001600160a01b038816815260208082018890528381019190915260008352815180820190925282825283015261023a828461083a565b50506020015190505b92915050565b6102516126a2565b6102596125f6565b610261612645565b61026961265f565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261029b828461083a565b50506060015192915050565b6102af6125f6565b6102c76102c136849003840184613142565b82611e97565b5050565b6102d36126bc565b60026000541415610475576000600280546102ed906131c7565b80601f0160208091040260200160405190810160405280929190818152602001828054610319906131c7565b80156103665780601f1061033b57610100808354040283529160200191610366565b820191906000526020600020905b81548152906001019060200180831161034957829003601f168201915b505050505080602001905181019061037e9190613315565b905061038861271a565b608080830180515183515251602090810151835182015260a08085018051518386018051919091529051830151815184015260e0860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935188015183519015159089015260c0808b01805151838c01805191909152905189015181518a0152828c01518b8b0180519188169091529a518b518a015295518a5184015292518951909101529251875190960195909552928601518551931692909101919091529092015181519092019190915251919050565b600460005414156106165760006002805461048f906131c7565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb906131c7565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b505050505080602001905181019061052091906133c1565b905061052a61271a565b60a080830180515183515251602090810151835182015260c080850180515183860180519190915290518301518151840152610100860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935160809081015184519015159082015260e08b01805151838c01805191909152905189015181518a0152828c0151828c0180519188169091529a518b518a015295518a51840152925189519091015292518751909101529286015185519316929093019190915292015181519092019190915251919050565b6106226000600761202e565b90565b600061062f6125f6565b610637612645565b61063f61265f565b604080516020808201835287825283830191909152600183528151808201909252828252830152610670828461083a565b50506040015192915050565b60006106866125f6565b61068e612761565b60408051602080820190925260008152908201526106ac8183611e97565b5051919050565b6000606060005460028080546106c8906131c7565b80601f01602080910402602001604051908101604052809291908181526020018280546106f4906131c7565b80156107415780601f1061071657610100808354040283529160200191610741565b820191906000526020600020905b81548152906001019060200180831161072457829003601f168201915b50505050509050915091509091565b6107586126a2565b6107606125f6565b610768612645565b61077061265f565b604080518082018252878152602080820188905260808401919091526003835281518082019092528282528301526107a8828461083a565b5050608001519392505050565b6107bd6125f6565b6102c76107cf36849003840184613520565b8261083a565b6107dd6126a2565b6107e56125f6565b6107ed612645565b6107f561265f565b604080518082018252878152602080820188905260a084019190915260048352815180820190925282825283015261082d828461083a565b505060a001519392505050565b61084a600460005414603161202e565b815161086590158061085e57508251600154145b603261202e565b600080805560028054610877906131c7565b80601f01602080910402602001604051908101604052809291908181526020018280546108a3906131c7565b80156108f05780601f106108c5576101008083540402835291602001916108f0565b820191906000526020600020905b8154815290600101906020018083116108d357829003601f168201915b505050505080602001905181019061090891906133c1565b905061091261278b565b7f0c36ecdcbe3fc67e26de932e0ef4b0434fa375ec7e902fe67403914b10d86be133856040516109439291906135f3565b60405180910390a1600060208501515151600481111561096557610965612f88565b1415610d415760208085015151015181526109823415601461202e565b61099c6109953384606001516000612054565b601561202e565b6109b66109af3384600001516000612054565b601661202e565b6109d06109c93384602001516000612054565b601761202e565b6109f8826101000151606001516001600160a01b0316336001600160a01b031614601861202e565b80516020015151610a8890606411610a11576000610a22565b606482600001516020015160200151105b610a2d576000610a50565b81516020908101518051910151610a4491906136b9565b82516020015160400151145b610a5b576000610a69565b815160200151604001516064115b610a74576000610a81565b8151602001516040015115155b601961202e565b61012082015147908110610aab57610120830151610aa690826136d1565b610aae565b60005b602083018190528251516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610aed573d6000803e3d6000fd5b50825182515160e085015151610b0492919061206c565b610b2383602001518360000151600001518560e001516020015161206c565b60e08301805151604080850180519290925291516020908101518251820152905160608501805191909152818501518151909201919091525190517f5e40bf45ffded1b9c2ac223da3e36bb216313e823f209b264639469843f179e391610b8991612ee7565b60405180910390a160608083015160208087019190915283518101515160808086018051929092528551830151830151825184015285518301516040908101518351820152865184015185015183516001600160a01b0390911695019490945285519092015182015181519015159201919091525190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91610c2b916136e8565b60405180910390a1610c3b612a12565b835181516001600160a01b0391821690526020808601518351908316908201526040808701518451909101526060808701518451931692019190915260808086015183518201528451909101510151610c95576000610ca0565b60a084015160200151155b610cab576000610cc8565b60c08401515115610cbd576000610cc8565b60c084015160200151155b6020808301805192151590925260a080870151835183015260c08701518351604001526080808801518451606001528651830151845190910152915143920191909152830151610120850151610d1e90826136b9565b610d2891906136d1565b602082015160c00152610d3a81612080565b5050611e91565b6001602085015151516004811115610d5b57610d5b612f88565b1415611127576020840151516040015160a0820152610d7c3415601a61202e565b610d96610d8f3384606001516000612054565b601b61202e565b815160a08201515151610db691610daf91339190612054565b601c61202e565b610ddb610dd43384602001518460a001516000015160200151612054565b601d61202e565b610dfd82610100015160800151610df3576001610df6565b60005b601e61202e565b60a082015160200151610e335760a08101515160208101519051610e2991610e24916136f6565b6121db565b60c0820152610ebd565b60c08201515160a08084015160200151908301515151610e5391906136f6565b610e5d9190613715565b60e082015260c082015160209081015160a0808501518301519084015151909201519091610e8a916136f6565b610e949190613715565b610100820181905260e082015110610eb157806101000151610eb7565b8060e001515b60c08201525b60c08201515160a08201515151610ed491906136b9565b61012082015260c082015160209081015160a08301515190910151610ef991906136b9565b61014082019081526101208201516101608301805191909152905190516020015260c081015160a083015151610f2f91906136d1565b61018082015260c081015160a083015160200151610f4d91906136b9565b6101a082019081526101808201516101c083018051919091529051905160200152606082015160c0820151610f849190339061206c565b7f152999b82a2e1c68211b0730014717b6d8b20cf2ee3956e7b2b5ef99c5a553358160c00151604051610fb991815260200190565b60405180910390a160c08101805160408086019190915260a08301805151516101e0850180519190915290515160209081015182518201526101208501516102008601805191909152610140860151815183015261018086015161022087018051919091526101a0870151815190930192909252915193519151905192517feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb9461106894339491939192613737565b60405180910390a1611078612a12565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855194169381019390935260808087015185518201528285018051600090526101c087015181519094019390935261016086015183519092019190915260e086015182519093019290925261010085015181519092019190915280514360a090910152610120840151905160c0015261112181612080565b50611e91565b600260208501515151600481111561114157611141612f88565b141561149057602084015151606001516102408201526111633415601f61202e565b61118561117e33846060015184610240015160000151612054565b602061202e565b61119f6111983384600001516000612054565b602161202e565b6111b96111b23384602001516000612054565b602261202e565b60a08201516020015160c083015151610240830151516111d991906136f6565b6111e39190613715565b61026082015260a082015160209081015160c0840151909101516102408301515161120e91906136f6565b6112189190613715565b6102808201526102408101515160a08301515161123591906136b9565b6102a08201526102408101515160a08301516020015161125591906136d1565b6102c082019081526102a08201516102e08301805191909152905190516020015261026081015160c08301515161128c91906136d1565b61030082015261028081015160c0830151602001516112ab91906136d1565b61032082019081526103008201516103408301805191909152905190516020015281516102608201516112e09190339061206c565b6112f482602001513383610280015161206c565b6102608101516103608201805191909152610280820151815160200152516040517f39cafd4d8bc171c93adef89fcfe42465dad894d6203e1206a3f86c2fba171fe39161134091612f23565b60405180910390a1610360810180516060850152610300820151610380830180519190915261032083015181516020908101919091526102a08401516103a085018051919091526102c0850151815190920191909152610240840151519251915190516040517f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef855946113d794339491939092613775565b60405180910390a16113e7612a12565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855194169381019390935260808087015185518201528285018051600090526102e087015181519094019390935261034086015183519092019190915260e086015182519093019290925261010085015181519092019190915280514360a090910152610120840151905160c0015261112181612080565b60036020850151515160048111156114aa576114aa612f88565b141561199257602084015151608001516103c08201526114cc3415602361202e565b6114e66114df3384606001516000612054565b602461202e565b611508611501338460000151846103c0015160000151612054565b602561202e565b61152261151b3384602001516000612054565b602661202e565b6115448261010001516080015161153a57600161153d565b60005b602761202e565b6103c08101515160c08301515161155b91906136b9565b6103e082015261010082015160400151611577906127106136d1565b6103c08201515161158891906136f6565b610400820181905260c0830151602001516104208301526103e08201516115b290612710906136f6565b6115bc91906136b9565b8161042001518261040001516115d291906136f6565b6115dc9190613715565b61044082015261010082015160408101519051606491906115fe9083906136f6565b6116089190613715565b6104408301516103e084015160c0860151602001516103c08601515161162e91906136f6565b6116389190613715565b61164291906136d1565b61164c91906136f6565b6116569190613715565b610460820152610100820151516103c08201515161271091611677916136f6565b6116819190613715565b61048082018181526104a083018051929092529051600060209182018190526104c08401805191909152610460840180519151830191909152516103e084015160c086015190920151925190926116d7916136f6565b6116e19190613715565b116116f157806104c001516116f8565b806104a001515b6104e08201819052516103e082015161171191906136d1565b81610500018181525050806104e00151602001518161044001518360c001516020015161173e91906136d1565b61174891906136d1565b6105208201908152610500820151610540830180519190915290519051602001526104e08101515160e08301515161178091906136b9565b610560820151526104e081015160209081015160e0840151909101516117a691906136b9565b81610560015160200181815250506117d0816104400151826103c00151602001511115602861202e565b61042081015160c083015151611808916117e9916136f6565b8261052001518361050001516117ff91906136f6565b1015602961202e565b61181c82602001513383610440015161206c565b6105808101805160009052610440820151815160200152516040517fa0e7884a0594939b984d28d789ff8efc6863373079c773a9662c85c8b00a02509161186291612f23565b60405180910390a16105808101805160808501526103c0820151516105a08301805191909152805160006020918201526105008401516105c0850180519190915261052085015181519092019190915290519151905160405160008051602061396a833981519152936118db93339391929091906137a7565b60405180910390a16118eb612a12565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a080890151825190950194909452610540870151815190930192909252610560860151825190940193909352610100860151815190930192909252815143910152610120840151905160c0015261112181612080565b60046020850151515160048111156119ac576119ac612f88565b1415611e915760208401515160a001516105e08201526119ce3415602a61202e565b6119e86119e13384606001516000612054565b602b61202e565b611a026119fb3384600001516000612054565b602c61202e565b611a24611a1d338460200151846105e0015160000151612054565b602d61202e565b611a4682610100015160800151611a3c576001611a3f565b60005b602e61202e565b6105e08101515160c083015160200151611a6091906136b9565b61060082015261010082015160400151611a7c906127106136d1565b6105e082015151611a8d91906136f6565b610620820181905260c083015151610640830152610600820151611ab490612710906136f6565b611abe91906136b9565b816106400151826106200151611ad491906136f6565b611ade9190613715565b6106608201526101008201516040810151905160649190611b009083906136f6565b611b0a9190613715565b61066083015161060084015160c0860151516105e086015151611b2d91906136f6565b611b379190613715565b611b4191906136d1565b611b4b91906136f6565b611b559190613715565b610680820152610100820151516105e08201515161271091611b76916136f6565b611b809190613715565b6106a082018181526106c083018051929092529051600060209182018190526106e08401805191909152610680840180519151909201525161060083015160c085015151925191929091611bd491906136f6565b611bde9190613715565b11611bee57806106e00151611bf5565b806106c001515b61070082018190526020015161066082015160c084015151611c1791906136d1565b611c2191906136d1565b61072082015261070081015151610600820151611c3e91906136d1565b6107408201908152610720820151610760830180519190915290519051602090810191909152610700820151015160e083015151611c7c91906136b9565b610780820151526107008101515160e083015160200151611c9d91906136b9565b8161078001516020018181525050611cc7816106600151826105e00151602001511115602f61202e565b611d028260c0015160200151826106400151611ce391906136f6565b826107400151836107200151611cf991906136f6565b1015603061202e565b611d1682600001513383610660015161206c565b6106608101516107a0820180519190915280516000602090910152516040517f4592af926ad66f8e226e703153ed8e84e85881ac64f1cf9a7ad2f735e75c36ad91611d6091612f23565b60405180910390a16107a08101805160a08501526107c082018051600090526105e08301515181516020908101919091526107208401516107e0850180519190915261074085015181519092019190915290519151905160405160008051602061396a83398151915293611dda93339391929091906137a7565b60405180910390a1611dea612a12565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a080890151825190950194909452610760870151815190930192909252610780860151825190940193909352610100860151815190930192909252815143910152610120840151905160c0015261112181612080565b50505050565b611ea7600260005414601261202e565b8151611ec2901580611ebb57508251600154145b601361202e565b600080805560028054611ed4906131c7565b80601f0160208091040260200160405190810160405280929190818152602001828054611f00906131c7565b8015611f4d5780601f10611f2257610100808354040283529160200191611f4d565b820191906000526020600020905b815481529060010190602001808311611f3057829003601f168201915b5050505050806020019051810190611f659190613315565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a1611fbd3415601161202e565b604051600081527f93ce58df01d60038f287ac883d2a2e1268a89aa7bcea2179844c3e4ad56905629060200160405180910390a16000825260608101516120069060001961224b565b612013816060015161225e565b6000808055600181905561202990600290612a32565b505050565b816102c75760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061206283853085612270565b90505b9392505050565b61207783838361234a565b61202957600080fd5b6020810151511561213757612093612a6c565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151818501528451606090810151909316838501528185018051830151608080870191909152815183015160a087015281519094015160c0860152519092015160e08401526002600055436001559051612113918391016137de565b60405160208183030381529060405260029080519060200190612029929190612ac7565b61213f612b4b565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152828601805184015160a0870152805183015160c08088019190915281519095015160e0870152805190910151610100860152519092015161012084015260046000554360015590516121139183910161386c565b50565b6000600382111561223c57508060006121f5600283613715565b6122009060016136b9565b90505b818110156122365790508060028161221b8186613715565b61222591906136b9565b61222f9190613715565b9050612203565b50919050565b8115612246575060015b919050565b612255828261241b565b6102c757600080fd5b612267816124f6565b6121d857600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916122d791613930565b60006040518083038185875af1925050503d8060008114612314576040519150601f19603f3d011682016040523d82523d6000602084013e612319565b606091505b509150915061232a8282600161259b565b508080602001905181019061233f919061394c565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916123a991613930565b60006040518083038185875af1925050503d80600081146123e6576040519150601f19603f3d011682016040523d82523d6000602084013e6123eb565b606091505b50915091506123fc8282600261259b565b5080806020019051810190612411919061394c565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b8660405160240161244791815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516124859190613930565b60006040518083038185875af1925050503d80600081146124c2576040519150601f19603f3d011682016040523d82523d6000602084013e6124c7565b606091505b50915091506124d88282600361259b565b50808060200190518101906124ed919061394c565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b03861691839161253d91613930565b60006040518083038185875af1925050503d806000811461257a576040519150601f19603f3d011682016040523d82523d6000602084013e61257f565b606091505b50915091506125908282600461259b565b506001949350505050565b606083156125aa575081612065565b8251156125ba5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161204b565b60405180604001604052806125e96126a2565b8152602001600081525090565b6040518060c001604052806000151581526020016126126125d6565b8152602001600081526020016126266126a2565b81526020016126336126a2565b81526020016126406126a2565b905290565b604051806040016040528060008152602001612640612bb3565b6040805160c08101909152806000815260200161267a612bc6565b8152602001612687612be9565b81526020016126266040518060200160405280600081525090565b604051806040016040528060008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016126df6126a2565b81526020016126ec6126a2565b81526020016126f9612bfc565b81526020016127066126a2565b815260006020820152604001612640612c36565b6040518060a0016040528061272d6126a2565b815260200161273a6126a2565b8152602001612747612bfc565b81526020016127546126a2565b81526020016126406126bc565b60405180604001604052806000815260200161264060405180602001604052806000151581525090565b60405180610800016040528061279f612bc6565b8152602001600081526020016127b36126a2565b81526020016127c06125d6565b81526020016127cd612bfc565b81526020016127da612be9565b8152602001600081526020016000815260200160008152602001600081526020016000815260200161280a6126a2565b815260200160008152602001600081526020016128256126a2565b81526020016128326126a2565b815260200161283f6126a2565b815260200161284c6126a2565b81526020016128676040518060200160405280600081525090565b8152602001600081526020016000815260200160008152602001600081526020016128906126a2565b815260200160008152602001600081526020016128ab6126a2565b81526020016128b86126a2565b81526020016128c56126a2565b81526020016128d26126a2565b81526020016128df6126a2565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016129166126a2565b81526020016129236126a2565b81526020016129306126a2565b8152602001600081526020016000815260200161294b6126a2565b81526020016129586126a2565b81526020016129656126a2565b81526020016129726126a2565b815260200161297f6126a2565b815260200161298c6126a2565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016129c36126a2565b81526020016129d06126a2565b81526020016129dd6126a2565b815260200160008152602001600081526020016129f86126a2565b8152602001612a056126a2565b81526020016126266126a2565b6040518060400160405280612a25612c58565b8152602001612640612c8b565b508054612a3e906131c7565b6000825580601f10612a4e575050565b601f0160209004906000526020600020908101906121d89190612ce2565b604080516101008101825260008082526020820152908101612a8c612c36565b815260006020820152604001612aa06126a2565b8152602001612aad6126a2565b8152602001612aba6126a2565b8152602001612640612bfc565b828054612ad3906131c7565b90600052602060002090601f016020900481019282612af55760008555612b3b565b82601f10612b0e57805160ff1916838001178555612b3b565b82800160010185558215612b3b579182015b82811115612b3b578251825591602001919060010190612b20565b50612b47929150612ce2565b5090565b604080516101408101825260008082526020820152908101612b6b612c36565b815260006020820152604001612b7f6126a2565b8152602001612b8c6126a2565b8152602001612b996126a2565b8152602001612ba66126a2565b81526020016125e9612bfc565b604051806020016040528061264061265f565b604051806040016040528060006001600160a01b03168152602001612640612bfc565b60405180602001604052806126406126a2565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040805160608101909152806000815260006020820181905260409091015290565b6040805160a08101825260008082526020820152908101612c77612c36565b8152600060208201526040016126406126a2565b6040518060e00160405280600015158152602001612ca76126a2565b8152602001612cb46126a2565b8152602001612cc16126a2565b8152602001612cce612bfc565b815260200160008152602001600081525090565b5b80821115612b475760008155600101612ce3565b6001600160a01b03811681146121d857600080fd5b60405160a081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b80151581146121d857600080fd5b600060a08284031215612e5457600080fd5b612e5c612d0c565b90508135815260208201356020820152604082013560408201526060820135612e8481612cf7565b60608201526080820135612e9781612e34565b608082015292915050565b60008060c08385031215612eb557600080fd5b8235612ec081612cf7565b9150612ecf8460208501612e42565b90509250929050565b80518252602090810151910152565b6000606082019050612efa828451612ed8565b6020830151604083015292915050565b600060208284031215612f1c57600080fd5b5035919050565b604081016102438284612ed8565b60006040828403121561223657600080fd5b6001600160a01b03169052565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b805160028110612fb057612fb0612f88565b82526020818101511515908301526040908101516001600160a01b0316910152565b81516001600160a01b03908116825260208084015161020084019291612ffa90850182612ed8565b50604084015161300d6060850182612ed8565b50606084015161302060a0850182612f50565b506080840151613034610140850182612ed8565b5060a08401511661018083015260c08301516130546101a0840182612f9e565b5092915050565b60006040828403121561306d57600080fd5b613075612d42565b9050813581526020820135602082015292915050565b60006040828403121561309d57600080fd5b612065838361305b565b60005b838110156130c25781810151838201526020016130aa565b83811115611e915750506000910152565b82815260406020820152600082518060408401526130f88160608501602087016130a7565b601f01601f1916919091016060019392505050565b6000806040838503121561312057600080fd5b50508035926020909101359150565b60006101e0828403121561223657600080fd5b6000818303604081121561315557600080fd5b604080519081016001600160401b038111828210171561318557634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561319e57600080fd5b6131a6612d72565b915060208401356131b681612e34565b825260208101919091529392505050565b600181811c908216806131db57607f821691505b6020821081141561223657634e487b7160e01b600052602260045260246000fd5b805161224681612cf7565b60006060828403121561321957600080fd5b604051606081016001600160401b038111828210171561324957634e487b7160e01b600052604160045260246000fd5b806040525080915082516002811061326057600080fd5b8152602083015161327081612e34565b6020820152604083015161328381612cf7565b6040919091015292915050565b6000604082840312156132a257600080fd5b6132aa612d42565b9050815181526020820151602082015292915050565b600060a082840312156132d257600080fd5b6132da612d0c565b9050815181526020820151602082015260408201516040820152606082015161330281612cf7565b60608201526080820151612e9781612e34565b6000610220828403121561332857600080fd5b613330612da2565b613339836131fc565b8152613347602084016131fc565b60208201526133598460408501613207565b604082015261336a60a084016131fc565b606082015261337c8460c08501613290565b608082015261338f846101008501613290565b60a08201526133a2846101408501613290565b60c08201526133b58461018085016132c0565b60e08201529392505050565b600061028082840312156133d457600080fd5b6133dc612dd3565b6133e5836131fc565b81526133f3602084016131fc565b60208201526134058460408501613207565b604082015261341660a084016131fc565b60608201526134288460c08501613290565b608082015261010061343c85828601613290565b60a083015261344f856101408601613290565b60c0830152613462856101808601613290565b60e0830152613475856101c086016132c0565b90820152610260929092015161012083015250919050565b600060c0828403121561349f57600080fd5b6134a7612d42565b905081356134b481612cf7565b81526134c38360208401612e42565b602082015292915050565b6000604082840312156134e057600080fd5b6134e8612d72565b90506134f4838361305b565b815292915050565b60006020828403121561350e57600080fd5b613516612d72565b9135825250919050565b60008183036101e081121561353457600080fd5b61353c612d42565b833581526101c0601f198301121561355357600080fd5b61355b612d72565b9150613565612e04565b60208501356005811061357757600080fd5b8152613586866040870161348d565b60208201526135998661010087016134ce565b60408201526135ac8661014087016134fc565b60608201526135bf86610160870161305b565b60808201526135d2866101a0870161305b565b60a0820152825260208101919091529392505050565b6102c7828251612ed8565b6001600160a01b038381168252825160208084019190915283015151805161020084019291906005811061362957613629612f88565b6040850152602081810151805190931660608601529190910151906136516080850183612f50565b604081015191506136666101208501836135e8565b60608101515161016085015260808101519150613687610180850183612ed8565b60a00151905061369b6101c0840182612ed8565b509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156136cc576136cc6136a3565b500190565b6000828210156136e3576136e36136a3565b500390565b60a081016102438284612f50565b6000816000190483118215151615613710576137106136a3565b500290565b60008261373257634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b038616815261010081016137556020830187612ed8565b8460608301526137686080830185612ed8565b61241160c0830184612ed8565b6001600160a01b038616815260208101859052610100810161379a6040830186612ed8565b6137686080830185612ed8565b6001600160a01b038516815260e081016137c46020830186612ed8565b6137d16060830185612ed8565b6124ed60a0830184612ed8565b81516001600160a01b0390811682526020808401518216908301526040808401516102208401929161381290850182612f9e565b5060608401511660a0830152608083015161383060c0840182612ed8565b5060a0830151613844610100840182612ed8565b5060c0830151613858610140840182612ed8565b5060e0830151613054610180840182612f50565b600061028082019050613880828451612f43565b60208301516138926020840182612f43565b5060408301516138a56040840182612f9e565b5060608301516138b860a0840182612f43565b5060808301516138cb60c0840182612ed8565b5060a08301516101006138e081850183612ed8565b60c085015191506138f5610140850183612ed8565b60e0850151915061390a610180850183612ed8565b840151905061391d6101c0840182612f50565b5061012083015161026083015292915050565b600082516139428184602087016130a7565b9190910192915050565b60006020828403121561395e57600080fd5b815161206581612e3456fe70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a2646970667358221220cb94fd7e2d396986ab04a5f0c4d7a7416291c05063539af737984582baf4f33064736f6c634300080c003360806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220235d4e83541991bf455eb67cc28fe33153e16bfafa2af9b9986ec3282fe2bdcd64736f6c634300080c0033`,
  BytecodeLen: 24163,
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
