const _version="0.1.10",_versionHash="0.1.10 (2604daf0)",_backendVersion=16;function getExports(e){return e.reachStdlib,{}}function _getEvents(e){var n=(e=e.reachStdlib).T_Address,t=e.T_Contract,a=e.T_UInt,r=e.T_Token,i=e.T_Tuple([a,a]),o=e.T_Null,p=e.T_Data({None:o,Some:r}),s=e.T_Bytes(e.checkedBigNumberify("<builtin>",e.UInt_max,"8"));return{Announce:[n,e.T_Struct([["ctcInfo",t],["startBlock",a],["endBlock",a],["rewardTokenId",r],["rewardsPerBlock",i],["stakedTokenId",r],["pairTokenAId",p],["pairTokenASymbol",s],["pairTokenBId",r],["pairTokenBSymbol",s],["rewardTokenDecimals",a],["rewardTokenSymbol",s],["stakedTokenDecimals",a],["stakedTokenPoolId",r],["stakedTokenSymbol",s],["stakedTokenTotalSupply",a]]),o]}}function _getViews(e,n){return e.reachStdlib,{infos:{},views:{3:[]}}}function _getMaps(e){return{mapDataTy:e.reachStdlib.T_Tuple([])}}async function Deployer(e,n){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for Deployer expects to receive a contract as its first argument."));if("object"!=typeof n)return Promise.reject(new Error("The backend for Deployer expects to receive an interact object as its second argument."));var t=e._initialize();const a=t.stdlib;var r=a.T_Null,e=a.T_Contract,i=a.T_UInt,o=a.T_Token,p=a.T_Tuple([i,i]),s=a.T_Data({None:r,Some:o}),c=a.T_Bytes(a.checkedBigNumberify("<builtin>",a.UInt_max,"8")),e=a.T_Struct([["ctcInfo",e],["startBlock",i],["endBlock",i],["rewardTokenId",o],["rewardsPerBlock",p],["stakedTokenId",o],["pairTokenAId",s],["pairTokenASymbol",c],["pairTokenBId",o],["pairTokenBSymbol",c],["rewardTokenDecimals",i],["rewardTokenSymbol",c],["stakedTokenDecimals",i],["stakedTokenPoolId",o],["stakedTokenSymbol",c],["stakedTokenTotalSupply",i]]),b=a.T_Tuple([e]),s=a.T_Address,c=a.T_Struct([["rewardToken1",o],["stakeToken",o],["rewardsPerBlock",p],["start",i],["end",i],["Rewarder0",s]]),e=a.T_Struct([["opts",c],["totalStaked",i],["remainingRewards",p]]),l=a.T_Tuple([i,e]),[]=(await t.sendrecv({args:[],evt_cnt:0,funcNum:0,lct:a.checkedBigNumberify("./announcer.rsh:22:12:dot",a.UInt_max,"0"),onlyIf:!0,out_tys:[],pay:[a.checkedBigNumberify("./announcer.rsh:22:12:decimal",a.UInt_max,"0"),[]],sim_p:async e=>{var n={txns:[],mapRefs:[],maps:[]},[]=(a.UInt_max,e.data);return await!0?n.isHalt=!1:(n.txns.push({kind:"halt",tok:void 0}),n.isHalt=!0),n},soloSend:!0,timeoutAt:void 0,tys:[],waitIfNotPresent:!1})).data;for(a.protect(r,await n.ready(),{at:"./announcer.rsh:23:26:application",fs:["at ./announcer.rsh:23:26:application call to [unknown function] (defined at: ./announcer.rsh:23:26:function exp)",'at ./announcer.rsh:23:26:application call to "liftedInteract" (defined at: ./announcer.rsh:23:26:application)'],msg:"ready",who:"Deployer"});await!0;){var y=await t.recv({didSend:!1,evt_cnt:1,funcNum:2,out_tys:[b],timeoutAt:void 0,waitIfNotPresent:!1}),[d]=y.data,d=(d[a.checkedBigNumberify("./announcer.rsh:27:10:spread",a.UInt_max,"0")].ctcInfo,(await y.getOutput("internal","v314",l,void 0))[a.checkedBigNumberify("./announcer.rsh:32:59:application",a.UInt_max,"0")]),d=a.eq(a.checkedBigNumberify("./announcer.rsh:32:59:application",a.UInt_max,"0"),d);a.assert(d,{at:"./announcer.rsh:32:59:application",fs:["at ./announcer.rsh:31:22:application call to [unknown function] (defined at: ./announcer.rsh:31:22:function exp)"],msg:"remote bill check",who:"Deployer"}),await y.getOutput("announce","v361",r,null)}}async function _announce3(e,n){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _announce3 expects to receive a contract as its first argument."));if("object"!=typeof n)return Promise.reject(new Error("The backend for _announce3 expects to receive an interact object as its second argument."));const a=(e=e._initialize()).stdlib;var t=a.T_Contract,r=a.T_UInt,i=a.T_Token,o=a.T_Tuple([r,r]);const p=a.T_Null;var s=a.T_Data({None:p,Some:i}),c=a.T_Bytes(a.checkedBigNumberify("<builtin>",a.UInt_max,"8")),t=a.T_Struct([["ctcInfo",t],["startBlock",r],["endBlock",r],["rewardTokenId",i],["rewardsPerBlock",o],["stakedTokenId",i],["pairTokenAId",s],["pairTokenASymbol",c],["pairTokenBId",i],["pairTokenBSymbol",c],["rewardTokenDecimals",r],["rewardTokenSymbol",c],["stakedTokenDecimals",r],["stakedTokenPoolId",i],["stakedTokenSymbol",c],["stakedTokenTotalSupply",r]]),s=a.T_Tuple([t]),c=a.T_Address,t=a.T_Struct([["rewardToken1",i],["stakeToken",i],["rewardsPerBlock",o],["start",r],["end",r],["Rewarder0",c]]),i=a.T_Struct([["opts",t],["totalStaked",r],["remainingRewards",o]]);const b=a.T_Tuple([r,i]);var[]=await e.getState(a.checkedBigNumberify("<builtin>",a.UInt_max,"3"),[]),c=a.protect(s,await n.in(),{at:"./announcer.rsh:1:23:application",fs:["at ./announcer.rsh:27:33:application call to [unknown function] (defined at: ./announcer.rsh:27:33:function exp)","at ./announcer.rsh:27:33:application call to [unknown function] (defined at: ./announcer.rsh:27:33:function exp)"],msg:"in",who:"announce"}),{data:[o],didSend:r}=t=await e.sendrecv({args:[c],evt_cnt:1,funcNum:2,lct:a.checkedBigNumberify("<builtin>",a.UInt_max,"0"),onlyIf:!0,out_tys:[s],pay:[a.checkedBigNumberify("./announcer.rsh:31:15:decimal",a.UInt_max,"0"),[]],sim_p:async e=>{var n={txns:[],mapRefs:[],maps:[]},[t]=(a.UInt_max,e.data);n.txns.push({kind:"api",who:"announce"});t=t[a.checkedBigNumberify("./announcer.rsh:27:10:spread",a.UInt_max,"0")].ctcInfo,t=[a.checkedBigNumberify("./announcer.rsh:32:59:application",a.UInt_max,"0"),void n.txns.push({accs:[],apps:[],bills:a.checkedBigNumberify("./announcer.rsh:32:59:application",a.UInt_max,"0"),fees:a.checkedBigNumberify("./announcer.rsh:32:59:application",a.UInt_max,"0"),kind:"remote",obj:t,pays:a.checkedBigNumberify("./announcer.rsh:32:59:application",a.UInt_max,"0"),toks:[]})];return await e.getOutput("internal","v314",b,t),await e.getOutput("announce","v361",p,null),n.isHalt=!1,n},soloSend:!1,timeoutAt:void 0,tys:[s],waitIfNotPresent:!1}),i=(o[a.checkedBigNumberify("./announcer.rsh:27:10:spread",a.UInt_max,"0")].ctcInfo,(await t.getOutput("internal","v314",b,void 0))[a.checkedBigNumberify("./announcer.rsh:32:59:application",a.UInt_max,"0")]),e=a.eq(a.checkedBigNumberify("./announcer.rsh:32:59:application",a.UInt_max,"0"),i),c=(a.assert(e,{at:"./announcer.rsh:32:59:application",fs:["at ./announcer.rsh:31:22:application call to [unknown function] (defined at: ./announcer.rsh:31:22:function exp)"],msg:"remote bill check",who:"announce"}),await t.getOutput("announce","v361",p,null));r&&a.protect(p,await n.out(o,c),{at:"./announcer.rsh:27:11:application",fs:["at ./announcer.rsh:27:11:application call to [unknown function] (defined at: ./announcer.rsh:27:11:function exp)",'at ./announcer.rsh:35:10:application call to "k" (defined at: ./announcer.rsh:31:22:function exp)',"at ./announcer.rsh:31:22:application call to [unknown function] (defined at: ./announcer.rsh:31:22:function exp)"],msg:"out",who:"announce"})}async function announce(e,n){var t,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for announce expects to receive a contract as its first argument.")):"object"!=typeof n?Promise.reject(new Error("The backend for announce expects to receive an interact object as its second argument.")):(t=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),t.assert(3==a,"API called in the wrong state. Currently in state: "+a+", expected:  [3]"),3==a?_announce3(e,n):void 0)}const _ALGO={ABI:{impure:["announce((uint64,uint64,uint64,uint64,(uint64,uint64),uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64))byte[0]"],pure:[],sigs:["announce((uint64,uint64,uint64,uint64,(uint64,uint64),uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64))byte[0]"]},appApproval:"BiAEAAECAyYBACI1ADEYQQFiKGRJIls1AYEIWzUCNhoAF0lBABQiNQQjNQaBlJqGkg4SRDYaAUIAFjYaAhc1BDYaAzYaARdJJAxAAKUkEkQlNAESRDQESSISTDQCEhFESTUFNf+ABKrkRMw0/1CwNP81/oAFYXBwSUQ0/lcACFADNfwyCmAyCngJFjX7sSKyAYEGshA0/iJbshiABGXGs42yGrMyCmAyCngJNPsXCRa3AD5XBABQNf2ACAAAAAAAAAE6NP1QsDT9NfwiNPwiWxJEgAgAAAAAAAABabAoNQeABNGQI3AxAFA0/lCwMgZCACYiEkSBoI0GiACBIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAyBkIAADX/JTUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ",appClear:"Bg==",companionInfo:null,extraPages:0,mapDataKeys:0,mapDataSize:0,stateKeys:0,stateSize:0,unsupported:[],version:10,warnings:["Step 2 calls a remote object at /app/announcer.rsh:32:59:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards."]},_ETH={ABI:`[
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
            "components": [
              {
                "internalType": "bytes8",
                "name": "elem0",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T9",
            "name": "pairTokenASymbol",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "pairTokenBId",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "bytes8",
                "name": "elem0",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T9",
            "name": "pairTokenBSymbol",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "rewardTokenDecimals",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes8",
                "name": "elem0",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T9",
            "name": "rewardTokenSymbol",
            "type": "tuple"
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
            "components": [
              {
                "internalType": "bytes8",
                "name": "elem0",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T9",
            "name": "stakedTokenSymbol",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "stakedTokenTotalSupply",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
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
                        "components": [
                          {
                            "internalType": "bytes8",
                            "name": "elem0",
                            "type": "bytes8"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "pairTokenASymbol",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "pairTokenBId",
                        "type": "address"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes8",
                            "name": "elem0",
                            "type": "bytes8"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "pairTokenBSymbol",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "rewardTokenDecimals",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes8",
                            "name": "elem0",
                            "type": "bytes8"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "rewardTokenSymbol",
                        "type": "tuple"
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
                        "components": [
                          {
                            "internalType": "bytes8",
                            "name": "elem0",
                            "type": "bytes8"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "stakedTokenSymbol",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "stakedTokenTotalSupply",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v300",
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
    "name": "_reach_oe_v314",
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
    "name": "_reach_oe_v361",
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
                        "components": [
                          {
                            "internalType": "bytes8",
                            "name": "elem0",
                            "type": "bytes8"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "pairTokenASymbol",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "pairTokenBId",
                        "type": "address"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes8",
                            "name": "elem0",
                            "type": "bytes8"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "pairTokenBSymbol",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "rewardTokenDecimals",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes8",
                            "name": "elem0",
                            "type": "bytes8"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "rewardTokenSymbol",
                        "type": "tuple"
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
                        "components": [
                          {
                            "internalType": "bytes8",
                            "name": "elem0",
                            "type": "bytes8"
                          }
                        ],
                        "internalType": "struct T9",
                        "name": "stakedTokenSymbol",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "stakedTokenTotalSupply",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v300",
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
            "components": [
              {
                "internalType": "bytes8",
                "name": "elem0",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T9",
            "name": "pairTokenASymbol",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "pairTokenBId",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "bytes8",
                "name": "elem0",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T9",
            "name": "pairTokenBSymbol",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "rewardTokenDecimals",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes8",
                "name": "elem0",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T9",
            "name": "rewardTokenSymbol",
            "type": "tuple"
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
            "components": [
              {
                "internalType": "bytes8",
                "name": "elem0",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T9",
            "name": "stakedTokenSymbol",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "stakedTokenTotalSupply",
            "type": "uint256"
          }
        ],
        "internalType": "struct T10",
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
]`,Bytecode:"0x6080604052604051620013af380380620013af8339810160408190526200002691620001e5565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000a8565b6200008d6200010f565b6020810151439052620000a081620000d2565b50506200028d565b81620000ce5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b600360009081554360015560408051602080820184905282518083038201815291830190925280516200010a9260029201906200013f565b505050565b60405180604001604052806000151581526020016200013a6040518060200160405280600081525090565b905290565b8280546200014d9062000250565b90600052602060002090601f016020900481019282620001715760008555620001bc565b82601f106200018c57805160ff1916838001178555620001bc565b82800160010185558215620001bc579182015b82811115620001bc5782518255916020019190600101906200019f565b50620001ca929150620001ce565b5090565b5b80821115620001ca5760008155600101620001cf565b600060408284031215620001f857600080fd5b604080519081016001600160401b03811182821017156200022957634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200024457600080fd5b60208201529392505050565b600181811c908216806200026557607f821691505b602082108114156200028757634e487b7160e01b600052602260045260246000fd5b50919050565b611112806200029d6000396000f3fe60806040526004361061004b5760003560e01c80630a76d66d146100545780631e93b0f11461007c578063216996221461009b57806383230757146100ae578063ab53f2c6146100c357005b3661005257005b005b610067610062366004610bce565b6100e6565b60405190151581526020015b60405180910390f35b34801561008857600080fd5b506003545b604051908152602001610073565b6100526100a9366004610beb565b610128565b3480156100ba57600080fd5b5060015461008d565b3480156100cf57600080fd5b506100d8610153565b604051610073929190610c34565b60408051602081019091526000808252906100ff610585565b604080518082019091526020808201868152825282015261012081836101f0565b505192915050565b60408051602081019091526000815261014f61014936849003840184610c6e565b826101f0565b5050565b60006060600054600280805461016890610cd3565b80601f016020809104026020016040519081016040528092919081815260200182805461019490610cd3565b80156101e15780601f106101b6576101008083540402835291602001916101e1565b820191906000526020600020905b8154815290600101906020018083116101c457829003601f168201915b50505050509050915091509091565b610200600360005414600b6104e2565b815161021b90158061021457508251600154145b600c6104e2565b60008080556002805461022d90610cd3565b80601f016020809104026020016040519081016040528092919081815260200182805461025990610cd3565b80156102a65780601f1061027b576101008083540402835291602001916102a6565b820191906000526020600020905b81548152906001019060200180831161028957829003601f168201915b50505050508060200190518101906102be9190610d08565b90506102c86105a4565b7f619435e8c153f4bb174d9983274114dd62604da07aa6e76c5f37e0cf3ed65dc533856040516102f9929190610eba565b60405180910390a161030d341560086104e2565b610318600047610ef1565b604080830191909152805160048152602481018252602080820180516001600160e01b0316632009701760e11b1790528601515151519151909160009182916001600160a01b031690829061036e908690610f16565b60006040518083038185875af1925050503d80600081146103ab576040519150601f19603f3d011682016040523d82523d6000602084013e6103b0565b606091505b50915091506103c182826009610508565b5060408401516103d19047610ef1565b84515280516103e99082016020908101908301610f62565b845160209081019190915284519085018190526040517f672ab27a2caf42fdf800ae55a78aa291d46f1cd33b7810a2290b3f0d818531519161042a91611017565b60405180910390a16020840151516104449015600a6104e2565b604051600081527fc2073abd134b7e65c464e055861066c2b431fb554abbaedd1ae793b544221bf09060200160405180910390a16000808752602088015151516040517f756de5ce3f2ebf283f4632369bb52f397f728e7fe9f97dc86c414901f90a82e9926104b79233929091906110ad565b60405180910390a16104c76105d1565b60208101514390526104d88161054a565b5050505050505050565b8161014f5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60608315610517575081610543565b8251156105275782518084602001fd5b60405163100960cb60e01b8152600481018390526024016104ff565b9392505050565b600360009081554360015560408051602080820184905282518083038201815291830190925280516105809260029201906105fb565b505050565b60405180604001604052806000815260200161059f61067f565b905290565b60405180606001604052806105b7610692565b81526020016105c4610692565b8152602001600081525090565b604051806040016040528060001515815260200161059f6040518060200160405280600081525090565b82805461060790610cd3565b90600052602060002090601f016020900481019282610629576000855561066f565b82601f1061064257805160ff191683800117855561066f565b8280016001018555821561066f579182015b8281111561066f578251825591602001919060010190610654565b5061067b9291506106ac565b5090565b604051806020016040528061059f6106c1565b60405180604001604052806000815260200161059f6106d4565b5b8082111561067b57600081556001016106ad565b604051806020016040528061059f610710565b60405180606001604052806106e761081c565b81526020016000815260200161059f604051806040016040528060008152602001600081525090565b60405180610200016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001610767604051806040016040528060008152602001600081525090565b8152600060208201526040016107986040805160608101909152806000815260006020820181905260409091015290565b81526020016107b260408051602081019091526000815290565b8152600060208201526040016107d360408051602081019091526000815290565b8152602001600081526020016107f460408051602081019091526000815290565b815260006020820181905260408201526060016105c460408051602081019091526000815290565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001610864604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160006001600160a01b031681525090565b6040805190810167ffffffffffffffff811182821017156108b957634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff811182821017156108b957634e487b7160e01b600052604160045260246000fd5b604051610200810167ffffffffffffffff811182821017156108b957634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156108b957634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156108b957634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461099957600080fd5b50565b80356109a781610984565b919050565b6000604082840312156109be57600080fd5b6109c6610888565b9050813581526020820135602082015292915050565b801515811461099957600080fd5b6000606082840312156109fc57600080fd5b610a046108bf565b9050813560028110610a1557600080fd5b81526020820135610a25816109dc565b60208201526040820135610a3881610984565b604082015292915050565b600060208284031215610a5557600080fd5b6040516020810181811067ffffffffffffffff82111715610a8657634e487b7160e01b600052604160045260246000fd5b60405290508082356001600160c01b031981168114610aa457600080fd5b905292915050565b60006102608284031215610abf57600080fd5b610ac76108f0565b9050610ad28261099c565b81526020820135602082015260408201356040820152610af46060830161099c565b6060820152610b0683608084016109ac565b6080820152610b1760c0830161099c565b60a0820152610b298360e084016109ea565b60c0820152610140610b3d84828501610a43565b60e0830152610160610b5081850161099c565b610100840152610180610b6586828701610a43565b6101208501526101a080860135848601526101c09350610b8787858801610a43565b838601526101e092508286013582860152610ba5610200870161099c565b9085015250610bb8856102208601610a43565b8284015261024084013581840152505092915050565b60006102608284031215610be157600080fd5b6105438383610aac565b60006102808284031215610bfe57600080fd5b50919050565b60005b83811015610c1f578181015183820152602001610c07565b83811115610c2e576000848401525b50505050565b8281526040602082015260008251806040840152610c59816060850160208701610c04565b601f01601f1916919091016060019392505050565b6000818303610280811215610c8257600080fd5b610c8a610888565b83358152610260601f1983011215610ca157600080fd5b610ca9610922565b9150610cb3610922565b610cc08660208701610aac565b8152825260208101919091529392505050565b600181811c90821680610ce757607f821691505b60208210811415610bfe57634e487b7160e01b600052602260045260246000fd5b600060208284031215610d1a57600080fd5b8151610543816109dc565b805160028110610d4557634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b80516001600160a01b0316825260208101516020830152604081015160408301526060810151610da260608401826001600160a01b03169052565b506080810151610dbf608084018280518252602090810151910152565b5060a08101516001600160a01b03811660c08401525060c0810151610de760e0840182610d25565b5060e0810151610140610e0681850183516001600160c01b0319169052565b6101008301519150610160610e25818601846001600160a01b03169052565b6101208401519250610180610e4681870185516001600160c01b0319169052565b918401516101a086810191909152908401519250906101c090610e7582870185516001600160c01b0319169052565b8401516101e086810191909152918401516001600160a01b0316610200860152830151516001600160c01b031916610220850152909101516102409092019190915250565b60006102a08201905060018060a01b0384168252825160208301526020830151610ee960408401825151610d67565b509392505050565b600082821015610f1157634e487b7160e01b600052601160045260246000fd5b500390565b60008251610f28818460208701610c04565b9190910192915050565b600060408284031215610f4457600080fd5b610f4c610888565b9050815181526020820151602082015292915050565b6000818303610140811215610f7657600080fd5b610f7e6108bf565b60e0821215610f8c57600080fd5b610f94610953565b91508351610fa181610984565b82526020840151610fb181610984565b6020830152610fc38560408601610f32565b60408301526080840151606083015260a0840151608083015260c0840151610fea81610984565b60a083015281815260e0840151602082015261100a856101008601610f32565b6040820152949350505050565b81518152602080830151805180516001600160a01b03908116848601528184015181166040808701919091528201518051606087015293840151608086015261016085019350606082015160a086810191909152608083015160c0870152909101511660e08401526020810151610100840152604001516110a661012084018280518252602090810151910152565b5092915050565b6001600160a01b03841681526102a081016110cb6020830185610d67565b82151561028083015294935050505056fea26469706673582212207e7f1061c8e6667e8e2c9dcdc043ca2d83970b05b1c8d85e7a077f5e6644c92e64736f6c634300080c0033",BytecodeLen:5039,Which:"oD",version:7,views:{}},_stateSourceMap={2:{at:"./announcer.rsh:40:11:after expr stmt semicolon",fs:[],msg:null,who:"Module"},3:{at:"./announcer.rsh:24:28:after expr stmt semicolon",fs:[],msg:null,who:"Module"}},_Connectors={ALGO:_ALGO,ETH:_ETH},_Participants={Deployer:Deployer,announce:announce},_APIs={announce:announce};export{_version,_versionHash,_backendVersion,getExports,_getEvents,_getViews,_getMaps,Deployer,_announce3,announce,_stateSourceMap,_Connectors,_Participants,_APIs};