// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    calcAmtIn_: ((_v67902, _v67903, _v67904, _v67905 ) => {
        const v67902 = stdlib.protect(ctc0, _v67902, null);
        const v67903 = stdlib.protect(ctc0, _v67903, null);
        const v67904 = stdlib.protect(ctc0, _v67904, null);
        const v67905 = stdlib.protect(ctc0, _v67905, null);
      
      const v67907 = stdlib.safeSub(v67903, v67902);
      const v67908 = stdlib.cast("UInt", "UInt256", v67907, false, true);
      const v67909 = stdlib.cast("UInt", "UInt256", v67904, false, true);
      const v67910 = stdlib.cast("UInt", "UInt256", v67902, false, true);
      const v67911 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v67905);
      const v67912 = stdlib.cast("UInt", "UInt256", v67911, false, true);
      const v67913 = stdlib.safeMul256(v67910, v67912);
      const v67914 = stdlib.safeMul256(v67908, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v67915 = stdlib.safeMul256(v67913, v67909);
      const v67916 = stdlib.safeDiv256(v67915, v67914);
      const v67917 = stdlib.cast("UInt256", "UInt", v67916, false, true);
      const v67918 = stdlib.safeAdd(v67917, stdlib.checkedBigNumberify('252:39:decimal', stdlib.UInt_max, '1'));
      
      return v67918;}),
    computeMint_: ((_v67919, _v67920, _v67921 ) => {
        const v67919 = stdlib.protect(ctc1, _v67919, null);
        const v67920 = stdlib.protect(ctc1, _v67920, null);
        const v67921 = stdlib.protect(ctc1, _v67921, null);
      
      const v67922 = v67919.A;
      const v67923 = v67919.B;
      const v67924 = v67920.A;
      const v67925 = v67920.B;
      const v67927 = v67921.B;
      let v67928;
      const v67935 = stdlib.eq(v67927, stdlib.checkedBigNumberify('337:19:decimal', stdlib.UInt_max, '0'));
      if (v67935) {
        const v67936 = stdlib.cast("UInt", "UInt256", v67922, false, true);
        const v67937 = stdlib.cast("UInt", "UInt256", v67923, false, true);
        const v67938 = stdlib.safeMul256(v67936, v67937);
        const v67939 = stdlib.sqrt256(v67938);
        const v67940 = stdlib.cast("UInt256", "UInt", v67939, false, true);
        v67928 = v67940;
        }
      else {
        const v67949 = stdlib.safeMuldiv(v67922, v67927, v67924);
        const v67956 = stdlib.safeMuldiv(v67923, v67927, v67925);
        const v67958 = stdlib.lt(v67949, v67956);
        const v67959 = v67958 ? v67949 : v67956;
        v67928 = v67959;
        }
      
      return v67928;}),
    computeSwap_: ((_v67960, _v67961, _v67962, _v67963 ) => {
        const v67960 = stdlib.protect(ctc2, _v67960, null);
        const v67961 = stdlib.protect(ctc1, _v67961, null);
        const v67962 = stdlib.protect(ctc1, _v67962, null);
        const v67963 = stdlib.protect(ctc4, _v67963, null);
      
      const v67964 = v67961.A;
      const v67965 = v67961.B;
      const v67966 = v67962.A;
      const v67967 = v67962.B;
      const v67969 = v67963.protoFee;
      const v67970 = v67963.lpFee;
      const v67971 = v67963.totFee;
      const v67972 = stdlib.lt(v67969, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v67973 = stdlib.lt(v67970, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v67974 = v67972 ? v67973 : false;
      let v67977;
      if (v67974) {
        const v67975 = stdlib.safeAdd(v67970, v67969);
        const v67976 = stdlib.eq(v67971, v67975);
        v67977 = v67976;
        }
      else {
        v67977 = false;
        }
      const v67978 = stdlib.lt(v67971, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v67979 = v67977 ? v67978 : false;
      const v67980 = stdlib.gt(v67971, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v67981 = v67979 ? v67980 : false;
      stdlib.assert(v67981, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v67983 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v67983, {
        at: 'reach standard library:57:5:application',
        fs: ['at 328:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v67999;
      if (v67960) {
        const v68004 = stdlib.eq(v67965, stdlib.checkedBigNumberify('./index.rsh:315:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v68004, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:315:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v68027 = stdlib.cast("UInt", "UInt256", v67967, false, true);
        const v68028 = stdlib.cast("UInt", "UInt256", v67966, false, true);
        const v68029 = stdlib.cast("UInt", "UInt256", v67964, false, true);
        const v68030 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v67971);
        const v68031 = stdlib.cast("UInt", "UInt256", v68030, false, true);
        const v68032 = stdlib.safeMul256(v68029, v68031);
        const v68033 = stdlib.safeMul256(v68028, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v68034 = stdlib.safeAdd256(v68033, v68032);
        const v68035 = stdlib.safeMul256(v68032, v68027);
        const v68036 = stdlib.safeDiv256(v68035, v68034);
        const v68037 = stdlib.cast("UInt256", "UInt", v68036, false, true);
        const v68044 = stdlib.safeMul(v67969, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v68045 = stdlib.safeDiv(v68044, v67971);
        const v68052 = stdlib.safeAdd(v67966, v67964);
        const v68060 = stdlib.safeMuldiv(v67964, v67967, v68052);
        const v68065 = stdlib.safeSub(v68060, v68037);
        const v68071 = stdlib.safeMuldiv(v68065, v68045, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v68076 = stdlib.safeMuldiv(v67964, v67969, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v68084 = stdlib.safeMuldiv(v68076, v67967, v68052);
        const v68085 = stdlib.gt(v68084, v68071);
        const v68086 = [v68076, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v68087 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v68071];
        const v68088 = v68085 ? v68086 : v68087;
        const v68090 = v68088[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v68091 = v68088[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v68092 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v68037
          };
        const v68093 = {
          A: v68090,
          B: v68091
          };
        const v68094 = [v68092, v68093, v67964];
        v67999 = v68094;
        }
      else {
        const v68095 = stdlib.eq(v67964, stdlib.checkedBigNumberify('./index.rsh:320:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v68095, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:320:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v68118 = stdlib.cast("UInt", "UInt256", v67966, false, true);
        const v68119 = stdlib.cast("UInt", "UInt256", v67967, false, true);
        const v68120 = stdlib.cast("UInt", "UInt256", v67965, false, true);
        const v68121 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v67971);
        const v68122 = stdlib.cast("UInt", "UInt256", v68121, false, true);
        const v68123 = stdlib.safeMul256(v68120, v68122);
        const v68124 = stdlib.safeMul256(v68119, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v68125 = stdlib.safeAdd256(v68124, v68123);
        const v68126 = stdlib.safeMul256(v68123, v68118);
        const v68127 = stdlib.safeDiv256(v68126, v68125);
        const v68128 = stdlib.cast("UInt256", "UInt", v68127, false, true);
        const v68135 = stdlib.safeMul(v67969, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v68136 = stdlib.safeDiv(v68135, v67971);
        const v68143 = stdlib.safeAdd(v67967, v67965);
        const v68151 = stdlib.safeMuldiv(v67965, v67966, v68143);
        const v68156 = stdlib.safeSub(v68151, v68128);
        const v68162 = stdlib.safeMuldiv(v68156, v68136, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v68167 = stdlib.safeMuldiv(v67965, v67969, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v68175 = stdlib.safeMuldiv(v68167, v67966, v68143);
        const v68176 = stdlib.gt(v68175, v68162);
        const v68177 = [v68167, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v68178 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v68162];
        const v68179 = v68176 ? v68177 : v68178;
        const v68181 = v68179[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v68182 = v68179[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v68183 = {
          A: v68128,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v68184 = {
          A: v68182,
          B: v68181
          };
        const v68185 = [v68183, v68184, v67965];
        v67999 = v68185;
        }
      const v68186 = v67999[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '0')];
      const v68187 = v67999[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '1')];
      const v68189 = v68186.A;
      const v68190 = v68186.B;
      const v68191 = v68187.A;
      const v68192 = v68187.B;
      const v68193 = {
        A: v68189,
        B: v68190
        };
      const v68194 = {
        A: v68191,
        B: v68192
        };
      const v68195 = [v68193, v68194];
      
      return v68195;})
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
      const [v69896, v69908, v69910, v69911, v69915] = svs;
      return (await ((async () => {
        
        const v69959 = v69910.protoFee;
        const v69960 = v69910.lpFee;
        const v69961 = v69910.totFee;
        const v69962 = v69910.protoAddr;
        const v69963 = v69910.locked;
        const v69964 = {
          locked: v69963,
          lpFee: v69960,
          protoAddr: v69962,
          protoFee: v69959,
          totFee: v69961
          };
        const v69965 = {
          cmds: v69908,
          protoInfo: v69964,
          triumvirs: v69911
          };
        
        return v69965;}))(...args));
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
    Triumvir_propose0_68335: ctc11,
    Triumvir_support0_68335: ctc12,
    register0_68335: ctc13
    });
  const ctc15 = stdlib.T_Struct([['A', ctc7], ['B', ctc7]]);
  const ctc16 = stdlib.T_Tuple([ctc15, ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc7, ctc16]);
  
  
  const v69883 = stdlib.protect(ctc1, interact.triumvirs, 'for Admin\'s interact field triumvirs');
  
  const txn1 = await (ctc.sendrecv({
    args: [v69883],
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
      
      
      const {data: [v69890], secs: v69892, time: v69891, didSend: v68210, from: v69889 } = txn1;
      
      ;
      const v69893 = await ctc.getContractAddress();
      
      const v69896 = ['NoOp', null];
      const v69902 = [v69896, v69896, v69896];
      const v69907 = {
        locked: false,
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
        protoAddr: v69893,
        protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
        };
      const v69908 = v69902;
      const v69909 = false;
      const v69910 = v69907;
      const v69911 = v69890;
      const v69912 = v69891;
      const v69915 = stdlib.checkedBigNumberify('./index.rsh:121:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v69958 = v69909 ? false : true;
        
        return v69958;})()) {
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
  const {data: [v69890], secs: v69892, time: v69891, didSend: v68210, from: v69889 } = txn1;
  ;
  const v69893 = await ctc.getContractAddress();
  stdlib.protect(ctc2, await interact.ready(), {
    at: './index.rsh:133:23:application',
    fs: ['at ./index.rsh:133:23:application call to [unknown function] (defined at: ./index.rsh:133:23:function exp)', 'at ./index.rsh:133:23:application call to "liftedInteract" (defined at: ./index.rsh:133:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v69896 = ['NoOp', null];
  const v69902 = [v69896, v69896, v69896];
  const v69907 = {
    locked: false,
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
    protoAddr: v69893,
    protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
    };
  let v69908 = v69902;
  let v69909 = false;
  let v69910 = v69907;
  let v69911 = v69890;
  let v69912 = v69891;
  let v69915 = stdlib.checkedBigNumberify('./index.rsh:121:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v69958 = v69909 ? false : true;
    
    return v69958;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v70240], secs: v70242, time: v70241, didSend: v69390, from: v70239 } = txn3;
    switch (v70240[0]) {
      case 'Triumvir_propose0_68335': {
        const v70243 = v70240[1];
        undefined /* setApiDetails */;
        const v70248 = v70243[stdlib.checkedBigNumberify('./index.rsh:192:10:spread', stdlib.UInt_max, '0')];
        let v70249;
        switch (v70248[0]) {
          case 'Harvest': {
            const v70250 = v70248[1];
            v70249 = true;
            
            break;
            }
          case 'Kill': {
            const v70251 = v70248[1];
            v70249 = true;
            
            break;
            }
          case 'NewInfo': {
            const v70252 = v70248[1];
            const v70253 = v70252.protoFee;
            const v70254 = v70252.lpFee;
            const v70255 = v70252.totFee;
            const v70256 = stdlib.lt(v70253, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
            const v70257 = stdlib.lt(v70254, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
            const v70258 = v70256 ? v70257 : false;
            let v70259;
            if (v70258) {
              const v70260 = stdlib.safeAdd(v70254, v70253);
              const v70261 = stdlib.eq(v70255, v70260);
              v70259 = v70261;
              }
            else {
              v70259 = false;
              }
            const v70262 = stdlib.lt(v70255, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
            const v70263 = v70259 ? v70262 : false;
            const v70264 = stdlib.gt(v70255, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
            const v70265 = v70263 ? v70264 : false;
            v70249 = v70265;
            
            break;
            }
          case 'NewTriumvirs': {
            const v70266 = v70248[1];
            v70249 = true;
            
            break;
            }
          case 'NoOp': {
            const v70267 = v70248[1];
            v70249 = true;
            
            break;
            }
          case 'Rewards': {
            const v70268 = v70248[1];
            v70249 = true;
            
            break;
            }
          }
        stdlib.assert(v70249, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'invalid command',
          who: 'Admin'
          });
        const v70270 = ['None', null];
        const v70271 = await stdlib.Array_asyncReduce([v69911], v70270, async([v70273], v70272, v70274) => {
          const v70275 = {
            None: 0,
            Some: 1
            }[v70272[0]];
          const v70276 = stdlib.eq(v70275, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70277 = stdlib.addressEq(v70239, v70273);
          const v70278 = v70276 ? v70277 : false;
          const v70279 = ['Some', v70274];
          const v70280 = v70278 ? v70279 : v70272;
          
          return v70280;})
        const v70281 = {
          None: 0,
          Some: 1
          }[v70271[0]];
        const v70282 = stdlib.eq(v70281, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70282, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        ;
        let v70327;
        switch (v70248[0]) {
          case 'Harvest': {
            const v70328 = v70248[1];
            v70327 = true;
            
            break;
            }
          case 'Kill': {
            const v70329 = v70248[1];
            v70327 = true;
            
            break;
            }
          case 'NewInfo': {
            const v70330 = v70248[1];
            const v70331 = v70330.protoFee;
            const v70332 = v70330.lpFee;
            const v70333 = v70330.totFee;
            const v70334 = stdlib.lt(v70331, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
            const v70335 = stdlib.lt(v70332, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
            const v70336 = v70334 ? v70335 : false;
            let v70337;
            if (v70336) {
              const v70338 = stdlib.safeAdd(v70332, v70331);
              const v70339 = stdlib.eq(v70333, v70338);
              v70337 = v70339;
              }
            else {
              v70337 = false;
              }
            const v70340 = stdlib.lt(v70333, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
            const v70341 = v70337 ? v70340 : false;
            const v70342 = stdlib.gt(v70333, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
            const v70343 = v70341 ? v70342 : false;
            v70327 = v70343;
            
            break;
            }
          case 'NewTriumvirs': {
            const v70344 = v70248[1];
            v70327 = true;
            
            break;
            }
          case 'NoOp': {
            const v70345 = v70248[1];
            v70327 = true;
            
            break;
            }
          case 'Rewards': {
            const v70346 = v70248[1];
            v70327 = true;
            
            break;
            }
          }
        stdlib.assert(v70327, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
          msg: 'invalid command',
          who: 'Admin'
          });
        const v70349 = await stdlib.Array_asyncReduce([v69911], v70270, async([v70351], v70350, v70352) => {
          const v70353 = {
            None: 0,
            Some: 1
            }[v70350[0]];
          const v70354 = stdlib.eq(v70353, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70355 = stdlib.addressEq(v70239, v70351);
          const v70356 = v70354 ? v70355 : false;
          const v70357 = ['Some', v70352];
          const v70358 = v70356 ? v70357 : v70350;
          
          return v70358;})
        const v70359 = {
          None: 0,
          Some: 1
          }[v70349[0]];
        const v70360 = stdlib.eq(v70359, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70360, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v70362 = stdlib.fromSome(v70349, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
        const v70364 = stdlib.Array_set(v69908, v70362, v70248);
        const v70366 = null;
        await txn3.getOutput('Triumvir_propose', 'v70366', ctc2, v70366);
        null;
        const cv69908 = v70364;
        const cv69909 = false;
        const cv69910 = v69910;
        const cv69911 = v69911;
        const cv69912 = v70241;
        const cv69915 = v69915;
        
        v69908 = cv69908;
        v69909 = cv69909;
        v69910 = cv69910;
        v69911 = cv69911;
        v69912 = cv69912;
        v69915 = cv69915;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Triumvir_support0_68335': {
        const v70672 = v70240[1];
        undefined /* setApiDetails */;
        const v70717 = v70672[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
        const v70718 = v70672[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '1')];
        const v70719 = stdlib.lt(v70717, stdlib.checkedBigNumberify('./index.rsh:203:29:dot', stdlib.UInt_max, '3'));
        stdlib.assert(v70719, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'illegal idx',
          who: 'Admin'
          });
        const v70721 = ['None', null];
        const v70722 = await stdlib.Array_asyncReduce([v69911], v70721, async([v70724], v70723, v70725) => {
          const v70726 = {
            None: 0,
            Some: 1
            }[v70723[0]];
          const v70727 = stdlib.eq(v70726, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70728 = stdlib.addressEq(v70239, v70724);
          const v70729 = v70727 ? v70728 : false;
          const v70730 = ['Some', v70725];
          const v70731 = v70729 ? v70730 : v70723;
          
          return v70731;})
        const v70732 = {
          None: 0,
          Some: 1
          }[v70722[0]];
        const v70733 = stdlib.eq(v70732, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70733, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v70735 = stdlib.fromSome(v70722, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
        const v70736 = stdlib.eq(v70717, v70735);
        const v70737 = v70736 ? false : true;
        stdlib.assert(v70737, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'cannot support self',
          who: 'Admin'
          });
        const v70740 = v69908[v70717];
        const v70741 = stdlib.digest([ctc10], [v70718]);
        const v70742 = stdlib.digest([ctc10], [v70740]);
        const v70743 = stdlib.digestEq(v70741, v70742);
        stdlib.assert(v70743, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'command switched',
          who: 'Admin'
          });
        ;
        const v70845 = await stdlib.Array_asyncReduce([v69911], v70721, async([v70847], v70846, v70848) => {
          const v70849 = {
            None: 0,
            Some: 1
            }[v70846[0]];
          const v70850 = stdlib.eq(v70849, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v70851 = stdlib.addressEq(v70239, v70847);
          const v70852 = v70850 ? v70851 : false;
          const v70853 = ['Some', v70848];
          const v70854 = v70852 ? v70853 : v70846;
          
          return v70854;})
        const v70855 = {
          None: 0,
          Some: 1
          }[v70845[0]];
        const v70856 = stdlib.eq(v70855, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v70856, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v70858 = stdlib.fromSome(v70845, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
        const v70859 = stdlib.eq(v70717, v70858);
        const v70860 = v70859 ? false : true;
        stdlib.assert(v70860, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
          msg: 'cannot support self',
          who: 'Admin'
          });
        const v70870 = stdlib.Array_set(v69908, v70717, v69896);
        const v70873 = null;
        await txn3.getOutput('Triumvir_support', 'v70873', ctc2, v70873);
        null;
        switch (v70740[0]) {
          case 'Harvest': {
            const v70917 = v70740[1];
            const v70918 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '0')];
            const v70919 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '1')];
            const v70920 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '2')];
            const v70921 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '3')];
            switch (v70919[0]) {
              case 'None': {
                const v70922 = v70919[1];
                const v70923 = v69910.protoFee;
                const v70924 = v69910.lpFee;
                const v70925 = v69910.totFee;
                const v70926 = v69910.protoAddr;
                const v70927 = v69910.locked;
                const v70930 = [];
                const v70941 = {
                  locked: v70927,
                  lpFee: v70924,
                  protoAddr: v70926,
                  protoFee: v70923,
                  totFee: v70925
                  };
                const v70942 = undefined /* Remote */;
                const v70943 = await txn3.getOutput('internal', 'v70942', ctc17, v70942);
                const v70945 = v70943[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                const v70954 = stdlib.add(v69915, v70945);
                const v70955 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70945);
                stdlib.assert(v70955, {
                  at: './index.rsh:165:15:application',
                  fs: ['at ./index.rsh:169:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                  msg: 'remote bill check',
                  who: 'Admin'
                  });
                const cv69908 = v70870;
                const cv69909 = false;
                const cv69910 = v69910;
                const cv69911 = v69911;
                const cv69912 = v70241;
                const cv69915 = v70954;
                
                v69908 = cv69908;
                v69909 = cv69909;
                v69910 = cv69910;
                v69911 = cv69911;
                v69912 = cv69912;
                v69915 = cv69915;
                
                txn2 = txn3;
                continue;
                break;
                }
              case 'Some': {
                const v70964 = v70919[1];
                const v70965 = v69910.protoFee;
                const v70966 = v69910.lpFee;
                const v70967 = v69910.totFee;
                const v70968 = v69910.protoAddr;
                const v70969 = v69910.locked;
                const v70972 = [];
                const v70983 = {
                  locked: v70969,
                  lpFee: v70966,
                  protoAddr: v70968,
                  protoFee: v70965,
                  totFee: v70967
                  };
                const v70984 = undefined /* Remote */;
                const v70985 = await txn3.getOutput('internal', 'v70984', ctc17, v70984);
                const v70987 = v70985[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                const v70996 = stdlib.add(v69915, v70987);
                const v70997 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70987);
                stdlib.assert(v70997, {
                  at: './index.rsh:165:15:application',
                  fs: ['at ./index.rsh:168:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                  msg: 'remote bill check',
                  who: 'Admin'
                  });
                const cv69908 = v70870;
                const cv69909 = false;
                const cv69910 = v69910;
                const cv69911 = v69911;
                const cv69912 = v70241;
                const cv69915 = v70996;
                
                v69908 = cv69908;
                v69909 = cv69909;
                v69910 = cv69910;
                v69911 = cv69911;
                v69912 = cv69912;
                v69915 = cv69915;
                
                txn2 = txn3;
                continue;
                break;
                }
              }
            break;
            }
          case 'Kill': {
            const v71006 = v70740[1];
            const cv69908 = v70870;
            const cv69909 = true;
            const cv69910 = v69910;
            const cv69911 = v69911;
            const cv69912 = v70241;
            const cv69915 = v69915;
            
            v69908 = cv69908;
            v69909 = cv69909;
            v69910 = cv69910;
            v69911 = cv69911;
            v69912 = cv69912;
            v69915 = cv69915;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewInfo': {
            const v71014 = v70740[1];
            const v71015 = v71014.locked;
            const v71016 = v71014.lpFee;
            const v71017 = v71014.protoAddr;
            const v71018 = v71014.protoFee;
            const v71019 = v71014.totFee;
            const v71020 = {
              locked: v71015,
              lpFee: v71016,
              protoAddr: v71017,
              protoFee: v71018,
              totFee: v71019
              };
            const cv69908 = v70870;
            const cv69909 = false;
            const cv69910 = v71020;
            const cv69911 = v69911;
            const cv69912 = v70241;
            const cv69915 = v69915;
            
            v69908 = cv69908;
            v69909 = cv69909;
            v69910 = cv69910;
            v69911 = cv69911;
            v69912 = cv69912;
            v69915 = cv69915;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewTriumvirs': {
            const v71029 = v70740[1];
            const cv69908 = v70870;
            const cv69909 = false;
            const cv69910 = v69910;
            const cv69911 = v71029;
            const cv69912 = v70241;
            const cv69915 = v69915;
            
            v69908 = cv69908;
            v69909 = cv69909;
            v69910 = cv69910;
            v69911 = cv69911;
            v69912 = cv69912;
            v69915 = cv69915;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NoOp': {
            const v71037 = v70740[1];
            const cv69908 = v70870;
            const cv69909 = false;
            const cv69910 = v69910;
            const cv69911 = v69911;
            const cv69912 = v70241;
            const cv69915 = v69915;
            
            v69908 = cv69908;
            v69909 = cv69909;
            v69910 = cv69910;
            v69911 = cv69911;
            v69912 = cv69912;
            v69915 = cv69915;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Rewards': {
            const v71045 = v70740[1];
            const v71047 = (stdlib.le(await ctc.getBalance(), v69915) ? stdlib.checkedBigNumberify('./index.rsh:174:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v69915));
            const v71048 = stdlib.safeAdd(v71047, v69915);
            const v71052 = stdlib.sub(v71048, v71047);
            ;
            const cv69908 = v70870;
            const cv69909 = false;
            const cv69910 = v69910;
            const cv69911 = v69911;
            const cv69912 = v70241;
            const cv69915 = v71052;
            
            v69908 = cv69908;
            v69909 = cv69909;
            v69910 = cv69910;
            v69911 = cv69911;
            v69912 = cv69912;
            v69915 = cv69915;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'register0_68335': {
        const v71101 = v70240[1];
        undefined /* setApiDetails */;
        const v71178 = v71101[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
        const v71181 = stdlib.ctcAddrEq(v71178, v70239);
        stdlib.assert(v71181, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'not contract',
          who: 'Admin'
          });
        ;
        const v71491 = v71101[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '1')];
        const v71492 = v71101[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '2')];
        const v71498 = v69910.protoFee;
        const v71499 = v69910.lpFee;
        const v71500 = v69910.totFee;
        const v71501 = v69910.protoAddr;
        const v71502 = v69910.locked;
        const v71503 = {
          locked: v71502,
          lpFee: v71499,
          protoAddr: v71501,
          protoFee: v71498,
          totFee: v71500
          };
        await txn3.getOutput('register', 'v71503', ctc9, v71503);
        null;
        const cv69908 = v69908;
        const cv69909 = false;
        const cv69910 = v69910;
        const cv69911 = v69911;
        const cv69912 = v70241;
        const cv69915 = v69915;
        
        v69908 = cv69908;
        v69909 = cv69909;
        v69910 = cv69910;
        v69911 = cv69911;
        v69912 = cv69912;
        v69915 = cv69915;
        
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
    Triumvir_propose0_68335: ctc13,
    Triumvir_support0_68335: ctc14,
    register0_68335: ctc15
    });
  
  
  const [v69896, v69908, v69910, v69911, v69915] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v69994 = ctc.selfAddress();
  const v69996 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_propose0_68335" (defined at: ./index.rsh:192:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_propose'
    });
  const v69997 = v69996[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v70017;
  switch (v69997[0]) {
    case 'Harvest': {
      const v70018 = v69997[1];
      v70017 = true;
      
      break;
      }
    case 'Kill': {
      const v70019 = v69997[1];
      v70017 = true;
      
      break;
      }
    case 'NewInfo': {
      const v70020 = v69997[1];
      const v70021 = v70020.protoFee;
      const v70022 = v70020.lpFee;
      const v70023 = v70020.totFee;
      const v70024 = stdlib.lt(v70021, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v70025 = stdlib.lt(v70022, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v70026 = v70024 ? v70025 : false;
      let v70027;
      if (v70026) {
        const v70028 = stdlib.safeAdd(v70022, v70021);
        const v70029 = stdlib.eq(v70023, v70028);
        v70027 = v70029;
        }
      else {
        v70027 = false;
        }
      const v70030 = stdlib.lt(v70023, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v70031 = v70027 ? v70030 : false;
      const v70032 = stdlib.gt(v70023, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v70033 = v70031 ? v70032 : false;
      v70017 = v70033;
      
      break;
      }
    case 'NewTriumvirs': {
      const v70034 = v69997[1];
      v70017 = true;
      
      break;
      }
    case 'NoOp': {
      const v70035 = v69997[1];
      v70017 = true;
      
      break;
      }
    case 'Rewards': {
      const v70036 = v69997[1];
      v70017 = true;
      
      break;
      }
    }
  stdlib.assert(v70017, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_propose0_68335" (defined at: ./index.rsh:192:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'invalid command',
    who: 'Triumvir_propose'
    });
  const v70038 = ['None', null];
  const v70039 = await stdlib.Array_asyncReduce([v69911], v70038, async([v70041], v70040, v70042) => {
    const v70043 = {
      None: 0,
      Some: 1
      }[v70040[0]];
    const v70044 = stdlib.eq(v70043, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v70045 = stdlib.addressEq(v69994, v70041);
    const v70046 = v70044 ? v70045 : false;
    const v70047 = ['Some', v70042];
    const v70048 = v70046 ? v70047 : v70040;
    
    return v70048;})
  const v70049 = {
    None: 0,
    Some: 1
    }[v70039[0]];
  const v70050 = stdlib.eq(v70049, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v70050, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_propose0_68335" (defined at: ./index.rsh:192:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_propose'
    });
  const v70078 = ['Triumvir_propose0_68335', v69996];
  
  let v70163;
  switch (v69997[0]) {
    case 'Harvest': {
      const v70164 = v69997[1];
      v70163 = true;
      
      break;
      }
    case 'Kill': {
      const v70165 = v69997[1];
      v70163 = true;
      
      break;
      }
    case 'NewInfo': {
      const v70166 = v69997[1];
      const v70167 = v70166.protoFee;
      const v70168 = v70166.lpFee;
      const v70169 = v70166.totFee;
      const v70170 = stdlib.lt(v70167, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v70171 = stdlib.lt(v70168, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v70172 = v70170 ? v70171 : false;
      let v70173;
      if (v70172) {
        const v70174 = stdlib.safeAdd(v70168, v70167);
        const v70175 = stdlib.eq(v70169, v70174);
        v70173 = v70175;
        }
      else {
        v70173 = false;
        }
      const v70176 = stdlib.lt(v70169, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v70177 = v70173 ? v70176 : false;
      const v70178 = stdlib.gt(v70169, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v70179 = v70177 ? v70178 : false;
      v70163 = v70179;
      
      break;
      }
    case 'NewTriumvirs': {
      const v70180 = v69997[1];
      v70163 = true;
      
      break;
      }
    case 'NoOp': {
      const v70181 = v69997[1];
      v70163 = true;
      
      break;
      }
    case 'Rewards': {
      const v70182 = v69997[1];
      v70163 = true;
      
      break;
      }
    }
  stdlib.assert(v70163, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'invalid command',
    who: 'Triumvir_propose'
    });
  const v70185 = await stdlib.Array_asyncReduce([v69911], v70038, async([v70187], v70186, v70188) => {
    const v70189 = {
      None: 0,
      Some: 1
      }[v70186[0]];
    const v70190 = stdlib.eq(v70189, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v70191 = stdlib.addressEq(v69994, v70187);
    const v70192 = v70190 ? v70191 : false;
    const v70193 = ['Some', v70188];
    const v70194 = v70192 ? v70193 : v70186;
    
    return v70194;})
  const v70195 = {
    None: 0,
    Some: 1
    }[v70185[0]];
  const v70196 = stdlib.eq(v70195, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v70196, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_propose'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v69896, v69908, v69910, v69911, v69915, v70078],
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
      
      
      const {data: [v70240], secs: v70242, time: v70241, didSend: v69390, from: v70239 } = txn1;
      
      switch (v70240[0]) {
        case 'Triumvir_propose0_68335': {
          const v70243 = v70240[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_propose"
            });
          const v70248 = v70243[stdlib.checkedBigNumberify('./index.rsh:192:10:spread', stdlib.UInt_max, '0')];
          const v70270 = ['None', null];
          ;
          const v70349 = await stdlib.Array_asyncReduce([v69911], v70270, async([v70351], v70350, v70352) => {
            const v70353 = {
              None: 0,
              Some: 1
              }[v70350[0]];
            const v70354 = stdlib.eq(v70353, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v70355 = stdlib.addressEq(v70239, v70351);
            const v70356 = v70354 ? v70355 : false;
            const v70357 = ['Some', v70352];
            const v70358 = v70356 ? v70357 : v70350;
            
            return v70358;})
          const v70362 = stdlib.fromSome(v70349, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
          const v70364 = stdlib.Array_set(v69908, v70362, v70248);
          const v70366 = null;
          const v70367 = await txn1.getOutput('Triumvir_propose', 'v70366', ctc1, v70366);
          
          null;
          const v77360 = v70364;
          const v77362 = v69910;
          const v77363 = v69911;
          const v77365 = v69915;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Triumvir_support0_68335': {
          const v70672 = v70240[1];
          
          break;
          }
        case 'register0_68335': {
          const v71101 = v70240[1];
          
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
  const {data: [v70240], secs: v70242, time: v70241, didSend: v69390, from: v70239 } = txn1;
  switch (v70240[0]) {
    case 'Triumvir_propose0_68335': {
      const v70243 = v70240[1];
      undefined /* setApiDetails */;
      const v70248 = v70243[stdlib.checkedBigNumberify('./index.rsh:192:10:spread', stdlib.UInt_max, '0')];
      let v70249;
      switch (v70248[0]) {
        case 'Harvest': {
          const v70250 = v70248[1];
          v70249 = true;
          
          break;
          }
        case 'Kill': {
          const v70251 = v70248[1];
          v70249 = true;
          
          break;
          }
        case 'NewInfo': {
          const v70252 = v70248[1];
          const v70253 = v70252.protoFee;
          const v70254 = v70252.lpFee;
          const v70255 = v70252.totFee;
          const v70256 = stdlib.lt(v70253, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
          const v70257 = stdlib.lt(v70254, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
          const v70258 = v70256 ? v70257 : false;
          let v70259;
          if (v70258) {
            const v70260 = stdlib.safeAdd(v70254, v70253);
            const v70261 = stdlib.eq(v70255, v70260);
            v70259 = v70261;
            }
          else {
            v70259 = false;
            }
          const v70262 = stdlib.lt(v70255, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
          const v70263 = v70259 ? v70262 : false;
          const v70264 = stdlib.gt(v70255, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
          const v70265 = v70263 ? v70264 : false;
          v70249 = v70265;
          
          break;
          }
        case 'NewTriumvirs': {
          const v70266 = v70248[1];
          v70249 = true;
          
          break;
          }
        case 'NoOp': {
          const v70267 = v70248[1];
          v70249 = true;
          
          break;
          }
        case 'Rewards': {
          const v70268 = v70248[1];
          v70249 = true;
          
          break;
          }
        }
      stdlib.assert(v70249, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'invalid command',
        who: 'Triumvir_propose'
        });
      const v70270 = ['None', null];
      const v70271 = await stdlib.Array_asyncReduce([v69911], v70270, async([v70273], v70272, v70274) => {
        const v70275 = {
          None: 0,
          Some: 1
          }[v70272[0]];
        const v70276 = stdlib.eq(v70275, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70277 = stdlib.addressEq(v70239, v70273);
        const v70278 = v70276 ? v70277 : false;
        const v70279 = ['Some', v70274];
        const v70280 = v70278 ? v70279 : v70272;
        
        return v70280;})
      const v70281 = {
        None: 0,
        Some: 1
        }[v70271[0]];
      const v70282 = stdlib.eq(v70281, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70282, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:192:35:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:192:35:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_propose'
        });
      ;
      let v70327;
      switch (v70248[0]) {
        case 'Harvest': {
          const v70328 = v70248[1];
          v70327 = true;
          
          break;
          }
        case 'Kill': {
          const v70329 = v70248[1];
          v70327 = true;
          
          break;
          }
        case 'NewInfo': {
          const v70330 = v70248[1];
          const v70331 = v70330.protoFee;
          const v70332 = v70330.lpFee;
          const v70333 = v70330.totFee;
          const v70334 = stdlib.lt(v70331, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
          const v70335 = stdlib.lt(v70332, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
          const v70336 = v70334 ? v70335 : false;
          let v70337;
          if (v70336) {
            const v70338 = stdlib.safeAdd(v70332, v70331);
            const v70339 = stdlib.eq(v70333, v70338);
            v70337 = v70339;
            }
          else {
            v70337 = false;
            }
          const v70340 = stdlib.lt(v70333, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
          const v70341 = v70337 ? v70340 : false;
          const v70342 = stdlib.gt(v70333, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
          const v70343 = v70341 ? v70342 : false;
          v70327 = v70343;
          
          break;
          }
        case 'NewTriumvirs': {
          const v70344 = v70248[1];
          v70327 = true;
          
          break;
          }
        case 'NoOp': {
          const v70345 = v70248[1];
          v70327 = true;
          
          break;
          }
        case 'Rewards': {
          const v70346 = v70248[1];
          v70327 = true;
          
          break;
          }
        }
      stdlib.assert(v70327, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
        msg: 'invalid command',
        who: 'Triumvir_propose'
        });
      const v70349 = await stdlib.Array_asyncReduce([v69911], v70270, async([v70351], v70350, v70352) => {
        const v70353 = {
          None: 0,
          Some: 1
          }[v70350[0]];
        const v70354 = stdlib.eq(v70353, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70355 = stdlib.addressEq(v70239, v70351);
        const v70356 = v70354 ? v70355 : false;
        const v70357 = ['Some', v70352];
        const v70358 = v70356 ? v70357 : v70350;
        
        return v70358;})
      const v70359 = {
        None: 0,
        Some: 1
        }[v70349[0]];
      const v70360 = stdlib.eq(v70359, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70360, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_propose'
        });
      const v70362 = stdlib.fromSome(v70349, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
      const v70364 = stdlib.Array_set(v69908, v70362, v70248);
      const v70366 = null;
      const v70367 = await txn1.getOutput('Triumvir_propose', 'v70366', ctc1, v70366);
      if (v69390) {
        stdlib.protect(ctc1, await interact.out(v70243, v70367), {
          at: './index.rsh:192:11:application',
          fs: ['at ./index.rsh:192:11:application call to [unknown function] (defined at: ./index.rsh:192:11:function exp)', 'at ./index.rsh:197:10:application call to "k" (defined at: ./index.rsh:196:23:function exp)', 'at ./index.rsh:196:23:application call to [unknown function] (defined at: ./index.rsh:196:23:function exp)'],
          msg: 'out',
          who: 'Triumvir_propose'
          });
        }
      else {
        }
      
      null;
      const v77360 = v70364;
      const v77362 = v69910;
      const v77363 = v69911;
      const v77365 = v69915;
      return;
      
      break;
      }
    case 'Triumvir_support0_68335': {
      const v70672 = v70240[1];
      return;
      break;
      }
    case 'register0_68335': {
      const v71101 = v70240[1];
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
    Triumvir_propose0_68335: ctc14,
    Triumvir_support0_68335: ctc13,
    register0_68335: ctc15
    });
  const ctc17 = stdlib.T_Struct([['A', ctc6], ['B', ctc6]]);
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc18]);
  
  
  const [v69896, v69908, v69910, v69911, v69915] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v70080 = ctc.selfAddress();
  const v70082 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68335" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_support'
    });
  const v70083 = v70082[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v70084 = v70082[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v70105 = stdlib.lt(v70083, stdlib.checkedBigNumberify('./index.rsh:203:29:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v70105, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68335" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'illegal idx',
    who: 'Triumvir_support'
    });
  const v70107 = ['None', null];
  const v70108 = await stdlib.Array_asyncReduce([v69911], v70107, async([v70110], v70109, v70111) => {
    const v70112 = {
      None: 0,
      Some: 1
      }[v70109[0]];
    const v70113 = stdlib.eq(v70112, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v70114 = stdlib.addressEq(v70080, v70110);
    const v70115 = v70113 ? v70114 : false;
    const v70116 = ['Some', v70111];
    const v70117 = v70115 ? v70116 : v70109;
    
    return v70117;})
  const v70118 = {
    None: 0,
    Some: 1
    }[v70108[0]];
  const v70119 = stdlib.eq(v70118, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v70119, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68335" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_support'
    });
  const v70121 = stdlib.fromSome(v70108, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
  const v70122 = stdlib.eq(v70083, v70121);
  const v70123 = v70122 ? false : true;
  stdlib.assert(v70123, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68335" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'cannot support self',
    who: 'Triumvir_support'
    });
  const v70126 = v69908[v70083];
  const v70127 = stdlib.digest([ctc10], [v70084]);
  const v70128 = stdlib.digest([ctc10], [v70126]);
  const v70129 = stdlib.digestEq(v70127, v70128);
  stdlib.assert(v70129, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to "runTriumvir_support0_68335" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'command switched',
    who: 'Triumvir_support'
    });
  const v70159 = ['Triumvir_support0_68335', v70082];
  
  const v70207 = await stdlib.Array_asyncReduce([v69911], v70107, async([v70209], v70208, v70210) => {
    const v70211 = {
      None: 0,
      Some: 1
      }[v70208[0]];
    const v70212 = stdlib.eq(v70211, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v70213 = stdlib.addressEq(v70080, v70209);
    const v70214 = v70212 ? v70213 : false;
    const v70215 = ['Some', v70210];
    const v70216 = v70214 ? v70215 : v70208;
    
    return v70216;})
  const v70217 = {
    None: 0,
    Some: 1
    }[v70207[0]];
  const v70218 = stdlib.eq(v70217, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v70218, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_support'
    });
  const v70220 = stdlib.fromSome(v70207, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
  const v70221 = stdlib.eq(v70083, v70220);
  const v70222 = v70221 ? false : true;
  stdlib.assert(v70222, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'cannot support self',
    who: 'Triumvir_support'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v69896, v69908, v69910, v69911, v69915, v70159],
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
      
      
      const {data: [v70240], secs: v70242, time: v70241, didSend: v69390, from: v70239 } = txn1;
      
      switch (v70240[0]) {
        case 'Triumvir_propose0_68335': {
          const v70243 = v70240[1];
          
          break;
          }
        case 'Triumvir_support0_68335': {
          const v70672 = v70240[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_support"
            });
          const v70717 = v70672[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
          const v70740 = v69908[v70717];
          ;
          const v70870 = stdlib.Array_set(v69908, v70717, v69896);
          const v70873 = null;
          const v70874 = await txn1.getOutput('Triumvir_support', 'v70873', ctc1, v70873);
          
          null;
          switch (v70740[0]) {
            case 'Harvest': {
              const v70917 = v70740[1];
              const v70918 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '0')];
              const v70919 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '1')];
              const v70920 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '2')];
              const v70921 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '3')];
              switch (v70919[0]) {
                case 'None': {
                  const v70922 = v70919[1];
                  const v70923 = v69910.protoFee;
                  const v70924 = v69910.lpFee;
                  const v70925 = v69910.totFee;
                  const v70926 = v69910.protoAddr;
                  const v70927 = v69910.locked;
                  const v70930 = [];
                  const v70941 = {
                    locked: v70927,
                    lpFee: v70924,
                    protoAddr: v70926,
                    protoFee: v70923,
                    totFee: v70925
                    };
                  const v70942 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v70918,
                      remote: ({
                        accs: [v70921],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        fees: stdlib.checkedBigNumberify('./index.rsh:162:40:application', stdlib.UInt_max, '2'),
                        pays: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        toks: [v70920]
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
                  const v70943 = await txn1.getOutput('internal', 'v70942', ctc19, v70942);
                  const v70945 = v70943[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                  const v70954 = stdlib.add(v69915, v70945);
                  const v77430 = v70870;
                  const v77432 = v69910;
                  const v77433 = v69911;
                  const v77435 = v70954;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'Some': {
                  const v70964 = v70919[1];
                  const v70965 = v69910.protoFee;
                  const v70966 = v69910.lpFee;
                  const v70967 = v69910.totFee;
                  const v70968 = v69910.protoAddr;
                  const v70969 = v69910.locked;
                  const v70972 = [];
                  const v70983 = {
                    locked: v70969,
                    lpFee: v70966,
                    protoAddr: v70968,
                    protoFee: v70965,
                    totFee: v70967
                    };
                  const v70984 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v70918,
                      remote: ({
                        accs: [v70921],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        fees: stdlib.checkedBigNumberify('./index.rsh:162:40:application', stdlib.UInt_max, '3'),
                        pays: stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0'),
                        toks: [v70964, v70920]
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
                  const v70985 = await txn1.getOutput('internal', 'v70984', ctc19, v70984);
                  const v70987 = v70985[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
                  const v70996 = stdlib.add(v69915, v70987);
                  const v77437 = v70870;
                  const v77439 = v69910;
                  const v77440 = v69911;
                  const v77442 = v70996;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                }
              break;
              }
            case 'Kill': {
              const v71006 = v70740[1];
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              break;
              }
            case 'NewInfo': {
              const v71014 = v70740[1];
              const v71015 = v71014.locked;
              const v71016 = v71014.lpFee;
              const v71017 = v71014.protoAddr;
              const v71018 = v71014.protoFee;
              const v71019 = v71014.totFee;
              const v71020 = {
                locked: v71015,
                lpFee: v71016,
                protoAddr: v71017,
                protoFee: v71018,
                totFee: v71019
                };
              const v77451 = v70870;
              const v77453 = v71020;
              const v77454 = v69911;
              const v77456 = v69915;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NewTriumvirs': {
              const v71029 = v70740[1];
              const v77458 = v70870;
              const v77460 = v69910;
              const v77461 = v71029;
              const v77463 = v69915;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NoOp': {
              const v71037 = v70740[1];
              const v77465 = v70870;
              const v77467 = v69910;
              const v77468 = v69911;
              const v77470 = v69915;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Rewards': {
              const v71045 = v70740[1];
              const v71047 = (stdlib.le(await ctc.getBalance(), v69915) ? stdlib.checkedBigNumberify('./index.rsh:174:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v69915));
              const v71048 = stdlib.safeAdd(v71047, v69915);
              const v71052 = stdlib.sub(v71048, v71047);
              sim_r.txns.push({
                kind: 'from',
                to: v71045,
                tok: undefined /* Nothing */
                });
              const v77472 = v70870;
              const v77474 = v69910;
              const v77475 = v69911;
              const v77477 = v71052;
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'register0_68335': {
          const v71101 = v70240[1];
          
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
  const {data: [v70240], secs: v70242, time: v70241, didSend: v69390, from: v70239 } = txn1;
  switch (v70240[0]) {
    case 'Triumvir_propose0_68335': {
      const v70243 = v70240[1];
      return;
      break;
      }
    case 'Triumvir_support0_68335': {
      const v70672 = v70240[1];
      undefined /* setApiDetails */;
      const v70717 = v70672[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
      const v70718 = v70672[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '1')];
      const v70719 = stdlib.lt(v70717, stdlib.checkedBigNumberify('./index.rsh:203:29:dot', stdlib.UInt_max, '3'));
      stdlib.assert(v70719, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'illegal idx',
        who: 'Triumvir_support'
        });
      const v70721 = ['None', null];
      const v70722 = await stdlib.Array_asyncReduce([v69911], v70721, async([v70724], v70723, v70725) => {
        const v70726 = {
          None: 0,
          Some: 1
          }[v70723[0]];
        const v70727 = stdlib.eq(v70726, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70728 = stdlib.addressEq(v70239, v70724);
        const v70729 = v70727 ? v70728 : false;
        const v70730 = ['Some', v70725];
        const v70731 = v70729 ? v70730 : v70723;
        
        return v70731;})
      const v70732 = {
        None: 0,
        Some: 1
        }[v70722[0]];
      const v70733 = stdlib.eq(v70732, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70733, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_support'
        });
      const v70735 = stdlib.fromSome(v70722, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
      const v70736 = stdlib.eq(v70717, v70735);
      const v70737 = v70736 ? false : true;
      stdlib.assert(v70737, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'cannot support self',
        who: 'Triumvir_support'
        });
      const v70740 = v69908[v70717];
      const v70741 = stdlib.digest([ctc10], [v70718]);
      const v70742 = stdlib.digest([ctc10], [v70740]);
      const v70743 = stdlib.digestEq(v70741, v70742);
      stdlib.assert(v70743, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:41:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'command switched',
        who: 'Triumvir_support'
        });
      ;
      const v70845 = await stdlib.Array_asyncReduce([v69911], v70721, async([v70847], v70846, v70848) => {
        const v70849 = {
          None: 0,
          Some: 1
          }[v70846[0]];
        const v70850 = stdlib.eq(v70849, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v70851 = stdlib.addressEq(v70239, v70847);
        const v70852 = v70850 ? v70851 : false;
        const v70853 = ['Some', v70848];
        const v70854 = v70852 ? v70853 : v70846;
        
        return v70854;})
      const v70855 = {
        None: 0,
        Some: 1
        }[v70845[0]];
      const v70856 = stdlib.eq(v70855, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v70856, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:30:application call to "chkTriumvir" (defined at: ./index.rsh:149:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_support'
        });
      const v70858 = stdlib.fromSome(v70845, stdlib.checkedBigNumberify('./index.rsh:152:31:decimal', stdlib.UInt_max, '0'));
      const v70859 = stdlib.eq(v70717, v70858);
      const v70860 = v70859 ? false : true;
      stdlib.assert(v70860, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
        msg: 'cannot support self',
        who: 'Triumvir_support'
        });
      const v70870 = stdlib.Array_set(v69908, v70717, v69896);
      const v70873 = null;
      const v70874 = await txn1.getOutput('Triumvir_support', 'v70873', ctc1, v70873);
      if (v69390) {
        stdlib.protect(ctc1, await interact.out(v70672, v70874), {
          at: './index.rsh:202:11:application',
          fs: ['at ./index.rsh:202:11:application call to [unknown function] (defined at: ./index.rsh:202:11:function exp)', 'at ./index.rsh:210:10:application call to "k" (defined at: ./index.rsh:209:23:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
          msg: 'out',
          who: 'Triumvir_support'
          });
        }
      else {
        }
      
      null;
      switch (v70740[0]) {
        case 'Harvest': {
          const v70917 = v70740[1];
          const v70918 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '0')];
          const v70919 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '1')];
          const v70920 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '2')];
          const v70921 = v70917[stdlib.checkedBigNumberify('./index.rsh:158:19:array', stdlib.UInt_max, '3')];
          switch (v70919[0]) {
            case 'None': {
              const v70922 = v70919[1];
              const v70923 = v69910.protoFee;
              const v70924 = v69910.lpFee;
              const v70925 = v69910.totFee;
              const v70926 = v69910.protoAddr;
              const v70927 = v69910.locked;
              const v70930 = [];
              const v70941 = {
                locked: v70927,
                lpFee: v70924,
                protoAddr: v70926,
                protoFee: v70923,
                totFee: v70925
                };
              const v70942 = undefined /* Remote */;
              const v70943 = await txn1.getOutput('internal', 'v70942', ctc19, v70942);
              const v70945 = v70943[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
              const v70954 = stdlib.add(v69915, v70945);
              const v70955 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70945);
              stdlib.assert(v70955, {
                at: './index.rsh:165:15:application',
                fs: ['at ./index.rsh:169:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                msg: 'remote bill check',
                who: 'Triumvir_support'
                });
              const v77430 = v70870;
              const v77432 = v69910;
              const v77433 = v69911;
              const v77435 = v70954;
              return;
              
              break;
              }
            case 'Some': {
              const v70964 = v70919[1];
              const v70965 = v69910.protoFee;
              const v70966 = v69910.lpFee;
              const v70967 = v69910.totFee;
              const v70968 = v69910.protoAddr;
              const v70969 = v69910.locked;
              const v70972 = [];
              const v70983 = {
                locked: v70969,
                lpFee: v70966,
                protoAddr: v70968,
                protoFee: v70965,
                totFee: v70967
                };
              const v70984 = undefined /* Remote */;
              const v70985 = await txn1.getOutput('internal', 'v70984', ctc19, v70984);
              const v70987 = v70985[stdlib.checkedBigNumberify('./index.rsh:165:15:application', stdlib.UInt_max, '0')];
              const v70996 = stdlib.add(v69915, v70987);
              const v70997 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v70987);
              stdlib.assert(v70997, {
                at: './index.rsh:165:15:application',
                fs: ['at ./index.rsh:168:26:application call to "go" (defined at: ./index.rsh:160:30:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:158:46:function exp)', 'at ./index.rsh:154:45:application call to [unknown function] (defined at: ./index.rsh:154:45:function exp)', 'at ./index.rsh:212:57:application call to "evalCommand" (defined at: ./index.rsh:154:33:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                msg: 'remote bill check',
                who: 'Triumvir_support'
                });
              const v77437 = v70870;
              const v77439 = v69910;
              const v77440 = v69911;
              const v77442 = v70996;
              return;
              
              break;
              }
            }
          break;
          }
        case 'Kill': {
          const v71006 = v70740[1];
          return;
          
          break;
          }
        case 'NewInfo': {
          const v71014 = v70740[1];
          const v71015 = v71014.locked;
          const v71016 = v71014.lpFee;
          const v71017 = v71014.protoAddr;
          const v71018 = v71014.protoFee;
          const v71019 = v71014.totFee;
          const v71020 = {
            locked: v71015,
            lpFee: v71016,
            protoAddr: v71017,
            protoFee: v71018,
            totFee: v71019
            };
          const v77451 = v70870;
          const v77453 = v71020;
          const v77454 = v69911;
          const v77456 = v69915;
          return;
          
          break;
          }
        case 'NewTriumvirs': {
          const v71029 = v70740[1];
          const v77458 = v70870;
          const v77460 = v69910;
          const v77461 = v71029;
          const v77463 = v69915;
          return;
          
          break;
          }
        case 'NoOp': {
          const v71037 = v70740[1];
          const v77465 = v70870;
          const v77467 = v69910;
          const v77468 = v69911;
          const v77470 = v69915;
          return;
          
          break;
          }
        case 'Rewards': {
          const v71045 = v70740[1];
          const v71047 = (stdlib.le(await ctc.getBalance(), v69915) ? stdlib.checkedBigNumberify('./index.rsh:174:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v69915));
          const v71048 = stdlib.safeAdd(v71047, v69915);
          const v71052 = stdlib.sub(v71048, v71047);
          ;
          const v77472 = v70870;
          const v77474 = v69910;
          const v77475 = v69911;
          const v77477 = v71052;
          return;
          
          break;
          }
        }
      break;
      }
    case 'register0_68335': {
      const v71101 = v70240[1];
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
    Triumvir_propose0_68335: ctc14,
    Triumvir_support0_68335: ctc15,
    register0_68335: ctc13
    });
  
  
  const [v69896, v69908, v69910, v69911, v69915] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v69968 = ctc.selfAddress();
  const v69970 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to "runregister0_68335" (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v69971 = v69970[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v69979 = stdlib.ctcAddrEq(v69971, v69968);
  stdlib.assert(v69979, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to "runregister0_68335" (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
    msg: 'not contract',
    who: 'register'
    });
  const v69992 = ['register0_68335', v69970];
  
  const txn1 = await (ctc.sendrecv({
    args: [v69896, v69908, v69910, v69911, v69915, v69992],
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
      
      
      const {data: [v70240], secs: v70242, time: v70241, didSend: v69390, from: v70239 } = txn1;
      
      switch (v70240[0]) {
        case 'Triumvir_propose0_68335': {
          const v70243 = v70240[1];
          
          break;
          }
        case 'Triumvir_support0_68335': {
          const v70672 = v70240[1];
          
          break;
          }
        case 'register0_68335': {
          const v71101 = v70240[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          const v71178 = v71101[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
          ;
          const v71491 = v71101[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '1')];
          const v71492 = v71101[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '2')];
          const v71498 = v69910.protoFee;
          const v71499 = v69910.lpFee;
          const v71500 = v69910.totFee;
          const v71501 = v69910.protoAddr;
          const v71502 = v69910.locked;
          const v71503 = {
            locked: v71502,
            lpFee: v71499,
            protoAddr: v71501,
            protoFee: v71498,
            totFee: v71500
            };
          const v71504 = await txn1.getOutput('register', 'v71503', ctc8, v71503);
          
          null;
          const v77542 = v69908;
          const v77544 = v69910;
          const v77545 = v69911;
          const v77547 = v69915;
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
  const {data: [v70240], secs: v70242, time: v70241, didSend: v69390, from: v70239 } = txn1;
  switch (v70240[0]) {
    case 'Triumvir_propose0_68335': {
      const v70243 = v70240[1];
      return;
      break;
      }
    case 'Triumvir_support0_68335': {
      const v70672 = v70240[1];
      return;
      break;
      }
    case 'register0_68335': {
      const v71101 = v70240[1];
      undefined /* setApiDetails */;
      const v71178 = v71101[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '0')];
      const v71181 = stdlib.ctcAddrEq(v71178, v70239);
      stdlib.assert(v71181, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:183:49:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:183:49:function exp)', 'at ./index.rsh:136:19:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
        msg: 'not contract',
        who: 'register'
        });
      ;
      const v71491 = v71101[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '1')];
      const v71492 = v71101[stdlib.checkedBigNumberify('./index.rsh:183:10:spread', stdlib.UInt_max, '2')];
      const v71498 = v69910.protoFee;
      const v71499 = v69910.lpFee;
      const v71500 = v69910.totFee;
      const v71501 = v69910.protoAddr;
      const v71502 = v69910.locked;
      const v71503 = {
        locked: v71502,
        lpFee: v71499,
        protoAddr: v71501,
        protoFee: v71498,
        totFee: v71500
        };
      const v71504 = await txn1.getOutput('register', 'v71503', ctc8, v71503);
      if (v69390) {
        stdlib.protect(ctc1, await interact.out(v71101, v71504), {
          at: './index.rsh:183:11:application',
          fs: ['at ./index.rsh:183:11:application call to [unknown function] (defined at: ./index.rsh:183:11:function exp)', 'at ./index.rsh:187:10:application call to "k" (defined at: ./index.rsh:186:23:function exp)', 'at ./index.rsh:186:23:application call to [unknown function] (defined at: ./index.rsh:186:23:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      null;
      const v77542 = v69908;
      const v77544 = v69910;
      const v77545 = v69911;
      const v77547 = v69915;
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
  GlobalNumByteSlice: 6,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAVAAEDIAUCYQZkCBAEzJrO1wTFgN+kDuiU6MoEhAM5vQNgowIJJggBAQABAAECAQMBBAVhcHBJRAQomkRuIjUAMRhBCJUpZEkiWzUBSSEJWzUCIQpbNQg2GgAXSUEAuCI1BCM1BkkhDAxAAC9JIQ0MQAAUIQ0SRDYaATX/KjT/UCEJr1BCAKghDBJENhoBNhoCUDX/KDT/UEIAlEkhDgxAABwhDhJENhoBNhoCUDYaA1A1/ys0/1CBUK9QQgBxgfa70OUBEkQ0ASQSRCpkKGRQK2RQJwRkUCcFZFBJNQMhDyEQWDX/NAMhESESWDQDIQYhE1hQNP9XKQg0/1cBCFA0/1cxCFA0/1cJIFA0/1cAAVBQNQdCB7s2GgIXNQQ2GgM2GgEXSSEFDEAGDiEFEkQkNAESRDQESSISTDQCEhFEKmQoZFArZFAnBGRQJwVkUEk1A0lKSVcAYTX/IQYhE1g1/iEPIRBYNf0hESESWDX8gZ0EWzX7STUFNfqABKLqoRI0+lCwNPoiVUkjDEADuEkhBQxAAIshBRJENPpXARk19zT3Ils19icGNPYWUAMxABJEgAgAAAAAAAEXTzT9VykINP1XAQhQNP1XMQhQNP1XCSBQNP1XAAFQULA0/VcpCDT9VwEIUDT9VzEIUDT9VwkgUDT9VwABUDUHgAS6Xf0zNPYWUDT3VwgJUDT3VxEIULA0/zT+IjT9NPwyBjT7QgX6SDT6VwFpNfexIrIBIQeyEDQIshizNPciW0k19iQMRCEUr0k19TX0IjXzNPwlNPMLJVg18jT0KDTzFlA09CJVIhIxADTyEhBNNfQ08yMISTXzJAxA/9Q09CJVIxJENPYiNPRJNfMjWzTzIlVNE0Q0/iEGNPYLIQZYNfM091cIYQE08wESRDT1NfIiNfE0/CU08QslWDXwNPIoNPEWUDTyIlUiEjEANPASEE018jTxIwhJNfEkDED/1DTyIlUjEkQ09iI08kk18SNbNPEiVU0TRDT+NPYhBgs0/1018YAIAAAAAAABFNmwKTUHgASiIOREMQBQNPYWUDTzULA08yJVSSQMQAB0SSELDEAAVUkhBAxAAD0hBBJENPNXASA18DIKYDIKeAk0+wk177EisgE077III7IQNPCyB7M0/zTxIjT9NPwyBjTvNPsINO8JQgSqSDT/NPEiNP00/DIGNPtCBJlINPNXAWA18DT/NPEiNP008DIGNPtCBIFJIwxAAEtJIQUMQAAzSDTzVwE5NfA0/zTxIjTwVzgBNPBXCAhQNPBXGCBQNPBXAAhQNPBXEAhQNPwyBjT7QgRBSDT/NPEjNP00/DIGNPtCBDBINPNXATlJNfAiWzXvNPCBEVs17jTwVxkgNe008FcICUk17CJVQACVJwY07xZQAzXqMgp4NekyCmA06QkWNeixIrIBIQeyEDTvshgnB7IaNO1JshyyGjT9VykINP1XAQhQNP1XMQhQNP1XCSBQNP1XAAFQsho07rIwszIKYDTpCTToFwkWtwA+VwQAUDXrgAgAAAAAAAEVHjTrULA060k16iJbNekiNOkSRDT/NPEiNP00/DIGNPs06QhCA3M07CNbNesnBjTvFlADNekyCng16DIKYDToCRY157EisgEhB7IQNO+yGCcHsho07UmyHLIaNP1XKQg0/VcBCFA0/VcxCFA0/VcJIFA0/VcAAVCyGjTrsjA07rIwszIKYDToCTTnFwkWtwA+VwQAUDXqgAgAAAAAAAEVSDTqULA06kk16SJbNegiNOgSRDT/NPEiNP00/DIGNPs06AhCAtRINPpXAWE19zT3STX2IlVJJAxAACZJIQsMQAAYSSEEDEAACiEEEkQjNfVCAHRIIzX1QgBtSCM19UIAZkkjDEAAWUkhBQxAAEtINPZXATlJNfQiWzXzNPQhCVs18jT0IQpbNfE08yEIDDTyIQgMEEEADTTxNPI08wgSNfBCAAMiNfA08DTxIQgMEDTxIg0QNfVCAA5IIzX1QgAHSCM19UIAADT1RCEUr0k19DXzIjXyNPwlNPILJVg18TTzKDTyFlA08yJVIhIxADTxEhBNNfM08iMISTXyJAxA/9Q08yJVIxJENPYiVUkkDEAAJkkhCwxAABhJIQQMQAAKIQQSRCM18kIAdEgjNfJCAG1IIzXyQgBmSSMMQABZSSEFDEAAS0g09lcBOUk18SJbNfA08SEJWzXvNPEhCls17jTwIQgMNO8hCAwQQQANNO407zTwCBI17UIAAyI17TTtNO4hCAwQNO4iDRA18kIADkgjNfJCAAdIIzXyQgAANPJENPQ18SI18DT8JTTwCyVYNe808Sg08BZQNPEiVSISMQA07xIQTTXxNPAjCEk18CQMQP/UNPEiVSMSRIAIAAAAAAABEt6wKTUHgATt9gUDMQBQNPZQsDT/NP4iNPFJNfAjWzTwIlVNIQYLNPZdIjT9NPwyBjT7QgDhIhJEgcCaDIgBuLEisgEhB7IQIrIYgAYHMQAyCRKyHoABB7Ifs7Q9NQgiNAESRDQESSISTDQCEhFESTUFNf+ABDIq61k0/1CwgGEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASTX+SUlQNP5QIoAJAAAAAAAAAAAZMgpQgAgAAAAAAAAABVCACAAAAAAAAAAeUDT/MgYiQgAANf81/jX9Nfw1+zX6Nfk0+0EAA0IARTT5NPpQNPxQNP1QNP8WUCpLAVcAf2coSwFXf39nK0sBV/5/ZycESwGB/QKBf1hnJwVLAYH8A4EpWGdIJDUBMgY1AkIALTEZIQQSRLEisgEhB7IQNAiyGCEEshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBzE1EkQiMTYSRCIxNxJEIjUBIjUCIjUIQv+nNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
  warnings: [`Step 2 calls a remote object at /app/index.rsh:165:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable[3]","name":"elem1","type":"address[3]"}],"internalType":"struct T15","name":"v77570","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"indexed":false,"internalType":"struct T4","name":"v1","type":"tuple"}],"name":"Propose","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"indexed":false,"internalType":"struct T1","name":"v1","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"Register","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"indexed":false,"internalType":"struct T4","name":"v2","type":"tuple"}],"name":"Support","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable[3]","name":"elem1","type":"address[3]"}],"indexed":false,"internalType":"struct T15","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"elem0","type":"tuple"}],"internalType":"struct T11","name":"_Triumvir_propose0_68335","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"_Triumvir_support0_68335","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T12","name":"_register0_68335","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v70366","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v70873","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T18","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T19","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T20","name":"v0","type":"tuple"}],"name":"_reach_oe_v70942","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T18","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T19","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T20","name":"v0","type":"tuple"}],"name":"_reach_oe_v70984","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v71503","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info","outputs":[{"components":[{"internalType":"address payable[3]","name":"triumvirs","type":"address[3]"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4[3]","name":"cmds","type":"tuple[3]"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"protoInfo","type":"tuple"}],"internalType":"struct T6","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"v77551","type":"tuple"}],"name":"Triumvir_propose","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v77556","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"v77557","type":"tuple"}],"name":"Triumvir_support","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"elem0","type":"tuple"}],"internalType":"struct T11","name":"_Triumvir_propose0_68335","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T2","name":"_Harvest","type":"tuple"},{"internalType":"bool","name":"_Kill","type":"bool"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"_NewInfo","type":"tuple"},{"internalType":"address payable[3]","name":"_NewTriumvirs","type":"address[3]"},{"internalType":"bool","name":"_NoOp","type":"bool"},{"internalType":"address payable","name":"_Rewards","type":"address"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"_Triumvir_support0_68335","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T12","name":"_register0_68335","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"internalType":"struct T14","name":"v77578","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v77562","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"v77563","type":"tuple"},{"internalType":"address payable","name":"v77564","type":"address"}],"name":"register","outputs":[{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f19608062003ccc3881900390601f820184168301906001600160401b03821184831017620005245782916040528339810190608081830312620005d65760408051919082016001600160401b0381118382101762000524576040528051825282603f82011215620005d657604051926200007b84620005f7565b839160808101918211620005d657602001915b818310620005b4575050506020810191825243600355604051620000b281620005db565b60008152604051620000c481620005f7565b604051620000d281620005f7565b60603682378152620000e362000712565b6020820152620000f26200062f565b6040820152602082015260006040820152600060608201526080620001166200062f565b910152604051916200012883620005f7565b620001326200065c565b835260208301926200014362000712565b84526040810192620001546200062f565b845260ff600454166200059b577fe709fd8c233b0bc15635f5c1669e54669bd1ddfb315ab0dc1efc8633df64d5ca60a060405133815283516020820152620001a2865160408301906200074a565ba15180159081156200058e575b50156200057557346200055c576004815152600060a08251015280518451528051602085510152805160408551015260008351526019602084510152306040845101526005606084510152601e60808451015260405191620002118362000613565b6200021b6200065c565b835260208301946200022c62000712565b86526040840191600083526060850195620002466200062f565b8752600060808701946040516200025d81620005f7565b6060368237865260a088019482865260c0890197838952518952518a5252518652518252439052604051936200029385620005db565b6200029d6200065c565b85526020850193620002ae62000712565b8552620002ba6200062f565b6040870152604051620002cd81620005f7565b60603682376060870152600060808701525195868652518452516040850152516060840152516080830152600360005543600155620003146040519360208501906200077d565b51600061026084015b600382106200053a5750505080608060408193015180511515610920860152602081015161094086015260018060a01b03604082015116610960860152606081015161098086015201516109a08401526200038260608201516109c08501906200074a565b0151610a20828101919091528152610a4081016001600160401b0381118282101762000524576040528051906001600160401b0382116200052457600254600181811c9116801562000519575b60208210146200050357601f811162000499575b50602092601f831160011462000432575091819260009262000426575b50508160011b916000199060031b1c1916176002555b6040516134579081620008758239f35b01519050388062000400565b821692600260005260206000209160005b858110620004805750836001951062000466575b505050811b0160025562000416565b015160001960f88460031b161c1916905538808062000457565b9192602060018192868501518155019401920162000443565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f840160051c81019160208510620004f8575b601f0160051c01905b818110620004eb5750620003e3565b60008155600101620004dc565b9091508190620004d3565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003cf565b634e487b7160e01b600052604160045260246000fd5b6020610240826200054f60019487516200077d565b019301910190916200031d565b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b90506001541438620001af565b60405163100960cb60e01b815260086004820152602490fd5b82516001600160a01b0381168103620005d6578152602092830192016200008e565b600080fd5b60a081019081106001600160401b038211176200052457604052565b606081019081106001600160401b038211176200052457604052565b60e081019081106001600160401b038211176200052457604052565b604051906200063e82620005db565b60006080838281528260208201528260408201528260608201520152565b6040908151916200066d8362000613565b6000808452815190918491608081016001600160401b03811182821017620006fe5790829160c09493528481528151620006a781620005f7565b85815285602082015285838201526020820152848282015284606082015260208301528381830152620006d96200062f565b606083015251620006ea81620005f7565b606036823760808201528260a08201520152565b634e487b7160e01b85526041600452602485fd5b604051906200072182620005f7565b8160005b6060811062000732575050565b6020906200073f6200065c565b818401520162000725565b6000915b600383106200075c57505050565b81516001600160a01b0316815260019290920191602091820191016200074e565b805160068110156200085e57825260208181015180516001600160a01b0390811683860152918101518051939060028510156200085e57606060c093856040819461022099828c015260208101511515858c015201511660808901528260408201511660a0890152015116828601526040810151151560e08601526080606082015180516101008801526020810151610120880152604081015161014088015284606082015116610160880152015115156101808601526200084960808201516101a08701906200074a565b60a08101511515610200860152015116910152565b634e487b7160e01b600052602160045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a6febfe146100b85780631e93b0f1146100af57806330cf5995146100a65780633b02a7171461009d5780634012e02e14610094578063832307571461008b578063ab53f2c6146100825763dfcc43890361000e5761007d610708565b61000e565b5061007d610693565b5061007d610674565b5061007d610595565b5061007d6102f5565b5061007d6101aa565b5061007d61018b565b6102603660031901126101745761017061015e60606100d636610179565b6101576100e1610b22565b80926100eb6111dd565b9060043582526101006020830191369061114b565b81526040519061010f82610839565b6101176111dd565b825260208201926101266117df565b8452518251525160208251015260018251525160408251015261014761182d565b9060008252516020820152611d63565b0151151590565b60405190151581529081906020820190565b0390f35b600080fd5b61024090602319011261017457602490565b5034610174576000366003190112610174576020600354604051908152f35b50610580366003190112610174576101c0610b22565b604051906101cd82610839565b600435825261056036602319011261017457604051916101ec83610861565b60243560038110156101745783526102403660431901126101745761024d926040516102178161087c565b61022036611080565b81526020820152610230366132f2565b604082015261023e3661339f565b60608201526020820152611d63565b60405160008152602090f35b6001600160a01b031690565b6001600160a01b0381160361017457565b610264359061028482610265565b565b610224359061028482610265565b6104c4359061028482610265565b359061028482610265565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b60a08101929161028491906102ad565b5060a03660031901126101745760043561030e81610265565b6060366023190112610174576080610170916103d46084359161033083610265565b610338610a33565b50610341610b22565b9283916103ba6103b06103526117b9565b6001600160a01b039384168152936020850161036d36610b90565b81528460408701921682526040519461038586610839565b61038d6117b9565b8652602086019661039c6117df565b885251168551525160208551015251610259565b6040835101611510565b6103c5825160029052565b5160608251015261014761182d565b0151604051918291826102e5565b6000915b600383106103f357505050565b81516001600160a01b0316815260019290920191602091820191016103e6565b50634e487b7160e01b600052602160045260246000fd5b6006111561043457565b610284610413565b6002111561043457565b60409080516104548161043c565b83526020818101511515908401528101516001600160a01b0316910152565b9061022060c0610284938051600681101561051e575b84526020810151606060018060a01b03918281511660208801526104b560208201516040890190610446565b8260408201511660a0880152015116828501526104db604082015160e086019015159052565b6104ee60608201516101008601906102ad565b61050160808201516101a08601906103e2565b60a0810151151561020085015201516001600160a01b0316910152565b610526610413565b610489565b906000905b6003821061053d57505050565b6020610240826105506001948751610473565b01930191019091610530565b6102849092919261072060406107c08301956105798482516103e2565b61058b6020820151606086019061052b565b01519101906102ad565b5034610174576000366003190112610174576105af610ae5565b506101706105bb610b22565b6105c36111f9565b906105d260036000541461151f565b6105da61090b565b916105ef602093848082518301019101611457565b9061064661063a60408401606081510151845152868151015187855101526080815101516040855101526106336106296040835101611503565b6060865101611510565b5151151590565b60808351019015159052565b836060830151928183019384515201518483510152516040825101525191829101526040519182918261055c565b5034610174576000366003190112610174576020600154604051908152f35b5034610174576000806003193601126107055780546106b061090b565b906040519283918252602090604082840152835191826040850152815b8381106106ee57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016106cd565b80fd5b50610240366003190112610174576101706040610723610b22565b6107d4818351610732816108cd565b60043561073e81610b59565b815261074936610c24565b602082015260e43561075a81610b6d565b8582015261076736610e49565b606082015261077536610f95565b60808201526102043561078781610b6d565b60a0820152610794610286565b60c082015284516107a481610839565b6107ac61179f565b815260208101916107bb6117df565b835281515260008251525160208251015261014761182d565b015160405190151581529081906020820190565b90600182811c92168015610818575b602083101461080257565b634e487b7160e01b600052602260045260246000fd5b91607f16916107f7565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761085457604052565b61085c610822565b604052565b608081019081106001600160401b0382111761085457604052565b602081019081106001600160401b0382111761085457604052565b606081019081106001600160401b0382111761085457604052565b60a081019081106001600160401b0382111761085457604052565b60e081019081106001600160401b0382111761085457604052565b601f909101601f19168101906001600160401b0382119082101761085457604052565b604051906000826002549161091f836107e8565b8083526001938085169081156109935750600114610945575b50610284925003836108e8565b6002600090815260008051602061342b83398151915294602093509091905b81831061097b575050610284935082010138610938565b85548884018501529485019487945091830191610964565b905061028494506020925060ff191682840152151560051b82010138610938565b604051906105c082016001600160401b0381118382101761085457604052565b604051906109e182610897565b6060368337565b604051906109f582610897565b60006040838281528260208201520152565b60405190610a1482610861565b6000606083828152610a246109e8565b60208201528260408201520152565b60405190610a40826108b2565b60006080838281528260208201528260408201528260608201520152565b60405190610a6b826108cd565b600060c083828152610a7b610a07565b6020820152826040820152610a8e610a33565b6060820152604051610a9f81610897565b606036823760808201528260a08201520152565b60405190610ac082610897565b8160005b60608110610ad0575050565b602090610adb610a5e565b8184015201610ac4565b60405190610af282610897565b81604051610aff81610897565b60603682378152610b0e610ab3565b60208201526040610b1d610a33565b910152565b60405190610b2f826108b2565b8160008152610b3c610ae5565b602082015260006040820152600060608201526080610b1d610a33565b6006111561017457565b6002111561017457565b8015150361017457565b610244359061028482610b6d565b359061028482610b6d565b60609060231901126101745760405190610ba982610897565b81602435610bb681610b63565b8152604435610bc481610b6d565b6020820152604060643591610bd883610265565b0152565b60609060831901126101745760405190610bf582610897565b81608435610c0281610b63565b815260a435610c1081610b6d565b6020820152604060c43591610bd883610265565b9060c060231983011261017457604051610c3d81610861565b60608193602435610c4d81610265565b8352604319011261017457604051610c6481610897565b604435610c7081610b63565b8152606435610c7e81610b6d565b6020820152608435610c8f81610265565b6040820152602082015260a435610ca581610265565b6040820152606060c43591610bd883610265565b9060c06102c31983011261017457604051610cd381610861565b606081936102c435610ce481610265565b83526102e319011261017457604051610cfc81610897565b6102e435610d0981610b63565b815261030435610d1881610b6d565b602082015261032435610d2a81610265565b6040820152602082015261034435610d4181610265565b604082015260606103643591610bd883610265565b809291039160c083126101745760405190610d7082610861565b606082948235610d7f81610265565b8452601f1901126101745760a0606091604051610d9b81610897565b6020820135610da981610b63565b81526040820135610db981610b6d565b602082015283820135610dcb81610265565b604082015260208501526080810135610de381610265565b6040850152013591610bd883610265565b60a0906101431901126101745760405190610e0e826108b2565b816101443581526101643560208201526101843560408201526101a435610e3481610265565b606082015260806101c43591610bd883610b6d565b60a0906101031901126101745760405190610e63826108b2565b8161010435815261012435602082015261014435604082015261016435610e8981610265565b606082015260806101843591610bd883610b6d565b60a0906103a31901126101745760405190610eb8826108b2565b816103a43581526103c43560208201526103e435604082015261040435610ede81610265565b606082015260806104243591610bd883610b6d565b91908260a091031261017457604051610f0b816108b2565b60808082948035845260208101356020850152604081013560408501526060810135610f3681610265565b6060850152013591610bd883610b6d565b8061020312156101745760405190610f5e82610897565b81610244918211610174576101e4905b828210610f7b5750505090565b602080918335610f8a81610265565b815201910190610f6e565b806101c312156101745760405190610fac82610897565b81610204918211610174576101a4905b828210610fc95750505090565b602080918335610fd881610265565b815201910190610fbc565b8061046312156101745760405190610ffa82610897565b816104a491821161017457610444905b8282106110175750505090565b60208091833561102681610265565b81520191019061100a565b9080601f83011215610174576040519161104a83610897565b82906060810192831161017457905b8282106110665750505090565b60208091833561107581610265565b815201910190611059565b906102406043198301126101745760405161109a816108cd565b80926044356110a881610b59565b825260c06063198201126101745761112f906040516110c681610861565b6064356110d281610265565b81526110dd82610bdc565b602082015260e4356110ee81610265565b60408201526101043561110081610265565b606082015260208401526101243561111781610b6d565b604084015261112581610df4565b6060840152610f47565b608082015261113c610b77565b60a082015260c0610b1d610276565b919091610240818403126101745760c0610b1d6102206040519361116e856108cd565b6111c08597823561117e81610b59565b875261118d8160208501610d56565b602088015261119e60e08401610b85565b60408801526111b1816101008501610ef3565b60608801526101a08301611031565b60808601526111d26102008201610b85565b60a0860152016102a2565b604051906111ea82610839565b81600081526020610b1d610a5e565b6040519061120682610839565b8161120f610a33565b81526020610b1d610ae5565b519061028482610265565b519061028482610b6d565b809291039160c08312610174576040519061124b82610861565b60608294825161125a81610265565b8452601f19011261017457610b1d60a060609260405161127981610897565b602082015161128781610b63565b8152604082015161129781610b6d565b6020820152848201516112a981610265565b604082015260208601526112bf6080820161121b565b60408601520161121b565b91908260a0910312610174576040516112e2816108b2565b6080808294805184526020810151602085015260408101516040850152606081015161130d81610265565b6060850152015191610bd883610b6d565b9080601f83011215610174576040519161133783610897565b82906060810192831161017457905b8282106113535750505090565b60208091835161136281610265565b815201910190611346565b919091610240818403126101745760c0610b1d61022060405193611390856108cd565b6113e2859782516113a081610b59565b87526113af8160208501611231565b60208801526113c060e08401611226565b60408801526113d38161010085016112ca565b60608801526101a0830161131e565b60808601526113f46102008201611226565b60a08601520161121b565b91908260a091031261017457604051611417816108b2565b6080808294805161142781610b6d565b845260208101516020850152604081015161144181610265565b6040850152606081015160608501520151910152565b610a2081830312610174576040519161146f836108b2565b611479818361136d565b83528061025f830112156101745760405161149381610897565b806109008401918383116101745761024090818601905b8482106114ea57505050916114cc816114db93610a00969560208901526113ff565b60408601526109a0830161131e565b60608401520151608082015290565b602083916114f8888561136d565b8152019101906114aa565b516001600160a01b031690565b6001600160a01b039091169052565b1561152657565b60405163100960cb60e01b815260076004820152602490fd5b1561154657565b60405163100960cb60e01b8152600b6004820152602490fd5b1561156657565b60405163100960cb60e01b8152600c6004820152602490fd5b1561158657565b60405163100960cb60e01b8152600d6004820152602490fd5b156115a657565b60405163100960cb60e01b8152601e6004820152602490fd5b156115c657565b60405163100960cb60e01b8152601f6004820152602490fd5b156115e657565b60405163100960cb60e01b815260136004820152602490fd5b1561160657565b60405163100960cb60e01b815260146004820152602490fd5b1561162657565b60405163100960cb60e01b815260156004820152602490fd5b1561164657565b60405163100960cb60e01b815260166004820152602490fd5b1561166657565b60405163100960cb60e01b815260176004820152602490fd5b1561168657565b60405163100960cb60e01b815260186004820152602490fd5b156116a657565b60405163100960cb60e01b815260196004820152602490fd5b156116c657565b60405163100960cb60e01b8152601d6004820152602490fd5b156116e657565b60405163100960cb60e01b8152601b6004820152602490fd5b1561170657565b60405163100960cb60e01b8152600e6004820152602490fd5b1561172657565b60405163100960cb60e01b8152600f6004820152602490fd5b1561174657565b60405163100960cb60e01b815260106004820152602490fd5b1561176657565b60405163100960cb60e01b815260116004820152602490fd5b1561178657565b60405163100960cb60e01b815260126004820152602490fd5b604051906117ac8261087c565b816117b5610a5e565b9052565b604051906117c682610897565b60006040838281526117d66109e8565b60208201520152565b604051906117ec82610861565b81600081526040516117fd8161087c565b611805610a5e565b815260208201526118146111dd565b60408201526060610b1d6117b9565b6003111561043457565b6040519061183a82610839565b81600081526020610b1d6117df565b6040519061185682610839565b6000825260405160208361186983610839565b60405161187581610839565b6000815260008382015283526000828401520152565b6118936109b4565b9061189c61179f565b825260008060208401526118ae610a33565b60408401528060608401526118c16109e8565b60808401526118ce6109e8565b60a08401526118db6109e8565b60c08401528060e08401526118ee6109e8565b61010084015280610120840152611903610a33565b610140840152806101608401526119186109e8565b6101808401526119266109e8565b6101a0840152806101c084015261193b6109e8565b6101e08401526119496111dd565b6102008401526119576109e8565b6102208401526119656109e8565b6102408401526119736109e8565b610260840152806102808401526119886109e8565b6102a08401526119966109e8565b6102c08401526119a46109e8565b6102e0840152806103008401526119b96109e8565b6103208401526119c7610ab3565b6103408401526119d5610a07565b610360840152806103808401526119ea610a33565b6103a08401526119f8611849565b6103c0840152611a06611849565b6103e08401528061040084015280610420840152611a22610a33565b610440840152611a30611849565b610460840152611a3e611849565b610480840152611a4c610a33565b6104a0840152611a5a610a33565b6104c0840152611a686109d4565b6104e08401528061050084015280610520840152611a846117b9565b610540840152611a92610a33565b610560840152806105808401526105a0830152565b90610580909392936040606060206105a086019760018060a01b038095168752805182880152015180516003811015611b36575b83870152611af160208201518388019051610473565b611b0f60208483015180516102a08a015201516102c0880190610473565b015182815116610500860152611b2e6020820151610520870190610446565b015116910152565b611b3e610413565b611adb565b516003811015611b505790565b611b58610413565b90565b6001600160a01b03918216815260a08101949390926080929190611b83906020860190610446565b16910152565b60405190611b96826108cd565b600060c083611ba3610a5e565b8152610a7b610ab3565b50634e487b7160e01b600052601160045260246000fd5b6001906000198114611bd4570190565b611bdc611bad565b0190565b906003811015611bf15760051b0190565b634e487b7160e01b600052603260045260246000fd5b51611b588161043c565b610240810192916102849190610473565b6001600160a01b0390911681526020810191909152610280810192916102849160400190610473565b516006811015611b505790565b506040513d6000823e3d90fd5b6001600160a01b03909116815260c08101929161028491602001906102ad565b3d15611ccd573d906001600160401b038211611cc0575b60405191611cb4601f8201601f1916602001846108e8565b82523d6000602084013e565b611cc8610822565b611c9c565b606090565b8091039060608212610174576040805192611cec84610839565b12610174576040908151611cff81610839565b815181526020820151602082015283520151602082015290565b815181526020918201518051805184840152830151604083015290910151606082015260800190565b6001600160a01b039091168152610260810192916102849160200190610473565b919091611d6e61188b565b90611d8a611d85611d8160045460ff1690565b1590565b61153f565b7f7dc5b063ebecd5e4f9a2a46896f69134a3f12fab54c98e10ef56622c725ae9f660405180611dba843383611aa7565b0390a1600393611dcd856000541461155f565b6020611de8611dda61090b565b828082518301019101611457565b92611dfe81518015908115612eee575b5061157f565b01611e098151611b43565b611e1281611823565b6123d5576020611e289151015180855251611c4b565b611e318161042a565b61227e57600160208401525b611e52611e4d6020850151151590565b6116ff565b60808301946000865152600060208751015285519560c08501968752600096606085019760e08701906101008801905b8a86821061220857505050506001611eb491518060a089015251611ea58161043c565b611eae8161043c565b1461171f565b611ebe341561173f565b611ec9855151611c4b565b611ed28161042a565b6120a85760016101208601525b611ef5611ef0610120870151151590565b61175f565b516101a08501908152906101e085016101c0860160005b838110612028575050505094611ff2608093926000604061028498995192611f5160016101808b019580875251611f428161043c565b611f4b8161043c565b1461177f565b8151600081527f525037b1644d6bf6db10e8adba693e5e73a01a50cb0ac63a6b172940f93e96c790602090a101527f510fa3e00163331e7163ef9e01f872b444c3d8848dda15e731d1789d76c63618611fb38751516040519182913383611d42565b0390a1611fbe611b89565b95845187526020850151916001611fd58251611c07565b611fde8161043c565b0361201f575160400151905b515191612f7c565b6020850152600060408501526040820151606085015251828401524360a0840152015160c082015261326c565b50600090611fea565b8061204861204261203d612095948e51611be0565b611503565b84611510565b612053845160019052565b806040855101526120648651611c07565b61206d8161043c565b6120a15761208361207e8451610259565b610259565b33145b1561209a5783515b8652611bc4565b611f0c565b855161208e565b6000612086565b60016120b5865151611c4b565b6120be8161042a565b036120d15760016101208601525b611edf565b60026120de865151611c4b565b6120e78161042a565b03612191576060855151015161014086019080825260648151106000146121895760206064910151105b1561217c5761213a81516121316040820151916020810151905190612efa565b14610160880152565b61016086015115612175576064604082510151105b1561216a5760406120cc9151015115155b1515610120870152565b506120cc6000612160565b600061214f565b600061016087015261213a565b506000612111565b8161219d865151611c4b565b6121a68161042a565b036121b8576001610120860152611edf565b60046121c5865151611c4b565b6121ce8161042a565b036121e0576001610120860152611edf565b60056121ed865151611c4b565b6121f68161042a565b036120cc576001610120860152611edf565b9061222361221d61203d8361226b9551611be0565b85611510565b61222e835160019052565b8060408451015261223f8551611c07565b6122488161043c565b6122775761225961207e8551610259565b33145b156122705782515b8552611bc4565b611e82565b8451612264565b600061225c565b600161228b845151611c4b565b6122948161042a565b036122a657600160208401525b611e3d565b60026122b3845151611c4b565b6122bc8161042a565b036123615760608351510151604084019080825260648151106000146123595760206064910151105b1561234d5761230d81516123056040820151916020810151905190612efa565b146060860152565b606084015115612346576064604082510151105b1561233b5760406122a19151015115155b15156020850152565b506122a16000612332565b6000612321565b6000606085015261230d565b5060006122e5565b8461236d845151611c4b565b6123768161042a565b036123875760016020840152611e3d565b6004612394845151611c4b565b61239d8161042a565b036123ae5760016020840152611e3d565b60056123bb845151611c4b565b6123c48161042a565b036122a15760016020840152611e3d565b60016123e5829794969751611b43565b6123ee81611823565b03612d5c5782604061240b925101518061020087015251106115df565b610220830160008151526000602082510152805161026085019081526000610280860190876102a08801915b878110612d3e57505050505161246a60016102408701928084525161245b8161043c565b6124648161043c565b146115ff565b6102008501515190600161247e8251611c07565b6124878161043c565b03612d35575160400151905b03612d2b576124a2600061161f565b612509602061020086015101516040516124d2816124c4602082019485611c11565b03601f1981018352826108e8565b5190206124ea60208801516102008801515190611be0565b51604051612500816124c4602082019485611c11565b5190201461163f565b612513341561165f565b516102e084019081526103008401610320850160005b858110612d0e575050506000916060915161256160016102c0880192808452516125528161043c565b61255b8161043c565b1461167f565b610200860151519060016125758251611c07565b61257e8161043c565b148514612d06575160400151905b148314612cfc5761259c8361169f565b6125b3602087015161020087015151885191612f7c565b610340860152604051600081527fecbb55eb21e57c78eb700ea9e1c2f98e83f647b4c6dbcb13b35a2cf207946e9590602090a101527f1ca272bbb6018d7b99180311121f45ec91a0b47a19077a7badd69e3dbd0db37e6102008301515161261e816020870151611be0565b51906126306040519283923384611c22565b0390a161265161264b60208501516102008501515190611be0565b51611c4b565b61265a8161042a565b61299257506020612675818401516102008401515190611be0565b5101519161268e60206103608401948086520151611c07565b6126978161043c565b61284457608081836127b1600080612757610284998261276b604061207e9b019a8b9361270c612701606087510151966103a08d01978851526020815101516020895101528e815101516040895101526106336126f76040835101611503565b60608a5101611510565b8d8751019015159052565b610580479a01998a52612727600160ff196004541617600455565b6127656127376060835101611503565b9551604051978891602083019863038da9cb60e21b8a5260248401611c65565b03601f1981018852876108e8565b51611503565b9251925af19161278361277c611c85565b8094612f4c565b5061279360ff1960045416600455565b4790519003916103c087019283515260208082518301019101611cd2565b60208251015251927f9b88ed534d5c6836f0d1925bba456f75ada69bf31bef0726a4a12ea6f74500966127f26103e087019580875260405191829182611d19565b0390a1612801845151156116df565b61034061280c611b89565b958351875201516020860152600060408601525160608501526060810151828501524360a085015201519051510160c082015261326c565b6001612854602085510151611c07565b61285d8161043c565b1461286757505050565b608061207e91836129426000806127578961289961288f604060206102849e51015101611503565b6104008801611510565b826128fc604089019a8b936128e1612701606087510151966104408d01978851526020815101516020895101528e815101516040895101526106336126f76040835101611503565b6105a0479a01998a52612727600160ff196004541617600455565b9251925af19161291461290d611c85565b8094612f1c565b5061292460ff1960045416600455565b47905190039161046087019283515260208082518301019101611cd2565b60208251015251927f21069e420717cbe75e06a8fdf35509b54df625a48ca9e8fd18264278a839761e61298361048087019580875260405191829182611d19565b0390a1612801845151156116bf565b60016129ac61264b60208601516102008601515190611be0565b6129b58161042a565b03612a0457506080610284926103406129cc611b89565b82518152930151602084015260016040840152604081015160608401526060810151828401524360a0840152015160c082015261326c565b6002612a1e61264b60208601516102008601515190611be0565b612a278161042a565b03612aeb57506080826060612a4a60206102849601516102008601515190611be0565b5101516040612a63846104a08701938085520151151590565b91612a766104c087019384519015159052565b602081510151602084510152612a9b612a926060835101611503565b83855101611510565b8051516060845101525101518382510152610340612ab7611b89565b948351865201516020850152600060408501525160608401526060810151828401524360a0840152015160c082015261326c565b612b0361264b60208501516102008501515190611be0565b612b0c8161042a565b03612b775760808281612b2d60206102849601516102008601515190611be0565b5101516104e08401908152610340612b43611b89565b948351865201516020850152600060408501526040820151606085015251828401524360a0840152015160c082015261326c565b6004612b9161264b60208501516102008501515190611be0565b612b9a8161042a565b03612be857608061028492610340612bb0611b89565b93825185520151602084015260006040840152604081015160608401526060810151828401524360a0840152015160c082015261326c565b6005612c0261264b60208501516102008501515190611be0565b612c0b8161042a565b14612c14575050565b81612ccb612c3c60c0612c3560206102849701516102008701515190611be0565b5101611503565b91612c4c61050085019384611510565b60808101805190916060914781811015612cef5750506000808080805b612c7e61207e6105208d019b838d5251610259565b828215612ce6575bf115612cd9575b610340612c98611b89565b96825188520151602087015260006040870152604081015182870152015160808501524360a08501528251905190612efa565b9051900360c082015261326c565b612ce1611c58565b612c8d565b506108fc612c86565b6000808093819303612c69565b61259c600161169f565b50839061258c565b8061222361221d61203d612d269460608d0151611be0565b612529565b6124a2600161161f565b50600090612493565b61222361221d61203d836060612d55960151611be0565b8890612437565b939091506002612d6c8551611b43565b612d7581611823565b14612d81575b50505050565b7ffe325ddb46ceb5c5c02d1b18bc5e927e25bc0ec2cf49203c2ae8c0c355b290cf6080926060612ee59651015190612dd56105408701928084523390612dce60018060a01b039151610259565b161461159f565b612ddf34156115bf565b8460408501966105606060895101519101908151526020885101516020825101528188510151604082510152612e25612e1b60408a5101611503565b6060835101611510565b612e3e612e33895151151590565b838351019015159052565b7f5358ceaba769a05504fbdfcf4b83c2d3211aaad35400abb53dad9f4433fc5c6a612e708251604051918291826102e5565b0390a15191015251612e828151610259565b612ea3612e9760406020850151940151610259565b60405193849384611b5b565b0390a1612eae611b89565b928151845260208201516020850152600060408501525160608401526060810151828401524360a0840152015160c082015261326c565b38808080612d7b565b90506001541438611df8565b9190820191828111612f0f575b821061017457565b612f17611bad565b612f07565b15612f245790565b805115612f3357805190602001fd5b60405163100960cb60e01b8152601c6004820152602490fd5b15612f545790565b805115612f6357805190602001fd5b60405163100960cb60e01b8152601a6004820152602490fd5b9291612f86610ab3565b9360005b60038110612fad57505090612faa91612fa38286611be0565b5283611be0565b50565b80612fbb612fd79284611be0565b51612fc68289611be0565b52612fd18188611be0565b50611bc4565b612f8a565b60405190612fe9826108b2565b6000608083612ff6610a5e565b8152613000610ab3565b602082015261300d610a33565b604082015260405161301e81610897565b606036823760608201520152565b919091610a006080610a20830194613045848251610473565b613058602082015161024086019061052b565b604081810151805115156109008701526020810151610920870152908101516001600160a01b0316610940860152606080820151610960870152908301516109808601528101516130ae906109a08601906103e2565b0151910152565b8181106130c0575050565b600081556001016130b5565b90601f82116130d9575050565b6102849160026000526020600020906020601f840160051c83019310613107575b601f0160051c01906130b5565b90915081906130fa565b80519091906001600160401b0381116131e7575b613139816131346002546107e8565b6130cc565b602080601f8311600114613175575081929360009261316a575b50508160011b916000199060031b1c191617600255565b015190503880613153565b6002600052601f1983169490919060008051602061342b833981519152926000905b8782106131cf5750508360019596106131b6575b505050811b01600255565b015160001960f88460031b161c191690553880806131ab565b80600185968294968601518155019501930190613197565b6131ef610822565b613125565b6131ff6002546107e8565b806132075750565b601f811160011461321a57506000600255565b600260005261325f90601f0160051c60008051602061342b833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6130b5565b6000602081208160025555565b60408101511561328d5750600080556132856000600155565b6102846131f4565b6124c46132ed6102849260c06132a1612fdc565b9180518352602081015160208401526060810151604084015260808101516060840152015160808201526132d56003600055565b6132de43600155565b6040519283916020830161302c565b613111565b9061026061028319830112610174576040519161330e83610839565b610284358352826102406102a3198301126101745760209061337760405193613336856108cd565b6102a43561334381610b59565b855261334e81610cb9565b848601526103843561335f81610b6d565b604086015261336d81610e9e565b6060860152610fe3565b60808401526104a43561338981610b6d565b60a0840152613396610294565b60c08401520152565b9060a06104e319830112610174576040516133b981610897565b606081936104e4356133ca81610265565b8352610503190112610174576040516133e281610897565b610504356133ef81610b63565b8152610524356133fe81610b6d565b60208201526105443561341081610265565b6040820152602082015260406105643591610bd88361026556fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
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
