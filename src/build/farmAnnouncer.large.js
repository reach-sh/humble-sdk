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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc3
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Struct([['ctcInfo', ctc1], ['startBlock', ctc2], ['endBlock', ctc2], ['rewardTokenId', ctc3], ['stakedTokenId', ctc3], ['pairTokenAId', ctc5], ['pairTokenASymbol', ctc6], ['pairTokenBId', ctc3], ['pairTokenBSymbol', ctc6], ['rewardTokenDecimals', ctc2], ['rewardTokenSymbol', ctc6], ['stakedTokenDecimals', ctc2], ['stakedTokenPoolId', ctc3], ['stakedTokenSymbol', ctc6], ['stakedTokenTotalSupply', ctc2]]);
  return {
    Announce: [ctc0, ctc7, ctc4]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      3: []
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
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Struct([['ctcInfo', ctc1], ['startBlock', ctc2], ['endBlock', ctc2], ['rewardTokenId', ctc3], ['stakedTokenId', ctc3], ['pairTokenAId', ctc4], ['pairTokenASymbol', ctc5], ['pairTokenBId', ctc3], ['pairTokenBSymbol', ctc5], ['rewardTokenDecimals', ctc2], ['rewardTokenSymbol', ctc5], ['stakedTokenDecimals', ctc2], ['stakedTokenPoolId', ctc3], ['stakedTokenSymbol', ctc5], ['stakedTokenTotalSupply', ctc2]]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Struct([['rewardToken1', ctc3], ['stakeToken', ctc3], ['rewards', ctc8], ['start', ctc2], ['end', ctc2], ['Rewarder0', ctc9]]);
  const ctc11 = stdlib.T_UInt256;
  const ctc12 = stdlib.T_Tuple([ctc11, ctc11]);
  const ctc13 = stdlib.T_Struct([['opts', ctc10], ['totalStaked', ctc2], ['remainingRewards', ctc8], ['lastRewardsPerShare_', ctc12], ['REWARDS_PREC', ctc11]]);
  const ctc14 = stdlib.T_Tuple([ctc2, ctc13]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./announcer.rsh:22:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./announcer.rsh:22:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v243, time: v242, didSend: v26, from: v241 } = txn1;
      
      ;
      
      const v245 = v242;
      
      if (await (async () => {
        
        return true;})()) {
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
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v243, time: v242, didSend: v26, from: v241 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './announcer.rsh:23:26:application',
    fs: ['at ./announcer.rsh:23:26:application call to [unknown function] (defined at: ./announcer.rsh:23:26:function exp)', 'at ./announcer.rsh:23:26:application call to "liftedInteract" (defined at: ./announcer.rsh:23:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  let v245 = v242;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v282], secs: v284, time: v283, didSend: v116, from: v281 } = txn3;
    undefined /* setApiDetails */;
    const v286 = v282[stdlib.checkedBigNumberify('./announcer.rsh:27:10:spread', stdlib.UInt_max, '0')];
    const v287 = [];
    ;
    const v293 = v286.ctcInfo;
    const v297 = undefined /* Remote */;
    const v298 = await txn3.getOutput('internal', 'v297', ctc14, v297);
    const v300 = v298[stdlib.checkedBigNumberify('./announcer.rsh:32:59:application', stdlib.UInt_max, '0')];
    const v323 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v300);
    stdlib.assert(v323, {
      at: './announcer.rsh:32:59:application',
      fs: ['at ./announcer.rsh:31:22:application call to [unknown function] (defined at: ./announcer.rsh:31:22:function exp)'],
      msg: 'remote bill check',
      who: 'Deployer'
      });
    const v342 = null;
    await txn3.getOutput('announce', 'v342', ctc0, v342);
    const v383 = null;
    null;
    const cv245 = v283;
    
    v245 = cv245;
    
    txn2 = txn3;
    continue;
    
    }
  return;
  
  
  };
export async function _announce3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _announce3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _announce3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc2
    });
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Struct([['ctcInfo', ctc0], ['startBlock', ctc1], ['endBlock', ctc1], ['rewardTokenId', ctc2], ['stakedTokenId', ctc2], ['pairTokenAId', ctc4], ['pairTokenASymbol', ctc5], ['pairTokenBId', ctc2], ['pairTokenBSymbol', ctc5], ['rewardTokenDecimals', ctc1], ['rewardTokenSymbol', ctc5], ['stakedTokenDecimals', ctc1], ['stakedTokenPoolId', ctc2], ['stakedTokenSymbol', ctc5], ['stakedTokenTotalSupply', ctc1]]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Struct([['rewardToken1', ctc2], ['stakeToken', ctc2], ['rewards', ctc8], ['start', ctc1], ['end', ctc1], ['Rewarder0', ctc9]]);
  const ctc11 = stdlib.T_UInt256;
  const ctc12 = stdlib.T_Tuple([ctc11, ctc11]);
  const ctc13 = stdlib.T_Struct([['opts', ctc10], ['totalStaked', ctc1], ['remainingRewards', ctc8], ['lastRewardsPerShare_', ctc12], ['REWARDS_PREC', ctc11]]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc13]);
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v253 = stdlib.protect(ctc7, await interact.in(), {
    at: './announcer.rsh:1:23:application',
    fs: ['at ./announcer.rsh:27:33:application call to [unknown function] (defined at: ./announcer.rsh:27:33:function exp)', 'at ./announcer.rsh:27:33:application call to [unknown function] (defined at: ./announcer.rsh:27:33:function exp)'],
    msg: 'in',
    who: 'announce'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v253],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./announcer.rsh:31:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v282], secs: v284, time: v283, didSend: v116, from: v281 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "announce"
        });
      const v286 = v282[stdlib.checkedBigNumberify('./announcer.rsh:27:10:spread', stdlib.UInt_max, '0')];
      const v287 = [];
      ;
      const v293 = v286.ctcInfo;
      const v297 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v293,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./announcer.rsh:32:59:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./announcer.rsh:32:59:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
      await txn1.getOutput('internal', 'v297', ctc14, v297);
      const v342 = null;
      const v343 = await txn1.getOutput('announce', 'v342', ctc3, v342);
      
      const v383 = null;
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v282], secs: v284, time: v283, didSend: v116, from: v281 } = txn1;
  undefined /* setApiDetails */;
  const v286 = v282[stdlib.checkedBigNumberify('./announcer.rsh:27:10:spread', stdlib.UInt_max, '0')];
  const v287 = [];
  ;
  const v293 = v286.ctcInfo;
  const v297 = undefined /* Remote */;
  const v298 = await txn1.getOutput('internal', 'v297', ctc14, v297);
  const v300 = v298[stdlib.checkedBigNumberify('./announcer.rsh:32:59:application', stdlib.UInt_max, '0')];
  const v323 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v300);
  stdlib.assert(v323, {
    at: './announcer.rsh:32:59:application',
    fs: ['at ./announcer.rsh:31:22:application call to [unknown function] (defined at: ./announcer.rsh:31:22:function exp)'],
    msg: 'remote bill check',
    who: 'announce'
    });
  const v342 = null;
  const v343 = await txn1.getOutput('announce', 'v342', ctc3, v342);
  if (v116) {
    stdlib.protect(ctc3, await interact.out(v282, v343), {
      at: './announcer.rsh:27:11:application',
      fs: ['at ./announcer.rsh:27:11:application call to [unknown function] (defined at: ./announcer.rsh:27:11:function exp)', 'at ./announcer.rsh:35:10:application call to "k" (defined at: ./announcer.rsh:31:22:function exp)', 'at ./announcer.rsh:31:22:application call to [unknown function] (defined at: ./announcer.rsh:31:22:function exp)'],
      msg: 'out',
      who: 'announce'
      });
    }
  else {
    }
  
  const v383 = null;
  null;
  return;
  
  
  
  };
export async function announce(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for announce expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for announce expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _announce3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`announce((uint64,uint64,uint64,uint64,uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64))byte[0]`],
    pure: [],
    sigs: [`announce((uint64,uint64,uint64,uint64,uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64))byte[0]`]
    },
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAEAAECAyYBACI1ADEYQQFkKGRJIls1AYEIWzUCNhoAF0lBABMiNQQjNQaB/sv9QBJENhoBQgAWNhoCFzUENhoDNhoBF0kkDEAAqCQSRCU0ARJENARJIhJMNAISEURJNQU1/4AEJg9vpjT/ULA0/zX+gAVhcHBJRDT+VwAIUAM1/DIKeDX7MgpgNPsJFjX6sSKyAYEGshA0/iJbshiABChy+OyyGrMyCmA0+wk0+hcJFrcAPlcEAFA1/YAIAAAAAAAAASk0/VCwNP01/CI0/CJbEkSACAAAAAAAAAFWsCg1B4AECDYmqTEAUDT+ULAyBkIAJiISRIGgjQaIAJUiNAESRDQESSISTDQCEhFEgARfDav6sDIGQgAANf8lNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 11,
  warnings: [`Step 2 calls a remote object at /app/announcer.rsh:32:59:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v427","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"address payable","name":"ctcInfo","type":"address"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"address payable","name":"rewardTokenId","type":"address"},{"internalType":"address payable","name":"stakedTokenId","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"pairTokenAId","type":"tuple"},{"internalType":"bytes8","name":"pairTokenASymbol","type":"bytes8"},{"internalType":"address payable","name":"pairTokenBId","type":"address"},{"internalType":"bytes8","name":"pairTokenBSymbol","type":"bytes8"},{"internalType":"uint256","name":"rewardTokenDecimals","type":"uint256"},{"internalType":"bytes8","name":"rewardTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenDecimals","type":"uint256"},{"internalType":"address payable","name":"stakedTokenPoolId","type":"address"},{"internalType":"bytes8","name":"stakedTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenTotalSupply","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v1","type":"tuple"},{"indexed":false,"internalType":"bool","name":"v2","type":"bool"}],"name":"Announce","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"address payable","name":"ctcInfo","type":"address"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"address payable","name":"rewardTokenId","type":"address"},{"internalType":"address payable","name":"stakedTokenId","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"pairTokenAId","type":"tuple"},{"internalType":"bytes8","name":"pairTokenASymbol","type":"bytes8"},{"internalType":"address payable","name":"pairTokenBId","type":"address"},{"internalType":"bytes8","name":"pairTokenBSymbol","type":"bytes8"},{"internalType":"uint256","name":"rewardTokenDecimals","type":"uint256"},{"internalType":"bytes8","name":"rewardTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenDecimals","type":"uint256"},{"internalType":"address payable","name":"stakedTokenPoolId","type":"address"},{"internalType":"bytes8","name":"stakedTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenTotalSupply","type":"uint256"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"address payable","name":"rewardToken1","type":"address"},{"internalType":"address payable","name":"stakeToken","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"rewards","type":"tuple"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address payable","name":"Rewarder0","type":"address"}],"internalType":"struct T7","name":"opts","type":"tuple"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"remainingRewards","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"lastRewardsPerShare_","type":"tuple"},{"internalType":"uint256","name":"REWARDS_PREC","type":"uint256"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"v0","type":"tuple"}],"name":"_reach_oe_v297","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v342","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"address payable","name":"ctcInfo","type":"address"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"address payable","name":"rewardTokenId","type":"address"},{"internalType":"address payable","name":"stakedTokenId","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"pairTokenAId","type":"tuple"},{"internalType":"bytes8","name":"pairTokenASymbol","type":"bytes8"},{"internalType":"address payable","name":"pairTokenBId","type":"address"},{"internalType":"bytes8","name":"pairTokenBSymbol","type":"bytes8"},{"internalType":"uint256","name":"rewardTokenDecimals","type":"uint256"},{"internalType":"bytes8","name":"rewardTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenDecimals","type":"uint256"},{"internalType":"address payable","name":"stakedTokenPoolId","type":"address"},{"internalType":"bytes8","name":"stakedTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenTotalSupply","type":"uint256"}],"internalType":"struct T1","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v430","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address payable","name":"ctcInfo","type":"address"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"address payable","name":"rewardTokenId","type":"address"},{"internalType":"address payable","name":"stakedTokenId","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"pairTokenAId","type":"tuple"},{"internalType":"bytes8","name":"pairTokenASymbol","type":"bytes8"},{"internalType":"address payable","name":"pairTokenBId","type":"address"},{"internalType":"bytes8","name":"pairTokenBSymbol","type":"bytes8"},{"internalType":"uint256","name":"rewardTokenDecimals","type":"uint256"},{"internalType":"bytes8","name":"rewardTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenDecimals","type":"uint256"},{"internalType":"address payable","name":"stakedTokenPoolId","type":"address"},{"internalType":"bytes8","name":"stakedTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenTotalSupply","type":"uint256"}],"internalType":"struct T1","name":"v422","type":"tuple"}],"name":"announce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620013ed90813803601f1980601f83011683019360018060401b039284861084871117620002bb5780859260409788528339602094859181010312620002d15784519084820182811085821117620002bb5786525181524360035584518581019080821085831117620002bb57859187526000918183809352015260049160ff835416620002a4577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a151801590811562000297575b50156200028057346200026957600381556001944386558651928282850152818452878401848110878211176200025657885283519586116200024357600254908782811c9216801562000238575b83831014620002255750601f8111620001d9575b508093601f8611600114620001715750509183949184939462000165575b50501b916000199060031b1c1916176002555b516111169081620002d78239f35b01519250388062000144565b600283528183209493928692918316915b88838310620001be5750505010620001a4575b505050811b0160025562000157565b015160001960f88460031b161c1916905538808062000195565b85870151885590960195948501948793509081019062000182565b60028352818320601f870160051c8101918388106200021a575b601f0160051c019087905b8281106200020e57505062000126565b848155018790620001fe565b9091508190620001f3565b634e487b7160e01b845260229052602483fd5b91607f169162000112565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000c3565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe60806040526004361015610018575b361561001657005b005b6000803560e01c9081631e93b0f11461007f575080638323075714610076578063ab53f2c61461006d578063ad34e48a146100645763ec15231b0361000e5761005f610268565b61000e565b5061005f610134565b5061005f6100c2565b5061005f61009e565b3461009b578060031936011261009b5760035460805260206080f35b80fd5b50346100bd5760003660031901126100bd576020600154604051908152f35b600080fd5b50346100bd5760008060031936011261009b5780546100df61046c565b906040519283918252602090604082840152835191826040850152815b83811061011d57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016100fc565b506102203660031901126100bd57610264602061014f610537565b6102508161015b610517565b610163610561565b815260243585820152604435604082015261017c61056e565b606082015261018961057b565b6080820152610197366105e4565b60a08201526101a46106b5565b60c08201526101b1610588565b60e08201526101be6106cd565b610100820152610164356101208201526101d66106e5565b6101408201526101a4356101608201526101ee610596565b6101808201526101fc6106fd565b6101a0820152610204356101c082015260405190610219826103d0565b610221611069565b8083525260405190610232826103f8565b6000825285820190610242611069565b825260008352519052610c08565b015160405190151581529081906020820190565b0390f35b506102403660031901126100bd5761027e610537565b6040519061028b826103f8565b60043582526102203660231901126100bd57610373916040516102ad816103d0565b6102b5610517565b6102bd6105a4565b8152604435602082015260643560408201526102d761057b565b60608201526102e46105b1565b60808201526102f23661064e565b60a08201526102ff610715565b60c082015261030c6105be565b60e082015261031961072d565b61010082015261018435610120820152610331610745565b6101408201526101c4356101608201526103496105cc565b61018082015261035761075d565b6101a0820152610224356101c082015281526020820152610c08565b60405160008152602090f35b90600182811c921680156103af575b602083101461039957565b634e487b7160e01b600052602260045260246000fd5b91607f169161038e565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176103eb57604052565b6103f36103b9565b604052565b604081019081106001600160401b038211176103eb57604052565b60c081019081106001600160401b038211176103eb57604052565b60a081019081106001600160401b038211176103eb57604052565b601f909101601f19168101906001600160401b038211908210176103eb57604052565b60405190600082600254916104808361037f565b8083526001938085169081156104f657506001146104a8575b506104a692500383610449565b565b600260009081526000805160206110ea83398151915294602093509091905b8183106104de5750506104a6935082010138610499565b855488840185015294850194879450918301916104c7565b90506104a694506020925060ff191682840152151560051b82010138610499565b604051906101e082016001600160401b038111838210176103eb57604052565b60405190610544826103f8565b60006020838281520152565b6001600160a01b038116036100bd57565b600435906104a682610550565b606435906104a682610550565b608435906104a682610550565b61012435906104a682610550565b6101c435906104a682610550565b602435906104a682610550565b60a435906104a682610550565b61014435906104a682610550565b6101e435906104a682610550565b801515036100bd57565b60609060a31901126100bd5760405190606082016001600160401b03811183821017610641575b6040528160a43560028110156100bd57815260c435610629816105da565b6020820152604060e4359161063d83610550565b0152565b6106496103b9565b61060b565b60609060c31901126100bd5760405190606082016001600160401b038111838210176106a8575b6040528160c43560028110156100bd57815260e435610693816105da565b60208201526040610104359161063d83610550565b6106b06103b9565b610675565b61010435906001600160c01b0319821682036100bd57565b61014435906001600160c01b0319821682036100bd57565b61018435906001600160c01b0319821682036100bd57565b6101e435906001600160c01b0319821682036100bd57565b61012435906001600160c01b0319821682036100bd57565b61016435906001600160c01b0319821682036100bd57565b6101a435906001600160c01b0319821682036100bd57565b61020435906001600160c01b0319821682036100bd57565b60405190610782826103f8565b600080835260405190602090849060a084016001600160401b03811185821017610809575b806040526107b481610413565b8181528160c08601526107c5610537565b60e0860152816101008601528161012086015281610140860152845280838501526107ee610537565b60408501526107fb610537565b606085015260808401520152565b6108116103b9565b6107a7565b60405190608082016001600160401b0381118382101761085a575b6040526000606083828152610844610775565b6020820152610851610775565b60408201520152565b6108626103b9565b610831565b6001600160a01b03169052565b80519060028210156108a3579082526020818101511515908301526040908101516001600160a01b0316910152565b634e487b7160e01b600052602160045260246000fd5b6001600160c01b0319169052565b610200906108d6838251610867565b60208101516020840152604081015160408401526108fc60608201516060850190610867565b61090e60808201516080850190610867565b61092060a082015160a0850190610874565b60c08101519061093661010092838601906108b9565b6109b160e08201519261094f6101209485880190610867565b8201519261096361014094858801906108b9565b8201519261016093848701528201519261098361018094858801906108b9565b820151926101a09384870152820151926109a36101c09485880190610867565b8201516101e08601906108b9565b0151910152565b604060206104a693959461026084019660018060a01b031684528051828501520151910190516108c7565b908160209103126100bd57516109f8816105da565b90565b3d15610a43573d906001600160401b038211610a36575b60405191610a2a601f8201601f191660200184610449565b82523d6000602084013e565b610a3e6103b9565b610a12565b606090565b91908260409103126100bd57604051610a60816103f8565b6020808294805184520151910152565b90818103916101a083126100bd5760e060405193610a8d8561042e565b126100bd57610b2761018092604051610aa581610413565b8351610ab081610550565b81526020840151610ac081610550565b6020820152610ad28260408601610a48565b60408201526080840151606082015260a0840151608082015260c0840151610af981610550565b60a0820152855260e08301516020860152610b18816101008501610a48565b60408601526101408301610a48565b60608401520151608082015290565b9190916101a0608060206101c0840195805185520151805160a0600180821b0391828151166020880152826020820151166040880152610b886040820151606089019060208091805184520151910152565b6060810151878301528481015160c088015201511660e085015260208181015161010086015260408201518051610120870152015161014085015260608101518051610160860152602001516101808501526109b1565b6001600160a01b039091168152610260810192916000916102409161063d9060208301906108c7565b610c10610816565b610c2b610c26610c2260045460ff1690565b1590565b610e0a565b6040927fb83097a05872e6fec57471bd1aea7c82e10a04e400e61fa1a39d6f84be8a1de6845180610c5d8633836109b8565b0390a1610c6e600360005414610e2a565b610c7661046c565b91610c8b6020938480825183010191016109e3565b50610ca184518015908115610dfe575b50610e4a565b610cab3415610e6a565b844760608301908152610cc6600160ff196004541617600455565b8151958580880191632009701760e11b835260048952610ce5896103f8565b0180515151975190976001600160a01b0316905a9260008094938194f190610d0b6109fb565b9182610d1691610eaa565b50610d2660ff1960045416600455565b4790519003908584019182515285808251830101910190610d4691610a70565b8582510152519101908082528551610d5f819282610b36565b037faea43ed2bd51cfce84105deedde983699b8c723b224f40faa4c1efe6b6bfd05291a1515115610d8f90610e8a565b8351600081527fd8f463a61044cbaf988c1839320ccbe7f3e8847f2a1895f7330c2bd6836435bd90602090a101600090525151905180913390610dd29183610bdf565b037f959c4fd3b80bc174d72aee8dcc54c37f96de75a581b665cc0fb1cbfd6b91bf0a91a16104a6610f2e565b90506001541438610c9b565b15610e1157565b60405163100960cb60e01b8152600a6004820152602490fd5b15610e3157565b60405163100960cb60e01b8152600b6004820152602490fd5b15610e5157565b60405163100960cb60e01b8152600c6004820152602490fd5b15610e7157565b60405163100960cb60e01b8152600d6004820152602490fd5b15610e9157565b60405163100960cb60e01b8152600f6004820152602490fd5b15610eb25790565b805115610ec157805190602001fd5b60405163100960cb60e01b8152600e6004820152602490fd5b601f8111610ee6575050565b6000906002825260208220906020601f850160051c83019410610f24575b601f0160051c01915b828110610f1957505050565b818155600101610f0d565b9092508290610f04565b600360005560014381556040516020600081830152808252610f4f826103f8565b8151916001600160401b03831161101f575b610f7583610f7060025461037f565b610eda565b81601f8411600114610faf5750928293918392600094610fa4575b50501b916000199060031b1c191617600255565b015192503880610f90565b6002600052919083601f1981166000805160206110ea833981519152946000905b888383106110055750505010610fec575b505050811b01600255565b015160001960f88460031b161c19169055388080610fe1565b858701518855909601959485019487935090810190610fd0565b6110276103b9565b610f61565b60405190606082016001600160401b0381118382101761105c575b60405260006040838281528260208201520152565b6110646103b9565b611047565b60405190611076826103d0565b8161107f610517565b9060008083528060208401528060408401528060608401528060808401526110a561102c565b60a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a08401526101c08301525256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 5101,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './announcer.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './announcer.rsh:24:28:after expr stmt semicolon',
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
  "Deployer": Deployer,
  "announce": announce
  };
export const _APIs = {
  announce: announce
  };
