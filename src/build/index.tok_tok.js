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
    computeMint_: ((_v11554, _v11555, _v11556, _v11557 ) => {
        const v11554 = stdlib.protect(ctc1, _v11554, null);
        const v11555 = stdlib.protect(ctc0, _v11555, null);
        const v11556 = stdlib.protect(ctc1, _v11556, null);
        const v11557 = stdlib.protect(ctc1, _v11557, null);
      
      const v11558 = v11554.A;
      const v11559 = v11554.B;
      const v11560 = v11556.A;
      const v11561 = v11556.B;
      const v11563 = v11557.B;
      let v11564;
      const v11571 = stdlib.eq(v11563, stdlib.checkedBigNumberify('288:19:decimal', stdlib.UInt_max, '0'));
      if (v11571) {
        const v11572 = stdlib.cast(false, true, v11558);
        const v11573 = stdlib.cast(false, true, v11559);
        const v11574 = stdlib.cast(false, true, v11555);
        const v11576 = stdlib.mul256(v11574, v11574);
        const v11577 = stdlib.mul256(v11572, v11573);
        const v11579 = stdlib.gt256(v11572, v11573);
        const v11580 = v11579 ? v11572 : v11573;
        const v11581 = stdlib.mul256(v11580, v11580);
        const v11582 = stdlib.le256(v11577, v11576);
        stdlib.assert(v11582, {
          at: '297:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt lo',
          who: 'Module'
          });
        const v11583 = stdlib.le256(v11576, v11581);
        stdlib.assert(v11583, {
          at: '298:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt hi',
          who: 'Module'
          });
        v11564 = v11555;
        }
      else {
        const v11586 = stdlib.eq(v11555, stdlib.checkedBigNumberify('302:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v11586, {
          at: '302:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt 0',
          who: 'Module'
          });
        const v11593 = stdlib.muldiv(v11558, v11563, v11560);
        const v11600 = stdlib.muldiv(v11559, v11563, v11561);
        const v11602 = stdlib.lt(v11593, v11600);
        const v11603 = v11602 ? v11593 : v11600;
        v11564 = v11603;
        }
      
      return v11564;}),
    computeSwap_: ((_v11604, _v11605, _v11606, _v11607 ) => {
        const v11604 = stdlib.protect(ctc2, _v11604, null);
        const v11605 = stdlib.protect(ctc1, _v11605, null);
        const v11606 = stdlib.protect(ctc1, _v11606, null);
        const v11607 = stdlib.protect(ctc4, _v11607, null);
      
      const v11608 = v11605.A;
      const v11609 = v11605.B;
      const v11610 = v11606.A;
      const v11611 = v11606.B;
      const v11613 = v11607.protoFee;
      const v11614 = v11607.lpFee;
      const v11615 = v11607.totFee;
      const v11616 = stdlib.lt(v11613, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v11617 = stdlib.lt(v11614, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v11618 = v11616 ? v11617 : false;
      const v11619 = stdlib.add(v11614, v11613);
      const v11620 = stdlib.eq(v11615, v11619);
      const v11621 = v11618 ? v11620 : false;
      const v11622 = stdlib.lt(v11615, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v11623 = v11621 ? v11622 : false;
      const v11624 = stdlib.gt(v11615, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v11625 = v11623 ? v11624 : false;
      stdlib.assert(v11625, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v11627 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v11627, {
        at: '279:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v11628;
      if (v11604) {
        const v11633 = stdlib.eq(v11609, stdlib.checkedBigNumberify('./index.rsh:266:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v11633, {
          at: './index.rsh:266:10:application',
          fs: ['at 280:31:application call to "computeSwap" (defined at: ./index.rsh:262:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v11642 = stdlib.add(v11610, v11608);
        const v11650 = stdlib.muldiv(v11608, v11611, v11642);
        const v11651 = stdlib.cast(false, true, v11608);
        const v11652 = stdlib.cast(false, true, v11615);
        const v11653 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v11652);
        const v11654 = stdlib.mul256(v11651, v11653);
        const v11655 = stdlib.cast(false, true, v11642);
        const v11656 = stdlib.mul256(v11655, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v11657 = stdlib.add256(v11656, v11654);
        const v11658 = stdlib.cast(false, true, v11611);
        const v11659 = stdlib.mul256(v11654, v11658);
        const v11660 = stdlib.div256(v11659, v11657);
        const v11661 = stdlib.cast(true, false, v11660);
        const v11666 = stdlib.sub(v11650, v11661);
        const v11670 = stdlib.mul(v11613, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
        const v11671 = stdlib.div(v11670, v11615);
        const v11677 = stdlib.muldiv(v11666, v11671, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
        const v11682 = stdlib.muldiv(v11608, v11613, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
        const v11690 = stdlib.muldiv(v11682, v11611, v11642);
        const v11691 = stdlib.gt(v11690, v11677);
        const v11692 = [v11682, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v11693 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11677];
        const v11694 = v11691 ? v11692 : v11693;
        const v11696 = v11694[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
        const v11697 = v11694[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
        const v11699 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v11661
          };
        const v11701 = {
          A: v11696,
          B: v11697
          };
        const v11702 = [v11699, v11701];
        v11628 = v11702;
        }
      else {
        const v11703 = stdlib.eq(v11608, stdlib.checkedBigNumberify('./index.rsh:271:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v11703, {
          at: './index.rsh:271:10:application',
          fs: ['at 280:31:application call to "computeSwap" (defined at: ./index.rsh:262:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v11712 = stdlib.add(v11611, v11609);
        const v11720 = stdlib.muldiv(v11609, v11610, v11712);
        const v11721 = stdlib.cast(false, true, v11609);
        const v11722 = stdlib.cast(false, true, v11615);
        const v11723 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v11722);
        const v11724 = stdlib.mul256(v11721, v11723);
        const v11725 = stdlib.cast(false, true, v11712);
        const v11726 = stdlib.mul256(v11725, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v11727 = stdlib.add256(v11726, v11724);
        const v11728 = stdlib.cast(false, true, v11610);
        const v11729 = stdlib.mul256(v11724, v11728);
        const v11730 = stdlib.div256(v11729, v11727);
        const v11731 = stdlib.cast(true, false, v11730);
        const v11736 = stdlib.sub(v11720, v11731);
        const v11740 = stdlib.mul(v11613, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
        const v11741 = stdlib.div(v11740, v11615);
        const v11747 = stdlib.muldiv(v11736, v11741, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
        const v11752 = stdlib.muldiv(v11609, v11613, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
        const v11760 = stdlib.muldiv(v11752, v11610, v11712);
        const v11761 = stdlib.gt(v11760, v11747);
        const v11762 = [v11752, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v11763 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11747];
        const v11764 = v11761 ? v11762 : v11763;
        const v11766 = v11764[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
        const v11767 = v11764[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
        const v11769 = {
          A: v11731,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v11771 = {
          A: v11767,
          B: v11766
          };
        const v11772 = [v11769, v11771];
        v11628 = v11772;
        }
      const v11773 = v11628[stdlib.checkedBigNumberify('280:11:array', stdlib.UInt_max, '0')];
      const v11774 = v11628[stdlib.checkedBigNumberify('280:11:array', stdlib.UInt_max, '1')];
      const v11775 = v11773.A;
      const v11776 = v11773.B;
      const v11777 = v11774.A;
      const v11778 = v11774.B;
      const v11779 = {
        A: v11775,
        B: v11776
        };
      const v11780 = {
        A: v11777,
        B: v11778
        };
      const v11781 = [v11779, v11780];
      
      return v11781;})
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
            const [v14994, v14995, v15024, v15052, v15086, v15087, v15088, v15089] = svs;
            return (await ((async () => {
              
              const v20052 = v15086.A;
              const v20053 = v15086.B;
              const v20054 = v15087.A;
              const v20055 = v15087.B;
              const v20056 = v15089.protoFee;
              const v20057 = v15089.lpFee;
              const v20058 = v15089.totFee;
              const v20059 = v15089.protoAddr;
              const v20060 = v15089.locked;
              const v20061 = v15088.A;
              const v20062 = v15088.B;
              const v20063 = {
                A: v20052,
                B: v20053
                };
              const v20064 = {
                A: v20054,
                B: v20055
                };
              const v20065 = {
                locked: v20060,
                lpFee: v20057,
                protoAddr: v20059,
                protoFee: v20056,
                totFee: v20058
                };
              const v20066 = {
                A: v20061,
                B: v20062
                };
              const v20068 = {
                liquidityToken: v15052,
                lptBals: v20063,
                poolBals: v20064,
                protoBals: v20066,
                protoInfo: v20065,
                tokA: v15024,
                tokB: v14995
                };
              
              return v20068;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093] = svs;
            return (await ((async () => {
              
              const v15162 = v15086.A;
              const v15163 = v15086.B;
              const v15164 = v15087.A;
              const v15165 = v15087.B;
              const v15166 = v15089.protoFee;
              const v15167 = v15089.lpFee;
              const v15168 = v15089.totFee;
              const v15169 = v15089.protoAddr;
              const v15170 = v15089.locked;
              const v15171 = v15088.A;
              const v15172 = v15088.B;
              const v15173 = {
                A: v15162,
                B: v15163
                };
              const v15174 = {
                A: v15164,
                B: v15165
                };
              const v15175 = {
                locked: v15170,
                lpFee: v15167,
                protoAddr: v15169,
                protoFee: v15166,
                totFee: v15168
                };
              const v15176 = {
                A: v15171,
                B: v15172
                };
              const v15178 = {
                liquidityToken: v15052,
                lptBals: v15173,
                poolBals: v15174,
                protoBals: v15176,
                protoInfo: v15175,
                tokA: v15024,
                tokB: v14995
                };
              
              return v15178;}))(...args));
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
  const ctc12 = stdlib.T_Tuple([ctc11, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc15 = stdlib.T_Data({
    Protocol_harvest0_12035: ctc10,
    Provider_deposit0_12035: ctc12,
    Provider_withdraw0_12035: ctc13,
    Trader_swapAForB0_12035: ctc14,
    Trader_swapBForA0_12035: ctc14
    });
  const ctc16 = stdlib.T_Tuple([]);
  
  
  const v14982 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v14983 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v14984 = stdlib.protect(ctc2, interact.proto, 'for Admin\'s interact field proto');
  const v14985 = stdlib.protect(ctc3, interact.tokA, 'for Admin\'s interact field tokA');
  const v14986 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v14990 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v14990, {
    at: './index.rsh:356:10:application',
    fs: ['at ./index.rsh:365:15:application call to "checkInput" (defined at: ./index.rsh:355:37:function exp)', 'at ./index.rsh:359:13:application call to [unknown function] (defined at: ./index.rsh:359:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v14991 = stdlib.tokenEq(v14985, v14986);
  const v14992 = v14991 ? false : true;
  stdlib.assert(v14992, {
    at: './index.rsh:357:10:application',
    fs: ['at ./index.rsh:365:15:application call to "checkInput" (defined at: ./index.rsh:355:37:function exp)', 'at ./index.rsh:359:13:application call to [unknown function] (defined at: ./index.rsh:359:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v14985, v14986, v14982, v14983, v14984],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:367:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:367:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v14994, v14995, v14996, v14997, v14998], secs: v15000, time: v14999, didSend: v11808, from: v14993 } = txn1;
      
      const v15001 = stdlib.tokenEq(v14994, v14995);
      const v15002 = v15001 ? false : true;
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v14994
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v14995
        });
      ;
      const v15018 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      ;
      const v15021 = await ctc.getContractInfo();
      const v15024 = ['Some', v14994];
      const v15025 = [stdlib.checkedBigNumberify('./index.rsh:372:14:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
        accs: [],
        bills: stdlib.checkedBigNumberify('./index.rsh:372:14:application', stdlib.UInt_max, '0'),
        fees: stdlib.checkedBigNumberify('./index.rsh:372:14:application', stdlib.UInt_max, '0'),
        kind: 'remote',
        obj: v14998,
        pays: stdlib.checkedBigNumberify('./index.rsh:372:14:application', stdlib.UInt_max, '0'),
        toks: []
        })), undefined)];
      const v15026 = await txn1.getOutput('internal', 'v15025', ctc8, v15025);
      const v15028 = v15026[stdlib.checkedBigNumberify('./index.rsh:372:14:application', stdlib.UInt_max, '0')];
      const v15029 = v15026[stdlib.checkedBigNumberify('./index.rsh:372:14:application', stdlib.UInt_max, '1')];
      const v15030 = v15029.protoFee;
      const v15031 = v15029.lpFee;
      const v15032 = v15029.totFee;
      const v15033 = stdlib.lt(v15030, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v15034 = stdlib.lt(v15031, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v15035 = v15033 ? v15034 : false;
      const v15036 = stdlib.add(v15031, v15030);
      const v15037 = stdlib.eq(v15032, v15036);
      const v15038 = v15035 ? v15037 : false;
      const v15039 = stdlib.lt(v15032, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v15040 = v15038 ? v15039 : false;
      const v15041 = stdlib.gt(v15032, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v15042 = v15040 ? v15041 : false;
      ;
      const v15047 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:372:14:application', stdlib.UInt_max, '0'), v15028);
      ;
      const v15048 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v15049 = '                                                                                                ';
      const v15050 = '                                ';
      const v15051 = stdlib.simTokenNew(sim_r, v14996, v14997, v15049, v15050, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v15052 = await txn1.getOutput('internal', 'v15051', ctc3, v15051);
      const v15053 = [v14994, v14995];
      const v15054 = await stdlib.Array_asyncReduce([v15053], false, async([v15056], v15055, v15057) => {
        const v15058 = stdlib.tokenEq(v15052, v15056);
        const v15060 = v15055 ? v15055 : v15058;
        
        return v15060;})
      const v15061 = v15054 ? false : true;
      ;
      
      const v15083 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v15085 = false;
      const v15086 = v15048;
      const v15087 = v15083;
      const v15088 = v15083;
      const v15089 = v15029;
      const v15090 = v14999;
      const v15093 = v15028;
      
      if (await (async () => {
        const v15161 = v15085 ? false : true;
        
        return v15161;})()) {
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
  const {data: [v14994, v14995, v14996, v14997, v14998], secs: v15000, time: v14999, didSend: v11808, from: v14993 } = txn1;
  const v15001 = stdlib.tokenEq(v14994, v14995);
  const v15002 = v15001 ? false : true;
  stdlib.assert(v15002, {
    at: './index.rsh:367:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  const v15018 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v15018, {
    at: './index.rsh:356:10:application',
    fs: ['at ./index.rsh:368:13:application call to "checkInput" (defined at: ./index.rsh:355:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v15021 = await ctc.getContractInfo();
  const v15024 = ['Some', v14994];
  const v15025 = undefined /* Remote */;
  const v15026 = await txn1.getOutput('internal', 'v15025', ctc8, v15025);
  const v15028 = v15026[stdlib.checkedBigNumberify('./index.rsh:372:14:application', stdlib.UInt_max, '0')];
  const v15029 = v15026[stdlib.checkedBigNumberify('./index.rsh:372:14:application', stdlib.UInt_max, '1')];
  const v15030 = v15029.protoFee;
  const v15031 = v15029.lpFee;
  const v15032 = v15029.totFee;
  const v15033 = stdlib.lt(v15030, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v15034 = stdlib.lt(v15031, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v15035 = v15033 ? v15034 : false;
  const v15036 = stdlib.add(v15031, v15030);
  const v15037 = stdlib.eq(v15032, v15036);
  const v15038 = v15035 ? v15037 : false;
  const v15039 = stdlib.lt(v15032, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v15040 = v15038 ? v15039 : false;
  const v15041 = stdlib.gt(v15032, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v15042 = v15040 ? v15041 : false;
  stdlib.assert(v15042, {
    at: './index.rsh:372:14:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v15047 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:372:14:application', stdlib.UInt_max, '0'), v15028);
  stdlib.assert(v15047, {
    at: './index.rsh:372:14:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v15048 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v15049 = '                                                                                                ';
  const v15050 = '                                ';
  const v15051 = undefined /* TokenNew */;
  const v15052 = await txn1.getOutput('internal', 'v15051', ctc3, v15051);
  const v15053 = [v14994, v14995];
  const v15054 = await stdlib.Array_asyncReduce([v15053], false, async([v15056], v15055, v15057) => {
    const v15058 = stdlib.tokenEq(v15052, v15056);
    const v15060 = v15055 ? v15055 : v15058;
    
    return v15060;})
  const v15061 = v15054 ? false : true;
  stdlib.assert(v15061, {
    at: './index.rsh:376:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  stdlib.protect(ctc9, await interact.signalPoolCreation(v15052), {
    at: './index.rsh:384:36:application',
    fs: ['at ./index.rsh:384:36:application call to [unknown function] (defined at: ./index.rsh:384:36:function exp)', 'at ./index.rsh:384:36:application call to "liftedInteract" (defined at: ./index.rsh:384:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v15083 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v15085 = false;
  let v15086 = v15048;
  let v15087 = v15083;
  let v15088 = v15083;
  let v15089 = v15029;
  let v15090 = v14999;
  let v15093 = v15028;
  
  while (await (async () => {
    const v15161 = v15085 ? false : true;
    
    return v15161;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn2;
    switch (v15824[0]) {
      case 'Protocol_harvest0_12035': {
        const v15827 = v15824[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        ;
        const v15996 = v15827[stdlib.checkedBigNumberify('./index.rsh:509:9:spread', stdlib.UInt_max, '0')];
        const v15997 = v15827[stdlib.checkedBigNumberify('./index.rsh:509:9:spread', stdlib.UInt_max, '1')];
        const v15998 = v15089.protoAddr;
        const v15999 = stdlib.addressEq(v15823, v15998);
        stdlib.assert(v15999, {
          at: './index.rsh:414:14:application',
          fs: ['at ./index.rsh:512:32:application call to "doHarvest" (defined at: ./index.rsh:413:50:function exp)', 'at ./index.rsh:512:20:application call to [unknown function] (defined at: ./index.rsh:512:20:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Admin'
          });
        const v16000 = v15997.protoFee;
        const v16001 = v15997.lpFee;
        const v16002 = v15997.totFee;
        const v16003 = stdlib.lt(v16000, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
        const v16004 = stdlib.lt(v16001, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
        const v16005 = v16003 ? v16004 : false;
        const v16006 = stdlib.add(v16001, v16000);
        const v16007 = stdlib.eq(v16002, v16006);
        const v16008 = v16005 ? v16007 : false;
        const v16009 = stdlib.lt(v16002, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
        const v16010 = v16008 ? v16009 : false;
        const v16011 = stdlib.gt(v16002, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
        const v16012 = v16010 ? v16011 : false;
        stdlib.assert(v16012, {
          at: './index.rsh:78:29:application',
          fs: ['at ./index.rsh:415:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:512:32:application call to "doHarvest" (defined at: ./index.rsh:413:50:function exp)', 'at ./index.rsh:512:20:application call to [unknown function] (defined at: ./index.rsh:512:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v16014 = (stdlib.le(await ctc.getBalance(), v15093) ? stdlib.checkedBigNumberify('./index.rsh:416:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v15093));
        const v16015 = stdlib.add(v16014, v15093);
        const v16017 = v15086.B;
        const v16020 = v15997.locked;
        const v16021 = stdlib.eq(v16017, stdlib.checkedBigNumberify('./index.rsh:419:56:decimal', stdlib.UInt_max, '0'));
        const v16022 = v16020 ? v16021 : false;
        const v16023 = v15087.A;
        const v16024 = v15087.B;
        const v16025 = stdlib.eq(v16023, stdlib.checkedBigNumberify('./index.rsh:400:37:decimal', stdlib.UInt_max, '0'));
        const v16026 = stdlib.eq(v16024, stdlib.checkedBigNumberify('./index.rsh:400:47:decimal', stdlib.UInt_max, '0'));
        const v16027 = v16025 ? v16026 : false;
        const v16028 = v16022 ? v16027 : false;
        const v16029 = v15088.A;
        const v16030 = v15088.B;
        const v16060 = stdlib.sub(v16015, v16014);
        ;
        ;
        ;
        const v16087 = {
          A: v16029,
          B: v16030
          };
        const v16088 = [v16087, v16014];
        await txn2.getOutput('Protocol_harvest', 'v16088', ctc12, v16088);
        const v16116 = v15997.protoAddr;
        const v16118 = {
          locked: v16020,
          lpFee: v16001,
          protoAddr: v16116,
          protoFee: v16000,
          totFee: v16002
          };
        null;
        const cv15085 = v16028;
        const cv15086 = v15086;
        const cv15087 = v15087;
        const cv15088 = v15083;
        const cv15089 = v15997;
        const cv15090 = v15825;
        const cv15093 = v16060;
        
        v15085 = cv15085;
        v15086 = cv15086;
        v15087 = cv15087;
        v15088 = cv15088;
        v15089 = cv15089;
        v15090 = cv15090;
        v15093 = cv15093;
        
        continue;
        break;
        }
      case 'Provider_deposit0_12035': {
        const v16672 = v15824[1];
        undefined /* setApiDetails */;
        const v16696 = v16672[stdlib.checkedBigNumberify('./index.rsh:519:9:spread', stdlib.UInt_max, '0')];
        const v16698 = v16696.A;
        const v16699 = v16696.B;
        ;
        ;
        ;
        ;
        const v16971 = v16672[stdlib.checkedBigNumberify('./index.rsh:519:9:spread', stdlib.UInt_max, '1')];
        const v16972 = v15089.locked;
        const v16973 = v16972 ? false : true;
        stdlib.assert(v16973, {
          at: './index.rsh:440:14:application',
          fs: ['at ./index.rsh:522:32:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:522:20:application call to [unknown function] (defined at: ./index.rsh:522:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        let v16974;
        const v16977 = v15086.A;
        const v16978 = v15086.B;
        const v16980 = stdlib.eq(v16978, stdlib.checkedBigNumberify('./index.rsh:288:19:decimal', stdlib.UInt_max, '0'));
        if (v16980) {
          const v16981 = stdlib.cast(false, true, v16698);
          const v16982 = stdlib.cast(false, true, v16699);
          const v16983 = stdlib.cast(false, true, v16971);
          const v16985 = stdlib.mul256(v16983, v16983);
          const v16986 = stdlib.mul256(v16981, v16982);
          const v16987 = stdlib.gt256(v16981, v16982);
          const v16988 = v16987 ? v16981 : v16982;
          const v16989 = stdlib.mul256(v16988, v16988);
          const v16990 = stdlib.le256(v16986, v16985);
          stdlib.assert(v16990, {
            at: './index.rsh:297:10:application',
            fs: ['at ./index.rsh:441:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:522:32:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:522:20:application call to [unknown function] (defined at: ./index.rsh:522:20:function exp)'],
            msg: 'sqrt lo',
            who: 'Admin'
            });
          const v16991 = stdlib.le256(v16985, v16989);
          stdlib.assert(v16991, {
            at: './index.rsh:298:10:application',
            fs: ['at ./index.rsh:441:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:522:32:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:522:20:application call to [unknown function] (defined at: ./index.rsh:522:20:function exp)'],
            msg: 'sqrt hi',
            who: 'Admin'
            });
          v16974 = v16971;
          }
        else {
          const v16992 = v15087.A;
          const v16993 = v15087.B;
          const v16994 = stdlib.eq(v16971, stdlib.checkedBigNumberify('./index.rsh:302:18:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v16994, {
            at: './index.rsh:302:10:application',
            fs: ['at ./index.rsh:441:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:522:32:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:522:20:application call to [unknown function] (defined at: ./index.rsh:522:20:function exp)'],
            msg: 'sqrt 0',
            who: 'Admin'
            });
          const v16998 = stdlib.muldiv(v16698, v16978, v16992);
          const v17002 = stdlib.muldiv(v16699, v16978, v16993);
          const v17003 = stdlib.lt(v16998, v17002);
          const v17004 = v17003 ? v16998 : v17002;
          v16974 = v17004;
          }
        const v17006 = v15087.A;
        const v17010 = stdlib.add(v16698, v17006);
        const v17012 = v15087.B;
        const v17016 = stdlib.add(v16699, v17012);
        const v17017 = {
          A: v17010,
          B: v17016
          };
        const v17024 = stdlib.sub(v16977, v16974);
        const v17028 = stdlib.add(v16978, v16974);
        const v17029 = {
          A: v17024,
          B: v17028
          };
        ;
        await txn2.getOutput('Provider_deposit', 'v16974', ctc4, v16974);
        const v17076 = {
          A: v16698,
          B: v16699
          };
        const v17077 = {
          A: v17010,
          B: v17016
          };
        const v17078 = {
          A: v17024,
          B: v17028
          };
        null;
        const cv15085 = false;
        const cv15086 = v17029;
        const cv15087 = v17017;
        const cv15088 = v15088;
        const cv15089 = v15089;
        const cv15090 = v15825;
        const cv15093 = v15093;
        
        v15085 = cv15085;
        v15086 = cv15086;
        v15087 = cv15087;
        v15088 = cv15088;
        v15089 = cv15089;
        v15090 = cv15090;
        v15093 = cv15093;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_12035': {
        const v17517 = v15824[1];
        undefined /* setApiDetails */;
        const v17566 = v17517[stdlib.checkedBigNumberify('./index.rsh:514:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        ;
        const v17934 = v15086.A;
        const v17935 = v15086.B;
        const v17938 = v15087.A;
        const v17939 = v15087.B;
        const v17943 = stdlib.muldiv(v17566, v17938, v17935);
        const v17947 = stdlib.muldiv(v17566, v17939, v17935);
        const v17956 = stdlib.add(v17934, v17566);
        const v17959 = stdlib.sub(v17935, v17566);
        const v17960 = {
          A: v17956,
          B: v17959
          };
        const v17965 = stdlib.sub(v17938, v17943);
        const v17969 = stdlib.sub(v17939, v17947);
        const v17970 = {
          A: v17965,
          B: v17969
          };
        ;
        ;
        const v18021 = {
          A: v17943,
          B: v17947
          };
        await txn2.getOutput('Provider_withdraw', 'v18021', ctc11, v18021);
        const v18031 = {
          A: v17965,
          B: v17969
          };
        const v18032 = {
          A: v17956,
          B: v17959
          };
        null;
        const cv15085 = false;
        const cv15086 = v17960;
        const cv15087 = v17970;
        const cv15088 = v15088;
        const cv15089 = v15089;
        const cv15090 = v15825;
        const cv15093 = v15093;
        
        v15085 = cv15085;
        v15086 = cv15086;
        v15087 = cv15087;
        v15088 = cv15088;
        v15089 = cv15089;
        v15090 = cv15090;
        v15093 = cv15093;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_12035': {
        const v18362 = v15824[1];
        undefined /* setApiDetails */;
        const v18429 = v18362[stdlib.checkedBigNumberify('./index.rsh:524:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        ;
        const v18888 = v18362[stdlib.checkedBigNumberify('./index.rsh:524:9:spread', stdlib.UInt_max, '1')];
        const v18891 = v15089.locked;
        const v18892 = v18891 ? false : true;
        stdlib.assert(v18892, {
          at: './index.rsh:452:14:application',
          fs: ['at ./index.rsh:527:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:527:18:application call to [unknown function] (defined at: ./index.rsh:527:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v18893 = v15087.A;
        const v18894 = v15087.B;
        const v18895 = v15089.protoFee;
        const v18896 = v15089.totFee;
        const v18900 = stdlib.add(v18893, v18429);
        const v18904 = stdlib.muldiv(v18429, v18894, v18900);
        const v18905 = stdlib.cast(false, true, v18429);
        const v18906 = stdlib.cast(false, true, v18896);
        const v18907 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18906);
        const v18908 = stdlib.mul256(v18905, v18907);
        const v18909 = stdlib.cast(false, true, v18900);
        const v18910 = stdlib.mul256(v18909, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v18911 = stdlib.add256(v18910, v18908);
        const v18912 = stdlib.cast(false, true, v18894);
        const v18913 = stdlib.mul256(v18908, v18912);
        const v18914 = stdlib.div256(v18913, v18911);
        const v18915 = stdlib.cast(true, false, v18914);
        const v18918 = stdlib.sub(v18904, v18915);
        const v18921 = stdlib.mul(v18895, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
        const v18922 = stdlib.div(v18921, v18896);
        const v18925 = stdlib.muldiv(v18918, v18922, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
        const v18927 = stdlib.muldiv(v18429, v18895, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
        const v18931 = stdlib.muldiv(v18927, v18894, v18900);
        const v18932 = stdlib.gt(v18931, v18925);
        const v18933 = [v18927, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v18934 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18925];
        const v18935 = v18932 ? v18933 : v18934;
        const v18937 = v18935[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
        const v18938 = v18935[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
        const v18957 = stdlib.sub(v18894, v18915);
        const v18961 = stdlib.sub(v18900, v18937);
        const v18964 = stdlib.sub(v18957, v18938);
        const v18965 = {
          A: v18961,
          B: v18964
          };
        const v18966 = v15088.A;
        const v18970 = stdlib.add(v18966, v18937);
        const v18971 = v15088.B;
        const v18975 = stdlib.add(v18971, v18938);
        const v18976 = {
          A: v18970,
          B: v18975
          };
        const v18977 = stdlib.le(v18888, v18915);
        stdlib.assert(v18977, {
          at: './index.rsh:473:14:application',
          fs: ['at ./index.rsh:527:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:527:18:application call to [unknown function] (defined at: ./index.rsh:527:18:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v18980 = stdlib.cast(false, true, v18893);
        const v18982 = stdlib.mul256(v18980, v18912);
        const v18983 = stdlib.cast(false, true, v18961);
        const v18984 = stdlib.cast(false, true, v18964);
        const v18985 = stdlib.mul256(v18983, v18984);
        const v18986 = stdlib.ge256(v18985, v18982);
        stdlib.assert(v18986, {
          at: './index.rsh:483:14:application',
          fs: ['at ./index.rsh:527:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:527:18:application call to [unknown function] (defined at: ./index.rsh:527:18:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        const v19025 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v18915
          };
        await txn2.getOutput('Trader_swapAForB', 'v19025', ctc11, v19025);
        const v19035 = {
          A: v18429,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v19037 = {
          A: v18961,
          B: v18964
          };
        null;
        const cv15085 = false;
        const cv15086 = v15086;
        const cv15087 = v18965;
        const cv15088 = v18976;
        const cv15089 = v15089;
        const cv15090 = v15825;
        const cv15093 = v15093;
        
        v15085 = cv15085;
        v15086 = cv15086;
        v15087 = cv15087;
        v15088 = cv15088;
        v15089 = cv15089;
        v15090 = cv15090;
        v15093 = cv15093;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_12035': {
        const v19207 = v15824[1];
        undefined /* setApiDetails */;
        const v19293 = v19207[stdlib.checkedBigNumberify('./index.rsh:529:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        ;
        const v19893 = v19207[stdlib.checkedBigNumberify('./index.rsh:529:9:spread', stdlib.UInt_max, '1')];
        const v19896 = v15089.locked;
        const v19897 = v19896 ? false : true;
        stdlib.assert(v19897, {
          at: './index.rsh:452:14:application',
          fs: ['at ./index.rsh:532:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:532:18:application call to [unknown function] (defined at: ./index.rsh:532:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v19898 = v15087.A;
        const v19899 = v15087.B;
        const v19900 = v15089.protoFee;
        const v19901 = v15089.totFee;
        const v19905 = stdlib.add(v19899, v19293);
        const v19909 = stdlib.muldiv(v19293, v19898, v19905);
        const v19910 = stdlib.cast(false, true, v19293);
        const v19911 = stdlib.cast(false, true, v19901);
        const v19912 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v19911);
        const v19913 = stdlib.mul256(v19910, v19912);
        const v19914 = stdlib.cast(false, true, v19905);
        const v19915 = stdlib.mul256(v19914, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v19916 = stdlib.add256(v19915, v19913);
        const v19917 = stdlib.cast(false, true, v19898);
        const v19918 = stdlib.mul256(v19913, v19917);
        const v19919 = stdlib.div256(v19918, v19916);
        const v19920 = stdlib.cast(true, false, v19919);
        const v19923 = stdlib.sub(v19909, v19920);
        const v19926 = stdlib.mul(v19900, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
        const v19927 = stdlib.div(v19926, v19901);
        const v19930 = stdlib.muldiv(v19923, v19927, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
        const v19932 = stdlib.muldiv(v19293, v19900, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
        const v19936 = stdlib.muldiv(v19932, v19898, v19905);
        const v19937 = stdlib.gt(v19936, v19930);
        const v19938 = [v19932, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v19939 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19930];
        const v19940 = v19937 ? v19938 : v19939;
        const v19942 = v19940[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
        const v19943 = v19940[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
        const v19960 = stdlib.sub(v19898, v19920);
        const v19966 = stdlib.sub(v19960, v19943);
        const v19969 = stdlib.sub(v19905, v19942);
        const v19970 = {
          A: v19966,
          B: v19969
          };
        const v19971 = v15088.A;
        const v19975 = stdlib.add(v19971, v19943);
        const v19976 = v15088.B;
        const v19980 = stdlib.add(v19976, v19942);
        const v19981 = {
          A: v19975,
          B: v19980
          };
        const v19982 = stdlib.le(v19893, v19920);
        stdlib.assert(v19982, {
          at: './index.rsh:473:14:application',
          fs: ['at ./index.rsh:532:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:532:18:application call to [unknown function] (defined at: ./index.rsh:532:18:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v19987 = stdlib.cast(false, true, v19899);
        const v19988 = stdlib.mul256(v19917, v19987);
        const v19989 = stdlib.cast(false, true, v19966);
        const v19990 = stdlib.cast(false, true, v19969);
        const v19991 = stdlib.mul256(v19989, v19990);
        const v19992 = stdlib.ge256(v19991, v19988);
        stdlib.assert(v19992, {
          at: './index.rsh:483:14:application',
          fs: ['at ./index.rsh:532:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:532:18:application call to [unknown function] (defined at: ./index.rsh:532:18:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        const v20031 = {
          A: v19920,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn2.getOutput('Trader_swapBForA', 'v20031', ctc11, v20031);
        const v20041 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v19293
          };
        const v20043 = {
          A: v19966,
          B: v19969
          };
        null;
        const cv15085 = false;
        const cv15086 = v15086;
        const cv15087 = v19970;
        const cv15088 = v19981;
        const cv15089 = v15089;
        const cv15090 = v15825;
        const cv15093 = v15093;
        
        v15085 = cv15085;
        v15086 = cv15086;
        v15087 = cv15087;
        v15088 = cv15088;
        v15089 = cv15089;
        v15090 = cv15090;
        v15093 = cv15093;
        
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
  const {data: [v20079], secs: v20081, time: v20080, didSend: v14492, from: v20078 } = txn2;
  undefined /* setApiDetails */;
  ;
  const v20082 = null;
  await txn2.getOutput('Protocol_delete', 'v20082', ctc9, v20082);
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
  
  
  const [v14994, v14995, v15024, v15052, v15086, v15087, v15088, v15089] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7]);
  const v20077 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:537:3:application',
    fs: ['at ./index.rsh:537:3:application call to [unknown function] (defined at: ./index.rsh:537:3:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v14994, v14995, v15024, v15052, v15086, v15087, v15088, v15089, v20077],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:537:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v20079], secs: v20081, time: v20080, didSend: v14492, from: v20078 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v20082 = null;
      const v20083 = await txn1.getOutput('Protocol_delete', 'v20082', ctc1, v20082);
      
      stdlib.simTokenBurn(sim_r, v15052, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v15052);
      sim_r.txns.push({
        kind: 'halt',
        tok: v14995
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v14994
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
  const {data: [v20079], secs: v20081, time: v20080, didSend: v14492, from: v20078 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v20082 = null;
  const v20083 = await txn1.getOutput('Protocol_delete', 'v20082', ctc1, v20082);
  stdlib.protect(ctc1, await interact.out(v20079, v20083), {
    at: './index.rsh:537:3:application',
    fs: ['at ./index.rsh:537:3:application call to [unknown function] (defined at: ./index.rsh:537:3:function exp)', 'at ./index.rsh:538:4:application call to "k" (defined at: ./index.rsh:537:3:function exp)'],
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
    Protocol_harvest0_12035: ctc8,
    Provider_deposit0_12035: ctc10,
    Provider_withdraw0_12035: ctc11,
    Trader_swapAForB0_12035: ctc12,
    Trader_swapBForA0_12035: ctc12
    });
  
  
  const [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v15185 = ctc.selfAddress();
  const v15187 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:510:17:application call to [unknown function] (defined at: ./index.rsh:510:17:function exp)', 'at ./index.rsh:387:19:application call to "runProtocol_harvest0_12035" (defined at: ./index.rsh:509:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v15189 = v15187[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15190 = v15189.protoFee;
  const v15191 = v15189.lpFee;
  const v15192 = v15189.totFee;
  const v15193 = stdlib.lt(v15190, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v15194 = stdlib.lt(v15191, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v15195 = v15193 ? v15194 : false;
  const v15196 = stdlib.add(v15191, v15190);
  const v15197 = stdlib.eq(v15192, v15196);
  const v15198 = v15195 ? v15197 : false;
  const v15199 = stdlib.lt(v15192, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v15200 = v15198 ? v15199 : false;
  const v15201 = stdlib.gt(v15192, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v15202 = v15200 ? v15201 : false;
  stdlib.assert(v15202, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:510:17:application call to [unknown function] (defined at: ./index.rsh:510:17:function exp)', 'at ./index.rsh:387:19:application call to "runProtocol_harvest0_12035" (defined at: ./index.rsh:509:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v15206 = v15089.protoAddr;
  const v15207 = stdlib.addressEq(v15185, v15206);
  stdlib.assert(v15207, {
    at: './index.rsh:414:14:application',
    fs: ['at ./index.rsh:510:41:application call to "doHarvest" (defined at: ./index.rsh:413:50:function exp)', 'at ./index.rsh:510:17:application call to [unknown function] (defined at: ./index.rsh:510:17:function exp)', 'at ./index.rsh:510:17:application call to [unknown function] (defined at: ./index.rsh:510:17:function exp)', 'at ./index.rsh:387:19:application call to "runProtocol_harvest0_12035" (defined at: ./index.rsh:509:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  (stdlib.le(await ctc.getBalance(), v15093) ? stdlib.checkedBigNumberify('./index.rsh:416:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v15093));
  const v15246 = ['Protocol_harvest0_12035', v15187];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093, v15246],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:379:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:511:25:decimal', stdlib.UInt_max, '0'), v15052], [stdlib.checkedBigNumberify('./index.rsh:511:28:decimal', stdlib.UInt_max, '0'), v14994], [stdlib.checkedBigNumberify('./index.rsh:511:31:decimal', stdlib.UInt_max, '0'), v14995]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn1;
      
      switch (v15824[0]) {
        case 'Protocol_harvest0_12035': {
          const v15827 = v15824[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          ;
          ;
          ;
          const v15996 = v15827[stdlib.checkedBigNumberify('./index.rsh:509:9:spread', stdlib.UInt_max, '0')];
          const v15997 = v15827[stdlib.checkedBigNumberify('./index.rsh:509:9:spread', stdlib.UInt_max, '1')];
          const v15998 = v15089.protoAddr;
          const v15999 = stdlib.addressEq(v15823, v15998);
          ;
          const v16000 = v15997.protoFee;
          const v16001 = v15997.lpFee;
          const v16002 = v15997.totFee;
          const v16003 = stdlib.lt(v16000, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
          const v16004 = stdlib.lt(v16001, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
          const v16005 = v16003 ? v16004 : false;
          const v16006 = stdlib.add(v16001, v16000);
          const v16007 = stdlib.eq(v16002, v16006);
          const v16008 = v16005 ? v16007 : false;
          const v16009 = stdlib.lt(v16002, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v16010 = v16008 ? v16009 : false;
          const v16011 = stdlib.gt(v16002, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v16012 = v16010 ? v16011 : false;
          ;
          const v16014 = (stdlib.le(await ctc.getBalance(), v15093) ? stdlib.checkedBigNumberify('./index.rsh:416:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v15093));
          const v16015 = stdlib.add(v16014, v15093);
          const v16017 = v15086.B;
          const v16020 = v15997.locked;
          const v16021 = stdlib.eq(v16017, stdlib.checkedBigNumberify('./index.rsh:419:56:decimal', stdlib.UInt_max, '0'));
          const v16022 = v16020 ? v16021 : false;
          const v16023 = v15087.A;
          const v16024 = v15087.B;
          const v16025 = stdlib.eq(v16023, stdlib.checkedBigNumberify('./index.rsh:400:37:decimal', stdlib.UInt_max, '0'));
          const v16026 = stdlib.eq(v16024, stdlib.checkedBigNumberify('./index.rsh:400:47:decimal', stdlib.UInt_max, '0'));
          const v16027 = v16025 ? v16026 : false;
          const v16028 = v16022 ? v16027 : false;
          const v16029 = v15088.A;
          const v16030 = v15088.B;
          const v16060 = stdlib.sub(v16015, v16014);
          sim_r.txns.push({
            amt: v16014,
            kind: 'from',
            to: v15996,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v16029,
            kind: 'from',
            to: v15996,
            tok: v14994
            });
          sim_r.txns.push({
            amt: v16030,
            kind: 'from',
            to: v15996,
            tok: v14995
            });
          const v16087 = {
            A: v16029,
            B: v16030
            };
          const v16088 = [v16087, v16014];
          const v16089 = await txn1.getOutput('Protocol_harvest', 'v16088', ctc10, v16088);
          
          const v16116 = v15997.protoAddr;
          const v16118 = {
            locked: v16020,
            lpFee: v16001,
            protoAddr: v16116,
            protoFee: v16000,
            totFee: v16002
            };
          null;
          const v23942 = v15086;
          const v23943 = v15087;
          const v23944 = v15083;
          const v23945 = v15997;
          const v23947 = v16060;
          if (v16028) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_12035': {
          const v16672 = v15824[1];
          
          break;
          }
        case 'Provider_withdraw0_12035': {
          const v17517 = v15824[1];
          
          break;
          }
        case 'Trader_swapAForB0_12035': {
          const v18362 = v15824[1];
          
          break;
          }
        case 'Trader_swapBForA0_12035': {
          const v19207 = v15824[1];
          
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
  const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn1;
  switch (v15824[0]) {
    case 'Protocol_harvest0_12035': {
      const v15827 = v15824[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      ;
      const v15996 = v15827[stdlib.checkedBigNumberify('./index.rsh:509:9:spread', stdlib.UInt_max, '0')];
      const v15997 = v15827[stdlib.checkedBigNumberify('./index.rsh:509:9:spread', stdlib.UInt_max, '1')];
      const v15998 = v15089.protoAddr;
      const v15999 = stdlib.addressEq(v15823, v15998);
      stdlib.assert(v15999, {
        at: './index.rsh:414:14:application',
        fs: ['at ./index.rsh:512:32:application call to "doHarvest" (defined at: ./index.rsh:413:50:function exp)', 'at ./index.rsh:512:20:application call to [unknown function] (defined at: ./index.rsh:512:20:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v16000 = v15997.protoFee;
      const v16001 = v15997.lpFee;
      const v16002 = v15997.totFee;
      const v16003 = stdlib.lt(v16000, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v16004 = stdlib.lt(v16001, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v16005 = v16003 ? v16004 : false;
      const v16006 = stdlib.add(v16001, v16000);
      const v16007 = stdlib.eq(v16002, v16006);
      const v16008 = v16005 ? v16007 : false;
      const v16009 = stdlib.lt(v16002, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v16010 = v16008 ? v16009 : false;
      const v16011 = stdlib.gt(v16002, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v16012 = v16010 ? v16011 : false;
      stdlib.assert(v16012, {
        at: './index.rsh:78:29:application',
        fs: ['at ./index.rsh:415:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:512:32:application call to "doHarvest" (defined at: ./index.rsh:413:50:function exp)', 'at ./index.rsh:512:20:application call to [unknown function] (defined at: ./index.rsh:512:20:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v16014 = (stdlib.le(await ctc.getBalance(), v15093) ? stdlib.checkedBigNumberify('./index.rsh:416:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v15093));
      const v16015 = stdlib.add(v16014, v15093);
      const v16017 = v15086.B;
      const v16020 = v15997.locked;
      const v16021 = stdlib.eq(v16017, stdlib.checkedBigNumberify('./index.rsh:419:56:decimal', stdlib.UInt_max, '0'));
      const v16022 = v16020 ? v16021 : false;
      const v16023 = v15087.A;
      const v16024 = v15087.B;
      const v16025 = stdlib.eq(v16023, stdlib.checkedBigNumberify('./index.rsh:400:37:decimal', stdlib.UInt_max, '0'));
      const v16026 = stdlib.eq(v16024, stdlib.checkedBigNumberify('./index.rsh:400:47:decimal', stdlib.UInt_max, '0'));
      const v16027 = v16025 ? v16026 : false;
      const v16028 = v16022 ? v16027 : false;
      const v16029 = v15088.A;
      const v16030 = v15088.B;
      const v16060 = stdlib.sub(v16015, v16014);
      ;
      ;
      ;
      const v16087 = {
        A: v16029,
        B: v16030
        };
      const v16088 = [v16087, v16014];
      const v16089 = await txn1.getOutput('Protocol_harvest', 'v16088', ctc10, v16088);
      if (v13626) {
        stdlib.protect(ctc1, await interact.out(v15827, v16089), {
          at: './index.rsh:509:10:application',
          fs: ['at ./index.rsh:509:10:application call to [unknown function] (defined at: ./index.rsh:509:10:function exp)', 'at ./index.rsh:422:12:application call to "k" (defined at: ./index.rsh:512:20:function exp)', 'at ./index.rsh:512:47:application call to [unknown function] (defined at: ./index.rsh:420:20:function exp)', 'at ./index.rsh:512:20:application call to [unknown function] (defined at: ./index.rsh:512:20:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v16116 = v15997.protoAddr;
      const v16118 = {
        locked: v16020,
        lpFee: v16001,
        protoAddr: v16116,
        protoFee: v16000,
        totFee: v16002
        };
      null;
      const v23942 = v15086;
      const v23943 = v15087;
      const v23944 = v15083;
      const v23945 = v15997;
      const v23947 = v16060;
      if (v16028) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_12035': {
      const v16672 = v15824[1];
      return;
      break;
      }
    case 'Provider_withdraw0_12035': {
      const v17517 = v15824[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_12035': {
      const v18362 = v15824[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_12035': {
      const v19207 = v15824[1];
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
    Protocol_harvest0_12035: ctc10,
    Provider_deposit0_12035: ctc9,
    Provider_withdraw0_12035: ctc11,
    Trader_swapAForB0_12035: ctc12,
    Trader_swapBForA0_12035: ctc12
    });
  
  
  const [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v15298 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:520:17:application call to [unknown function] (defined at: ./index.rsh:520:17:function exp)', 'at ./index.rsh:387:19:application call to "runProvider_deposit0_12035" (defined at: ./index.rsh:519:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v15299 = v15298[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15300 = v15298[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15301 = v15299.A;
  const v15302 = v15299.B;
  const v15306 = v15089.locked;
  const v15307 = v15306 ? false : true;
  stdlib.assert(v15307, {
    at: './index.rsh:440:14:application',
    fs: ['at ./index.rsh:520:41:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:520:17:application call to [unknown function] (defined at: ./index.rsh:520:17:function exp)', 'at ./index.rsh:520:17:application call to [unknown function] (defined at: ./index.rsh:520:17:function exp)', 'at ./index.rsh:387:19:application call to "runProvider_deposit0_12035" (defined at: ./index.rsh:519:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: null,
    who: 'Provider_deposit'
    });
  const v15312 = v15086.B;
  const v15314 = stdlib.eq(v15312, stdlib.checkedBigNumberify('./index.rsh:288:19:decimal', stdlib.UInt_max, '0'));
  if (v15314) {
    const v15315 = stdlib.cast(false, true, v15301);
    const v15316 = stdlib.cast(false, true, v15302);
    const v15317 = stdlib.cast(false, true, v15300);
    const v15319 = stdlib.mul256(v15317, v15317);
    const v15320 = stdlib.mul256(v15315, v15316);
    const v15321 = stdlib.gt256(v15315, v15316);
    const v15322 = v15321 ? v15315 : v15316;
    const v15323 = stdlib.mul256(v15322, v15322);
    const v15324 = stdlib.le256(v15320, v15319);
    stdlib.assert(v15324, {
      at: './index.rsh:297:10:application',
      fs: ['at ./index.rsh:441:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:520:41:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:520:17:application call to [unknown function] (defined at: ./index.rsh:520:17:function exp)', 'at ./index.rsh:520:17:application call to [unknown function] (defined at: ./index.rsh:520:17:function exp)', 'at ./index.rsh:387:19:application call to "runProvider_deposit0_12035" (defined at: ./index.rsh:519:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
      msg: 'sqrt lo',
      who: 'Provider_deposit'
      });
    const v15325 = stdlib.le256(v15319, v15323);
    stdlib.assert(v15325, {
      at: './index.rsh:298:10:application',
      fs: ['at ./index.rsh:441:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:520:41:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:520:17:application call to [unknown function] (defined at: ./index.rsh:520:17:function exp)', 'at ./index.rsh:520:17:application call to [unknown function] (defined at: ./index.rsh:520:17:function exp)', 'at ./index.rsh:387:19:application call to "runProvider_deposit0_12035" (defined at: ./index.rsh:519:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
      msg: 'sqrt hi',
      who: 'Provider_deposit'
      });
    }
  else {
    const v15328 = stdlib.eq(v15300, stdlib.checkedBigNumberify('./index.rsh:302:18:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v15328, {
      at: './index.rsh:302:10:application',
      fs: ['at ./index.rsh:441:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:520:41:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:520:17:application call to [unknown function] (defined at: ./index.rsh:520:17:function exp)', 'at ./index.rsh:520:17:application call to [unknown function] (defined at: ./index.rsh:520:17:function exp)', 'at ./index.rsh:387:19:application call to "runProvider_deposit0_12035" (defined at: ./index.rsh:519:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
      msg: 'sqrt 0',
      who: 'Provider_deposit'
      });
    }
  const v15371 = ['Provider_deposit0_12035', v15298];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093, v15371],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:383:36:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:383:50:decimal', stdlib.UInt_max, '0'), v15052], [v15301, v14994], [v15302, v14995]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn1;
      
      switch (v15824[0]) {
        case 'Protocol_harvest0_12035': {
          const v15827 = v15824[1];
          
          break;
          }
        case 'Provider_deposit0_12035': {
          const v16672 = v15824[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v16696 = v16672[stdlib.checkedBigNumberify('./index.rsh:519:9:spread', stdlib.UInt_max, '0')];
          const v16698 = v16696.A;
          const v16699 = v16696.B;
          ;
          ;
          sim_r.txns.push({
            amt: v16698,
            kind: 'to',
            tok: v14994
            });
          sim_r.txns.push({
            amt: v16699,
            kind: 'to',
            tok: v14995
            });
          const v16971 = v16672[stdlib.checkedBigNumberify('./index.rsh:519:9:spread', stdlib.UInt_max, '1')];
          const v16972 = v15089.locked;
          const v16973 = v16972 ? false : true;
          ;
          let v16974;
          const v16977 = v15086.A;
          const v16978 = v15086.B;
          const v16980 = stdlib.eq(v16978, stdlib.checkedBigNumberify('./index.rsh:288:19:decimal', stdlib.UInt_max, '0'));
          if (v16980) {
            const v16981 = stdlib.cast(false, true, v16698);
            const v16982 = stdlib.cast(false, true, v16699);
            const v16983 = stdlib.cast(false, true, v16971);
            const v16985 = stdlib.mul256(v16983, v16983);
            const v16986 = stdlib.mul256(v16981, v16982);
            const v16987 = stdlib.gt256(v16981, v16982);
            const v16988 = v16987 ? v16981 : v16982;
            const v16989 = stdlib.mul256(v16988, v16988);
            const v16990 = stdlib.le256(v16986, v16985);
            ;
            const v16991 = stdlib.le256(v16985, v16989);
            ;
            v16974 = v16971;
            }
          else {
            const v16992 = v15087.A;
            const v16993 = v15087.B;
            const v16994 = stdlib.eq(v16971, stdlib.checkedBigNumberify('./index.rsh:302:18:decimal', stdlib.UInt_max, '0'));
            ;
            const v16998 = stdlib.muldiv(v16698, v16978, v16992);
            const v17002 = stdlib.muldiv(v16699, v16978, v16993);
            const v17003 = stdlib.lt(v16998, v17002);
            const v17004 = v17003 ? v16998 : v17002;
            v16974 = v17004;
            }
          const v17006 = v15087.A;
          const v17010 = stdlib.add(v16698, v17006);
          const v17012 = v15087.B;
          const v17016 = stdlib.add(v16699, v17012);
          const v17017 = {
            A: v17010,
            B: v17016
            };
          const v17024 = stdlib.sub(v16977, v16974);
          const v17028 = stdlib.add(v16978, v16974);
          const v17029 = {
            A: v17024,
            B: v17028
            };
          sim_r.txns.push({
            amt: v16974,
            kind: 'from',
            to: v15823,
            tok: v15052
            });
          const v17065 = await txn1.getOutput('Provider_deposit', 'v16974', ctc3, v16974);
          
          const v17076 = {
            A: v16698,
            B: v16699
            };
          const v17077 = {
            A: v17010,
            B: v17016
            };
          const v17078 = {
            A: v17024,
            B: v17028
            };
          null;
          const v24032 = v17029;
          const v24033 = v17017;
          const v24034 = v15088;
          const v24035 = v15089;
          const v24037 = v15093;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_12035': {
          const v17517 = v15824[1];
          
          break;
          }
        case 'Trader_swapAForB0_12035': {
          const v18362 = v15824[1];
          
          break;
          }
        case 'Trader_swapBForA0_12035': {
          const v19207 = v15824[1];
          
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
  const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn1;
  switch (v15824[0]) {
    case 'Protocol_harvest0_12035': {
      const v15827 = v15824[1];
      return;
      break;
      }
    case 'Provider_deposit0_12035': {
      const v16672 = v15824[1];
      undefined /* setApiDetails */;
      const v16696 = v16672[stdlib.checkedBigNumberify('./index.rsh:519:9:spread', stdlib.UInt_max, '0')];
      const v16698 = v16696.A;
      const v16699 = v16696.B;
      ;
      ;
      ;
      ;
      const v16971 = v16672[stdlib.checkedBigNumberify('./index.rsh:519:9:spread', stdlib.UInt_max, '1')];
      const v16972 = v15089.locked;
      const v16973 = v16972 ? false : true;
      stdlib.assert(v16973, {
        at: './index.rsh:440:14:application',
        fs: ['at ./index.rsh:522:32:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:522:20:application call to [unknown function] (defined at: ./index.rsh:522:20:function exp)'],
        msg: null,
        who: 'Provider_deposit'
        });
      let v16974;
      const v16977 = v15086.A;
      const v16978 = v15086.B;
      const v16980 = stdlib.eq(v16978, stdlib.checkedBigNumberify('./index.rsh:288:19:decimal', stdlib.UInt_max, '0'));
      if (v16980) {
        const v16981 = stdlib.cast(false, true, v16698);
        const v16982 = stdlib.cast(false, true, v16699);
        const v16983 = stdlib.cast(false, true, v16971);
        const v16985 = stdlib.mul256(v16983, v16983);
        const v16986 = stdlib.mul256(v16981, v16982);
        const v16987 = stdlib.gt256(v16981, v16982);
        const v16988 = v16987 ? v16981 : v16982;
        const v16989 = stdlib.mul256(v16988, v16988);
        const v16990 = stdlib.le256(v16986, v16985);
        stdlib.assert(v16990, {
          at: './index.rsh:297:10:application',
          fs: ['at ./index.rsh:441:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:522:32:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:522:20:application call to [unknown function] (defined at: ./index.rsh:522:20:function exp)'],
          msg: 'sqrt lo',
          who: 'Provider_deposit'
          });
        const v16991 = stdlib.le256(v16985, v16989);
        stdlib.assert(v16991, {
          at: './index.rsh:298:10:application',
          fs: ['at ./index.rsh:441:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:522:32:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:522:20:application call to [unknown function] (defined at: ./index.rsh:522:20:function exp)'],
          msg: 'sqrt hi',
          who: 'Provider_deposit'
          });
        v16974 = v16971;
        }
      else {
        const v16992 = v15087.A;
        const v16993 = v15087.B;
        const v16994 = stdlib.eq(v16971, stdlib.checkedBigNumberify('./index.rsh:302:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v16994, {
          at: './index.rsh:302:10:application',
          fs: ['at ./index.rsh:441:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:522:32:application call to "doDeposit" (defined at: ./index.rsh:439:42:function exp)', 'at ./index.rsh:522:20:application call to [unknown function] (defined at: ./index.rsh:522:20:function exp)'],
          msg: 'sqrt 0',
          who: 'Provider_deposit'
          });
        const v16998 = stdlib.muldiv(v16698, v16978, v16992);
        const v17002 = stdlib.muldiv(v16699, v16978, v16993);
        const v17003 = stdlib.lt(v16998, v17002);
        const v17004 = v17003 ? v16998 : v17002;
        v16974 = v17004;
        }
      const v17006 = v15087.A;
      const v17010 = stdlib.add(v16698, v17006);
      const v17012 = v15087.B;
      const v17016 = stdlib.add(v16699, v17012);
      const v17017 = {
        A: v17010,
        B: v17016
        };
      const v17024 = stdlib.sub(v16977, v16974);
      const v17028 = stdlib.add(v16978, v16974);
      const v17029 = {
        A: v17024,
        B: v17028
        };
      ;
      const v17065 = await txn1.getOutput('Provider_deposit', 'v16974', ctc3, v16974);
      if (v13626) {
        stdlib.protect(ctc1, await interact.out(v16672, v17065), {
          at: './index.rsh:519:10:application',
          fs: ['at ./index.rsh:519:10:application call to [unknown function] (defined at: ./index.rsh:519:10:function exp)', 'at ./index.rsh:446:12:application call to "k" (defined at: ./index.rsh:522:20:function exp)', 'at ./index.rsh:522:47:application call to [unknown function] (defined at: ./index.rsh:444:20:function exp)', 'at ./index.rsh:522:20:application call to [unknown function] (defined at: ./index.rsh:522:20:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v17076 = {
        A: v16698,
        B: v16699
        };
      const v17077 = {
        A: v17010,
        B: v17016
        };
      const v17078 = {
        A: v17024,
        B: v17028
        };
      null;
      const v24032 = v17029;
      const v24033 = v17017;
      const v24034 = v15088;
      const v24035 = v15089;
      const v24037 = v15093;
      return;
      
      break;
      }
    case 'Provider_withdraw0_12035': {
      const v17517 = v15824[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_12035': {
      const v18362 = v15824[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_12035': {
      const v19207 = v15824[1];
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
    Protocol_harvest0_12035: ctc9,
    Provider_deposit0_12035: ctc11,
    Provider_withdraw0_12035: ctc8,
    Trader_swapAForB0_12035: ctc12,
    Trader_swapBForA0_12035: ctc12
    });
  
  
  const [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v15250 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:515:11:application call to [unknown function] (defined at: ./index.rsh:515:11:function exp)', 'at ./index.rsh:387:19:application call to "runProvider_withdraw0_12035" (defined at: ./index.rsh:514:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v15251 = v15250[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15294 = ['Provider_withdraw0_12035', v15250];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093, v15294],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:379:34:decimal', stdlib.UInt_max, '0'), [[v15251, v15052], [stdlib.checkedBigNumberify('./index.rsh:516:25:decimal', stdlib.UInt_max, '0'), v14994], [stdlib.checkedBigNumberify('./index.rsh:516:28:decimal', stdlib.UInt_max, '0'), v14995]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn1;
      
      switch (v15824[0]) {
        case 'Protocol_harvest0_12035': {
          const v15827 = v15824[1];
          
          break;
          }
        case 'Provider_deposit0_12035': {
          const v16672 = v15824[1];
          
          break;
          }
        case 'Provider_withdraw0_12035': {
          const v17517 = v15824[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v17566 = v17517[stdlib.checkedBigNumberify('./index.rsh:514:9:spread', stdlib.UInt_max, '0')];
          ;
          sim_r.txns.push({
            amt: v17566,
            kind: 'to',
            tok: v15052
            });
          ;
          ;
          const v17934 = v15086.A;
          const v17935 = v15086.B;
          const v17938 = v15087.A;
          const v17939 = v15087.B;
          const v17943 = stdlib.muldiv(v17566, v17938, v17935);
          const v17947 = stdlib.muldiv(v17566, v17939, v17935);
          const v17956 = stdlib.add(v17934, v17566);
          const v17959 = stdlib.sub(v17935, v17566);
          const v17960 = {
            A: v17956,
            B: v17959
            };
          const v17965 = stdlib.sub(v17938, v17943);
          const v17969 = stdlib.sub(v17939, v17947);
          const v17970 = {
            A: v17965,
            B: v17969
            };
          sim_r.txns.push({
            amt: v17943,
            kind: 'from',
            to: v15823,
            tok: v14994
            });
          sim_r.txns.push({
            amt: v17947,
            kind: 'from',
            to: v15823,
            tok: v14995
            });
          const v18021 = {
            A: v17943,
            B: v17947
            };
          const v18022 = await txn1.getOutput('Provider_withdraw', 'v18021', ctc10, v18021);
          
          const v18031 = {
            A: v17965,
            B: v17969
            };
          const v18032 = {
            A: v17956,
            B: v17959
            };
          null;
          const v24122 = v17960;
          const v24123 = v17970;
          const v24124 = v15088;
          const v24125 = v15089;
          const v24127 = v15093;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_12035': {
          const v18362 = v15824[1];
          
          break;
          }
        case 'Trader_swapBForA0_12035': {
          const v19207 = v15824[1];
          
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
  const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn1;
  switch (v15824[0]) {
    case 'Protocol_harvest0_12035': {
      const v15827 = v15824[1];
      return;
      break;
      }
    case 'Provider_deposit0_12035': {
      const v16672 = v15824[1];
      return;
      break;
      }
    case 'Provider_withdraw0_12035': {
      const v17517 = v15824[1];
      undefined /* setApiDetails */;
      const v17566 = v17517[stdlib.checkedBigNumberify('./index.rsh:514:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      ;
      const v17934 = v15086.A;
      const v17935 = v15086.B;
      const v17938 = v15087.A;
      const v17939 = v15087.B;
      const v17943 = stdlib.muldiv(v17566, v17938, v17935);
      const v17947 = stdlib.muldiv(v17566, v17939, v17935);
      const v17956 = stdlib.add(v17934, v17566);
      const v17959 = stdlib.sub(v17935, v17566);
      const v17960 = {
        A: v17956,
        B: v17959
        };
      const v17965 = stdlib.sub(v17938, v17943);
      const v17969 = stdlib.sub(v17939, v17947);
      const v17970 = {
        A: v17965,
        B: v17969
        };
      ;
      ;
      const v18021 = {
        A: v17943,
        B: v17947
        };
      const v18022 = await txn1.getOutput('Provider_withdraw', 'v18021', ctc10, v18021);
      if (v13626) {
        stdlib.protect(ctc1, await interact.out(v17517, v18022), {
          at: './index.rsh:514:10:application',
          fs: ['at ./index.rsh:514:10:application call to [unknown function] (defined at: ./index.rsh:514:10:function exp)', 'at ./index.rsh:434:12:application call to "k" (defined at: ./index.rsh:517:14:function exp)', 'at ./index.rsh:517:36:application call to [unknown function] (defined at: ./index.rsh:432:20:function exp)', 'at ./index.rsh:517:14:application call to [unknown function] (defined at: ./index.rsh:517:14:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v18031 = {
        A: v17965,
        B: v17969
        };
      const v18032 = {
        A: v17956,
        B: v17959
        };
      null;
      const v24122 = v17960;
      const v24123 = v17970;
      const v24124 = v15088;
      const v24125 = v15089;
      const v24127 = v15093;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_12035': {
      const v18362 = v15824[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_12035': {
      const v19207 = v15824[1];
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
    Protocol_harvest0_12035: ctc9,
    Provider_deposit0_12035: ctc11,
    Provider_withdraw0_12035: ctc12,
    Trader_swapAForB0_12035: ctc8,
    Trader_swapBForA0_12035: ctc8
    });
  
  
  const [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v15375 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:525:15:application call to [unknown function] (defined at: ./index.rsh:525:15:function exp)', 'at ./index.rsh:387:19:application call to "runTrader_swapAForB0_12035" (defined at: ./index.rsh:524:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v15376 = v15375[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15377 = v15375[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15383 = v15089.locked;
  const v15384 = v15383 ? false : true;
  stdlib.assert(v15384, {
    at: './index.rsh:452:14:application',
    fs: ['at ./index.rsh:525:36:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:525:15:application call to [unknown function] (defined at: ./index.rsh:525:15:function exp)', 'at ./index.rsh:525:15:application call to [unknown function] (defined at: ./index.rsh:525:15:function exp)', 'at ./index.rsh:387:19:application call to "runTrader_swapAForB0_12035" (defined at: ./index.rsh:524:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v15385 = v15087.A;
  const v15386 = v15087.B;
  const v15387 = v15089.protoFee;
  const v15388 = v15089.totFee;
  const v15392 = stdlib.add(v15385, v15376);
  const v15396 = stdlib.muldiv(v15376, v15386, v15392);
  const v15397 = stdlib.cast(false, true, v15376);
  const v15398 = stdlib.cast(false, true, v15388);
  const v15399 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15398);
  const v15400 = stdlib.mul256(v15397, v15399);
  const v15401 = stdlib.cast(false, true, v15392);
  const v15402 = stdlib.mul256(v15401, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v15403 = stdlib.add256(v15402, v15400);
  const v15404 = stdlib.cast(false, true, v15386);
  const v15405 = stdlib.mul256(v15400, v15404);
  const v15406 = stdlib.div256(v15405, v15403);
  const v15407 = stdlib.cast(true, false, v15406);
  const v15410 = stdlib.sub(v15396, v15407);
  const v15413 = stdlib.mul(v15387, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
  const v15414 = stdlib.div(v15413, v15388);
  const v15417 = stdlib.muldiv(v15410, v15414, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
  const v15419 = stdlib.muldiv(v15376, v15387, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
  const v15423 = stdlib.muldiv(v15419, v15386, v15392);
  const v15424 = stdlib.gt(v15423, v15417);
  const v15425 = [v15419, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v15426 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15417];
  const v15427 = v15424 ? v15425 : v15426;
  const v15429 = v15427[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
  const v15430 = v15427[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
  const v15449 = stdlib.sub(v15386, v15407);
  const v15453 = stdlib.sub(v15392, v15429);
  const v15456 = stdlib.sub(v15449, v15430);
  const v15469 = stdlib.le(v15377, v15407);
  stdlib.assert(v15469, {
    at: './index.rsh:473:14:application',
    fs: ['at ./index.rsh:525:36:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:525:15:application call to [unknown function] (defined at: ./index.rsh:525:15:function exp)', 'at ./index.rsh:525:15:application call to [unknown function] (defined at: ./index.rsh:525:15:function exp)', 'at ./index.rsh:387:19:application call to "runTrader_swapAForB0_12035" (defined at: ./index.rsh:524:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v15472 = stdlib.cast(false, true, v15385);
  const v15474 = stdlib.mul256(v15472, v15404);
  const v15475 = stdlib.cast(false, true, v15453);
  const v15476 = stdlib.cast(false, true, v15456);
  const v15477 = stdlib.mul256(v15475, v15476);
  const v15478 = stdlib.ge256(v15477, v15474);
  stdlib.assert(v15478, {
    at: './index.rsh:483:14:application',
    fs: ['at ./index.rsh:525:36:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:525:15:application call to [unknown function] (defined at: ./index.rsh:525:15:function exp)', 'at ./index.rsh:525:15:application call to [unknown function] (defined at: ./index.rsh:525:15:function exp)', 'at ./index.rsh:387:19:application call to "runTrader_swapAForB0_12035" (defined at: ./index.rsh:524:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v15483 = ['Trader_swapAForB0_12035', v15375];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093, v15483],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:379:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:526:25:decimal', stdlib.UInt_max, '0'), v15052], [v15376, v14994], [stdlib.checkedBigNumberify('./index.rsh:526:31:decimal', stdlib.UInt_max, '0'), v14995]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn1;
      
      switch (v15824[0]) {
        case 'Protocol_harvest0_12035': {
          const v15827 = v15824[1];
          
          break;
          }
        case 'Provider_deposit0_12035': {
          const v16672 = v15824[1];
          
          break;
          }
        case 'Provider_withdraw0_12035': {
          const v17517 = v15824[1];
          
          break;
          }
        case 'Trader_swapAForB0_12035': {
          const v18362 = v15824[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v18429 = v18362[stdlib.checkedBigNumberify('./index.rsh:524:9:spread', stdlib.UInt_max, '0')];
          ;
          ;
          sim_r.txns.push({
            amt: v18429,
            kind: 'to',
            tok: v14994
            });
          ;
          const v18888 = v18362[stdlib.checkedBigNumberify('./index.rsh:524:9:spread', stdlib.UInt_max, '1')];
          const v18891 = v15089.locked;
          const v18892 = v18891 ? false : true;
          ;
          const v18893 = v15087.A;
          const v18894 = v15087.B;
          const v18895 = v15089.protoFee;
          const v18896 = v15089.totFee;
          const v18900 = stdlib.add(v18893, v18429);
          const v18904 = stdlib.muldiv(v18429, v18894, v18900);
          const v18905 = stdlib.cast(false, true, v18429);
          const v18906 = stdlib.cast(false, true, v18896);
          const v18907 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18906);
          const v18908 = stdlib.mul256(v18905, v18907);
          const v18909 = stdlib.cast(false, true, v18900);
          const v18910 = stdlib.mul256(v18909, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v18911 = stdlib.add256(v18910, v18908);
          const v18912 = stdlib.cast(false, true, v18894);
          const v18913 = stdlib.mul256(v18908, v18912);
          const v18914 = stdlib.div256(v18913, v18911);
          const v18915 = stdlib.cast(true, false, v18914);
          const v18918 = stdlib.sub(v18904, v18915);
          const v18921 = stdlib.mul(v18895, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
          const v18922 = stdlib.div(v18921, v18896);
          const v18925 = stdlib.muldiv(v18918, v18922, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
          const v18927 = stdlib.muldiv(v18429, v18895, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
          const v18931 = stdlib.muldiv(v18927, v18894, v18900);
          const v18932 = stdlib.gt(v18931, v18925);
          const v18933 = [v18927, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v18934 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18925];
          const v18935 = v18932 ? v18933 : v18934;
          const v18937 = v18935[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
          const v18938 = v18935[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
          const v18957 = stdlib.sub(v18894, v18915);
          const v18961 = stdlib.sub(v18900, v18937);
          const v18964 = stdlib.sub(v18957, v18938);
          const v18965 = {
            A: v18961,
            B: v18964
            };
          const v18966 = v15088.A;
          const v18970 = stdlib.add(v18966, v18937);
          const v18971 = v15088.B;
          const v18975 = stdlib.add(v18971, v18938);
          const v18976 = {
            A: v18970,
            B: v18975
            };
          const v18977 = stdlib.le(v18888, v18915);
          ;
          const v18980 = stdlib.cast(false, true, v18893);
          const v18982 = stdlib.mul256(v18980, v18912);
          const v18983 = stdlib.cast(false, true, v18961);
          const v18984 = stdlib.cast(false, true, v18964);
          const v18985 = stdlib.mul256(v18983, v18984);
          const v18986 = stdlib.ge256(v18985, v18982);
          ;
          sim_r.txns.push({
            amt: v18915,
            kind: 'from',
            to: v15823,
            tok: v14995
            });
          const v19025 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v18915
            };
          const v19026 = await txn1.getOutput('Trader_swapAForB', 'v19025', ctc10, v19025);
          
          const v19035 = {
            A: v18429,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v19037 = {
            A: v18961,
            B: v18964
            };
          null;
          const v24212 = v15086;
          const v24213 = v18965;
          const v24214 = v18976;
          const v24215 = v15089;
          const v24217 = v15093;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_12035': {
          const v19207 = v15824[1];
          
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
  const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn1;
  switch (v15824[0]) {
    case 'Protocol_harvest0_12035': {
      const v15827 = v15824[1];
      return;
      break;
      }
    case 'Provider_deposit0_12035': {
      const v16672 = v15824[1];
      return;
      break;
      }
    case 'Provider_withdraw0_12035': {
      const v17517 = v15824[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_12035': {
      const v18362 = v15824[1];
      undefined /* setApiDetails */;
      const v18429 = v18362[stdlib.checkedBigNumberify('./index.rsh:524:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      ;
      const v18888 = v18362[stdlib.checkedBigNumberify('./index.rsh:524:9:spread', stdlib.UInt_max, '1')];
      const v18891 = v15089.locked;
      const v18892 = v18891 ? false : true;
      stdlib.assert(v18892, {
        at: './index.rsh:452:14:application',
        fs: ['at ./index.rsh:527:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:527:18:application call to [unknown function] (defined at: ./index.rsh:527:18:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v18893 = v15087.A;
      const v18894 = v15087.B;
      const v18895 = v15089.protoFee;
      const v18896 = v15089.totFee;
      const v18900 = stdlib.add(v18893, v18429);
      const v18904 = stdlib.muldiv(v18429, v18894, v18900);
      const v18905 = stdlib.cast(false, true, v18429);
      const v18906 = stdlib.cast(false, true, v18896);
      const v18907 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18906);
      const v18908 = stdlib.mul256(v18905, v18907);
      const v18909 = stdlib.cast(false, true, v18900);
      const v18910 = stdlib.mul256(v18909, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v18911 = stdlib.add256(v18910, v18908);
      const v18912 = stdlib.cast(false, true, v18894);
      const v18913 = stdlib.mul256(v18908, v18912);
      const v18914 = stdlib.div256(v18913, v18911);
      const v18915 = stdlib.cast(true, false, v18914);
      const v18918 = stdlib.sub(v18904, v18915);
      const v18921 = stdlib.mul(v18895, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
      const v18922 = stdlib.div(v18921, v18896);
      const v18925 = stdlib.muldiv(v18918, v18922, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
      const v18927 = stdlib.muldiv(v18429, v18895, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
      const v18931 = stdlib.muldiv(v18927, v18894, v18900);
      const v18932 = stdlib.gt(v18931, v18925);
      const v18933 = [v18927, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v18934 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18925];
      const v18935 = v18932 ? v18933 : v18934;
      const v18937 = v18935[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
      const v18938 = v18935[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
      const v18957 = stdlib.sub(v18894, v18915);
      const v18961 = stdlib.sub(v18900, v18937);
      const v18964 = stdlib.sub(v18957, v18938);
      const v18965 = {
        A: v18961,
        B: v18964
        };
      const v18966 = v15088.A;
      const v18970 = stdlib.add(v18966, v18937);
      const v18971 = v15088.B;
      const v18975 = stdlib.add(v18971, v18938);
      const v18976 = {
        A: v18970,
        B: v18975
        };
      const v18977 = stdlib.le(v18888, v18915);
      stdlib.assert(v18977, {
        at: './index.rsh:473:14:application',
        fs: ['at ./index.rsh:527:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:527:18:application call to [unknown function] (defined at: ./index.rsh:527:18:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v18980 = stdlib.cast(false, true, v18893);
      const v18982 = stdlib.mul256(v18980, v18912);
      const v18983 = stdlib.cast(false, true, v18961);
      const v18984 = stdlib.cast(false, true, v18964);
      const v18985 = stdlib.mul256(v18983, v18984);
      const v18986 = stdlib.ge256(v18985, v18982);
      stdlib.assert(v18986, {
        at: './index.rsh:483:14:application',
        fs: ['at ./index.rsh:527:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:527:18:application call to [unknown function] (defined at: ./index.rsh:527:18:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      ;
      const v19025 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v18915
        };
      const v19026 = await txn1.getOutput('Trader_swapAForB', 'v19025', ctc10, v19025);
      if (v13626) {
        stdlib.protect(ctc1, await interact.out(v18362, v19026), {
          at: './index.rsh:524:10:application',
          fs: ['at ./index.rsh:524:10:application call to [unknown function] (defined at: ./index.rsh:524:10:function exp)', 'at ./index.rsh:486:12:application call to "k" (defined at: ./index.rsh:527:18:function exp)', 'at ./index.rsh:527:54:application call to [unknown function] (defined at: ./index.rsh:484:20:function exp)', 'at ./index.rsh:527:18:application call to [unknown function] (defined at: ./index.rsh:527:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v19035 = {
        A: v18429,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v19037 = {
        A: v18961,
        B: v18964
        };
      null;
      const v24212 = v15086;
      const v24213 = v18965;
      const v24214 = v18976;
      const v24215 = v15089;
      const v24217 = v15093;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_12035': {
      const v19207 = v15824[1];
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
    Protocol_harvest0_12035: ctc9,
    Provider_deposit0_12035: ctc11,
    Provider_withdraw0_12035: ctc12,
    Trader_swapAForB0_12035: ctc8,
    Trader_swapBForA0_12035: ctc8
    });
  
  
  const [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v15487 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:530:15:application call to [unknown function] (defined at: ./index.rsh:530:15:function exp)', 'at ./index.rsh:387:19:application call to "runTrader_swapBForA0_12035" (defined at: ./index.rsh:529:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v15488 = v15487[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15489 = v15487[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15495 = v15089.locked;
  const v15496 = v15495 ? false : true;
  stdlib.assert(v15496, {
    at: './index.rsh:452:14:application',
    fs: ['at ./index.rsh:530:36:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:530:15:application call to [unknown function] (defined at: ./index.rsh:530:15:function exp)', 'at ./index.rsh:530:15:application call to [unknown function] (defined at: ./index.rsh:530:15:function exp)', 'at ./index.rsh:387:19:application call to "runTrader_swapBForA0_12035" (defined at: ./index.rsh:529:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v15497 = v15087.A;
  const v15498 = v15087.B;
  const v15499 = v15089.protoFee;
  const v15500 = v15089.totFee;
  const v15504 = stdlib.add(v15498, v15488);
  const v15508 = stdlib.muldiv(v15488, v15497, v15504);
  const v15509 = stdlib.cast(false, true, v15488);
  const v15510 = stdlib.cast(false, true, v15500);
  const v15511 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15510);
  const v15512 = stdlib.mul256(v15509, v15511);
  const v15513 = stdlib.cast(false, true, v15504);
  const v15514 = stdlib.mul256(v15513, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v15515 = stdlib.add256(v15514, v15512);
  const v15516 = stdlib.cast(false, true, v15497);
  const v15517 = stdlib.mul256(v15512, v15516);
  const v15518 = stdlib.div256(v15517, v15515);
  const v15519 = stdlib.cast(true, false, v15518);
  const v15522 = stdlib.sub(v15508, v15519);
  const v15525 = stdlib.mul(v15499, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
  const v15526 = stdlib.div(v15525, v15500);
  const v15529 = stdlib.muldiv(v15522, v15526, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
  const v15531 = stdlib.muldiv(v15488, v15499, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
  const v15535 = stdlib.muldiv(v15531, v15497, v15504);
  const v15536 = stdlib.gt(v15535, v15529);
  const v15537 = [v15531, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v15538 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15529];
  const v15539 = v15536 ? v15537 : v15538;
  const v15541 = v15539[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
  const v15542 = v15539[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
  const v15559 = stdlib.sub(v15497, v15519);
  const v15565 = stdlib.sub(v15559, v15542);
  const v15568 = stdlib.sub(v15504, v15541);
  const v15581 = stdlib.le(v15489, v15519);
  stdlib.assert(v15581, {
    at: './index.rsh:473:14:application',
    fs: ['at ./index.rsh:530:36:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:530:15:application call to [unknown function] (defined at: ./index.rsh:530:15:function exp)', 'at ./index.rsh:530:15:application call to [unknown function] (defined at: ./index.rsh:530:15:function exp)', 'at ./index.rsh:387:19:application call to "runTrader_swapBForA0_12035" (defined at: ./index.rsh:529:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v15586 = stdlib.cast(false, true, v15498);
  const v15587 = stdlib.mul256(v15516, v15586);
  const v15588 = stdlib.cast(false, true, v15565);
  const v15589 = stdlib.cast(false, true, v15568);
  const v15590 = stdlib.mul256(v15588, v15589);
  const v15591 = stdlib.ge256(v15590, v15587);
  stdlib.assert(v15591, {
    at: './index.rsh:483:14:application',
    fs: ['at ./index.rsh:530:36:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:530:15:application call to [unknown function] (defined at: ./index.rsh:530:15:function exp)', 'at ./index.rsh:530:15:application call to [unknown function] (defined at: ./index.rsh:530:15:function exp)', 'at ./index.rsh:387:19:application call to "runTrader_swapBForA0_12035" (defined at: ./index.rsh:529:9:function exp)', 'at ./index.rsh:387:19:application call to [unknown function] (defined at: ./index.rsh:387:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v15596 = ['Trader_swapBForA0_12035', v15487];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14994, v14995, v15024, v15052, v15083, v15086, v15087, v15088, v15089, v15093, v15596],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:379:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:531:25:decimal', stdlib.UInt_max, '0'), v15052], [stdlib.checkedBigNumberify('./index.rsh:531:28:decimal', stdlib.UInt_max, '0'), v14994], [v15488, v14995]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn1;
      
      switch (v15824[0]) {
        case 'Protocol_harvest0_12035': {
          const v15827 = v15824[1];
          
          break;
          }
        case 'Provider_deposit0_12035': {
          const v16672 = v15824[1];
          
          break;
          }
        case 'Provider_withdraw0_12035': {
          const v17517 = v15824[1];
          
          break;
          }
        case 'Trader_swapAForB0_12035': {
          const v18362 = v15824[1];
          
          break;
          }
        case 'Trader_swapBForA0_12035': {
          const v19207 = v15824[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v19293 = v19207[stdlib.checkedBigNumberify('./index.rsh:529:9:spread', stdlib.UInt_max, '0')];
          ;
          ;
          ;
          sim_r.txns.push({
            amt: v19293,
            kind: 'to',
            tok: v14995
            });
          const v19893 = v19207[stdlib.checkedBigNumberify('./index.rsh:529:9:spread', stdlib.UInt_max, '1')];
          const v19896 = v15089.locked;
          const v19897 = v19896 ? false : true;
          ;
          const v19898 = v15087.A;
          const v19899 = v15087.B;
          const v19900 = v15089.protoFee;
          const v19901 = v15089.totFee;
          const v19905 = stdlib.add(v19899, v19293);
          const v19909 = stdlib.muldiv(v19293, v19898, v19905);
          const v19910 = stdlib.cast(false, true, v19293);
          const v19911 = stdlib.cast(false, true, v19901);
          const v19912 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v19911);
          const v19913 = stdlib.mul256(v19910, v19912);
          const v19914 = stdlib.cast(false, true, v19905);
          const v19915 = stdlib.mul256(v19914, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v19916 = stdlib.add256(v19915, v19913);
          const v19917 = stdlib.cast(false, true, v19898);
          const v19918 = stdlib.mul256(v19913, v19917);
          const v19919 = stdlib.div256(v19918, v19916);
          const v19920 = stdlib.cast(true, false, v19919);
          const v19923 = stdlib.sub(v19909, v19920);
          const v19926 = stdlib.mul(v19900, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
          const v19927 = stdlib.div(v19926, v19901);
          const v19930 = stdlib.muldiv(v19923, v19927, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
          const v19932 = stdlib.muldiv(v19293, v19900, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
          const v19936 = stdlib.muldiv(v19932, v19898, v19905);
          const v19937 = stdlib.gt(v19936, v19930);
          const v19938 = [v19932, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v19939 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19930];
          const v19940 = v19937 ? v19938 : v19939;
          const v19942 = v19940[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
          const v19943 = v19940[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
          const v19960 = stdlib.sub(v19898, v19920);
          const v19966 = stdlib.sub(v19960, v19943);
          const v19969 = stdlib.sub(v19905, v19942);
          const v19970 = {
            A: v19966,
            B: v19969
            };
          const v19971 = v15088.A;
          const v19975 = stdlib.add(v19971, v19943);
          const v19976 = v15088.B;
          const v19980 = stdlib.add(v19976, v19942);
          const v19981 = {
            A: v19975,
            B: v19980
            };
          const v19982 = stdlib.le(v19893, v19920);
          ;
          const v19987 = stdlib.cast(false, true, v19899);
          const v19988 = stdlib.mul256(v19917, v19987);
          const v19989 = stdlib.cast(false, true, v19966);
          const v19990 = stdlib.cast(false, true, v19969);
          const v19991 = stdlib.mul256(v19989, v19990);
          const v19992 = stdlib.ge256(v19991, v19988);
          ;
          sim_r.txns.push({
            amt: v19920,
            kind: 'from',
            to: v15823,
            tok: v14994
            });
          const v20031 = {
            A: v19920,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v20032 = await txn1.getOutput('Trader_swapBForA', 'v20031', ctc10, v20031);
          
          const v20041 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v19293
            };
          const v20043 = {
            A: v19966,
            B: v19969
            };
          null;
          const v24302 = v15086;
          const v24303 = v19970;
          const v24304 = v19981;
          const v24305 = v15089;
          const v24307 = v15093;
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
  const {data: [v15824], secs: v15826, time: v15825, didSend: v13626, from: v15823 } = txn1;
  switch (v15824[0]) {
    case 'Protocol_harvest0_12035': {
      const v15827 = v15824[1];
      return;
      break;
      }
    case 'Provider_deposit0_12035': {
      const v16672 = v15824[1];
      return;
      break;
      }
    case 'Provider_withdraw0_12035': {
      const v17517 = v15824[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_12035': {
      const v18362 = v15824[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_12035': {
      const v19207 = v15824[1];
      undefined /* setApiDetails */;
      const v19293 = v19207[stdlib.checkedBigNumberify('./index.rsh:529:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      ;
      const v19893 = v19207[stdlib.checkedBigNumberify('./index.rsh:529:9:spread', stdlib.UInt_max, '1')];
      const v19896 = v15089.locked;
      const v19897 = v19896 ? false : true;
      stdlib.assert(v19897, {
        at: './index.rsh:452:14:application',
        fs: ['at ./index.rsh:532:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:532:18:application call to [unknown function] (defined at: ./index.rsh:532:18:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v19898 = v15087.A;
      const v19899 = v15087.B;
      const v19900 = v15089.protoFee;
      const v19901 = v15089.totFee;
      const v19905 = stdlib.add(v19899, v19293);
      const v19909 = stdlib.muldiv(v19293, v19898, v19905);
      const v19910 = stdlib.cast(false, true, v19293);
      const v19911 = stdlib.cast(false, true, v19901);
      const v19912 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v19911);
      const v19913 = stdlib.mul256(v19910, v19912);
      const v19914 = stdlib.cast(false, true, v19905);
      const v19915 = stdlib.mul256(v19914, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v19916 = stdlib.add256(v19915, v19913);
      const v19917 = stdlib.cast(false, true, v19898);
      const v19918 = stdlib.mul256(v19913, v19917);
      const v19919 = stdlib.div256(v19918, v19916);
      const v19920 = stdlib.cast(true, false, v19919);
      const v19923 = stdlib.sub(v19909, v19920);
      const v19926 = stdlib.mul(v19900, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
      const v19927 = stdlib.div(v19926, v19901);
      const v19930 = stdlib.muldiv(v19923, v19927, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
      const v19932 = stdlib.muldiv(v19293, v19900, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
      const v19936 = stdlib.muldiv(v19932, v19898, v19905);
      const v19937 = stdlib.gt(v19936, v19930);
      const v19938 = [v19932, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v19939 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19930];
      const v19940 = v19937 ? v19938 : v19939;
      const v19942 = v19940[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
      const v19943 = v19940[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
      const v19960 = stdlib.sub(v19898, v19920);
      const v19966 = stdlib.sub(v19960, v19943);
      const v19969 = stdlib.sub(v19905, v19942);
      const v19970 = {
        A: v19966,
        B: v19969
        };
      const v19971 = v15088.A;
      const v19975 = stdlib.add(v19971, v19943);
      const v19976 = v15088.B;
      const v19980 = stdlib.add(v19976, v19942);
      const v19981 = {
        A: v19975,
        B: v19980
        };
      const v19982 = stdlib.le(v19893, v19920);
      stdlib.assert(v19982, {
        at: './index.rsh:473:14:application',
        fs: ['at ./index.rsh:532:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:532:18:application call to [unknown function] (defined at: ./index.rsh:532:18:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v19987 = stdlib.cast(false, true, v19899);
      const v19988 = stdlib.mul256(v19917, v19987);
      const v19989 = stdlib.cast(false, true, v19966);
      const v19990 = stdlib.cast(false, true, v19969);
      const v19991 = stdlib.mul256(v19989, v19990);
      const v19992 = stdlib.ge256(v19991, v19988);
      stdlib.assert(v19992, {
        at: './index.rsh:483:14:application',
        fs: ['at ./index.rsh:532:27:application call to "doSwap" (defined at: ./index.rsh:451:57:function exp)', 'at ./index.rsh:532:18:application call to [unknown function] (defined at: ./index.rsh:532:18:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      ;
      const v20031 = {
        A: v19920,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v20032 = await txn1.getOutput('Trader_swapBForA', 'v20031', ctc10, v20031);
      if (v13626) {
        stdlib.protect(ctc1, await interact.out(v19207, v20032), {
          at: './index.rsh:529:10:application',
          fs: ['at ./index.rsh:529:10:application call to [unknown function] (defined at: ./index.rsh:529:10:function exp)', 'at ./index.rsh:486:12:application call to "k" (defined at: ./index.rsh:532:18:function exp)', 'at ./index.rsh:532:55:application call to [unknown function] (defined at: ./index.rsh:484:20:function exp)', 'at ./index.rsh:532:18:application call to [unknown function] (defined at: ./index.rsh:532:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v20041 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v19293
        };
      const v20043 = {
        A: v19966,
        B: v19969
        };
      null;
      const v24302 = v15086;
      const v24303 = v19970;
      const v24304 = v19981;
      const v24305 = v15089;
      const v24307 = v15093;
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
  appApproval: `BiAVAAgYBAFkEAIDoI0GkE614PDBB5nro4cK2ZSsoApJuPeR5Qfg8+yqAu6I6cQCGf///////////wEGJgUBAQEAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAQ81lT6IjUAMRhBC+cqZEkiWzUBI1s1AjYaABdJQQGyIjUEIQQ1BkkhCwxAAVBJIQwMQAEgSSENDEAA/yENEkQ0AUklDEAAeSUSRClkKGRQSTUDSUpXMRA1/1dBEDX+V1EQNf1XYTk1/DQDVxkINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXAAg0/FcICFA0/FcQCFA0/FcYIFA0/Fc4AVBQNP1XAAg0/VcICFBQNANXCAhQNANXEAlQNQdCCyshBxJEKWQoZFBJNQNJSlchEDX/VzEQNf5XQRA1/VdROTX8NANXGQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cICFA0A1cQCVA1B0IKsSEMEkQ2GgE2GgJQNf+AAQM0/1AhDq9QQgCcSSEPDEAAGiEPEkQ2GgE2GgJQNf+AAQQ0/1AhDq9QQgB7IQsSRCpCB0JJIRAMQAAzSSERDEAAFCEREkQ2GgE2GgJQNf8pNP9QQgBRIRASRDYaATYaAlA1/yg0/1CBQa9QQgA5geT86oECEkQ2GgE1/4ABAjT/UIFRr1BCAB82GgIXNQQ2GgM2GgEXSSEHDEAHV0khCAxABtIhCBJEJTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSkoiWzX/I1s1/lcQCTX9IRJbNfxXIRA1+1cxEDX6V0EQNflXURA1+FdhOTX3gZoBWzX2STUFNfWABEdoRx809VCwNPUiVUkhBwxAA/NJIQgMQAMMSSUMQAGEJRJENPVXARA19DT0Ils18zTzNP6ICZo091c4ARcURDT5Ils18jT5I1s18TT3Ils18DT3IQZbNe808TTzCDXuJK808xZQKySvNO8WUKGICYGjiAl9Ne0krzTyFlA17DTtNOyjiAlrJK807hZQK6OICWA07aCICVqiiAlWSUohBlsiEkQjWyISRCJbIhJEJFs16zTzNPIdNO6XNOsJNPAhBQs07wodIQWXNeo08zTwHSEKlzXpI6806hZQNOkWI69QNOk08h007pc06g1NSTXoIls15zToI1s15jTyNOsJNOYJNeU07jTnCTXkNPQjWzTrDkQkrzTlFlAkrzTkFlCjiAjPNOwkrzTxFlCjiAjDp0SxIrIBNOuyEiWyEDEAshQ0/7IRszTrFiOvUDXjgAgAAAAAAABOPzTjULA04zUHJwQxAFAjrzTzFlBQNONQNOUWNOQWUFCwNP80/jT9NPw0+yI0+jTlFjTkFlA0+CJbNOYIFjT4I1s05wgWUDT3MgY09kIHLEg09VcBEDX0NPQiWzXzNPM0/4gIGDT3VzgBFxRENPkiWzXyNPkjWzXxNPciWzXwNPchBls17zTyNPMINe4krzTzFlArJK807xZQoYgH/6OIB/s17SSvNPEWUDXsNO007KOIB+kkrzTuFlAro4gH3jTtoIgH2KKIB9RJSiEGWyISRCNbIhJEIlsiEkQkWzXrNPM08R007pc06wk08CEFCzTvCh0hBZc16jTzNPAdIQqXNekjrzTqFlA06RYjr1A06TTxHTTulzTqDU1JNegiWzXnNOgjWzXmNO405wk15TTxNOsJNOYJNeQ09CNbNOsORCSvNOUWUCSvNOQWUKOIB00krzTyFlA07KOIB0GnRLEisgE067ISJbIQMQCyFDT+shGzI6806xZQNeOACAAAAAAAAEpRNONQsDTjNQcnBDEAUDTzFiOvUFA041A05RY05BZQULA0/zT+NP00/DT7IjT6NOUWNOQWUDT4Ils05wgWNPgjWzTmCBZQNPcyBjT2QgWqSDT1VwEINfQ09Bc18zTzNPyIBpc0+iNbNfI0+SJbNfE0+SNbNfA08zTxHTTylzXvNPM08B008pc17jT6Ils08wg17TTyNPMJNew08TTvCTXrNPA07gk16rEisgE077ISJbIQMQCyFDT/shGzsSKyATTushIlshAxALIUNP6yEbM07xY07hZQNemACAAAAAAAAEZlNOlQsDTpNQeABBzUrl8xAFA08xZQNOlQNOsWNOoWUFA07RY07BZQULA0/zT+NP00/DT7IjTtFjTsFlA06xY06hZQNPg09zIGNPZCBMpJIQQMQAFHSDT1VwEYNfQ09FcAEEk18yJbNfI08yNbNfE08jT/iAWjNPE0/ogFnDT0IQZbNfA091c4ARcURDT6I1tJNe4iEkEASSSvNPIWUDXtJK808RZQNewkrzTwFlBJNetJo4gFgzXqNOw07Uk07KVNNek07TTso4gFbjTqpkQ06jTpSaOIBWGmRDTwNe9CACc08CISRDTyNO4dNPkiW5c17TTxNO4dNPkjW5dJNew07Uk07AxNNe808jT5IlsINe008TT5I1sINew0+iJbNO8JNes07jTvCDXqsSKyATTvshIlshAxALIUNPyyEbOACAAAAAAAAEJONO8WULA07xY1B4AE3hsp9TEAUDTyFjTxFlBQNO8WUDTtFjTsFlBQNOsWNOoWUFCwNP80/jT9NPw0+yI06xY06hZQNO0WNOwWUDT4NPcyBjT2QgN8SDT1VwFZNfQ09FcAIDXzNPRXIDk18jEANPdXGCASRDTyIls18TTyI1s18DTyIQZbNe808SEFDDTwIQUMEDTvNPA08QgSEDTvIQUMEDTvIg0QRDIKYDIKeAk09gk17jTyVzgBFzXtNPgiWzXsNPgjWzXrsSKyATTusgghBLIQNPOyB7OxIrIBNOyyEiWyEDTzshQ0/7IRs7EisgE067ISJbIQNPOyFDT+shGzgAgAAAAAAAA+2DTsFjTrFlA07hZQULA07BY06xZQNO4WUDUHgARWrXU8NPEWNPAWUDTvFlA08lcYIFA07RZRBwhQULA0/zT+NP00/DT7NO00+iNbIhIQNPkiWyISNPkjWyISEBA0+jT5NPs08jIGNO409gg07glCAldIIQc0ARJENARJIhJMNAISEUQpZChkUEk1AyESWzX/STUFNf6ABCU8t9c0/lCwgAgAAAAAAABOcrAqNQexIrIBIQiyEDT/siGzsSKyASKyEiWyEDIJshUyCrIUNAMjW7IRs7EisgEishIlshAyCbIVMgqyFDQDIluyEbNCAmQiEkQiNAESRDQESSISTDQCEhFESTUFSUpJIls1/yNbNf5XECA1/VcwCDX8gThbNfuABKZk4mE0/xZQNP4WUDT9UDT8UDT7FlCwIQmIAnI0/zT+E0QhCYgCZ7EisgEishIlshAyCrIUNP+yEbMhCYgCT7EisgEishIlshAyCrIUNP6yEbMhEyEKDUQoNP8WUDX6gAVhcHBJRDT7FlADNfgyCmAyCngJFjX3sSKyASEUshA0+7IYgARJWgposhoxGBayGjT6sho0/hayGrMyCmAyCngJNPcXCRa3AD5XBABQNfmACAAAAAAAADqxNPlQsDT5STX4Ils19zT4Vwg5STX2Ils19TT2I1s19DT2IQZbNfM09SEFDDT0IQUMEDTzNPQ09QgSEDTzIQUMEDTzIg0QRCI09xJEIQmIAYWxIrIBIQiyECETsiIhFLIjNPyyJTT9siaBYK+yJzIDsigyCrIps7Q8NfKACAAAAAAAADrLNPIWULA08jXxIjXwIjXvNP8WNP4WUCM07wsjWBc17jTxNO4SNPBJTTXwNO8hBAhJNe8hBwxA/9c08BREIQavNe80/zT+NPo08TTvIoAQ//////////8AAAAAAAAAADTvSTT2MgY090IAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DT5QQA0NPQWNPUWUDT2UDT3FlA0+lA0+1A0/FA0/VApSwFXAH9nKEsBV38LZ0ghBzUBMgY1AkIAVzT0FjT1FlA09lA09xZQNPhQNPpQNPtQNPxQNP1QNP8WUClLAVcAf2coSwFXfyNnSCU1ATIGNQJCAB0xGYEFEkSxIrIBIrIIIQSyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIQQIMgQSRDEWEkQhBEMxGSISREL/3SI1ASI1AkL/wTQASUohBAg1ADgHMgoSRDgQIQQSRDgIEkSJNABJSkkhBAg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIlJFYEgTAmvTFCJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 162,
  unsupported: [],
  version: 10,
  warnings: [`Step 0 calls a remote object at /home/jay/Dev/scm/bitbucket.jeapostrophe/reach/reach-lang/users/duoswap-core/index.rsh:372:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v14994",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v14995",
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
                "name": "v14996",
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
                "name": "v14997",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v14998",
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
                "name": "v14994",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v14995",
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
                "name": "v14996",
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
                "name": "v14997",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v14998",
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
                "name": "v20079",
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
                    "name": "_Protocol_harvest0_12035",
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
                    "name": "_Provider_deposit0_12035",
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
                    "name": "_Provider_withdraw0_12035",
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
                    "name": "_Trader_swapAForB0_12035",
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
                    "name": "_Trader_swapBForA0_12035",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v15824",
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
    "name": "_reach_oe_v15025",
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
    "name": "_reach_oe_v15051",
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
    "name": "_reach_oe_v16088",
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
    "name": "_reach_oe_v16974",
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
    "name": "_reach_oe_v18021",
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
    "name": "_reach_oe_v19025",
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
    "name": "_reach_oe_v20031",
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
    "name": "_reach_oe_v20082",
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
                "name": "v20079",
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
                    "name": "_Protocol_harvest0_12035",
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
                    "name": "_Provider_deposit0_12035",
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
                    "name": "_Provider_withdraw0_12035",
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
                    "name": "_Trader_swapAForB0_12035",
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
                    "name": "_Trader_swapBForA0_12035",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v15824",
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
  Bytecode: `0x608060405260405162005eea38038062005eea833981016040819052620000269162000eb8565b60008055436003556200003862000a17565b6040805133815283516020808301919091528085015180516001600160a01b0390811684860152918101518216606080850191909152818501515160808086019190915290820151516001600160c01b03191660a085015201511660c082015290517f66095a5d4ca377fa5a0b722e6c172d5ca90f298b536389b9d6a157cb6c4a67a29181900360e00190a1620001058260200151602001516001600160a01b03168360200151600001516001600160a01b031614620000fa576001620000fd565b60005b60086200075a565b62000113341560096200075a565b620001216001600a6200075a565b8051600190526020820180515182516001600160a01b03909116604090910152515160009062000152903062000785565b6200015e919062000fcb565b6101c082015260208083015101516000906200017b903062000785565b62000187919062000fcb565b6102008201526200019a60004762000fcb565b6101a082015280516020808401510151604051600092633b02a71760e01b92620001cb923092919060240162001028565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460200151608001516001600160a01b03166000846040516200022791906200108d565b60006040518083038185875af1925050503d806000811462000266576040519150601f19603f3d011682016040523d82523d6000602084013e6200026b565b606091505b5090925090506200027f8282600d62000869565b506101c084015160208601515162000298903062000785565b620002a4919062000fcb565b6101e08501819052620002ba9015600b6200075a565b6102008401516020808701510151620002d4903062000785565b620002e0919062000fcb565b6102208501819052620002f69015600c6200075a565b6101a084015162000308904762000fcb565b60208086015191909152815162000327919083018101908301620010ab565b6020808601805190910191909152516040808601829052517f55a55e2c7bef2e9e2bc9e84a1e3f7656ef60076c40c455bb0db89ca5abe3243b916200036c9162001177565b60405180910390a1620004226064856040015160200151600001511062000395576000620003a6565b606485604001516020015160200151105b620003b3576000620003de565b60408501516020908101518051910151620003cf91906200119b565b85604001516020015160400151145b620003eb576000620003fc565b606485604001516020015160400151105b620004095760006200041a565b600085604001516020015160400151115b600e6200075a565b604084015151620004369015600f6200075a565b606084018051600019905251600060209182018190526080860180518290528051830182905251604090810182905260a08701519190915286820151810151518151928301520160408051601f198184030181529082905260208781015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260808881015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a089015151602084015291016040516020818303038152906040526000196012604051620005219062000af9565b6200053296959493929190620011e4565b604051809103906000f0801580156200054f573d6000803e3d6000fd5b506001600160a01b031660c0850181905260e085018190526040517f23f99ca3e582a0f77f1cf4c4c0b56540ef3fd8a8881dc48e629c0f6eef7c57779162000597916200124f565b60405180910390a16020858101805151610100870180516001600160a01b039283169052915183015191519116910152600061014085018190525b60028110156200065d578461010001518160028110620005f657620005f662001263565b60200201516001600160a01b031661016086015261014085015162000639578461016001516001600160a01b03168560e001516001600160a01b03161462000640565b8461014001515b151561014086015280620006548162001279565b915050620005d2565b50610140840151151561012085018190526200068b906200068057600162000683565b60005b60106200075a565b61018084018051600090819052905160200152620006a862000b07565b602080870180515183516001600160a01b03918216905290518201518351908216908301528651835160409081019190915260e088015184519216606092830152610180880180518551608090810191909152858501805160009052848b0151815187015282518151850152915182519094019390935290880180519093015181519092019190915280514360a090910152905151905160c001526200074e81620008af565b50505050505062001468565b81620007815760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000806000846001600160a01b031660006370a0823160e01b86604051602401620007b191906200124f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051620007f191906200108d565b60006040518083038185875af1925050503d806000811462000830576040519150601f19603f3d011682016040523d82523d6000602084013e62000835565b606091505b509092509050620008498282600662000869565b508080602001905181019062000860919062001295565b95945050505050565b606083156200087a575081620008a8565b8251156200088b5782518084602001fd5b60405163100960cb60e01b81526004810183905260240162000778565b9392505050565b602081015151156200097257620008c562000b30565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151818501528451606090810151909316838501528185018051830151608080870191909152815183015160a087015281519094015160c0860152519092015160e084015260026000554360015590516200094791839101620012be565b604051602081830303815290604052600290805190602001906200096d92919062000b95565b505050565b6200097c62000c24565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152828601805184015160a0870152805183015160c08088019190915281519095015160e087015280519091015161010086015251909201516101208401526004600055436001559051620009479183910162001356565b60405180610240016040528062000a2d62000ca5565b815260200162000a3c62000cc7565b815260200162000a4b62000cc7565b815260200162000a5a62000ce3565b81526040805160608101825260008082526020828101829052928201529101908152604080516020818101909252600081529101908152600060208201819052604082015260600162000aac62000cfd565b815260006020820181905260408201819052606082015260800162000ad062000ce3565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6110278062004ec383390190565b604051806040016040528062000b1c62000d1b565b815260200162000b2b62000d52565b905290565b60408051610100810182526000808252602082015290810162000b5262000ca5565b81526000602082015260400162000b6862000ce3565b815260200162000b7762000ce3565b815260200162000b8662000ce3565b815260200162000b2b62000db1565b82805462000ba3906200142c565b90600052602060002090601f01602090048101928262000bc7576000855562000c12565b82601f1062000be257805160ff191683800117855562000c12565b8280016001018555821562000c12579182015b8281111562000c1257825182559160200191906001019062000bf5565b5062000c2092915062000deb565b5090565b60408051610140810182526000808252602082015290810162000c4662000ca5565b81526000602082015260400162000c5c62000ce3565b815260200162000c6b62000ce3565b815260200162000c7a62000ce3565b815260200162000c8962000ce3565b815260200162000c9862000db1565b8152602001600081525090565b6040805160608101909152806000815260006020820181905260409091015290565b60405180604001604052806000815260200162000b2b62000db1565b604051806040016040528060008152602001600081525090565b60405180604001604052806002906020820280368337509192915050565b6040805160a0810182526000808252602082015290810162000d3c62000ca5565b81526000602082015260400162000b2b62000ce3565b6040518060e0016040528060001515815260200162000d7062000ce3565b815260200162000d7f62000ce3565b815260200162000d8e62000ce3565b815260200162000d9d62000db1565b815260200160008152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b5b8082111562000c20576000815560010162000dec565b604080519081016001600160401b038111828210171562000e3357634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b038111828210171562000e3357634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b038111828210171562000e3357634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811462000eb357600080fd5b919050565b600081830360c081121562000ecc57600080fd5b62000ed662000e02565b8351815260a0601f198301121562000eed57600080fd5b62000ef762000e39565b62000f056020860162000e9b565b815262000f156040860162000e9b565b60208201526020605f198401121562000f2d57600080fd5b62000f3762000e6a565b6060860151815260408201526020607f198401121562000f5657600080fd5b62000f6062000e6a565b60808601519093506001600160c01b03198116811462000f7f57600080fd5b83526060810183905262000f9660a0860162000e9b565b60808201526020820152949350505050565b6001600160a01b03169052565b634e487b7160e01b600052601160045260246000fd5b60008282101562000fe05762000fe062000fb5565b500390565b8051600281106200100657634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03848116825260a082019062001049602084018662000fe5565b808416608084015250949350505050565b60005b83811015620010775781810151838201526020016200105d565b8381111562001087576000848401525b50505050565b60008251620010a18184602087016200105a565b9190910192915050565b600060a08284031215620010be57600080fd5b60405160a081016001600160401b0381118282101715620010ef57634e487b7160e01b600052604160045260246000fd5b80604052508251815260208301516020820152604083015160408201526200111a6060840162000e9b565b6060820152608083015180151581146200113357600080fd5b60808201529392505050565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260208083015160c083019162001194908401826200113f565b5092915050565b60008219821115620011b157620011b162000fb5565b500190565b60008151808452620011d08160208601602086016200105a565b601f01601f19169290920160200192915050565b60c081526000620011f960c0830189620011b6565b82810360208401526200120d8189620011b6565b90508281036040840152620012238188620011b6565b90508281036060840152620012398187620011b6565b6080840195909552505060a00152949350505050565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052603260045260246000fd5b6000600182016200128e576200128e62000fb5565b5060010190565b600060208284031215620012a857600080fd5b5051919050565b80518252602090810151910152565b81516001600160a01b03908116825260208084015182169083015260408084015161022084019291620012f49085018262000fe5565b5060608401511660a083015260808301516200131460c0840182620012af565b5060a08301516200132a610100840182620012af565b5060c083015162001340610140840182620012af565b5060e0830151620011946101808401826200113f565b6000610280820190506200136c82845162000fa8565b602083015162001380602084018262000fa8565b50604083015162001395604084018262000fe5565b506060830151620013aa60a084018262000fa8565b506080830151620013bf60c0840182620012af565b5060a0830151610100620013d681850183620012af565b60c08501519150620013ed610140850183620012af565b60e0850151915062001404610180850183620012af565b8401519050620014196101c08401826200113f565b5061012083015161026083015292915050565b600181811c908216806200144157607f821691505b6020821081036200146257634e487b7160e01b600052602260045260246000fd5b50919050565b613a4b80620014786000396000f3fe6080604052600436106100985760003560e01c80630e36a72c146100a15780631e93b0f1146100ca57806332020fec146100e95780633402da13146101095780633e59bac41461011c5780634012e02e1461012f5780638323075714610151578063842463da146101665780638bf896491461017e578063ab53f2c614610191578063c8867ae9146101b4578063dc8d714f146101c757005b3661009f57005b005b6100b46100af366004612ee8565b6101da565b6040516100c19190612f45565b60405180910390f35b3480156100d657600080fd5b506003545b6040519081526020016100c1565b6100fc6100f7366004612f53565b610249565b6040516100c19190612f6c565b6100db610117366004612faa565b6102a7565b61009f61012a366004612fd5565b610305565b34801561013b57600080fd5b50610144610329565b6040516100c1919061307c565b34801561015d57600080fd5b506001546100db565b61016e610681565b60405190151581526020016100c1565b61009f61018c366004613105565b6106b8565b34801561019d57600080fd5b506101a66106d8565b6040516100c1929190613144565b6100fc6101c236600461317e565b610775565b6100fc6101d536600461317e565b6107da565b6101e2612610565b6101ea612630565b6101f261267f565b6101fa612699565b6040805180820182526001600160a01b038816815260208082018890528381019190915260008352815180820190925282825283015261023a828461083f565b50506020015190505b92915050565b6102516126dc565b610259612630565b61026161267f565b610269612699565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261029b828461083f565b50506060015192915050565b60006102b1612630565b6102b961267f565b6102c1612699565b6040805180820182528781526020808201889052838301919091526001835281518082019092528282528301526102f8828461083f565b5050604001519392505050565b61030d612630565b61032561031f368490038401846131a0565b82611f41565b5050565b6103316126f6565b6002600054036104d25760006002805461034a90613225565b80601f016020809104026020016040519081016040528092919081815260200182805461037690613225565b80156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b50505050508060200190518101906103db9190613377565b90506103e5612754565b608080830180515183515251602090810151835182015260a08085018051518386018051919091529051830151815184015260e0860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935188015183519015159089015260c0808b01805151838c01805191909152905189015181518a0152828c01518b8b0180519188169091529a518b518a015295518a5184015292518951909101529251875190960195909552928601518551931692909101919091529092015181519092019190915251919050565b600460005403610672576000600280546104eb90613225565b80601f016020809104026020016040519081016040528092919081815260200182805461051790613225565b80156105645780601f1061053957610100808354040283529160200191610564565b820191906000526020600020905b81548152906001019060200180831161054757829003601f168201915b505050505080602001905181019061057c9190613423565b9050610586612754565b60a080830180515183515251602090810151835182015260c080850180515183860180519190915290518301518151840152610100860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935160809081015184519015159082015260e08b01805151838c01805191909152905189015181518a0152828c0151828c0180519188169091529a518b518a015295518a51840152925189519091015292518751909101529286015185519316929093019190915292015181519092019190915251919050565b61067e600060076120d8565b90565b600061068b612630565b61069361279b565b60408051602080820190925260008152908201526106b18183611f41565b5051919050565b6106c0612630565b6103256106d2368490038401846135b7565b8261083f565b6000606060005460028080546106ed90613225565b80601f016020809104026020016040519081016040528092919081815260200182805461071990613225565b80156107665780601f1061073b57610100808354040283529160200191610766565b820191906000526020600020905b81548152906001019060200180831161074957829003601f168201915b50505050509050915091509091565b61077d6126dc565b610785612630565b61078d61267f565b610795612699565b604080518082018252878152602080820188905260808401919091526003835281518082019092528282528301526107cd828461083f565b5050608001519392505050565b6107e26126dc565b6107ea612630565b6107f261267f565b6107fa612699565b604080518082018252878152602080820188905260a0840191909152600483528151808201909252828252830152610832828461083f565b505060a001519392505050565b61084f60046000541460346120d8565b815161086a90158061086357508251600154145b60356120d8565b60008080556002805461087c90613225565b80601f01602080910402602001604051908101604052809291908181526020018280546108a890613225565b80156108f55780601f106108ca576101008083540402835291602001916108f5565b820191906000526020600020905b8154815290600101906020018083116108d857829003601f168201915b505050505080602001905181019061090d9190613423565b90506109176127c5565b7f761e77e13641e3fcecddc88a0fe62af0f096e5abdc28edaf3c907324d296505b338560405161094892919061367f565b60405180910390a1600060208501515151600481111561096a5761096a613032565b03610d45576020808501515101518152610986341560146120d8565b6109a061099933846060015160006120fe565b60156120d8565b6109ba6109b333846000015160006120fe565b60166120d8565b6109d46109cd33846020015160006120fe565b60176120d8565b6109fc826101000151606001516001600160a01b0316336001600160a01b03161460186120d8565b80516020015151610a8c90606411610a15576000610a26565b606482600001516020015160200151105b610a31576000610a54565b81516020908101518051910151610a489190613745565b82516020015160400151145b610a5f576000610a6d565b815160200151604001516064115b610a78576000610a85565b8151602001516040015115155b60196120d8565b61012082015147908110610aaf57610120830151610aaa908261375d565b610ab2565b60005b602083018190528251516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610af1573d6000803e3d6000fd5b50825182515160e085015151610b08929190612116565b610b2783602001518360000151600001518560e0015160200151612116565b60e08301805151604080850180519290925291516020908101518251820152905160608501805191909152818501518151909201919091525190517f789c867eda462037d204a0efcb0009ab4244f887a7a39ea7e050f263bd224fb991610b8d91612f45565b60405180910390a160608083015160208087019190915283518101515160808086018051929092528551830151830151825184015285518301516040908101518351820152865184015185015183516001600160a01b0390911695019490945285519092015182015181519015159201919091525190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91610c2f91613774565b60405180910390a1610c3f612a6f565b835181516001600160a01b0391821690526020808601518351908316908201526040808701518451909101526060808701518451931692019190915260808086015183518201528451909101510151610c99576000610ca4565b60a084015160200151155b610caf576000610ccc565b60c08401515115610cc1576000610ccc565b60c084015160200151155b6020808301805192151590925260a080870151835183015260c08701518351604001526080808801518451606001528651830151845190910152915143920191909152830151610120850151610d229082613745565b610d2c919061375d565b602082015160c00152610d3e8161212a565b5050611f3b565b6001602085015151516004811115610d5f57610d5f613032565b036111d4576020840151516040015160a0820152610d7f3415601a6120d8565b610d99610d9233846060015160006120fe565b601b6120d8565b815160a08201515151610db991610db2913391906120fe565b601c6120d8565b610dde610dd73384602001518460a0015160000151602001516120fe565b601d6120d8565b610e0082610100015160800151610df6576001610df9565b60005b601e6120d8565b60a082015160200151610ec75760a081015180515160e0830152805160209081015161010084015201516101208201819052610e3c9080613782565b61014082015261010081015160e082015111610e5d57806101000151610e63565b8060e001515b61016082015261014081015161010082015160e0830151610e919291610e8891613782565b1115601f6120d8565b610160810151610eb490610ea59080613782565b826101400151111560206120d8565b60a08101516020015160c0820152610f6a565b610edd60008260a00151602001511460216120d8565b60c08201515160a08084015160200151908301515151610efd9190613782565b610f0791906137a1565b61018082015260c082015160209081015160a0808501518301519084015151909201519091610f3591613782565b610f3f91906137a1565b6101a0820181905261018082015110610f5d57806101a00151610f64565b8061018001515b60c08201525b60c08201515160a08201515151610f819190613745565b6101c082015260c082015160209081015160a08301515190910151610fa69190613745565b6101e082019081526101c08201516102008301805191909152905190516020015260c081015160a083015151610fdc919061375d565b61022082015260c081015160a083015160200151610ffa9190613745565b610240820190815261022082015161026083018051919091529051905160200152606082015160c082015161103191903390612116565b7ff0c196aa80ae167d505edb08f529ced5e5d8a3b056ae8eb0141341b007c8cc0d8160c0015160405161106691815260200190565b60405180910390a160c08101805160408086019190915260a0830180515151610280850180519190915290515160209081015182518201526101c08501516102a086018051919091526101e086015181518301526102208601516102c08701805191909152610240870151815190930192909252915193519151905192517feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb94611115943394919391926137c3565b60405180910390a1611125612a6f565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905261026087015181519094019390935261020086015183519092019190915260e086015182519093019290925261010085015181519092019190915280514360a090910152610120840151905160c001526111ce8161212a565b50611f3b565b60026020850151515160048111156111ee576111ee613032565b0361153c57602084015151606001516102e082015261120f341560226120d8565b61123161122a338460600151846102e00151600001516120fe565b60236120d8565b61124b61124433846000015160006120fe565b60246120d8565b61126561125e33846020015160006120fe565b60256120d8565b60a08201516020015160c0830151516102e0830151516112859190613782565b61128f91906137a1565b61030082015260a082015160209081015160c0840151909101516102e0830151516112ba9190613782565b6112c491906137a1565b6103208201526102e08101515160a0830151516112e19190613745565b6103408201526102e08101515160a083015160200151611301919061375d565b61036082019081526103408201516103808301805191909152905190516020015261030081015160c083015151611338919061375d565b6103a082015261032081015160c083015160200151611357919061375d565b6103c082019081526103a08201516103e083018051919091529051905160200152815161030082015161138c91903390612116565b6113a0826020015133836103200151612116565b6103008101516104008201805191909152610320820151815160200152516040517ff417bd7937fdc11dfbef0d92b61265ff5cb1b1388def6aeebc6bc6a7beb16461916113ec91612f6c565b60405180910390a16104008101805160608501526103a082015161042083018051919091526103c0830151815160209081019190915261034084015161044085018051919091526103608501518151909201919091526102e0840151519251915190516040517f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef8559461148394339491939092613801565b60405180910390a1611493612a6f565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855194169381019390935260808087015185518201528285018051600090526103808701518151909401939093526103e086015183519092019190915260e086015182519093019290925261010085015181519092019190915280514360a090910152610120840151905160c001526111ce8161212a565b600360208501515151600481111561155657611556613032565b03611a3d5760208401515160800151610460820152611577341560266120d8565b61159161158a33846060015160006120fe565b60276120d8565b6115b36115ac338460000151846104600151600001516120fe565b60286120d8565b6115cd6115c633846020015160006120fe565b60296120d8565b6115ef826101000151608001516115e55760016115e8565b60005b602a6120d8565b6104608101515160c0830151516116069190613745565b610480820152610100820151604001516116229061271061375d565b610460820151516116339190613782565b6104a0820181905260c0830151602001516104c083015261048082015161165d9061271090613782565b6116679190613745565b816104c00151826104a0015161167d9190613782565b61168791906137a1565b6104e082015261010082015160408101519051606491906116a9908390613782565b6116b391906137a1565b6104e083015161048084015160c086015160200151610460860151516116d99190613782565b6116e391906137a1565b6116ed919061375d565b6116f79190613782565b61170191906137a1565b61050082015261010082015151610460820151516127109161172291613782565b61172c91906137a1565b6105208201818152610540830180519290925290516000602091820181905261056084018051919091526105008401805191518301919091525161048084015160c0860151909201519251909261178291613782565b61178c91906137a1565b1161179c578061056001516117a3565b8061054001515b6105808201819052516104808201516117bc919061375d565b816105a001818152505080610580015160200151816104e001518360c00151602001516117e9919061375d565b6117f3919061375d565b6105c082019081526105a08201516105e0830180519190915290519051602001526105808101515160e08301515161182b9190613745565b6106008201515261058081015160209081015160e0840151909101516118519190613745565b816106000151602001818152505061187b816104e00151826104600151602001511115602b6120d8565b6104c081015160c0830151516118b39161189491613782565b826105c00151836105a001516118aa9190613782565b1015602c6120d8565b6118c7826020015133836104e00151612116565b61062081018051600090526104e0820151815160200152516040517fd2c0d6f2787d36fd26e69fa10e8c8f49b6cae09b7efa1f6e7fc5cba63e4d9e029161190d91612f6c565b60405180910390a1610620810180516080850152610460820151516106408301805191909152805160006020918201526105a084015161066085018051919091526105c08501518151909201919091529051915190516040516000805160206139f6833981519152936119869333939192909190613833565b60405180910390a1611996612a6f565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a0808901518251909501949094526105e0870151815190930192909252610600860151825190940193909352610100860151815190930192909252815143910152610120840151905160c001526111ce8161212a565b6004602085015151516004811115611a5757611a57613032565b03611f3b5760208401515160a00151610680820152611a783415602d6120d8565b611a92611a8b33846060015160006120fe565b602e6120d8565b611aac611aa533846000015160006120fe565b602f6120d8565b611ace611ac7338460200151846106800151600001516120fe565b60306120d8565b611af082610100015160800151611ae6576001611ae9565b60005b60316120d8565b6106808101515160c083015160200151611b0a9190613745565b6106a082015261010082015160400151611b269061271061375d565b61068082015151611b379190613782565b6106c0820181905260c0830151516106e08301526106a0820151611b5e9061271090613782565b611b689190613745565b816106e00151826106c00151611b7e9190613782565b611b8891906137a1565b6107008201526101008201516040810151905160649190611baa908390613782565b611bb491906137a1565b6107008301516106a084015160c08601515161068086015151611bd79190613782565b611be191906137a1565b611beb919061375d565b611bf59190613782565b611bff91906137a1565b610720820152610100820151516106808201515161271091611c2091613782565b611c2a91906137a1565b61074082018181526107608301805192909252905160006020918201819052610780840180519190915261072084018051915190920152516106a083015160c085015151925191929091611c7e9190613782565b611c8891906137a1565b11611c9857806107800151611c9f565b8061076001515b6107a082018190526020015161070082015160c084015151611cc1919061375d565b611ccb919061375d565b6107c08201526107a0810151516106a0820151611ce8919061375d565b6107e082019081526107c08201516108008301805191909152905190516020908101919091526107a0820151015160e083015151611d269190613745565b610820820151526107a08101515160e083015160200151611d479190613745565b8161082001516020018181525050611d7181610700015182610680015160200151111560326120d8565b611dac8260c0015160200151826106e00151611d8d9190613782565b826107e00151836107c00151611da39190613782565b101560336120d8565b611dc0826000015133836107000151612116565b610700810151610840820180519190915280516000602090910152516040517ff7d552e594317674fbb27b280318726ccd7261330c43c26d9db3cdf4d4d8645291611e0a91612f6c565b60405180910390a16108408101805160a085015261086082018051600090526106808301515181516020908101919091526107c084015161088085018051919091526107e08501518151909201919091529051915190516040516000805160206139f683398151915293611e849333939192909190613833565b60405180910390a1611e94612a6f565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a080890151825190950194909452610800870151815190930192909252610820860151825190940193909352610100860151815190930192909252815143910152610120840151905160c001526111ce8161212a565b50505050565b611f5160026000541460126120d8565b8151611f6c901580611f6557508251600154145b60136120d8565b600080805560028054611f7e90613225565b80601f0160208091040260200160405190810160405280929190818152602001828054611faa90613225565b8015611ff75780601f10611fcc57610100808354040283529160200191611ff7565b820191906000526020600020905b815481529060010190602001808311611fda57829003601f168201915b505050505080602001905181019061200f9190613377565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a1612067341560116120d8565b604051600081527fbbbe5ea1ce4050eaddc0b0b0fc26d7b0732f2c275804eb21674b1e507a9393849060200160405180910390a16000825260608101516120b090600019612285565b6120bd8160600151612298565b600080805560018190556120d390600290612a8f565b505050565b816103255760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061210c838530856122aa565b90505b9392505050565b612121838383612384565b6120d357600080fd5b602081015151156121e15761213d612ac9565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151818501528451606090810151909316838501528185018051830151608080870191909152815183015160a087015281519094015160c0860152519092015160e084015260026000554360015590516121bd9183910161386a565b604051602081830303815290604052600290805190602001906120d3929190612b24565b6121e9612ba8565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152828601805184015160a0870152805183015160c08088019190915281519095015160e0870152805190910151610100860152519092015161012084015260046000554360015590516121bd918391016138f8565b50565b61228f8282612455565b61032557600080fd5b6122a181612530565b61228257600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612311916139bc565b60006040518083038185875af1925050503d806000811461234e576040519150601f19603f3d011682016040523d82523d6000602084013e612353565b606091505b5091509150612364828260016125d5565b508080602001905181019061237991906139d8565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916123e3916139bc565b60006040518083038185875af1925050503d8060008114612420576040519150601f19603f3d011682016040523d82523d6000602084013e612425565b606091505b5091509150612436828260026125d5565b508080602001905181019061244b91906139d8565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b8660405160240161248191815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516124bf91906139bc565b60006040518083038185875af1925050503d80600081146124fc576040519150601f19603f3d011682016040523d82523d6000602084013e612501565b606091505b5091509150612512828260036125d5565b508080602001905181019061252791906139d8565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391612577916139bc565b60006040518083038185875af1925050503d80600081146125b4576040519150601f19603f3d011682016040523d82523d6000602084013e6125b9565b606091505b50915091506125ca828260046125d5565b506001949350505050565b606083156125e457508161210f565b8251156125f45782518084602001fd5b60405163100960cb60e01b8152600481018390526024016120f5565b60405180604001604052806126236126dc565b8152602001600081525090565b6040518060c0016040528060001515815260200161264c612610565b8152602001600081526020016126606126dc565b815260200161266d6126dc565b815260200161267a6126dc565b905290565b60405180604001604052806000815260200161267a612c10565b6040805160c0810190915280600081526020016126b4612c23565b81526020016126c1612610565b81526020016126606040518060200160405280600081525090565b604051806040016040528060008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016127196126dc565b81526020016127266126dc565b8152602001612733612c42565b81526020016127406126dc565b81526000602082015260400161267a612c7c565b6040518060a001604052806127676126dc565b81526020016127746126dc565b8152602001612781612c42565b815260200161278e6126dc565b815260200161267a6126f6565b60405180604001604052806000815260200161267a60405180602001604052806000151581525090565b604051806108a001604052806127d9612c23565b8152602001600081526020016127ed6126dc565b81526020016127fa612610565b8152602001612807612c42565b8152602001612814612610565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016128676126dc565b815260200160008152602001600081526020016128826126dc565b815260200161288f6126dc565b815260200161289c6126dc565b81526020016128a96126dc565b81526020016128c46040518060200160405280600081525090565b8152602001600081526020016000815260200160008152602001600081526020016128ed6126dc565b815260200160008152602001600081526020016129086126dc565b81526020016129156126dc565b81526020016129226126dc565b815260200161292f6126dc565b815260200161293c6126dc565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016129736126dc565b81526020016129806126dc565b815260200161298d6126dc565b815260200160008152602001600081526020016129a86126dc565b81526020016129b56126dc565b81526020016129c26126dc565b81526020016129cf6126dc565b81526020016129dc6126dc565b81526020016129e96126dc565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612a206126dc565b8152602001612a2d6126dc565b8152602001612a3a6126dc565b81526020016000815260200160008152602001612a556126dc565b8152602001612a626126dc565b81526020016126606126dc565b6040518060400160405280612a82612c9e565b815260200161267a612cd1565b508054612a9b90613225565b6000825580601f10612aab575050565b601f0160209004906000526020600020908101906122829190612d28565b604080516101008101825260008082526020820152908101612ae9612c7c565b815260006020820152604001612afd6126dc565b8152602001612b0a6126dc565b8152602001612b176126dc565b815260200161267a612c42565b828054612b3090613225565b90600052602060002090601f016020900481019282612b525760008555612b98565b82601f10612b6b57805160ff1916838001178555612b98565b82800160010185558215612b98579182015b82811115612b98578251825591602001919060010190612b7d565b50612ba4929150612d28565b5090565b604080516101408101825260008082526020820152908101612bc8612c7c565b815260006020820152604001612bdc6126dc565b8152602001612be96126dc565b8152602001612bf66126dc565b8152602001612c036126dc565b8152602001612623612c42565b604051806020016040528061267a612699565b604051806040016040528060006001600160a01b0316815260200161267a5b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040805160608101909152806000815260006020820181905260409091015290565b6040805160a08101825260008082526020820152908101612cbd612c7c565b81526000602082015260400161267a6126dc565b6040518060e00160405280600015158152602001612ced6126dc565b8152602001612cfa6126dc565b8152602001612d076126dc565b8152602001612d14612c42565b815260200160008152602001600081525090565b5b80821115612ba45760008155600101612d29565b6001600160a01b038116811461228257600080fd5b60405160a081016001600160401b0381118282101715612d8257634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715612d8257634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715612d8257634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b0381118282101715612d8257634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b0381118282101715612d8257634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612d8257634e487b7160e01b600052604160045260246000fd5b801515811461228257600080fd5b600060a08284031215612e9a57600080fd5b612ea2612d52565b90508135815260208201356020820152604082013560408201526060820135612eca81612d3d565b60608201526080820135612edd81612e7a565b608082015292915050565b60008060c08385031215612efb57600080fd5b8235612f0681612d3d565b9150612f158460208501612e88565b90509250929050565b80518252602090810151910152565b612f38828251612f1e565b6020015160409190910152565b606081016102438284612f2d565b600060208284031215612f6557600080fd5b5035919050565b604081016102438284612f1e565b600060408284031215612f8c57600080fd5b612f94612d88565b9050813581526020820135602082015292915050565b60008060608385031215612fbd57600080fd5b612fc78484612f7a565b946040939093013593505050565b600060408284031215612fe757600080fd5b50919050565b6001600160a01b03169052565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b80516002811061305a5761305a613032565b82526020818101511515908301526040908101516001600160a01b0316910152565b81516001600160a01b039081168252602080840151610200840192916130a490850182612f1e565b5060408401516130b76060850182612f1e565b5060608401516130ca60a0850182612ffa565b5060808401516130de610140850182612f1e565b5060a08401511661018083015260c08301516130fe6101a0840182613048565b5092915050565b60006102008284031215612fe757600080fd5b60005b8381101561313357818101518382015260200161311b565b83811115611f3b5750506000910152565b8281526040602082015260008251806040840152613169816060850160208701613118565b601f01601f1916919091016060019392505050565b6000806040838503121561319157600080fd5b50508035926020909101359150565b600081830360408112156131b357600080fd5b604080519081016001600160401b03811182821017156131e357634e487b7160e01b600052604160045260246000fd5b604052833581526020601f19830112156131fc57600080fd5b613204612db8565b9150602084013561321481612e7a565b825260208101919091529392505050565b600181811c9082168061323957607f821691505b602082108103612fe757634e487b7160e01b600052602260045260246000fd5b805161326481612d3d565b919050565b60006060828403121561327b57600080fd5b604051606081016001600160401b03811182821017156132ab57634e487b7160e01b600052604160045260246000fd5b80604052508091508251600281106132c257600080fd5b815260208301516132d281612e7a565b602082015260408301516132e581612d3d565b6040919091015292915050565b60006040828403121561330457600080fd5b61330c612d88565b9050815181526020820151602082015292915050565b600060a0828403121561333457600080fd5b61333c612d52565b9050815181526020820151602082015260408201516040820152606082015161336481612d3d565b60608201526080820151612edd81612e7a565b6000610220828403121561338a57600080fd5b613392612de8565b61339b83613259565b81526133a960208401613259565b60208201526133bb8460408501613269565b60408201526133cc60a08401613259565b60608201526133de8460c085016132f2565b60808201526133f18461010085016132f2565b60a08201526134048461014085016132f2565b60c0820152613417846101808501613322565b60e08201529392505050565b6000610280828403121561343657600080fd5b61343e612e19565b61344783613259565b815261345560208401613259565b60208201526134678460408501613269565b604082015261347860a08401613259565b606082015261348a8460c085016132f2565b608082015261010061349e858286016132f2565b60a08301526134b18561014086016132f2565b60c08301526134c48561018086016132f2565b60e08301526134d7856101c08601613322565b90820152610260929092015161012083015250919050565b600060c0828403121561350157600080fd5b613509612d88565b9050813561351681612d3d565b81526135258360208401612e88565b602082015292915050565b60006060828403121561354257600080fd5b61354a612d88565b90506135568383612f7a565b81526040820135602082015292915050565b60006020828403121561357a57600080fd5b604051602081016001600160401b03811182821017156135aa57634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b60008183036102008112156135cb57600080fd5b6135d3612d88565b833581526101e0601f19830112156135ea57600080fd5b6135f2612db8565b91506135fc612e4a565b60208501356005811061360e57600080fd5b815261361d86604087016134ef565b6020820152613630866101008701613530565b6040820152613643866101608701613568565b6060820152613656866101808701612f7a565b6080820152613669866101c08701612f7a565b60a0820152825260208101919091529392505050565b6001600160a01b03838116825282516020808401919091528301515180516102208401929190600581106136b5576136b5613032565b6040850152602081810151805190931660608601529190910151906136dd6080850183612ffa565b604081015191506136f2610120850183612f2d565b606081015151610180850152608081015191506137136101a0850183612f1e565b60a0015190506137276101e0840182612f1e565b509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156137585761375861372f565b500190565b60008282101561376f5761376f61372f565b500390565b60a081016102438284612ffa565b600081600019048311821515161561379c5761379c61372f565b500290565b6000826137be57634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b038616815261010081016137e16020830187612f1e565b8460608301526137f46080830185612f1e565b61244b60c0830184612f1e565b6001600160a01b03861681526020810185905261010081016138266040830186612f1e565b6137f46080830185612f1e565b6001600160a01b038516815260e081016138506020830186612f1e565b61385d6060830185612f1e565b61252760a0830184612f1e565b81516001600160a01b0390811682526020808401518216908301526040808401516102208401929161389e90850182613048565b5060608401511660a083015260808301516138bc60c0840182612f1e565b5060a08301516138d0610100840182612f1e565b5060c08301516138e4610140840182612f1e565b5060e08301516130fe610180840182612ffa565b60006102808201905061390c828451612fed565b602083015161391e6020840182612fed565b5060408301516139316040840182613048565b50606083015161394460a0840182612fed565b50608083015161395760c0840182612f1e565b5060a083015161010061396c81850183612f1e565b60c08501519150613981610140850183612f1e565b60e08501519150613996610180850183612f1e565b84015190506139a96101c0840182612ffa565b5061012083015161026083015292915050565b600082516139ce818460208701613118565b9190910192915050565b6000602082840312156139ea57600080fd5b815161210f81612e7a56fe70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a264697066735822122041bdff7800b514ebf74645be845979de1a8d1d89ad0994a7dec62333a5cf32e164736f6c634300080d003360806040523480156200001157600080fd5b506040516200102738038062001027833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff92909216919091179055506200046f9350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b6020821081036200046957634e487b7160e01b600052602260045260246000fd5b50919050565b610ba8806200047f6000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afa565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b12565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b12565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afa565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b538339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3b565b90915550506040518281526000906001600160a01b03851690600080516020610b53833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b602082108103610ade57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0d57610b0d610ae4565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4d57610b4d610ae4565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220e92f58bed0bb098665916c08cb51a0b8bc18d3deb4416ce094739a60744afc5364736f6c634300080d0033`,
  BytecodeLen: 24298,
  Which: `o1`,
  version: 7,
  views: {
    Info: `Info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:535:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:541:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:387:19:after expr stmt semicolon',
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
