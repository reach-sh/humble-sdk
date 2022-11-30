// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  return {
    migrated: [ctc0, ctc1, ctc0, ctc1],
    withdrew: [ctc0, ctc1, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Struct([['name', ctc0], ['v2lpToken', ctc1], ['v3lpToken', ctc1], ['tokA', ctc1], ['tokB', ctc1], ['v2PoolId', ctc2], ['v3PoolId', ctc2]]);
  
  const _admin = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v6006, v6007, v6008, v6009, v6010, v6011, v6012, v6077, v6081, v6082] = svs;
      return (await ((async () => {
        
        
        return v6077;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v6006, v6007, v6008, v6009, v6010, v6011, v6012, v6077, v6081, v6082] = svs;
      return (await ((async () => {
        
        const v6074 = {
          name: v6006,
          tokA: v6009,
          tokB: v6010,
          v2PoolId: v6011,
          v2lpToken: v6007,
          v3PoolId: v6012,
          v3lpToken: v6008
          };
        
        return v6074;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      admin: {
        decode: _admin,
        dom: [],
        rng: ctc3
        },
      info: {
        decode: _info,
        dom: [],
        rng: ctc8
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc3, ctc7, ctc4]
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Struct([['name', ctc0], ['v2lpToken', ctc1], ['v3lpToken', ctc1], ['tokA', ctc1], ['tokB', ctc1], ['v2PoolId', ctc2], ['v3PoolId', ctc2]]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    changeAdmin0_4622: ctc6,
    halt0_4622: ctc7,
    migrate0_4622: ctc9,
    withdraw0_4622: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc12 = stdlib.T_Struct([['A', ctc8], ['B', ctc8]]);
  const ctc13 = stdlib.T_Tuple([ctc8, ctc11, ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc8, ctc9, ctc8]);
  
  
  const v5948 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v5949 = [v5948, v5948, v5948, v5948];
  const v5953 = stdlib.protect(ctc3, interact.opts, 'for Admin\'s interact field opts');
  const v5954 = v5953.name;
  const v5955 = v5953.v2lpToken;
  const v5956 = v5953.v3lpToken;
  const v5957 = v5953.tokA;
  const v5958 = v5953.tokB;
  const v5959 = v5953.v2PoolId;
  const v5960 = v5953.v3PoolId;
  
  const v5972 = stdlib.digest([ctc2], [v5959]);
  const v5973 = stdlib.digest([ctc2], [v5960]);
  const v5974 = stdlib.digestEq(v5972, v5973);
  const v5975 = v5974 ? false : true;
  stdlib.assert(v5975, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:62:16:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)', 'at ./poolMigrator.rsh:60:15:application call to [unknown function] (defined at: ./poolMigrator.rsh:60:19:function exp)'],
    msg: 'Identical V2 and V3 Pool Ids',
    who: 'Admin'
    });
  const v5977 = stdlib.tokenEq(v5957, v5958);
  const v5978 = v5977 ? false : true;
  stdlib.assert(v5978, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:62:16:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)', 'at ./poolMigrator.rsh:60:15:application call to [unknown function] (defined at: ./poolMigrator.rsh:60:19:function exp)'],
    msg: 'Identical Token A and B',
    who: 'Admin'
    });
  const v5982 = stdlib.tokenEq(v5957, v5955);
  const v5984 = stdlib.tokenEq(v5957, v5956);
  const v5985 = v5984 ? false : true;
  const v5986 = v5982 ? false : v5985;
  const v5987 = v5977 ? false : v5986;
  const v5988 = stdlib.tokenEq(v5958, v5955);
  const v5990 = stdlib.tokenEq(v5958, v5956);
  const v5991 = v5990 ? false : true;
  const v5992 = v5988 ? false : v5991;
  const v5993 = stdlib.tokenEq(v5955, v5956);
  const v5994 = v5993 ? false : true;
  const v5995 = v5992 ? v5994 : false;
  const v5996 = v5987 ? v5995 : false;
  stdlib.assert(v5996, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:62:16:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)', 'at ./poolMigrator.rsh:60:15:application call to [unknown function] (defined at: ./poolMigrator.rsh:60:19:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v5954, v5955, v5956, v5957, v5958, v5959, v5960],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6006, v6007, v6008, v6009, v6010, v6011, v6012], secs: v6014, time: v6013, didSend: v4505, from: v6005 } = txn1;
      
      const v6015 = v5949[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0')];
      const v6016 = stdlib.Array_set(v6015, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
      const v6017 = stdlib.Array_set(v5949, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'), v6016);
      const v6019 = v6017[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '1')];
      const v6020 = stdlib.Array_set(v6019, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
      const v6021 = stdlib.Array_set(v6017, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '1'), v6020);
      const v6025 = v6021[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '2')];
      const v6026 = stdlib.Array_set(v6025, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
      const v6027 = stdlib.Array_set(v6021, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '2'), v6026);
      const v6034 = v6027[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '3')];
      const v6035 = stdlib.Array_set(v6034, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
      const v6036 = stdlib.Array_set(v6027, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '3'), v6035);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6007
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6008
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6009
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6010
        });
      ;
      const v6075 = await ctc.getContractInfo();
      
      const v6077 = v6005;
      const v6078 = true;
      const v6079 = v6013;
      const v6081 = v6036;
      const v6082 = stdlib.checkedBigNumberify('./poolMigrator.rsh:46:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v6078;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v7863 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '2')];
        const v7864 = v7863[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '0')];
        const v7872 = stdlib.sub(v7864, v7864);
        const v7876 = stdlib.Array_set(v7863, '0', v7872);
        const v7877 = stdlib.Array_set(v6081, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '2'), v7876);
        sim_r.txns.push({
          kind: 'from',
          to: v6077,
          tok: v6009
          });
        const v7878 = v7877[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '3')];
        const v7879 = v7878[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
        const v7885 = stdlib.sub(v7879, v7879);
        const v7889 = stdlib.Array_set(v7878, '0', v7885);
        const v7890 = stdlib.Array_set(v7877, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '3'), v7889);
        sim_r.txns.push({
          kind: 'from',
          to: v6077,
          tok: v6010
          });
        const v7891 = v7890[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        const v7892 = v7891[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v6077,
          tok: v6007
          });
        const v7909 = stdlib.sub(v6082, v6082);
        sim_r.txns.push({
          kind: 'from',
          to: v6077,
          tok: undefined /* Nothing */
          });
        const v7913 = (stdlib.le(await ctc.getBalance(), v7909) ? stdlib.checkedBigNumberify('./poolMigrator.rsh:230:31:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v7909));
        sim_r.txns.push({
          kind: 'from',
          to: v6077,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v6010
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v6009
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v6008
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v6007
          })
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
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v6006, v6007, v6008, v6009, v6010, v6011, v6012], secs: v6014, time: v6013, didSend: v4505, from: v6005 } = txn1;
  const v6015 = v5949[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0')];
  const v6016 = stdlib.Array_set(v6015, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
  const v6017 = stdlib.Array_set(v5949, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'), v6016);
  const v6019 = v6017[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '1')];
  const v6020 = stdlib.Array_set(v6019, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
  const v6021 = stdlib.Array_set(v6017, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '1'), v6020);
  const v6023 = stdlib.tokenEq(v6008, v6007);
  const v6024 = v6023 ? false : true;
  stdlib.assert(v6024, {
    at: './poolMigrator.rsh:67:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v6025 = v6021[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '2')];
  const v6026 = stdlib.Array_set(v6025, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
  const v6027 = stdlib.Array_set(v6021, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '2'), v6026);
  const v6029 = stdlib.tokenEq(v6009, v6007);
  const v6031 = stdlib.tokenEq(v6009, v6008);
  const v6032 = v6031 ? false : true;
  const v6033 = v6029 ? false : v6032;
  stdlib.assert(v6033, {
    at: './poolMigrator.rsh:67:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v6034 = v6027[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '3')];
  const v6035 = stdlib.Array_set(v6034, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
  const v6036 = stdlib.Array_set(v6027, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '3'), v6035);
  const v6038 = stdlib.tokenEq(v6010, v6007);
  const v6040 = stdlib.tokenEq(v6010, v6008);
  const v6041 = v6040 ? false : true;
  const v6042 = stdlib.tokenEq(v6010, v6009);
  const v6043 = v6042 ? false : true;
  const v6044 = v6040 ? false : v6043;
  const v6045 = v6038 ? false : v6044;
  stdlib.assert(v6045, {
    at: './poolMigrator.rsh:67:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  ;
  ;
  const v6048 = stdlib.digest([ctc2], [v6011]);
  const v6049 = stdlib.digest([ctc2], [v6012]);
  const v6050 = stdlib.digestEq(v6048, v6049);
  const v6051 = v6050 ? false : true;
  stdlib.assert(v6051, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:68:14:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)'],
    msg: 'Identical V2 and V3 Pool Ids',
    who: 'Admin'
    });
  const v6053 = stdlib.tokenEq(v6009, v6010);
  const v6054 = v6053 ? false : true;
  stdlib.assert(v6054, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:68:14:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)'],
    msg: 'Identical Token A and B',
    who: 'Admin'
    });
  const v6068 = v6038 ? false : v6041;
  const v6069 = stdlib.tokenEq(v6007, v6008);
  const v6070 = v6069 ? false : true;
  const v6071 = v6068 ? v6070 : false;
  const v6072 = v6053 ? false : v6071;
  stdlib.assert(v6072, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:68:14:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  const v6075 = await ctc.getContractInfo();
  stdlib.protect(ctc4, await interact.done(v6075), {
    at: './poolMigrator.rsh:81:24:application',
    fs: ['at ./poolMigrator.rsh:81:24:application call to [unknown function] (defined at: ./poolMigrator.rsh:81:24:function exp)', 'at ./poolMigrator.rsh:81:24:application call to "liftedInteract" (defined at: ./poolMigrator.rsh:81:24:application)'],
    msg: 'done',
    who: 'Admin'
    });
  
  let v6077 = v6005;
  let v6078 = true;
  let v6079 = v6013;
  let v6081 = v6036;
  let v6082 = stdlib.checkedBigNumberify('./poolMigrator.rsh:46:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return v6078;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v6196], secs: v6198, time: v6197, didSend: v5056, from: v6195 } = txn3;
    switch (v6196[0]) {
      case 'changeAdmin0_4622': {
        const v6199 = v6196[1];
        undefined /* setApiDetails */;
        const v6242 = stdlib.le(v6082, stdlib.UInt_max);
        stdlib.assert(v6242, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6244 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v6245 = v6244[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v6247 = stdlib.le(v6245, stdlib.UInt_max);
        stdlib.assert(v6247, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6253 = v6199[stdlib.checkedBigNumberify('./poolMigrator.rsh:158:12:spread', stdlib.UInt_max, '0')];
        const v6254 = stdlib.addressEq(v6195, v6077);
        stdlib.assert(v6254, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:163:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:163:18:function exp)'],
          msg: 'UNAUTHORIZED ACTION',
          who: 'Admin'
          });
        const v6256 = stdlib.addressEq(v6077, v6253);
        const v6257 = v6256 ? false : true;
        stdlib.assert(v6257, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:160:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:163:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:163:18:function exp)'],
          msg: 'New and old admin are the same',
          who: 'Admin'
          });
        const v6260 = null;
        await txn3.getOutput('changeAdmin', 'v6260', ctc4, v6260);
        const cv6077 = v6253;
        const cv6078 = true;
        const cv6079 = v6197;
        const cv6081 = v6081;
        const cv6082 = v6082;
        
        v6077 = cv6077;
        v6078 = cv6078;
        v6079 = cv6079;
        v6081 = cv6081;
        v6082 = cv6082;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'halt0_4622': {
        const v6615 = v6196[1];
        undefined /* setApiDetails */;
        const v6658 = stdlib.le(v6082, stdlib.UInt_max);
        stdlib.assert(v6658, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6660 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v6661 = v6660[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v6663 = stdlib.le(v6661, stdlib.UInt_max);
        stdlib.assert(v6663, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6685 = stdlib.addressEq(v6195, v6077);
        stdlib.assert(v6685, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:175:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:175:18:function exp)'],
          msg: 'UNAUTHORIZED ACTION',
          who: 'Admin'
          });
        const v6687 = null;
        await txn3.getOutput('halt', 'v6687', ctc4, v6687);
        const cv6077 = v6077;
        const cv6078 = false;
        const cv6079 = v6197;
        const cv6081 = v6081;
        const cv6082 = v6082;
        
        v6077 = cv6077;
        v6078 = cv6078;
        v6079 = cv6079;
        v6081 = cv6081;
        v6082 = cv6082;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'migrate0_4622': {
        const v7031 = v6196[1];
        undefined /* setApiDetails */;
        const v7046 = v7031[stdlib.checkedBigNumberify('./poolMigrator.rsh:202:12:spread', stdlib.UInt_max, '0')];
        const v7047 = stdlib.gt(v7046, stdlib.checkedBigNumberify('./poolMigrator.rsh:203:25:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v7047, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:202:40:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)', 'at ./poolMigrator.rsh:145:16:application call to [unknown function] (defined at: ./poolMigrator.rsh:145:16:function exp)'],
          msg: 'Must exchange more than 0 LP tokens',
          who: 'Admin'
          });
        const v7074 = stdlib.le(v6082, stdlib.UInt_max);
        stdlib.assert(v7074, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7076 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v7077 = v7076[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v7078 = stdlib.add(v7077, v7046);
        const v7079 = stdlib.le(v7078, stdlib.UInt_max);
        stdlib.assert(v7079, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7082 = stdlib.Array_set(v7076, '0', v7078);
        const v7083 = stdlib.Array_set(v6081, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v7082);
        ;
        const v7117 = v7083[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7118 = v7117[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7122 = stdlib.sub(v7118, v7046);
        const v7123 = stdlib.ge(v7122, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7123, {
          at: './poolMigrator.rsh:116:34:application',
          fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7126 = stdlib.Array_set(v7117, '0', v7122);
        const v7127 = stdlib.Array_set(v7083, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0'), v7126);
        const v7128 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v7129 = undefined /* Remote */;
        const v7130 = await txn3.getOutput('internal', 'v7129', ctc13, v7129);
        const v7132 = v7130[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7133 = v7130[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
        const v7135 = v7133[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7136 = v7133[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
        const v7143 = stdlib.add(v6082, v7132);
        const v7144 = stdlib.le(v7143, stdlib.UInt_max);
        stdlib.assert(v7144, {
          at: './poolMigrator.rsh:116:34:application',
          fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7147 = v7127[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2')];
        const v7148 = v7147[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7149 = stdlib.add(v7148, v7135);
        const v7150 = stdlib.le(v7149, stdlib.UInt_max);
        stdlib.assert(v7150, {
          at: './poolMigrator.rsh:116:34:application',
          fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7153 = stdlib.Array_set(v7147, '0', v7149);
        const v7154 = stdlib.Array_set(v7127, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2'), v7153);
        const v7156 = v7154[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3')];
        const v7157 = v7156[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7158 = stdlib.add(v7157, v7136);
        const v7159 = stdlib.le(v7158, stdlib.UInt_max);
        stdlib.assert(v7159, {
          at: './poolMigrator.rsh:116:34:application',
          fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7162 = stdlib.Array_set(v7156, '0', v7158);
        const v7163 = stdlib.Array_set(v7154, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3'), v7162);
        const v7169 = stdlib.eq(v7132, stdlib.checkedBigNumberify('./poolMigrator.rsh:117:24:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v7169, {
          at: './poolMigrator.rsh:117:16:application',
          fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'Received unexpected tokens',
          who: 'Admin'
          });
        const v7170 = stdlib.gt(v7135, stdlib.checkedBigNumberify('./poolMigrator.rsh:118:25:decimal', stdlib.UInt_max, '0'));
        const v7171 = stdlib.gt(v7136, stdlib.checkedBigNumberify('./poolMigrator.rsh:118:32:decimal', stdlib.UInt_max, '0'));
        const v7172 = v7170 ? v7171 : false;
        stdlib.assert(v7172, {
          at: './poolMigrator.rsh:118:16:application',
          fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'Received invalid A or B amount',
          who: 'Admin'
          });
        const v7175 = v7163[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '2')];
        const v7176 = v7175[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '0')];
        const v7177 = stdlib.eq(v7135, v7176);
        stdlib.assert(v7177, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:210:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'Invalid contract state',
          who: 'Admin'
          });
        const v7179 = v7163[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '3')];
        const v7180 = v7179[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '0')];
        const v7181 = stdlib.eq(v7136, v7180);
        stdlib.assert(v7181, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:210:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'Invalid contract state',
          who: 'Admin'
          });
        const v7211 = stdlib.sub(v7176, v7135);
        const v7212 = stdlib.ge(v7211, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7212, {
          at: './poolMigrator.rsh:136:33:application',
          fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7215 = stdlib.Array_set(v7175, '0', v7211);
        const v7216 = stdlib.Array_set(v7163, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '2'), v7215);
        const v7217 = v7216[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '3')];
        const v7218 = v7217[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v7222 = stdlib.sub(v7218, v7136);
        const v7223 = stdlib.ge(v7222, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7223, {
          at: './poolMigrator.rsh:136:33:application',
          fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7226 = stdlib.Array_set(v7217, '0', v7222);
        const v7227 = stdlib.Array_set(v7216, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '3'), v7226);
        const v7228 = [v7046];
        const v7229 = {
          A: v7135,
          B: v7136
          };
        const v7230 = undefined /* Remote */;
        const v7231 = await txn3.getOutput('internal', 'v7230', ctc14, v7230);
        const v7233 = v7231[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v7234 = v7231[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '1')];
        const v7235 = v7231[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '2')];
        const v7236 = v7234[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v7241 = stdlib.add(v7143, v7233);
        const v7242 = stdlib.le(v7241, stdlib.UInt_max);
        stdlib.assert(v7242, {
          at: './poolMigrator.rsh:136:33:application',
          fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7245 = v7227[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '1')];
        const v7246 = v7245[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v7247 = stdlib.add(v7246, v7236);
        const v7248 = stdlib.le(v7247, stdlib.UInt_max);
        stdlib.assert(v7248, {
          at: './poolMigrator.rsh:136:33:application',
          fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7251 = stdlib.Array_set(v7245, '0', v7247);
        const v7252 = stdlib.Array_set(v7227, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '1'), v7251);
        const v7257 = stdlib.ge(v7235, v7046);
        stdlib.assert(v7257, {
          at: './poolMigrator.rsh:138:16:application',
          fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'LP change due to slippage',
          who: 'Admin'
          });
        const v7259 = stdlib.gt(v7235, stdlib.checkedBigNumberify('./poolMigrator.rsh:215:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v7259, {
          at: './poolMigrator.rsh:215:20:application',
          fs: ['at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'Possible slippage in new pool',
          who: 'Admin'
          });
        const v7260 = v7252[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '2')];
        const v7261 = v7260[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '0')];
        const v7269 = stdlib.sub(v7261, v7261);
        const v7270 = stdlib.ge(v7269, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7270, {
          at: './poolMigrator.rsh:88:26:application',
          fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7273 = stdlib.Array_set(v7260, '0', v7269);
        const v7274 = stdlib.Array_set(v7252, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '2'), v7273);
        ;
        const v7275 = v7274[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '3')];
        const v7276 = v7275[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
        const v7282 = stdlib.sub(v7276, v7276);
        const v7283 = stdlib.ge(v7282, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7283, {
          at: './poolMigrator.rsh:89:39:application',
          fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7286 = stdlib.Array_set(v7275, '0', v7282);
        const v7287 = stdlib.Array_set(v7274, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '3'), v7286);
        ;
        const v7288 = v7287[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        const v7289 = v7288[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        const v7295 = stdlib.sub(v7289, v7289);
        const v7296 = stdlib.ge(v7295, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7296, {
          at: './poolMigrator.rsh:90:49:application',
          fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7299 = stdlib.Array_set(v7288, '0', v7295);
        const v7300 = stdlib.Array_set(v7287, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v7299);
        ;
        const v7302 = v7300[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '1')];
        const v7303 = v7302[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '0')];
        const v7309 = stdlib.sub(v7303, v7303);
        const v7310 = stdlib.ge(v7309, stdlib.checkedBigNumberify('./poolMigrator.rsh:219:55:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7310, {
          at: './poolMigrator.rsh:219:55:application',
          fs: ['at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7313 = stdlib.Array_set(v7302, '0', v7309);
        const v7314 = stdlib.Array_set(v7300, stdlib.checkedBigNumberify('./poolMigrator.rsh:219:55:application', stdlib.UInt_max, '1'), v7313);
        ;
        await txn3.getOutput('migrate', 'v7235', ctc8, v7235);
        null;
        const cv6077 = v6077;
        const cv6078 = true;
        const cv6079 = v6197;
        const cv6081 = v7314;
        const cv6082 = v7241;
        
        v6077 = cv6077;
        v6078 = cv6078;
        v6079 = cv6079;
        v6081 = cv6081;
        v6082 = cv6082;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'withdraw0_4622': {
        const v7447 = v6196[1];
        undefined /* setApiDetails */;
        const v7472 = v7447[stdlib.checkedBigNumberify('./poolMigrator.rsh:183:12:spread', stdlib.UInt_max, '0')];
        const v7473 = stdlib.gt(v7472, stdlib.checkedBigNumberify('./poolMigrator.rsh:184:25:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v7473, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:184:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:183:41:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)', 'at ./poolMigrator.rsh:145:16:application call to [unknown function] (defined at: ./poolMigrator.rsh:145:16:function exp)'],
          msg: 'Must exchange more than 0 LP tokens',
          who: 'Admin'
          });
        const v7490 = stdlib.le(v6082, stdlib.UInt_max);
        stdlib.assert(v7490, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7492 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v7493 = v7492[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v7494 = stdlib.add(v7493, v7472);
        const v7495 = stdlib.le(v7494, stdlib.UInt_max);
        stdlib.assert(v7495, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7498 = stdlib.Array_set(v7492, '0', v7494);
        const v7499 = stdlib.Array_set(v6081, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v7498);
        ;
        const v7745 = v7499[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7746 = v7745[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7750 = stdlib.sub(v7746, v7472);
        const v7751 = stdlib.ge(v7750, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7751, {
          at: './poolMigrator.rsh:116:34:application',
          fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7754 = stdlib.Array_set(v7745, '0', v7750);
        const v7755 = stdlib.Array_set(v7499, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0'), v7754);
        const v7756 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v7757 = undefined /* Remote */;
        const v7758 = await txn3.getOutput('internal', 'v7757', ctc13, v7757);
        const v7760 = v7758[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7761 = v7758[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
        const v7763 = v7761[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7764 = v7761[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
        const v7771 = stdlib.add(v6082, v7760);
        const v7772 = stdlib.le(v7771, stdlib.UInt_max);
        stdlib.assert(v7772, {
          at: './poolMigrator.rsh:116:34:application',
          fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7775 = v7755[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2')];
        const v7776 = v7775[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7777 = stdlib.add(v7776, v7763);
        const v7778 = stdlib.le(v7777, stdlib.UInt_max);
        stdlib.assert(v7778, {
          at: './poolMigrator.rsh:116:34:application',
          fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7781 = stdlib.Array_set(v7775, '0', v7777);
        const v7782 = stdlib.Array_set(v7755, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2'), v7781);
        const v7784 = v7782[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3')];
        const v7785 = v7784[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
        const v7786 = stdlib.add(v7785, v7764);
        const v7787 = stdlib.le(v7786, stdlib.UInt_max);
        stdlib.assert(v7787, {
          at: './poolMigrator.rsh:116:34:application',
          fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7790 = stdlib.Array_set(v7784, '0', v7786);
        const v7791 = stdlib.Array_set(v7782, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3'), v7790);
        const v7797 = stdlib.eq(v7760, stdlib.checkedBigNumberify('./poolMigrator.rsh:117:24:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v7797, {
          at: './poolMigrator.rsh:117:16:application',
          fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'Received unexpected tokens',
          who: 'Admin'
          });
        const v7798 = stdlib.gt(v7763, stdlib.checkedBigNumberify('./poolMigrator.rsh:118:25:decimal', stdlib.UInt_max, '0'));
        const v7799 = stdlib.gt(v7764, stdlib.checkedBigNumberify('./poolMigrator.rsh:118:32:decimal', stdlib.UInt_max, '0'));
        const v7800 = v7798 ? v7799 : false;
        stdlib.assert(v7800, {
          at: './poolMigrator.rsh:118:16:application',
          fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'Received invalid A or B amount',
          who: 'Admin'
          });
        const v7803 = v7791[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '2')];
        const v7804 = v7803[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '0')];
        const v7805 = stdlib.eq(v7763, v7804);
        stdlib.assert(v7805, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:190:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'Invalid contract state',
          who: 'Admin'
          });
        const v7807 = v7791[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '3')];
        const v7808 = v7807[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '0')];
        const v7809 = stdlib.eq(v7764, v7808);
        stdlib.assert(v7809, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:190:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'Invalid contract state',
          who: 'Admin'
          });
        const v7820 = stdlib.sub(v7804, v7804);
        const v7821 = stdlib.ge(v7820, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7821, {
          at: './poolMigrator.rsh:88:26:application',
          fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7824 = stdlib.Array_set(v7803, '0', v7820);
        const v7825 = stdlib.Array_set(v7791, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '2'), v7824);
        ;
        const v7826 = v7825[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '3')];
        const v7827 = v7826[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
        const v7833 = stdlib.sub(v7827, v7827);
        const v7834 = stdlib.ge(v7833, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7834, {
          at: './poolMigrator.rsh:89:39:application',
          fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7837 = stdlib.Array_set(v7826, '0', v7833);
        const v7838 = stdlib.Array_set(v7825, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '3'), v7837);
        ;
        const v7839 = v7838[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        const v7840 = v7839[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        const v7846 = stdlib.sub(v7840, v7840);
        const v7847 = stdlib.ge(v7846, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7847, {
          at: './poolMigrator.rsh:90:49:application',
          fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7850 = stdlib.Array_set(v7839, '0', v7846);
        const v7851 = stdlib.Array_set(v7838, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v7850);
        ;
        const v7853 = {
          A: v7763,
          B: v7764
          };
        await txn3.getOutput('withdraw', 'v7853', ctc12, v7853);
        null;
        const cv6077 = v6077;
        const cv6078 = true;
        const cv6079 = v6197;
        const cv6081 = v7851;
        const cv6082 = v7771;
        
        v6077 = cv6077;
        v6078 = cv6078;
        v6079 = cv6079;
        v6081 = cv6081;
        v6082 = cv6082;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v7863 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '2')];
  const v7864 = v7863[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '0')];
  const v7872 = stdlib.sub(v7864, v7864);
  const v7873 = stdlib.ge(v7872, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
  stdlib.assert(v7873, {
    at: './poolMigrator.rsh:88:26:application',
    fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v7876 = stdlib.Array_set(v7863, '0', v7872);
  const v7877 = stdlib.Array_set(v6081, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '2'), v7876);
  ;
  const v7878 = v7877[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '3')];
  const v7879 = v7878[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
  const v7885 = stdlib.sub(v7879, v7879);
  const v7886 = stdlib.ge(v7885, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
  stdlib.assert(v7886, {
    at: './poolMigrator.rsh:89:39:application',
    fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v7889 = stdlib.Array_set(v7878, '0', v7885);
  const v7890 = stdlib.Array_set(v7877, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '3'), v7889);
  ;
  const v7891 = v7890[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
  const v7892 = v7891[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
  const v7898 = stdlib.sub(v7892, v7892);
  const v7899 = stdlib.ge(v7898, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
  stdlib.assert(v7899, {
    at: './poolMigrator.rsh:90:49:application',
    fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v7909 = stdlib.sub(v6082, v6082);
  const v7910 = stdlib.ge(v7909, stdlib.checkedBigNumberify('./poolMigrator.rsh:229:27:application', stdlib.UInt_max, '0'));
  stdlib.assert(v7910, {
    at: './poolMigrator.rsh:229:27:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v7913 = (stdlib.le(await ctc.getBalance(), v7909) ? stdlib.checkedBigNumberify('./poolMigrator.rsh:230:31:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v7909));
  const v7914 = stdlib.safeAdd(v7913, v7909);
  const v7918 = stdlib.sub(v7914, v7913);
  const v7919 = stdlib.ge(v7918, stdlib.checkedBigNumberify('./poolMigrator.rsh:230:37:application', stdlib.UInt_max, '0'));
  stdlib.assert(v7919, {
    at: './poolMigrator.rsh:230:37:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  return;
  
  
  };
export async function _changeAdmin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _changeAdmin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _changeAdmin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    changeAdmin0_4622: ctc8,
    halt0_4622: ctc9,
    migrate0_4622: ctc10,
    withdraw0_4622: ctc10
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v6006, v6007, v6008, v6009, v6010, v6011, v6012, v6077, v6081, v6082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc3, ctc7, ctc4]);
  const v6098 = ctc.selfAddress();
  const v6100 = stdlib.protect(ctc8, await interact.in(), {
    at: './poolMigrator.rsh:1:23:application',
    fs: ['at ./poolMigrator.rsh:158:45:application call to [unknown function] (defined at: ./poolMigrator.rsh:158:45:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runchangeAdmin0_4622" (defined at: ./poolMigrator.rsh:158:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'in',
    who: 'changeAdmin'
    });
  const v6101 = v6100[stdlib.checkedBigNumberify('./poolMigrator.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v6103 = stdlib.addressEq(v6098, v6077);
  stdlib.assert(v6103, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:158:45:application call to [unknown function] (defined at: ./poolMigrator.rsh:158:45:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runchangeAdmin0_4622" (defined at: ./poolMigrator.rsh:158:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'UNAUTHORIZED ACTION',
    who: 'changeAdmin'
    });
  const v6105 = stdlib.addressEq(v6077, v6101);
  const v6106 = v6105 ? false : true;
  stdlib.assert(v6106, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:160:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:158:45:application call to [unknown function] (defined at: ./poolMigrator.rsh:158:45:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runchangeAdmin0_4622" (defined at: ./poolMigrator.rsh:158:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'New and old admin are the same',
    who: 'changeAdmin'
    });
  const v6113 = ['changeAdmin0_4622', v6100];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6006, v6007, v6008, v6009, v6010, v6011, v6012, v6077, v6081, v6082, v6113],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./poolMigrator.rsh:158:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./poolMigrator.rsh:145:16:decimal', stdlib.UInt_max, '0'), v6007]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6196], secs: v6198, time: v6197, didSend: v5056, from: v6195 } = txn1;
      
      switch (v6196[0]) {
        case 'changeAdmin0_4622': {
          const v6199 = v6196[1];
          sim_r.txns.push({
            kind: 'api',
            who: "changeAdmin"
            });
          ;
          ;
          const v6253 = v6199[stdlib.checkedBigNumberify('./poolMigrator.rsh:158:12:spread', stdlib.UInt_max, '0')];
          const v6260 = null;
          const v6261 = await txn1.getOutput('changeAdmin', 'v6260', ctc12, v6260);
          
          const v8746 = v6253;
          const v8749 = v6081;
          const v8750 = v6082;
          sim_r.isHalt = false;
          
          break;
          }
        case 'halt0_4622': {
          const v6615 = v6196[1];
          
          break;
          }
        case 'migrate0_4622': {
          const v7031 = v6196[1];
          
          break;
          }
        case 'withdraw0_4622': {
          const v7447 = v6196[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc3, ctc7, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v6196], secs: v6198, time: v6197, didSend: v5056, from: v6195 } = txn1;
  switch (v6196[0]) {
    case 'changeAdmin0_4622': {
      const v6199 = v6196[1];
      undefined /* setApiDetails */;
      const v6242 = stdlib.le(v6082, stdlib.UInt_max);
      stdlib.assert(v6242, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'changeAdmin'
        });
      ;
      const v6244 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v6245 = v6244[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v6247 = stdlib.le(v6245, stdlib.UInt_max);
      stdlib.assert(v6247, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'changeAdmin'
        });
      ;
      const v6253 = v6199[stdlib.checkedBigNumberify('./poolMigrator.rsh:158:12:spread', stdlib.UInt_max, '0')];
      const v6254 = stdlib.addressEq(v6195, v6077);
      stdlib.assert(v6254, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:163:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:163:18:function exp)'],
        msg: 'UNAUTHORIZED ACTION',
        who: 'changeAdmin'
        });
      const v6256 = stdlib.addressEq(v6077, v6253);
      const v6257 = v6256 ? false : true;
      stdlib.assert(v6257, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:160:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:163:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:163:18:function exp)'],
        msg: 'New and old admin are the same',
        who: 'changeAdmin'
        });
      const v6260 = null;
      const v6261 = await txn1.getOutput('changeAdmin', 'v6260', ctc12, v6260);
      if (v5056) {
        stdlib.protect(ctc12, await interact.out(v6199, v6261), {
          at: './poolMigrator.rsh:158:13:application',
          fs: ['at ./poolMigrator.rsh:158:13:application call to [unknown function] (defined at: ./poolMigrator.rsh:158:13:function exp)', 'at ./poolMigrator.rsh:164:17:application call to "done" (defined at: ./poolMigrator.rsh:163:18:function exp)', 'at ./poolMigrator.rsh:163:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:163:18:function exp)'],
          msg: 'out',
          who: 'changeAdmin'
          });
        }
      else {
        }
      
      const v8746 = v6253;
      const v8749 = v6081;
      const v8750 = v6082;
      return;
      
      break;
      }
    case 'halt0_4622': {
      const v6615 = v6196[1];
      return;
      break;
      }
    case 'migrate0_4622': {
      const v7031 = v6196[1];
      return;
      break;
      }
    case 'withdraw0_4622': {
      const v7447 = v6196[1];
      return;
      break;
      }
    }
  
  
  };
export async function _halt3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _halt3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _halt3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    changeAdmin0_4622: ctc9,
    halt0_4622: ctc8,
    migrate0_4622: ctc10,
    withdraw0_4622: ctc10
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [v6006, v6007, v6008, v6009, v6010, v6011, v6012, v6077, v6081, v6082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc3, ctc7, ctc4]);
  const v6115 = ctc.selfAddress();
  const v6117 = stdlib.protect(ctc8, await interact.in(), {
    at: './poolMigrator.rsh:1:23:application',
    fs: ['at ./poolMigrator.rsh:171:30:application call to [unknown function] (defined at: ./poolMigrator.rsh:171:30:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runhalt0_4622" (defined at: ./poolMigrator.rsh:171:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'in',
    who: 'halt'
    });
  const v6118 = stdlib.addressEq(v6115, v6077);
  stdlib.assert(v6118, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:171:30:application call to [unknown function] (defined at: ./poolMigrator.rsh:171:30:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runhalt0_4622" (defined at: ./poolMigrator.rsh:171:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'UNAUTHORIZED ACTION',
    who: 'halt'
    });
  const v6123 = ['halt0_4622', v6117];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6006, v6007, v6008, v6009, v6010, v6011, v6012, v6077, v6081, v6082, v6123],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./poolMigrator.rsh:171:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./poolMigrator.rsh:145:16:decimal', stdlib.UInt_max, '0'), v6007]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6196], secs: v6198, time: v6197, didSend: v5056, from: v6195 } = txn1;
      
      switch (v6196[0]) {
        case 'changeAdmin0_4622': {
          const v6199 = v6196[1];
          
          break;
          }
        case 'halt0_4622': {
          const v6615 = v6196[1];
          sim_r.txns.push({
            kind: 'api',
            who: "halt"
            });
          ;
          ;
          const v6687 = null;
          const v6688 = await txn1.getOutput('halt', 'v6687', ctc12, v6687);
          
          const v8886 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '2')];
          const v8887 = v8886[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '0')];
          const v8888 = stdlib.sub(v8887, v8887);
          const v8890 = stdlib.Array_set(v8886, '0', v8888);
          const v8891 = stdlib.Array_set(v6081, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '2'), v8890);
          sim_r.txns.push({
            kind: 'from',
            to: v6077,
            tok: v6009
            });
          const v8892 = v8891[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '3')];
          const v8893 = v8892[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
          const v8894 = stdlib.sub(v8893, v8893);
          const v8896 = stdlib.Array_set(v8892, '0', v8894);
          const v8897 = stdlib.Array_set(v8891, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '3'), v8896);
          sim_r.txns.push({
            kind: 'from',
            to: v6077,
            tok: v6010
            });
          const v8898 = v8897[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          const v8899 = v8898[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v6077,
            tok: v6007
            });
          const v8902 = stdlib.sub(v6082, v6082);
          sim_r.txns.push({
            kind: 'from',
            to: v6077,
            tok: undefined /* Nothing */
            });
          const v8904 = (stdlib.le(await ctc.getBalance(), v8902) ? stdlib.checkedBigNumberify('./poolMigrator.rsh:230:31:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8902));
          sim_r.txns.push({
            kind: 'from',
            to: v6077,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v6010
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v6009
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v6008
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v6007
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'migrate0_4622': {
          const v7031 = v6196[1];
          
          break;
          }
        case 'withdraw0_4622': {
          const v7447 = v6196[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc3, ctc7, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v6196], secs: v6198, time: v6197, didSend: v5056, from: v6195 } = txn1;
  switch (v6196[0]) {
    case 'changeAdmin0_4622': {
      const v6199 = v6196[1];
      return;
      break;
      }
    case 'halt0_4622': {
      const v6615 = v6196[1];
      undefined /* setApiDetails */;
      const v6658 = stdlib.le(v6082, stdlib.UInt_max);
      stdlib.assert(v6658, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'halt'
        });
      ;
      const v6660 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v6661 = v6660[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v6663 = stdlib.le(v6661, stdlib.UInt_max);
      stdlib.assert(v6663, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'halt'
        });
      ;
      const v6685 = stdlib.addressEq(v6195, v6077);
      stdlib.assert(v6685, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:175:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:175:18:function exp)'],
        msg: 'UNAUTHORIZED ACTION',
        who: 'halt'
        });
      const v6687 = null;
      const v6688 = await txn1.getOutput('halt', 'v6687', ctc12, v6687);
      if (v5056) {
        stdlib.protect(ctc12, await interact.out(v6615, v6688), {
          at: './poolMigrator.rsh:171:13:application',
          fs: ['at ./poolMigrator.rsh:171:13:application call to [unknown function] (defined at: ./poolMigrator.rsh:171:13:function exp)', 'at ./poolMigrator.rsh:176:17:application call to "done" (defined at: ./poolMigrator.rsh:175:18:function exp)', 'at ./poolMigrator.rsh:175:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:175:18:function exp)'],
          msg: 'out',
          who: 'halt'
          });
        }
      else {
        }
      
      const v8886 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '2')];
      const v8887 = v8886[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '0')];
      const v8888 = stdlib.sub(v8887, v8887);
      const v8889 = stdlib.ge(v8888, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8889, {
        at: './poolMigrator.rsh:88:26:application',
        fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
        msg: 'assume >= 0',
        who: 'halt'
        });
      const v8890 = stdlib.Array_set(v8886, '0', v8888);
      const v8891 = stdlib.Array_set(v6081, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '2'), v8890);
      ;
      const v8892 = v8891[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '3')];
      const v8893 = v8892[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
      const v8894 = stdlib.sub(v8893, v8893);
      const v8895 = stdlib.ge(v8894, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8895, {
        at: './poolMigrator.rsh:89:39:application',
        fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
        msg: 'assume >= 0',
        who: 'halt'
        });
      const v8896 = stdlib.Array_set(v8892, '0', v8894);
      const v8897 = stdlib.Array_set(v8891, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '3'), v8896);
      ;
      const v8898 = v8897[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v8899 = v8898[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v8900 = stdlib.sub(v8899, v8899);
      const v8901 = stdlib.ge(v8900, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8901, {
        at: './poolMigrator.rsh:90:49:application',
        fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
        msg: 'assume >= 0',
        who: 'halt'
        });
      ;
      const v8902 = stdlib.sub(v6082, v6082);
      const v8903 = stdlib.ge(v8902, stdlib.checkedBigNumberify('./poolMigrator.rsh:229:27:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8903, {
        at: './poolMigrator.rsh:229:27:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'halt'
        });
      ;
      const v8904 = (stdlib.le(await ctc.getBalance(), v8902) ? stdlib.checkedBigNumberify('./poolMigrator.rsh:230:31:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v8902));
      const v8905 = stdlib.safeAdd(v8904, v8902);
      const v8906 = stdlib.sub(v8905, v8904);
      const v8907 = stdlib.ge(v8906, stdlib.checkedBigNumberify('./poolMigrator.rsh:230:37:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8907, {
        at: './poolMigrator.rsh:230:37:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'halt'
        });
      ;
      return;
      
      break;
      }
    case 'migrate0_4622': {
      const v7031 = v6196[1];
      return;
      break;
      }
    case 'withdraw0_4622': {
      const v7447 = v6196[1];
      return;
      break;
      }
    }
  
  
  };
export async function _migrate3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _migrate3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _migrate3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    changeAdmin0_4622: ctc9,
    halt0_4622: ctc10,
    migrate0_4622: ctc8,
    withdraw0_4622: ctc8
    });
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc13 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc4, ctc8, ctc4]);
  const ctc16 = stdlib.T_Null;
  
  
  const [v6006, v6007, v6008, v6009, v6010, v6011, v6012, v6077, v6081, v6082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc3, ctc7, ctc4]);
  const v6141 = stdlib.protect(ctc8, await interact.in(), {
    at: './poolMigrator.rsh:1:23:application',
    fs: ['at ./poolMigrator.rsh:202:40:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runmigrate0_4622" (defined at: ./poolMigrator.rsh:202:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'in',
    who: 'migrate'
    });
  const v6142 = v6141[stdlib.checkedBigNumberify('./poolMigrator.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v6144 = stdlib.gt(v6142, stdlib.checkedBigNumberify('./poolMigrator.rsh:203:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v6144, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:202:40:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runmigrate0_4622" (defined at: ./poolMigrator.rsh:202:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'Must exchange more than 0 LP tokens',
    who: 'migrate'
    });
  const v6151 = ['migrate0_4622', v6141];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6006, v6007, v6008, v6009, v6010, v6011, v6012, v6077, v6081, v6082, v6151],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./poolMigrator.rsh:206:12:decimal', stdlib.UInt_max, '0'), [[v6142, v6007]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6196], secs: v6198, time: v6197, didSend: v5056, from: v6195 } = txn1;
      
      switch (v6196[0]) {
        case 'changeAdmin0_4622': {
          const v6199 = v6196[1];
          
          break;
          }
        case 'halt0_4622': {
          const v6615 = v6196[1];
          
          break;
          }
        case 'migrate0_4622': {
          const v7031 = v6196[1];
          sim_r.txns.push({
            kind: 'api',
            who: "migrate"
            });
          const v7046 = v7031[stdlib.checkedBigNumberify('./poolMigrator.rsh:202:12:spread', stdlib.UInt_max, '0')];
          ;
          const v7076 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
          const v7077 = v7076[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
          const v7078 = stdlib.add(v7077, v7046);
          const v7082 = stdlib.Array_set(v7076, '0', v7078);
          const v7083 = stdlib.Array_set(v6081, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v7082);
          sim_r.txns.push({
            amt: v7046,
            kind: 'to',
            tok: v6007
            });
          const v7117 = v7083[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7118 = v7117[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7122 = stdlib.sub(v7118, v7046);
          const v7126 = stdlib.Array_set(v7117, '0', v7122);
          const v7127 = stdlib.Array_set(v7083, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0'), v7126);
          const v7128 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7129 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6011,
              remote: ({
                accs: [],
                apps: [v6011],
                bills: stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3'),
                fees: stdlib.checkedBigNumberify('./poolMigrator.rsh:114:16:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1'),
                toks: [v6009, v6010, v6007]
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v7128 /* simTokensRecv */, ctc13.defaultValue /* simReturnVal */];})();
          const v7130 = await txn1.getOutput('internal', 'v7129', ctc14, v7129);
          const v7132 = v7130[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7133 = v7130[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
          const v7135 = v7133[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7136 = v7133[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
          const v7143 = stdlib.add(v6082, v7132);
          const v7147 = v7127[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2')];
          const v7148 = v7147[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7149 = stdlib.add(v7148, v7135);
          const v7153 = stdlib.Array_set(v7147, '0', v7149);
          const v7154 = stdlib.Array_set(v7127, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2'), v7153);
          const v7156 = v7154[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3')];
          const v7157 = v7156[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7158 = stdlib.add(v7157, v7136);
          const v7162 = stdlib.Array_set(v7156, '0', v7158);
          const v7163 = stdlib.Array_set(v7154, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3'), v7162);
          const v7175 = v7163[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '2')];
          const v7176 = v7175[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '0')];
          const v7211 = stdlib.sub(v7176, v7135);
          const v7215 = stdlib.Array_set(v7175, '0', v7211);
          const v7216 = stdlib.Array_set(v7163, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '2'), v7215);
          const v7217 = v7216[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '3')];
          const v7218 = v7217[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
          const v7222 = stdlib.sub(v7218, v7136);
          const v7226 = stdlib.Array_set(v7217, '0', v7222);
          const v7227 = stdlib.Array_set(v7216, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '3'), v7226);
          const v7228 = [v7046];
          const v7229 = {
            A: v7135,
            B: v7136
            };
          const v7230 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6012,
              remote: ({
                accs: [],
                apps: [v6012],
                bills: stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '2'),
                fees: stdlib.checkedBigNumberify('./poolMigrator.rsh:134:16:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '2'),
                toks: [v6008, v6009, v6010]
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v7228 /* simTokensRecv */, ctc4.defaultValue /* simReturnVal */];})();
          const v7231 = await txn1.getOutput('internal', 'v7230', ctc15, v7230);
          const v7233 = v7231[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
          const v7234 = v7231[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '1')];
          const v7235 = v7231[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '2')];
          const v7236 = v7234[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
          const v7241 = stdlib.add(v7143, v7233);
          const v7245 = v7227[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '1')];
          const v7246 = v7245[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
          const v7247 = stdlib.add(v7246, v7236);
          const v7251 = stdlib.Array_set(v7245, '0', v7247);
          const v7252 = stdlib.Array_set(v7227, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '1'), v7251);
          const v7260 = v7252[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '2')];
          const v7261 = v7260[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '0')];
          const v7269 = stdlib.sub(v7261, v7261);
          const v7273 = stdlib.Array_set(v7260, '0', v7269);
          const v7274 = stdlib.Array_set(v7252, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '2'), v7273);
          sim_r.txns.push({
            kind: 'from',
            to: v6195,
            tok: v6009
            });
          const v7275 = v7274[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '3')];
          const v7276 = v7275[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
          const v7282 = stdlib.sub(v7276, v7276);
          const v7286 = stdlib.Array_set(v7275, '0', v7282);
          const v7287 = stdlib.Array_set(v7274, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '3'), v7286);
          sim_r.txns.push({
            kind: 'from',
            to: v6195,
            tok: v6010
            });
          const v7288 = v7287[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          const v7289 = v7288[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          const v7295 = stdlib.sub(v7289, v7289);
          const v7299 = stdlib.Array_set(v7288, '0', v7295);
          const v7300 = stdlib.Array_set(v7287, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v7299);
          sim_r.txns.push({
            kind: 'from',
            to: v6195,
            tok: v6007
            });
          const v7302 = v7300[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '1')];
          const v7303 = v7302[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '0')];
          const v7309 = stdlib.sub(v7303, v7303);
          const v7313 = stdlib.Array_set(v7302, '0', v7309);
          const v7314 = stdlib.Array_set(v7300, stdlib.checkedBigNumberify('./poolMigrator.rsh:219:55:application', stdlib.UInt_max, '1'), v7313);
          sim_r.txns.push({
            kind: 'from',
            to: v6195,
            tok: v6008
            });
          const v7315 = await txn1.getOutput('migrate', 'v7235', ctc4, v7235);
          
          null;
          const v9016 = v6077;
          const v9019 = v7314;
          const v9020 = v7241;
          sim_r.isHalt = false;
          
          break;
          }
        case 'withdraw0_4622': {
          const v7447 = v6196[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc3, ctc7, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v6196], secs: v6198, time: v6197, didSend: v5056, from: v6195 } = txn1;
  switch (v6196[0]) {
    case 'changeAdmin0_4622': {
      const v6199 = v6196[1];
      return;
      break;
      }
    case 'halt0_4622': {
      const v6615 = v6196[1];
      return;
      break;
      }
    case 'migrate0_4622': {
      const v7031 = v6196[1];
      undefined /* setApiDetails */;
      const v7046 = v7031[stdlib.checkedBigNumberify('./poolMigrator.rsh:202:12:spread', stdlib.UInt_max, '0')];
      const v7047 = stdlib.gt(v7046, stdlib.checkedBigNumberify('./poolMigrator.rsh:203:25:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v7047, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:202:40:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)', 'at ./poolMigrator.rsh:145:16:application call to [unknown function] (defined at: ./poolMigrator.rsh:145:16:function exp)'],
        msg: 'Must exchange more than 0 LP tokens',
        who: 'migrate'
        });
      const v7074 = stdlib.le(v6082, stdlib.UInt_max);
      stdlib.assert(v7074, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      ;
      const v7076 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v7077 = v7076[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v7078 = stdlib.add(v7077, v7046);
      const v7079 = stdlib.le(v7078, stdlib.UInt_max);
      stdlib.assert(v7079, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v7082 = stdlib.Array_set(v7076, '0', v7078);
      const v7083 = stdlib.Array_set(v6081, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v7082);
      ;
      const v7117 = v7083[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7118 = v7117[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7122 = stdlib.sub(v7118, v7046);
      const v7123 = stdlib.ge(v7122, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7123, {
        at: './poolMigrator.rsh:116:34:application',
        fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v7126 = stdlib.Array_set(v7117, '0', v7122);
      const v7127 = stdlib.Array_set(v7083, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0'), v7126);
      const v7128 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7129 = undefined /* Remote */;
      const v7130 = await txn1.getOutput('internal', 'v7129', ctc14, v7129);
      const v7132 = v7130[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7133 = v7130[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
      const v7135 = v7133[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7136 = v7133[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
      const v7143 = stdlib.add(v6082, v7132);
      const v7144 = stdlib.le(v7143, stdlib.UInt_max);
      stdlib.assert(v7144, {
        at: './poolMigrator.rsh:116:34:application',
        fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v7147 = v7127[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2')];
      const v7148 = v7147[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7149 = stdlib.add(v7148, v7135);
      const v7150 = stdlib.le(v7149, stdlib.UInt_max);
      stdlib.assert(v7150, {
        at: './poolMigrator.rsh:116:34:application',
        fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v7153 = stdlib.Array_set(v7147, '0', v7149);
      const v7154 = stdlib.Array_set(v7127, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2'), v7153);
      const v7156 = v7154[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3')];
      const v7157 = v7156[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7158 = stdlib.add(v7157, v7136);
      const v7159 = stdlib.le(v7158, stdlib.UInt_max);
      stdlib.assert(v7159, {
        at: './poolMigrator.rsh:116:34:application',
        fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v7162 = stdlib.Array_set(v7156, '0', v7158);
      const v7163 = stdlib.Array_set(v7154, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3'), v7162);
      const v7169 = stdlib.eq(v7132, stdlib.checkedBigNumberify('./poolMigrator.rsh:117:24:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v7169, {
        at: './poolMigrator.rsh:117:16:application',
        fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'Received unexpected tokens',
        who: 'migrate'
        });
      const v7170 = stdlib.gt(v7135, stdlib.checkedBigNumberify('./poolMigrator.rsh:118:25:decimal', stdlib.UInt_max, '0'));
      const v7171 = stdlib.gt(v7136, stdlib.checkedBigNumberify('./poolMigrator.rsh:118:32:decimal', stdlib.UInt_max, '0'));
      const v7172 = v7170 ? v7171 : false;
      stdlib.assert(v7172, {
        at: './poolMigrator.rsh:118:16:application',
        fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'Received invalid A or B amount',
        who: 'migrate'
        });
      const v7175 = v7163[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '2')];
      const v7176 = v7175[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '0')];
      const v7177 = stdlib.eq(v7135, v7176);
      stdlib.assert(v7177, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:210:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'Invalid contract state',
        who: 'migrate'
        });
      const v7179 = v7163[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '3')];
      const v7180 = v7179[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '0')];
      const v7181 = stdlib.eq(v7136, v7180);
      stdlib.assert(v7181, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:210:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'Invalid contract state',
        who: 'migrate'
        });
      const v7211 = stdlib.sub(v7176, v7135);
      const v7212 = stdlib.ge(v7211, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7212, {
        at: './poolMigrator.rsh:136:33:application',
        fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v7215 = stdlib.Array_set(v7175, '0', v7211);
      const v7216 = stdlib.Array_set(v7163, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '2'), v7215);
      const v7217 = v7216[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '3')];
      const v7218 = v7217[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
      const v7222 = stdlib.sub(v7218, v7136);
      const v7223 = stdlib.ge(v7222, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7223, {
        at: './poolMigrator.rsh:136:33:application',
        fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v7226 = stdlib.Array_set(v7217, '0', v7222);
      const v7227 = stdlib.Array_set(v7216, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '3'), v7226);
      const v7228 = [v7046];
      const v7229 = {
        A: v7135,
        B: v7136
        };
      const v7230 = undefined /* Remote */;
      const v7231 = await txn1.getOutput('internal', 'v7230', ctc15, v7230);
      const v7233 = v7231[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
      const v7234 = v7231[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '1')];
      const v7235 = v7231[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '2')];
      const v7236 = v7234[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
      const v7241 = stdlib.add(v7143, v7233);
      const v7242 = stdlib.le(v7241, stdlib.UInt_max);
      stdlib.assert(v7242, {
        at: './poolMigrator.rsh:136:33:application',
        fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v7245 = v7227[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '1')];
      const v7246 = v7245[stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '0')];
      const v7247 = stdlib.add(v7246, v7236);
      const v7248 = stdlib.le(v7247, stdlib.UInt_max);
      stdlib.assert(v7248, {
        at: './poolMigrator.rsh:136:33:application',
        fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v7251 = stdlib.Array_set(v7245, '0', v7247);
      const v7252 = stdlib.Array_set(v7227, stdlib.checkedBigNumberify('./poolMigrator.rsh:136:33:application', stdlib.UInt_max, '1'), v7251);
      const v7257 = stdlib.ge(v7235, v7046);
      stdlib.assert(v7257, {
        at: './poolMigrator.rsh:138:16:application',
        fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'LP change due to slippage',
        who: 'migrate'
        });
      const v7259 = stdlib.gt(v7235, stdlib.checkedBigNumberify('./poolMigrator.rsh:215:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v7259, {
        at: './poolMigrator.rsh:215:20:application',
        fs: ['at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'Possible slippage in new pool',
        who: 'migrate'
        });
      const v7260 = v7252[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '2')];
      const v7261 = v7260[stdlib.checkedBigNumberify('./poolMigrator.rsh:85:55:application', stdlib.UInt_max, '0')];
      const v7269 = stdlib.sub(v7261, v7261);
      const v7270 = stdlib.ge(v7269, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7270, {
        at: './poolMigrator.rsh:88:26:application',
        fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v7273 = stdlib.Array_set(v7260, '0', v7269);
      const v7274 = stdlib.Array_set(v7252, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '2'), v7273);
      ;
      const v7275 = v7274[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '3')];
      const v7276 = v7275[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
      const v7282 = stdlib.sub(v7276, v7276);
      const v7283 = stdlib.ge(v7282, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7283, {
        at: './poolMigrator.rsh:89:39:application',
        fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v7286 = stdlib.Array_set(v7275, '0', v7282);
      const v7287 = stdlib.Array_set(v7274, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '3'), v7286);
      ;
      const v7288 = v7287[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v7289 = v7288[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v7295 = stdlib.sub(v7289, v7289);
      const v7296 = stdlib.ge(v7295, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7296, {
        at: './poolMigrator.rsh:90:49:application',
        fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v7299 = stdlib.Array_set(v7288, '0', v7295);
      const v7300 = stdlib.Array_set(v7287, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v7299);
      ;
      const v7302 = v7300[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '1')];
      const v7303 = v7302[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '0')];
      const v7309 = stdlib.sub(v7303, v7303);
      const v7310 = stdlib.ge(v7309, stdlib.checkedBigNumberify('./poolMigrator.rsh:219:55:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7310, {
        at: './poolMigrator.rsh:219:55:application',
        fs: ['at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v7313 = stdlib.Array_set(v7302, '0', v7309);
      const v7314 = stdlib.Array_set(v7300, stdlib.checkedBigNumberify('./poolMigrator.rsh:219:55:application', stdlib.UInt_max, '1'), v7313);
      ;
      const v7315 = await txn1.getOutput('migrate', 'v7235', ctc4, v7235);
      if (v5056) {
        stdlib.protect(ctc16, await interact.out(v7031, v7315), {
          at: './poolMigrator.rsh:202:13:application',
          fs: ['at ./poolMigrator.rsh:202:13:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:13:function exp)', 'at ./poolMigrator.rsh:220:17:application call to "done" (defined at: ./poolMigrator.rsh:207:18:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'out',
          who: 'migrate'
          });
        }
      else {
        }
      
      null;
      const v9016 = v6077;
      const v9019 = v7314;
      const v9020 = v7241;
      return;
      
      break;
      }
    case 'withdraw0_4622': {
      const v7447 = v6196[1];
      return;
      break;
      }
    }
  
  
  };
export async function _withdraw3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _withdraw3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _withdraw3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    changeAdmin0_4622: ctc9,
    halt0_4622: ctc10,
    migrate0_4622: ctc8,
    withdraw0_4622: ctc8
    });
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc13 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc12, ctc13]);
  const ctc15 = stdlib.T_Null;
  
  
  const [v6006, v6007, v6008, v6009, v6010, v6011, v6012, v6077, v6081, v6082] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc3, ctc7, ctc4]);
  const v6127 = stdlib.protect(ctc8, await interact.in(), {
    at: './poolMigrator.rsh:1:23:application',
    fs: ['at ./poolMigrator.rsh:183:41:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runwithdraw0_4622" (defined at: ./poolMigrator.rsh:183:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  const v6128 = v6127[stdlib.checkedBigNumberify('./poolMigrator.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v6130 = stdlib.gt(v6128, stdlib.checkedBigNumberify('./poolMigrator.rsh:184:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v6130, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:184:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:183:41:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runwithdraw0_4622" (defined at: ./poolMigrator.rsh:183:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'Must exchange more than 0 LP tokens',
    who: 'withdraw'
    });
  const v6137 = ['withdraw0_4622', v6127];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6006, v6007, v6008, v6009, v6010, v6011, v6012, v6077, v6081, v6082, v6137],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./poolMigrator.rsh:187:12:decimal', stdlib.UInt_max, '0'), [[v6128, v6007]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6196], secs: v6198, time: v6197, didSend: v5056, from: v6195 } = txn1;
      
      switch (v6196[0]) {
        case 'changeAdmin0_4622': {
          const v6199 = v6196[1];
          
          break;
          }
        case 'halt0_4622': {
          const v6615 = v6196[1];
          
          break;
          }
        case 'migrate0_4622': {
          const v7031 = v6196[1];
          
          break;
          }
        case 'withdraw0_4622': {
          const v7447 = v6196[1];
          sim_r.txns.push({
            kind: 'api',
            who: "withdraw"
            });
          const v7472 = v7447[stdlib.checkedBigNumberify('./poolMigrator.rsh:183:12:spread', stdlib.UInt_max, '0')];
          ;
          const v7492 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
          const v7493 = v7492[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
          const v7494 = stdlib.add(v7493, v7472);
          const v7498 = stdlib.Array_set(v7492, '0', v7494);
          const v7499 = stdlib.Array_set(v6081, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v7498);
          sim_r.txns.push({
            amt: v7472,
            kind: 'to',
            tok: v6007
            });
          const v7745 = v7499[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7746 = v7745[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7750 = stdlib.sub(v7746, v7472);
          const v7754 = stdlib.Array_set(v7745, '0', v7750);
          const v7755 = stdlib.Array_set(v7499, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0'), v7754);
          const v7756 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7757 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6011,
              remote: ({
                accs: [],
                apps: [v6011],
                bills: stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3'),
                fees: stdlib.checkedBigNumberify('./poolMigrator.rsh:114:16:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1'),
                toks: [v6009, v6010, v6007]
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v7756 /* simTokensRecv */, ctc13.defaultValue /* simReturnVal */];})();
          const v7758 = await txn1.getOutput('internal', 'v7757', ctc14, v7757);
          const v7760 = v7758[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7761 = v7758[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
          const v7763 = v7761[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7764 = v7761[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
          const v7771 = stdlib.add(v6082, v7760);
          const v7775 = v7755[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2')];
          const v7776 = v7775[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7777 = stdlib.add(v7776, v7763);
          const v7781 = stdlib.Array_set(v7775, '0', v7777);
          const v7782 = stdlib.Array_set(v7755, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2'), v7781);
          const v7784 = v7782[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3')];
          const v7785 = v7784[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
          const v7786 = stdlib.add(v7785, v7764);
          const v7790 = stdlib.Array_set(v7784, '0', v7786);
          const v7791 = stdlib.Array_set(v7782, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3'), v7790);
          const v7803 = v7791[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '2')];
          const v7804 = v7803[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '0')];
          const v7820 = stdlib.sub(v7804, v7804);
          const v7824 = stdlib.Array_set(v7803, '0', v7820);
          const v7825 = stdlib.Array_set(v7791, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '2'), v7824);
          sim_r.txns.push({
            kind: 'from',
            to: v6195,
            tok: v6009
            });
          const v7826 = v7825[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '3')];
          const v7827 = v7826[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
          const v7833 = stdlib.sub(v7827, v7827);
          const v7837 = stdlib.Array_set(v7826, '0', v7833);
          const v7838 = stdlib.Array_set(v7825, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '3'), v7837);
          sim_r.txns.push({
            kind: 'from',
            to: v6195,
            tok: v6010
            });
          const v7839 = v7838[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          const v7840 = v7839[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          const v7846 = stdlib.sub(v7840, v7840);
          const v7850 = stdlib.Array_set(v7839, '0', v7846);
          const v7851 = stdlib.Array_set(v7838, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v7850);
          sim_r.txns.push({
            kind: 'from',
            to: v6195,
            tok: v6007
            });
          const v7853 = {
            A: v7763,
            B: v7764
            };
          const v7854 = await txn1.getOutput('withdraw', 'v7853', ctc13, v7853);
          
          null;
          const v9151 = v6077;
          const v9154 = v7851;
          const v9155 = v7771;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc3, ctc7, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v6196], secs: v6198, time: v6197, didSend: v5056, from: v6195 } = txn1;
  switch (v6196[0]) {
    case 'changeAdmin0_4622': {
      const v6199 = v6196[1];
      return;
      break;
      }
    case 'halt0_4622': {
      const v6615 = v6196[1];
      return;
      break;
      }
    case 'migrate0_4622': {
      const v7031 = v6196[1];
      return;
      break;
      }
    case 'withdraw0_4622': {
      const v7447 = v6196[1];
      undefined /* setApiDetails */;
      const v7472 = v7447[stdlib.checkedBigNumberify('./poolMigrator.rsh:183:12:spread', stdlib.UInt_max, '0')];
      const v7473 = stdlib.gt(v7472, stdlib.checkedBigNumberify('./poolMigrator.rsh:184:25:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v7473, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:184:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:183:41:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)', 'at ./poolMigrator.rsh:145:16:application call to [unknown function] (defined at: ./poolMigrator.rsh:145:16:function exp)'],
        msg: 'Must exchange more than 0 LP tokens',
        who: 'withdraw'
        });
      const v7490 = stdlib.le(v6082, stdlib.UInt_max);
      stdlib.assert(v7490, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      ;
      const v7492 = v6081[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v7493 = v7492[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v7494 = stdlib.add(v7493, v7472);
      const v7495 = stdlib.le(v7494, stdlib.UInt_max);
      stdlib.assert(v7495, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      const v7498 = stdlib.Array_set(v7492, '0', v7494);
      const v7499 = stdlib.Array_set(v6081, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v7498);
      ;
      const v7745 = v7499[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7746 = v7745[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7750 = stdlib.sub(v7746, v7472);
      const v7751 = stdlib.ge(v7750, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7751, {
        at: './poolMigrator.rsh:116:34:application',
        fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume >= 0',
        who: 'withdraw'
        });
      const v7754 = stdlib.Array_set(v7745, '0', v7750);
      const v7755 = stdlib.Array_set(v7499, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0'), v7754);
      const v7756 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7757 = undefined /* Remote */;
      const v7758 = await txn1.getOutput('internal', 'v7757', ctc14, v7757);
      const v7760 = v7758[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7761 = v7758[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
      const v7763 = v7761[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7764 = v7761[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '1')];
      const v7771 = stdlib.add(v6082, v7760);
      const v7772 = stdlib.le(v7771, stdlib.UInt_max);
      stdlib.assert(v7772, {
        at: './poolMigrator.rsh:116:34:application',
        fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      const v7775 = v7755[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2')];
      const v7776 = v7775[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7777 = stdlib.add(v7776, v7763);
      const v7778 = stdlib.le(v7777, stdlib.UInt_max);
      stdlib.assert(v7778, {
        at: './poolMigrator.rsh:116:34:application',
        fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      const v7781 = stdlib.Array_set(v7775, '0', v7777);
      const v7782 = stdlib.Array_set(v7755, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '2'), v7781);
      const v7784 = v7782[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3')];
      const v7785 = v7784[stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '0')];
      const v7786 = stdlib.add(v7785, v7764);
      const v7787 = stdlib.le(v7786, stdlib.UInt_max);
      stdlib.assert(v7787, {
        at: './poolMigrator.rsh:116:34:application',
        fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      const v7790 = stdlib.Array_set(v7784, '0', v7786);
      const v7791 = stdlib.Array_set(v7782, stdlib.checkedBigNumberify('./poolMigrator.rsh:116:34:application', stdlib.UInt_max, '3'), v7790);
      const v7797 = stdlib.eq(v7760, stdlib.checkedBigNumberify('./poolMigrator.rsh:117:24:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v7797, {
        at: './poolMigrator.rsh:117:16:application',
        fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'Received unexpected tokens',
        who: 'withdraw'
        });
      const v7798 = stdlib.gt(v7763, stdlib.checkedBigNumberify('./poolMigrator.rsh:118:25:decimal', stdlib.UInt_max, '0'));
      const v7799 = stdlib.gt(v7764, stdlib.checkedBigNumberify('./poolMigrator.rsh:118:32:decimal', stdlib.UInt_max, '0'));
      const v7800 = v7798 ? v7799 : false;
      stdlib.assert(v7800, {
        at: './poolMigrator.rsh:118:16:application',
        fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'Received invalid A or B amount',
        who: 'withdraw'
        });
      const v7803 = v7791[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '2')];
      const v7804 = v7803[stdlib.checkedBigNumberify('./poolMigrator.rsh:96:27:application', stdlib.UInt_max, '0')];
      const v7805 = stdlib.eq(v7763, v7804);
      stdlib.assert(v7805, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:190:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'Invalid contract state',
        who: 'withdraw'
        });
      const v7807 = v7791[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '3')];
      const v7808 = v7807[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '0')];
      const v7809 = stdlib.eq(v7764, v7808);
      stdlib.assert(v7809, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:190:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'Invalid contract state',
        who: 'withdraw'
        });
      const v7820 = stdlib.sub(v7804, v7804);
      const v7821 = stdlib.ge(v7820, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7821, {
        at: './poolMigrator.rsh:88:26:application',
        fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume >= 0',
        who: 'withdraw'
        });
      const v7824 = stdlib.Array_set(v7803, '0', v7820);
      const v7825 = stdlib.Array_set(v7791, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '2'), v7824);
      ;
      const v7826 = v7825[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '3')];
      const v7827 = v7826[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
      const v7833 = stdlib.sub(v7827, v7827);
      const v7834 = stdlib.ge(v7833, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7834, {
        at: './poolMigrator.rsh:89:39:application',
        fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume >= 0',
        who: 'withdraw'
        });
      const v7837 = stdlib.Array_set(v7826, '0', v7833);
      const v7838 = stdlib.Array_set(v7825, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '3'), v7837);
      ;
      const v7839 = v7838[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v7840 = v7839[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v7846 = stdlib.sub(v7840, v7840);
      const v7847 = stdlib.ge(v7846, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7847, {
        at: './poolMigrator.rsh:90:49:application',
        fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume >= 0',
        who: 'withdraw'
        });
      const v7850 = stdlib.Array_set(v7839, '0', v7846);
      const v7851 = stdlib.Array_set(v7838, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v7850);
      ;
      const v7853 = {
        A: v7763,
        B: v7764
        };
      const v7854 = await txn1.getOutput('withdraw', 'v7853', ctc13, v7853);
      if (v5056) {
        stdlib.protect(ctc15, await interact.out(v7447, v7854), {
          at: './poolMigrator.rsh:183:13:application',
          fs: ['at ./poolMigrator.rsh:183:13:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:13:function exp)', 'at ./poolMigrator.rsh:193:17:application call to "done" (defined at: ./poolMigrator.rsh:188:18:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'out',
          who: 'withdraw'
          });
        }
      else {
        }
      
      null;
      const v9151 = v6077;
      const v9154 = v7851;
      const v9155 = v7771;
      return;
      
      break;
      }
    }
  
  
  };
export async function changeAdmin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for changeAdmin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for changeAdmin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _changeAdmin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function halt(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for halt expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for halt expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _halt3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function migrate(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for migrate expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for migrate expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _migrate3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _withdraw3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`changeAdmin(address)byte[0]`, `halt()byte[0]`, `migrate(uint64)uint64`, `withdraw(uint64)(uint64,uint64)`],
    pure: [`admin()address`, `info()(byte[96],uint64,uint64,uint64,uint64,uint64,uint64)`],
    sigs: [`admin()address`, `changeAdmin(address)byte[0]`, `halt()byte[0]`, `info()(byte[96],uint64,uint64,uint64,uint64,uint64,uint64)`, `migrate(uint64)uint64`, `withdraw(uint64)(uint64,uint64)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAXAAT///////////8BAQgDBhCgjQYC35TEqwqUgZezCsbJzNELGLPtvlLd+cLXBmBocHiAAYgBBSYFAAEAAQEFYXBwSUQEpmXAlCI1ADEYQQvsKGRJIls1AUkhBFs1AiEHWzUINhoAF0lBANEiNQQlNQZJIQoMQABySSELDEAAW0khDAxAAD4hDBJENAEhBRJEKWQqZFBJNQNXAGA0A1dgCFA0A1doCFA0A1dwCFA0A1d4CFA0A1eACFA0A1eICFA1B0ILcSELEkQ2GgE1/4ABAzT/UCENr1BCAHohChJENhoBNf8pNP9QQgBqSSEODEAAN0khDwxAABYhDxJENhoBNf+AAQI0/1AhDa9QQgBGIQ4SRDQBIQUSRClkKmRQSTUDV5AgNQdCCw2B54jpTxJEKDX/KjT/UDIDUEIAGDYaAhc1BDYaAzYaARdJIQkMQAdrIQkSRCEFNAESRDQESSISTDQCEhFEKWQqZFBJNQNJSkpKSlcAYDX/IRBbNf4hEVs1/SESWzX8IRNbNfshFFs1+iEVWzX5V5AgNfhXsEQ194H0AVs19kk1BTX1gASixbPbNPVQsDT1IlVJIQkMQAZpSSEFDEACgSEFEkQ09VcBCDX0sSKyASEGshA0CLIYszT0F0k18yINRDT2JA5ENPdXABFJNfIiWzTzCEk18SQORDT3NPI08RZcAFwANfA08zT+iApjNPBXABFJNe8iWzTzCUk17iIPRDTwNO807hZcAFwANe0rNPoWUAM16zIKeDXqMgpgNOoJFjIKNPxwAEgWUDIKNPtwAEgWUDXpsSKyATTzshIjshA067IUNP6yEbYisgEhBrIQNPqyGCcEsho08xayGjT+sjA0/LIwNPuyMDT6sjKzMgpgNOoJNOkiWwkWMgo0/HAASDTpIQRbCRZQMgo0+3AASDTpIQdbCRZQtwE+VwQAUDXsgAgAAAAAAAAeTTTsULA07Ek16yJbNeo061cIEEk16SJbNeg06SEEWzXnNPY06ghJNeYkDkQ07VciEUk15SJbNOgISTXkJA5ENO005TTkFlwAXCJJNeNXMxFJNeIiWzTnCEk14SQORDTjNOI04RZcAFwzNeA06iISRDToIg005yINEEQ04FciEUk13yJbNd406DTeEkQ05zTgVzMRIlsSRDTeSQlJNd0iD0Q04DTfNN0WXABcIjXcsSKyATTeshIjshAxALIUNPyyEbM03FczEUk12yJbSTXaSQlJNdkiD0Q03DTbNNkWXABcMzXYsSKyATTashIjshAxALIUNPuyEbM02FcAEUk11yJbSTXWSQlJNdUiD0SxIrIBNNayEiOyEDEAshQ0/rIRs4AIAAAAAAAAHq006BY05xZQULA06BY05xZQNQeABMNu2mg0/BZQNOgWUDT7FlA05xZQsDT/NP40/TT8NPs0+jT5NPglMgY02DTXNNUWXABcADTmQgYMSDT1VwEINfSxIrIBIQayEDQIshizNPQXSTXzIg1ENPYkDkQ091cAEUk18iJbNPMISTXxJA5ENPc08jTxFlwAXAA18DTzNP6IB+U08FcAEUk17yJbNPMJSTXuIg9ENPA07zTuFlwAXAA17Ss0+hZQAzXrMgp4NeoyCmA06gkWMgo0/HAASBZQMgo0+3AASBZQNemxIrIBNPOyEiOyEDTrshQ0/rIRtiKyASEGshA0+rIYJwSyGjTzFrIaNP6yMDT8sjA0+7IwNPqyMrMyCmA06gk06SJbCRYyCjT8cABINOkhBFsJFlAyCjT7cABINOkhB1sJFlC3AT5XBABQNeyACAAAAAAAABvZNOxQsDTsSTXrIls16jTrVwgQSTXpIls16DTpIQRbNec09jTqCEk15iQORDTtVyIRSTXlIls06AhJNeQkDkQ07TTlNOQWXABcIkk141czEUk14iJbNOcISTXhJA5ENOM04jThFlwAXDM14DTqIhJENOgiDTTnIg0QRDTgVyIRSTXfIls13jToNN4SRDTnNOBXMxEiWxJENN406AlJNd0iD0Q04DTfNN0WXABcIkk13FczEUk12yJbNOcJSTXaIg9ENNw02zTaFlwAXDM12Ss0+RZQAzXXMgp4NdYyCmA01gkWMgo0/XAASBZQNdWxIrIBNOiyEiOyEDTXshQ0/LIRtiKyATTnshIjshA017IUNPuyEbYisgEhBrIQNPmyGIAE9NAKCbIaNOgWNOcWULIaNPMWsho0/bIwNPyyMDT7sjA0/bIwNPmyMrMyCmA01gk01SJbCRYyCjT9cABINNUhBFsJFlC3Aj5XBABQNdiACAAAAAAAABw+NNhQsDTYSTXXIQdbNdY05jTXIlsISTXVJA5ENNlXERFJNdQiWzTXIQRbCEk10yQORDTZNNQ00xZcAFwRNdI01jTzD0Q01iINRDTSVyIRSTXRIltJNdBJCUk1zyIPRDTSNNE0zxZcAFwiNc6xIrIBNNCyEiOyEDEAshQ0/LIRszTOVzMRSTXNIltJNcxJCUk1yyIPRDTONM00yxZcAFwzNcqxIrIBNMyyEiOyEDEAshQ0+7IRszTKVwARSTXJIltJNchJCUk1xyIPRDTKNMk0xxZcAFwANcaxIrIBNMiyEiOyEDEAshQ0/rIRszTGVxERSTXFIltJNcRJCUk1wyIPRLEisgE0xLISI7IQMQCyFDT9shGzgAgAAAAAAAAcQzTWFlCwNNYWNQeABCujZeo0/BZQNOgWUDT7FlA05xZQsDT/NP40/TT8NPs0+jT5NPglMgY0xjTFNMMWXABcETTVQgIrSSUMQAA+SDT2JA5ENPdXABEiWyQORDEANPgSRIAIAAAAAAAAGh+wKDUHNP80/jT9NPw0+zT6NPk0+CIyBjT3NPZCAedINPVXASA19DT2JA5ENPdXABEiWyQORDT0NfMxADT4EkQ0+DTzE0SACAAAAAAAABh0sCg1BzT/NP40/TT8NPs0+jT5NPMlMgY09zT2QgGYIhJEgcCaDIgDmbEisgEhBrIQIrIYgAYHMQAyCRKyHoABB7Ifs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpKSVcAYDX/IRBbNf4hEVs1/SESWzX8IRNbNfshFFs1+iEVWzX5gASCLsnyNP9QNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQsIERr0k1+ElQNPhQNPhQSTX3SVcAESEEr1wAXABJNfZJVxERIQSvXABcETX1NP00/hNENPVJVyIRIQSvXABcIjX0NPw0/hM0/DT9ExBENPs0/hI18zT7NP0SNfI08xQ08hQ0+zT8ExAQRCEIiAKwsSKyASKyEiOyEDIKshQ0/rIRsyEIiAKYsSKyASKyEiOyEDIKshQ0/bIRsyEIiAKAsSKyASKyEiOyEDIKshQ0/LIRsyEIiAJosSKyASKyEiOyEDIKshQ0+7IRszT6FgE0+RYBE0Q0/DT7Ekk18RRENPEUNPMUNPIUEDT+NP0TEBBENP80/jT9NPw0+zT6NPkxACUyBjT0SVczESEEr1wAXDMiQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPxBAD409DT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUDT7UDT+UDT/FlApSwFXAH9nKksBV399Z0ghBTUBMgY1AkIBVzT+VyIRSTXzIltJNfJJCUk18SIPRDT+NPM08RZcAFwiNfCxIrIBNPKyEiOyEDT7shQ097IRszTwVzMRSTXvIltJNe5JCUk17SIPRLEisgE07rISI7IQNPuyFDT4shGzNPA07zTtFlwAXDNXABEiW0k17EkJIg9EsSKyATTsshIjshA0+7IUNPWyEbM0/0kJSTXrIg9EsSKyATT/sgglshA0+7IHszIKYDIKeAk06wlJNeo06wg06gkiD0SxIrIBNOqyCCWyEDT7sgezsSKyASKyEiOyEDIJshUyCrIUNPiyEbOxIrIBIrISI7IQMgmyFTIKshQ097IRs7EisgEishIjshAyCbIVMgqyFDT2shGzsSKyASKyEiOyEDIJshUyCrIUNPWyEbNCAAAxGSEWEkSxIrIBIQayEDQIshghFrIZs7EisgEisgglshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEklCDIEEkQxFhJEJUMxGSISREL/3yIxNBJEIQUxNRJEIjE2EkQiMTcSRCI1ASI1AiI1CEL/pzQASUolCDUAOAcyChJEOBAlEkQ4CBJEiTQASUpJJQg1ADgUMgoSRDgQIxJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: {
    api_migrate: 1,
    api_withdraw: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 252,
  unsupported: [],
  version: 11,
  warnings: [`API api_migrate may use up to 13 transaction references, but the limit is 8. API api_migrate starts at /app/poolMigrator.rsh:144:46:application.`, `API api_withdraw may use up to 11 transaction references, but the limit is 8. API api_withdraw starts at /app/poolMigrator.rsh:144:46:application.`, `Step 0 may use up to 11 transaction references, but the limit is 8. Step 0 starts at /app/poolMigrator.rsh:67:11:dot.`, `Step 2 calls a remote object at /app/poolMigrator.rsh:116:34:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/poolMigrator.rsh:136:33:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 may use up to 13 transaction references, but the limit is 8. Step 2 starts at /app/poolMigrator.rsh:144:46:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"address payable","name":"elem5","type":"address"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"address payable","name":"elem7","type":"address"}],"internalType":"struct T11","name":"v9202","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"address payable","name":"elem5","type":"address"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"address payable","name":"elem7","type":"address"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T7","name":"_changeAdmin0_4622","type":"tuple"},{"internalType":"bool","name":"_halt0_4622","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_migrate0_4622","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_withdraw0_4622","type":"tuple"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6260","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6687","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T13","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T2","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"}],"name":"_reach_oe_v7129","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"_reach_oe_v7230","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v7235","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T13","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T2","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"}],"name":"_reach_oe_v7757","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"v0","type":"tuple"}],"name":"_reach_oe_v7853","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"uint256","name":"v3","type":"uint256"}],"name":"migrated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"uint256","name":"v3","type":"uint256"}],"name":"withdrew","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T7","name":"_changeAdmin0_4622","type":"tuple"},{"internalType":"bool","name":"_halt0_4622","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_migrate0_4622","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_withdraw0_4622","type":"tuple"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"v9209","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9182","type":"address"}],"name":"changeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"halt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"info","outputs":[{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T0","name":"name","type":"tuple"},{"internalType":"address payable","name":"v2lpToken","type":"address"},{"internalType":"address payable","name":"v3lpToken","type":"address"},{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"address payable","name":"v2PoolId","type":"address"},{"internalType":"address payable","name":"v3PoolId","type":"address"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9191","type":"uint256"}],"name":"migrate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9196","type":"uint256"}],"name":"withdraw","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806040526200511d80380380916200001882620000d8565b6080396101408112620000bc57620000ac9062000047620000386200016a565b916080518352608001620001ab565b6020820152620000566200020b565b60408201526200006562000223565b6060820152620000746200023b565b60808201526200008362000253565b60a0820152620000926200026b565b60c0820152620000a162000283565b60e0820152620002dc565b6040516139489081620017b58239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000ff57604052565b62000109620000c1565b604052565b60e081019081106001600160401b03821117620000ff57604052565b608081019081106001600160401b03821117620000ff57604052565b601f909101601f19168101906001600160401b03821190821017620000ff57604052565b6040519061010082016001600160401b03811183821017620000ff57604052565b60405190606082016001600160401b03811183821017620000ff57604052565b606090609f190112620000bc5760405190606082016001600160401b03811183821017620001ef575b6040528160a051815260c0516020820152604060e051910152565b620001f9620000c1565b620001d4565b6001600160a01b031690565b61010051906001600160a01b0382168203620000bc57565b61012051906001600160a01b0382168203620000bc57565b61014051906001600160a01b0382168203620000bc57565b61016051906001600160a01b0382168203620000bc57565b61018051906001600160a01b0382168203620000bc57565b6101a051906001600160a01b0382168203620000bc57565b60405190606082016001600160401b03811183821017620002cc575b60405260006040838281528260208201520152565b620002d6620000c1565b620002b7565b620003829060008080554360035560c0604091825190620002fd826200010e565b808252806020830152808483015280606083015283516200031e816200010e565b620003286200029b565b815281602082015281858201528160608201528160808201528160a0820152818482015260808301528060a08301528351938085019085821060018060401b0383111762000384575b5280845260208401520152620005d5565b565b6200038e620000c1565b62000371565b60405190620003a3826200012a565b8160005b60808110620003b4575050565b602090620003c16200029b565b8184015201620003a7565b6040519061010082016001600160401b0381118382101762000449575b604052600060e083620003fb6200029b565b81526200040762000394565b60208201526200041662000394565b60408201526200042562000394565b60608201526200043462000394565b60808201528260a08201528260c08201520152565b62000453620000c1565b620003e9565b6001600160a01b03169052565b6040809180518452602081015160208501520151910152565b61014060e06200038293959461016084019660018060a01b03809116855281516020860152620004b86020830151604087019062000466565b8060408301511660a08601528060608301511660c086015260808201511682850152620004ef60a082015161010086019062000459565b6200050460c082015161012086019062000459565b015191019062000459565b906004811015620005215760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040519061018082016001600160401b03811183821017620005b6575b60405281620005626200029b565b81526101606000918260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152620005ac62000394565b6101408201520152565b620005c0620000c1565b62000554565b6001600160a01b039091169052565b620003829062000a54620005e8620003cc565b6200060762000601620005fd60045460ff1690565b1590565b62000bb2565b7f9bb49b71731cfcc6ffcc995b189421e5d5b432d5c12d6d124a75d689ba5abb3660405180620006398633836200047f565b0390a1620006548351801590811562000ba5575b5062000bd3565b6000815152600060208251015260006040825101526200077662000703620006d78351602085019081515284516200068d825160200190565b528451815160400152845181516060015251805190620006d1604060208401519301511515620006bc6200018b565b93600085526020850152604084019015159052565b62000cf2565b806040850152602081015190620006fd604060208401519301511515620006bc6200018b565b62000d5d565b60608301908152620007196060860151620001ff565b620007326200072c6040880151620001ff565b620001ff565b6001600160a01b039091160362000b99576200074f600062000bf4565b5160408101519062000770604060208401519301511515620006bc6200018b565b62000dcb565b90608081019182526200078d6080850151620001ff565b620007a06200072c6040870151620001ff565b6001600160a01b0390911690810362000b685750620007c0600062000c15565b620007f9620007d360a0860151620001ff565b620007e66200072c6040880151620001ff565b6001600160a01b039091161460a0830152565b620008326200080c60a0860151620001ff565b6200081f6200072c6060880151620001ff565b6001600160a01b039091161460c0830152565b60a08101511562000b065762000849600062000c36565b62000855341562000c57565b62000889620008986200086c60c0870151620001ff565b604080516001600160a01b03909216602083015290928391820190565b03601f19810183528262000146565b60208151910120620008ae60e0860151620001ff565b604080516001600160a01b03909216602083019081529190620008d5908290810162000889565b5190200362000afa57620008ea600062000c78565b6200093d620008fd6080860151620001ff565b620009106200072c60a0880151620001ff565b6001600160a01b039091161460e0830190815280511562000aee5762000937600062000c99565b51151590565b1562000a68575062000950600062000cba565b62000a0f62000a0560e06200096462000537565b9560208101518752620009896200097f6040830151620001ff565b60208901620005c6565b620009a66200099c6060830151620001ff565b60408901620005c6565b620009c3620009b96080830151620001ff565b60608901620005c6565b620009e0620009d660a0830151620001ff565b60808901620005c6565b620009fd620009f360c0830151620001ff565b60a08901620005c6565b0151620001ff565b60c08501620005c6565b62000a1e3360e08501620005c6565b6001610100840152436101208401525160608101519062000a4e604060208401519301511515620006bc6200018b565b62000e39565b6101408201526000610160820152620012a6565b60a08101511562000ad4575060005b1562000ac85762000a8c6040840151620001ff565b62000a9f6200072c6060860151620001ff565b6001600160a01b039091160362000abc5762000950600062000cba565b62000950600162000cba565b62000950600062000cba565b60c001511562000ae657600062000a77565b600162000a77565b62000937600162000c99565b620008ea600162000c78565b60c08101511562000b1d5762000849600062000c36565b62000b2c60a0850151620001ff565b62000b3f6200072c6080870151620001ff565b6001600160a01b039091160362000b5c5762000849600062000c36565b62000849600162000c36565b62000b7b6200072c6060870151620001ff565b0362000b8d57620007c0600062000c15565b620007c0600162000c15565b6200074f600162000bf4565b905060015414386200064d565b1562000bba57565b60405163100960cb60e01b815260096004820152602490fd5b1562000bdb57565b60405163100960cb60e01b8152600a6004820152602490fd5b1562000bfc57565b60405163100960cb60e01b8152600b6004820152602490fd5b1562000c1d57565b60405163100960cb60e01b8152600c6004820152602490fd5b1562000c3e57565b60405163100960cb60e01b8152600d6004820152602490fd5b1562000c5f57565b60405163100960cb60e01b8152600e6004820152602490fd5b1562000c8057565b60405163100960cb60e01b8152600f6004820152602490fd5b1562000ca157565b60405163100960cb60e01b815260106004820152602490fd5b1562000cc257565b60405163100960cb60e01b815260116004820152602490fd5b50634e487b7160e01b600052601160045260246000fd5b919062000cfe62000394565b9260005b6004811062000d115750508252565b8062000d20600192846200050f565b5162000d2d82886200050f565b5262000d3a81876200050f565b50600019811462000d4d575b0162000d02565b62000d5762000cdb565b62000d46565b919062000d6962000394565b9260005b6004811062000d7f5750506020830152565b8062000d8e600192846200050f565b5162000d9b82886200050f565b5262000da881876200050f565b50600019811462000dbb575b0162000d6d565b62000dc562000cdb565b62000db4565b919062000dd762000394565b9260005b6004811062000ded5750506040830152565b8062000dfc600192846200050f565b5162000e0982886200050f565b5262000e1681876200050f565b50600019811462000e29575b0162000ddb565b62000e3362000cdb565b62000e22565b919062000e4562000394565b9260005b6004811062000e5b5750506060830152565b8062000e6a600192846200050f565b5162000e7782886200050f565b5262000e8481876200050f565b50600019811462000e97575b0162000e49565b62000ea162000cdb565b62000e90565b6040519060a082016001600160401b0381118382101762000eed575b604052600060808382815262000ed862000394565b60208201528260408201528260608201520152565b62000ef7620000c1565b62000ec3565b506040513d6000823e3d90fd5b90600182811c9216801562000f3c575b602083101462000f2657565b634e487b7160e01b600052602260045260246000fd5b91607f169162000f1a565b81811062000f53575050565b6000815560010162000f47565b62000f6d60025462000f0a565b8062000f765750565b601f811160011462000f8a57506000600255565b600260005262000fd290601f0160051c600080516020620050fd833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf62000f47565b6000602081208160025555565b6040519061014082016001600160401b0381118382101762001050575b604052816200100a6200029b565b81526101206000918260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201526200104662000394565b6101008201520152565b6200105a620000c1565b62000ffc565b6000915b600483106200107257505050565b60019060608351918251815260209283810151848301526040809101511515908201520192019201919062001064565b9190916102c06102e0820193620010bb83825162000466565b620010cf6020820151606085019062000459565b620010e36040820151608085019062000459565b620010f7606082015160a085019062000459565b6200110b608082015160c085019062000459565b6200111f60a082015160e085019062000459565b60c08101519062001137610100928386019062000459565b6200116260e08201519262001153610120948588019062000459565b82015161014086019062001060565b0151910152565b90601f821162001177575050565b620003829160026000526020600020906020601f840160051c83019310620011a8575b601f0160051c019062000f47565b90915081906200119a565b80519091906001600160401b03811162001296575b620011e081620011da60025462000f0a565b62001169565b602080601f83116001146200121f575081929360009262001213575b50508160011b916000199060031b1c191617600255565b015190503880620011fc565b6002600052601f19831694909190600080516020620050fd833981519152926000905b8782106200127d57505083600195961062001263575b505050811b01600255565b015160001960f88460031b161c1916905538808062001258565b8060018596829496860151815501950193019062001242565b620012a0620000c1565b620011c8565b620012b062000ea7565b9061010091620012c283830151151590565b15620013f15750620013eb62000382926101606200088993620012e462000fdf565b928151845262001306620012fc6020840151620001ff565b60208601620005c6565b62001323620013196040840151620001ff565b60408601620005c6565b62001340620013366060840151620001ff565b60608601620005c6565b6200135d620013536080840151620001ff565b60808601620005c6565b6200137a6200137060a0840151620001ff565b60a08601620005c6565b620013976200138d60c0840151620001ff565b60c08601620005c6565b620013b4620013aa60e0840151620001ff565b60e08601620005c6565b610140820151908401520151610120820152620013d16003600055565b620013db43600155565b60405192839160208301620010a2565b620011b3565b91506101408101906000808481959482959483809652815191604092838101519060209185838201519101511515620014296200018b565b89815284810192909252151586820152620014449162000dcb565b818601908152606092838501516200145c90620001ff565b9560e086019687516200146f90620001ff565b925160400151516001600160a01b03936200148e9290851690620016a1565b8483510190808901918a83526080880151620014aa90620001ff565b90848a51620014b990620001ff565b9151519116620014c992620016a1565b83518251878201518388820151910151151590620014e66200018b565b92835288830152151583820152620014fe9162000e39565b50835182518782015183888201519101511515906200151c6200018b565b92835288830152151583820152620015349162000e39565b50848701516200154490620001ff565b9488516200155290620001ff565b9451925191878401518183820151910151151592620015706200018b565b94855284015290151590820152620015889162000e39565b515191166200159792620016a1565b8301918483528051620015aa90620001ff565b620015b590620001ff565b916101600151928590868080808815986200072c986200160097620016089b62001668575bf11562001658575b514781808210156200164d575050608087965b01958087526200167a565b5051620001ff565b90519082821562001643575bf11562001633575b8055620016296000600155565b6200038262000f60565b6200163d62000efd565b6200161c565b506108fc62001614565b6080910396620015f5565b6200166262000efd565b620015e2565b506108fc620015da565b15620000bc57565b919082019182811162001691575b8210620000bc57565b6200169b62000cdb565b62001688565b600080916200038294826200174495604051602081019363a9059cbb60e01b855260018060a01b038093166024830152604482015260448152620016e5816200012a565b5193165af13d156200175a57620017333d6001600160401b0381116200174a575b6040519062001720601f8201601f19166020018362000146565b81529182903d6000602084013e62001782565b506020808251830101910162001768565b62001672565b62001754620000c1565b62001706565b620017336060809262001782565b90816020910312620000bc57518015158103620000bc5790565b156200178b5790565b8051156200179b57805190602001fd5b60405163100960cb60e01b815260026004820152602490fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146100e05780632e1a7d4d146100d7578063370158ea146100ce578063454b0608146100c55780635ed7ca5b146100bc57806383230757146100b35780638f283970146100aa578063ab53f2c6146100a1578063c4845bab146100985763f851a4400361000e576100936105ca565b61000e565b5061009361050e565b50610093610499565b5061009361040b565b506100936103db565b50610093610390565b50610093610334565b50610093610228565b50610093610125565b50346100ff5760003660031901126100ff576020600354604051908152f35b600080fd5b60208091805184520151910152565b6040810192916101239190610104565b565b5060203660031901126100ff5761013a6108cd565b50604060c06101476108e6565b610182816101536138f1565b60043581515260208101906003825152516080825101526101726138bb565b9060008252516020820152611083565b015161019082518092610104565bf35b6040809180518452602081015160208501520151910152565b6001600160a01b031690565b6001600160a01b03169052565b9190916101006101208201936101db838251610192565b60c060018060a01b03918260208201511660608601528260408201511660808601528260608201511660a086015282608082015116828601528260a08201511660e0860152015116910152565b50346100ff5760003660031901126100ff5761024261088e565b5061033060806102506108e6565b6102586138d7565b61026660036000541461266f565b61031e61031460c0610288610279610779565b60208082518301019101610e32565b80518551526102a761029d60208301516101ab565b602087510161104c565b6102c16102b760408301516101ab565b604087510161104c565b6102db6102d160608301516101ab565b606087510161104c565b6102f36102ea888301516101ab565b8887510161104c565b61030d61030360a08301516101ab565b60a087510161104c565b01516101ab565b60c083510161104c565b519182910152604051918291826101c4565b0390f35b5060203660031901126100ff57602060a061034d6108e6565b610386816103596138f1565b600435815152858101906002825152516060825101526103776138bb565b90600082525186820152611083565b0151604051908152f35b5060003660031901126100ff57602060606103a96108e6565b6103cf816103b56138bb565b8581019060018251525115156040825101526103776138bb565b01511515604051908152f35b50346100ff5760003660031901126100ff576020600154604051908152f35b6001600160a01b038116036100ff57565b5060203660031901126100ff576103306040600435610429816103fa565b6104856104346108e6565b80928451610441816106a7565b855161044c816106cf565b600081528152602081019161045f613861565b835281516001600160a01b039091169052815160009052518151602001526101726138bb565b015160405190151581529081906020820190565b50346100ff5760008060031936011261050b5780546104b6610779565b906040519283918252602090604082840152835191826040850152815b8381106104f457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016104d3565b80fd5b5060c03660031901126100ff576105236108e6565b60405190610530826106a7565b600435825260a03660231901126100ff576040519161054e836106ea565b60243560048110156100ff57835260203660431901126100ff576105be92604051610578816106cf565b604435610584816103fa565b8152602082015261059361093a565b60408201526105a136610947565b60608201526105af36610967565b60808201526020820152611083565b60405160008152602090f35b50346100ff5760003660031901126100ff576105e46108e6565b60036000540361063d576020610330916105fc610779565b80516001600160a01b039160e09161061b919081018601908601610e32565b01511691018190526040516001600160a01b0390911681529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b90600182811c92168015610686575b602083101461067057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610665565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176106c257604052565b6106ca610690565b604052565b602081019081106001600160401b038211176106c257604052565b60a081019081106001600160401b038211176106c257604052565b606081019081106001600160401b038211176106c257604052565b60e081019081106001600160401b038211176106c257604052565b608081019081106001600160401b038211176106c257604052565b601f909101601f19168101906001600160401b038211908210176106c257604052565b604051906000826002549161078d83610656565b80835260019380851690811561080157506001146107b3575b5061012392500383610756565b6002600090815260008051602061391c83398151915294602093509091905b8183106107e95750506101239350820101386107a6565b855488840185015294850194879450918301916107d2565b905061012394506020925060ff191682840152151560051b820101386107a6565b6040519061092082016001600160401b038111838210176106c257604052565b6040519061014082016001600160401b038111838210176106c257604052565b6040519061012382610705565b6040519061087c82610705565b60006040838281528260208201520152565b6040519061089b82610720565b816108a461086f565b815260c06000918260208201528260408201528260608201528260808201528260a08201520152565b604051906108da826106a7565b60006020838281520152565b604051906108f382610720565b816000815260006020820152600060408201526000606082015261091561088e565b6080820152600060a082015260c061092b6108cd565b910152565b801515036100ff57565b6064359061012382610930565b60209060831901126100ff5760405190610960826106cf565b6084358252565b60209060a31901126100ff5760405190610980826106cf565b60a4358252565b60405190610994826106cf565b60008252565b604051906109a78261073b565b8160005b608081106109b7575050565b6020906109c261086f565b81840152016109ab565b604051906109d982610705565b81600081526109e66108cd565b6020820152604061092b6108cd565b60405190610a0282610705565b60006040838281528151610a15816106cf565b83815260208201520152565b610a29610822565b90610a32610987565b8252610a3c610987565b60208301526000806040840152610a5161099a565b6060840152806080840152610a6461099a565b60a0840152610a716108cd565b60c0840152610a7e6109cc565b60e0840152610a8b6109cc565b6101008401528061012084015280610140840152610aa761099a565b61016084015280610180840152610abc61099a565b6101a0840152806101c0840152610ad161099a565b6101e084015280610200840152610ae661099a565b610220840152610af4610987565b610240840152610b026108cd565b610260840152610b106109f5565b610280840152610b1e6109f5565b6102a0840152806102c0840152806102e0840152610b3a61099a565b61030084015280610320840152610b4f61099a565b61034084015280610360840152610b6461099a565b610380840152806103a0840152610b7961099a565b6103c0840152806103e0840152610b8e610987565b61040084015280610420840152610ba361099a565b61044084015280610460840152610bb861099a565b610480840152610bc66108cd565b6104a0840152610bd46109cc565b6104c0840152610be26109cc565b6104e08401528061050084015280610520840152610bfe61099a565b61054084015280610560840152610c1361099a565b610580840152806105a0840152610c2861099a565b6105c0840152806105e0840152610c3d61099a565b61060084015280610620840152610c526108cd565b6106408401528061066084015280610680840152806106a0840152806106c0840152806106e08401528061070084015280610720840152806107408401528061076084015280610780840152806107a0840152806107c0840152806107e08401528061080084015280610820840152806108408401528061086084015280610880840152806108a0840152806108c0840152806108e0840152610900830152565b60041115610cfd57565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b039182168152825160208083019190915290920151805160e08401949392916004821015610cfd5760c0926080926040860152602082015151166060850152604081015115158285015260608101515160a0850152015151910152565b91908260609103126100ff57604051610d8f81610705565b604080829480518452602081015160208501520151910152565b5190610123826103fa565b9080601f830112156100ff57604091825192610dcf8461073b565b83926101808301928184116100ff57935b838510610def57505050505090565b6060858303126100ff578251606091610e0782610705565b86518252602091828801518382015285880151610e2381610930565b86820152815201940193610de0565b906102e0828203126100ff576102c0610e49610842565b92610e548382610d77565b8452610e6260608201610da9565b6020850152610e7360808201610da9565b6040850152610e8460a08201610da9565b6060850152610e9560c08201610da9565b6080850152610ea660e08201610da9565b60a0850152610100610eb9818301610da9565b60c0860152610edf61012094610ed0868501610da9565b60e08801526101408401610db4565b9085015201519082015290565b516004811015610cfd5790565b906004811015610f0a5760051b0190565b634e487b7160e01b600052603260045260246000fd5b3d15610f68573d906001600160401b038211610f5b575b60405191610f4f601f8201601f191660200184610756565b82523d6000602084013e565b610f63610690565b610f37565b606090565b908160409103126100ff57602060405191610f87836106a7565b805183520151602082015290565b610123909291926060604060a083019580518452610fbb60208201516020860190610104565b0151910190610104565b6040519061018082016001600160401b0381118382101761103f575b60405281610fed61086f565b81526101606000918260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261103561099a565b6101408201520152565b611047610690565b610fe1565b6001600160a01b039091169052565b60409093929193611070816060810196610104565b0152565b908160209103126100ff575190565b61108b610a21565b6110a66110a161109d60045460ff1690565b1590565b61268f565b7fe3ec3ee4a151cebf989d0ef0579c1524de5a5060891c3865844115bc4b571b0f604051806110d6853383610d13565b0390a16110e76003600054146126af565b60206111026110f4610779565b828082518301019101610e32565b9261111881518015908115612634575b506126cf565b016111238151610eec565b61112c81610cf3565b6112e8576112a661012394939260206112af93510151815261114e3415612b6c565b60006040602086019661117261116d6111678a516101ab565b33612e6e565b612b8c565b61119b60e0880161119561118e61118983516101ab565b6101ab565b3314612bac565b516101ab565b8451516111b0906001600160a01b03166101ab565b6001600160a01b039091161483146112de576111cb83612bcc565b8151600081527f28a2f7817315fa3e79cf0685ec82edf7d40c9e490dad05935403d0c0df9071f190602090a1015261121b611212611207610fc5565b9686518852516101ab565b6020870161104c565b61123461122b60408601516101ab565b6040870161104c565b61124d61124460608601516101ab565b6060870161104c565b61126661125d60808601516101ab565b6080870161104c565b61127f61127660a08601516101ab565b60a0870161104c565b61129861128f60c08601516101ab565b60c0870161104c565b51516001600160a01b031690565b60e0840161104c565b610100906112bf82840160019052565b61012091438385015281015161014084015201516101608201526134d8565b6111cb6001612bcc565b60016112f48251610eec565b6112fd81610cf3565b0361140957505090610123916113133415612b0c565b6113e06112a6602083019361133361132e61116787516101ab565b612b2c565b6000606060e086019261135361134c61118986516101ab565b3314612b4c565b604051600081527fba62fef8f793f0d3322f33e5a2d3ed3a5304a24851c79ff5571c8c1b7e59920e90602090a10152611390611212611207610fc5565b6113a061122b60408601516101ab565b6113b061124460608601516101ab565b6113c061125d60808601516101ab565b6113d061127660a08601516101ab565b61119561128f60c08601516101ab565b6101009060008284015261012091438385015281015161014084015201516101608201526134d8565b60026114158251610eec565b61141e81610cf3565b0361203157906101239361144260606102c09451015180602085015251151561284f565b61144c341561286f565b611497610100850180515151602085015151019081604086015251611492815160406020820151910151151590611481610862565b948552602085015215156040840152565b612ff7565b60608301526114c16114bc6114af60208701516101ab565b6020850151519033612ec9565b61288f565b6114f56060830151805151602085015151900390816080860152611492815160406020820151910151151590611481610862565b60a08301526000602060c084018281515251015261154661154161151c60208701516101ab565b61152960a08801516101ab565b602086015151916001600160a01b0390911690612f61565b6128ad565b61155d61155660608601516101ab565b3090612fa8565b6106808301526115793061157460808701516101ab565b612fa8565b6106a08301526115903061157460208701516101ab565b60208301515190036106c08301526115af3061157460408701516101ab565b610700830152476106608301526115ce600160ff196004541617600455565b7fb506a0ac8194971bf771035149be45b6bf0da92eb7f81af9695a86d82bfe608961177e600080611622611630602088015151604051928391632e1a7d4d60e01b6020840152602483019190602083019252565b03601f198101835282610756565b61164061118960a08b01516101ab565b82602083519301915af161165c611655610f20565b8092612c1c565b5061166c60ff1960045416600455565b6116956116803061157460208b01516101ab565b6106c08701518082036106e0890152146128cd565b6116be6116a93061157460408b01516101ab565b610700870151808203610720890152146128ed565b6117646116e16116d53061157460608c01516101ab565b61068088015190612657565b9160e08701926020845101515261170e6117023061157460808d01516101ab565b6106a089015190612657565b6020808551015101526117496117438a61173b61118960a061173360208501516101ab565b9301516101ab565b903090612d6c565b1561290d565b47610660880151900383515260208082518301019101610f6d565b604082510152518061010086015260405191829182610f95565b0390a16119156118d66118236117e06101208801516101008701519081510161012088015260a0870151906020604083015151910151510190816101408901526117db604082015160406020820151910151151590611481610862565b613054565b80610160870152606081019061181e8251516020806101008b0151015101510192836101808a01525160406020820151910151151590611481610862565b6130b4565b6101a0850190815261183b610100860151511561292d565b6101008501516020015180511561202657602061185b910151151561294d565b61187c6020610100870151015151611874835160400190565b51511461296d565b61189f60208061010088015101510151611897835160600190565b51511461298d565b5160408101906117db8251516020610100890151015151900392836101c08901525160406020820151910151151590611481610862565b806101e0850152606081019061181e82515160208061010089015101510151900392836102008801525160406020820151910151151590611481610862565b61022083015260208201515161024083015152602061010083015101515161026083015152602080610100840151015101516020610260840151015261197f61197a61196460408701516101ab565b61197461118960c08901516101ab565b90612f0c565b6129ad565b6119c16119bc61199260608701516101ab565b61199f60c08801516101ab565b6101008601516020015151916001600160a01b0390911690612f61565b6129cd565b611a06611a016119d460808701516101ab565b6119e160c08801516101ab565b6101008601516020908101510151916001600160a01b0390911690612f61565b6129ed565b7fa3610c9a05404a61d8497fd32e670c8939f11c7f9bf583414621d27c43539c28611c9683611c60611a3f3061157460408b01516101ab565b6107608301908152611bd5611a5b3061157460208d01516101ab565b916107808501928352611bbb8b611b98611a7c3061157460608501516101ab565b60206101008a015101515190036107c08901908152611b87611aa53061157460808701516101ab565b6020806101008d0151015101519003936108008b01948552611b79479b61074081019c8d52611adc600160ff196004541617600455565b600080611b0f610260840151611b1d602086015151604051938491602083019463e24a2c3960e01b86526024840161105b565b03601f198101845283610756565b82611b2e61118960c08a01516101ab565b9251925af19a611b46611b3f610f20565b809d612c4c565b50611b5660ff1960045416600455565b611b673061157460208701516101ab565b9051916107a083830391015214612a0d565b6115746060309201516101ab565b90518082036107e08f015214612a2d565b611baa8d6115746080309201516101ab565b90518082036108208d015214612a4d565b611bcd8b6115746040309201516101ab565b905190612657565b9261028088019360208551015152611c05611bff8b61173b61118960c061173360408501516101ab565b15612a6d565b611c27611c218b61173b61118960c061173360608501516101ab565b15612a8d565b611c49611c438b61173b61118960c061173360808501516101ab565b15612aad565b479051900383515260208082518301019101611074565b60408251015251806102a08601526040519182918291909160408060608301948051845260208101515160208501520151910152565b0390a1611dd9611cee6101208401516102a08501519081510186860152610220850151611ce960208201926020845151910151510192836102e08901525160406020820151910151151590611481610862565b613114565b6103008401908152611d1060406102a086015101516020860151511115612acd565b611d2460406102a086015101511515612aec565b611d91611d66825160006103208801526040810151906117db604060208401519301511515611d51610862565b93600085526020850152604084019015159052565b916103408601928352611d87611d7f60608a01516101ab565b915160400190565b5151903390612dd9565b611dbb8151600061036087015260608101519061181e604060208401519301511515611d51610862565b610380850152611d87611dd160808801516101ab565b915160600190565b611e0461038083015160006103a0850152805190611492604060208401519301511515611d51610862565b6103c0830152611e2a611e1a60208601516101ab565b6103808401515151903390612dd9565b611e5660206103c08401510160006103e0850152611e4b60408701516101ab565b905151903390612dd9565b6102a082015160409081015190519081527f36c45bc8e0722fb3b3051d2a76cd74d3bc5d9c8f8d19eb9685e08a263dceb0d890602090a160a060406102a084015101519101527f439c44e7034ae695eb07018775b5049b2086a880170c4774f1e98831d366aa7e611eca60608501516101ab565b6020610100840151015190611f208251926020611eea60808a01516101ab565b91015190604051948594856001600160a01b03918216815260208101929092529091166040820152606081019190915260800190565b0390a1611fd7611fce60e0611f33610fc5565b9580518752611f51611f4860208301516101ab565b6020890161104c565b611f6a611f6160408301516101ab565b6040890161104c565b611f83611f7a60608301516101ab565b6060890161104c565b611f9c611f9360808301516101ab565b6080890161104c565b611fb5611fac60a08301516101ab565b60a0890161104c565b61030d611fc560c08301516101ab565b60c0890161104c565b60e0850161104c565b6001610100840152436101208401526120136103c08201516103e083015190611ce9602082015160406020820151910151151590611481610862565b61014084015201516101608201526134d8565b5061185b600061294d565b90600361203e8351610eec565b61204781610cf3565b14612053575b50505050565b612620937f368a74a2e79311ebe79f7e1e57950eb62171f0308e826ab2b865c24c4f2e347e61234f6080610500955101516120986104008601918083525115156126ef565b6120a2341561270f565b61212d6120d86101008901805151518451510190816104208a015251611492815160406020820151910151151590611481610862565b61044087019081526121026120fd6120f360208c01516101ab565b8551519033612ec9565b61272f565b5180515183515190039081610460890152611492815160406020820151910151151590611481610862565b610480860152600060206104a087018281515251015261217d61217861215660208a01516101ab565b61216360a08b01516101ab565b845151916001600160a01b0390911690612f61565b61274f565b6123358761219161155660608301516101ab565b9261086088019384526122f36122d36121b13061157460808701516101ab565b956108808b019687526122c18b6122b06121d23061157460208b01516101ab565b8751519003976108a083019889526122a26121f43061157460408501516101ab565b936108e08101948552600080479b61084084019c8d5261221c600160ff196004541617600455565b5151604051632e1a7d4d60e01b602082019081526024820192909252906122468260448101611b0f565b8261225761118960a08a01516101ab565b9251925af19a61226f612268610f20565b809d612bec565b5061227f60ff1960045416600455565b6122903061157460208701516101ab565b9051916108c08383039101521461276f565b6115746040309201516101ab565b90518082036109008f01521461278f565b611bcd8d6115746060309201516101ab565b946104c08a019560208751015152611bcd8c6115746080309201516101ab565b60208086510151015261231e6123188b61173b61118960a061173360208501516101ab565b156127af565b479051900383515260208082518301019101610f6d565b60408251015251806104e086015260405191829182610f95565b0390a16123e06123a26101208601516104e085015190815101868601526104808501516117db60408201926020845151910151510192836105208901525160406020820151910151151590611481610862565b80610540850152606081019061181e8251516020806104e0890151015101510192836105608801525160406020820151910151151590611481610862565b6105808301526123f66104e083015151156127cf565b6104e08201516020015180511561262957602061241691015115156127ef565b61243b60206104e084015101515161243361058085015160400190565b51511461280f565b6124626020806104e08501510151015161245a61058085015160600190565b51511461282f565b61249061058083015160006105a08501526040810151906117db604060208401519301511515611d51610862565b6105c08301526124b46124a660608601516101ab565b610580840151604001611d87565b6124e26105c083015160006105e085015260608101519061181e604060208401519301511515611d51610862565b6106008301526125066124f860808601516101ab565b6105c0840151606001611d87565b6125246106008301516000610620850152611e4b60208701516101ab565b60c060206104e08401510151516106408401908151526020806104e0860151015101516020825101527f3d5cd29cbec6f1489cfb6b34400aaacd419dd31d1b7cd4bd54c7cb627a9b2ccc61257f825160405191829182610113565b0390a1519101527f50cdd39d4e25e7878e2b56b820fb4abd6514b534046b2831c459ebfa3cc983136125b460608501516101ab565b60206104e08401510151906125d48251926020611eea60808a01516101ab565b0390a16125e7611fce60e0611f33610fc5565b60016101008401524361012084015261201361060082015161062083015190611492815160406020820151910151151590611481610862565b3880808061204d565b5061241660006127ef565b90506001541438611112565b50634e487b7160e01b600052601160045260246000fd5b9081039081116126645790565b61266c612640565b90565b1561267657565b60405163100960cb60e01b815260086004820152602490fd5b1561269657565b60405163100960cb60e01b815260126004820152602490fd5b156126b657565b60405163100960cb60e01b815260136004820152602490fd5b156126d657565b60405163100960cb60e01b815260146004820152602490fd5b156126f657565b60405163100960cb60e01b815260466004820152602490fd5b1561271657565b60405163100960cb60e01b815260486004820152602490fd5b1561273657565b60405163100960cb60e01b8152604a6004820152602490fd5b1561275657565b60405163100960cb60e01b8152604c6004820152602490fd5b1561277657565b60405163100960cb60e01b8152604e6004820152602490fd5b1561279657565b60405163100960cb60e01b8152604f6004820152602490fd5b156127b657565b60405163100960cb60e01b8152604d6004820152602490fd5b156127d657565b60405163100960cb60e01b815260546004820152602490fd5b156127f657565b60405163100960cb60e01b815260556004820152602490fd5b1561281657565b60405163100960cb60e01b815260566004820152602490fd5b1561283657565b60405163100960cb60e01b815260576004820152602490fd5b1561285657565b60405163100960cb60e01b815260206004820152602490fd5b1561287657565b60405163100960cb60e01b815260226004820152602490fd5b1561289657565b602460405163100960cb60e01b8152816004820152fd5b156128b457565b60405163100960cb60e01b815260266004820152602490fd5b156128d457565b60405163100960cb60e01b815260286004820152602490fd5b156128f457565b60405163100960cb60e01b815260296004820152602490fd5b1561291457565b60405163100960cb60e01b815260276004820152602490fd5b1561293457565b60405163100960cb60e01b8152602e6004820152602490fd5b1561295457565b60405163100960cb60e01b8152602f6004820152602490fd5b1561297457565b60405163100960cb60e01b815260306004820152602490fd5b1561299457565b60405163100960cb60e01b815260316004820152602490fd5b156129b457565b60405163100960cb60e01b815260346004820152602490fd5b156129d457565b60405163100960cb60e01b815260356004820152602490fd5b156129f457565b60405163100960cb60e01b815260366004820152602490fd5b15612a1457565b60405163100960cb60e01b8152603a6004820152602490fd5b15612a3457565b60405163100960cb60e01b8152603b6004820152602490fd5b15612a5457565b60405163100960cb60e01b8152603c6004820152602490fd5b15612a7457565b60405163100960cb60e01b815260376004820152602490fd5b15612a9457565b60405163100960cb60e01b815260386004820152602490fd5b15612ab457565b60405163100960cb60e01b815260396004820152602490fd5b15612ad457565b602460405163100960cb60e01b815260406004820152fd5b15612af357565b60405163100960cb60e01b815260416004820152602490fd5b15612b1357565b60405163100960cb60e01b8152601c6004820152602490fd5b15612b3357565b60405163100960cb60e01b8152601e6004820152602490fd5b15612b5357565b60405163100960cb60e01b8152601f6004820152602490fd5b15612b7357565b60405163100960cb60e01b815260166004820152602490fd5b15612b9357565b60405163100960cb60e01b815260186004820152602490fd5b15612bb357565b60405163100960cb60e01b815260196004820152602490fd5b15612bd357565b60405163100960cb60e01b8152601a6004820152602490fd5b15612bf45790565b805115612c0357805190602001fd5b60405163100960cb60e01b815260506004820152602490fd5b15612c245790565b805115612c3357805190602001fd5b60405163100960cb60e01b8152602a6004820152602490fd5b15612c545790565b805115612c6357805190602001fd5b60405163100960cb60e01b8152603d6004820152602490fd5b15612c845790565b805115612c9357805190602001fd5b60405163100960cb60e01b815260006004820152602490fd5b15612cb45790565b805115612cc357805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612ce45790565b805115612cf357805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15612d145790565b805115612d2357805190602001fd5b60405163100960cb60e01b815260056004820152602490fd5b15612d445790565b805115612d5357805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b604051636eb1769f60e11b602082019081526001600160a01b039384166024830152938316604480830191909152815261266c93600093849392849190612db28161073b565b5193165af1612dc9612dc2610f20565b8092612c7c565b5060208082518301019101611074565b60009190829182611622612e08612e3797604051928391602083019663a9059cbb60e01b885260248401612e3e565b51926001600160a01b03165af1612e27612e20610f20565b8092612cac565b5060208082518301019101612e59565b156100ff57565b6001600160a01b039091168152602081019190915260400190565b908160209103126100ff575161266c81610930565b600061266c928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152612eb2816106ea565b5193165af1612e27612ec2610f20565b8092612cdc565b60009161266c9383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152612eb2816106ea565b6000809161266c938260405191602083019263095ea7b360e01b845260018060a01b03809216602482015282604482015260448152612f4a8161073b565b5193165af1612e27612f5a610f20565b8092612d0c565b60009190829182611622612f9061266c97604051928391602083019663095ea7b360e01b885260248401612e3e565b51926001600160a01b03165af1612e27612f5a610f20565b6000809161266c93826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152612fe081610705565b5193165af1612dc9612ff0610f20565b8092612d3c565b919061300161099a565b9260005b600481106130135750508252565b8061302060019284610ef9565b5161302b8288610ef9565b526130368187610ef9565b506000198114613047575b01613005565b61304f612640565b613041565b919061305e61099a565b9260005b600481106130735750506040830152565b8061308060019284610ef9565b5161308b8288610ef9565b526130968187610ef9565b5060001981146130a7575b01613062565b6130af612640565b6130a1565b91906130be61099a565b9260005b600481106130d35750506060830152565b806130e060019284610ef9565b516130eb8288610ef9565b526130f68187610ef9565b506000198114613107575b016130c2565b61310f612640565b613101565b919061311e61099a565b9260005b600481106131335750506020830152565b8061314060019284610ef9565b5161314b8288610ef9565b526131568187610ef9565b506000198114613167575b01613122565b61316f612640565b613161565b60405190613181826106ea565b600060808382815261319161099a565b60208201528260408201528260608201520152565b506040513d6000823e3d90fd5b8181106131be575050565b600081556001016131b3565b6131d5600254610656565b806131dd5750565b601f81116001146131f057506000600255565b600260005261323590601f0160051c60008051602061391c833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6131b3565b6000602081208160025555565b6040519061014082016001600160401b038111838210176132ae575b6040528161326a61086f565b81526101206000918260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201526132a461099a565b6101008201520152565b6132b6610690565b61325e565b6000915b600483106132cc57505050565b6001906060835191825181526020928381015184830152604080910151151590820152019201920191906132bf565b9190916102c06102e0820193613312838251610192565b613324602082015160608501906101b7565b613336604082015160808501906101b7565b613348606082015160a08501906101b7565b61335a608082015160c08501906101b7565b61336c60a082015160e08501906101b7565b60c08101519061338261010092838601906101b7565b6133a960e08201519261339b61012094858801906101b7565b8201516101408601906132bb565b0151910152565b90601f82116133bd575050565b6101239160026000526020600020906020601f840160051c830193106133eb575b601f0160051c01906131b3565b90915081906133de565b80519091906001600160401b0381116134cb575b61341d81613418600254610656565b6133b0565b602080601f8311600114613459575081929360009261344e575b50508160011b916000199060031b1c191617600255565b015190503880613437565b6002600052601f1983169490919060008051602061391c833981519152926000905b8782106134b357505083600195961061349a575b505050811b01600255565b015160001960f88460031b161c1916905538808061348f565b8060018596829496860151815501950193019061347b565b6134d3610690565b613409565b6134e0613174565b90610100916134f183830151151590565b156135fa57506135f5610123926101606116229361350d613242565b928151845261352b61352260208401516101ab565b6020860161104c565b61354461353b60408401516101ab565b6040860161104c565b61355d61355460608401516101ab565b6060860161104c565b61357661356d60808401516101ab565b6080860161104c565b61358f61358660a08401516101ab565b60a0860161104c565b6135a861359f60c08401516101ab565b60c0860161104c565b6135c16135b860e08401516101ab565b60e0860161104c565b6101408201519084015201516101208201526135dd6003600055565b6135e643600155565b604051928391602083016132fb565b6133f5565b91506101408101906000808481959482959483809652815191604092838101519060209185838201519101511515613630610862565b8981528481019290925215158682015261364991613054565b8186019081526060928385015161365f906101ab565b9560e08601968751613670906101ab565b925160400151516001600160a01b039361368d9290851690612dd9565b8483510190808901918a835260808801516136a7906101ab565b90848a516136b4906101ab565b91515191166136c292612dd9565b835182518782015183888201519101511515906136dd610862565b928352888301521515838201526136f3916130b4565b508351825187820151838882015191015115159061370f610862565b92835288830152151583820152613725916130b4565b5084870151613733906101ab565b94885161373f906101ab565b945192519187840151818382015191015115159261375b610862565b94855284015290151590820152613771916130b4565b5151911661377e92612dd9565b830191848352805161378f906101ab565b613798906101ab565b91610160015192859086808080881598611189986137dc976137e39b613836575bf115613829575b5147818082101561381f575050608087965b019580875261383f565b50516101ab565b905190828215613816575bf115613809575b80556138016000600155565b6101236131ca565b6138116131a6565b6137f5565b506108fc6137ee565b60809103966137d2565b6138316131a6565b6137c0565b506108fc6137b9565b9190820191828111613854575b82106100ff57565b61385c612640565b61384c565b6040519061386e826106ea565b816000815260405161387f816106cf565b6000815260208201526000604082015260405161389b816106cf565b6000815260608201526080604051916138b3836106cf565b600083520152565b604051906138c8826106a7565b8160008152602061092b613861565b604051906138e4826106cf565b816138ed61088e565b9052565b604051906138fe826106a7565b8160405161390b816106cf565b600081528152602061092b61386156fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 20765,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './poolMigrator.rsh:231:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './poolMigrator.rsh:144:46:after expr stmt semicolon',
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
  "changeAdmin": changeAdmin,
  "halt": halt,
  "migrate": migrate,
  "withdraw": withdraw
  };
export const _APIs = {
  changeAdmin: changeAdmin,
  halt: halt,
  migrate: migrate,
  withdraw: withdraw
  };
