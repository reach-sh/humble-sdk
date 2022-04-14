// Automatically generated with Reach 0.1.9 (1f9218bd)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (1f9218bd)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
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
export async function Constructor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Constructor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Constructor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./announcer.rsh:18:15:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./announcer.rsh:18:15:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v72, time: v71, didSend: v23, from: v70 } = txn1;
      
      ;
      
      const v74 = v71;
      
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
  const {data: [], secs: v72, time: v71, didSend: v23, from: v70 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.printInfo(), {
    at: './announcer.rsh:19:33:application',
    fs: ['at ./announcer.rsh:19:33:application call to [unknown function] (defined at: ./announcer.rsh:19:33:function exp)', 'at ./announcer.rsh:19:33:application call to "liftedInteract" (defined at: ./announcer.rsh:19:33:application)'],
    msg: 'printInfo',
    who: 'Constructor'
    });
  
  let v74 = v71;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn2;
    undefined /* setApiDetails */;
    ;
    const v87 = null;
    await txn2.getOutput('Manager_getPoolInfo', 'v87', ctc0, v87);
    const cv74 = v85;
    
    v74 = cv74;
    
    continue;
    
    }
  return;
  
  
  };
export async function Listener(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Listener expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Listener expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3, ctc2]);
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v72, time: v71, didSend: v23, from: v70 } = txn1;
  ;
  let v74 = v71;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn2;
    undefined /* setApiDetails */;
    ;
    const v87 = null;
    await txn2.getOutput('Manager_getPoolInfo', 'v87', ctc1, v87);
    const v92 = v84[stdlib.checkedBigNumberify('./announcer.rsh:26:28:spread', stdlib.UInt_max, 0)];
    const v93 = v84[stdlib.checkedBigNumberify('./announcer.rsh:26:28:spread', stdlib.UInt_max, 1)];
    const v94 = v84[stdlib.checkedBigNumberify('./announcer.rsh:26:28:spread', stdlib.UInt_max, 2)];
    stdlib.protect(ctc1, await interact.hear(v92, v93, v94), {
      at: './announcer.rsh:26:27:application',
      fs: ['at ./announcer.rsh:26:27:application call to [unknown function] (defined at: ./announcer.rsh:26:27:function exp)', 'at ./announcer.rsh:26:27:application call to "liftedInteract" (defined at: ./announcer.rsh:26:27:application)'],
      msg: 'hear',
      who: 'Listener'
      });
    
    const cv74 = v85;
    
    v74 = cv74;
    
    continue;
    
    }
  return;
  
  
  };
export async function Manager_getPoolInfo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Manager_getPoolInfo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Manager_getPoolInfo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3, ctc2]);
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), []);
  const v82 = stdlib.protect(ctc4, await interact.in(), {
    at: './announcer.rsh:24:5:application',
    fs: ['at ./announcer.rsh:24:5:application call to [unknown function] (defined at: ./announcer.rsh:24:5:function exp)'],
    msg: 'in',
    who: 'Manager_getPoolInfo'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v82],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./announcer.rsh:24:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Manager_getPoolInfo"
        });
      ;
      const v87 = null;
      const v88 = await txn1.getOutput('Manager_getPoolInfo', 'v87', ctc1, v87);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v87 = null;
  const v88 = await txn1.getOutput('Manager_getPoolInfo', 'v87', ctc1, v87);
  stdlib.protect(ctc1, await interact.out(v84, v88), {
    at: './announcer.rsh:24:5:application',
    fs: ['at ./announcer.rsh:24:5:application call to [unknown function] (defined at: ./announcer.rsh:24:5:function exp)', 'at ./announcer.rsh:25:6:application call to "k" (defined at: ./announcer.rsh:24:5:function exp)'],
    msg: 'out',
    who: 'Manager_getPoolInfo'
    });
  
  return;
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Manager_getPoolInfo(uint64,(byte,byte[8]),uint64)byte[0]`],
    pure: [],
    sigs: [`Manager_getPoolInfo(uint64,(byte,byte[8]),uint64)byte[0]`]
    },
  appApproval: `BiAEAAECAyYBACI1ADEYQQD6KGRJIls1AYEIWzUCNhoAF0lBABwiNQQjNQaB7pmx3AwSRDYaATYaAlA2GgNQQgAWNhoCFzUENhoDNhoBF0kkDEAANSQSRCU0ARJENARJIhJMNAISEURJNQU1/4AEm4opojT/ULCACAAAAAAAAABXsCg1BzIGQgAmIhJEIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rCBoI0GiABqMgZCAAA1/yU1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
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
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "enum _enum_T4",
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
                    "internalType": "struct T4",
                    "name": "elem1",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem2",
                    "type": "address"
                  }
                ],
                "internalType": "struct T5",
                "name": "v84",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
    "name": "_reach_oe_v87",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
            "internalType": "enum _enum_T4",
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
        "internalType": "struct T4",
        "name": "_a1",
        "type": "tuple"
      },
      {
        "internalType": "address payable",
        "name": "_a2",
        "type": "address"
      }
    ],
    "name": "Manager_getPoolInfo",
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
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "enum _enum_T4",
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
                    "internalType": "struct T4",
                    "name": "elem1",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem2",
                    "type": "address"
                  }
                ],
                "internalType": "struct T5",
                "name": "v84",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000ac538038062000ac5833981016040819052610024916101c3565b600080554360035560408051825181526020808401511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a161007734156007610097565b61007f6100fb565b6020810151439052610090816100c0565b5050610266565b816100bc5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b600360009081554360015560408051602080820184905282518083038201815291830190925280516100f692600292019061012a565b505050565b60405180604001604052806000151581526020016101256040518060200160405280600081525090565b905290565b8280546101369061022b565b90600052602060002090601f016020900481019282610158576000855561019e565b82601f1061017157805160ff191683800117855561019e565b8280016001018555821561019e579182015b8281111561019e578251825591602001919060010190610183565b506101aa9291506101ae565b5090565b5b808211156101aa57600081556001016101af565b6000604082840312156101d557600080fd5b604080519081016001600160401b038111828210171561020557634e487b7160e01b600052604160045260246000fd5b604052825181526020830151801515811461021f57600080fd5b60208201529392505050565b600181811c9082168061023f57607f821691505b6020821081141561026057634e487b7160e01b600052602260045260246000fd5b50919050565b61084f80620002766000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780638323075714610078578063928785f91461008d578063ab53f2c6146100b0578063d4b2a567146100d357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008457600080fd5b50600154610065565b6100a061009b3660046105db565b6100e6565b604051901515815260200161006f565b3480156100bc57600080fd5b506100c5610144565b60405161006f92919061061f565b6100526100e136600461067c565b6101e1565b60408051602081019091526000808252906100ff6103d6565b604080516080810182526001600160a01b038089166020808401918252938301899052908716606083015281529082015261013a818361020c565b5051949350505050565b60006060600054600280805461015990610694565b80601f016020809104026020016040519081016040528092919081815260200182805461018590610694565b80156101d25780601f106101a7576101008083540402835291602001916101d2565b820191906000526020600020905b8154815290600101906020018083116101b557829003601f168201915b50505050509050915091509091565b604080516020810190915260008152610208610202368490038401846106c9565b8261020c565b5050565b61021c6003600054146009610376565b815161023790158061023057508251600154145b600a610376565b60008080556002805461024990610694565b80601f016020809104026020016040519081016040528092919081815260200182805461027590610694565b80156102c25780601f10610297576101008083540402835291602001916102c2565b820191906000526020600020905b8154815290600101906020018083116102a557829003601f168201915b50505050508060200190518101906102da919061077a565b90507fcc370ab1a32c2c981081bcd821ac92c7a7421844098a05387b27d6cfa249f9218360405161030b919061079e565b60405180910390a161031f34156008610376565b604051600081527fd879092301f52820d4d9671c80c8f18f24732c63abcd1d8bd78af394006b3fa79060200160405180910390a16000825261035f61042c565b60208101514390526103708161039b565b50505050565b816102085760405163100960cb60e01b81526004810182905260240160405180910390fd5b600360009081554360015560408051602080820184905282518083038201815291830190925280516103d1926002920190610456565b505050565b60405180604001604052806000815260200161042760408051608081018252600060208083018281528451606081810187528482529281018490528086018490529484019490945282015290815290565b905290565b60405180604001604052806000151581526020016104276040518060200160405280600081525090565b82805461046290610694565b90600052602060002090601f01602090048101928261048457600085556104ca565b82601f1061049d57805160ff19168380011785556104ca565b828001600101855582156104ca579182015b828111156104ca5782518255916020019190600101906104af565b506104d69291506104da565b5090565b5b808211156104d657600081556001016104db565b80356001600160a01b038116811461050657600080fd5b919050565b6040516060810167ffffffffffffffff8111828210171561053c57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561053c57634e487b7160e01b600052604160045260246000fd5b801515811461058157600080fd5b50565b60006060828403121561059657600080fd5b61059e61050b565b90508135600281106105af57600080fd5b815260208201356105bf81610573565b60208201526105d0604083016104ef565b604082015292915050565b600080600060a084860312156105f057600080fd5b6105f9846104ef565b92506106088560208601610584565b9150610616608085016104ef565b90509250925092565b82815260006020604081840152835180604085015260005b8181101561065357858101830151858201606001528201610637565b81811115610665576000606083870101525b50601f01601f191692909201606001949350505050565b600060c0828403121561068e57600080fd5b50919050565b600181811c908216806106a857607f821691505b6020821081141561068e57634e487b7160e01b600052602260045260246000fd5b600081830360c08112156106dc57600080fd5b6040516040810181811067ffffffffffffffff8211171561070d57634e487b7160e01b600052604160045260246000fd5b6040528335815260a0601f198301121561072657600080fd5b61072e610542565b915061073861050b565b610744602086016104ef565b81526107538660408701610584565b602082015261076460a086016104ef565b6040820152825260208101919091529392505050565b60006020828403121561078c57600080fd5b815161079781610573565b9392505050565b815181526020808301515180516001600160a01b039081168385015291810151805160c08501939190600281106107e557634e487b7160e01b600052602160045260246000fd5b80604087015250602081015115156060860152816040820151166080860152508060408301511660a085015250509291505056fea26469706673582212201cfc9eccdfd73f18e2b45bdbfebd5a409aae2708c4c46068c134a21b0c79bee664736f6c634300080c0033`,
  BytecodeLen: 2757,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './announcer.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './announcer.rsh:23:13:after expr stmt semicolon',
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
  "Constructor": Constructor,
  "Listener": Listener,
  "Manager_getPoolInfo": Manager_getPoolInfo
  };
export const _APIs = {
  Manager: {
    getPoolInfo: Manager_getPoolInfo
    }
  };
