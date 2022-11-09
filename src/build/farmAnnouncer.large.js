// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

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
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Struct([['ctcInfo', ctc1], ['startBlock', ctc2], ['endBlock', ctc2], ['rewardTokenId', ctc3], ['rewardsPerBlock', ctc4], ['stakedTokenId', ctc3], ['pairTokenAId', ctc6], ['pairTokenASymbol', ctc7], ['pairTokenBId', ctc3], ['pairTokenBSymbol', ctc7], ['rewardTokenDecimals', ctc2], ['rewardTokenSymbol', ctc7], ['stakedTokenDecimals', ctc2], ['stakedTokenPoolId', ctc3], ['stakedTokenSymbol', ctc7], ['stakedTokenTotalSupply', ctc2]]);
  return {
    Announce: [ctc0, ctc8, ctc5]
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
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Struct([['ctcInfo', ctc1], ['startBlock', ctc2], ['endBlock', ctc2], ['rewardTokenId', ctc3], ['rewardsPerBlock', ctc4], ['stakedTokenId', ctc3], ['pairTokenAId', ctc5], ['pairTokenASymbol', ctc6], ['pairTokenBId', ctc3], ['pairTokenBSymbol', ctc6], ['rewardTokenDecimals', ctc2], ['rewardTokenSymbol', ctc6], ['stakedTokenDecimals', ctc2], ['stakedTokenPoolId', ctc3], ['stakedTokenSymbol', ctc6], ['stakedTokenTotalSupply', ctc2]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Struct([['rewardToken1', ctc3], ['stakeToken', ctc3], ['rewardsPerBlock', ctc4], ['start', ctc2], ['end', ctc2], ['Rewarder0', ctc9]]);
  const ctc11 = stdlib.T_Struct([['opts', ctc10], ['totalStaked', ctc2], ['remainingRewards', ctc4]]);
  const ctc12 = stdlib.T_Tuple([ctc2, ctc11]);
  
  
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
      
      
      const {data: [], secs: v259, time: v258, didSend: v26, from: v257 } = txn1;
      
      ;
      
      const v261 = v258;
      
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
  const {data: [], secs: v259, time: v258, didSend: v26, from: v257 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './announcer.rsh:23:26:application',
    fs: ['at ./announcer.rsh:23:26:application call to [unknown function] (defined at: ./announcer.rsh:23:26:function exp)', 'at ./announcer.rsh:23:26:application call to "liftedInteract" (defined at: ./announcer.rsh:23:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  let v261 = v258;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v301], secs: v303, time: v302, didSend: v122, from: v300 } = txn3;
    undefined /* setApiDetails */;
    const v305 = v301[stdlib.checkedBigNumberify('./announcer.rsh:27:10:spread', stdlib.UInt_max, '0')];
    const v306 = [];
    ;
    const v312 = v305.ctcInfo;
    const v316 = undefined /* Remote */;
    const v317 = await txn3.getOutput('internal', 'v316', ctc12, v316);
    const v319 = v317[stdlib.checkedBigNumberify('./announcer.rsh:32:59:application', stdlib.UInt_max, '0')];
    const v338 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v319);
    stdlib.assert(v338, {
      at: './announcer.rsh:32:59:application',
      fs: ['at ./announcer.rsh:31:22:application call to [unknown function] (defined at: ./announcer.rsh:31:22:function exp)'],
      msg: 'remote bill check',
      who: 'Deployer'
      });
    const v363 = null;
    await txn3.getOutput('announce', 'v363', ctc0, v363);
    const v410 = null;
    null;
    const cv261 = v302;
    
    v261 = cv261;
    
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
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Struct([['ctcInfo', ctc0], ['startBlock', ctc1], ['endBlock', ctc1], ['rewardTokenId', ctc2], ['rewardsPerBlock', ctc3], ['stakedTokenId', ctc2], ['pairTokenAId', ctc5], ['pairTokenASymbol', ctc6], ['pairTokenBId', ctc2], ['pairTokenBSymbol', ctc6], ['rewardTokenDecimals', ctc1], ['rewardTokenSymbol', ctc6], ['stakedTokenDecimals', ctc1], ['stakedTokenPoolId', ctc2], ['stakedTokenSymbol', ctc6], ['stakedTokenTotalSupply', ctc1]]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Struct([['rewardToken1', ctc2], ['stakeToken', ctc2], ['rewardsPerBlock', ctc3], ['start', ctc1], ['end', ctc1], ['Rewarder0', ctc9]]);
  const ctc11 = stdlib.T_Struct([['opts', ctc10], ['totalStaked', ctc1], ['remainingRewards', ctc3]]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc11]);
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v269 = stdlib.protect(ctc8, await interact.in(), {
    at: './announcer.rsh:1:23:application',
    fs: ['at ./announcer.rsh:27:33:application call to [unknown function] (defined at: ./announcer.rsh:27:33:function exp)', 'at ./announcer.rsh:27:33:application call to [unknown function] (defined at: ./announcer.rsh:27:33:function exp)'],
    msg: 'in',
    who: 'announce'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v269],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./announcer.rsh:31:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v301], secs: v303, time: v302, didSend: v122, from: v300 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "announce"
        });
      const v305 = v301[stdlib.checkedBigNumberify('./announcer.rsh:27:10:spread', stdlib.UInt_max, '0')];
      const v306 = [];
      ;
      const v312 = v305.ctcInfo;
      const v316 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v312,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./announcer.rsh:32:59:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./announcer.rsh:32:59:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v306 /* simTokensRecv */, undefined /* simReturnVal */];})();
      await txn1.getOutput('internal', 'v316', ctc12, v316);
      const v363 = null;
      const v364 = await txn1.getOutput('announce', 'v363', ctc4, v363);
      
      const v410 = null;
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v301], secs: v303, time: v302, didSend: v122, from: v300 } = txn1;
  undefined /* setApiDetails */;
  const v305 = v301[stdlib.checkedBigNumberify('./announcer.rsh:27:10:spread', stdlib.UInt_max, '0')];
  const v306 = [];
  ;
  const v312 = v305.ctcInfo;
  const v316 = undefined /* Remote */;
  const v317 = await txn1.getOutput('internal', 'v316', ctc12, v316);
  const v319 = v317[stdlib.checkedBigNumberify('./announcer.rsh:32:59:application', stdlib.UInt_max, '0')];
  const v338 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v319);
  stdlib.assert(v338, {
    at: './announcer.rsh:32:59:application',
    fs: ['at ./announcer.rsh:31:22:application call to [unknown function] (defined at: ./announcer.rsh:31:22:function exp)'],
    msg: 'remote bill check',
    who: 'announce'
    });
  const v363 = null;
  const v364 = await txn1.getOutput('announce', 'v363', ctc4, v363);
  if (v122) {
    stdlib.protect(ctc4, await interact.out(v301, v364), {
      at: './announcer.rsh:27:11:application',
      fs: ['at ./announcer.rsh:27:11:application call to [unknown function] (defined at: ./announcer.rsh:27:11:function exp)', 'at ./announcer.rsh:35:10:application call to "k" (defined at: ./announcer.rsh:31:22:function exp)', 'at ./announcer.rsh:31:22:application call to [unknown function] (defined at: ./announcer.rsh:31:22:function exp)'],
      msg: 'out',
      who: 'announce'
      });
    }
  else {
    }
  
  const v410 = null;
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
    impure: [`announce((uint64,uint64,uint64,uint64,(uint64,uint64),uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64))byte[0]`],
    pure: [],
    sigs: [`announce((uint64,uint64,uint64,uint64,(uint64,uint64),uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64))byte[0]`]
    },
  appApproval: `ByAEAAECAyYBACI1ADEYQQFlKGRJIls1AYEIWzUCNhoAF0lBABQiNQQjNQaBlJqGkg4SRDYaAUIAFjYaAhc1BDYaAzYaARdJJAxAAKgkEkQlNAESRDQESSISTDQCEhFESTUFNf+ABKrkRMw0/1CwNP81/oAFYXBwSUQ0/lcACFADNfwyCng1+zIKYDT7CRY1+rEisgGBBrIQNP4iW7IYgARlxrONshqzMgpgNPsJNPoXCRa3AD5XBABQNf2ACAAAAAAAAAE8NP1QsDT9NfwiNPwiWxJEgAgAAAAAAAABa7AoNQeABNGQI3AxAFA0/lCwMgZCACYiEkSBoI0GiACVIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAyBkIAADX/JTUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
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
            "internalType": "address payable",
            "name": "ctcInfo",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endBlock",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "rewardTokenId",
            "type": "address"
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
            "internalType": "struct T4",
            "name": "rewardsPerBlock",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "stakedTokenId",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T8",
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
            "internalType": "struct T8",
            "name": "pairTokenAId",
            "type": "tuple"
          },
          {
            "internalType": "bytes8",
            "name": "pairTokenASymbol",
            "type": "bytes8"
          },
          {
            "internalType": "address payable",
            "name": "pairTokenBId",
            "type": "address"
          },
          {
            "internalType": "bytes8",
            "name": "pairTokenBSymbol",
            "type": "bytes8"
          },
          {
            "internalType": "uint256",
            "name": "rewardTokenDecimals",
            "type": "uint256"
          },
          {
            "internalType": "bytes8",
            "name": "rewardTokenSymbol",
            "type": "bytes8"
          },
          {
            "internalType": "uint256",
            "name": "stakedTokenDecimals",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "stakedTokenPoolId",
            "type": "address"
          },
          {
            "internalType": "bytes8",
            "name": "stakedTokenSymbol",
            "type": "bytes8"
          },
          {
            "internalType": "uint256",
            "name": "stakedTokenTotalSupply",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v1",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v2",
        "type": "bool"
      }
    ],
    "name": "Announce",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "ctcInfo",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "startBlock",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "endBlock",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "rewardTokenId",
                        "type": "address"
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
                        "internalType": "struct T4",
                        "name": "rewardsPerBlock",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "stakedTokenId",
                        "type": "address"
                      },
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T8",
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
                        "internalType": "struct T8",
                        "name": "pairTokenAId",
                        "type": "tuple"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "pairTokenASymbol",
                        "type": "bytes8"
                      },
                      {
                        "internalType": "address payable",
                        "name": "pairTokenBId",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "pairTokenBSymbol",
                        "type": "bytes8"
                      },
                      {
                        "internalType": "uint256",
                        "name": "rewardTokenDecimals",
                        "type": "uint256"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "rewardTokenSymbol",
                        "type": "bytes8"
                      },
                      {
                        "internalType": "uint256",
                        "name": "stakedTokenDecimals",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "stakedTokenPoolId",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "stakedTokenSymbol",
                        "type": "bytes8"
                      },
                      {
                        "internalType": "uint256",
                        "name": "stakedTokenTotalSupply",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v301",
                "type": "tuple"
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
    "name": "_reach_e2",
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
                    "internalType": "address payable",
                    "name": "rewardToken1",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "stakeToken",
                    "type": "address"
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
                    "internalType": "struct T4",
                    "name": "rewardsPerBlock",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "Rewarder0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T5",
                "name": "opts",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "totalStaked",
                "type": "uint256"
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
                "internalType": "struct T4",
                "name": "remainingRewards",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
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
    "name": "_reach_oe_v316",
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
    "name": "_reach_oe_v363",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "ctcInfo",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "startBlock",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "endBlock",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "rewardTokenId",
                        "type": "address"
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
                        "internalType": "struct T4",
                        "name": "rewardsPerBlock",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "stakedTokenId",
                        "type": "address"
                      },
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T8",
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
                        "internalType": "struct T8",
                        "name": "pairTokenAId",
                        "type": "tuple"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "pairTokenASymbol",
                        "type": "bytes8"
                      },
                      {
                        "internalType": "address payable",
                        "name": "pairTokenBId",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "pairTokenBSymbol",
                        "type": "bytes8"
                      },
                      {
                        "internalType": "uint256",
                        "name": "rewardTokenDecimals",
                        "type": "uint256"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "rewardTokenSymbol",
                        "type": "bytes8"
                      },
                      {
                        "internalType": "uint256",
                        "name": "stakedTokenDecimals",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "stakedTokenPoolId",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "stakedTokenSymbol",
                        "type": "bytes8"
                      },
                      {
                        "internalType": "uint256",
                        "name": "stakedTokenTotalSupply",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v301",
                "type": "tuple"
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
            "internalType": "address payable",
            "name": "ctcInfo",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endBlock",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "rewardTokenId",
            "type": "address"
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
            "internalType": "struct T4",
            "name": "rewardsPerBlock",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "stakedTokenId",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T8",
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
            "internalType": "struct T8",
            "name": "pairTokenAId",
            "type": "tuple"
          },
          {
            "internalType": "bytes8",
            "name": "pairTokenASymbol",
            "type": "bytes8"
          },
          {
            "internalType": "address payable",
            "name": "pairTokenBId",
            "type": "address"
          },
          {
            "internalType": "bytes8",
            "name": "pairTokenBSymbol",
            "type": "bytes8"
          },
          {
            "internalType": "uint256",
            "name": "rewardTokenDecimals",
            "type": "uint256"
          },
          {
            "internalType": "bytes8",
            "name": "rewardTokenSymbol",
            "type": "bytes8"
          },
          {
            "internalType": "uint256",
            "name": "stakedTokenDecimals",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "stakedTokenPoolId",
            "type": "address"
          },
          {
            "internalType": "bytes8",
            "name": "stakedTokenSymbol",
            "type": "bytes8"
          },
          {
            "internalType": "uint256",
            "name": "stakedTokenTotalSupply",
            "type": "uint256"
          }
        ],
        "internalType": "struct T9",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "announce",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620012f4380380620012f48339810160408190526200002691620001e5565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000a8565b6200008d6200010f565b6020810151439052620000a081620000d2565b50506200028d565b81620000ce5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b600360009081554360015560408051602080820184905282518083038201815291830190925280516200010a9260029201906200013f565b505050565b60405180604001604052806000151581526020016200013a6040518060200160405280600081525090565b905290565b8280546200014d9062000250565b90600052602060002090601f016020900481019282620001715760008555620001bc565b82601f106200018c57805160ff1916838001178555620001bc565b82800160010185558215620001bc579182015b82811115620001bc5782518255916020019190600101906200019f565b50620001ca929150620001ce565b5090565b5b80821115620001ca5760008155600101620001cf565b600060408284031215620001f857600080fd5b604080519081016001600160401b03811182821017156200022957634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200024457600080fd5b60208201529392505050565b600181811c908216806200026557607f821691505b602082108114156200028757634e487b7160e01b600052602260045260246000fd5b50919050565b611057806200029d6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780635c0112b614610078578063832307571461009b57806384b11110146100b0578063ab53f2c6146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61008b610086366004610b3c565b6100e6565b604051901515815260200161006f565b3480156100a757600080fd5b50600154610065565b6100526100be366004610b59565b6100f7565b3480156100cf57600080fd5b506100d8610122565b60405161006f929190610ba2565b60006100f1826101bf565b92915050565b60408051602081019091526000815261011e61011836849003840184610bdc565b826101f2565b5050565b60006060600054600280805461013790610c41565b80601f016020809104026020016040519081016040528092919081815260200182805461016390610c41565b80156101b05780601f10610185576101008083540402835291602001916101b0565b820191906000526020600020905b81548152906001019060200180831161019357829003601f168201915b50505050509050915091509091565b60006101c961057c565b60208082015151849052604080519182019052600081526101ea82826101f2565b519392505050565b610202600360005414600b6104d9565b815161021d90158061021657508251600154145b600c6104d9565b60008080556002805461022f90610c41565b80601f016020809104026020016040519081016040528092919081815260200182805461025b90610c41565b80156102a85780601f1061027d576101008083540402835291602001916102a8565b820191906000526020600020905b81548152906001019060200180831161028b57829003601f168201915b50505050508060200190518101906102c09190610c76565b90506102ca61059b565b7f0d6dc288067d8a05895033d8d09c8bd144bbbbd9ed33cc1cdecfd6cda7811d1d33856040516102fb929190610e24565b60405180910390a161030f341560086104d9565b4760608201526040805160048152602481018252602080820180516001600160e01b0316632009701760e11b1790528601515151519151909160009182916001600160a01b0316908290610364908690610e5b565b60006040518083038185875af1925050503d80600081146103a1576040519150601f19603f3d011682016040523d82523d6000602084013e6103a6565b606091505b50915091506103b7828260096104ff565b50606084015147036020808601519190915281516103dc919083018101908301610ea7565b6020808601805190910191909152516040808601829052517f3824876d985f6979a12fe0e53ddd78b35e88328c9e1bbc4a0ec52410bfb2d01894506104249350909150610f5c565b60405180910390a160408101515161043e9015600a6104d9565b604051600081527f25d012a08a5440fd4e8b586d26126df5c4e28bf6f9b861ef39004768fc9e74f79060200160405180910390a16000808452602085015151516040517f4239858cdd734aff1c0185c484e22bc3ad172d8c84503734bf05164ba94fe85e926104b1923392909190610ff2565b60405180910390a16104c16105d1565b60208101514390526104d281610541565b5050505050565b8161011e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6060831561050e57508161053a565b82511561051e5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016104f6565b9392505050565b600360009081554360015560408051602080820184905282518083038201815291830190925280516105779260029201906105fb565b505050565b60405180604001604052806000815260200161059661067f565b905290565b60405180608001604052806000151581526020016105b7610692565b81526020016105c4610692565b8152602001600081525090565b60405180604001604052806000151581526020016105966040518060200160405280600081525090565b82805461060790610c41565b90600052602060002090601f016020900481019282610629576000855561066f565b82601f1061064257805160ff191683800117855561066f565b8280016001018555821561066f579182015b8281111561066f578251825591602001919060010190610654565b5061067b9291506106ac565b5090565b60405180602001604052806105966106c1565b6040518060400160405280600081526020016105966106d4565b5b8082111561067b57600081556001016106ad565b6040518060200160405280610596610710565b60405180606001604052806106e76107df565b815260200160008152602001610596604051806040016040528060008152602001600081525090565b60405180610200016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001610767604051806040016040528060008152602001600081525090565b8152600060208201526040016107986040805160608101909152806000815260006020820181905260409091015290565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101209091015290565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001610827604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160006001600160a01b031681525090565b6040805190810167ffffffffffffffff8111828210171561087c57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff8111828210171561087c57634e487b7160e01b600052604160045260246000fd5b604051610200810167ffffffffffffffff8111828210171561087c57634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561087c57634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561087c57634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461095c57600080fd5b50565b803561096a81610947565b919050565b60006040828403121561098157600080fd5b61098961084b565b9050813581526020820135602082015292915050565b801515811461095c57600080fd5b6000606082840312156109bf57600080fd5b6109c7610882565b90508135600281106109d857600080fd5b815260208201356109e88161099f565b602082015260408201356109fb81610947565b604082015292915050565b80356001600160c01b03198116811461096a57600080fd5b60006102608284031215610a3157600080fd5b610a396108b3565b9050610a448261095f565b81526020820135602082015260408201356040820152610a666060830161095f565b6060820152610a78836080840161096f565b6080820152610a8960c0830161095f565b60a0820152610a9b8360e084016109ad565b60c0820152610140610aae818401610a06565b60e0830152610160610ac181850161095f565b610100840152610180610ad5818601610a06565b6101208501526101a080860135848601526101c09350610af6848701610a06565b838601526101e092508286013582860152610b14610200870161095f565b9085015250610b266102208501610a06565b8284015261024084013581840152505092915050565b60006102608284031215610b4f57600080fd5b61053a8383610a1e565b60006102808284031215610b6c57600080fd5b50919050565b60005b83811015610b8d578181015183820152602001610b75565b83811115610b9c576000848401525b50505050565b8281526040602082015260008251806040840152610bc7816060850160208701610b72565b601f01601f1916919091016060019392505050565b6000818303610280811215610bf057600080fd5b610bf861084b565b83358152610260601f1983011215610c0f57600080fd5b610c176108e5565b9150610c216108e5565b610c2e8660208701610a1e565b8152825260208101919091529392505050565b600181811c90821680610c5557607f821691505b60208210811415610b6c57634e487b7160e01b600052602260045260246000fd5b600060208284031215610c8857600080fd5b815161053a8161099f565b805160028110610cb357634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b80516001600160a01b0316825260208101516020830152604081015160408301526060810151610d1060608401826001600160a01b03169052565b506080810151610d2d608084018280518252602090810151910152565b5060a08101516001600160a01b03811660c08401525060c0810151610d5560e0840182610c93565b5060e0810151610140610d73818501836001600160c01b0319169052565b6101008301519150610160610d92818601846001600160a01b03169052565b6101208401519250610180610db2818701856001600160c01b0319169052565b918401516101a086810191909152908401519250906101c090610de0828701856001600160c01b0319169052565b8401516101e086810191909152918401516001600160a01b03166102008601528301516001600160c01b031916610220850152909101516102409092019190915250565b60006102a08201905060018060a01b0384168252825160208301526020830151610e5360408401825151610cd5565b509392505050565b60008251610e6d818460208701610b72565b9190910192915050565b600060408284031215610e8957600080fd5b610e9161084b565b9050815181526020820151602082015292915050565b6000818303610140811215610ebb57600080fd5b610ec3610882565b60e0821215610ed157600080fd5b610ed9610916565b91508351610ee681610947565b82526020840151610ef681610947565b6020830152610f088560408601610e77565b60408301526080840151606083015260a0840151608083015260c0840151610f2f81610947565b60a083015281815260e08401516020820152610f4f856101008601610e77565b6040820152949350505050565b81518152602080830151805180516001600160a01b03908116848601528184015181166040808701919091528201518051606087015293840151608086015261016085019350606082015160a086810191909152608083015160c0870152909101511660e0840152602081015161010084015260400151610feb61012084018280518252602090810151910152565b5092915050565b6001600160a01b03841681526102a081016110106020830185610cd5565b82151561028083015294935050505056fea2646970667358221220f843308102ed490f5c914b59671bb6b582c95ce75c0debd71a55daa885f6a00364736f6c634300080c0033`,
  BytecodeLen: 4852,
  Which: `oD`,
  version: 8,
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
