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
    calcAmtIn_: ((_v67602, _v67603, _v67604, _v67605 ) => {
        const v67602 = stdlib.protect(ctc0, _v67602, null);
        const v67603 = stdlib.protect(ctc0, _v67603, null);
        const v67604 = stdlib.protect(ctc0, _v67604, null);
        const v67605 = stdlib.protect(ctc0, _v67605, null);
      
      const v67607 = stdlib.safeSub(v67603, v67602);
      const v67608 = stdlib.cast("UInt", "UInt256", v67607, false, true);
      const v67609 = stdlib.cast("UInt", "UInt256", v67604, false, true);
      const v67610 = stdlib.cast("UInt", "UInt256", v67602, false, true);
      const v67611 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v67605);
      const v67612 = stdlib.cast("UInt", "UInt256", v67611, false, true);
      const v67613 = stdlib.safeMul256(v67610, v67612);
      const v67614 = stdlib.safeMul256(v67608, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v67615 = stdlib.safeMul256(v67613, v67609);
      const v67616 = stdlib.safeDiv256(v67615, v67614);
      const v67617 = stdlib.cast("UInt256", "UInt", v67616, false, true);
      const v67618 = stdlib.safeAdd(v67617, stdlib.checkedBigNumberify('252:39:decimal', stdlib.UInt_max, '1'));
      
      return v67618;}),
    computeMint_: ((_v67619, _v67620, _v67621 ) => {
        const v67619 = stdlib.protect(ctc1, _v67619, null);
        const v67620 = stdlib.protect(ctc1, _v67620, null);
        const v67621 = stdlib.protect(ctc1, _v67621, null);
      
      const v67622 = v67619.A;
      const v67623 = v67619.B;
      const v67624 = v67620.A;
      const v67625 = v67620.B;
      const v67627 = v67621.B;
      let v67628;
      const v67635 = stdlib.eq(v67627, stdlib.checkedBigNumberify('337:19:decimal', stdlib.UInt_max, '0'));
      if (v67635) {
        const v67636 = stdlib.cast("UInt", "UInt256", v67622, false, true);
        const v67637 = stdlib.cast("UInt", "UInt256", v67623, false, true);
        const v67638 = stdlib.safeMul256(v67636, v67637);
        const v67639 = stdlib.sqrt256(v67638);
        const v67640 = stdlib.cast("UInt256", "UInt", v67639, false, true);
        v67628 = v67640;
        }
      else {
        const v67649 = stdlib.safeMuldiv(v67622, v67627, v67624);
        const v67656 = stdlib.safeMuldiv(v67623, v67627, v67625);
        const v67658 = stdlib.lt(v67649, v67656);
        const v67659 = v67658 ? v67649 : v67656;
        v67628 = v67659;
        }
      
      return v67628;}),
    computeSwap_: ((_v67660, _v67661, _v67662, _v67663 ) => {
        const v67660 = stdlib.protect(ctc2, _v67660, null);
        const v67661 = stdlib.protect(ctc1, _v67661, null);
        const v67662 = stdlib.protect(ctc1, _v67662, null);
        const v67663 = stdlib.protect(ctc4, _v67663, null);
      
      const v67664 = v67661.A;
      const v67665 = v67661.B;
      const v67666 = v67662.A;
      const v67667 = v67662.B;
      const v67669 = v67663.protoFee;
      const v67670 = v67663.lpFee;
      const v67671 = v67663.totFee;
      const v67672 = stdlib.lt(v67669, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v67673 = stdlib.lt(v67670, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v67674 = v67672 ? v67673 : false;
      let v67677;
      if (v67674) {
        const v67675 = stdlib.safeAdd(v67670, v67669);
        const v67676 = stdlib.eq(v67671, v67675);
        v67677 = v67676;
        }
      else {
        v67677 = false;
        }
      const v67678 = stdlib.lt(v67671, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v67679 = v67677 ? v67678 : false;
      const v67680 = stdlib.gt(v67671, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v67681 = v67679 ? v67680 : false;
      stdlib.assert(v67681, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v67683 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v67683, {
        at: 'reach standard library:57:5:application',
        fs: ['at 328:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v67699;
      if (v67660) {
        const v67704 = stdlib.eq(v67665, stdlib.checkedBigNumberify('./index.rsh:315:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v67704, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:315:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v67727 = stdlib.cast("UInt", "UInt256", v67667, false, true);
        const v67728 = stdlib.cast("UInt", "UInt256", v67666, false, true);
        const v67729 = stdlib.cast("UInt", "UInt256", v67664, false, true);
        const v67730 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v67671);
        const v67731 = stdlib.cast("UInt", "UInt256", v67730, false, true);
        const v67732 = stdlib.safeMul256(v67729, v67731);
        const v67733 = stdlib.safeMul256(v67728, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v67734 = stdlib.safeAdd256(v67733, v67732);
        const v67735 = stdlib.safeMul256(v67732, v67727);
        const v67736 = stdlib.safeDiv256(v67735, v67734);
        const v67737 = stdlib.cast("UInt256", "UInt", v67736, false, true);
        const v67744 = stdlib.safeMul(v67669, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v67745 = stdlib.safeDiv(v67744, v67671);
        const v67752 = stdlib.safeAdd(v67666, v67664);
        const v67760 = stdlib.safeMuldiv(v67664, v67667, v67752);
        const v67765 = stdlib.safeSub(v67760, v67737);
        const v67771 = stdlib.safeMuldiv(v67765, v67745, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v67776 = stdlib.safeMuldiv(v67664, v67669, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v67784 = stdlib.safeMuldiv(v67776, v67667, v67752);
        const v67785 = stdlib.gt(v67784, v67771);
        const v67786 = [v67776, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v67787 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v67771];
        const v67788 = v67785 ? v67786 : v67787;
        const v67790 = v67788[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v67791 = v67788[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v67792 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v67737
          };
        const v67793 = {
          A: v67790,
          B: v67791
          };
        const v67794 = [v67792, v67793, v67664];
        v67699 = v67794;
        }
      else {
        const v67795 = stdlib.eq(v67664, stdlib.checkedBigNumberify('./index.rsh:320:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v67795, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:320:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v67818 = stdlib.cast("UInt", "UInt256", v67666, false, true);
        const v67819 = stdlib.cast("UInt", "UInt256", v67667, false, true);
        const v67820 = stdlib.cast("UInt", "UInt256", v67665, false, true);
        const v67821 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v67671);
        const v67822 = stdlib.cast("UInt", "UInt256", v67821, false, true);
        const v67823 = stdlib.safeMul256(v67820, v67822);
        const v67824 = stdlib.safeMul256(v67819, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v67825 = stdlib.safeAdd256(v67824, v67823);
        const v67826 = stdlib.safeMul256(v67823, v67818);
        const v67827 = stdlib.safeDiv256(v67826, v67825);
        const v67828 = stdlib.cast("UInt256", "UInt", v67827, false, true);
        const v67835 = stdlib.safeMul(v67669, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v67836 = stdlib.safeDiv(v67835, v67671);
        const v67843 = stdlib.safeAdd(v67667, v67665);
        const v67851 = stdlib.safeMuldiv(v67665, v67666, v67843);
        const v67856 = stdlib.safeSub(v67851, v67828);
        const v67862 = stdlib.safeMuldiv(v67856, v67836, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v67867 = stdlib.safeMuldiv(v67665, v67669, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v67875 = stdlib.safeMuldiv(v67867, v67666, v67843);
        const v67876 = stdlib.gt(v67875, v67862);
        const v67877 = [v67867, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v67878 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v67862];
        const v67879 = v67876 ? v67877 : v67878;
        const v67881 = v67879[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v67882 = v67879[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v67883 = {
          A: v67828,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v67884 = {
          A: v67882,
          B: v67881
          };
        const v67885 = [v67883, v67884, v67665];
        v67699 = v67885;
        }
      const v67886 = v67699[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '0')];
      const v67887 = v67699[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '1')];
      const v67889 = v67886.A;
      const v67890 = v67886.B;
      const v67891 = v67887.A;
      const v67892 = v67887.B;
      const v67893 = {
        A: v67889,
        B: v67890
        };
      const v67894 = {
        A: v67891,
        B: v67892
        };
      const v67895 = [v67893, v67894];
      
      return v67895;})
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
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v69596, v69608, v69610, v69611, v69615] = svs;
      return (await ((async () => {
        
        const v69659 = v69610.protoFee;
        const v69660 = v69610.lpFee;
        const v69661 = v69610.totFee;
        const v69662 = v69610.protoAddr;
        const v69663 = v69610.locked;
        const v69664 = {
          locked: v69663,
          lpFee: v69660,
          protoAddr: v69662,
          protoFee: v69659,
          totFee: v69661
          };
        const v69665 = {
          cmds: v69608,
          protoInfo: v69664,
          triumvirs: v69611
          };
        
        return v69665;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        decode: _Info,
        dom: [],
        rng: ctc13
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
    Triumvir_propose0_68035: ctc11,
    Triumvir_support0_68035: ctc12,
    register0_68035: ctc13
    });
  const ctc15 = stdlib.T_Struct([['A', ctc7], ['B', ctc7]]);
  const ctc16 = stdlib.T_Tuple([ctc15, ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc7, ctc16]);
  
  
  const v69583 = stdlib.protect(ctc1, interact.triumvirs, 'for Admin\'s interact field triumvirs');
  
  const txn1 = await (ctc.sendrecv({
    args: [v69583],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:125:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:125:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v69590], secs: v69592, time: v69591, didSend: v67910, from: v69589 } = txn1;
      
      ;
      const v69593 = await ctc.getContractAddress();
      
      const v69596 = ['NoOp', null];
      const v69602 = [v69596, v69596, v69596];
      const v69607 = {
        locked: false,
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
        protoAddr: v69593,
        protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
        };
      const v69608 = v69602;
      const v69609 = false;
      const v69610 = v69607;
      const v69611 = v69590;
      const v69612 = v69591;
      const v69615 = stdlib.checkedBigNumberify('./index.rsh:121:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v69658 = v69609 ? false : true;
        
        return v69658;})()) {
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
  const {data: [v69590], secs: v69592, time: v69591, didSend: v67910, from: v69589 } = txn1;
  ;
  const v69593 = await ctc.getContractAddress();
  stdlib.protect(ctc2, await interact.ready(), {
    at: './index.rsh:133:23:application',
    fs: ['at ./index.rsh:133:23:application call to [unknown function] (defined at: ./index.rsh:133:23:function exp)', 'at ./index.rsh:133:23:application call to "liftedInteract" (defined at: ./index.rsh:133:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v69596 = ['NoOp', null];
  const v69602 = [v69596, v69596, v69596];
  const v69607 = {
    locked: false,
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
    protoAddr: v69593,
    protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
    };
  let v69608 = v69602;
  let v69609 = false;
  let v69610 = v69607;
  let v69611 = v69590;
  let v69612 = v69591;
  let v69615 = stdlib.checkedBigNumberify('./index.rsh:121:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v69658 = v69609 ? false : true;
    
    return v69658;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v69940], secs: v69942, time: v69941, didSend: v69090, from: v69939 } = txn3;
    switch (v69940[0]) {
      case 'Triumvir_propose0_68035': {
        const v69943 = v69940[1];
        undefined /* setApiDetails */;
        const v69948 = v69943[stdlib.checkedBigNumberify('./index.rsh:192:10:spread', stdlib.UInt_max, '0')];
        let v69949;
        switch (v69948[0]) {
          case 'Harvest': {
            const v69950 = v69948[1];
            v69949 = true;
            
            break;
            }
          case 'Kill': {
            const v69951 = v69948[1];
            v69949 = true;
            
            break;
            }
          case 'NewInfo': {
            const v69952 = v69948[1];
            const v69953 = v69952.protoFee;
            const v69954 = v69952.lpFee;
            const v69955 = v69952.totFee;
            const v69956 = stdlib.lt(v69953, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
            const v69957 = stdlib.lt(v69954, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
            const v69958 = v69956 ? v69957 : false;
            let v69959;
            if (v69958) {
              const v69960 = stdlib.safeAdd(v69954, v69953);
              const v69961 = stdlib.eq(v69955, v69960);
              v69959 = v69961;
              }
            else {
              v69959 = false;
              }
            const v69962 = stdlib.lt(v69955, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
            const v69963 = v69959 ? v69962 : false;
            const v69964 = stdlib.gt(v69955, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
            const v69965 = v69963 ? v69964 : false;
            v69949 = v69965;
            
            break;
            }
          case 'NewTriumvirs': {
            const v69966 = v69948[1];
            v69949 = true;
            
            break;
            }
          case 'NoOp': {
            const v69967 = v69948[1];
            v69949 = true;
            
            break;
            }
          case 'Rewards': {
            const v69968 = v69948[1];
            v69949 = true;
            
            break;
            }
          }
        stdlib.assert(v69949, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'invalid command',
          who: 'Admin'
          });
        const v69970 = ['None', null];
        const v69971 = await stdlib.Array_asyncReduce([v69611], v69970, async([v69973], v69972, v69974) => {
          const v69975 = {
            None: 0,
            Some: 1
            }[v69972[0]];
          const v69976 = stdlib.eq(v69975, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v69977 = stdlib.addressEq(v69939, v69973);
          const v69978 = v69976 ? v69977 : false;
          const v69979 = ['Some', v69974];
          const v69980 = v69978 ? v69979 : v69972;
          
          return v69980;})
        const v69981 = {
          None: 0,
          Some: 1
          }[v69971[0]];
        const v69982 = stdlib.eq(v69981, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v69982, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        ;
        let v70027;
        switch (v69948[0]) {
          case 'Harvest': {
            const v70028 = v69948[1];
            v70027 = true;
            
            break;
            }
          case 'Kill': {
            const v70029 = v69948[1];
            v70027 = true;
            
            break;
            }
          case 'NewInfo': {
            const v70030 = v69948[1];
            const v70031 = v70030.protoFee;
            const v70032 = v70030.lpFee;
            const v70033 = v70030.totFee;
            const v70034 = stdlib.lt(v70031, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
            const v70035 = stdlib.lt(v70032, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
            const v70036 = v70034 ? v70035 : false;
            let v70037;
            if (v70036) {
              const v70038 = stdlib.safeAdd(v70032, v70031);
              const v70039 = stdlib.eq(v70033, v70038);
              v70037 = v70039;
              }
            else {
              v70037 = false;
              }
            const v70040 = stdlib.lt(v70033, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
            const v70041 = v70037 ? v70040 : false;
            const v70042 = stdlib.gt(v70033, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
            const v70043 = v70041 ? v70042 : false;
            v70027 = v70043;
            
            break;
            }
          case 'NewTriumvirs': {
            const v70044 = v69948[1];
            v70027 = true;
            
            break;
            }
          case 'NoOp': {
            const v70045 = v69948[1];
            v70027 = true;
            
            break;
            }
          case 'Rewards': {
            const v70046 = v69948[1];
            v70027 = true;
            
            break;
            }
          }
        stdlib.assert(v70027, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
          msg: 'invalid command',
          who: 'Admin'
          });
        const v70049 = await stdlib.Array_asyncReduce([v69611], v69970, async([v70051], v70050, v70052) => {
          const v70053 = {
            None: 0,
            Some: 1
            }[v70050[0]];
          const v70054 = stdlib.eq(v70053, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70055 = stdlib.addressEq(v69939, v70051);
          const v70056 = v70054 ? v70055 : false;
          const v70057 = ['Some', v70052];
          const v70058 = v70056 ? v70057 : v70050;
          
          return v70058;})
        const v70059 = {
          None: 0,
          Some: 1
          }[v70049[0]];
        const v70060 = stdlib.eq(v70059, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70060, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v70062 = stdlib.fromSome(v70049, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
        const v70064 = stdlib.Array_set(v69608, v70062, v69948);
        const v70066 = null;
        await txn3.getOutput('Triumvir_propose', 'v70066', ctc2, v70066);
        null;
        const cv69608 = v70064;
        const cv69609 = false;
        const cv69610 = v69610;
        const cv69611 = v69611;
        const cv69612 = v69941;
        const cv69615 = v69615;
        
        v69608 = cv69608;
        v69609 = cv69609;
        v69610 = cv69610;
        v69611 = cv69611;
        v69612 = cv69612;
        v69615 = cv69615;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Triumvir_support0_68035': {
        const v70372 = v69940[1];
        undefined /* setApiDetails */;
        const v70417 = v70372[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
        const v70418 = v70372[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '1')];
        const v70419 = stdlib.lt(v70417, stdlib.checkedBigNumberify('./index.rsh:203:29:dot', stdlib.UInt_max, '3'));
        stdlib.assert(v70419, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'illegal idx',
          who: 'Admin'
          });
        const v70421 = ['None', null];
        const v70422 = await stdlib.Array_asyncReduce([v69611], v70421, async([v70424], v70423, v70425) => {
          const v70426 = {
            None: 0,
            Some: 1
            }[v70423[0]];
          const v70427 = stdlib.eq(v70426, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70428 = stdlib.addressEq(v69939, v70424);
          const v70429 = v70427 ? v70428 : false;
          const v70430 = ['Some', v70425];
          const v70431 = v70429 ? v70430 : v70423;
          
          return v70431;})
        const v70432 = {
          None: 0,
          Some: 1
          }[v70422[0]];
        const v70433 = stdlib.eq(v70432, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70433, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v70435 = stdlib.fromSome(v70422, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
        const v70436 = stdlib.eq(v70417, v70435);
        const v70437 = v70436 ? false : true;
        stdlib.assert(v70437, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'cannot support self',
          who: 'Admin'
          });
        const v70440 = v69608[v70417];
        const v70441 = stdlib.digest([ctc10], [v70418]);
        const v70442 = stdlib.digest([ctc10], [v70440]);
        const v70443 = stdlib.digestEq(v70441, v70442);
        stdlib.assert(v70443, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'command switched',
          who: 'Admin'
          });
        ;
        const v70545 = await stdlib.Array_asyncReduce([v69611], v70421, async([v70547], v70546, v70548) => {
          const v70549 = {
            None: 0,
            Some: 1
            }[v70546[0]];
          const v70550 = stdlib.eq(v70549, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70551 = stdlib.addressEq(v69939, v70547);
          const v70552 = v70550 ? v70551 : false;
          const v70553 = ['Some', v70548];
          const v70554 = v70552 ? v70553 : v70546;
          
          return v70554;})
        const v70555 = {
          None: 0,
          Some: 1
          }[v70545[0]];
        const v70556 = stdlib.eq(v70555, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70556, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v70558 = stdlib.fromSome(v70545, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
        const v70559 = stdlib.eq(v70417, v70558);
        const v70560 = v70559 ? false : true;
        stdlib.assert(v70560, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
          msg: 'cannot support self',
          who: 'Admin'
          });
        const v70570 = stdlib.Array_set(v69608, v70417, v69596);
        const v70573 = null;
        await txn3.getOutput('Triumvir_support', 'v70573', ctc2, v70573);
        null;
        switch (v70440[0]) {
          case 'Harvest': {
            const v70617 = v70440[1];
            const v70618 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '0')];
            const v70619 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '1')];
            const v70620 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '2')];
            const v70621 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '3')];
            switch (v70619[0]) {
              case 'None': {
                const v70622 = v70619[1];
                const v70623 = v69610.protoFee;
                const v70624 = v69610.lpFee;
                const v70625 = v69610.totFee;
                const v70626 = v69610.protoAddr;
                const v70627 = v69610.locked;
                const v70630 = [];
                const v70641 = {
                  locked: v70627,
                  lpFee: v70624,
                  protoAddr: v70626,
                  protoFee: v70623,
                  totFee: v70625
                  };
                const v70642 = undefined /* Remote */;
                const v70643 = await txn3.getOutput('internal', 'v70642', ctc17, v70642);
                const v70645 = v70643[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                const v70654 = stdlib.add(v69615, v70645);
                const v70655 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70645);
                stdlib.assert(v70655, {
                  at: './index.rsh:165:15:application',
                  fs: ['at ./index.rsh:169:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                  msg: 'remote bill check',
                  who: 'Admin'
                  });
                const cv69608 = v70570;
                const cv69609 = false;
                const cv69610 = v69610;
                const cv69611 = v69611;
                const cv69612 = v69941;
                const cv69615 = v70654;
                
                v69608 = cv69608;
                v69609 = cv69609;
                v69610 = cv69610;
                v69611 = cv69611;
                v69612 = cv69612;
                v69615 = cv69615;
                
                txn2 = txn3;
                continue;
                break;
                }
              case 'Some': {
                const v70664 = v70619[1];
                const v70665 = v69610.protoFee;
                const v70666 = v69610.lpFee;
                const v70667 = v69610.totFee;
                const v70668 = v69610.protoAddr;
                const v70669 = v69610.locked;
                const v70672 = [];
                const v70683 = {
                  locked: v70669,
                  lpFee: v70666,
                  protoAddr: v70668,
                  protoFee: v70665,
                  totFee: v70667
                  };
                const v70684 = undefined /* Remote */;
                const v70685 = await txn3.getOutput('internal', 'v70684', ctc17, v70684);
                const v70687 = v70685[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                const v70696 = stdlib.add(v69615, v70687);
                const v70697 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70687);
                stdlib.assert(v70697, {
                  at: './index.rsh:165:15:application',
                  fs: ['at ./index.rsh:168:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                  msg: 'remote bill check',
                  who: 'Admin'
                  });
                const cv69608 = v70570;
                const cv69609 = false;
                const cv69610 = v69610;
                const cv69611 = v69611;
                const cv69612 = v69941;
                const cv69615 = v70696;
                
                v69608 = cv69608;
                v69609 = cv69609;
                v69610 = cv69610;
                v69611 = cv69611;
                v69612 = cv69612;
                v69615 = cv69615;
                
                txn2 = txn3;
                continue;
                break;
                }
              }
            break;
            }
          case 'Kill': {
            const v70706 = v70440[1];
            const cv69608 = v70570;
            const cv69609 = true;
            const cv69610 = v69610;
            const cv69611 = v69611;
            const cv69612 = v69941;
            const cv69615 = v69615;
            
            v69608 = cv69608;
            v69609 = cv69609;
            v69610 = cv69610;
            v69611 = cv69611;
            v69612 = cv69612;
            v69615 = cv69615;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewInfo': {
            const v70714 = v70440[1];
            const v70715 = v70714.locked;
            const v70716 = v70714.lpFee;
            const v70717 = v70714.protoAddr;
            const v70718 = v70714.protoFee;
            const v70719 = v70714.totFee;
            const v70720 = {
              locked: v70715,
              lpFee: v70716,
              protoAddr: v70717,
              protoFee: v70718,
              totFee: v70719
              };
            const cv69608 = v70570;
            const cv69609 = false;
            const cv69610 = v70720;
            const cv69611 = v69611;
            const cv69612 = v69941;
            const cv69615 = v69615;
            
            v69608 = cv69608;
            v69609 = cv69609;
            v69610 = cv69610;
            v69611 = cv69611;
            v69612 = cv69612;
            v69615 = cv69615;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewTriumvirs': {
            const v70729 = v70440[1];
            const cv69608 = v70570;
            const cv69609 = false;
            const cv69610 = v69610;
            const cv69611 = v70729;
            const cv69612 = v69941;
            const cv69615 = v69615;
            
            v69608 = cv69608;
            v69609 = cv69609;
            v69610 = cv69610;
            v69611 = cv69611;
            v69612 = cv69612;
            v69615 = cv69615;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NoOp': {
            const v70737 = v70440[1];
            const cv69608 = v70570;
            const cv69609 = false;
            const cv69610 = v69610;
            const cv69611 = v69611;
            const cv69612 = v69941;
            const cv69615 = v69615;
            
            v69608 = cv69608;
            v69609 = cv69609;
            v69610 = cv69610;
            v69611 = cv69611;
            v69612 = cv69612;
            v69615 = cv69615;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Rewards': {
            const v70745 = v70440[1];
            const v70747 = (stdlib.le(await ctc.getBalance(), v69615) ? stdlib.checkedBigNumberify('./index.rsh:174:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v69615));
            const v70748 = stdlib.safeAdd(v70747, v69615);
            const v70752 = stdlib.sub(v70748, v70747);
            ;
            const cv69608 = v70570;
            const cv69609 = false;
            const cv69610 = v69610;
            const cv69611 = v69611;
            const cv69612 = v69941;
            const cv69615 = v70752;
            
            v69608 = cv69608;
            v69609 = cv69609;
            v69610 = cv69610;
            v69611 = cv69611;
            v69612 = cv69612;
            v69615 = cv69615;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'register0_68035': {
        const v70801 = v69940[1];
        undefined /* setApiDetails */;
        const v70878 = v70801[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
        const v70881 = stdlib.ctcAddrEq(v70878, v69939);
        stdlib.assert(v70881, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'not contract',
          who: 'Admin'
          });
        ;
        const v71191 = v70801[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '1')];
        const v71192 = v70801[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '2')];
        const v71198 = v69610.protoFee;
        const v71199 = v69610.lpFee;
        const v71200 = v69610.totFee;
        const v71201 = v69610.protoAddr;
        const v71202 = v69610.locked;
        const v71203 = {
          locked: v71202,
          lpFee: v71199,
          protoAddr: v71201,
          protoFee: v71198,
          totFee: v71200
          };
        await txn3.getOutput('register', 'v71203', ctc9, v71203);
        null;
        const cv69608 = v69608;
        const cv69609 = false;
        const cv69610 = v69610;
        const cv69611 = v69611;
        const cv69612 = v69941;
        const cv69615 = v69615;
        
        v69608 = cv69608;
        v69609 = cv69609;
        v69610 = cv69610;
        v69611 = cv69611;
        v69612 = cv69612;
        v69615 = cv69615;
        
        txn2 = txn3;
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
    Triumvir_propose0_68035: ctc13,
    Triumvir_support0_68035: ctc14,
    register0_68035: ctc15
    });
  
  
  const [v69596, v69608, v69610, v69611, v69615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v69694 = ctc.selfAddress();
  const v69696 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_propose0_68035" (defined at: ./index.rsh:192:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_propose'
    });
  const v69697 = v69696[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v69717;
  switch (v69697[0]) {
    case 'Harvest': {
      const v69718 = v69697[1];
      v69717 = true;
      
      break;
      }
    case 'Kill': {
      const v69719 = v69697[1];
      v69717 = true;
      
      break;
      }
    case 'NewInfo': {
      const v69720 = v69697[1];
      const v69721 = v69720.protoFee;
      const v69722 = v69720.lpFee;
      const v69723 = v69720.totFee;
      const v69724 = stdlib.lt(v69721, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v69725 = stdlib.lt(v69722, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v69726 = v69724 ? v69725 : false;
      let v69727;
      if (v69726) {
        const v69728 = stdlib.safeAdd(v69722, v69721);
        const v69729 = stdlib.eq(v69723, v69728);
        v69727 = v69729;
        }
      else {
        v69727 = false;
        }
      const v69730 = stdlib.lt(v69723, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v69731 = v69727 ? v69730 : false;
      const v69732 = stdlib.gt(v69723, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v69733 = v69731 ? v69732 : false;
      v69717 = v69733;
      
      break;
      }
    case 'NewTriumvirs': {
      const v69734 = v69697[1];
      v69717 = true;
      
      break;
      }
    case 'NoOp': {
      const v69735 = v69697[1];
      v69717 = true;
      
      break;
      }
    case 'Rewards': {
      const v69736 = v69697[1];
      v69717 = true;
      
      break;
      }
    }
  stdlib.assert(v69717, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_propose0_68035" (defined at: ./index.rsh:192:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'invalid command',
    who: 'Triumvir_propose'
    });
  const v69738 = ['None', null];
  const v69739 = await stdlib.Array_asyncReduce([v69611], v69738, async([v69741], v69740, v69742) => {
    const v69743 = {
      None: 0,
      Some: 1
      }[v69740[0]];
    const v69744 = stdlib.eq(v69743, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v69745 = stdlib.addressEq(v69694, v69741);
    const v69746 = v69744 ? v69745 : false;
    const v69747 = ['Some', v69742];
    const v69748 = v69746 ? v69747 : v69740;
    
    return v69748;})
  const v69749 = {
    None: 0,
    Some: 1
    }[v69739[0]];
  const v69750 = stdlib.eq(v69749, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v69750, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_propose0_68035" (defined at: ./index.rsh:192:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_propose'
    });
  const v69778 = ['Triumvir_propose0_68035', v69696];
  
  let v69863;
  switch (v69697[0]) {
    case 'Harvest': {
      const v69864 = v69697[1];
      v69863 = true;
      
      break;
      }
    case 'Kill': {
      const v69865 = v69697[1];
      v69863 = true;
      
      break;
      }
    case 'NewInfo': {
      const v69866 = v69697[1];
      const v69867 = v69866.protoFee;
      const v69868 = v69866.lpFee;
      const v69869 = v69866.totFee;
      const v69870 = stdlib.lt(v69867, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v69871 = stdlib.lt(v69868, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v69872 = v69870 ? v69871 : false;
      let v69873;
      if (v69872) {
        const v69874 = stdlib.safeAdd(v69868, v69867);
        const v69875 = stdlib.eq(v69869, v69874);
        v69873 = v69875;
        }
      else {
        v69873 = false;
        }
      const v69876 = stdlib.lt(v69869, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v69877 = v69873 ? v69876 : false;
      const v69878 = stdlib.gt(v69869, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v69879 = v69877 ? v69878 : false;
      v69863 = v69879;
      
      break;
      }
    case 'NewTriumvirs': {
      const v69880 = v69697[1];
      v69863 = true;
      
      break;
      }
    case 'NoOp': {
      const v69881 = v69697[1];
      v69863 = true;
      
      break;
      }
    case 'Rewards': {
      const v69882 = v69697[1];
      v69863 = true;
      
      break;
      }
    }
  stdlib.assert(v69863, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'invalid command',
    who: 'Triumvir_propose'
    });
  const v69885 = await stdlib.Array_asyncReduce([v69611], v69738, async([v69887], v69886, v69888) => {
    const v69889 = {
      None: 0,
      Some: 1
      }[v69886[0]];
    const v69890 = stdlib.eq(v69889, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v69891 = stdlib.addressEq(v69694, v69887);
    const v69892 = v69890 ? v69891 : false;
    const v69893 = ['Some', v69888];
    const v69894 = v69892 ? v69893 : v69886;
    
    return v69894;})
  const v69895 = {
    None: 0,
    Some: 1
    }[v69885[0]];
  const v69896 = stdlib.eq(v69895, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v69896, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_propose'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v69596, v69608, v69610, v69611, v69615, v69778],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:196:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v69940], secs: v69942, time: v69941, didSend: v69090, from: v69939 } = txn1;
      
      switch (v69940[0]) {
        case 'Triumvir_propose0_68035': {
          const v69943 = v69940[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_propose"
            });
          const v69948 = v69943[stdlib.checkedBigNumberify('./index.rsh:192:10:spread', stdlib.UInt_max, '0')];
          const v69970 = ['None', null];
          ;
          const v70049 = await stdlib.Array_asyncReduce([v69611], v69970, async([v70051], v70050, v70052) => {
            const v70053 = {
              None: 0,
              Some: 1
              }[v70050[0]];
            const v70054 = stdlib.eq(v70053, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v70055 = stdlib.addressEq(v69939, v70051);
            const v70056 = v70054 ? v70055 : false;
            const v70057 = ['Some', v70052];
            const v70058 = v70056 ? v70057 : v70050;
            
            return v70058;})
          const v70062 = stdlib.fromSome(v70049, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
          const v70064 = stdlib.Array_set(v69608, v70062, v69948);
          const v70066 = null;
          const v70067 = await txn1.getOutput('Triumvir_propose', 'v70066', ctc1, v70066);
          
          null;
          const v77060 = v70064;
          const v77062 = v69610;
          const v77063 = v69611;
          const v77065 = v69615;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Triumvir_support0_68035': {
          const v70372 = v69940[1];
          
          break;
          }
        case 'register0_68035': {
          const v70801 = v69940[1];
          
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
  const {data: [v69940], secs: v69942, time: v69941, didSend: v69090, from: v69939 } = txn1;
  switch (v69940[0]) {
    case 'Triumvir_propose0_68035': {
      const v69943 = v69940[1];
      undefined /* setApiDetails */;
      const v69948 = v69943[stdlib.checkedBigNumberify('./index.rsh:192:10:spread', stdlib.UInt_max, '0')];
      let v69949;
      switch (v69948[0]) {
        case 'Harvest': {
          const v69950 = v69948[1];
          v69949 = true;
          
          break;
          }
        case 'Kill': {
          const v69951 = v69948[1];
          v69949 = true;
          
          break;
          }
        case 'NewInfo': {
          const v69952 = v69948[1];
          const v69953 = v69952.protoFee;
          const v69954 = v69952.lpFee;
          const v69955 = v69952.totFee;
          const v69956 = stdlib.lt(v69953, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
          const v69957 = stdlib.lt(v69954, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
          const v69958 = v69956 ? v69957 : false;
          let v69959;
          if (v69958) {
            const v69960 = stdlib.safeAdd(v69954, v69953);
            const v69961 = stdlib.eq(v69955, v69960);
            v69959 = v69961;
            }
          else {
            v69959 = false;
            }
          const v69962 = stdlib.lt(v69955, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
          const v69963 = v69959 ? v69962 : false;
          const v69964 = stdlib.gt(v69955, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
          const v69965 = v69963 ? v69964 : false;
          v69949 = v69965;
          
          break;
          }
        case 'NewTriumvirs': {
          const v69966 = v69948[1];
          v69949 = true;
          
          break;
          }
        case 'NoOp': {
          const v69967 = v69948[1];
          v69949 = true;
          
          break;
          }
        case 'Rewards': {
          const v69968 = v69948[1];
          v69949 = true;
          
          break;
          }
        }
      stdlib.assert(v69949, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'invalid command',
        who: 'Triumvir_propose'
        });
      const v69970 = ['None', null];
      const v69971 = await stdlib.Array_asyncReduce([v69611], v69970, async([v69973], v69972, v69974) => {
        const v69975 = {
          None: 0,
          Some: 1
          }[v69972[0]];
        const v69976 = stdlib.eq(v69975, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v69977 = stdlib.addressEq(v69939, v69973);
        const v69978 = v69976 ? v69977 : false;
        const v69979 = ['Some', v69974];
        const v69980 = v69978 ? v69979 : v69972;
        
        return v69980;})
      const v69981 = {
        None: 0,
        Some: 1
        }[v69971[0]];
      const v69982 = stdlib.eq(v69981, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v69982, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_propose'
        });
      ;
      let v70027;
      switch (v69948[0]) {
        case 'Harvest': {
          const v70028 = v69948[1];
          v70027 = true;
          
          break;
          }
        case 'Kill': {
          const v70029 = v69948[1];
          v70027 = true;
          
          break;
          }
        case 'NewInfo': {
          const v70030 = v69948[1];
          const v70031 = v70030.protoFee;
          const v70032 = v70030.lpFee;
          const v70033 = v70030.totFee;
          const v70034 = stdlib.lt(v70031, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
          const v70035 = stdlib.lt(v70032, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
          const v70036 = v70034 ? v70035 : false;
          let v70037;
          if (v70036) {
            const v70038 = stdlib.safeAdd(v70032, v70031);
            const v70039 = stdlib.eq(v70033, v70038);
            v70037 = v70039;
            }
          else {
            v70037 = false;
            }
          const v70040 = stdlib.lt(v70033, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
          const v70041 = v70037 ? v70040 : false;
          const v70042 = stdlib.gt(v70033, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
          const v70043 = v70041 ? v70042 : false;
          v70027 = v70043;
          
          break;
          }
        case 'NewTriumvirs': {
          const v70044 = v69948[1];
          v70027 = true;
          
          break;
          }
        case 'NoOp': {
          const v70045 = v69948[1];
          v70027 = true;
          
          break;
          }
        case 'Rewards': {
          const v70046 = v69948[1];
          v70027 = true;
          
          break;
          }
        }
      stdlib.assert(v70027, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
        msg: 'invalid command',
        who: 'Triumvir_propose'
        });
      const v70049 = await stdlib.Array_asyncReduce([v69611], v69970, async([v70051], v70050, v70052) => {
        const v70053 = {
          None: 0,
          Some: 1
          }[v70050[0]];
        const v70054 = stdlib.eq(v70053, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70055 = stdlib.addressEq(v69939, v70051);
        const v70056 = v70054 ? v70055 : false;
        const v70057 = ['Some', v70052];
        const v70058 = v70056 ? v70057 : v70050;
        
        return v70058;})
      const v70059 = {
        None: 0,
        Some: 1
        }[v70049[0]];
      const v70060 = stdlib.eq(v70059, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70060, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_propose'
        });
      const v70062 = stdlib.fromSome(v70049, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
      const v70064 = stdlib.Array_set(v69608, v70062, v69948);
      const v70066 = null;
      const v70067 = await txn1.getOutput('Triumvir_propose', 'v70066', ctc1, v70066);
      if (v69090) {
        stdlib.protect(ctc1, await interact.out(v69943, v70067), {
          at: './index.rsh:192:11:application',
          fs: ['at ./index.rsh:192:11:application call to [unknown function] (defined at: ./index.rsh:192:11:function exp)', 'at ./index.rsh:197:10:application call to "k" (defined at: ./index.rsh:196:23:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
          msg: 'out',
          who: 'Triumvir_propose'
          });
        }
      else {
        }
      
      null;
      const v77060 = v70064;
      const v77062 = v69610;
      const v77063 = v69611;
      const v77065 = v69615;
      return;
      
      break;
      }
    case 'Triumvir_support0_68035': {
      const v70372 = v69940[1];
      return;
      break;
      }
    case 'register0_68035': {
      const v70801 = v69940[1];
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
    Triumvir_propose0_68035: ctc14,
    Triumvir_support0_68035: ctc13,
    register0_68035: ctc15
    });
  const ctc17 = stdlib.T_Struct([['A', ctc6], ['B', ctc6]]);
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc18]);
  
  
  const [v69596, v69608, v69610, v69611, v69615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v69780 = ctc.selfAddress();
  const v69782 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68035" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_support'
    });
  const v69783 = v69782[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v69784 = v69782[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v69805 = stdlib.lt(v69783, stdlib.checkedBigNumberify('./index.rsh:203:29:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v69805, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68035" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'illegal idx',
    who: 'Triumvir_support'
    });
  const v69807 = ['None', null];
  const v69808 = await stdlib.Array_asyncReduce([v69611], v69807, async([v69810], v69809, v69811) => {
    const v69812 = {
      None: 0,
      Some: 1
      }[v69809[0]];
    const v69813 = stdlib.eq(v69812, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v69814 = stdlib.addressEq(v69780, v69810);
    const v69815 = v69813 ? v69814 : false;
    const v69816 = ['Some', v69811];
    const v69817 = v69815 ? v69816 : v69809;
    
    return v69817;})
  const v69818 = {
    None: 0,
    Some: 1
    }[v69808[0]];
  const v69819 = stdlib.eq(v69818, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v69819, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68035" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_support'
    });
  const v69821 = stdlib.fromSome(v69808, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
  const v69822 = stdlib.eq(v69783, v69821);
  const v69823 = v69822 ? false : true;
  stdlib.assert(v69823, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68035" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'cannot support self',
    who: 'Triumvir_support'
    });
  const v69826 = v69608[v69783];
  const v69827 = stdlib.digest([ctc10], [v69784]);
  const v69828 = stdlib.digest([ctc10], [v69826]);
  const v69829 = stdlib.digestEq(v69827, v69828);
  stdlib.assert(v69829, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68035" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'command switched',
    who: 'Triumvir_support'
    });
  const v69859 = ['Triumvir_support0_68035', v69782];
  
  const v69907 = await stdlib.Array_asyncReduce([v69611], v69807, async([v69909], v69908, v69910) => {
    const v69911 = {
      None: 0,
      Some: 1
      }[v69908[0]];
    const v69912 = stdlib.eq(v69911, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v69913 = stdlib.addressEq(v69780, v69909);
    const v69914 = v69912 ? v69913 : false;
    const v69915 = ['Some', v69910];
    const v69916 = v69914 ? v69915 : v69908;
    
    return v69916;})
  const v69917 = {
    None: 0,
    Some: 1
    }[v69907[0]];
  const v69918 = stdlib.eq(v69917, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v69918, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_support'
    });
  const v69920 = stdlib.fromSome(v69907, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
  const v69921 = stdlib.eq(v69783, v69920);
  const v69922 = v69921 ? false : true;
  stdlib.assert(v69922, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'cannot support self',
    who: 'Triumvir_support'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v69596, v69608, v69610, v69611, v69615, v69859],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:209:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v69940], secs: v69942, time: v69941, didSend: v69090, from: v69939 } = txn1;
      
      switch (v69940[0]) {
        case 'Triumvir_propose0_68035': {
          const v69943 = v69940[1];
          
          break;
          }
        case 'Triumvir_support0_68035': {
          const v70372 = v69940[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_support"
            });
          const v70417 = v70372[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
          const v70440 = v69608[v70417];
          ;
          const v70570 = stdlib.Array_set(v69608, v70417, v69596);
          const v70573 = null;
          const v70574 = await txn1.getOutput('Triumvir_support', 'v70573', ctc1, v70573);
          
          null;
          switch (v70440[0]) {
            case 'Harvest': {
              const v70617 = v70440[1];
              const v70618 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '0')];
              const v70619 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '1')];
              const v70620 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '2')];
              const v70621 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '3')];
              switch (v70619[0]) {
                case 'None': {
                  const v70622 = v70619[1];
                  const v70623 = v69610.protoFee;
                  const v70624 = v69610.lpFee;
                  const v70625 = v69610.totFee;
                  const v70626 = v69610.protoAddr;
                  const v70627 = v69610.locked;
                  const v70630 = [];
                  const v70641 = {
                    locked: v70627,
                    lpFee: v70624,
                    protoAddr: v70626,
                    protoFee: v70623,
                    totFee: v70625
                    };
                  const v70642 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v70618,
                      remote: ({
                        accs: [v70621],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        fees: stdlib.checkedBigNumberify('./index.rsh:162:40:application', stdlib.UInt_max, '2'),
                        pays: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        toks: [v70620]
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v70630 /* simTokensRecv */, undefined /* simReturnVal */];})();
                  const v70643 = await txn1.getOutput('internal', 'v70642', ctc19, v70642);
                  const v70645 = v70643[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                  const v70654 = stdlib.add(v69615, v70645);
                  const v77130 = v70570;
                  const v77132 = v69610;
                  const v77133 = v69611;
                  const v77135 = v70654;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'Some': {
                  const v70664 = v70619[1];
                  const v70665 = v69610.protoFee;
                  const v70666 = v69610.lpFee;
                  const v70667 = v69610.totFee;
                  const v70668 = v69610.protoAddr;
                  const v70669 = v69610.locked;
                  const v70672 = [];
                  const v70683 = {
                    locked: v70669,
                    lpFee: v70666,
                    protoAddr: v70668,
                    protoFee: v70665,
                    totFee: v70667
                    };
                  const v70684 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v70618,
                      remote: ({
                        accs: [v70621],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        fees: stdlib.checkedBigNumberify('./index.rsh:162:40:application', stdlib.UInt_max, '3'),
                        pays: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        toks: [v70664, v70620]
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v70672 /* simTokensRecv */, undefined /* simReturnVal */];})();
                  const v70685 = await txn1.getOutput('internal', 'v70684', ctc19, v70684);
                  const v70687 = v70685[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                  const v70696 = stdlib.add(v69615, v70687);
                  const v77137 = v70570;
                  const v77139 = v69610;
                  const v77140 = v69611;
                  const v77142 = v70696;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                }
              break;
              }
            case 'Kill': {
              const v70706 = v70440[1];
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              break;
              }
            case 'NewInfo': {
              const v70714 = v70440[1];
              const v70715 = v70714.locked;
              const v70716 = v70714.lpFee;
              const v70717 = v70714.protoAddr;
              const v70718 = v70714.protoFee;
              const v70719 = v70714.totFee;
              const v70720 = {
                locked: v70715,
                lpFee: v70716,
                protoAddr: v70717,
                protoFee: v70718,
                totFee: v70719
                };
              const v77151 = v70570;
              const v77153 = v70720;
              const v77154 = v69611;
              const v77156 = v69615;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NewTriumvirs': {
              const v70729 = v70440[1];
              const v77158 = v70570;
              const v77160 = v69610;
              const v77161 = v70729;
              const v77163 = v69615;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NoOp': {
              const v70737 = v70440[1];
              const v77165 = v70570;
              const v77167 = v69610;
              const v77168 = v69611;
              const v77170 = v69615;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Rewards': {
              const v70745 = v70440[1];
              const v70747 = (stdlib.le(await ctc.getBalance(), v69615) ? stdlib.checkedBigNumberify('./index.rsh:174:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v69615));
              const v70748 = stdlib.safeAdd(v70747, v69615);
              const v70752 = stdlib.sub(v70748, v70747);
              sim_r.txns.push({
                kind: 'from',
                to: v70745,
                tok: undefined /* Nothing */
                });
              const v77172 = v70570;
              const v77174 = v69610;
              const v77175 = v69611;
              const v77177 = v70752;
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'register0_68035': {
          const v70801 = v69940[1];
          
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
  const {data: [v69940], secs: v69942, time: v69941, didSend: v69090, from: v69939 } = txn1;
  switch (v69940[0]) {
    case 'Triumvir_propose0_68035': {
      const v69943 = v69940[1];
      return;
      break;
      }
    case 'Triumvir_support0_68035': {
      const v70372 = v69940[1];
      undefined /* setApiDetails */;
      const v70417 = v70372[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
      const v70418 = v70372[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '1')];
      const v70419 = stdlib.lt(v70417, stdlib.checkedBigNumberify('./index.rsh:203:29:dot', stdlib.UInt_max, '3'));
      stdlib.assert(v70419, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'illegal idx',
        who: 'Triumvir_support'
        });
      const v70421 = ['None', null];
      const v70422 = await stdlib.Array_asyncReduce([v69611], v70421, async([v70424], v70423, v70425) => {
        const v70426 = {
          None: 0,
          Some: 1
          }[v70423[0]];
        const v70427 = stdlib.eq(v70426, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70428 = stdlib.addressEq(v69939, v70424);
        const v70429 = v70427 ? v70428 : false;
        const v70430 = ['Some', v70425];
        const v70431 = v70429 ? v70430 : v70423;
        
        return v70431;})
      const v70432 = {
        None: 0,
        Some: 1
        }[v70422[0]];
      const v70433 = stdlib.eq(v70432, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70433, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_support'
        });
      const v70435 = stdlib.fromSome(v70422, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
      const v70436 = stdlib.eq(v70417, v70435);
      const v70437 = v70436 ? false : true;
      stdlib.assert(v70437, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'cannot support self',
        who: 'Triumvir_support'
        });
      const v70440 = v69608[v70417];
      const v70441 = stdlib.digest([ctc10], [v70418]);
      const v70442 = stdlib.digest([ctc10], [v70440]);
      const v70443 = stdlib.digestEq(v70441, v70442);
      stdlib.assert(v70443, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'command switched',
        who: 'Triumvir_support'
        });
      ;
      const v70545 = await stdlib.Array_asyncReduce([v69611], v70421, async([v70547], v70546, v70548) => {
        const v70549 = {
          None: 0,
          Some: 1
          }[v70546[0]];
        const v70550 = stdlib.eq(v70549, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70551 = stdlib.addressEq(v69939, v70547);
        const v70552 = v70550 ? v70551 : false;
        const v70553 = ['Some', v70548];
        const v70554 = v70552 ? v70553 : v70546;
        
        return v70554;})
      const v70555 = {
        None: 0,
        Some: 1
        }[v70545[0]];
      const v70556 = stdlib.eq(v70555, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70556, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_support'
        });
      const v70558 = stdlib.fromSome(v70545, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
      const v70559 = stdlib.eq(v70417, v70558);
      const v70560 = v70559 ? false : true;
      stdlib.assert(v70560, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
        msg: 'cannot support self',
        who: 'Triumvir_support'
        });
      const v70570 = stdlib.Array_set(v69608, v70417, v69596);
      const v70573 = null;
      const v70574 = await txn1.getOutput('Triumvir_support', 'v70573', ctc1, v70573);
      if (v69090) {
        stdlib.protect(ctc1, await interact.out(v70372, v70574), {
          at: './index.rsh:202:11:application',
          fs: ['at ./index.rsh:202:11:application call to [unknown function] (defined at: ./index.rsh:202:11:function exp)', 'at ./index.rsh:210:10:application call to "k" (defined at: ./index.rsh:209:23:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
          msg: 'out',
          who: 'Triumvir_support'
          });
        }
      else {
        }
      
      null;
      switch (v70440[0]) {
        case 'Harvest': {
          const v70617 = v70440[1];
          const v70618 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '0')];
          const v70619 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '1')];
          const v70620 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '2')];
          const v70621 = v70617[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '3')];
          switch (v70619[0]) {
            case 'None': {
              const v70622 = v70619[1];
              const v70623 = v69610.protoFee;
              const v70624 = v69610.lpFee;
              const v70625 = v69610.totFee;
              const v70626 = v69610.protoAddr;
              const v70627 = v69610.locked;
              const v70630 = [];
              const v70641 = {
                locked: v70627,
                lpFee: v70624,
                protoAddr: v70626,
                protoFee: v70623,
                totFee: v70625
                };
              const v70642 = undefined /* Remote */;
              const v70643 = await txn1.getOutput('internal', 'v70642', ctc19, v70642);
              const v70645 = v70643[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
              const v70654 = stdlib.add(v69615, v70645);
              const v70655 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70645);
              stdlib.assert(v70655, {
                at: './index.rsh:165:15:application',
                fs: ['at ./index.rsh:169:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                msg: 'remote bill check',
                who: 'Triumvir_support'
                });
              const v77130 = v70570;
              const v77132 = v69610;
              const v77133 = v69611;
              const v77135 = v70654;
              return;
              
              break;
              }
            case 'Some': {
              const v70664 = v70619[1];
              const v70665 = v69610.protoFee;
              const v70666 = v69610.lpFee;
              const v70667 = v69610.totFee;
              const v70668 = v69610.protoAddr;
              const v70669 = v69610.locked;
              const v70672 = [];
              const v70683 = {
                locked: v70669,
                lpFee: v70666,
                protoAddr: v70668,
                protoFee: v70665,
                totFee: v70667
                };
              const v70684 = undefined /* Remote */;
              const v70685 = await txn1.getOutput('internal', 'v70684', ctc19, v70684);
              const v70687 = v70685[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
              const v70696 = stdlib.add(v69615, v70687);
              const v70697 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70687);
              stdlib.assert(v70697, {
                at: './index.rsh:165:15:application',
                fs: ['at ./index.rsh:168:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                msg: 'remote bill check',
                who: 'Triumvir_support'
                });
              const v77137 = v70570;
              const v77139 = v69610;
              const v77140 = v69611;
              const v77142 = v70696;
              return;
              
              break;
              }
            }
          break;
          }
        case 'Kill': {
          const v70706 = v70440[1];
          return;
          
          break;
          }
        case 'NewInfo': {
          const v70714 = v70440[1];
          const v70715 = v70714.locked;
          const v70716 = v70714.lpFee;
          const v70717 = v70714.protoAddr;
          const v70718 = v70714.protoFee;
          const v70719 = v70714.totFee;
          const v70720 = {
            locked: v70715,
            lpFee: v70716,
            protoAddr: v70717,
            protoFee: v70718,
            totFee: v70719
            };
          const v77151 = v70570;
          const v77153 = v70720;
          const v77154 = v69611;
          const v77156 = v69615;
          return;
          
          break;
          }
        case 'NewTriumvirs': {
          const v70729 = v70440[1];
          const v77158 = v70570;
          const v77160 = v69610;
          const v77161 = v70729;
          const v77163 = v69615;
          return;
          
          break;
          }
        case 'NoOp': {
          const v70737 = v70440[1];
          const v77165 = v70570;
          const v77167 = v69610;
          const v77168 = v69611;
          const v77170 = v69615;
          return;
          
          break;
          }
        case 'Rewards': {
          const v70745 = v70440[1];
          const v70747 = (stdlib.le(await ctc.getBalance(), v69615) ? stdlib.checkedBigNumberify('./index.rsh:174:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v69615));
          const v70748 = stdlib.safeAdd(v70747, v69615);
          const v70752 = stdlib.sub(v70748, v70747);
          ;
          const v77172 = v70570;
          const v77174 = v69610;
          const v77175 = v69611;
          const v77177 = v70752;
          return;
          
          break;
          }
        }
      break;
      }
    case 'register0_68035': {
      const v70801 = v69940[1];
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
    Triumvir_propose0_68035: ctc14,
    Triumvir_support0_68035: ctc15,
    register0_68035: ctc13
    });
  
  
  const [v69596, v69608, v69610, v69611, v69615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v69668 = ctc.selfAddress();
  const v69670 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to "runregister0_68035" (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v69671 = v69670[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v69679 = stdlib.ctcAddrEq(v69671, v69668);
  stdlib.assert(v69679, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to "runregister0_68035" (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not contract',
    who: 'register'
    });
  const v69692 = ['register0_68035', v69670];
  
  const txn1 = await (ctc.sendrecv({
    args: [v69596, v69608, v69610, v69611, v69615, v69692],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:186:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v69940], secs: v69942, time: v69941, didSend: v69090, from: v69939 } = txn1;
      
      switch (v69940[0]) {
        case 'Triumvir_propose0_68035': {
          const v69943 = v69940[1];
          
          break;
          }
        case 'Triumvir_support0_68035': {
          const v70372 = v69940[1];
          
          break;
          }
        case 'register0_68035': {
          const v70801 = v69940[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          const v70878 = v70801[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
          ;
          const v71191 = v70801[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '1')];
          const v71192 = v70801[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '2')];
          const v71198 = v69610.protoFee;
          const v71199 = v69610.lpFee;
          const v71200 = v69610.totFee;
          const v71201 = v69610.protoAddr;
          const v71202 = v69610.locked;
          const v71203 = {
            locked: v71202,
            lpFee: v71199,
            protoAddr: v71201,
            protoFee: v71198,
            totFee: v71200
            };
          const v71204 = await txn1.getOutput('register', 'v71203', ctc8, v71203);
          
          null;
          const v77242 = v69608;
          const v77244 = v69610;
          const v77245 = v69611;
          const v77247 = v69615;
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
  const {data: [v69940], secs: v69942, time: v69941, didSend: v69090, from: v69939 } = txn1;
  switch (v69940[0]) {
    case 'Triumvir_propose0_68035': {
      const v69943 = v69940[1];
      return;
      break;
      }
    case 'Triumvir_support0_68035': {
      const v70372 = v69940[1];
      return;
      break;
      }
    case 'register0_68035': {
      const v70801 = v69940[1];
      undefined /* setApiDetails */;
      const v70878 = v70801[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
      const v70881 = stdlib.ctcAddrEq(v70878, v69939);
      stdlib.assert(v70881, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'not contract',
        who: 'register'
        });
      ;
      const v71191 = v70801[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '1')];
      const v71192 = v70801[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '2')];
      const v71198 = v69610.protoFee;
      const v71199 = v69610.lpFee;
      const v71200 = v69610.totFee;
      const v71201 = v69610.protoAddr;
      const v71202 = v69610.locked;
      const v71203 = {
        locked: v71202,
        lpFee: v71199,
        protoAddr: v71201,
        protoFee: v71198,
        totFee: v71200
        };
      const v71204 = await txn1.getOutput('register', 'v71203', ctc8, v71203);
      if (v69090) {
        stdlib.protect(ctc1, await interact.out(v70801, v71204), {
          at: './index.rsh:183:11:application',
          fs: ['at ./index.rsh:183:11:application call to [unknown function] (defined at: ./index.rsh:183:11:function exp)', 'at ./index.rsh:187:10:application call to "k" (defined at: ./index.rsh:186:23:function exp)', 'at ./index.rsh:186:23:application call to [unknown function] (defined at: ./index.rsh:186:23:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      null;
      const v77242 = v69608;
      const v77244 = v69610;
      const v77245 = v69611;
      const v77247 = v69615;
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
  if (step == 3) {return _Triumvir_propose3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Triumvir_support(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Triumvir_support expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Triumvir_support expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Triumvir_support3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _register3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Triumvir_propose((byte,byte[96]))byte[0]`, `Triumvir_support(uint64,(byte,byte[96]))byte[0]`, `register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)`],
    pure: [`Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))`],
    sigs: [`Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))`, `Triumvir_propose((byte,byte[96]))byte[0]`, `Triumvir_support(uint64,(byte,byte[96]))byte[0]`, `register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)`]
    },
  appApproval: `ByAVAAEDIAUCYQZkCBAEzJrO1wTFgN+kDuiU6MoEhAM5vQNgowIJJggBAQABAAECAQMBBAVhcHBJRAQomkRuIjUAMRhBCJUpZEkiWzUBSSEJWzUCIQpbNQg2GgAXSUEAuCI1BCM1BkkhDAxAAC9JIQ0MQAAUIQ0SRDYaATX/KjT/UCEJr1BCAKghDBJENhoBNhoCUDX/KDT/UEIAlEkhDgxAABwhDhJENhoBNhoCUDYaA1A1/ys0/1CBUK9QQgBxgfa70OUBEkQ0ASQSRCpkKGRQK2RQJwRkUCcFZFBJNQMhDyEQWDX/NAMhESESWDQDIQYhE1hQNP9XKQg0/1cBCFA0/1cxCFA0/1cJIFA0/1cAAVBQNQdCB7s2GgIXNQQ2GgM2GgEXSSEFDEAGDiEFEkQkNAESRDQESSISTDQCEhFEKmQoZFArZFAnBGRQJwVkUEk1A0lKSVcAYTX/IQYhE1g1/iEPIRBYNf0hESESWDX8gZ0EWzX7STUFNfqABKLqoRI0+lCwNPoiVUkjDEADuEkhBQxAAIshBRJENPpXARk19zT3Ils19icGNPYWUAMxABJEgAgAAAAAAAEWIzT9VykINP1XAQhQNP1XMQhQNP1XCSBQNP1XAAFQULA0/VcpCDT9VwEIUDT9VzEIUDT9VwkgUDT9VwABUDUHgAS6Xf0zNPYWUDT3VwgJUDT3VxEIULA0/zT+IjT9NPwyBjT7QgX6SDT6VwFpNfexIrIBIQeyEDQIshizNPciW0k19iQMRCEUr0k19TX0IjXzNPwlNPMLJVg18jT0KDTzFlA09CJVIhIxADTyEhBNNfQ08yMISTXzJAxA/9Q09CJVIxJENPYiNPRJNfMjWzTzIlVNE0Q0/iEGNPYLIQZYNfM091cIYQE08wESRDT1NfIiNfE0/CU08QslWDXwNPIoNPEWUDTyIlUiEjEANPASEE018jTxIwhJNfEkDED/1DTyIlUjEkQ09iI08kk18SNbNPEiVU0TRDT+NPYhBgs0/1018YAIAAAAAAABE62wKTUHgASiIOREMQBQNPYWUDTzULA08yJVSSQMQAB0SSELDEAAVUkhBAxAAD0hBBJENPNXASA18DIKYDIKeAk0+wk177EisgE077III7IQNPCyB7M0/zTxIjT9NPwyBjTvNPsINO8JQgSqSDT/NPEiNP00/DIGNPtCBJlINPNXAWA18DT/NPEiNP008DIGNPtCBIFJIwxAAEtJIQUMQAAzSDTzVwE5NfA0/zTxIjTwVzgBNPBXCAhQNPBXGCBQNPBXAAhQNPBXEAhQNPwyBjT7QgRBSDT/NPEjNP00/DIGNPtCBDBINPNXATlJNfAiWzXvNPCBEVs17jTwVxkgNe008FcICUk17CJVQACVJwY07xZQAzXqMgp4NekyCmA06QkWNeixIrIBIQeyEDTvshgnB7IaNO1JshyyGjT9VykINP1XAQhQNP1XMQhQNP1XCSBQNP1XAAFQsho07rIwszIKYDTpCTToFwkWtwA+VwQAUDXrgAgAAAAAAAET8jTrULA060k16iJbNekiNOkSRDT/NPEiNP00/DIGNPs06QhCA3M07CNbNesnBjTvFlADNekyCng16DIKYDToCRY157EisgEhB7IQNO+yGCcHsho07UmyHLIaNP1XKQg0/VcBCFA0/VcxCFA0/VcJIFA0/VcAAVCyGjTrsjA07rIwszIKYDToCTTnFwkWtwA+VwQAUDXqgAgAAAAAAAEUHDTqULA06kk16SJbNegiNOgSRDT/NPEiNP00/DIGNPs06AhCAtRINPpXAWE19zT3STX2IlVJJAxAACZJIQsMQAAYSSEEDEAACiEEEkQjNfVCAHRIIzX1QgBtSCM19UIAZkkjDEAAWUkhBQxAAEtINPZXATlJNfQiWzXzNPQhCVs18jT0IQpbNfE08yEIDDTyIQgMEEEADTTxNPI08wgSNfBCAAMiNfA08DTxIQgMEDTxIg0QNfVCAA5IIzX1QgAHSCM19UIAADT1RCEUr0k19DXzIjXyNPwlNPILJVg18TTzKDTyFlA08yJVIhIxADTxEhBNNfM08iMISTXyJAxA/9Q08yJVIxJENPYiVUkkDEAAJkkhCwxAABhJIQQMQAAKIQQSRCM18kIAdEgjNfJCAG1IIzXyQgBmSSMMQABZSSEFDEAAS0g09lcBOUk18SJbNfA08SEJWzXvNPEhCls17jTwIQgMNO8hCAwQQQANNO407zTwCBI17UIAAyI17TTtNO4hCAwQNO4iDRA18kIADkgjNfJCAAdIIzXyQgAANPJENPQ18SI18DT8JTTwCyVYNe808Sg08BZQNPEiVSISMQA07xIQTTXxNPAjCEk18CQMQP/UNPEiVSMSRIAIAAAAAAABEbKwKTUHgATt9gUDMQBQNPZQsDT/NP4iNPFJNfAjWzTwIlVNIQYLNPZdIjT9NPwyBjT7QgDhIhJEgcCaDIgBuLEisgEhB7IQIrIYgAYHMQAyCRKyHoABB7Ifs7Q9NQgiNAESRDQESSISTDQCEhFESTUFNf+ABDIq61k0/1CwgGEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASTX+SUlQNP5QIoAJAAAAAAAAAAAZMgpQgAgAAAAAAAAABVCACAAAAAAAAAAeUDT/MgYiQgAANf81/jX9Nfw1+zX6Nfk0+0EAA0IARTT5NPpQNPxQNP1QNP8WUCpLAVcAf2coSwFXf39nK0sBV/5/ZycESwGB/QKBf1hnJwVLAYH8A4EpWGdIJDUBMgY1AkIALTEZIQQSRLEisgEhB7IQNAiyGCEEshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBzE1EkQiMTYSRCIxNxJEIjUBIjUCIjUIQv+nNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: {
    api_Triumvir_support: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 5,
  stateSize: 549,
  unsupported: [],
  version: 11,
  warnings: [`Step 2 calls a remote object at /home/user/prog/reach/duoswap-core/index.rsh:165:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v69590",
                "type": "address[3]"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
            "internalType": "enum _enum_T5",
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
            "internalType": "struct T3",
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
            "internalType": "struct T4",
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
        "internalType": "struct T5",
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
        "indexed": false,
        "internalType": "struct T2",
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
            "internalType": "enum _enum_T5",
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
            "internalType": "struct T3",
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
            "internalType": "struct T4",
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
        "internalType": "struct T5",
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
                "name": "v69590",
                "type": "address[3]"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T5",
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
                            "internalType": "struct T3",
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
                            "internalType": "struct T4",
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
                        "internalType": "struct T5",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Triumvir_propose0_68035",
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
                            "internalType": "enum _enum_T5",
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
                            "internalType": "struct T3",
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
                            "internalType": "struct T4",
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
                        "internalType": "struct T5",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_Triumvir_support0_68035",
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
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem2",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_register0_68035",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T18",
                "name": "v69940",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
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
    "name": "_reach_oe_v70066",
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
    "name": "_reach_oe_v70573",
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
                "internalType": "struct T20",
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
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v70642",
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
                "internalType": "struct T20",
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
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v70684",
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
        "internalType": "struct T4",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v71203",
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
                "internalType": "enum _enum_T5",
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
                "internalType": "struct T3",
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
                "internalType": "struct T4",
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
            "internalType": "struct T5[3]",
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
            "internalType": "struct T4",
            "name": "protoInfo",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
            "internalType": "enum _enum_T5",
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
            "internalType": "struct T3",
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
            "internalType": "struct T4",
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
        "internalType": "struct T5",
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
            "internalType": "enum _enum_T5",
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
            "internalType": "struct T3",
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
            "internalType": "struct T4",
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
        "internalType": "struct T5",
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
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T5",
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
                            "internalType": "struct T3",
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
                            "internalType": "struct T4",
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
                        "internalType": "struct T5",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Triumvir_propose0_68035",
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
                            "internalType": "enum _enum_T5",
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
                            "internalType": "struct T3",
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
                            "internalType": "struct T4",
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
                        "internalType": "struct T5",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_Triumvir_support0_68035",
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
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem2",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_register0_68035",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T18",
                "name": "v69940",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
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
        "internalType": "struct T4",
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
  Bytecode: `0x608060405260405162003b3738038062003b37833981016040819052620000269162000583565b6000805543600355620000386200020c565b7fe5d35ee1d5d0380ec4bb3893af49ad0266757898dc8e4981d86f4fcd3a980e5533836040516200006b9291906200066d565b60405180910390a162000081341560086200013e565b8051600490528051600060a0909101819052815160208084018051929092528351825182015283519151604090810192909252818401805193909352825160199101528151309101528051600560609091015251601e608090910152620000e762000266565b81518151526020808301518183018051919091528051600090830181905260408086015183519091015291850151518151606001528051436080909101525160a00152620001358162000168565b505050620009e5565b81620001645760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b806020015160200151156200019257600080805560018190556200018f906002906200028a565b50565b6200019c620002c9565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a00151608084015260036000554360015551620001e891839101620007d1565b6040516020818303038152906040526002908162000207919062000919565b505050565b60405180606001604052806200022162000337565b815260200162000230620003c3565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b60405180604001604052806200027b620003f3565b81526020016200026162000408565b50805462000298906200088b565b6000825580601f10620002a9575050565b601f0160209004906000526020600020908101906200018f91906200048c565b6040518060a00160405280620002de62000337565b8152602001620002ed620003c3565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016200032a620004a7565b8152602001600081525090565b6040805160e08101909152806000815260200162000354620004c5565b8152602001600015158152602001620003a06040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b8152602001620003af620004a7565b815260006020820181905260409091015290565b60405180606001604052806003905b620003dc62000337565b815260200190600190039081620003d25790505090565b60405180602001604052806200026162000337565b6040518060c001604052806200041d620003c3565b8152602001600015158152602001620004696040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b815260200162000478620004a7565b815260200160008152602001600081525090565b5b80821115620004a357600081556001016200048d565b5090565b60405180606001604052806003906020820280368337509192915050565b604051806080016040528060006001600160a01b03168152602001620003af6040805160608101909152806000620003af565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620005335762000533620004f8565b60405290565b604051602081016001600160401b0381118282101715620005335762000533620004f8565b604051606081016001600160401b0381118282101715620005335762000533620004f8565b600081830360808112156200059757600080fd5b620005a16200050e565b8351815260206060601f1984011215620005ba57600080fd5b620005c462000539565b925085603f860112620005d657600080fd5b620005e06200055e565b806080870188811115620005f357600080fd5b8388015b81811015620006275780516001600160a01b0381168114620006195760008081fd5b8452928401928401620005f7565b50508452508101919091529392505050565b8060005b6003811015620006675781516001600160a01b03168452602093840193909101906001016200063d565b50505050565b600060a08201905060018060a01b03841682528251602083015260208301516200069c60408401825162000639565b509392505050565b634e487b7160e01b600052602160045260246000fd5b805160068110620006cf57620006cf620006a4565b825260208181015180516001600160a01b039081168386015291810151805191929160028110620007045762000704620006a4565b60408681019190915260208201511515606080880191909152918101518316608087015283015190911660a085015201516001600160a01b03811660c084015250604081015180151560e084015250606081810151805161010085015260208101516101208501526040810151610140850152908101516001600160a01b031661016084015260808101511515610180840152506080810151620007ad6101a084018262000639565b5060a0810151151561020083015260c001516001600160a01b031661022090910152565b6000610a2082019050620007e7828451620006ba565b60208084015161024080850160005b60038110156200081e576200080d828551620006ba565b9284019290820190600101620007f6565b5050505060408481015180511515610900860152918201516109208501528101516001600160a01b0316610940840152606080820151610960850152608090910151610980840152830151620008796109a084018262000639565b506080830151610a0083015292915050565b600181811c90821680620008a057607f821691505b602082108103620008c157634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200020757600081815260208120601f850160051c81016020861015620008f05750805b601f850160051c820191505b818110156200091157828155600101620008fc565b505050505050565b81516001600160401b03811115620009355762000935620004f8565b6200094d816200094684546200088b565b84620008c7565b602080601f8311600181146200098557600084156200096c5750858301515b600019600386901b1c1916600185901b17855562000911565b600085815260208120601f198616915b82811015620009b65788860151825594840194600190910190840162000995565b5085821015620009d55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61314280620009f56000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b578063832307571461010b578063ab53f2c614610120578063d379c61114610143578063dfcc43891461015657005b80631a6febfe146100825780631e93b0f1146100aa5780633b02a717146100c95780634012e02e146100e957005b3661008057005b005b610095610090366004612605565b610169565b60405190151581526020015b60405180910390f35b3480156100b657600080fd5b506003545b6040519081526020016100a1565b6100dc6100d7366004612633565b61017e565b6040516100a191906126b5565b3480156100f557600080fd5b506100fe61019b565b6040516100a19190612816565b34801561011757600080fd5b506001546100bb565b34801561012c57600080fd5b506101356101b4565b6040516100a192919061287b565b6100806101513660046128b5565b610251565b6100956101643660046128ce565b610275565b60006101758383610280565b90505b92915050565b610186611d0b565b6101918484846102c9565b90505b9392505050565b6101a3611d45565b60006101ae81610336565b91505090565b6000606060005460028080546101c9906128eb565b80601f01602080910402602001604051908101604052809291908181526020018280546101f5906128eb565b80156102425780601f1061021757610100808354040283529160200191610242565b820191906000526020600020905b81548152906001019060200180831161022557829003601f168201915b50505050509050915091509091565b610259611d77565b61027161026b36849003840184612968565b82610476565b5050565b600061017882611b17565b600061028a611d96565b6020818101805151600190528051516040908101518790529051510151018390526102b3611d77565b6102bd8282610476565b60200151949350505050565b6102d1611d0b565b6102d9611d96565b6020818101805151600290528051516060908101516001600160a01b0389811690915282515182015190930187905290515101519084166040919091015261031f611d77565b6103298282610476565b6040015195945050505050565b61033e611d45565b60036000540361046557600060028054610357906128eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610383906128eb565b80156103d05780601f106103a5576101008083540402835291602001916103d0565b820191906000526020600020905b8154815290600101906020018083116103b357829003601f168201915b50505050508060200190518101906103e89190612c96565b90506103f2611db0565b604080830180516060908101518451528151602090810151855182015282516080908101518651860152835185015186516001600160a01b039091169084015292515185519015159301929092528401518184018051919091529381015184519091015290518251909101525192915050565b61047160006007611b4e565b919050565b610486600360005414601b611b4e565b81516104a190158061049a57508251600154145b601c611b4e565b6000808055600280546104b3906128eb565b80601f01602080910402602001604051908101604052809291908181526020018280546104df906128eb565b801561052c5780601f106105015761010080835404028352916020019161052c565b820191906000526020600020905b81548152906001019060200180831161050f57829003601f168201915b50505050508060200190518101906105449190612c96565b905061054e611dd0565b7f6392de3086ad392d559b57a003ab34e70460d2baca532f308e45c5a87ed12206338560405161057f929190612d50565b60405180910390a160006020850151515160028111156105a1576105a16126ef565b03610be957602080850151510151815260008151515160058111156105c8576105c86126ef565b036105d95760016020820152610732565b60018151515160058111156105f0576105f06126ef565b036106015760016020820152610732565b6002815151516005811115610618576106186126ef565b036106be5780515160600151604082018190525160641161063a576000610647565b6064816040015160200151105b15610675576040810151602081015190516106629190611b74565b604080830151015114606082015261067d565b600060608201525b806060015161068d57600061069a565b6064816040015160400151105b6106a55760006106b2565b6000816040015160400151115b15156020820152610732565b60038151515160058111156106d5576106d56126ef565b036106e65760016020820152610732565b60048151515160058111156106fd576106fd6126ef565b0361070e5760016020820152610732565b6005815151516005811115610725576107256126ef565b0361073257600160208201525b61074181602001516009611b4e565b6080810180516000908190528151602001819052905160c08301525b600381101561080e578260600151816003811061077c5761077c612df9565b60200201516001600160a01b031660e083015261010082018051600190819052905160400182905260c0830151516000918111156107bc576107bc6126ef565b146107c85760006107e2565b8160e001516001600160a01b0316336001600160a01b0316145b6107f0578160c001516107f7565b8161010001515b60c08301528061080681612e25565b91505061075d565b5060c081015160a082018190525161083b9060019081811115610833576108336126ef565b14600a611b4e565b6108473415600b611b4e565b600081515151600581111561085e5761085e6126ef565b036108705760016101208201526109d8565b6001815151516005811115610887576108876126ef565b036108995760016101208201526109d8565b60028151515160058111156108b0576108b06126ef565b0361096157805151606001516101408201819052516064116108d35760006108e1565b606481610140015160200151105b1561091357610140810151602081015190516108fd9190611b74565b610140820151604001511461016082015261091c565b60006101608201525b80610160015161092d57600061093b565b606481610140015160400151105b610946576000610954565b600081610140015160400151115b15156101208201526109d8565b6003815151516005811115610978576109786126ef565b0361098a5760016101208201526109d8565b60048151515160058111156109a1576109a16126ef565b036109b35760016101208201526109d8565b60058151515160058111156109ca576109ca6126ef565b036109d85760016101208201525b6109e8816101200151600c611b4e565b60808101516101a082015260005b6003811015610aac5782606001518160038110610a1557610a15612df9565b60200201516001600160a01b03166101c08301526101e08201805160019081905290516040018290526101a083015151600091811115610a5757610a576126ef565b14610a63576000610a7e565b816101c001516001600160a01b0316336001600160a01b0316145b610a8d57816101a00151610a94565b816101e001515b6101a083015280610aa481612e25565b9150506109f6565b506101a0810151610180820181905251610adb9060019081811115610ad357610ad36126ef565b14600d611b4e565b604051600081527f2262501d7098919553ce644d0b8e3773a000e3d524eb1ab7ff4e7fb6d9ae05769060200160405180910390a1600083528051516040517f510fa3e00163331e7163ef9e01f872b444c3d8848dda15e731d1789d76c6361891610b4791339190612e3e565b60405180910390a1610b57611fd9565b82518151526020830151610b9e906001610180850151516001811115610b7f57610b7f6126ef565b14610b8b576000610b96565b836101800151604001515b845151611bc1565b602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610be381611c35565b50611b11565b6001602085015151516002811115610c0357610c036126ef565b036119825760208401515160400151610200820181905251610c2990600311600e611b4e565b61022081018051600090819052815160200181905290516102608301525b6003811015610cfd5782606001518160038110610c6657610c66612df9565b60200201516001600160a01b03166102808301526102a082018051600190819052905160400182905261026083015151600091811115610ca857610ca86126ef565b14610cb4576000610ccf565b8161028001516001600160a01b0316336001600160a01b0316145b610cde57816102600151610ce5565b816102a001515b61026083015280610cf581612e25565b915050610c47565b50610260810151610240820181905251610d2c9060019081811115610d2457610d246126ef565b14600f611b4e565b610d7d6001610240830151516001811115610d4957610d496126ef565b14610d55576000610d60565b816102400151604001515b6102008301515114610d73576001610d76565b60005b6010611b4e565b610e0382602001518261020001516000015160038110610d9f57610d9f612df9565b6020020151604051602001610db49190612e5c565b60408051601f198184030181529082905280516020918201206102008501518201519092610de29201612e5c565b6040516020818303038152906040528051906020012060001c146011611b4e565b610e0f34156012611b4e565b6102208101516102e082015260005b6003811015610ed45782606001518160038110610e3d57610e3d612df9565b60200201516001600160a01b03166103008301526103208201805160019081905290516040018290526102e083015151600091811115610e7f57610e7f6126ef565b14610e8b576000610ea6565b8161030001516001600160a01b0316336001600160a01b0316145b610eb557816102e00151610ebc565b8161032001515b6102e083015280610ecc81612e25565b915050610e1e565b506102e08101516102c0820181905251610f039060019081811115610efb57610efb6126ef565b146013611b4e565b610f5460016102c0830151516001811115610f2057610f206126ef565b14610f2c576000610f37565b816102c00151604001515b6102008301515114610f4a576001610f4d565b60005b6014611b4e565b6020820151610200820151518351610f6d929190611bc1565b610340820152604051600081527fc6a32edf86feaa381d8749a0b2ca8f99f47ed2a0a5d8251918c40bbff043408b9060200160405180910390a1600060208085019190915261020082015151908301517f1ca272bbb6018d7b99180311121f45ec91a0b47a19077a7badd69e3dbd0db37e9133918160038110610ff257610ff2612df9565b602002015160405161100693929190612e6b565b60405180910390a160006020830151610200830151516003811061102c5761102c612df9565b6020020151516005811115611043576110436126ef565b03611556576020820151610200820151516003811061106457611064612df9565b6020908102919091015181015161036083018190520151516000906001811115611090576110906126ef565b036112dd57604082810180516060908101516103a0850180519190915282516020908101518251909101528251608090810151825186015283519094015181516001600160a01b03909116920191909152905151905190151591015247610580820152610360810151606001516103a082015160405160009263038da9cb60e21b9261111e92602401612e98565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080836103600151600001516001600160a01b03166000846040516111799190612eb5565b60006040518083038185875af1925050503d80600081146111b6576040519150601f19603f3d011682016040523d82523d6000602084013e6111bb565b606091505b50915091506111cc82826015611cd0565b5061058084015147036103c08501515280516111f19082016020908101908301612ed1565b6103c08501805160200191909152516103e085018190526040517f5c36a24cd9043e34978822a04ccb312a66c02d5b6ca6d7d465f44531d2d59b30945061125f9350909150815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a16103e08101515161127a90156016611b4e565b611282611fd9565b825181515261034082015160208083018051929092528151600091015260408085015182519091015260608085015182519091015251436080918201528301516103e083015151015b602082015160a00152610be381611c35565b6001610360820151602001515160018111156112fb576112fb6126ef565b03611551576103608101516020908101516040908101516001600160a01b03908116610400850152848201805160609081015161044087018051919091528251860151815190960195909552815160809081015186518601528251909401518551931692019190915251519151911515910152476105a08201526103608101516060015161044082015160405160009263038da9cb60e21b926113a092602401612e98565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080836103600151600001516001600160a01b03166000846040516113fb9190612eb5565b60006040518083038185875af1925050503d8060008114611438576040519150601f19603f3d011682016040523d82523d6000602084013e61143d565b606091505b509150915061144e82826017611cd0565b506105a084015147036104608501515280516114739082016020908101908301612ed1565b61046085018051602001919091525161048085018190526040517fe59f7dbb27f01bfcbae0ab183d4060b52e445ce2d608e4b68b0eab8345bafafa94506114e19350909150815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a1610480810151516114fc90156018611b4e565b611504611fd9565b8251815152610340820151602080830180519290925281516000910152604080850151825190910152606080850151825190910152514360809182015283015161048083015151016112cb565b611b11565b60016020830151610200830151516003811061157457611574612df9565b602002015151600581111561158b5761158b6126ef565b036115e857611598611fd9565b8251815152610340820151602080830180519290925281516001910152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610be381611c35565b60026020830151610200830151516003811061160657611606612df9565b602002015151600581111561161d5761161d6126ef565b036116fc576020820151610200820151516003811061163e5761163e612df9565b602090810291909101516060908101516104a084018181526080918201516104c0860180519115159091528151850151815190950194909452805183015184516001600160a01b039091166040918201528151518551909401939093525190910151915101526116ac611fd9565b82518151526103408201516020808301805192909252815160009101526104c0830151815160400152606080850151825190910152805143608091820152840151905160a00152610be381611c35565b60036020830151610200830151516003811061171a5761171a612df9565b6020020151516005811115611731576117316126ef565b036117b9576020820151610200820151516003811061175257611752612df9565b6020020151608001516104e0820152611769611fd9565b82518151526103408201516020808301805192909252815160009101526040808501518251909101526104e0830151815160600152805143608091820152840151905160a00152610be381611c35565b6004602083015161020083015151600381106117d7576117d7612df9565b60200201515160058111156117ee576117ee6126ef565b0361184b576117fb611fd9565b8251815152610340820151602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610be381611c35565b60056020830151610200830151516003811061186957611869612df9565b6020020151516005811115611880576118806126ef565b0361155157602082015161020082015151600381106118a1576118a1612df9565b602002015160c001516001600160a01b03166105008201526080820151479081106118d257608083015181036118d5565b60005b61052083018190526105008301516040516001600160a01b03909116925081156108fc0291906000818181858888f1935050505015801561191a573d6000803e3d6000fd5b50611923611fd9565b82518151526103408201516020808301805192909252815160009101526040808501518251909101526060808501518251909101525143608091820152610520830151908401516112cb9161197791611b74565b836105200151900390565b600260208501515151600281111561199c5761199c6126ef565b03611b1157602084015151606001516105408201819052516119ca906001600160a01b031633146019611b4e565b6119d63415601a611b4e565b604080830180516060908101516105608501805191909152825160209081015182519091015282516080908101518251860152835185015182516001600160a01b0390911693019290925291515182519015159101525190517fb748e47d7b93c18db46845e9ee3234fbaa1aa373aad07540231d425c1d51e91091611a5a916126b5565b60405180910390a1610560810151604080850191909152610540820151805160208201519183015192517ffe325ddb46ceb5c5c02d1b18bc5e927e25bc0ec2cf49203c2ae8c0c355b290cf93611ab09391612f2a565b60405180910390a1611ac0611fd9565b825181515260208084015181830180519190915280516000920191909152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610be381611c35565b50505050565b6000611b21611d96565b60208181018051516000905251510151839052611b3c611d77565b611b468282610476565b519392505050565b816102715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082611b818382612f5a565b91508110156101785760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611b6b565b611bc9611ff9565b60005b6003811015611c1557848160038110611be757611be7612df9565b6020020151828260038110611bfe57611bfe612df9565b602002015280611c0d81612e25565b915050611bcc565b5081818460038110611c2957611c29612df9565b60200201529392505050565b80602001516020015115611c5c5760008080556001819055611c5990600290612026565b50565b611c64612060565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a00151608084015260036000554360015551611cae91839101612f6d565b60405160208183030381529060405260029081611ccb919061304c565b505050565b60608315611cdf575081610194565b825115611cef5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611b6b565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040518060600160405280611d586120a7565b8152602001611d65611ff9565b8152602001611d72611d0b565b905290565b6040805160608101825260008082526020820152908101611d72611d0b565b604051806040016040528060008152602001611d726120c5565b6040518060400160405280611dc3611d0b565b8152602001611d72611d45565b604051806105c00160405280611de46120d8565b815260006020820152604001611df8611d0b565b815260006020820152604001611e0c6120eb565b8152602001611e196120eb565b8152602001611e266120eb565b815260006020820152604001611e3a6120eb565b815260006020820152604001611e4e611d0b565b815260006020820152604001611e626120eb565b8152602001611e6f6120eb565b815260006020820152604001611e836120eb565b8152602001611e9061210e565b8152602001611e9d6120eb565b8152602001611eaa6120eb565b8152602001611eb76120eb565b815260006020820152604001611ecb6120eb565b8152602001611ed86120eb565b8152602001611ee56120eb565b815260006020820152604001611ef96120eb565b8152602001611f06611ff9565b8152602001611f13612128565b815260006020820152604001611f27611d0b565b8152602001611f3461214b565b8152602001611f4161214b565b81526000602082018190526040820152606001611f5c611d0b565b8152602001611f6961214b565b8152602001611f7661214b565b8152602001611f83611d0b565b8152602001611f90612165565b8152602001611f9d6120a7565b81526000602082018190526040820152606001611fb861219f565b8152602001611fc5611d0b565b815260200160008152602001600081525090565b6040518060400160405280611fec6120d8565b8152602001611d726121cf565b60405180606001604052806003905b612010612203565b8152602001906001900390816120085790505090565b508054612032906128eb565b6000825580601f10612042575050565b601f016020900490600052602060002090810190611c59919061223f565b6040518060a00160405280612073612203565b8152602001612080611ff9565b815260200161208d612165565b815260200161209a6120a7565b8152602001600081525090565b60405180606001604052806003906020820280368337509192915050565b6040518060200160405280611d72612258565b6040518060200160405280611d72612203565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806040016040528060008152602001611d72612203565b604051806080016040528060006001600160a01b031681526020016120fa61228d565b604051806040016040528060008152602001611d726122a0565b6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b604051806060016040528060006001600160a01b031681526020016121c261228d565b8152600060209091015290565b6040518060c001604052806121e2611ff9565b8152600060208201526040016121f6612165565b8152602001611fc56120a7565b6040805160e08101909152806000815260200161221e612128565b815260006020820152604001612232611d0b565b81526020016120fa6120a7565b5b808211156122545760008155600101612240565b5090565b604080516080810190915280600081526020016122736120d8565b815260200161228061210e565b8152602001611d7261219f565b60408051606081019091528060006120fa565b604080516080810182526000918101828152606082019290925290819061209a565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156122fb576122fb6122c2565b60405290565b6040516080810167ffffffffffffffff811182821017156122fb576122fb6122c2565b60405160a0810167ffffffffffffffff811182821017156122fb576122fb6122c2565b60405160e0810167ffffffffffffffff811182821017156122fb576122fb6122c2565b6040805190810167ffffffffffffffff811182821017156122fb576122fb6122c2565b6040516020810167ffffffffffffffff811182821017156122fb576122fb6122c2565b60068110611c5957600080fd5b6001600160a01b0381168114611c5957600080fd5b8035610471816123bd565b60028110611c5957600080fd5b8015158114611c5957600080fd5b8035610471816123ea565b60006060828403121561241557600080fd5b61241d6122d8565b9050813561242a816123dd565b8152602082013561243a816123ea565b6020820152604082013561244d816123bd565b604082015292915050565b600060a0828403121561246a57600080fd5b612472612324565b9050813581526020820135602082015260408201356040820152606082013561249a816123bd565b606082015260808201356124ad816123ea565b608082015292915050565b600082601f8301126124c957600080fd5b6124d16122d8565b8060608401858111156124e357600080fd5b845b818110156125065780356124f8816123bd565b8452602093840193016124e5565b509095945050505050565b600081830361024081121561252557600080fd5b61252d612347565b9150823561253a816123b0565b825260c0601f198201121561254e57600080fd5b50612557612301565b6020830135612565816123bd565b81526125748460408501612403565b602082015260a0830135612587816123bd565b604082015260c083013561259a816123bd565b606082015260208201526125b060e083016123f8565b60408201526125c3836101008401612458565b60608201526125d6836101a084016124b8565b60808201526125e861020083016123f8565b60a08201526125fa61022083016123d2565b60c082015292915050565b600080610260838503121561261957600080fd5b8235915061262a8460208501612511565b90509250929050565b600080600060a0848603121561264857600080fd5b8335612653816123bd565b92506126628560208601612403565b91506080840135612672816123bd565b809150509250925092565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b60a08101610178828461267d565b8060005b6003811015611b115781516001600160a01b03168452602093840193909101906001016126c7565b634e487b7160e01b600052602160045260246000fd5b805160028110612717576127176126ef565b82526020818101511515908301526040908101516001600160a01b0316910152565b80516006811061274b5761274b6126ef565b825260208181015180516001600160a01b0390811683860152918101519091906127786040860182612705565b50604082810151821660a086015260609283015190911660c0850152820151151560e08401528101516127af61010084018261267d565b5060808101516127c36101a08401826126c3565b5060a0810151151561020083015260c001516001600160a01b031661022090910152565b8060005b6003811015611b11576127ff848351612739565b6102409390930192602091909101906001016127eb565b60006107c08201905061282a8284516126c3565b602083015161283c60608401826127e7565b50604083015161285061072084018261267d565b5092915050565b60005b8381101561287257818101518382015260200161285a565b50506000910152565b82815260406020820152600082518060408401526128a0816060850160208701612857565b601f01601f1916919091016060019392505050565b600061058082840312156128c857600080fd5b50919050565b600061024082840312156128e157600080fd5b6101758383612511565b600181811c908216806128ff57607f821691505b6020821081036128c857634e487b7160e01b600052602260045260246000fd5b600060a0828403121561293157600080fd5b6129396122d8565b90508135612946816123bd565b81526129558360208401612403565b6020820152608082013561244d816123bd565b600081830361058081121561297c57600080fd5b61298461236a565b83358152610560601f198301121561299b57600080fd5b6129a361238d565b6129ab612301565b6020860135600381106129bd57600080fd5b8152610240603f19850112156129d257600080fd5b6129da61238d565b6129e78860408901612511565b8152602082015261026061027f1985011215612a0257600080fd5b612a0a61236a565b93506102808601358452612a22876102a08801612511565b6020850152836040820152612a3b876104e0880161291f565b606082015281526020820152949350505050565b8051610471816123bd565b8051610471816123ea565b600060a08284031215612a7757600080fd5b612a7f612324565b90508151815260208201516020820152604082015160408201526060820151612aa7816123bd565b606082015260808201516124ad816123ea565b600082601f830112612acb57600080fd5b612ad36122d8565b806060840185811115612ae557600080fd5b845b81811015612506578051612afa816123bd565b845260209384019301612ae7565b6000818303610240811215612b1c57600080fd5b612b24612347565b91508251612b31816123b0565b825260c0601f1982011215612b4557600080fd5b612b4d612301565b6020840151612b5b816123bd565b81526060603f1983011215612b6f57600080fd5b612b776122d8565b91506040840151612b87816123dd565b82526060840151612b97816123ea565b60208301526080840151612baa816123bd565b604083015260208101829052612bc260a08501612a4f565b6040820152612bd360c08501612a4f565b6060820152602083015250612bea60e08301612a5a565b6040820152612bfd836101008401612a65565b6060820152612c10836101a08401612aba565b6080820152612c226102008301612a5a565b60a08201526125fa6102208301612a4f565b600060a08284031215612c4657600080fd5b612c4e612324565b90508151612c5b816123ea565b8152602082810151908201526040820151612c75816123bd565b80604083015250606082015160608201526080820151608082015292915050565b6000610a208284031215612ca957600080fd5b612cb1612324565b612cbb8484612b08565b81526102408461025f850112612cd057600080fd5b612cd86122d8565b80610900860187811115612ceb57600080fd5b8387015b81811015612d1057612d018982612b08565b84526020909301928401612cef565b50816020860152612d218882612c34565b604086015250505050612d38846109a08501612aba565b6060820152610a009290920151608083015250919050565b6001600160a01b03838116825282516020808401919091528301515180516105a0840192919060038110612d8657612d866126ef565b806040860152506020810151612da0606086018251612739565b50604081015180516102a086015260200151612dc06102c0860182612739565b5060600151805182166105008501526020810151612de2610520860182612705565b508160408201511661058085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201612e3757612e37612e0f565b5060010190565b6001600160a01b038316815261026081016101946020830184612739565b61024081016101788284612739565b6001600160a01b0384168152602081018390526102808101612e906040830184612739565b949350505050565b6001600160a01b038316815260c08101610194602083018461267d565b60008251612ec7818460208701612857565b9190910192915050565b60008183036060811215612ee457600080fd5b612eec61236a565b6040821215612efa57600080fd5b612f0261236a565b9150835182526020840151602083015281815260408401516020820152809250505092915050565b6001600160a01b03848116825260a0820190612f496020840186612705565b808416608084015250949350505050565b8082018082111561017857610178612e0f565b6000610a2082019050612f81828451612739565b6020830151612f946102408401826127e7565b50604083810151805115156109008501526020810151610920850152908101516001600160a01b0316610940840152606080820151610960850152608090910151610980840152830151612fec6109a08401826126c3565b506080830151610a0083015292915050565b601f821115611ccb57600081815260208120601f850160051c810160208610156130255750805b601f850160051c820191505b8181101561304457828155600101613031565b505050505050565b815167ffffffffffffffff811115613066576130666122c2565b61307a8161307484546128eb565b84612ffe565b602080601f8311600181146130af57600084156130975750858301515b600019600386901b1c1916600185901b178555613044565b600085815260208120601f198616915b828110156130de578886015182559484019460019091019084016130bf565b50858210156130fc5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220a1f6f5389ec30814f3bc965978cc1ff0248fd33bc4a9b4d2461aaa13837ce5b764736f6c63430008100033`,
  BytecodeLen: 15159,
  Which: `oD`,
  version: 8,
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
    at: './index.rsh:136:19:after expr stmt semicolon',
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
