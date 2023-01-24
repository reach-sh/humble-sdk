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
    calcAmtIn_: ((_v67832, _v67833, _v67834, _v67835 ) => {
        const v67832 = stdlib.protect(ctc0, _v67832, null);
        const v67833 = stdlib.protect(ctc0, _v67833, null);
        const v67834 = stdlib.protect(ctc0, _v67834, null);
        const v67835 = stdlib.protect(ctc0, _v67835, null);
      
      const v67837 = stdlib.safeSub(v67833, v67832);
      const v67838 = stdlib.cast("UInt", "UInt256", v67837, false, true);
      const v67839 = stdlib.cast("UInt", "UInt256", v67834, false, true);
      const v67840 = stdlib.cast("UInt", "UInt256", v67832, false, true);
      const v67841 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v67835);
      const v67842 = stdlib.cast("UInt", "UInt256", v67841, false, true);
      const v67843 = stdlib.safeMul256(v67840, v67842);
      const v67844 = stdlib.safeMul256(v67838, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v67845 = stdlib.safeMul256(v67843, v67839);
      const v67846 = stdlib.safeDiv256(v67845, v67844);
      const v67847 = stdlib.cast("UInt256", "UInt", v67846, false, true);
      const v67848 = stdlib.safeAdd(v67847, stdlib.checkedBigNumberify('252:39:decimal', stdlib.UInt_max, '1'));
      
      return v67848;}),
    computeMint_: ((_v67849, _v67850, _v67851 ) => {
        const v67849 = stdlib.protect(ctc1, _v67849, null);
        const v67850 = stdlib.protect(ctc1, _v67850, null);
        const v67851 = stdlib.protect(ctc1, _v67851, null);
      
      const v67852 = v67849.A;
      const v67853 = v67849.B;
      const v67854 = v67850.A;
      const v67855 = v67850.B;
      const v67857 = v67851.B;
      let v67858;
      const v67865 = stdlib.eq(v67857, stdlib.checkedBigNumberify('337:19:decimal', stdlib.UInt_max, '0'));
      if (v67865) {
        const v67866 = stdlib.cast("UInt", "UInt256", v67852, false, true);
        const v67867 = stdlib.cast("UInt", "UInt256", v67853, false, true);
        const v67868 = stdlib.safeMul256(v67866, v67867);
        const v67869 = stdlib.sqrt256(v67868);
        const v67870 = stdlib.cast("UInt256", "UInt", v67869, false, true);
        v67858 = v67870;
        }
      else {
        const v67879 = stdlib.safeMuldiv(v67852, v67857, v67854);
        const v67886 = stdlib.safeMuldiv(v67853, v67857, v67855);
        const v67888 = stdlib.lt(v67879, v67886);
        const v67889 = v67888 ? v67879 : v67886;
        v67858 = v67889;
        }
      
      return v67858;}),
    computeSwap_: ((_v67890, _v67891, _v67892, _v67893 ) => {
        const v67890 = stdlib.protect(ctc2, _v67890, null);
        const v67891 = stdlib.protect(ctc1, _v67891, null);
        const v67892 = stdlib.protect(ctc1, _v67892, null);
        const v67893 = stdlib.protect(ctc4, _v67893, null);
      
      const v67894 = v67891.A;
      const v67895 = v67891.B;
      const v67896 = v67892.A;
      const v67897 = v67892.B;
      const v67899 = v67893.protoFee;
      const v67900 = v67893.lpFee;
      const v67901 = v67893.totFee;
      const v67902 = stdlib.lt(v67899, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v67903 = stdlib.lt(v67900, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v67904 = v67902 ? v67903 : false;
      let v67907;
      if (v67904) {
        const v67905 = stdlib.safeAdd(v67900, v67899);
        const v67906 = stdlib.eq(v67901, v67905);
        v67907 = v67906;
        }
      else {
        v67907 = false;
        }
      const v67908 = stdlib.lt(v67901, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v67909 = v67907 ? v67908 : false;
      const v67910 = stdlib.gt(v67901, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v67911 = v67909 ? v67910 : false;
      stdlib.assert(v67911, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v67913 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v67913, {
        at: 'reach standard library:57:5:application',
        fs: ['at 328:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v67929;
      if (v67890) {
        const v67934 = stdlib.eq(v67895, stdlib.checkedBigNumberify('./index.rsh:315:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v67934, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:315:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v67957 = stdlib.cast("UInt", "UInt256", v67897, false, true);
        const v67958 = stdlib.cast("UInt", "UInt256", v67896, false, true);
        const v67959 = stdlib.cast("UInt", "UInt256", v67894, false, true);
        const v67960 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v67901);
        const v67961 = stdlib.cast("UInt", "UInt256", v67960, false, true);
        const v67962 = stdlib.safeMul256(v67959, v67961);
        const v67963 = stdlib.safeMul256(v67958, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v67964 = stdlib.safeAdd256(v67963, v67962);
        const v67965 = stdlib.safeMul256(v67962, v67957);
        const v67966 = stdlib.safeDiv256(v67965, v67964);
        const v67967 = stdlib.cast("UInt256", "UInt", v67966, false, true);
        const v67974 = stdlib.safeMul(v67899, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v67975 = stdlib.safeDiv(v67974, v67901);
        const v67982 = stdlib.safeAdd(v67896, v67894);
        const v67990 = stdlib.safeMuldiv(v67894, v67897, v67982);
        const v67995 = stdlib.safeSub(v67990, v67967);
        const v68001 = stdlib.safeMuldiv(v67995, v67975, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v68006 = stdlib.safeMuldiv(v67894, v67899, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v68014 = stdlib.safeMuldiv(v68006, v67897, v67982);
        const v68015 = stdlib.gt(v68014, v68001);
        const v68016 = [v68006, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v68017 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v68001];
        const v68018 = v68015 ? v68016 : v68017;
        const v68020 = v68018[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v68021 = v68018[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v68022 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v67967
          };
        const v68023 = {
          A: v68020,
          B: v68021
          };
        const v68024 = [v68022, v68023, v67894];
        v67929 = v68024;
        }
      else {
        const v68025 = stdlib.eq(v67894, stdlib.checkedBigNumberify('./index.rsh:320:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v68025, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:320:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v68048 = stdlib.cast("UInt", "UInt256", v67896, false, true);
        const v68049 = stdlib.cast("UInt", "UInt256", v67897, false, true);
        const v68050 = stdlib.cast("UInt", "UInt256", v67895, false, true);
        const v68051 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v67901);
        const v68052 = stdlib.cast("UInt", "UInt256", v68051, false, true);
        const v68053 = stdlib.safeMul256(v68050, v68052);
        const v68054 = stdlib.safeMul256(v68049, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v68055 = stdlib.safeAdd256(v68054, v68053);
        const v68056 = stdlib.safeMul256(v68053, v68048);
        const v68057 = stdlib.safeDiv256(v68056, v68055);
        const v68058 = stdlib.cast("UInt256", "UInt", v68057, false, true);
        const v68065 = stdlib.safeMul(v67899, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v68066 = stdlib.safeDiv(v68065, v67901);
        const v68073 = stdlib.safeAdd(v67897, v67895);
        const v68081 = stdlib.safeMuldiv(v67895, v67896, v68073);
        const v68086 = stdlib.safeSub(v68081, v68058);
        const v68092 = stdlib.safeMuldiv(v68086, v68066, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v68097 = stdlib.safeMuldiv(v67895, v67899, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v68105 = stdlib.safeMuldiv(v68097, v67896, v68073);
        const v68106 = stdlib.gt(v68105, v68092);
        const v68107 = [v68097, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v68108 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v68092];
        const v68109 = v68106 ? v68107 : v68108;
        const v68111 = v68109[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v68112 = v68109[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v68113 = {
          A: v68058,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v68114 = {
          A: v68112,
          B: v68111
          };
        const v68115 = [v68113, v68114, v67895];
        v67929 = v68115;
        }
      const v68116 = v67929[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '0')];
      const v68117 = v67929[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '1')];
      const v68119 = v68116.A;
      const v68120 = v68116.B;
      const v68121 = v68117.A;
      const v68122 = v68117.B;
      const v68123 = {
        A: v68119,
        B: v68120
        };
      const v68124 = {
        A: v68121,
        B: v68122
        };
      const v68125 = [v68123, v68124];
      
      return v68125;})
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
      const [v69826, v69838, v69840, v69841, v69845] = svs;
      return (await ((async () => {
        
        const v69889 = v69840.protoFee;
        const v69890 = v69840.lpFee;
        const v69891 = v69840.totFee;
        const v69892 = v69840.protoAddr;
        const v69893 = v69840.locked;
        const v69894 = {
          locked: v69893,
          lpFee: v69890,
          protoAddr: v69892,
          protoFee: v69889,
          totFee: v69891
          };
        const v69895 = {
          cmds: v69838,
          protoInfo: v69894,
          triumvirs: v69841
          };
        
        return v69895;}))(...args));
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
    Triumvir_propose0_68265: ctc11,
    Triumvir_support0_68265: ctc12,
    register0_68265: ctc13
    });
  const ctc15 = stdlib.T_Struct([['A', ctc7], ['B', ctc7]]);
  const ctc16 = stdlib.T_Tuple([ctc15, ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc7, ctc16]);
  
  
  const v69813 = stdlib.protect(ctc1, interact.triumvirs, 'for Admin\'s interact field triumvirs');
  
  const txn1 = await (ctc.sendrecv({
    args: [v69813],
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
      
      
      const {data: [v69820], secs: v69822, time: v69821, didSend: v68140, from: v69819 } = txn1;
      
      ;
      const v69823 = await ctc.getContractAddress();
      
      const v69826 = ['NoOp', null];
      const v69832 = [v69826, v69826, v69826];
      const v69837 = {
        locked: false,
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
        protoAddr: v69823,
        protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
        };
      const v69838 = v69832;
      const v69839 = false;
      const v69840 = v69837;
      const v69841 = v69820;
      const v69842 = v69821;
      const v69845 = stdlib.checkedBigNumberify('./index.rsh:121:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v69888 = v69839 ? false : true;
        
        return v69888;})()) {
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
  const {data: [v69820], secs: v69822, time: v69821, didSend: v68140, from: v69819 } = txn1;
  ;
  const v69823 = await ctc.getContractAddress();
  stdlib.protect(ctc2, await interact.ready(), {
    at: './index.rsh:133:23:application',
    fs: ['at ./index.rsh:133:23:application call to [unknown function] (defined at: ./index.rsh:133:23:function exp)', 'at ./index.rsh:133:23:application call to "liftedInteract" (defined at: ./index.rsh:133:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v69826 = ['NoOp', null];
  const v69832 = [v69826, v69826, v69826];
  const v69837 = {
    locked: false,
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
    protoAddr: v69823,
    protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
    };
  let v69838 = v69832;
  let v69839 = false;
  let v69840 = v69837;
  let v69841 = v69820;
  let v69842 = v69821;
  let v69845 = stdlib.checkedBigNumberify('./index.rsh:121:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v69888 = v69839 ? false : true;
    
    return v69888;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v70170], secs: v70172, time: v70171, didSend: v69320, from: v70169 } = txn3;
    switch (v70170[0]) {
      case 'Triumvir_propose0_68265': {
        const v70173 = v70170[1];
        undefined /* setApiDetails */;
        const v70178 = v70173[stdlib.checkedBigNumberify('./index.rsh:192:10:spread', stdlib.UInt_max, '0')];
        let v70179;
        switch (v70178[0]) {
          case 'Harvest': {
            const v70180 = v70178[1];
            v70179 = true;
            
            break;
            }
          case 'Kill': {
            const v70181 = v70178[1];
            v70179 = true;
            
            break;
            }
          case 'NewInfo': {
            const v70182 = v70178[1];
            const v70183 = v70182.protoFee;
            const v70184 = v70182.lpFee;
            const v70185 = v70182.totFee;
            const v70186 = stdlib.lt(v70183, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
            const v70187 = stdlib.lt(v70184, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
            const v70188 = v70186 ? v70187 : false;
            let v70189;
            if (v70188) {
              const v70190 = stdlib.safeAdd(v70184, v70183);
              const v70191 = stdlib.eq(v70185, v70190);
              v70189 = v70191;
              }
            else {
              v70189 = false;
              }
            const v70192 = stdlib.lt(v70185, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
            const v70193 = v70189 ? v70192 : false;
            const v70194 = stdlib.gt(v70185, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
            const v70195 = v70193 ? v70194 : false;
            v70179 = v70195;
            
            break;
            }
          case 'NewTriumvirs': {
            const v70196 = v70178[1];
            v70179 = true;
            
            break;
            }
          case 'NoOp': {
            const v70197 = v70178[1];
            v70179 = true;
            
            break;
            }
          case 'Rewards': {
            const v70198 = v70178[1];
            v70179 = true;
            
            break;
            }
          }
        stdlib.assert(v70179, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'invalid command',
          who: 'Admin'
          });
        const v70200 = ['None', null];
        const v70201 = await stdlib.Array_asyncReduce([v69841], v70200, async([v70203], v70202, v70204) => {
          const v70205 = {
            None: 0,
            Some: 1
            }[v70202[0]];
          const v70206 = stdlib.eq(v70205, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70207 = stdlib.addressEq(v70169, v70203);
          const v70208 = v70206 ? v70207 : false;
          const v70209 = ['Some', v70204];
          const v70210 = v70208 ? v70209 : v70202;
          
          return v70210;})
        const v70211 = {
          None: 0,
          Some: 1
          }[v70201[0]];
        const v70212 = stdlib.eq(v70211, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70212, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        ;
        let v70257;
        switch (v70178[0]) {
          case 'Harvest': {
            const v70258 = v70178[1];
            v70257 = true;
            
            break;
            }
          case 'Kill': {
            const v70259 = v70178[1];
            v70257 = true;
            
            break;
            }
          case 'NewInfo': {
            const v70260 = v70178[1];
            const v70261 = v70260.protoFee;
            const v70262 = v70260.lpFee;
            const v70263 = v70260.totFee;
            const v70264 = stdlib.lt(v70261, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
            const v70265 = stdlib.lt(v70262, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
            const v70266 = v70264 ? v70265 : false;
            let v70267;
            if (v70266) {
              const v70268 = stdlib.safeAdd(v70262, v70261);
              const v70269 = stdlib.eq(v70263, v70268);
              v70267 = v70269;
              }
            else {
              v70267 = false;
              }
            const v70270 = stdlib.lt(v70263, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
            const v70271 = v70267 ? v70270 : false;
            const v70272 = stdlib.gt(v70263, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
            const v70273 = v70271 ? v70272 : false;
            v70257 = v70273;
            
            break;
            }
          case 'NewTriumvirs': {
            const v70274 = v70178[1];
            v70257 = true;
            
            break;
            }
          case 'NoOp': {
            const v70275 = v70178[1];
            v70257 = true;
            
            break;
            }
          case 'Rewards': {
            const v70276 = v70178[1];
            v70257 = true;
            
            break;
            }
          }
        stdlib.assert(v70257, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
          msg: 'invalid command',
          who: 'Admin'
          });
        const v70279 = await stdlib.Array_asyncReduce([v69841], v70200, async([v70281], v70280, v70282) => {
          const v70283 = {
            None: 0,
            Some: 1
            }[v70280[0]];
          const v70284 = stdlib.eq(v70283, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70285 = stdlib.addressEq(v70169, v70281);
          const v70286 = v70284 ? v70285 : false;
          const v70287 = ['Some', v70282];
          const v70288 = v70286 ? v70287 : v70280;
          
          return v70288;})
        const v70289 = {
          None: 0,
          Some: 1
          }[v70279[0]];
        const v70290 = stdlib.eq(v70289, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70290, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v70292 = stdlib.fromSome(v70279, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
        const v70294 = stdlib.Array_set(v69838, v70292, v70178);
        const v70296 = null;
        await txn3.getOutput('Triumvir_propose', 'v70296', ctc2, v70296);
        null;
        const cv69838 = v70294;
        const cv69839 = false;
        const cv69840 = v69840;
        const cv69841 = v69841;
        const cv69842 = v70171;
        const cv69845 = v69845;
        
        v69838 = cv69838;
        v69839 = cv69839;
        v69840 = cv69840;
        v69841 = cv69841;
        v69842 = cv69842;
        v69845 = cv69845;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Triumvir_support0_68265': {
        const v70602 = v70170[1];
        undefined /* setApiDetails */;
        const v70647 = v70602[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
        const v70648 = v70602[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '1')];
        const v70649 = stdlib.lt(v70647, stdlib.checkedBigNumberify('./index.rsh:203:29:dot', stdlib.UInt_max, '3'));
        stdlib.assert(v70649, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'illegal idx',
          who: 'Admin'
          });
        const v70651 = ['None', null];
        const v70652 = await stdlib.Array_asyncReduce([v69841], v70651, async([v70654], v70653, v70655) => {
          const v70656 = {
            None: 0,
            Some: 1
            }[v70653[0]];
          const v70657 = stdlib.eq(v70656, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70658 = stdlib.addressEq(v70169, v70654);
          const v70659 = v70657 ? v70658 : false;
          const v70660 = ['Some', v70655];
          const v70661 = v70659 ? v70660 : v70653;
          
          return v70661;})
        const v70662 = {
          None: 0,
          Some: 1
          }[v70652[0]];
        const v70663 = stdlib.eq(v70662, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70663, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v70665 = stdlib.fromSome(v70652, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
        const v70666 = stdlib.eq(v70647, v70665);
        const v70667 = v70666 ? false : true;
        stdlib.assert(v70667, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'cannot support self',
          who: 'Admin'
          });
        const v70670 = v69838[v70647];
        const v70671 = stdlib.digest([ctc10], [v70648]);
        const v70672 = stdlib.digest([ctc10], [v70670]);
        const v70673 = stdlib.digestEq(v70671, v70672);
        stdlib.assert(v70673, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'command switched',
          who: 'Admin'
          });
        ;
        const v70775 = await stdlib.Array_asyncReduce([v69841], v70651, async([v70777], v70776, v70778) => {
          const v70779 = {
            None: 0,
            Some: 1
            }[v70776[0]];
          const v70780 = stdlib.eq(v70779, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70781 = stdlib.addressEq(v70169, v70777);
          const v70782 = v70780 ? v70781 : false;
          const v70783 = ['Some', v70778];
          const v70784 = v70782 ? v70783 : v70776;
          
          return v70784;})
        const v70785 = {
          None: 0,
          Some: 1
          }[v70775[0]];
        const v70786 = stdlib.eq(v70785, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70786, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v70788 = stdlib.fromSome(v70775, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
        const v70789 = stdlib.eq(v70647, v70788);
        const v70790 = v70789 ? false : true;
        stdlib.assert(v70790, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
          msg: 'cannot support self',
          who: 'Admin'
          });
        const v70800 = stdlib.Array_set(v69838, v70647, v69826);
        const v70803 = null;
        await txn3.getOutput('Triumvir_support', 'v70803', ctc2, v70803);
        null;
        switch (v70670[0]) {
          case 'Harvest': {
            const v70847 = v70670[1];
            const v70848 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '0')];
            const v70849 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '1')];
            const v70850 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '2')];
            const v70851 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '3')];
            switch (v70849[0]) {
              case 'None': {
                const v70852 = v70849[1];
                const v70853 = v69840.protoFee;
                const v70854 = v69840.lpFee;
                const v70855 = v69840.totFee;
                const v70856 = v69840.protoAddr;
                const v70857 = v69840.locked;
                const v70860 = [];
                const v70871 = {
                  locked: v70857,
                  lpFee: v70854,
                  protoAddr: v70856,
                  protoFee: v70853,
                  totFee: v70855
                  };
                const v70872 = undefined /* Remote */;
                const v70873 = await txn3.getOutput('internal', 'v70872', ctc17, v70872);
                const v70875 = v70873[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                const v70884 = stdlib.add(v69845, v70875);
                const v70885 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70875);
                stdlib.assert(v70885, {
                  at: './index.rsh:165:15:application',
                  fs: ['at ./index.rsh:169:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                  msg: 'remote bill check',
                  who: 'Admin'
                  });
                const cv69838 = v70800;
                const cv69839 = false;
                const cv69840 = v69840;
                const cv69841 = v69841;
                const cv69842 = v70171;
                const cv69845 = v70884;
                
                v69838 = cv69838;
                v69839 = cv69839;
                v69840 = cv69840;
                v69841 = cv69841;
                v69842 = cv69842;
                v69845 = cv69845;
                
                txn2 = txn3;
                continue;
                break;
                }
              case 'Some': {
                const v70894 = v70849[1];
                const v70895 = v69840.protoFee;
                const v70896 = v69840.lpFee;
                const v70897 = v69840.totFee;
                const v70898 = v69840.protoAddr;
                const v70899 = v69840.locked;
                const v70902 = [];
                const v70913 = {
                  locked: v70899,
                  lpFee: v70896,
                  protoAddr: v70898,
                  protoFee: v70895,
                  totFee: v70897
                  };
                const v70914 = undefined /* Remote */;
                const v70915 = await txn3.getOutput('internal', 'v70914', ctc17, v70914);
                const v70917 = v70915[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                const v70926 = stdlib.add(v69845, v70917);
                const v70927 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70917);
                stdlib.assert(v70927, {
                  at: './index.rsh:165:15:application',
                  fs: ['at ./index.rsh:168:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                  msg: 'remote bill check',
                  who: 'Admin'
                  });
                const cv69838 = v70800;
                const cv69839 = false;
                const cv69840 = v69840;
                const cv69841 = v69841;
                const cv69842 = v70171;
                const cv69845 = v70926;
                
                v69838 = cv69838;
                v69839 = cv69839;
                v69840 = cv69840;
                v69841 = cv69841;
                v69842 = cv69842;
                v69845 = cv69845;
                
                txn2 = txn3;
                continue;
                break;
                }
              }
            break;
            }
          case 'Kill': {
            const v70936 = v70670[1];
            const cv69838 = v70800;
            const cv69839 = true;
            const cv69840 = v69840;
            const cv69841 = v69841;
            const cv69842 = v70171;
            const cv69845 = v69845;
            
            v69838 = cv69838;
            v69839 = cv69839;
            v69840 = cv69840;
            v69841 = cv69841;
            v69842 = cv69842;
            v69845 = cv69845;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewInfo': {
            const v70944 = v70670[1];
            const v70945 = v70944.locked;
            const v70946 = v70944.lpFee;
            const v70947 = v70944.protoAddr;
            const v70948 = v70944.protoFee;
            const v70949 = v70944.totFee;
            const v70950 = {
              locked: v70945,
              lpFee: v70946,
              protoAddr: v70947,
              protoFee: v70948,
              totFee: v70949
              };
            const cv69838 = v70800;
            const cv69839 = false;
            const cv69840 = v70950;
            const cv69841 = v69841;
            const cv69842 = v70171;
            const cv69845 = v69845;
            
            v69838 = cv69838;
            v69839 = cv69839;
            v69840 = cv69840;
            v69841 = cv69841;
            v69842 = cv69842;
            v69845 = cv69845;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewTriumvirs': {
            const v70959 = v70670[1];
            const cv69838 = v70800;
            const cv69839 = false;
            const cv69840 = v69840;
            const cv69841 = v70959;
            const cv69842 = v70171;
            const cv69845 = v69845;
            
            v69838 = cv69838;
            v69839 = cv69839;
            v69840 = cv69840;
            v69841 = cv69841;
            v69842 = cv69842;
            v69845 = cv69845;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NoOp': {
            const v70967 = v70670[1];
            const cv69838 = v70800;
            const cv69839 = false;
            const cv69840 = v69840;
            const cv69841 = v69841;
            const cv69842 = v70171;
            const cv69845 = v69845;
            
            v69838 = cv69838;
            v69839 = cv69839;
            v69840 = cv69840;
            v69841 = cv69841;
            v69842 = cv69842;
            v69845 = cv69845;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Rewards': {
            const v70975 = v70670[1];
            const v70977 = (stdlib.le(await ctc.getBalance(), v69845) ? stdlib.checkedBigNumberify('./index.rsh:174:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v69845));
            const v70978 = stdlib.safeAdd(v70977, v69845);
            const v70982 = stdlib.sub(v70978, v70977);
            ;
            const cv69838 = v70800;
            const cv69839 = false;
            const cv69840 = v69840;
            const cv69841 = v69841;
            const cv69842 = v70171;
            const cv69845 = v70982;
            
            v69838 = cv69838;
            v69839 = cv69839;
            v69840 = cv69840;
            v69841 = cv69841;
            v69842 = cv69842;
            v69845 = cv69845;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'register0_68265': {
        const v71031 = v70170[1];
        undefined /* setApiDetails */;
        const v71108 = v71031[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
        const v71111 = stdlib.ctcAddrEq(v71108, v70169);
        stdlib.assert(v71111, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'not contract',
          who: 'Admin'
          });
        ;
        const v71421 = v71031[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '1')];
        const v71422 = v71031[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '2')];
        const v71428 = v69840.protoFee;
        const v71429 = v69840.lpFee;
        const v71430 = v69840.totFee;
        const v71431 = v69840.protoAddr;
        const v71432 = v69840.locked;
        const v71433 = {
          locked: v71432,
          lpFee: v71429,
          protoAddr: v71431,
          protoFee: v71428,
          totFee: v71430
          };
        await txn3.getOutput('register', 'v71433', ctc9, v71433);
        null;
        const cv69838 = v69838;
        const cv69839 = false;
        const cv69840 = v69840;
        const cv69841 = v69841;
        const cv69842 = v70171;
        const cv69845 = v69845;
        
        v69838 = cv69838;
        v69839 = cv69839;
        v69840 = cv69840;
        v69841 = cv69841;
        v69842 = cv69842;
        v69845 = cv69845;
        
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
    Triumvir_propose0_68265: ctc13,
    Triumvir_support0_68265: ctc14,
    register0_68265: ctc15
    });
  
  
  const [v69826, v69838, v69840, v69841, v69845] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v69924 = ctc.selfAddress();
  const v69926 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_propose0_68265" (defined at: ./index.rsh:192:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_propose'
    });
  const v69927 = v69926[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v69947;
  switch (v69927[0]) {
    case 'Harvest': {
      const v69948 = v69927[1];
      v69947 = true;
      
      break;
      }
    case 'Kill': {
      const v69949 = v69927[1];
      v69947 = true;
      
      break;
      }
    case 'NewInfo': {
      const v69950 = v69927[1];
      const v69951 = v69950.protoFee;
      const v69952 = v69950.lpFee;
      const v69953 = v69950.totFee;
      const v69954 = stdlib.lt(v69951, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v69955 = stdlib.lt(v69952, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v69956 = v69954 ? v69955 : false;
      let v69957;
      if (v69956) {
        const v69958 = stdlib.safeAdd(v69952, v69951);
        const v69959 = stdlib.eq(v69953, v69958);
        v69957 = v69959;
        }
      else {
        v69957 = false;
        }
      const v69960 = stdlib.lt(v69953, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v69961 = v69957 ? v69960 : false;
      const v69962 = stdlib.gt(v69953, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v69963 = v69961 ? v69962 : false;
      v69947 = v69963;
      
      break;
      }
    case 'NewTriumvirs': {
      const v69964 = v69927[1];
      v69947 = true;
      
      break;
      }
    case 'NoOp': {
      const v69965 = v69927[1];
      v69947 = true;
      
      break;
      }
    case 'Rewards': {
      const v69966 = v69927[1];
      v69947 = true;
      
      break;
      }
    }
  stdlib.assert(v69947, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_propose0_68265" (defined at: ./index.rsh:192:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'invalid command',
    who: 'Triumvir_propose'
    });
  const v69968 = ['None', null];
  const v69969 = await stdlib.Array_asyncReduce([v69841], v69968, async([v69971], v69970, v69972) => {
    const v69973 = {
      None: 0,
      Some: 1
      }[v69970[0]];
    const v69974 = stdlib.eq(v69973, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v69975 = stdlib.addressEq(v69924, v69971);
    const v69976 = v69974 ? v69975 : false;
    const v69977 = ['Some', v69972];
    const v69978 = v69976 ? v69977 : v69970;
    
    return v69978;})
  const v69979 = {
    None: 0,
    Some: 1
    }[v69969[0]];
  const v69980 = stdlib.eq(v69979, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v69980, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_propose0_68265" (defined at: ./index.rsh:192:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_propose'
    });
  const v70008 = ['Triumvir_propose0_68265', v69926];
  
  let v70093;
  switch (v69927[0]) {
    case 'Harvest': {
      const v70094 = v69927[1];
      v70093 = true;
      
      break;
      }
    case 'Kill': {
      const v70095 = v69927[1];
      v70093 = true;
      
      break;
      }
    case 'NewInfo': {
      const v70096 = v69927[1];
      const v70097 = v70096.protoFee;
      const v70098 = v70096.lpFee;
      const v70099 = v70096.totFee;
      const v70100 = stdlib.lt(v70097, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v70101 = stdlib.lt(v70098, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v70102 = v70100 ? v70101 : false;
      let v70103;
      if (v70102) {
        const v70104 = stdlib.safeAdd(v70098, v70097);
        const v70105 = stdlib.eq(v70099, v70104);
        v70103 = v70105;
        }
      else {
        v70103 = false;
        }
      const v70106 = stdlib.lt(v70099, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v70107 = v70103 ? v70106 : false;
      const v70108 = stdlib.gt(v70099, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v70109 = v70107 ? v70108 : false;
      v70093 = v70109;
      
      break;
      }
    case 'NewTriumvirs': {
      const v70110 = v69927[1];
      v70093 = true;
      
      break;
      }
    case 'NoOp': {
      const v70111 = v69927[1];
      v70093 = true;
      
      break;
      }
    case 'Rewards': {
      const v70112 = v69927[1];
      v70093 = true;
      
      break;
      }
    }
  stdlib.assert(v70093, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'invalid command',
    who: 'Triumvir_propose'
    });
  const v70115 = await stdlib.Array_asyncReduce([v69841], v69968, async([v70117], v70116, v70118) => {
    const v70119 = {
      None: 0,
      Some: 1
      }[v70116[0]];
    const v70120 = stdlib.eq(v70119, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v70121 = stdlib.addressEq(v69924, v70117);
    const v70122 = v70120 ? v70121 : false;
    const v70123 = ['Some', v70118];
    const v70124 = v70122 ? v70123 : v70116;
    
    return v70124;})
  const v70125 = {
    None: 0,
    Some: 1
    }[v70115[0]];
  const v70126 = stdlib.eq(v70125, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v70126, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_propose'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v69826, v69838, v69840, v69841, v69845, v70008],
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
      
      
      const {data: [v70170], secs: v70172, time: v70171, didSend: v69320, from: v70169 } = txn1;
      
      switch (v70170[0]) {
        case 'Triumvir_propose0_68265': {
          const v70173 = v70170[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_propose"
            });
          const v70178 = v70173[stdlib.checkedBigNumberify('./index.rsh:192:10:spread', stdlib.UInt_max, '0')];
          const v70200 = ['None', null];
          ;
          const v70279 = await stdlib.Array_asyncReduce([v69841], v70200, async([v70281], v70280, v70282) => {
            const v70283 = {
              None: 0,
              Some: 1
              }[v70280[0]];
            const v70284 = stdlib.eq(v70283, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v70285 = stdlib.addressEq(v70169, v70281);
            const v70286 = v70284 ? v70285 : false;
            const v70287 = ['Some', v70282];
            const v70288 = v70286 ? v70287 : v70280;
            
            return v70288;})
          const v70292 = stdlib.fromSome(v70279, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
          const v70294 = stdlib.Array_set(v69838, v70292, v70178);
          const v70296 = null;
          const v70297 = await txn1.getOutput('Triumvir_propose', 'v70296', ctc1, v70296);
          
          null;
          const v77290 = v70294;
          const v77292 = v69840;
          const v77293 = v69841;
          const v77295 = v69845;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Triumvir_support0_68265': {
          const v70602 = v70170[1];
          
          break;
          }
        case 'register0_68265': {
          const v71031 = v70170[1];
          
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
  const {data: [v70170], secs: v70172, time: v70171, didSend: v69320, from: v70169 } = txn1;
  switch (v70170[0]) {
    case 'Triumvir_propose0_68265': {
      const v70173 = v70170[1];
      undefined /* setApiDetails */;
      const v70178 = v70173[stdlib.checkedBigNumberify('./index.rsh:192:10:spread', stdlib.UInt_max, '0')];
      let v70179;
      switch (v70178[0]) {
        case 'Harvest': {
          const v70180 = v70178[1];
          v70179 = true;
          
          break;
          }
        case 'Kill': {
          const v70181 = v70178[1];
          v70179 = true;
          
          break;
          }
        case 'NewInfo': {
          const v70182 = v70178[1];
          const v70183 = v70182.protoFee;
          const v70184 = v70182.lpFee;
          const v70185 = v70182.totFee;
          const v70186 = stdlib.lt(v70183, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
          const v70187 = stdlib.lt(v70184, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
          const v70188 = v70186 ? v70187 : false;
          let v70189;
          if (v70188) {
            const v70190 = stdlib.safeAdd(v70184, v70183);
            const v70191 = stdlib.eq(v70185, v70190);
            v70189 = v70191;
            }
          else {
            v70189 = false;
            }
          const v70192 = stdlib.lt(v70185, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
          const v70193 = v70189 ? v70192 : false;
          const v70194 = stdlib.gt(v70185, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
          const v70195 = v70193 ? v70194 : false;
          v70179 = v70195;
          
          break;
          }
        case 'NewTriumvirs': {
          const v70196 = v70178[1];
          v70179 = true;
          
          break;
          }
        case 'NoOp': {
          const v70197 = v70178[1];
          v70179 = true;
          
          break;
          }
        case 'Rewards': {
          const v70198 = v70178[1];
          v70179 = true;
          
          break;
          }
        }
      stdlib.assert(v70179, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'invalid command',
        who: 'Triumvir_propose'
        });
      const v70200 = ['None', null];
      const v70201 = await stdlib.Array_asyncReduce([v69841], v70200, async([v70203], v70202, v70204) => {
        const v70205 = {
          None: 0,
          Some: 1
          }[v70202[0]];
        const v70206 = stdlib.eq(v70205, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70207 = stdlib.addressEq(v70169, v70203);
        const v70208 = v70206 ? v70207 : false;
        const v70209 = ['Some', v70204];
        const v70210 = v70208 ? v70209 : v70202;
        
        return v70210;})
      const v70211 = {
        None: 0,
        Some: 1
        }[v70201[0]];
      const v70212 = stdlib.eq(v70211, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70212, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_propose'
        });
      ;
      let v70257;
      switch (v70178[0]) {
        case 'Harvest': {
          const v70258 = v70178[1];
          v70257 = true;
          
          break;
          }
        case 'Kill': {
          const v70259 = v70178[1];
          v70257 = true;
          
          break;
          }
        case 'NewInfo': {
          const v70260 = v70178[1];
          const v70261 = v70260.protoFee;
          const v70262 = v70260.lpFee;
          const v70263 = v70260.totFee;
          const v70264 = stdlib.lt(v70261, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
          const v70265 = stdlib.lt(v70262, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
          const v70266 = v70264 ? v70265 : false;
          let v70267;
          if (v70266) {
            const v70268 = stdlib.safeAdd(v70262, v70261);
            const v70269 = stdlib.eq(v70263, v70268);
            v70267 = v70269;
            }
          else {
            v70267 = false;
            }
          const v70270 = stdlib.lt(v70263, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
          const v70271 = v70267 ? v70270 : false;
          const v70272 = stdlib.gt(v70263, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
          const v70273 = v70271 ? v70272 : false;
          v70257 = v70273;
          
          break;
          }
        case 'NewTriumvirs': {
          const v70274 = v70178[1];
          v70257 = true;
          
          break;
          }
        case 'NoOp': {
          const v70275 = v70178[1];
          v70257 = true;
          
          break;
          }
        case 'Rewards': {
          const v70276 = v70178[1];
          v70257 = true;
          
          break;
          }
        }
      stdlib.assert(v70257, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
        msg: 'invalid command',
        who: 'Triumvir_propose'
        });
      const v70279 = await stdlib.Array_asyncReduce([v69841], v70200, async([v70281], v70280, v70282) => {
        const v70283 = {
          None: 0,
          Some: 1
          }[v70280[0]];
        const v70284 = stdlib.eq(v70283, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70285 = stdlib.addressEq(v70169, v70281);
        const v70286 = v70284 ? v70285 : false;
        const v70287 = ['Some', v70282];
        const v70288 = v70286 ? v70287 : v70280;
        
        return v70288;})
      const v70289 = {
        None: 0,
        Some: 1
        }[v70279[0]];
      const v70290 = stdlib.eq(v70289, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70290, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_propose'
        });
      const v70292 = stdlib.fromSome(v70279, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
      const v70294 = stdlib.Array_set(v69838, v70292, v70178);
      const v70296 = null;
      const v70297 = await txn1.getOutput('Triumvir_propose', 'v70296', ctc1, v70296);
      if (v69320) {
        stdlib.protect(ctc1, await interact.out(v70173, v70297), {
          at: './index.rsh:192:11:application',
          fs: ['at ./index.rsh:192:11:application call to [unknown function] (defined at: ./index.rsh:192:11:function exp)', 'at ./index.rsh:197:10:application call to "k" (defined at: ./index.rsh:196:23:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
          msg: 'out',
          who: 'Triumvir_propose'
          });
        }
      else {
        }
      
      null;
      const v77290 = v70294;
      const v77292 = v69840;
      const v77293 = v69841;
      const v77295 = v69845;
      return;
      
      break;
      }
    case 'Triumvir_support0_68265': {
      const v70602 = v70170[1];
      return;
      break;
      }
    case 'register0_68265': {
      const v71031 = v70170[1];
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
    Triumvir_propose0_68265: ctc14,
    Triumvir_support0_68265: ctc13,
    register0_68265: ctc15
    });
  const ctc17 = stdlib.T_Struct([['A', ctc6], ['B', ctc6]]);
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc18]);
  
  
  const [v69826, v69838, v69840, v69841, v69845] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v70010 = ctc.selfAddress();
  const v70012 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68265" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_support'
    });
  const v70013 = v70012[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v70014 = v70012[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v70035 = stdlib.lt(v70013, stdlib.checkedBigNumberify('./index.rsh:203:29:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v70035, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68265" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'illegal idx',
    who: 'Triumvir_support'
    });
  const v70037 = ['None', null];
  const v70038 = await stdlib.Array_asyncReduce([v69841], v70037, async([v70040], v70039, v70041) => {
    const v70042 = {
      None: 0,
      Some: 1
      }[v70039[0]];
    const v70043 = stdlib.eq(v70042, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v70044 = stdlib.addressEq(v70010, v70040);
    const v70045 = v70043 ? v70044 : false;
    const v70046 = ['Some', v70041];
    const v70047 = v70045 ? v70046 : v70039;
    
    return v70047;})
  const v70048 = {
    None: 0,
    Some: 1
    }[v70038[0]];
  const v70049 = stdlib.eq(v70048, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v70049, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68265" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_support'
    });
  const v70051 = stdlib.fromSome(v70038, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
  const v70052 = stdlib.eq(v70013, v70051);
  const v70053 = v70052 ? false : true;
  stdlib.assert(v70053, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68265" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'cannot support self',
    who: 'Triumvir_support'
    });
  const v70056 = v69838[v70013];
  const v70057 = stdlib.digest([ctc10], [v70014]);
  const v70058 = stdlib.digest([ctc10], [v70056]);
  const v70059 = stdlib.digestEq(v70057, v70058);
  stdlib.assert(v70059, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68265" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'command switched',
    who: 'Triumvir_support'
    });
  const v70089 = ['Triumvir_support0_68265', v70012];
  
  const v70137 = await stdlib.Array_asyncReduce([v69841], v70037, async([v70139], v70138, v70140) => {
    const v70141 = {
      None: 0,
      Some: 1
      }[v70138[0]];
    const v70142 = stdlib.eq(v70141, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v70143 = stdlib.addressEq(v70010, v70139);
    const v70144 = v70142 ? v70143 : false;
    const v70145 = ['Some', v70140];
    const v70146 = v70144 ? v70145 : v70138;
    
    return v70146;})
  const v70147 = {
    None: 0,
    Some: 1
    }[v70137[0]];
  const v70148 = stdlib.eq(v70147, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v70148, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_support'
    });
  const v70150 = stdlib.fromSome(v70137, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
  const v70151 = stdlib.eq(v70013, v70150);
  const v70152 = v70151 ? false : true;
  stdlib.assert(v70152, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'cannot support self',
    who: 'Triumvir_support'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v69826, v69838, v69840, v69841, v69845, v70089],
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
      
      
      const {data: [v70170], secs: v70172, time: v70171, didSend: v69320, from: v70169 } = txn1;
      
      switch (v70170[0]) {
        case 'Triumvir_propose0_68265': {
          const v70173 = v70170[1];
          
          break;
          }
        case 'Triumvir_support0_68265': {
          const v70602 = v70170[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_support"
            });
          const v70647 = v70602[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
          const v70670 = v69838[v70647];
          ;
          const v70800 = stdlib.Array_set(v69838, v70647, v69826);
          const v70803 = null;
          const v70804 = await txn1.getOutput('Triumvir_support', 'v70803', ctc1, v70803);
          
          null;
          switch (v70670[0]) {
            case 'Harvest': {
              const v70847 = v70670[1];
              const v70848 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '0')];
              const v70849 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '1')];
              const v70850 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '2')];
              const v70851 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '3')];
              switch (v70849[0]) {
                case 'None': {
                  const v70852 = v70849[1];
                  const v70853 = v69840.protoFee;
                  const v70854 = v69840.lpFee;
                  const v70855 = v69840.totFee;
                  const v70856 = v69840.protoAddr;
                  const v70857 = v69840.locked;
                  const v70860 = [];
                  const v70871 = {
                    locked: v70857,
                    lpFee: v70854,
                    protoAddr: v70856,
                    protoFee: v70853,
                    totFee: v70855
                    };
                  const v70872 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v70848,
                      remote: ({
                        accs: [v70851],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        boxes: [],
                        fees: stdlib.checkedBigNumberify('./index.rsh:162:40:application', stdlib.UInt_max, '2'),
                        pays: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        toks: [v70850]
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
                  const v70873 = await txn1.getOutput('internal', 'v70872', ctc19, v70872);
                  const v70875 = v70873[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                  const v70884 = stdlib.add(v69845, v70875);
                  const v77360 = v70800;
                  const v77362 = v69840;
                  const v77363 = v69841;
                  const v77365 = v70884;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'Some': {
                  const v70894 = v70849[1];
                  const v70895 = v69840.protoFee;
                  const v70896 = v69840.lpFee;
                  const v70897 = v69840.totFee;
                  const v70898 = v69840.protoAddr;
                  const v70899 = v69840.locked;
                  const v70902 = [];
                  const v70913 = {
                    locked: v70899,
                    lpFee: v70896,
                    protoAddr: v70898,
                    protoFee: v70895,
                    totFee: v70897
                    };
                  const v70914 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v70848,
                      remote: ({
                        accs: [v70851],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        boxes: [],
                        fees: stdlib.checkedBigNumberify('./index.rsh:162:40:application', stdlib.UInt_max, '3'),
                        pays: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        toks: [v70894, v70850]
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
                  const v70915 = await txn1.getOutput('internal', 'v70914', ctc19, v70914);
                  const v70917 = v70915[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                  const v70926 = stdlib.add(v69845, v70917);
                  const v77367 = v70800;
                  const v77369 = v69840;
                  const v77370 = v69841;
                  const v77372 = v70926;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                }
              break;
              }
            case 'Kill': {
              const v70936 = v70670[1];
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              break;
              }
            case 'NewInfo': {
              const v70944 = v70670[1];
              const v70945 = v70944.locked;
              const v70946 = v70944.lpFee;
              const v70947 = v70944.protoAddr;
              const v70948 = v70944.protoFee;
              const v70949 = v70944.totFee;
              const v70950 = {
                locked: v70945,
                lpFee: v70946,
                protoAddr: v70947,
                protoFee: v70948,
                totFee: v70949
                };
              const v77381 = v70800;
              const v77383 = v70950;
              const v77384 = v69841;
              const v77386 = v69845;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NewTriumvirs': {
              const v70959 = v70670[1];
              const v77388 = v70800;
              const v77390 = v69840;
              const v77391 = v70959;
              const v77393 = v69845;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NoOp': {
              const v70967 = v70670[1];
              const v77395 = v70800;
              const v77397 = v69840;
              const v77398 = v69841;
              const v77400 = v69845;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Rewards': {
              const v70975 = v70670[1];
              const v70977 = (stdlib.le(await ctc.getBalance(), v69845) ? stdlib.checkedBigNumberify('./index.rsh:174:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v69845));
              const v70978 = stdlib.safeAdd(v70977, v69845);
              const v70982 = stdlib.sub(v70978, v70977);
              sim_r.txns.push({
                kind: 'from',
                to: v70975,
                tok: undefined /* Nothing */
                });
              const v77402 = v70800;
              const v77404 = v69840;
              const v77405 = v69841;
              const v77407 = v70982;
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'register0_68265': {
          const v71031 = v70170[1];
          
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
  const {data: [v70170], secs: v70172, time: v70171, didSend: v69320, from: v70169 } = txn1;
  switch (v70170[0]) {
    case 'Triumvir_propose0_68265': {
      const v70173 = v70170[1];
      return;
      break;
      }
    case 'Triumvir_support0_68265': {
      const v70602 = v70170[1];
      undefined /* setApiDetails */;
      const v70647 = v70602[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
      const v70648 = v70602[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '1')];
      const v70649 = stdlib.lt(v70647, stdlib.checkedBigNumberify('./index.rsh:203:29:dot', stdlib.UInt_max, '3'));
      stdlib.assert(v70649, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'illegal idx',
        who: 'Triumvir_support'
        });
      const v70651 = ['None', null];
      const v70652 = await stdlib.Array_asyncReduce([v69841], v70651, async([v70654], v70653, v70655) => {
        const v70656 = {
          None: 0,
          Some: 1
          }[v70653[0]];
        const v70657 = stdlib.eq(v70656, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70658 = stdlib.addressEq(v70169, v70654);
        const v70659 = v70657 ? v70658 : false;
        const v70660 = ['Some', v70655];
        const v70661 = v70659 ? v70660 : v70653;
        
        return v70661;})
      const v70662 = {
        None: 0,
        Some: 1
        }[v70652[0]];
      const v70663 = stdlib.eq(v70662, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70663, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_support'
        });
      const v70665 = stdlib.fromSome(v70652, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
      const v70666 = stdlib.eq(v70647, v70665);
      const v70667 = v70666 ? false : true;
      stdlib.assert(v70667, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'cannot support self',
        who: 'Triumvir_support'
        });
      const v70670 = v69838[v70647];
      const v70671 = stdlib.digest([ctc10], [v70648]);
      const v70672 = stdlib.digest([ctc10], [v70670]);
      const v70673 = stdlib.digestEq(v70671, v70672);
      stdlib.assert(v70673, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'command switched',
        who: 'Triumvir_support'
        });
      ;
      const v70775 = await stdlib.Array_asyncReduce([v69841], v70651, async([v70777], v70776, v70778) => {
        const v70779 = {
          None: 0,
          Some: 1
          }[v70776[0]];
        const v70780 = stdlib.eq(v70779, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70781 = stdlib.addressEq(v70169, v70777);
        const v70782 = v70780 ? v70781 : false;
        const v70783 = ['Some', v70778];
        const v70784 = v70782 ? v70783 : v70776;
        
        return v70784;})
      const v70785 = {
        None: 0,
        Some: 1
        }[v70775[0]];
      const v70786 = stdlib.eq(v70785, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70786, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_support'
        });
      const v70788 = stdlib.fromSome(v70775, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
      const v70789 = stdlib.eq(v70647, v70788);
      const v70790 = v70789 ? false : true;
      stdlib.assert(v70790, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
        msg: 'cannot support self',
        who: 'Triumvir_support'
        });
      const v70800 = stdlib.Array_set(v69838, v70647, v69826);
      const v70803 = null;
      const v70804 = await txn1.getOutput('Triumvir_support', 'v70803', ctc1, v70803);
      if (v69320) {
        stdlib.protect(ctc1, await interact.out(v70602, v70804), {
          at: './index.rsh:202:11:application',
          fs: ['at ./index.rsh:202:11:application call to [unknown function] (defined at: ./index.rsh:202:11:function exp)', 'at ./index.rsh:210:10:application call to "k" (defined at: ./index.rsh:209:23:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
          msg: 'out',
          who: 'Triumvir_support'
          });
        }
      else {
        }
      
      null;
      switch (v70670[0]) {
        case 'Harvest': {
          const v70847 = v70670[1];
          const v70848 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '0')];
          const v70849 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '1')];
          const v70850 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '2')];
          const v70851 = v70847[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '3')];
          switch (v70849[0]) {
            case 'None': {
              const v70852 = v70849[1];
              const v70853 = v69840.protoFee;
              const v70854 = v69840.lpFee;
              const v70855 = v69840.totFee;
              const v70856 = v69840.protoAddr;
              const v70857 = v69840.locked;
              const v70860 = [];
              const v70871 = {
                locked: v70857,
                lpFee: v70854,
                protoAddr: v70856,
                protoFee: v70853,
                totFee: v70855
                };
              const v70872 = undefined /* Remote */;
              const v70873 = await txn1.getOutput('internal', 'v70872', ctc19, v70872);
              const v70875 = v70873[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
              const v70884 = stdlib.add(v69845, v70875);
              const v70885 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70875);
              stdlib.assert(v70885, {
                at: './index.rsh:165:15:application',
                fs: ['at ./index.rsh:169:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                msg: 'remote bill check',
                who: 'Triumvir_support'
                });
              const v77360 = v70800;
              const v77362 = v69840;
              const v77363 = v69841;
              const v77365 = v70884;
              return;
              
              break;
              }
            case 'Some': {
              const v70894 = v70849[1];
              const v70895 = v69840.protoFee;
              const v70896 = v69840.lpFee;
              const v70897 = v69840.totFee;
              const v70898 = v69840.protoAddr;
              const v70899 = v69840.locked;
              const v70902 = [];
              const v70913 = {
                locked: v70899,
                lpFee: v70896,
                protoAddr: v70898,
                protoFee: v70895,
                totFee: v70897
                };
              const v70914 = undefined /* Remote */;
              const v70915 = await txn1.getOutput('internal', 'v70914', ctc19, v70914);
              const v70917 = v70915[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
              const v70926 = stdlib.add(v69845, v70917);
              const v70927 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70917);
              stdlib.assert(v70927, {
                at: './index.rsh:165:15:application',
                fs: ['at ./index.rsh:168:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                msg: 'remote bill check',
                who: 'Triumvir_support'
                });
              const v77367 = v70800;
              const v77369 = v69840;
              const v77370 = v69841;
              const v77372 = v70926;
              return;
              
              break;
              }
            }
          break;
          }
        case 'Kill': {
          const v70936 = v70670[1];
          return;
          
          break;
          }
        case 'NewInfo': {
          const v70944 = v70670[1];
          const v70945 = v70944.locked;
          const v70946 = v70944.lpFee;
          const v70947 = v70944.protoAddr;
          const v70948 = v70944.protoFee;
          const v70949 = v70944.totFee;
          const v70950 = {
            locked: v70945,
            lpFee: v70946,
            protoAddr: v70947,
            protoFee: v70948,
            totFee: v70949
            };
          const v77381 = v70800;
          const v77383 = v70950;
          const v77384 = v69841;
          const v77386 = v69845;
          return;
          
          break;
          }
        case 'NewTriumvirs': {
          const v70959 = v70670[1];
          const v77388 = v70800;
          const v77390 = v69840;
          const v77391 = v70959;
          const v77393 = v69845;
          return;
          
          break;
          }
        case 'NoOp': {
          const v70967 = v70670[1];
          const v77395 = v70800;
          const v77397 = v69840;
          const v77398 = v69841;
          const v77400 = v69845;
          return;
          
          break;
          }
        case 'Rewards': {
          const v70975 = v70670[1];
          const v70977 = (stdlib.le(await ctc.getBalance(), v69845) ? stdlib.checkedBigNumberify('./index.rsh:174:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v69845));
          const v70978 = stdlib.safeAdd(v70977, v69845);
          const v70982 = stdlib.sub(v70978, v70977);
          ;
          const v77402 = v70800;
          const v77404 = v69840;
          const v77405 = v69841;
          const v77407 = v70982;
          return;
          
          break;
          }
        }
      break;
      }
    case 'register0_68265': {
      const v71031 = v70170[1];
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
    Triumvir_propose0_68265: ctc14,
    Triumvir_support0_68265: ctc15,
    register0_68265: ctc13
    });
  
  
  const [v69826, v69838, v69840, v69841, v69845] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v69898 = ctc.selfAddress();
  const v69900 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to "runregister0_68265" (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v69901 = v69900[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v69909 = stdlib.ctcAddrEq(v69901, v69898);
  stdlib.assert(v69909, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to "runregister0_68265" (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not contract',
    who: 'register'
    });
  const v69922 = ['register0_68265', v69900];
  
  const txn1 = await (ctc.sendrecv({
    args: [v69826, v69838, v69840, v69841, v69845, v69922],
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
      
      
      const {data: [v70170], secs: v70172, time: v70171, didSend: v69320, from: v70169 } = txn1;
      
      switch (v70170[0]) {
        case 'Triumvir_propose0_68265': {
          const v70173 = v70170[1];
          
          break;
          }
        case 'Triumvir_support0_68265': {
          const v70602 = v70170[1];
          
          break;
          }
        case 'register0_68265': {
          const v71031 = v70170[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          const v71108 = v71031[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
          ;
          const v71421 = v71031[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '1')];
          const v71422 = v71031[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '2')];
          const v71428 = v69840.protoFee;
          const v71429 = v69840.lpFee;
          const v71430 = v69840.totFee;
          const v71431 = v69840.protoAddr;
          const v71432 = v69840.locked;
          const v71433 = {
            locked: v71432,
            lpFee: v71429,
            protoAddr: v71431,
            protoFee: v71428,
            totFee: v71430
            };
          const v71434 = await txn1.getOutput('register', 'v71433', ctc8, v71433);
          
          null;
          const v77472 = v69838;
          const v77474 = v69840;
          const v77475 = v69841;
          const v77477 = v69845;
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
  const {data: [v70170], secs: v70172, time: v70171, didSend: v69320, from: v70169 } = txn1;
  switch (v70170[0]) {
    case 'Triumvir_propose0_68265': {
      const v70173 = v70170[1];
      return;
      break;
      }
    case 'Triumvir_support0_68265': {
      const v70602 = v70170[1];
      return;
      break;
      }
    case 'register0_68265': {
      const v71031 = v70170[1];
      undefined /* setApiDetails */;
      const v71108 = v71031[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
      const v71111 = stdlib.ctcAddrEq(v71108, v70169);
      stdlib.assert(v71111, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'not contract',
        who: 'register'
        });
      ;
      const v71421 = v71031[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '1')];
      const v71422 = v71031[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '2')];
      const v71428 = v69840.protoFee;
      const v71429 = v69840.lpFee;
      const v71430 = v69840.totFee;
      const v71431 = v69840.protoAddr;
      const v71432 = v69840.locked;
      const v71433 = {
        locked: v71432,
        lpFee: v71429,
        protoAddr: v71431,
        protoFee: v71428,
        totFee: v71430
        };
      const v71434 = await txn1.getOutput('register', 'v71433', ctc8, v71433);
      if (v69320) {
        stdlib.protect(ctc1, await interact.out(v71031, v71434), {
          at: './index.rsh:183:11:application',
          fs: ['at ./index.rsh:183:11:application call to [unknown function] (defined at: ./index.rsh:183:11:function exp)', 'at ./index.rsh:187:10:application call to "k" (defined at: ./index.rsh:186:23:function exp)', 'at ./index.rsh:186:23:application call to [unknown function] (defined at: ./index.rsh:186:23:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      null;
      const v77472 = v69838;
      const v77474 = v69840;
      const v77475 = v69841;
      const v77477 = v69845;
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
    impure: [`Triumvir_propose((byte,byte[96]))void`, `Triumvir_support(uint64,(byte,byte[96]))void`, `_reachp_0((uint64,address[3]))void`, `_reachp_2((uint64,(byte,byte[105])))void`, `register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)`],
    pure: [`Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))`],
    sigs: [`Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))`, `Triumvir_propose((byte,byte[96]))void`, `Triumvir_support(uint64,(byte,byte[96]))void`, `_reachp_0((uint64,address[3]))void`, `_reachp_2((uint64,(byte,byte[105])))void`, `register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)`]
    },
  GlobalNumByteSlice: 6,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAAEIAyAGZGEQCREFJggBAQABAAECBWFwcElEAQMBBAQomkRuMRhBA9ApZEkiWzUBSSRbNQIhCFs1BSpkKGRQK2RQJwVkUCcGZFCCBgQYYDNGBBy0HfYESVoKaASTmZ9YBNsT0GcE4ebaWDYaAI4GAIcAAQezA0MDcwA/ADQBJRJEiAgWNBY0GVA0F1cpCDQXVwEIUDQXVzEIUDQXVwkgUDQXVwABUFA1BDEZIhJEgAQVH3x1NARQsCNDNhoBNQskryo0C1Akr1BQNQslNAESRIgHxzQLIls1DDQLVwhqNROABAF0aqo0DBZQNBNQsDQMiAedNBMiVY0DBwAHDwcZQv95NhoBFzYaAjULNQwkryg0DBY0C1BQUDULQv+uNBNXAWFJNRMiVY0GBu0G8wMrA8MDyQPPQv9DsSKyASEFshA0BbIYszQLIltJNRslDEQhCa9JNRM1DCI1EDQWIQQ0EAshBFg1ETQMKDQQFlA0DCJVIhIxADQREhBNNQw0ECMISTUQJQxA/9I0DCJVIxJENBskrzQMiAbbFxNENBkhBzQbCyEHWDUMNAtXCGEBNAwBEkQ0EzULIjUNNBYhBDQNCyEEWDUONAsoNA0WUDQLIlUiEjEANA4SEE01CzQNIwhJNQ0lDED/0jQLIlUjEkQ0GySvNAuIBnwXE0Q0GTQbIQcLNBpdNQ0pNQuACAAAAAAAARSTNAtQsDQLNQSABKIg5EQxAFA0GxZQNAxQsDQMIlWNBgO2A+QD8gQmBDsESUL+OjQLIls1DicENA4WUAMxABJENAtXCAk1DTQLIQpbNQw0F1cpCDQXVwEIUDQXVzEIUDQXVwkgUDQXVwABUDULgAgAAAAAAAEXCTQLULA0CzUEgAS6Xf0zNA4WUDQNUDQMFlCwIjIGNRU1GDQYQQU7MRkhCxJEsSKyASEFshA0BbIYIQuyGbOBoI0GNAcINQeIBa4iMgoyCYgF6DQDQP3ZQv3MJK8rNA0WNAxQNAsWUFCBUK9QUDULQv3RNAwiWzUNNAxXCGA1C4AEuc3WwDQNFlA0C1CwNA2IBXaAYQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJNRpJUDQaUCKACQAAAAAAAAAAGTIKUIAIAAAAAAAAAAVQgAgAAAAAAAAAHlA0CzIGIjUUNRU1FjUXNRg1GUL+7IgEu4HAmgw0Bgg1BrEisgEhBbIQgAYIMQAyCRKyHoABCLIfs7Q9NQU2GgE1DEL/DIgEizYaATULQvzSIjE0EkQhBTE1EkQiMTYSRCIxNxJEIjUFiARogaUEryIiNQI1ASpLAVcAf2coSwFXf39nK0sBV/5/ZycFSwGB/QKBf1hnJwZMgfwDgSlYZyk0ARY0AhZQNAUWUGcxGSISRIgEI0L+ejQTVwE5STULIls1HDQLJFs1GzQLIQhbNQw0HCEGDDQbIQYMEEEAgzQMNBs0HAgSNQs0CzQMIQYMEDQMIg0QNR00HUQhCa9JNQw1CyI1EDQWIQQ0EAshBFg1ETQLKDQQFlA0CyJVIhIxADQREhBNNQs0ECMISTUQJQxA/9I0CyJVIxJENBMiVY0GAJgAngCkAOcA7QDzQvuDIzUdQv+iIzUdQv+cIzUdQv+WIjULQv+BNBtENAw1CyI1DTQWIQQ0DQshBFg1DjQLKDQNFlA0CyJVIhIxADQOEhBNNQs0DSMISTUNJQxA/9I0CyJVIxJEKTUMgAgAAAAAAAESmDQMULA0DDUEgATt9gUDMQBQNBNQsDQZJK80C4gC+RchBws0E10iMgY1FTUYNRlC/R0jNRtC/30jNRtC/3c0E1cBOUk1CyJbNRI0CyRbNRE0CyEIWzUQNBIhBgw0ESEGDBBBAC40EDQRNBIIEjULNAs0ECEGDBA0ECINEDUbQv80IzUbQv8uIzUbQv8oIzUbQv8iIjULQv/WNAxXATlJNQsiWzUQNAtXCAk1DzQLIQpbNQ40C1cZIDUMNA8iVY0CAJUBLUL6WTQNIzIGNRU1GDUZQvx6NAxXATk1CzQNIjQLVzgBNAtXCAhQNAtXGCBQNAtXAAhQNAtXEAhQMgY1FTUXNRg1GUL8RjQNIjQMVwFgMgY1FTUWNRg1GUL8MTQNIjIGNRU1GDUZQvwjMgpgMgp4CTQUCUk1CzQMVwEgiAHwNA0iMgY0CzQUCDQLCTUUNRU1GDUZQvv2JwQ0EBZQAzUIMgp4NQkpMgpgNAkJFjUKsSKyASEFshA0ELIYJweyGjQMSbIcsho0F1cpCDQXVwEIUDQXVzEIUDQXVwkgUDQXVwABULIaNA6yMLMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAABFNg0C1CwNAtJNQwiWzULIjQLEkQ0DSIyBjQUNAsINRQ1FTUYNRlC+14nBDQQFlADNQgyCng1CSkyCmA0CQkWNQqxIrIBIQWyEDQQshgnB7IaNAxJshyyGjQXVykINBdXAQhQNBdXMQhQNBdXCSBQNBdXAAFQsho0DyNbsjA0DrIwszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAEVAjQLULA0C0k1DCJbNQsiNAsSRDQNIjIGNBQ0Cwg1FDUVNRg1GUL6wDQaNBlQNBdQNBZQNBQWUCUyBkL8G0L5GyKyASOyELIHsgiziTQTVwFpNQtC+SA0E1cBGTULQvofIzUdQvx4IzUdQvxyNhoBFzYaAjYaAxc1CzUMNQ1C+qBIiUwJSTUGMgmIAD6JCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJSVcBAEwiVU2JIzUDiTQGNAdKD0H/u0L/w7FC/3JJIhJMNAISEUSJSVcAYTUaSSEHgaMCWDUZSYGEA4E5WDUXSYG9A4FgWDUWgZ0EWzUUibGyCUL/Og==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `34`,
    1000: `548`,
    1001: `550`,
    1002: `550`,
    1003: `550`,
    1004: `551`,
    1005: `551`,
    1006: `552`,
    1007: `552`,
    1008: `552`,
    1009: `554`,
    101: `34`,
    1010: `554`,
    1011: `554`,
    1012: `556`,
    1013: `556`,
    1014: `556`,
    1015: `557`,
    1016: `557`,
    1017: `558`,
    1018: `558`,
    1019: `558`,
    102: `34`,
    1020: `560`,
    1021: `561`,
    1022: `561`,
    1023: `562`,
    1024: `563`,
    1025: `564`,
    1026: `564`,
    1027: `565`,
    1028: `565`,
    1029: `566`,
    103: `34`,
    1030: `567`,
    1031: `568`,
    1032: `569`,
    1033: `569`,
    1034: `570`,
    1035: `571`,
    1036: `572`,
    1037: `573`,
    1038: `573`,
    1039: `574`,
    104: `34`,
    1040: `575`,
    1041: `576`,
    1042: `577`,
    1043: `577`,
    1044: `578`,
    1045: `578`,
    1046: `578`,
    1047: `579`,
    1048: `579`,
    1049: `579`,
    105: `34`,
    1050: `580`,
    1051: `581`,
    1052: `582`,
    1053: `584`,
    1054: `584`,
    1055: `585`,
    1056: `585`,
    1057: `586`,
    1058: `587`,
    1059: `587`,
    106: `34`,
    1060: `588`,
    1061: `588`,
    1062: `588`,
    1063: `589`,
    1064: `590`,
    1065: `591`,
    1066: `591`,
    1067: `592`,
    1068: `592`,
    1069: `592`,
    107: `34`,
    1070: `593`,
    1071: `594`,
    1072: `595`,
    1073: `595`,
    1074: `596`,
    1075: `596`,
    1076: `596`,
    1077: `597`,
    1078: `598`,
    1079: `598`,
    108: `34`,
    1080: `599`,
    1081: `599`,
    1082: `600`,
    1083: `600`,
    1084: `600`,
    1085: `601`,
    1086: `601`,
    1087: `602`,
    1088: `603`,
    1089: `604`,
    109: `35`,
    1090: `604`,
    1091: `605`,
    1092: `606`,
    1093: `606`,
    1094: `606`,
    1095: `607`,
    1096: `607`,
    1097: `608`,
    1098: `609`,
    1099: `610`,
    11: `2`,
    110: `35`,
    1100: `611`,
    1101: `611`,
    1102: `612`,
    1103: `613`,
    1104: `613`,
    1105: `614`,
    1106: `615`,
    1107: `616`,
    1108: `616`,
    1109: `617`,
    111: `35`,
    1110: `618`,
    1111: `619`,
    1112: `620`,
    1113: `620`,
    1114: `621`,
    1115: `622`,
    1116: `623`,
    1117: `625`,
    1118: `625`,
    1119: `625`,
    112: `36`,
    1120: `626`,
    1121: `626`,
    1122: `626`,
    1123: `628`,
    1124: `628`,
    1125: `629`,
    1126: `629`,
    1127: `629`,
    1128: `630`,
    1129: `631`,
    113: `36`,
    1130: `631`,
    1131: `632`,
    1132: `633`,
    1133: `634`,
    1134: `634`,
    1135: `635`,
    1136: `635`,
    1137: `636`,
    1138: `637`,
    1139: `638`,
    114: `36`,
    1140: `638`,
    1141: `639`,
    1142: `639`,
    1143: `640`,
    1144: `640`,
    1145: `641`,
    1146: `642`,
    1147: `642`,
    1148: `643`,
    1149: `643`,
    115: `36`,
    1150: `644`,
    1151: `644`,
    1152: `645`,
    1153: `646`,
    1154: `646`,
    1155: `647`,
    1156: `647`,
    1157: `648`,
    1158: `649`,
    1159: `650`,
    116: `36`,
    1160: `650`,
    1161: `650`,
    1162: `651`,
    1163: `651`,
    1164: `652`,
    1165: `652`,
    1166: `653`,
    1167: `653`,
    1168: `654`,
    1169: `655`,
    117: `36`,
    1170: `656`,
    1171: `656`,
    1172: `658`,
    1173: `658`,
    1174: `659`,
    1175: `659`,
    1176: `660`,
    1177: `660`,
    1178: `661`,
    1179: `662`,
    118: `36`,
    1180: `663`,
    1181: `663`,
    1182: `664`,
    1183: `665`,
    1184: `666`,
    1185: `667`,
    1186: `667`,
    1187: `669`,
    1188: `669`,
    1189: `670`,
    119: `36`,
    1190: `677`,
    1191: `677`,
    1192: `678`,
    1193: `679`,
    1194: `680`,
    1195: `680`,
    1196: `681`,
    1197: `681`,
    1198: `682`,
    1199: `683`,
    12: `2`,
    120: `36`,
    1200: `683`,
    1201: `686`,
    1202: `686`,
    1203: `687`,
    1204: `687`,
    1205: `688`,
    1206: `688`,
    1207: `689`,
    1208: `690`,
    1209: `690`,
    121: `36`,
    1210: `691`,
    1211: `692`,
    1212: `692`,
    1213: `693`,
    1214: `693`,
    1215: `694`,
    1216: `695`,
    1217: `695`,
    1218: `696`,
    1219: `697`,
    122: `36`,
    1220: `698`,
    1221: `698`,
    1222: `699`,
    1223: `700`,
    1224: `701`,
    1225: `702`,
    1226: `703`,
    1227: `703`,
    1228: `704`,
    1229: `704`,
    123: `36`,
    1230: `705`,
    1231: `706`,
    1232: `707`,
    1233: `708`,
    1234: `708`,
    1235: `709`,
    1236: `709`,
    1237: `710`,
    1238: `711`,
    1239: `712`,
    124: `36`,
    1240: `713`,
    1241: `713`,
    1242: `714`,
    1243: `715`,
    1244: `716`,
    1245: `716`,
    1246: `716`,
    1247: `718`,
    1248: `718`,
    1249: `719`,
    125: `36`,
    1250: `720`,
    1251: `721`,
    1252: `722`,
    1253: `723`,
    1254: `731`,
    1255: `731`,
    1256: `732`,
    1257: `733`,
    1258: `734`,
    1259: `734`,
    126: `38`,
    1260: `734`,
    1261: `734`,
    1262: `734`,
    1263: `734`,
    1264: `734`,
    1265: `734`,
    1266: `734`,
    1267: `734`,
    1268: `734`,
    1269: `734`,
    127: `43`,
    1270: `734`,
    1271: `734`,
    1272: `735`,
    1273: `735`,
    1274: `735`,
    1275: `737`,
    1276: `738`,
    1277: `738`,
    1278: `739`,
    1279: `739`,
    128: `43`,
    1280: `739`,
    1281: `741`,
    1282: `742`,
    1283: `742`,
    1284: `743`,
    1285: `743`,
    1286: `743`,
    1287: `745`,
    1288: `746`,
    1289: `746`,
    129: `44`,
    1290: `747`,
    1291: `747`,
    1292: `747`,
    1293: `749`,
    1294: `750`,
    1295: `750`,
    1296: `751`,
    1297: `751`,
    1298: `751`,
    1299: `753`,
    13: `2`,
    130: `45`,
    1300: `753`,
    1301: `754`,
    1302: `759`,
    1303: `759`,
    1304: `760`,
    1305: `760`,
    1306: `761`,
    1307: `762`,
    1308: `762`,
    1309: `765`,
    131: `46`,
    1310: `765`,
    1311: `766`,
    1312: `766`,
    1313: `767`,
    1314: `767`,
    1315: `768`,
    1316: `769`,
    1317: `769`,
    1318: `770`,
    1319: `771`,
    132: `49`,
    1320: `771`,
    1321: `772`,
    1322: `772`,
    1323: `773`,
    1324: `774`,
    1325: `774`,
    1326: `775`,
    1327: `776`,
    1328: `777`,
    1329: `777`,
    133: `49`,
    1330: `778`,
    1331: `779`,
    1332: `780`,
    1333: `781`,
    1334: `782`,
    1335: `782`,
    1336: `783`,
    1337: `783`,
    1338: `784`,
    1339: `785`,
    134: `49`,
    1340: `786`,
    1341: `787`,
    1342: `787`,
    1343: `788`,
    1344: `788`,
    1345: `789`,
    1346: `790`,
    1347: `791`,
    1348: `792`,
    1349: `792`,
    135: `50`,
    1350: `793`,
    1351: `794`,
    1352: `795`,
    1353: `795`,
    1354: `795`,
    1355: `797`,
    1356: `797`,
    1357: `798`,
    1358: `799`,
    1359: `800`,
    136: `50`,
    1360: `801`,
    1361: `802`,
    1362: `808`,
    1363: `809`,
    1364: `809`,
    1365: `810`,
    1366: `810`,
    1367: `810`,
    1368: `810`,
    1369: `810`,
    137: `51`,
    1370: `810`,
    1371: `810`,
    1372: `810`,
    1373: `810`,
    1374: `810`,
    1375: `811`,
    1376: `811`,
    1377: `812`,
    1378: `813`,
    1379: `814`,
    138: `51`,
    1380: `814`,
    1381: `815`,
    1382: `815`,
    1383: `816`,
    1384: `816`,
    1385: `816`,
    1386: `816`,
    1387: `816`,
    1388: `816`,
    1389: `817`,
    139: `52`,
    1390: `817`,
    1391: `818`,
    1392: `819`,
    1393: `819`,
    1394: `820`,
    1395: `821`,
    1396: `823`,
    1397: `823`,
    1398: `824`,
    1399: `825`,
    14: `2`,
    140: `53`,
    1400: `826`,
    1401: `826`,
    1402: `827`,
    1403: `827`,
    1404: `827`,
    1405: `828`,
    1406: `829`,
    1407: `829`,
    1408: `830`,
    1409: `831`,
    141: `53`,
    1410: `831`,
    1411: `832`,
    1412: `833`,
    1413: `834`,
    1414: `834`,
    1415: `835`,
    1416: `835`,
    1417: `836`,
    1418: `836`,
    1419: `837`,
    142: `54`,
    1420: `837`,
    1421: `838`,
    1422: `838`,
    1423: `838`,
    1424: `840`,
    1425: `841`,
    1426: `841`,
    1427: `842`,
    1428: `842`,
    1429: `842`,
    143: `54`,
    1430: `844`,
    1431: `845`,
    1432: `845`,
    1433: `846`,
    1434: `846`,
    1435: `846`,
    1436: `848`,
    1437: `848`,
    1438: `849`,
    1439: `849`,
    144: `54`,
    1440: `849`,
    1441: `850`,
    1442: `851`,
    1443: `851`,
    1444: `852`,
    1445: `853`,
    1446: `854`,
    1447: `854`,
    1448: `855`,
    1449: `855`,
    145: `55`,
    1450: `856`,
    1451: `857`,
    1452: `858`,
    1453: `858`,
    1454: `859`,
    1455: `859`,
    1456: `860`,
    1457: `860`,
    1458: `861`,
    1459: `862`,
    146: `55`,
    1460: `862`,
    1461: `863`,
    1462: `863`,
    1463: `864`,
    1464: `864`,
    1465: `865`,
    1466: `866`,
    1467: `866`,
    1468: `867`,
    1469: `867`,
    147: `56`,
    1470: `868`,
    1471: `869`,
    1472: `870`,
    1473: `870`,
    1474: `870`,
    1475: `871`,
    1476: `871`,
    1477: `872`,
    1478: `872`,
    1479: `873`,
    148: `56`,
    1480: `873`,
    1481: `874`,
    1482: `875`,
    1483: `876`,
    1484: `876`,
    1485: `878`,
    1486: `878`,
    1487: `879`,
    1488: `879`,
    1489: `880`,
    149: `56`,
    1490: `880`,
    1491: `881`,
    1492: `882`,
    1493: `883`,
    1494: `883`,
    1495: `884`,
    1496: `885`,
    1497: `886`,
    1498: `887`,
    1499: `887`,
    15: `2`,
    150: `57`,
    1500: `888`,
    1501: `888`,
    1502: `888`,
    1503: `890`,
    1504: `891`,
    1505: `891`,
    1506: `892`,
    1507: `892`,
    1508: `892`,
    1509: `894`,
    151: `58`,
    1510: `895`,
    1511: `895`,
    1512: `896`,
    1513: `896`,
    1514: `896`,
    1515: `898`,
    1516: `899`,
    1517: `899`,
    1518: `900`,
    1519: `900`,
    152: `58`,
    1520: `900`,
    1521: `902`,
    1522: `903`,
    1523: `903`,
    1524: `904`,
    1525: `904`,
    1526: `904`,
    1527: `906`,
    1528: `906`,
    1529: `907`,
    153: `59`,
    1530: `907`,
    1531: `907`,
    1532: `908`,
    1533: `909`,
    1534: `909`,
    1535: `910`,
    1536: `911`,
    1537: `912`,
    1538: `912`,
    1539: `913`,
    154: `59`,
    1540: `913`,
    1541: `914`,
    1542: `914`,
    1543: `914`,
    1544: `915`,
    1545: `915`,
    1546: `916`,
    1547: `916`,
    1548: `917`,
    1549: `917`,
    155: `59`,
    1550: `918`,
    1551: `919`,
    1552: `919`,
    1553: `920`,
    1554: `920`,
    1555: `921`,
    1556: `921`,
    1557: `921`,
    1558: `922`,
    1559: `922`,
    156: `60`,
    1560: `923`,
    1561: `923`,
    1562: `924`,
    1563: `925`,
    1564: `926`,
    1565: `926`,
    1566: `926`,
    1567: `926`,
    1568: `926`,
    1569: `926`,
    157: `61`,
    1570: `927`,
    1571: `927`,
    1572: `927`,
    1573: `929`,
    1574: `929`,
    1575: `930`,
    1576: `931`,
    1577: `931`,
    1578: `932`,
    1579: `932`,
    158: `61`,
    1580: `933`,
    1581: `933`,
    1582: `934`,
    1583: `934`,
    1584: `935`,
    1585: `935`,
    1586: `935`,
    1587: `937`,
    1588: `937`,
    1589: `938`,
    159: `62`,
    1590: `938`,
    1591: `938`,
    1592: `939`,
    1593: `939`,
    1594: `940`,
    1595: `940`,
    1596: `941`,
    1597: `942`,
    1598: `942`,
    1599: `943`,
    16: `2`,
    160: `62`,
    1600: `943`,
    1601: `943`,
    1602: `944`,
    1603: `944`,
    1604: `945`,
    1605: `945`,
    1606: `945`,
    1607: `946`,
    1608: `947`,
    1609: `947`,
    161: `62`,
    1610: `948`,
    1611: `948`,
    1612: `948`,
    1613: `949`,
    1614: `950`,
    1615: `950`,
    1616: `951`,
    1617: `951`,
    1618: `951`,
    1619: `952`,
    162: `63`,
    1620: `953`,
    1621: `953`,
    1622: `954`,
    1623: `954`,
    1624: `954`,
    1625: `955`,
    1626: `956`,
    1627: `956`,
    1628: `957`,
    1629: `957`,
    163: `64`,
    1630: `958`,
    1631: `958`,
    1632: `959`,
    1633: `959`,
    1634: `960`,
    1635: `960`,
    1636: `961`,
    1637: `961`,
    1638: `961`,
    1639: `963`,
    164: `64`,
    1640: `963`,
    1641: `964`,
    1642: `965`,
    1643: `965`,
    1644: `966`,
    1645: `966`,
    1646: `966`,
    1647: `967`,
    1648: `967`,
    1649: `968`,
    165: `65`,
    1650: `968`,
    1651: `969`,
    1652: `969`,
    1653: `970`,
    1654: `970`,
    1655: `971`,
    1656: `971`,
    1657: `972`,
    1658: `972`,
    1659: `972`,
    166: `65`,
    1660: `974`,
    1661: `974`,
    1662: `975`,
    1663: `976`,
    1664: `976`,
    1665: `977`,
    1666: `977`,
    1667: `978`,
    1668: `978`,
    1669: `979`,
    167: `65`,
    1670: `979`,
    1671: `980`,
    1672: `980`,
    1673: `980`,
    1674: `982`,
    1675: `982`,
    1676: `983`,
    1677: `984`,
    1678: `984`,
    1679: `985`,
    168: `66`,
    1680: `986`,
    1681: `987`,
    1682: `987`,
    1683: `988`,
    1684: `990`,
    1685: `991`,
    1686: `991`,
    1687: `993`,
    1688: `993`,
    1689: `994`,
    169: `67`,
    1690: `994`,
    1691: `994`,
    1692: `995`,
    1693: `995`,
    1694: `995`,
    1695: `996`,
    1696: `996`,
    1697: `997`,
    1698: `998`,
    1699: `998`,
    17: `2`,
    170: `68`,
    1700: `999`,
    1701: `999`,
    1702: `1000`,
    1703: `1000`,
    1704: `1001`,
    1705: `1002`,
    1706: `1002`,
    1707: `1003`,
    1708: `1004`,
    1709: `1004`,
    171: `68`,
    1710: `1005`,
    1711: `1005`,
    1712: `1006`,
    1713: `1006`,
    1714: `1007`,
    1715: `1007`,
    1716: `1008`,
    1717: `1008`,
    1718: `1008`,
    1719: `1010`,
    172: `70`,
    1720: `1010`,
    1721: `1011`,
    1722: `1011`,
    1723: `1012`,
    1724: `1013`,
    1725: `1014`,
    1726: `1015`,
    1727: `1015`,
    1728: `1016`,
    1729: `1016`,
    173: `70`,
    1730: `1017`,
    1731: `1018`,
    1732: `1018`,
    1733: `1019`,
    1734: `1020`,
    1735: `1020`,
    1736: `1021`,
    1737: `1022`,
    1738: `1022`,
    1739: `1023`,
    174: `71`,
    1740: `1024`,
    1741: `1025`,
    1742: `1025`,
    1743: `1026`,
    1744: `1027`,
    1745: `1028`,
    1746: `1028`,
    1747: `1029`,
    1748: `1029`,
    1749: `1030`,
    175: `72`,
    1750: `1030`,
    1751: `1031`,
    1752: `1031`,
    1753: `1033`,
    1754: `1033`,
    1755: `1034`,
    1756: `1034`,
    1757: `1035`,
    1758: `1035`,
    1759: `1036`,
    176: `73`,
    1760: `1036`,
    1761: `1038`,
    1762: `1039`,
    1763: `1039`,
    1764: `1040`,
    1765: `1040`,
    1766: `1041`,
    1767: `1041`,
    1768: `1042`,
    1769: `1042`,
    177: `76`,
    1770: `1042`,
    1771: `1043`,
    1772: `1043`,
    1773: `1044`,
    1774: `1044`,
    1775: `1044`,
    1776: `1045`,
    1777: `1046`,
    1778: `1046`,
    1779: `1047`,
    178: `76`,
    1780: `1047`,
    1781: `1047`,
    1782: `1048`,
    1783: `1049`,
    1784: `1049`,
    1785: `1050`,
    1786: `1050`,
    1787: `1050`,
    1788: `1051`,
    1789: `1052`,
    179: `76`,
    1790: `1052`,
    1791: `1053`,
    1792: `1053`,
    1793: `1053`,
    1794: `1054`,
    1795: `1055`,
    1796: `1055`,
    1797: `1057`,
    1798: `1057`,
    1799: `1058`,
    18: `2`,
    180: `76`,
    1800: `1058`,
    1801: `1059`,
    1802: `1067`,
    1803: `1067`,
    1804: `1068`,
    1805: `1069`,
    1806: `1069`,
    1807: `1070`,
    1808: `1071`,
    1809: `1071`,
    181: `76`,
    1810: `1072`,
    1811: `1073`,
    1812: `1074`,
    1813: `1075`,
    1814: `1075`,
    1815: `1075`,
    1816: `1076`,
    1817: `1076`,
    1818: `1076`,
    1819: `1077`,
    182: `76`,
    1820: `1078`,
    1821: `1078`,
    1822: `1079`,
    1823: `1079`,
    1824: `1079`,
    1825: `1079`,
    1826: `1079`,
    1827: `1079`,
    1828: `1079`,
    1829: `1079`,
    183: `77`,
    1830: `1079`,
    1831: `1079`,
    1832: `1080`,
    1833: `1080`,
    1834: `1081`,
    1835: `1082`,
    1836: `1083`,
    1837: `1083`,
    1838: `1084`,
    1839: `1085`,
    184: `77`,
    1840: `1085`,
    1841: `1086`,
    1842: `1087`,
    1843: `1088`,
    1844: `1088`,
    1845: `1089`,
    1846: `1090`,
    1847: `1090`,
    1848: `1091`,
    1849: `1092`,
    185: `78`,
    1850: `1100`,
    1851: `1100`,
    1852: `1101`,
    1853: `1102`,
    1854: `1102`,
    1855: `1103`,
    1856: `1103`,
    1857: `1104`,
    1858: `1104`,
    1859: `1105`,
    186: `79`,
    1860: `1106`,
    1861: `1106`,
    1862: `1107`,
    1863: `1107`,
    1864: `1108`,
    1865: `1108`,
    1866: `1109`,
    1867: `1109`,
    1868: `1110`,
    1869: `1110`,
    187: `81`,
    1870: `1110`,
    1871: `1112`,
    1872: `1112`,
    1873: `1113`,
    1874: `1113`,
    1875: `1114`,
    1876: `1115`,
    1877: `1116`,
    1878: `1117`,
    1879: `1117`,
    188: `82`,
    1880: `1118`,
    1881: `1118`,
    1882: `1119`,
    1883: `1120`,
    1884: `1120`,
    1885: `1121`,
    1886: `1122`,
    1887: `1122`,
    1888: `1123`,
    1889: `1124`,
    189: `85`,
    1890: `1124`,
    1891: `1125`,
    1892: `1126`,
    1893: `1127`,
    1894: `1127`,
    1895: `1128`,
    1896: `1129`,
    1897: `1130`,
    1898: `1130`,
    1899: `1131`,
    19: `2`,
    190: `85`,
    1900: `1131`,
    1901: `1132`,
    1902: `1132`,
    1903: `1133`,
    1904: `1133`,
    1905: `1135`,
    1906: `1135`,
    1907: `1136`,
    1908: `1136`,
    1909: `1137`,
    191: `85`,
    1910: `1137`,
    1911: `1138`,
    1912: `1138`,
    1913: `1140`,
    1914: `1141`,
    1915: `1141`,
    1916: `1142`,
    1917: `1142`,
    1918: `1143`,
    1919: `1143`,
    192: `86`,
    1920: `1144`,
    1921: `1144`,
    1922: `1144`,
    1923: `1145`,
    1924: `1145`,
    1925: `1146`,
    1926: `1146`,
    1927: `1146`,
    1928: `1147`,
    1929: `1148`,
    193: `86`,
    1930: `1148`,
    1931: `1149`,
    1932: `1149`,
    1933: `1149`,
    1934: `1150`,
    1935: `1151`,
    1936: `1151`,
    1937: `1152`,
    1938: `1152`,
    1939: `1152`,
    194: `89`,
    1940: `1153`,
    1941: `1154`,
    1942: `1154`,
    1943: `1155`,
    1944: `1155`,
    1945: `1155`,
    1946: `1156`,
    1947: `1157`,
    1948: `1157`,
    1949: `1159`,
    195: `90`,
    1950: `1159`,
    1951: `1160`,
    1952: `1161`,
    1953: `1162`,
    1954: `1162`,
    1955: `1164`,
    1956: `1164`,
    1957: `1165`,
    1958: `1165`,
    1959: `1166`,
    196: `91`,
    1960: `1174`,
    1961: `1174`,
    1962: `1175`,
    1963: `1176`,
    1964: `1176`,
    1965: `1177`,
    1966: `1178`,
    1967: `1178`,
    1968: `1179`,
    1969: `1180`,
    197: `92`,
    1970: `1181`,
    1971: `1182`,
    1972: `1182`,
    1973: `1182`,
    1974: `1183`,
    1975: `1183`,
    1976: `1183`,
    1977: `1184`,
    1978: `1185`,
    1979: `1185`,
    198: `92`,
    1980: `1186`,
    1981: `1186`,
    1982: `1186`,
    1983: `1186`,
    1984: `1186`,
    1985: `1186`,
    1986: `1186`,
    1987: `1186`,
    1988: `1186`,
    1989: `1186`,
    199: `93`,
    1990: `1187`,
    1991: `1187`,
    1992: `1188`,
    1993: `1189`,
    1994: `1190`,
    1995: `1190`,
    1996: `1191`,
    1997: `1192`,
    1998: `1192`,
    1999: `1193`,
    2: `2`,
    20: `2`,
    200: `94`,
    2000: `1194`,
    2001: `1195`,
    2002: `1195`,
    2003: `1196`,
    2004: `1197`,
    2005: `1197`,
    2006: `1198`,
    2007: `1199`,
    2008: `1207`,
    2009: `1207`,
    201: `95`,
    2010: `1208`,
    2011: `1209`,
    2012: `1209`,
    2013: `1210`,
    2014: `1210`,
    2015: `1211`,
    2016: `1211`,
    2017: `1212`,
    2018: `1213`,
    2019: `1213`,
    202: `96`,
    2020: `1214`,
    2021: `1214`,
    2022: `1215`,
    2023: `1215`,
    2024: `1216`,
    2025: `1216`,
    2026: `1217`,
    2027: `1217`,
    2028: `1217`,
    2029: `1220`,
    203: `97`,
    2030: `1220`,
    2031: `1221`,
    2032: `1221`,
    2033: `1222`,
    2034: `1223`,
    2035: `1223`,
    2036: `1224`,
    2037: `1225`,
    2038: `1225`,
    2039: `1226`,
    204: `98`,
    2040: `1227`,
    2041: `1227`,
    2042: `1228`,
    2043: `1229`,
    2044: `1230`,
    2045: `1231`,
    2046: `1231`,
    2047: `1232`,
    2048: `1232`,
    2049: `1232`,
    205: `98`,
    2050: `1234`,
    2051: `1234`,
    2052: `1234`,
    2053: `1236`,
    2054: `1237`,
    2055: `1237`,
    2056: `1238`,
    2057: `1239`,
    2058: `1239`,
    2059: `1240`,
    206: `101`,
    2060: `1240`,
    2061: `1241`,
    2062: `1241`,
    2063: `1242`,
    2064: `1243`,
    2065: `1245`,
    2066: `1245`,
    2067: `1246`,
    2068: `1246`,
    2069: `1246`,
    207: `102`,
    2070: `1247`,
    2071: `1247`,
    2072: `1248`,
    2073: `1248`,
    2074: `1248`,
    2075: `1250`,
    2076: `1250`,
    2077: `1251`,
    2078: `1251`,
    2079: `1251`,
    208: `102`,
    2080: `1252`,
    2081: `1252`,
    2082: `1253`,
    2083: `1253`,
    2084: `1253`,
    2085: `1255`,
    2086: `1256`,
    2087: `1256`,
    2088: `1257`,
    2089: `1257`,
    209: `103`,
    2090: `1257`,
    2091: `1259`,
    2092: `1260`,
    2093: `1260`,
    2094: `1261`,
    2095: `1261`,
    2096: `1261`,
    2097: `1264`,
    2098: `1264`,
    2099: `1264`,
    21: `2`,
    210: `104`,
    2100: `1265`,
    2101: `1266`,
    2102: `1266`,
    2103: `1266`,
    2104: `1267`,
    2105: `1267`,
    2106: `1267`,
    2107: `1268`,
    2108: `1269`,
    2109: `1269`,
    211: `105`,
    2110: `1270`,
    2111: `1270`,
    2112: `1271`,
    2113: `1271`,
    2114: `1272`,
    2115: `1272`,
    2116: `1272`,
    2117: `1274`,
    2118: `1275`,
    2119: `1277`,
    212: `105`,
    2120: `1278`,
    2121: `1279`,
    2122: `1280`,
    2123: `1280`,
    2124: `1281`,
    2125: `1281`,
    2126: `1282`,
    2127: `1282`,
    2128: `1282`,
    2129: `1283`,
    213: `105`,
    2130: `1285`,
    2131: `1286`,
    2132: `1287`,
    2133: `1287`,
    2134: `1287`,
    2135: `1288`,
    2136: `1289`,
    2137: `1289`,
    2138: `1292`,
    2139: `1292`,
    214: `106`,
    2140: `1293`,
    2141: `1293`,
    2142: `1294`,
    2143: `1295`,
    2144: `1296`,
    2145: `1297`,
    2146: `1297`,
    2147: `1298`,
    2148: `1299`,
    2149: `1299`,
    215: `106`,
    2150: `1300`,
    2151: `1300`,
    2152: `1301`,
    2153: `1301`,
    2154: `1302`,
    2155: `1303`,
    2156: `1304`,
    2157: `1304`,
    2158: `1305`,
    2159: `1306`,
    216: `107`,
    2160: `1307`,
    2161: `1308`,
    2162: `1308`,
    2163: `1309`,
    2164: `1310`,
    2165: `1311`,
    2166: `1313`,
    2167: `1314`,
    2168: `1314`,
    2169: `1314`,
    217: `108`,
    2170: `1315`,
    2171: `1316`,
    2172: `1317`,
    2173: `1318`,
    2174: `1319`,
    2175: `1321`,
    2176: `1322`,
    2177: `1322`,
    2178: `1323`,
    2179: `1325`,
    218: `109`,
    2180: `1325`,
    2181: `1326`,
    2182: `1326`,
    2183: `1327`,
    2184: `1328`,
    2185: `1329`,
    2186: `1329`,
    2187: `1329`,
    2188: `1330`,
    2189: `1330`,
    219: `109`,
    2190: `1330`,
    2191: `1332`,
    2192: `1333`,
    2193: `1333`,
    2194: `1333`,
    2195: `1335`,
    2196: `1336`,
    2197: `1337`,
    2198: `1338`,
    2199: `1339`,
    22: `2`,
    220: `110`,
    2200: `1339`,
    2201: `1340`,
    2202: `1341`,
    2203: `1342`,
    2204: `1343`,
    2205: `1345`,
    2206: `1346`,
    2207: `1346`,
    2208: `1346`,
    2209: `1347`,
    221: `110`,
    2210: `1347`,
    2211: `1348`,
    2212: `1349`,
    2213: `1349`,
    2214: `1350`,
    2215: `1350`,
    2216: `1350`,
    2217: `1351`,
    2218: `1352`,
    2219: `1352`,
    222: `111`,
    2220: `1353`,
    2221: `1354`,
    2222: `1354`,
    2223: `1354`,
    2224: `1355`,
    2225: `1355`,
    2226: `1356`,
    2227: `1357`,
    2228: `1357`,
    2229: `1358`,
    223: `111`,
    2230: `1359`,
    2231: `1359`,
    2232: `1359`,
    2233: `1360`,
    2234: `1360`,
    2235: `1361`,
    2236: `1362`,
    2237: `1362`,
    2238: `1363`,
    2239: `1363`,
    224: `111`,
    2240: `1363`,
    2241: `1364`,
    2242: `1365`,
    2243: `1365`,
    2244: `1366`,
    2245: `1368`,
    2246: `1369`,
    2247: `1369`,
    2248: `1370`,
    225: `112`,
    226: `112`,
    227: `113`,
    228: `113`,
    229: `113`,
    23: `2`,
    230: `113`,
    231: `113`,
    232: `113`,
    233: `114`,
    234: `114`,
    235: `115`,
    236: `116`,
    237: `117`,
    238: `117`,
    239: `118`,
    24: `2`,
    240: `119`,
    241: `121`,
    242: `121`,
    243: `122`,
    244: `122`,
    245: `122`,
    246: `123`,
    247: `123`,
    248: `124`,
    249: `125`,
    25: `2`,
    250: `126`,
    251: `126`,
    252: `126`,
    253: `126`,
    254: `126`,
    255: `126`,
    256: `126`,
    257: `126`,
    258: `127`,
    259: `127`,
    26: `2`,
    260: `127`,
    261: `130`,
    262: `130`,
    263: `130`,
    264: `131`,
    265: `132`,
    266: `132`,
    267: `132`,
    268: `133`,
    269: `133`,
    27: `2`,
    270: `134`,
    271: `134`,
    272: `137`,
    273: `138`,
    274: `139`,
    275: `140`,
    276: `140`,
    277: `141`,
    278: `142`,
    279: `142`,
    28: `2`,
    280: `143`,
    281: `144`,
    282: `145`,
    283: `146`,
    284: `146`,
    285: `147`,
    286: `147`,
    287: `147`,
    288: `150`,
    289: `150`,
    29: `2`,
    290: `151`,
    291: `151`,
    292: `151`,
    293: `152`,
    294: `153`,
    295: `153`,
    296: `154`,
    297: `155`,
    298: `156`,
    299: `156`,
    3: `2`,
    30: `2`,
    300: `156`,
    301: `156`,
    302: `156`,
    303: `156`,
    304: `156`,
    305: `156`,
    306: `156`,
    307: `156`,
    308: `156`,
    309: `156`,
    31: `2`,
    310: `156`,
    311: `156`,
    312: `157`,
    313: `157`,
    314: `157`,
    315: `161`,
    316: `162`,
    317: `163`,
    318: `163`,
    319: `164`,
    32: `2`,
    320: `164`,
    321: `165`,
    322: `165`,
    323: `166`,
    324: `166`,
    325: `167`,
    326: `167`,
    327: `168`,
    328: `170`,
    329: `170`,
    33: `2`,
    330: `171`,
    331: `172`,
    332: `173`,
    333: `174`,
    334: `174`,
    335: `175`,
    336: `176`,
    337: `177`,
    338: `184`,
    339: `184`,
    34: `2`,
    340: `185`,
    341: `186`,
    342: `187`,
    343: `187`,
    344: `188`,
    345: `188`,
    346: `189`,
    347: `190`,
    348: `190`,
    349: `193`,
    35: `2`,
    350: `193`,
    351: `194`,
    352: `194`,
    353: `195`,
    354: `195`,
    355: `196`,
    356: `197`,
    357: `197`,
    358: `198`,
    359: `199`,
    36: `2`,
    360: `199`,
    361: `200`,
    362: `200`,
    363: `201`,
    364: `202`,
    365: `202`,
    366: `203`,
    367: `204`,
    368: `205`,
    369: `205`,
    37: `2`,
    370: `206`,
    371: `207`,
    372: `208`,
    373: `209`,
    374: `210`,
    375: `210`,
    376: `211`,
    377: `211`,
    378: `212`,
    379: `213`,
    38: `2`,
    380: `214`,
    381: `215`,
    382: `215`,
    383: `216`,
    384: `216`,
    385: `217`,
    386: `218`,
    387: `219`,
    388: `220`,
    389: `220`,
    39: `4`,
    390: `221`,
    391: `222`,
    392: `223`,
    393: `223`,
    394: `223`,
    395: `225`,
    396: `225`,
    397: `226`,
    398: `227`,
    399: `228`,
    4: `2`,
    40: `4`,
    400: `229`,
    401: `230`,
    402: `238`,
    403: `238`,
    404: `239`,
    405: `240`,
    406: `241`,
    407: `241`,
    408: `242`,
    409: `242`,
    41: `5`,
    410: `242`,
    411: `243`,
    412: `244`,
    413: `245`,
    414: `252`,
    415: `252`,
    416: `253`,
    417: `253`,
    418: `254`,
    419: `254`,
    42: `5`,
    420: `255`,
    421: `256`,
    422: `256`,
    423: `257`,
    424: `258`,
    425: `258`,
    426: `259`,
    427: `259`,
    428: `260`,
    429: `260`,
    43: `5`,
    430: `260`,
    431: `261`,
    432: `262`,
    433: `262`,
    434: `263`,
    435: `264`,
    436: `265`,
    437: `272`,
    438: `272`,
    439: `273`,
    44: `6`,
    440: `273`,
    441: `274`,
    442: `275`,
    443: `275`,
    444: `278`,
    445: `278`,
    446: `279`,
    447: `279`,
    448: `280`,
    449: `280`,
    45: `7`,
    450: `281`,
    451: `282`,
    452: `282`,
    453: `283`,
    454: `284`,
    455: `284`,
    456: `285`,
    457: `285`,
    458: `286`,
    459: `287`,
    46: `8`,
    460: `287`,
    461: `288`,
    462: `289`,
    463: `290`,
    464: `290`,
    465: `291`,
    466: `292`,
    467: `293`,
    468: `294`,
    469: `295`,
    47: `9`,
    470: `295`,
    471: `296`,
    472: `296`,
    473: `297`,
    474: `298`,
    475: `299`,
    476: `300`,
    477: `300`,
    478: `301`,
    479: `301`,
    48: `10`,
    480: `302`,
    481: `303`,
    482: `304`,
    483: `305`,
    484: `305`,
    485: `306`,
    486: `307`,
    487: `308`,
    488: `308`,
    489: `308`,
    49: `11`,
    490: `310`,
    491: `310`,
    492: `311`,
    493: `312`,
    494: `313`,
    495: `314`,
    496: `315`,
    497: `321`,
    498: `321`,
    499: `322`,
    5: `2`,
    50: `11`,
    500: `323`,
    501: `324`,
    502: `324`,
    503: `325`,
    504: `325`,
    505: `325`,
    506: `326`,
    507: `327`,
    508: `328`,
    509: `333`,
    51: `12`,
    510: `333`,
    511: `334`,
    512: `334`,
    513: `335`,
    514: `335`,
    515: `336`,
    516: `337`,
    517: `337`,
    518: `338`,
    519: `339`,
    52: `13`,
    520: `339`,
    521: `340`,
    522: `341`,
    523: `341`,
    524: `342`,
    525: `342`,
    526: `342`,
    527: `342`,
    528: `342`,
    529: `342`,
    53: `14`,
    530: `342`,
    531: `342`,
    532: `342`,
    533: `342`,
    534: `343`,
    535: `343`,
    536: `344`,
    537: `345`,
    538: `346`,
    539: `346`,
    54: `15`,
    540: `347`,
    541: `347`,
    542: `348`,
    543: `348`,
    544: `348`,
    545: `348`,
    546: `348`,
    547: `348`,
    548: `349`,
    549: `349`,
    55: `15`,
    550: `350`,
    551: `351`,
    552: `351`,
    553: `352`,
    554: `353`,
    555: `354`,
    556: `354`,
    557: `355`,
    558: `356`,
    559: `358`,
    56: `16`,
    560: `358`,
    561: `359`,
    562: `360`,
    563: `361`,
    564: `361`,
    565: `361`,
    566: `361`,
    567: `361`,
    568: `361`,
    569: `361`,
    57: `16`,
    570: `361`,
    571: `361`,
    572: `361`,
    573: `361`,
    574: `361`,
    575: `361`,
    576: `361`,
    577: `362`,
    578: `362`,
    579: `362`,
    58: `17`,
    580: `365`,
    581: `365`,
    582: `366`,
    583: `367`,
    584: `368`,
    585: `368`,
    586: `369`,
    587: `369`,
    588: `370`,
    589: `370`,
    59: `18`,
    590: `371`,
    591: `372`,
    592: `373`,
    593: `374`,
    594: `374`,
    595: `375`,
    596: `376`,
    597: `383`,
    598: `383`,
    599: `384`,
    6: `2`,
    60: `18`,
    600: `384`,
    601: `384`,
    602: `385`,
    603: `385`,
    604: `386`,
    605: `386`,
    606: `387`,
    607: `387`,
    608: `388`,
    609: `389`,
    61: `19`,
    610: `389`,
    611: `390`,
    612: `390`,
    613: `391`,
    614: `391`,
    615: `391`,
    616: `392`,
    617: `392`,
    618: `393`,
    619: `393`,
    62: `20`,
    620: `393`,
    621: `394`,
    622: `395`,
    623: `395`,
    624: `396`,
    625: `396`,
    626: `396`,
    627: `397`,
    628: `398`,
    629: `398`,
    63: `21`,
    630: `399`,
    631: `399`,
    632: `399`,
    633: `400`,
    634: `401`,
    635: `401`,
    636: `402`,
    637: `402`,
    638: `402`,
    639: `403`,
    64: `22`,
    640: `404`,
    641: `404`,
    642: `405`,
    643: `405`,
    644: `405`,
    645: `405`,
    646: `405`,
    647: `405`,
    648: `405`,
    649: `405`,
    65: `23`,
    650: `405`,
    651: `405`,
    652: `406`,
    653: `406`,
    654: `407`,
    655: `408`,
    656: `409`,
    657: `409`,
    658: `410`,
    659: `410`,
    66: `24`,
    660: `411`,
    661: `411`,
    662: `411`,
    663: `411`,
    664: `411`,
    665: `411`,
    666: `412`,
    667: `412`,
    668: `413`,
    669: `414`,
    67: `25`,
    670: `415`,
    671: `415`,
    672: `416`,
    673: `417`,
    674: `417`,
    675: `418`,
    676: `419`,
    677: `420`,
    678: `422`,
    679: `423`,
    68: `26`,
    680: `423`,
    681: `424`,
    682: `424`,
    683: `425`,
    684: `425`,
    685: `428`,
    686: `428`,
    687: `429`,
    688: `429`,
    689: `429`,
    69: `27`,
    690: `432`,
    691: `432`,
    692: `433`,
    693: `433`,
    694: `434`,
    695: `435`,
    696: `438`,
    697: `439`,
    698: `440`,
    699: `440`,
    7: `2`,
    70: `27`,
    700: `441`,
    701: `441`,
    702: `442`,
    703: `442`,
    704: `443`,
    705: `443`,
    706: `444`,
    707: `444`,
    708: `445`,
    709: `445`,
    71: `28`,
    710: `446`,
    711: `446`,
    712: `447`,
    713: `449`,
    714: `449`,
    715: `449`,
    716: `449`,
    717: `451`,
    718: `451`,
    719: `452`,
    72: `29`,
    720: `453`,
    721: `453`,
    722: `454`,
    723: `454`,
    724: `454`,
    725: `456`,
    726: `457`,
    727: `457`,
    728: `458`,
    729: `458`,
    73: `30`,
    730: `459`,
    731: `459`,
    732: `459`,
    733: `461`,
    734: `461`,
    735: `462`,
    736: `462`,
    737: `462`,
    738: `463`,
    739: `463`,
    74: `30`,
    740: `463`,
    741: `466`,
    742: `467`,
    743: `468`,
    744: `469`,
    745: `469`,
    746: `470`,
    747: `471`,
    748: `471`,
    749: `472`,
    75: `31`,
    750: `473`,
    751: `473`,
    752: `474`,
    753: `475`,
    754: `476`,
    755: `477`,
    756: `477`,
    757: `478`,
    758: `479`,
    759: `480`,
    76: `32`,
    760: `481`,
    761: `481`,
    762: `482`,
    763: `482`,
    764: `482`,
    765: `485`,
    766: `485`,
    767: `486`,
    768: `487`,
    769: `488`,
    77: `34`,
    770: `488`,
    771: `489`,
    772: `489`,
    773: `490`,
    774: `490`,
    775: `490`,
    776: `491`,
    777: `491`,
    778: `492`,
    779: `492`,
    78: `34`,
    780: `492`,
    781: `492`,
    782: `492`,
    783: `492`,
    784: `493`,
    785: `493`,
    786: `494`,
    787: `495`,
    788: `496`,
    789: `496`,
    79: `34`,
    790: `497`,
    791: `498`,
    792: `500`,
    793: `500`,
    794: `501`,
    795: `501`,
    796: `501`,
    797: `502`,
    798: `502`,
    799: `502`,
    8: `2`,
    80: `34`,
    800: `502`,
    801: `502`,
    802: `502`,
    803: `502`,
    804: `502`,
    805: `502`,
    806: `502`,
    807: `502`,
    808: `502`,
    809: `502`,
    81: `34`,
    810: `502`,
    811: `502`,
    812: `502`,
    813: `502`,
    814: `502`,
    815: `502`,
    816: `502`,
    817: `502`,
    818: `502`,
    819: `502`,
    82: `34`,
    820: `502`,
    821: `502`,
    822: `502`,
    823: `502`,
    824: `502`,
    825: `502`,
    826: `502`,
    827: `502`,
    828: `502`,
    829: `502`,
    83: `34`,
    830: `502`,
    831: `502`,
    832: `502`,
    833: `502`,
    834: `502`,
    835: `502`,
    836: `502`,
    837: `502`,
    838: `502`,
    839: `502`,
    84: `34`,
    840: `502`,
    841: `502`,
    842: `502`,
    843: `502`,
    844: `502`,
    845: `502`,
    846: `502`,
    847: `502`,
    848: `502`,
    849: `502`,
    85: `34`,
    850: `502`,
    851: `502`,
    852: `502`,
    853: `502`,
    854: `502`,
    855: `502`,
    856: `502`,
    857: `502`,
    858: `502`,
    859: `502`,
    86: `34`,
    860: `502`,
    861: `502`,
    862: `502`,
    863: `502`,
    864: `502`,
    865: `502`,
    866: `502`,
    867: `502`,
    868: `502`,
    869: `502`,
    87: `34`,
    870: `502`,
    871: `502`,
    872: `502`,
    873: `502`,
    874: `502`,
    875: `502`,
    876: `502`,
    877: `502`,
    878: `502`,
    879: `502`,
    88: `34`,
    880: `502`,
    881: `502`,
    882: `502`,
    883: `502`,
    884: `502`,
    885: `502`,
    886: `502`,
    887: `502`,
    888: `502`,
    889: `502`,
    89: `34`,
    890: `502`,
    891: `502`,
    892: `502`,
    893: `502`,
    894: `502`,
    895: `502`,
    896: `503`,
    897: `504`,
    898: `504`,
    899: `505`,
    9: `2`,
    90: `34`,
    900: `506`,
    901: `507`,
    902: `507`,
    903: `508`,
    904: `509`,
    905: `510`,
    906: `510`,
    907: `510`,
    908: `510`,
    909: `510`,
    91: `34`,
    910: `510`,
    911: `510`,
    912: `510`,
    913: `510`,
    914: `510`,
    915: `510`,
    916: `511`,
    917: `511`,
    918: `512`,
    919: `513`,
    92: `34`,
    920: `513`,
    921: `513`,
    922: `513`,
    923: `513`,
    924: `513`,
    925: `513`,
    926: `513`,
    927: `513`,
    928: `513`,
    929: `514`,
    93: `34`,
    930: `515`,
    931: `515`,
    932: `515`,
    933: `515`,
    934: `515`,
    935: `515`,
    936: `515`,
    937: `515`,
    938: `515`,
    939: `515`,
    94: `34`,
    940: `516`,
    941: `517`,
    942: `517`,
    943: `518`,
    944: `518`,
    945: `519`,
    946: `520`,
    947: `520`,
    948: `521`,
    949: `521`,
    95: `34`,
    950: `522`,
    951: `522`,
    952: `523`,
    953: `523`,
    954: `524`,
    955: `524`,
    956: `525`,
    957: `525`,
    958: `526`,
    959: `526`,
    96: `34`,
    960: `526`,
    961: `528`,
    962: `528`,
    963: `528`,
    964: `529`,
    965: `529`,
    966: `529`,
    967: `529`,
    968: `531`,
    969: `531`,
    97: `34`,
    970: `532`,
    971: `533`,
    972: `533`,
    973: `535`,
    974: `536`,
    975: `537`,
    976: `537`,
    977: `538`,
    978: `538`,
    979: `539`,
    98: `34`,
    980: `539`,
    981: `541`,
    982: `541`,
    983: `541`,
    984: `541`,
    985: `541`,
    986: `541`,
    987: `541`,
    988: `541`,
    989: `542`,
    99: `34`,
    990: `542`,
    991: `543`,
    992: `543`,
    993: `543`,
    994: `544`,
    995: `544`,
    996: `545`,
    997: `547`,
    998: `547`,
    999: `548`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: {
    _api_Triumvir_support2: 1
    },
  extraPages: 1,
  stateKeys: 5,
  stateSize: 549,
  unsupported: [],
  version: 13,
  warnings: [`Step 2 calls a remote object at /app/index.rsh:165:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable[3]","name":"elem1","type":"address[3]"}],"internalType":"struct T15","name":"v77507","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"indexed":false,"internalType":"struct T4","name":"v1","type":"tuple"}],"name":"Propose","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"indexed":false,"internalType":"struct T1","name":"v1","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"Register","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"indexed":false,"internalType":"struct T4","name":"v2","type":"tuple"}],"name":"Support","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable[3]","name":"elem1","type":"address[3]"}],"indexed":false,"internalType":"struct T15","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"elem0","type":"tuple"}],"internalType":"struct T10","name":"_Triumvir_propose0_68265","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"_Triumvir_support0_68265","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T12","name":"_register0_68265","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v70296","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v70803","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T18","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T19","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T20","name":"v0","type":"tuple"}],"name":"_reach_oe_v70872","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T18","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T19","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T20","name":"v0","type":"tuple"}],"name":"_reach_oe_v70914","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v71433","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info","outputs":[{"components":[{"internalType":"address payable[3]","name":"triumvirs","type":"address[3]"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4[3]","name":"cmds","type":"tuple[3]"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"protoInfo","type":"tuple"}],"internalType":"struct T6","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"v77486","type":"tuple"}],"name":"Triumvir_propose","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v77493","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"v77494","type":"tuple"}],"name":"Triumvir_support","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"elem0","type":"tuple"}],"internalType":"struct T10","name":"_Triumvir_propose0_68265","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"_Triumvir_support0_68265","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T12","name":"_register0_68265","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"internalType":"struct T14","name":"v77510","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v77502","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"v77503","type":"tuple"},{"internalType":"address payable","name":"v77504","type":"address"}],"name":"register","outputs":[{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f19608062003ccc3881900390601f820184168301906001600160401b03821184831017620005245782916040528339810190608081830312620005d65760408051919082016001600160401b0381118382101762000524576040528051825282603f82011215620005d657604051926200007b84620005f7565b839160808101918211620005d657602001915b818310620005b4575050506020810191825243600355604051620000b281620005db565b60008152604051620000c481620005f7565b604051620000d281620005f7565b60603682378152620000e362000712565b6020820152620000f26200062f565b6040820152602082015260006040820152600060608201526080620001166200062f565b910152604051916200012883620005f7565b620001326200065c565b835260208301926200014362000712565b84526040810192620001546200062f565b845260ff600454166200059b577fe709fd8c233b0bc15635f5c1669e54669bd1ddfb315ab0dc1efc8633df64d5ca60a060405133815283516020820152620001a2865160408301906200074a565ba15180159081156200058e575b50156200057557346200055c576004815152600060a08251015280518451528051602085510152805160408551015260008351526019602084510152306040845101526005606084510152601e60808451015260405191620002118362000613565b6200021b6200065c565b835260208301946200022c62000712565b86526040840191600083526060850195620002466200062f565b8752600060808701946040516200025d81620005f7565b6060368237865260a088019482865260c0890197838952518952518a5252518652518252439052604051936200029385620005db565b6200029d6200065c565b85526020850193620002ae62000712565b8552620002ba6200062f565b6040870152604051620002cd81620005f7565b60603682376060870152600060808701525195868652518452516040850152516060840152516080830152600360005543600155620003146040519360208501906200077d565b51600061026084015b600382106200053a5750505080608060408193015180511515610920860152602081015161094086015260018060a01b03604082015116610960860152606081015161098086015201516109a08401526200038260608201516109c08501906200074a565b0151610a20828101919091528152610a4081016001600160401b0381118282101762000524576040528051906001600160401b0382116200052457600254600181811c9116801562000519575b60208210146200050357601f811162000499575b50602092601f831160011462000432575091819260009262000426575b50508160011b916000199060031b1c1916176002555b6040516134579081620008758239f35b01519050388062000400565b821692600260005260206000209160005b858110620004805750836001951062000466575b505050811b0160025562000416565b015160001960f88460031b161c1916905538808062000457565b9192602060018192868501518155019401920162000443565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f840160051c81019160208510620004f8575b601f0160051c01905b818110620004eb5750620003e3565b60008155600101620004dc565b9091508190620004d3565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003cf565b634e487b7160e01b600052604160045260246000fd5b6020610240826200054f60019487516200077d565b019301910190916200031d565b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b90506001541438620001af565b60405163100960cb60e01b815260086004820152602490fd5b82516001600160a01b0381168103620005d6578152602092830192016200008e565b600080fd5b60a081019081106001600160401b038211176200052457604052565b606081019081106001600160401b038211176200052457604052565b60e081019081106001600160401b038211176200052457604052565b604051906200063e82620005db565b60006080838281528260208201528260408201528260608201520152565b6040908151916200066d8362000613565b6000808452815190918491608081016001600160401b03811182821017620006fe5790829160c09493528481528151620006a781620005f7565b85815285602082015285838201526020820152848282015284606082015260208301528381830152620006d96200062f565b606083015251620006ea81620005f7565b606036823760808201528260a08201520152565b634e487b7160e01b85526041600452602485fd5b604051906200072182620005f7565b8160005b6060811062000732575050565b6020906200073f6200065c565b818401520162000725565b6000915b600383106200075c57505050565b81516001600160a01b0316815260019290920191602091820191016200074e565b805160068110156200085e57825260208181015180516001600160a01b0390811683860152918101518051939060028510156200085e57606060c093856040819461022099828c015260208101511515858c015201511660808901528260408201511660a0890152015116828601526040810151151560e08601526080606082015180516101008801526020810151610120880152604081015161014088015284606082015116610160880152015115156101808601526200084960808201516101a08701906200074a565b60a08101511515610200860152015116910152565b634e487b7160e01b600052602160045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a6febfe146100b85780631e93b0f1146100af57806330cf5995146100a65780633b02a7171461009d5780634012e02e14610094578063832307571461008b578063ab53f2c6146100825763dfcc43890361000e5761007d610708565b61000e565b5061007d610693565b5061007d610674565b5061007d610595565b5061007d6102f5565b5061007d6101aa565b5061007d61018b565b6102603660031901126101745761017061015e60606100d636610179565b6101576100e1610b22565b80926100eb61179d565b906004358252610100602083019136906116f1565b81526040519061010f82610839565b61011761179d565b825260208201926101266117df565b8452518251525160208251015260018251525160408251015261014761182d565b9060008252516020820152611d63565b0151151590565b60405190151581529081906020820190565b0390f35b600080fd5b61024090602319011261017457602490565b5034610174576000366003190112610174576020600354604051908152f35b50610580366003190112610174576101c0610b22565b604051906101cd82610839565b600435825261056036602319011261017457604051916101ec83610861565b60243560038110156101745783526102403660431901126101745761024d926040516102178161087c565b61022036611626565b81526020820152610230366132f2565b604082015261023e3661339f565b60608201526020820152611d63565b60405160008152602090f35b6001600160a01b031690565b6001600160a01b0381160361017457565b610264359061028482610265565b565b610224359061028482610265565b6104c4359061028482610265565b359061028482610265565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b60a08101929161028491906102ad565b5060a03660031901126101745760043561030e81610265565b6060366023190112610174576080610170916103d46084359161033083610265565b610338610a33565b50610341610b22565b9283916103ba6103b06103526117b9565b6001600160a01b039384168152936020850161036d3661113a565b81528460408701921682526040519461038586610839565b61038d6117b9565b8652602086019661039c6117df565b885251168551525160208551015251610259565b6040835101610e92565b6103c5825160029052565b5160608251015261014761182d565b0151604051918291826102e5565b6000915b600383106103f357505050565b81516001600160a01b0316815260019290920191602091820191016103e6565b50634e487b7160e01b600052602160045260246000fd5b6006111561043457565b610284610413565b6002111561043457565b60409080516104548161043c565b83526020818101511515908401528101516001600160a01b0316910152565b9061022060c0610284938051600681101561051e575b84526020810151606060018060a01b03918281511660208801526104b560208201516040890190610446565b8260408201511660a0880152015116828501526104db604082015160e086019015159052565b6104ee60608201516101008601906102ad565b61050160808201516101a08601906103e2565b60a0810151151561020085015201516001600160a01b0316910152565b610526610413565b610489565b906000905b6003821061053d57505050565b6020610240826105506001948751610473565b01930191019091610530565b6102849092919261072060406107c08301956105798482516103e2565b61058b6020820151606086019061052b565b01519101906102ad565b5034610174576000366003190112610174576105af610ae5565b506101706105bb610b22565b6105c3610b59565b906105d2600360005414610ea1565b6105da61090b565b916105ef602093848082518301019101610dd9565b9061064661063a60408401606081510151845152868151015187855101526080815101516040855101526106336106296040835101610e85565b6060865101610e92565b5151151590565b60808351019015159052565b836060830151928183019384515201518483510152516040825101525191829101526040519182918261055c565b5034610174576000366003190112610174576020600154604051908152f35b5034610174576000806003193601126107055780546106b061090b565b906040519283918252602090604082840152835191826040850152815b8381106106ee57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016106cd565b80fd5b50610240366003190112610174576101706040610723610b22565b6107d4818351610732816108cd565b60043561073e81610b7b565b8152610749366111ca565b602082015260e43561075a81610b9a565b85820152610767366113ef565b60608201526107753661153b565b60808201526102043561078781610b9a565b60a0820152610794610286565b60c082015284516107a481610839565b6107ac611783565b815260208101916107bb6117df565b835281515260008251525160208251015261014761182d565b015160405190151581529081906020820190565b90600182811c92168015610818575b602083101461080257565b634e487b7160e01b600052602260045260246000fd5b91607f16916107f7565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761085457604052565b61085c610822565b604052565b608081019081106001600160401b0382111761085457604052565b602081019081106001600160401b0382111761085457604052565b606081019081106001600160401b0382111761085457604052565b60a081019081106001600160401b0382111761085457604052565b60e081019081106001600160401b0382111761085457604052565b601f909101601f19168101906001600160401b0382119082101761085457604052565b604051906000826002549161091f836107e8565b8083526001938085169081156109935750600114610945575b50610284925003836108e8565b6002600090815260008051602061342b83398151915294602093509091905b81831061097b575050610284935082010138610938565b85548884018501529485019487945091830191610964565b905061028494506020925060ff191682840152151560051b82010138610938565b604051906105c082016001600160401b0381118382101761085457604052565b604051906109e182610897565b6060368337565b604051906109f582610897565b60006040838281528260208201520152565b60405190610a1482610861565b6000606083828152610a246109e8565b60208201528260408201520152565b60405190610a40826108b2565b60006080838281528260208201528260408201528260608201520152565b60405190610a6b826108cd565b600060c083828152610a7b610a07565b6020820152826040820152610a8e610a33565b6060820152604051610a9f81610897565b606036823760808201528260a08201520152565b60405190610ac082610897565b8160005b60608110610ad0575050565b602090610adb610a5e565b8184015201610ac4565b60405190610af282610897565b81604051610aff81610897565b60603682378152610b0e610ab3565b60208201526040610b1d610a33565b910152565b60405190610b2f826108b2565b8160008152610b3c610ae5565b602082015260006040820152600060608201526080610b1d610a33565b60405190610b6682610839565b81610b6f610a33565b81526020610b1d610ae5565b6006111561017457565b519061028482610265565b6002111561017457565b8015150361017457565b519061028482610b9a565b809291039160c083126101745760405190610bc982610861565b606082948251610bd881610265565b8452601f19011261017457610b1d60a0606092604051610bf781610897565b6020820151610c0581610b90565b81526040820151610c1581610b9a565b602082015284820151610c2781610265565b60408201526020860152610c3d60808201610b85565b604086015201610b85565b91908260a091031261017457604051610c60816108b2565b60808082948051845260208101516020850152604081015160408501526060810151610c8b81610265565b6060850152015191610c9c83610b9a565b0152565b9080601f830112156101745760405191610cb983610897565b82906060810192831161017457905b828210610cd55750505090565b602080918351610ce481610265565b815201910190610cc8565b919091610240818403126101745760c0610b1d61022060405193610d12856108cd565b610d6485978251610d2281610b7b565b8752610d318160208501610baf565b6020880152610d4260e08401610ba4565b6040880152610d55816101008501610c48565b60608801526101a08301610ca0565b6080860152610d766102008201610ba4565b60a086015201610b85565b91908260a091031261017457604051610d99816108b2565b60808082948051610da981610b9a565b8452602081015160208501526040810151610dc381610265565b6040850152606081015160608501520151910152565b610a20818303126101745760405191610df1836108b2565b610dfb8183610cef565b83528061025f8301121561017457604051610e1581610897565b806109008401918383116101745761024090818601905b848210610e6c5750505091610e4e81610e5d93610a0096956020890152610d81565b60408601526109a08301610ca0565b60608401520151608082015290565b60208391610e7a8885610cef565b815201910190610e2c565b516001600160a01b031690565b6001600160a01b039091169052565b15610ea857565b60405163100960cb60e01b815260076004820152602490fd5b15610ec857565b60405163100960cb60e01b8152600b6004820152602490fd5b15610ee857565b60405163100960cb60e01b8152600c6004820152602490fd5b15610f0857565b60405163100960cb60e01b8152600d6004820152602490fd5b15610f2857565b60405163100960cb60e01b8152601e6004820152602490fd5b15610f4857565b60405163100960cb60e01b8152601f6004820152602490fd5b15610f6857565b60405163100960cb60e01b815260136004820152602490fd5b15610f8857565b60405163100960cb60e01b815260146004820152602490fd5b15610fa857565b60405163100960cb60e01b815260156004820152602490fd5b15610fc857565b60405163100960cb60e01b815260166004820152602490fd5b15610fe857565b60405163100960cb60e01b815260176004820152602490fd5b1561100857565b60405163100960cb60e01b815260186004820152602490fd5b1561102857565b60405163100960cb60e01b815260196004820152602490fd5b1561104857565b60405163100960cb60e01b8152601d6004820152602490fd5b1561106857565b60405163100960cb60e01b8152601b6004820152602490fd5b1561108857565b60405163100960cb60e01b8152600e6004820152602490fd5b156110a857565b60405163100960cb60e01b8152600f6004820152602490fd5b156110c857565b60405163100960cb60e01b815260106004820152602490fd5b156110e857565b60405163100960cb60e01b815260116004820152602490fd5b1561110857565b60405163100960cb60e01b815260126004820152602490fd5b610244359061028482610b9a565b359061028482610b9a565b6060906023190112610174576040519061115382610897565b8160243561116081610b90565b815260443561116e81610b9a565b6020820152604060643591610c9c83610265565b6060906083190112610174576040519061119b82610897565b816084356111a881610b90565b815260a4356111b681610b9a565b6020820152604060c43591610c9c83610265565b9060c0602319830112610174576040516111e381610861565b606081936024356111f381610265565b835260431901126101745760405161120a81610897565b60443561121681610b90565b815260643561122481610b9a565b602082015260843561123581610265565b6040820152602082015260a43561124b81610265565b6040820152606060c43591610c9c83610265565b9060c06102c3198301126101745760405161127981610861565b606081936102c43561128a81610265565b83526102e3190112610174576040516112a281610897565b6102e4356112af81610b90565b8152610304356112be81610b9a565b6020820152610324356112d081610265565b60408201526020820152610344356112e781610265565b604082015260606103643591610c9c83610265565b809291039160c08312610174576040519061131682610861565b60608294823561132581610265565b8452601f1901126101745760a060609160405161134181610897565b602082013561134f81610b90565b8152604082013561135f81610b9a565b60208201528382013561137181610265565b60408201526020850152608081013561138981610265565b6040850152013591610c9c83610265565b60a09061014319011261017457604051906113b4826108b2565b816101443581526101643560208201526101843560408201526101a4356113da81610265565b606082015260806101c43591610c9c83610b9a565b60a0906101031901126101745760405190611409826108b2565b816101043581526101243560208201526101443560408201526101643561142f81610265565b606082015260806101843591610c9c83610b9a565b60a0906103a3190112610174576040519061145e826108b2565b816103a43581526103c43560208201526103e43560408201526104043561148481610265565b606082015260806104243591610c9c83610b9a565b91908260a0910312610174576040516114b1816108b2565b608080829480358452602081013560208501526040810135604085015260608101356114dc81610265565b6060850152013591610c9c83610b9a565b806102031215610174576040519061150482610897565b81610244918211610174576101e4905b8282106115215750505090565b60208091833561153081610265565b815201910190611514565b806101c31215610174576040519061155282610897565b81610204918211610174576101a4905b82821061156f5750505090565b60208091833561157e81610265565b815201910190611562565b80610463121561017457604051906115a082610897565b816104a491821161017457610444905b8282106115bd5750505090565b6020809183356115cc81610265565b8152019101906115b0565b9080601f8301121561017457604051916115f083610897565b82906060810192831161017457905b82821061160c5750505090565b60208091833561161b81610265565b8152019101906115ff565b9061024060431983011261017457604051611640816108cd565b809260443561164e81610b7b565b825260c0606319820112610174576116d59060405161166c81610861565b60643561167881610265565b815261168382611182565b602082015260e43561169481610265565b6040820152610104356116a681610265565b60608201526020840152610124356116bd81610b9a565b60408401526116cb8161139a565b60608401526114ed565b60808201526116e2611121565b60a082015260c0610b1d610276565b919091610240818403126101745760c0610b1d61022060405193611714856108cd565b6117668597823561172481610b7b565b875261173381602085016112fc565b602088015261174460e0840161112f565b6040880152611757816101008501611499565b60608801526101a083016115d7565b6080860152611778610200820161112f565b60a0860152016102a2565b604051906117908261087c565b81611799610a5e565b9052565b604051906117aa82610839565b81600081526020610b1d610a5e565b604051906117c682610897565b60006040838281526117d66109e8565b60208201520152565b604051906117ec82610861565b81600081526040516117fd8161087c565b611805610a5e565b8152602082015261181461179d565b60408201526060610b1d6117b9565b6003111561043457565b6040519061183a82610839565b81600081526020610b1d6117df565b6040519061185682610839565b6000825260405160208361186983610839565b60405161187581610839565b6000815260008382015283526000828401520152565b6118936109b4565b9061189c611783565b825260008060208401526118ae610a33565b60408401528060608401526118c16109e8565b60808401526118ce6109e8565b60a08401526118db6109e8565b60c08401528060e08401526118ee6109e8565b61010084015280610120840152611903610a33565b610140840152806101608401526119186109e8565b6101808401526119266109e8565b6101a0840152806101c084015261193b6109e8565b6101e084015261194961179d565b6102008401526119576109e8565b6102208401526119656109e8565b6102408401526119736109e8565b610260840152806102808401526119886109e8565b6102a08401526119966109e8565b6102c08401526119a46109e8565b6102e0840152806103008401526119b96109e8565b6103208401526119c7610ab3565b6103408401526119d5610a07565b610360840152806103808401526119ea610a33565b6103a08401526119f8611849565b6103c0840152611a06611849565b6103e08401528061040084015280610420840152611a22610a33565b610440840152611a30611849565b610460840152611a3e611849565b610480840152611a4c610a33565b6104a0840152611a5a610a33565b6104c0840152611a686109d4565b6104e08401528061050084015280610520840152611a846117b9565b610540840152611a92610a33565b610560840152806105808401526105a0830152565b90610580909392936040606060206105a086019760018060a01b038095168752805182880152015180516003811015611b36575b83870152611af160208201518388019051610473565b611b0f60208483015180516102a08a015201516102c0880190610473565b015182815116610500860152611b2e6020820151610520870190610446565b015116910152565b611b3e610413565b611adb565b516003811015611b505790565b611b58610413565b90565b6001600160a01b03918216815260a08101949390926080929190611b83906020860190610446565b16910152565b60405190611b96826108cd565b600060c083611ba3610a5e565b8152610a7b610ab3565b50634e487b7160e01b600052601160045260246000fd5b6001906000198114611bd4570190565b611bdc611bad565b0190565b906003811015611bf15760051b0190565b634e487b7160e01b600052603260045260246000fd5b51611b588161043c565b610240810192916102849190610473565b6001600160a01b0390911681526020810191909152610280810192916102849160400190610473565b516006811015611b505790565b506040513d6000823e3d90fd5b6001600160a01b03909116815260c08101929161028491602001906102ad565b3d15611ccd573d906001600160401b038211611cc0575b60405191611cb4601f8201601f1916602001846108e8565b82523d6000602084013e565b611cc8610822565b611c9c565b606090565b8091039060608212610174576040805192611cec84610839565b12610174576040908151611cff81610839565b815181526020820151602082015283520151602082015290565b815181526020918201518051805184840152830151604083015290910151606082015260800190565b6001600160a01b039091168152610260810192916102849160200190610473565b919091611d6e61188b565b90600393611d7f8560005414610ec1565b6020611d9a611d8c61090b565b828082518301019101610dd9565b92611db6611db1611dad60045460ff1690565b1590565b610ee1565b7f7dc5b063ebecd5e4f9a2a46896f69134a3f12fab54c98e10ef56622c725ae9f660405180611de6843383611aa7565b0390a1611dfe81518015908115612eee575b50610f01565b01611e098151611b43565b611e1281611823565b6123d5576020611e289151015180855251611c4b565b611e318161042a565b61227e57600160208401525b611e52611e4d6020850151151590565b611081565b60808301946000865152600060208751015285519560c08501968752600096606085019760e08701906101008801905b8a86821061220857505050506001611eb491518060a089015251611ea58161043c565b611eae8161043c565b146110a1565b611ebe34156110c1565b611ec9855151611c4b565b611ed28161042a565b6120a85760016101208601525b611ef5611ef0610120870151151590565b6110e1565b516101a08501908152906101e085016101c0860160005b838110612028575050505094611ff2608093926000604061028498995192611f5160016101808b019580875251611f428161043c565b611f4b8161043c565b14611101565b8151600081527f92bc41003a3070f6a53f66db066aba45fabde9adc6b2fd4490ed5e09aa078d7490602090a101527f510fa3e00163331e7163ef9e01f872b444c3d8848dda15e731d1789d76c63618611fb38751516040519182913383611d42565b0390a1611fbe611b89565b95845187526020850151916001611fd58251611c07565b611fde8161043c565b0361201f575160400151905b515191612f7c565b6020850152600060408501526040820151606085015251828401524360a0840152015160c082015261326c565b50600090611fea565b8061204861204261203d612095948e51611be0565b610e85565b84610e92565b612053845160019052565b806040855101526120648651611c07565b61206d8161043c565b6120a15761208361207e8451610259565b610259565b33145b1561209a5783515b8652611bc4565b611f0c565b855161208e565b6000612086565b60016120b5865151611c4b565b6120be8161042a565b036120d15760016101208601525b611edf565b60026120de865151611c4b565b6120e78161042a565b03612191576060855151015161014086019080825260648151106000146121895760206064910151105b1561217c5761213a81516121316040820151916020810151905190612efa565b14610160880152565b61016086015115612175576064604082510151105b1561216a5760406120cc9151015115155b1515610120870152565b506120cc6000612160565b600061214f565b600061016087015261213a565b506000612111565b8161219d865151611c4b565b6121a68161042a565b036121b8576001610120860152611edf565b60046121c5865151611c4b565b6121ce8161042a565b036121e0576001610120860152611edf565b60056121ed865151611c4b565b6121f68161042a565b036120cc576001610120860152611edf565b9061222361221d61203d8361226b9551611be0565b85610e92565b61222e835160019052565b8060408451015261223f8551611c07565b6122488161043c565b6122775761225961207e8551610259565b33145b156122705782515b8552611bc4565b611e82565b8451612264565b600061225c565b600161228b845151611c4b565b6122948161042a565b036122a657600160208401525b611e3d565b60026122b3845151611c4b565b6122bc8161042a565b036123615760608351510151604084019080825260648151106000146123595760206064910151105b1561234d5761230d81516123056040820151916020810151905190612efa565b146060860152565b606084015115612346576064604082510151105b1561233b5760406122a19151015115155b15156020850152565b506122a16000612332565b6000612321565b6000606085015261230d565b5060006122e5565b8461236d845151611c4b565b6123768161042a565b036123875760016020840152611e3d565b6004612394845151611c4b565b61239d8161042a565b036123ae5760016020840152611e3d565b60056123bb845151611c4b565b6123c48161042a565b036122a15760016020840152611e3d565b60016123e5829794969751611b43565b6123ee81611823565b03612d5c5782604061240b92510151806102008701525110610f61565b610220830160008151526000602082510152805161026085019081526000610280860190876102a08801915b878110612d3e57505050505161246a60016102408701928084525161245b8161043c565b6124648161043c565b14610f81565b6102008501515190600161247e8251611c07565b6124878161043c565b03612d35575160400151905b03612d2b576124a26000610fa1565b612509602061020086015101516040516124d2816124c4602082019485611c11565b03601f1981018352826108e8565b5190206124ea60208801516102008801515190611be0565b51604051612500816124c4602082019485611c11565b51902014610fc1565b6125133415610fe1565b516102e084019081526103008401610320850160005b858110612d0e575050506000916060915161256160016102c0880192808452516125528161043c565b61255b8161043c565b14611001565b610200860151519060016125758251611c07565b61257e8161043c565b148514612d06575160400151905b148314612cfc5761259c83611021565b6125b3602087015161020087015151885191612f7c565b610340860152604051600081527fbb79beac4d16acd684a33a62f93063638c04358f4a51b5f50f1ad5c3610391d590602090a101527f1ca272bbb6018d7b99180311121f45ec91a0b47a19077a7badd69e3dbd0db37e6102008301515161261e816020870151611be0565b51906126306040519283923384611c22565b0390a161265161264b60208501516102008501515190611be0565b51611c4b565b61265a8161042a565b61299257506020612675818401516102008401515190611be0565b5101519161268e60206103608401948086520151611c07565b6126978161043c565b61284457608081836127b1600080612757610284998261276b604061207e9b019a8b9361270c612701606087510151966103a08d01978851526020815101516020895101528e815101516040895101526106336126f76040835101610e85565b60608a5101610e92565b8d8751019015159052565b610580479a01998a52612727600160ff196004541617600455565b6127656127376060835101610e85565b9551604051978891602083019863038da9cb60e21b8a5260248401611c65565b03601f1981018852876108e8565b51610e85565b9251925af19161278361277c611c85565b8094612f4c565b5061279360ff1960045416600455565b4790519003916103c087019283515260208082518301019101611cd2565b60208251015251927fcd28b20d5944b9ce7f4201314aee1315e948d5aa619d6851cb5cacbe357be2546127f26103e087019580875260405191829182611d19565b0390a161280184515115611061565b61034061280c611b89565b958351875201516020860152600060408601525160608501526060810151828501524360a085015201519051510160c082015261326c565b6001612854602085510151611c07565b61285d8161043c565b1461286757505050565b608061207e91836129426000806127578961289961288f604060206102849e51015101610e85565b6104008801610e92565b826128fc604089019a8b936128e1612701606087510151966104408d01978851526020815101516020895101528e815101516040895101526106336126f76040835101610e85565b6105a0479a01998a52612727600160ff196004541617600455565b9251925af19161291461290d611c85565b8094612f1c565b5061292460ff1960045416600455565b47905190039161046087019283515260208082518301019101611cd2565b60208251015251927f21bbe4211084c54ccd3776ccb69f8f50984f9c373b265d0a9192ac03ff0be8e661298361048087019580875260405191829182611d19565b0390a161280184515115611041565b60016129ac61264b60208601516102008601515190611be0565b6129b58161042a565b03612a0457506080610284926103406129cc611b89565b82518152930151602084015260016040840152604081015160608401526060810151828401524360a0840152015160c082015261326c565b6002612a1e61264b60208601516102008601515190611be0565b612a278161042a565b03612aeb57506080826060612a4a60206102849601516102008601515190611be0565b5101516040612a63846104a08701938085520151151590565b91612a766104c087019384519015159052565b602081510151602084510152612a9b612a926060835101610e85565b83855101610e92565b8051516060845101525101518382510152610340612ab7611b89565b948351865201516020850152600060408501525160608401526060810151828401524360a0840152015160c082015261326c565b612b0361264b60208501516102008501515190611be0565b612b0c8161042a565b03612b775760808281612b2d60206102849601516102008601515190611be0565b5101516104e08401908152610340612b43611b89565b948351865201516020850152600060408501526040820151606085015251828401524360a0840152015160c082015261326c565b6004612b9161264b60208501516102008501515190611be0565b612b9a8161042a565b03612be857608061028492610340612bb0611b89565b93825185520151602084015260006040840152604081015160608401526060810151828401524360a0840152015160c082015261326c565b6005612c0261264b60208501516102008501515190611be0565b612c0b8161042a565b14612c14575050565b81612ccb612c3c60c0612c3560206102849701516102008701515190611be0565b5101610e85565b91612c4c61050085019384610e92565b60808101805190916060914781811015612cef5750506000808080805b612c7e61207e6105208d019b838d5251610259565b828215612ce6575bf115612cd9575b610340612c98611b89565b96825188520151602087015260006040870152604081015182870152015160808501524360a08501528251905190612efa565b9051900360c082015261326c565b612ce1611c58565b612c8d565b506108fc612c86565b6000808093819303612c69565b61259c6001611021565b50839061258c565b8061222361221d61203d612d269460608d0151611be0565b612529565b6124a26001610fa1565b50600090612493565b61222361221d61203d836060612d55960151611be0565b8890612437565b939091506002612d6c8551611b43565b612d7581611823565b14612d81575b50505050565b7ffe325ddb46ceb5c5c02d1b18bc5e927e25bc0ec2cf49203c2ae8c0c355b290cf6080926060612ee59651015190612dd56105408701928084523390612dce60018060a01b039151610259565b1614610f21565b612ddf3415610f41565b8460408501966105606060895101519101908151526020885101516020825101528188510151604082510152612e25612e1b60408a5101610e85565b6060835101610e92565b612e3e612e33895151151590565b838351019015159052565b7f5f72946272b2936805e16fa906af4062bd8b2a6e3def3ea19a4da99c96b57577612e708251604051918291826102e5565b0390a15191015251612e828151610259565b612ea3612e9760406020850151940151610259565b60405193849384611b5b565b0390a1612eae611b89565b928151845260208201516020850152600060408501525160608401526060810151828401524360a0840152015160c082015261326c565b38808080612d7b565b90506001541438611df8565b9190820191828111612f0f575b821061017457565b612f17611bad565b612f07565b15612f245790565b805115612f3357805190602001fd5b60405163100960cb60e01b8152601c6004820152602490fd5b15612f545790565b805115612f6357805190602001fd5b60405163100960cb60e01b8152601a6004820152602490fd5b9291612f86610ab3565b9360005b60038110612fad57505090612faa91612fa38286611be0565b5283611be0565b50565b80612fbb612fd79284611be0565b51612fc68289611be0565b52612fd18188611be0565b50611bc4565b612f8a565b60405190612fe9826108b2565b6000608083612ff6610a5e565b8152613000610ab3565b602082015261300d610a33565b604082015260405161301e81610897565b606036823760608201520152565b919091610a006080610a20830194613045848251610473565b613058602082015161024086019061052b565b604081810151805115156109008701526020810151610920870152908101516001600160a01b0316610940860152606080820151610960870152908301516109808601528101516130ae906109a08601906103e2565b0151910152565b8181106130c0575050565b600081556001016130b5565b90601f82116130d9575050565b6102849160026000526020600020906020601f840160051c83019310613107575b601f0160051c01906130b5565b90915081906130fa565b80519091906001600160401b0381116131e7575b613139816131346002546107e8565b6130cc565b602080601f8311600114613175575081929360009261316a575b50508160011b916000199060031b1c191617600255565b015190503880613153565b6002600052601f1983169490919060008051602061342b833981519152926000905b8782106131cf5750508360019596106131b6575b505050811b01600255565b015160001960f88460031b161c191690553880806131ab565b80600185968294968601518155019501930190613197565b6131ef610822565b613125565b6131ff6002546107e8565b806132075750565b601f811160011461321a57506000600255565b600260005261325f90601f0160051c60008051602061342b833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6130b5565b6000602081208160025555565b60408101511561328d5750600080556132856000600155565b6102846131f4565b6124c46132ed6102849260c06132a1612fdc565b9180518352602081015160208401526060810151604084015260808101516060840152015160808201526132d56003600055565b6132de43600155565b6040519283916020830161302c565b613111565b9061026061028319830112610174576040519161330e83610839565b610284358352826102406102a3198301126101745760209061337760405193613336856108cd565b6102a43561334381610b7b565b855261334e8161125f565b848601526103843561335f81610b9a565b604086015261336d81611444565b6060860152611589565b60808401526104a43561338981610b9a565b60a0840152613396610294565b60c08401520152565b9060a06104e319830112610174576040516133b981610897565b606081936104e4356133ca81610265565b8352610503190112610174576040516133e281610897565b610504356133ef81610b90565b8152610524356133fe81610b9a565b60208201526105443561341081610265565b6040820152602082015260406105643591610c9c8361026556fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 15564,
  version: 9,
  views: {
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
