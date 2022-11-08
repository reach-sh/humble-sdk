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
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Data({
    None: ctc2,
    Some: ctc3
    });
  const ctc5 = stdlib.T_UInt;
  return {
    LimitOrder: [ctc0, ctc1, ctc4, ctc4, ctc5, ctc5]
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
export async function D(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for D expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for D expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc5, ctc5]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./limitOrder.rsh:139:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:139:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v218, time: v217, didSend: v28, from: v216 } = txn1;
      
      ;
      
      const v220 = v217;
      
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
  const {data: [], secs: v218, time: v217, didSend: v28, from: v216 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './limitOrder.rsh:140:19:application',
    fs: ['at ./limitOrder.rsh:140:19:application call to [unknown function] (defined at: ./limitOrder.rsh:140:19:function exp)', 'at ./limitOrder.rsh:140:19:application call to "liftedInteract" (defined at: ./limitOrder.rsh:140:19:application)'],
    msg: 'ready',
    who: 'D'
    });
  
  let v220 = v217;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v259], secs: v261, time: v260, didSend: v146, from: v258 } = txn3;
    undefined /* setApiDetails */;
    ;
    const v263 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '0')];
    const v264 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '1')];
    const v265 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '2')];
    const v266 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '3')];
    const v267 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '4')];
    const v268 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '5')];
    const v269 = stdlib.digest([ctc4], [v265]);
    const v270 = stdlib.digest([ctc4], [v266]);
    const v271 = stdlib.digestEq(v269, v270);
    const v272 = v271 ? false : true;
    stdlib.assert(v272, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./limitOrder.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:146:17:application call to [unknown function] (defined at: ./limitOrder.rsh:146:17:function exp)'],
      msg: 'Disallow identical tokens (invalid limit orders)',
      who: 'D'
      });
    const v280 = null;
    await txn3.getOutput('announceLimitOrder', 'v280', ctc0, v280);
    null;
    const cv220 = v260;
    
    v220 = cv220;
    
    txn2 = txn3;
    continue;
    
    }
  return;
  
  
  };
export async function _announceLimitOrder3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _announceLimitOrder3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _announceLimitOrder3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Data({
    None: ctc2,
    Some: ctc3
    });
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1, ctc4, ctc4, ctc5, ctc5]);
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v228 = stdlib.protect(ctc6, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:144:75:application call to [unknown function] (defined at: ./limitOrder.rsh:144:75:function exp)', 'at ./limitOrder.rsh:144:75:application call to [unknown function] (defined at: ./limitOrder.rsh:144:75:function exp)'],
    msg: 'in',
    who: 'announceLimitOrder'
    });
  const v231 = v228[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v232 = v228[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '3')];
  const v245 = stdlib.digest([ctc4], [v231]);
  const v246 = stdlib.digest([ctc4], [v232]);
  const v247 = stdlib.digestEq(v245, v246);
  const v248 = v247 ? false : true;
  stdlib.assert(v248, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:144:75:application call to [unknown function] (defined at: ./limitOrder.rsh:144:75:function exp)', 'at ./limitOrder.rsh:144:75:application call to [unknown function] (defined at: ./limitOrder.rsh:144:75:function exp)'],
    msg: 'Disallow identical tokens (invalid limit orders)',
    who: 'announceLimitOrder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v228],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v259], secs: v261, time: v260, didSend: v146, from: v258 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "announceLimitOrder"
        });
      ;
      const v263 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '0')];
      const v264 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '1')];
      const v265 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '2')];
      const v266 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '3')];
      const v267 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '4')];
      const v268 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '5')];
      const v280 = null;
      const v281 = await txn1.getOutput('announceLimitOrder', 'v280', ctc2, v280);
      
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v259], secs: v261, time: v260, didSend: v146, from: v258 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v263 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '0')];
  const v264 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '1')];
  const v265 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '2')];
  const v266 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '3')];
  const v267 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '4')];
  const v268 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:144:10:spread', stdlib.UInt_max, '5')];
  const v269 = stdlib.digest([ctc4], [v265]);
  const v270 = stdlib.digest([ctc4], [v266]);
  const v271 = stdlib.digestEq(v269, v270);
  const v272 = v271 ? false : true;
  stdlib.assert(v272, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:146:17:application call to [unknown function] (defined at: ./limitOrder.rsh:146:17:function exp)'],
    msg: 'Disallow identical tokens (invalid limit orders)',
    who: 'announceLimitOrder'
    });
  const v280 = null;
  const v281 = await txn1.getOutput('announceLimitOrder', 'v280', ctc2, v280);
  if (v146) {
    stdlib.protect(ctc2, await interact.out(v259, v281), {
      at: './limitOrder.rsh:144:11:application',
      fs: ['at ./limitOrder.rsh:144:11:application call to [unknown function] (defined at: ./limitOrder.rsh:144:11:function exp)', 'at ./limitOrder.rsh:147:10:application call to "k" (defined at: ./limitOrder.rsh:146:17:function exp)', 'at ./limitOrder.rsh:146:17:application call to [unknown function] (defined at: ./limitOrder.rsh:146:17:function exp)'],
      msg: 'out',
      who: 'announceLimitOrder'
      });
    }
  else {
    }
  
  null;
  return;
  
  
  
  };
export async function announceLimitOrder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for announceLimitOrder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for announceLimitOrder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _announceLimitOrder3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`announceLimitOrder(address,uint64,(byte,byte[8]),(byte,byte[8]),uint64,uint64)byte[0]`],
    pure: [],
    sigs: [`announceLimitOrder(address,uint64,(byte,byte[8]),(byte,byte[8]),uint64,uint64)byte[0]`]
    },
  appApproval: `ByAEAAECAyYBACI1ADEYQQFBKGRJIls1AYEIWzUCNhoAF0lBACgiNQQjNQaBzJbm1A8SRDYaATYaAlA2GgNQNhoEUDYaBVA2GgZQQgAWNhoCFzUENhoDNhoBF0kkDEAAcCQSRCU0ARJENARJIhJMNAISEURJNQU1/4AE/8GECTT/ULA0/1coCTX+NP9XMQk1/TT+ATT9ARNEgAgAAAAAAAABGLAoNQeABK/zXp40/1cAIFA0/1cgCFA0/lA0/VA0/1c6CFA0/1dCCFCwMgZCACYiEkSBoI0GiACVIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAyBkIAADX/JTUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 11,
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
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
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
        "indexed": false,
        "internalType": "struct T4",
        "name": "v2",
        "type": "tuple"
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
        "indexed": false,
        "internalType": "struct T4",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v4",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v5",
        "type": "uint256"
      }
    ],
    "name": "LimitOrder",
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
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
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
                    "name": "elem2",
                    "type": "tuple"
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
                    "name": "elem3",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem4",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem5",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T5",
                "name": "v259",
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
    "name": "_reach_oe_v280",
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
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
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
                    "name": "elem2",
                    "type": "tuple"
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
                    "name": "elem3",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem4",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem5",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T5",
                "name": "v259",
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
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
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
        "name": "_a2",
        "type": "tuple"
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
        "name": "_a3",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "_a4",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a5",
        "type": "uint256"
      }
    ],
    "name": "announceLimitOrder",
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
  Bytecode: `0x608060405260405162000d6238038062000d628339810160408190526200002691620001e5565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000a8565b6200008d6200010f565b6020810151439052620000a081620000d2565b50506200028d565b81620000ce5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b600360009081554360015560408051602080820184905282518083038201815291830190925280516200010a9260029201906200013f565b505050565b60405180604001604052806000151581526020016200013a6040518060200160405280600081525090565b905290565b8280546200014d9062000250565b90600052602060002090601f016020900481019282620001715760008555620001bc565b82601f106200018c57805160ff1916838001178555620001bc565b82800160010185558215620001bc579182015b82811115620001bc5782518255916020019190600101906200019f565b50620001ca929150620001ce565b5090565b5b80821115620001ca5760008155600101620001cf565b600060408284031215620001f857600080fd5b604080519081016001600160401b03811182821017156200022957634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200024457600080fd5b60208201529392505050565b600181811c908216806200026557607f821691505b602082108114156200028757634e487b7160e01b600052602260045260246000fd5b50919050565b610ac5806200029d6000396000f3fe60806040526004361061004b5760003560e01c806305341eb4146100545780631e93b0f11461007c578063832307571461009b578063aa33a8b5146100b0578063ab53f2c6146100c357005b3661005257005b005b61006761006236600461078e565b6100e6565b60405190151581526020015b60405180910390f35b34801561008857600080fd5b506003545b604051908152602001610073565b3480156100a757600080fd5b5060015461008d565b6100526100be3660046107f9565b610101565b3480156100cf57600080fd5b506100d861012c565b604051610073929190610812565b60006100f68787878787876101c9565b979650505050505050565b6040805160208101909152600081526101286101223684900384018461086f565b8261023b565b5050565b60006060600054600280805461014190610919565b80601f016020809104026020016040519081016040528092919081815260200182805461016d90610919565b80156101ba5780601f1061018f576101008083540402835291602001916101ba565b820191906000526020600020905b81548152906001019060200180831161019d57829003601f168201915b50505050509050915091509091565b60006101d36104de565b60208082018051516001600160a01b03808c16909152815151908a1690830152805151604090810189905281515160600188905281515160800187905290515160a001859052805191820190526000815261022e828261023b565b5198975050505050505050565b61024b600360005414600a61047e565b815161026690158061025f57508251600154145b600b61047e565b60008080556002805461027890610919565b80601f01602080910402602001604051908101604052809291908181526020018280546102a490610919565b80156102f15780601f106102c6576101008083540402835291602001916102f1565b820191906000526020600020905b8154815290600101906020018083116102d457829003601f168201915b5050505050806020019051810190610309919061094e565b90507fb484b924627ee355a88c860f3c5a146704fd8f7e75faf153342f5366f523b9e6338460405161033c9291906109b4565b60405180910390a16103503415600861047e565b60208084015151606001516040516103ca9261036d929101610a32565b60408051601f198184030181528282528051602091820120878201515190920151919261039b929101610a32565b6040516020818303038152906040528051906020012060001c146103c05760016103c3565b60005b600961047e565b604051600081527fc335972f7fef60fbcd52f38b50e23776377dd6217b87e96501ad0efe33acc2b59060200160405180910390a160008252602080840151518051918101516040808301516060840151608085015160a09095015192517f1f45f4e093c0f58bc2cb1be8adabab3e49ca01ba8e209a399aaeedd0b7f6b65196610457969095949091610a46565b60405180910390a16104676104fd565b6020810151439052610478816104a3565b50505050565b816101285760405163100960cb60e01b81526004810182905260240160405180910390fd5b600360009081554360015560408051602080820184905282518083038201815291830190925280516104d9926002920190610527565b505050565b6040518060400160405280600081526020016104f86105ab565b905290565b60405180604001604052806000151581526020016104f86040518060200160405280600081525090565b82805461053390610919565b90600052602060002090601f016020900481019282610555576000855561059b565b82601f1061056e57805160ff191683800117855561059b565b8280016001018555821561059b579182015b8281111561059b578251825591602001919060010190610580565b506105a79291506105be565b5090565b60405180602001604052806104f86105d3565b5b808211156105a757600081556001016105bf565b6040805160c0810182526000808252602082015290810161060f6040805160608101909152806000815260006020820181905260409091015290565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081525090565b80356001600160a01b038116811461065a57600080fd5b919050565b6040805190810167ffffffffffffffff8111828210171561069057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561069057634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561069057634e487b7160e01b600052604160045260246000fd5b801515811461070657600080fd5b50565b60006060828403121561071b57600080fd5b6040516060810181811067ffffffffffffffff8211171561074c57634e487b7160e01b600052604160045260246000fd5b60405290508082356002811061076157600080fd5b81526020830135610771816106f8565b602082015261078260408401610643565b60408201525092915050565b60008060008060008061014087890312156107a857600080fd5b6107b187610643565b95506107bf60208801610643565b94506107ce8860408901610709565b93506107dd8860a08901610709565b9250610100870135915061012087013590509295509295509295565b6000610160828403121561080c57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156108465785810183015185820160600152820161082a565b81811115610858576000606083870101525b50601f01601f191692909201606001949350505050565b600081830361016081121561088357600080fd5b61088b61065f565b8335815261014080601f19840112156108a357600080fd5b6108ab610696565b92506108b56106c7565b6108c160208701610643565b81526108cf60408701610643565b60208201526108e18760608801610709565b60408201526108f38760c08801610709565b6060820152610120860135608082015294013560a0850152928152602083015250919050565b600181811c9082168061092d57607f821691505b6020821081141561080c57634e487b7160e01b600052602260045260246000fd5b60006020828403121561096057600080fd5b815161096b816106f8565b9392505050565b80516002811061099257634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b60006101808201905060018060a01b03808516835283516020840152602084015151818151166040850152816020820151166060850152604081015191506109ff6080850183610972565b60608101519150610a1360e0850183610972565b608081015161014085015260a081015161016085015250509392505050565b60608101610a408284610972565b92915050565b6001600160a01b038781168252861660208201526101408101610a6c6040830187610972565b610a7960a0830186610972565b610100820193909352610120015294935050505056fea264697066735822122009d27adc9e388cc07a797229f45d4df125be14bed787f99130534034b9859c6264736f6c634300080c0033`,
  BytecodeLen: 3426,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './limitOrder.rsh:151:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './limitOrder.rsh:141:27:after expr stmt semicolon',
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
  "D": D,
  "announceLimitOrder": announceLimitOrder
  };
export const _APIs = {
  announceLimitOrder: announceLimitOrder
  };
