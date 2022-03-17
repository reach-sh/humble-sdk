// Automatically generated with Reach 0.1.8 (4bfdf20d)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (4bfdf20d)';
export const _backendVersion = 9;

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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    balA: ctc2,
    balB: ctc2
    });
  const ctc4 = stdlib.T_Object({
    addr: ctc0,
    fee: ctc2,
    lpFee: ctc2,
    totFee: ctc2
    });
  
  return {
    infos: {
      Tokens: {
        aBal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2014, v2015, v2018, v2031] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = svs;
              return (await ((async () => {
                
                
                return v2051;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        aTok: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2014, v2015, v2018, v2031] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = svs;
              stdlib.assert(false, 'illegal view')
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        bBal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2014, v2015, v2018, v2031] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = svs;
              return (await ((async () => {
                
                
                return v2052;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        bTok: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2014, v2015, v2018, v2031] = svs;
              return (await ((async () => {
                
                
                return v2015;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = svs;
              return (await ((async () => {
                
                
                return v2015;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        liquidityToken: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2014, v2015, v2018, v2031] = svs;
              return (await ((async () => {
                
                
                return v2031;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = svs;
              return (await ((async () => {
                
                
                return v2031;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        minted: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2014, v2015, v2018, v2031] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = svs;
              return (await ((async () => {
                
                
                return v2042;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        protocolBals: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2014, v2015, v2018, v2031] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = svs;
              return (await ((async () => {
                
                
                return v2043;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          },
        protocolInfo: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2014, v2015, v2018, v2031] = svs;
              return (await ((async () => {
                
                const v2023 = {
                  addr: v2018,
                  fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
                  lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
                  totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
                  };
                
                return v2023;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = svs;
              return (await ((async () => {
                
                
                return v2044;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc4
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc0, ctc1],
      4: [ctc1, ctc1, ctc3, ctc2, ctc3, ctc4, ctc2, ctc2, ctc2]
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Data({
    None: ctc4,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Struct([['receiver', ctc0], ['newHarvesterAddr', ctc5], ['newProtocolFee', ctc7], ['newProviderFee', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_151: ctc9,
    Provider_deposit0_151: ctc10,
    Provider_withdraw0_151: ctc11,
    Trader_swapAForB0_151: ctc12,
    Trader_swapBForA0_151: ctc12
    });
  const ctc14 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6, ctc6, ctc6, ctc6]);
  
  
  const v2007 = stdlib.protect(ctc0, interact.humbleAddr, 'for Admin\'s interact field humbleAddr');
  const v2008 = stdlib.protect(ctc1, interact.ltName, 'for Admin\'s interact field ltName');
  const v2009 = stdlib.protect(ctc2, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v2010 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v2013 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./n2nn.rsh:42:23:decimal', stdlib.UInt_max, 10000));
  stdlib.assert(v2013, {
    at: './n2nn.rsh:42:11:application',
    fs: ['at ./n2nn.rsh:38:13:application call to [unknown function] (defined at: ./n2nn.rsh:38:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2010, v2008, v2009, v2007],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc2, ctc0],
    pay: [stdlib.checkedBigNumberify('./n2nn.rsh:46:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2015, v2016, v2017, v2018], secs: v2020, time: v2019, didSend: v73, from: v2014 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v2015
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./n2nn.rsh:46:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v2028 = '                                                                                                ';
      const v2029 = '                                ';
      const v2030 = stdlib.simTokenNew(sim_r, v2016, v2017, v2028, v2029, stdlib.UInt_max, undefined);
      const v2031 = await txn1.getOutput('internal', 'v2030', ctc3, v2030);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc1, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v2015, v2016, v2017, v2018], secs: v2020, time: v2019, didSend: v73, from: v2014 } = txn1;
  ;
  ;
  const v2028 = '                                                                                                ';
  const v2029 = '                                ';
  const v2030 = undefined;
  const v2031 = await txn1.getOutput('internal', 'v2030', ctc3, v2030);
  const txn2 = await (ctc.sendrecv({
    args: [v2014, v2015, v2018, v2031],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2019,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./n2nn.rsh:70:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v2034, time: v2033, didSend: v91, from: v2032 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./n2nn.rsh:70:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v2036 = stdlib.addressEq(v2014, v2032);
      stdlib.assert(v2036, {
        at: './n2nn.rsh:70:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Admin'
        });
      
      const v2040 = {
        balA: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        balB: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
        };
      const v2041 = {
        addr: v2018,
        fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
        };
      const v2042 = stdlib.checkedBigNumberify('./n2nn.rsh:76:22:decimal', stdlib.UInt_max, 0);
      const v2043 = v2040;
      const v2044 = v2041;
      const v2045 = v2033;
      const v2051 = stdlib.checkedBigNumberify('./n2nn.rsh:35:9:after expr stmt semicolon', stdlib.UInt_max, 0);
      const v2052 = stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 0);
      const v2053 = stdlib.UInt_max;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2015
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc3, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2034, time: v2033, didSend: v91, from: v2032 } = txn2;
  ;
  const v2036 = stdlib.addressEq(v2014, v2032);
  stdlib.assert(v2036, {
    at: './n2nn.rsh:70:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.signalPoolCreation(v2031), {
    at: './n2nn.rsh:71:47:application',
    fs: ['at ./n2nn.rsh:71:13:application call to [unknown function] (defined at: ./n2nn.rsh:71:17:function exp)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v2040 = {
    balA: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    balB: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
    };
  const v2041 = {
    addr: v2018,
    fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
    };
  let v2042 = stdlib.checkedBigNumberify('./n2nn.rsh:76:22:decimal', stdlib.UInt_max, 0);
  let v2043 = v2040;
  let v2044 = v2041;
  let v2045 = v2033;
  let v2051 = stdlib.checkedBigNumberify('./n2nn.rsh:35:9:after expr stmt semicolon', stdlib.UInt_max, 0);
  let v2052 = stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 0);
  let v2053 = stdlib.UInt_max;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc13],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn3;
    switch (v2535[0]) {
      case 'Harvester_harvest0_151': {
        const v2538 = v2535[1];
        ;
        ;
        ;
        undefined;
        const v2620 = v2538[stdlib.checkedBigNumberify('./n2nn.rsh:96:11:spread', stdlib.UInt_max, 0)];
        const v2621 = v2044.addr;
        const v2622 = v2044.fee;
        const v2623 = v2044.lpFee;
        const v2624 = v2043.balA;
        const v2625 = v2043.balB;
        const v2626 = v2620.newHarvesterAddr;
        const v2627 = v2620.newProtocolFee;
        const v2628 = v2620.newProviderFee;
        const v2629 = v2620.receiver;
        const v2630 = stdlib.addressEq(v2534, v2621);
        stdlib.assert(v2630, {
          at: './util.rsh:278:10:application',
          fs: ['at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
          msg: 'Thou art not the harvester                                      ',
          who: 'Admin'
          });
        const v2634 = stdlib.sub(v2051, v2624);
        ;
        const v2636 = stdlib.eq(await ctc.getBalance(), stdlib.checkedBigNumberify('./util.rsh:280:27:application', stdlib.UInt_max, 0)) ? stdlib.checkedBigNumberify('./util.rsh:280:27:application', stdlib.UInt_max, 0) : stdlib.sub(await ctc.getBalance(), v2634);
        const v2637 = stdlib.add(v2636, v2634);
        const v2641 = stdlib.sub(v2637, v2636);
        ;
        const v2647 = stdlib.sub(v2052, v2625);
        ;
        const v2648 = [v2624, v2625];
        await txn3.getOutput('Harvester_harvest', 'v2648', ctc12, v2648);
        let v2654;
        switch (v2626[0]) {
          case 'None': {
            const v2655 = v2626[1];
            v2654 = v2621;
            
            break;
            }
          case 'Some': {
            const v2656 = v2626[1];
            v2654 = v2656;
            
            break;
            }
          }
        let v2657;
        switch (v2627[0]) {
          case 'None': {
            const v2658 = v2627[1];
            v2657 = v2622;
            
            break;
            }
          case 'Some': {
            const v2659 = v2627[1];
            v2657 = v2659;
            
            break;
            }
          }
        let v2660;
        switch (v2628[0]) {
          case 'None': {
            const v2661 = v2628[1];
            v2660 = v2623;
            
            break;
            }
          case 'Some': {
            const v2662 = v2628[1];
            v2660 = v2662;
            
            break;
            }
          }
        const v2664 = stdlib.add(v2657, v2660);
        const v2668 = stdlib.add(v2660, v2657);
        const v2669 = stdlib.eq(v2664, v2668);
        const v2670 = stdlib.lt(v2664, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
        const v2671 = v2669 ? v2670 : false;
        const v2672 = stdlib.gt(v2664, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
        const v2673 = v2671 ? v2672 : false;
        stdlib.assert(v2673, {
          at: './util.rsh:94:4:application',
          fs: ['at ./util.rsh:291:21:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v2674 = {
          addr: v2654,
          fee: v2657,
          lpFee: v2660,
          totFee: v2664
          };
        const cv2042 = v2042;
        const cv2043 = v2040;
        const cv2044 = v2674;
        const cv2045 = v2536;
        const cv2051 = v2641;
        const cv2052 = v2647;
        const cv2053 = v2053;
        
        v2042 = cv2042;
        v2043 = cv2043;
        v2044 = cv2044;
        v2045 = cv2045;
        v2051 = cv2051;
        v2052 = cv2052;
        v2053 = cv2053;
        
        continue;
        break;
        }
      case 'Provider_deposit0_151': {
        const v2983 = v2535[1];
        const v2984 = v2983[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 0)];
        const v2985 = v2983[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 1)];
        const v2986 = v2983[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 2)];
        const v3070 = stdlib.add(v2051, v2984);
        ;
        ;
        const v3074 = stdlib.add(v2052, v2985);
        ;
        undefined;
        const v3142 = stdlib.gt(v2984, stdlib.checkedBigNumberify('./n2nn.rsh:173:26:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v3142, {
          at: './n2nn.rsh:173:18:application',
          fs: ['at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'amtA > 0',
          who: 'Admin'
          });
        const v3143 = stdlib.gt(v2985, stdlib.checkedBigNumberify('./n2nn.rsh:174:26:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v3143, {
          at: './n2nn.rsh:174:18:application',
          fs: ['at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'amtB > 0',
          who: 'Admin'
          });
        const v3145 = v2043.balA;
        const v3146 = stdlib.sub(v3070, v3145);
        const v3148 = v2043.balB;
        const v3149 = stdlib.sub(v3074, v3148);
        const v3152 = stdlib.eq(v2042, stdlib.checkedBigNumberify('./n2nn.rsh:181:30:decimal', stdlib.UInt_max, 0));
        let v3153;
        if (v3152) {
          const v3156 = stdlib.muldiv(v2984, v2985, v2986);
          const v3157 = stdlib.ge(v3156, v2986);
          stdlib.assert(v3157, {
            at: './util.rsh:185:4:application',
            fs: ['at ./n2nn.rsh:182:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
            msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
            who: 'Admin'
            });
          const v3158 = stdlib.le(v2986, v2053);
          stdlib.assert(v3158, {
            at: './util.rsh:186:4:application',
            fs: ['at ./n2nn.rsh:182:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
            msg: 'minted <= poolBalance                                           ',
            who: 'Admin'
            });
          v3153 = v2986;
          }
        else {
          const v3159 = stdlib.sub(v3146, v2984);
          const v3160 = stdlib.sub(v3149, v2985);
          const v3164 = stdlib.muldiv(v2984, v2042, v3159);
          const v3165 = stdlib.muldiv(v2985, v2042, v3160);
          const v3168 = stdlib.add(v3164, v3165);
          const v3169 = stdlib.div(v3168, stdlib.checkedBigNumberify('./util.rsh:54:28:decimal', stdlib.UInt_max, 2));
          const v3170 = stdlib.le(v3169, v2053);
          stdlib.assert(v3170, {
            at: './util.rsh:166:4:application',
            fs: ['at ./n2nn.rsh:183:34:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
            msg: 'result <= poolBalance                                           ',
            who: 'Admin'
            });
          v3153 = v3169;
          }
        const v3174 = stdlib.sub(v2053, v3153);
        ;
        const v3175 = stdlib.add(v2042, v3153);
        await txn3.getOutput('Provider_deposit', 'v3153', ctc6, v3153);
        const cv2042 = v3175;
        const cv2043 = v2043;
        const cv2044 = v2044;
        const cv2045 = v2536;
        const cv2051 = v3070;
        const cv2052 = v3074;
        const cv2053 = v3174;
        
        v2042 = cv2042;
        v2043 = cv2043;
        v2044 = cv2044;
        v2045 = cv2045;
        v2051 = cv2051;
        v2052 = cv2052;
        v2053 = cv2053;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_151': {
        const v3439 = v2535[1];
        const v3440 = v3439[stdlib.checkedBigNumberify('./n2nn.rsh:101:11:spread', stdlib.UInt_max, 0)];
        ;
        const v3522 = stdlib.add(v2053, v3440);
        ;
        ;
        undefined;
        const v3638 = v2043.balA;
        const v3639 = stdlib.sub(v2051, v3638);
        const v3641 = v2043.balB;
        const v3642 = stdlib.sub(v2052, v3641);
        const v3647 = stdlib.muldiv(v3440, v3639, v2042);
        const v3648 = stdlib.le(v3647, v3639);
        stdlib.assert(v3648, {
          at: './n2nn.rsh:131:18:application',
          fs: ['at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v3652 = stdlib.sub(v2051, v3647);
        ;
        const v3653 = stdlib.muldiv(v3440, v3642, v2042);
        const v3654 = stdlib.le(v3653, v3642);
        stdlib.assert(v3654, {
          at: './n2nn.rsh:136:18:application',
          fs: ['at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v3658 = stdlib.sub(v2052, v3653);
        ;
        const v3659 = stdlib.sub(v2042, v3440);
        const v3660 = [v3647, v3653];
        await txn3.getOutput('Provider_withdraw', 'v3660', ctc14, v3660);
        const cv2042 = v3659;
        const cv2043 = v2043;
        const cv2044 = v2044;
        const cv2045 = v2536;
        const cv2051 = v3652;
        const cv2052 = v3658;
        const cv2053 = v3522;
        
        v2042 = cv2042;
        v2043 = cv2043;
        v2044 = cv2044;
        v2045 = cv2045;
        v2051 = cv2051;
        v2052 = cv2052;
        v2053 = cv2053;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_151': {
        const v3889 = v2535[1];
        const v3890 = v3889[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 0)];
        const v3891 = v3889[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 1)];
        const v3970 = stdlib.add(v2051, v3890);
        ;
        ;
        ;
        undefined;
        const v4121 = v2043.balA;
        const v4122 = stdlib.sub(v3970, v4121);
        const v4124 = v2043.balB;
        const v4125 = stdlib.sub(v2052, v4124);
        const v4126 = stdlib.lt(v3890, v4122);
        stdlib.assert(v4126, {
          at: './util.rsh:231:10:application',
          fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'amtIn <= balance(amtInTok)',
          who: 'Admin'
          });
        const v4127 = stdlib.gt(v3890, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4127, {
          at: './util.rsh:234:10:application',
          fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'amtIn > 0',
          who: 'Admin'
          });
        const v4128 = stdlib.sub(v4122, v3890);
        const v4129 = v2044.fee;
        const v4131 = v2044.totFee;
        const v4134 = stdlib.mul(v4129, stdlib.checkedBigNumberify('./util.rsh:117:38:decimal', stdlib.UInt_max, 100));
        const v4135 = stdlib.div(v4134, v4131);
        const v4152 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:102:15:decimal', stdlib.UInt_max, 10000), v4131);
        const v4156 = stdlib.mul(v3890, v4152);
        const v4159 = stdlib.mul(v4128, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
        const v4162 = stdlib.add(v4159, v4156);
        const v4163 = stdlib.muldiv(v4156, v4125, v4162);
        const v4164 = stdlib.gt(v4163, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4164, {
          at: './util.rsh:122:4:application',
          fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'amtOut > 0',
          who: 'Admin'
          });
        const v4167 = stdlib.add(v4128, v3890);
        const v4168 = stdlib.gt(v4167, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4168, {
          at: './util.rsh:65:4:application',
          fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4169 = stdlib.muldiv(v3890, v4125, v4167);
        const v4171 = stdlib.sub(v4169, v4163);
        const v4172 = stdlib.muldiv(v3890, v4129, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
        const v4176 = stdlib.mul(v4171, v4135);
        const v4177 = stdlib.div(v4176, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
        const v4178 = stdlib.le(v4177, v4171);
        stdlib.assert(v4178, {
          at: './util.rsh:128:4:application',
          fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'pFeeOut <= outFee',
          who: 'Admin'
          });
        const v4179 = stdlib.muldiv(v4177, v4128, v4125);
        const v4180 = stdlib.ge(v4179, v4172);
        const v4181 = [v4163, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4177];
        const v4182 = [v4163, v4172, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v4183 = v4180 ? v4181 : v4182;
        const v4184 = v4183[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
        const v4185 = v4183[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
        const v4186 = v4183[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
        const v4187 = stdlib.ge(v4184, v3891);
        stdlib.assert(v4187, {
          at: './util.rsh:236:10:application',
          fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'out >= expectedOut',
          who: 'Admin'
          });
        const v4188 = stdlib.le(v4184, v4125);
        stdlib.assert(v4188, {
          at: './util.rsh:237:10:application',
          fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'amtOut <= bal(out)',
          who: 'Admin'
          });
        const v4192 = stdlib.sub(v2052, v4184);
        ;
        const v4196 = stdlib.sub(v4192, v4124);
        const v4198 = stdlib.gt(v4128, v4125);
        const v4199 = v4198 ? v4128 : v4125;
        const v4200 = stdlib.lt(v4128, v4125);
        const v4201 = v4200 ? v4128 : v4125;
        const v4202 = stdlib.muldiv(v4122, v4196, v4199);
        const v4203 = stdlib.ge(v4202, v4201);
        stdlib.assert(v4203, {
          at: './util.rsh:246:10:application',
          fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'newK >= market.k',
          who: 'Admin'
          });
        const v4207 = stdlib.add(v4121, v4185);
        const v4211 = stdlib.add(v4124, v4186);
        const v4212 = {
          balA: v4207,
          balB: v4211
          };
        const v4217 = [v4184, v4185, v4186, v4196, v4122];
        await txn3.getOutput('Trader_swapAForB', 'v4217', ctc15, v4217);
        const cv2042 = v2042;
        const cv2043 = v4212;
        const cv2044 = v2044;
        const cv2045 = v2536;
        const cv2051 = v3970;
        const cv2052 = v4192;
        const cv2053 = v2053;
        
        v2042 = cv2042;
        v2043 = cv2043;
        v2044 = cv2044;
        v2045 = cv2045;
        v2051 = cv2051;
        v2052 = cv2052;
        v2053 = cv2053;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_151': {
        const v4339 = v2535[1];
        const v4340 = v4339[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 0)];
        const v4341 = v4339[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 1)];
        ;
        ;
        const v4424 = stdlib.add(v2052, v4340);
        ;
        undefined;
        const v4682 = v2043.balB;
        const v4683 = stdlib.sub(v4424, v4682);
        const v4685 = v2043.balA;
        const v4686 = stdlib.sub(v2051, v4685);
        const v4687 = stdlib.lt(v4340, v4683);
        stdlib.assert(v4687, {
          at: './util.rsh:231:10:application',
          fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'amtIn <= balance(amtInTok)',
          who: 'Admin'
          });
        const v4688 = stdlib.gt(v4340, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4688, {
          at: './util.rsh:234:10:application',
          fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'amtIn > 0',
          who: 'Admin'
          });
        const v4689 = stdlib.sub(v4683, v4340);
        const v4690 = v2044.fee;
        const v4692 = v2044.totFee;
        const v4695 = stdlib.mul(v4690, stdlib.checkedBigNumberify('./util.rsh:117:38:decimal', stdlib.UInt_max, 100));
        const v4696 = stdlib.div(v4695, v4692);
        const v4713 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:102:15:decimal', stdlib.UInt_max, 10000), v4692);
        const v4717 = stdlib.mul(v4340, v4713);
        const v4720 = stdlib.mul(v4689, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
        const v4723 = stdlib.add(v4720, v4717);
        const v4724 = stdlib.muldiv(v4717, v4686, v4723);
        const v4725 = stdlib.gt(v4724, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4725, {
          at: './util.rsh:122:4:application',
          fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'amtOut > 0',
          who: 'Admin'
          });
        const v4728 = stdlib.add(v4689, v4340);
        const v4729 = stdlib.gt(v4728, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4729, {
          at: './util.rsh:65:4:application',
          fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4730 = stdlib.muldiv(v4340, v4686, v4728);
        const v4732 = stdlib.sub(v4730, v4724);
        const v4733 = stdlib.muldiv(v4340, v4690, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
        const v4737 = stdlib.mul(v4732, v4696);
        const v4738 = stdlib.div(v4737, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
        const v4739 = stdlib.le(v4738, v4732);
        stdlib.assert(v4739, {
          at: './util.rsh:128:4:application',
          fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'pFeeOut <= outFee',
          who: 'Admin'
          });
        const v4740 = stdlib.muldiv(v4738, v4689, v4686);
        const v4741 = stdlib.ge(v4740, v4733);
        const v4742 = [v4724, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4738];
        const v4743 = [v4724, v4733, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v4744 = v4741 ? v4742 : v4743;
        const v4745 = v4744[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
        const v4746 = v4744[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
        const v4747 = v4744[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
        const v4748 = stdlib.ge(v4745, v4341);
        stdlib.assert(v4748, {
          at: './util.rsh:236:10:application',
          fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'out >= expectedOut',
          who: 'Admin'
          });
        const v4749 = stdlib.le(v4745, v4686);
        stdlib.assert(v4749, {
          at: './util.rsh:237:10:application',
          fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'amtOut <= bal(out)',
          who: 'Admin'
          });
        const v4753 = stdlib.sub(v2051, v4745);
        ;
        const v4757 = stdlib.sub(v4753, v4685);
        const v4759 = stdlib.gt(v4689, v4686);
        const v4760 = v4759 ? v4689 : v4686;
        const v4761 = stdlib.lt(v4689, v4686);
        const v4762 = v4761 ? v4689 : v4686;
        const v4763 = stdlib.muldiv(v4683, v4757, v4760);
        const v4764 = stdlib.ge(v4763, v4762);
        stdlib.assert(v4764, {
          at: './util.rsh:246:10:application',
          fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'newK >= market.k',
          who: 'Admin'
          });
        const v4768 = stdlib.add(v4685, v4747);
        const v4772 = stdlib.add(v4682, v4746);
        const v4773 = {
          balA: v4768,
          balB: v4772
          };
        const v4778 = [v4745, v4746, v4747, v4757, v4683];
        await txn3.getOutput('Trader_swapBForA', 'v4778', ctc15, v4778);
        const cv2042 = v2042;
        const cv2043 = v4773;
        const cv2044 = v2044;
        const cv2045 = v2536;
        const cv2051 = v4753;
        const cv2052 = v4424;
        const cv2053 = v2053;
        
        v2042 = cv2042;
        v2043 = cv2043;
        v2044 = cv2044;
        v2045 = cv2045;
        v2051 = cv2051;
        v2052 = cv2052;
        v2053 = cv2053;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function Harvester_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Harvester_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Harvester_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc5,
    Some: ctc1
    });
  const ctc8 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc6], ['newProtocolFee', ctc7], ['newProviderFee', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_151: ctc9,
    Provider_deposit0_151: ctc10,
    Provider_withdraw0_151: ctc11,
    Trader_swapAForB0_151: ctc12,
    Trader_swapBForA0_151: ctc12
    });
  
  
  const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1]);
  const v2087 = ctc.selfAddress();
  const v2089 = stdlib.protect(ctc9, await interact.in(), {
    at: './n2nn.rsh:1:23:application',
    fs: ['at ./n2nn.rsh:97:15:application call to [unknown function] (defined at: ./n2nn.rsh:97:15:function exp)', 'at ./n2nn.rsh:76:19:application call to "runHarvester_harvest0_151" (defined at: ./n2nn.rsh:96:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'in',
    who: 'Harvester_harvest'
    });
  const v2090 = v2089[stdlib.checkedBigNumberify('./n2nn.rsh:96:11:spread', stdlib.UInt_max, 0)];
  const v2092 = v2044.addr;
  const v2093 = v2044.fee;
  const v2094 = v2044.lpFee;
  const v2095 = stdlib.addressEq(v2087, v2092);
  stdlib.assert(v2095, {
    at: './util.rsh:264:9:application',
    fs: ['at ./n2nn.rsh:97:33:application call to "doAssumeHarvest" (defined at: ./util.rsh:262:54:function exp)', 'at ./n2nn.rsh:97:15:application call to [unknown function] (defined at: ./n2nn.rsh:97:15:function exp)', 'at ./n2nn.rsh:97:15:application call to [unknown function] (defined at: ./n2nn.rsh:97:15:function exp)', 'at ./n2nn.rsh:76:19:application call to "runHarvester_harvest0_151" (defined at: ./n2nn.rsh:96:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'Thou art not the harvester                                      ',
    who: 'Harvester_harvest'
    });
  const v2096 = v2090.newProtocolFee;
  const v2097 = v2090.newProviderFee;
  let v2098;
  switch (v2096[0]) {
    case 'None': {
      const v2099 = v2096[1];
      v2098 = v2093;
      
      break;
      }
    case 'Some': {
      const v2100 = v2096[1];
      v2098 = v2100;
      
      break;
      }
    }
  let v2101;
  switch (v2097[0]) {
    case 'None': {
      const v2102 = v2097[1];
      v2101 = v2094;
      
      break;
      }
    case 'Some': {
      const v2103 = v2097[1];
      v2101 = v2103;
      
      break;
      }
    }
  const v2105 = stdlib.add(v2098, v2101);
  const v2109 = stdlib.add(v2101, v2098);
  const v2110 = stdlib.eq(v2105, v2109);
  const v2111 = stdlib.lt(v2105, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
  const v2112 = v2110 ? v2111 : false;
  const v2113 = stdlib.gt(v2105, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
  const v2114 = v2112 ? v2113 : false;
  stdlib.assert(v2114, {
    at: './util.rsh:94:4:application',
    fs: ['at ./util.rsh:269:20:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./n2nn.rsh:97:33:application call to "doAssumeHarvest" (defined at: ./util.rsh:262:54:function exp)', 'at ./n2nn.rsh:97:15:application call to [unknown function] (defined at: ./n2nn.rsh:97:15:function exp)', 'at ./n2nn.rsh:97:15:application call to [unknown function] (defined at: ./n2nn.rsh:97:15:function exp)', 'at ./n2nn.rsh:76:19:application call to "runHarvester_harvest0_151" (defined at: ./n2nn.rsh:96:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Harvester_harvest'
    });
  const v2116 = ['Harvester_harvest0_151', v2089];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053, v2116],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./n2nn.rsh:98:17:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./n2nn.rsh:98:21:decimal', stdlib.UInt_max, 0), v2031], [stdlib.checkedBigNumberify('./n2nn.rsh:98:32:decimal', stdlib.UInt_max, 0), v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn1;
      
      switch (v2535[0]) {
        case 'Harvester_harvest0_151': {
          const v2538 = v2535[1];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2031
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2015
            });
          undefined;
          const v2620 = v2538[stdlib.checkedBigNumberify('./n2nn.rsh:96:11:spread', stdlib.UInt_max, 0)];
          const v2624 = v2043.balA;
          const v2625 = v2043.balB;
          const v2626 = v2620.newHarvesterAddr;
          const v2627 = v2620.newProtocolFee;
          const v2628 = v2620.newProviderFee;
          const v2629 = v2620.receiver;
          const v2630 = stdlib.addressEq(v2534, v2092);
          stdlib.assert(v2630, {
            at: './util.rsh:278:10:application',
            fs: ['at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
            msg: 'Thou art not the harvester                                      ',
            who: 'Harvester_harvest'
            });
          const v2634 = stdlib.sub(v2051, v2624);
          sim_r.txns.push({
            amt: v2624,
            kind: 'from',
            to: v2629,
            tok: undefined
            });
          const v2636 = stdlib.sub(await ctc.getBalance(), v2634);
          const v2637 = stdlib.add(v2636, v2634);
          const v2641 = stdlib.sub(v2637, v2636);
          sim_r.txns.push({
            amt: v2636,
            kind: 'from',
            to: v2629,
            tok: undefined
            });
          const v2647 = stdlib.sub(v2052, v2625);
          sim_r.txns.push({
            amt: v2625,
            kind: 'from',
            to: v2629,
            tok: v2015
            });
          const v2648 = [v2624, v2625];
          const v2649 = await txn1.getOutput('Harvester_harvest', 'v2648', ctc12, v2648);
          
          let v2654;
          switch (v2626[0]) {
            case 'None': {
              const v2655 = v2626[1];
              v2654 = v2092;
              
              break;
              }
            case 'Some': {
              const v2656 = v2626[1];
              v2654 = v2656;
              
              break;
              }
            }
          let v2657;
          switch (v2627[0]) {
            case 'None': {
              const v2658 = v2627[1];
              v2657 = v2093;
              
              break;
              }
            case 'Some': {
              const v2659 = v2627[1];
              v2657 = v2659;
              
              break;
              }
            }
          let v2660;
          switch (v2628[0]) {
            case 'None': {
              const v2661 = v2628[1];
              v2660 = v2094;
              
              break;
              }
            case 'Some': {
              const v2662 = v2628[1];
              v2660 = v2662;
              
              break;
              }
            }
          const v2664 = stdlib.add(v2657, v2660);
          const v2668 = stdlib.add(v2660, v2657);
          const v2669 = stdlib.eq(v2664, v2668);
          const v2670 = stdlib.lt(v2664, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
          const v2671 = v2669 ? v2670 : false;
          const v2672 = stdlib.gt(v2664, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
          const v2673 = v2671 ? v2672 : false;
          stdlib.assert(v2673, {
            at: './util.rsh:94:4:application',
            fs: ['at ./util.rsh:291:21:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
            msg: null,
            who: 'Harvester_harvest'
            });
          const v2674 = {
            addr: v2654,
            fee: v2657,
            lpFee: v2660,
            totFee: v2664
            };
          const v6843 = v2042;
          const v6844 = v2040;
          const v6845 = v2674;
          const v6847 = v2641;
          const v6848 = v2647;
          const v6849 = v2053;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_deposit0_151': {
          const v2983 = v2535[1];
          
          break;
          }
        case 'Provider_withdraw0_151': {
          const v3439 = v2535[1];
          
          break;
          }
        case 'Trader_swapAForB0_151': {
          const v3889 = v2535[1];
          
          break;
          }
        case 'Trader_swapBForA0_151': {
          const v4339 = v2535[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn1;
  switch (v2535[0]) {
    case 'Harvester_harvest0_151': {
      const v2538 = v2535[1];
      ;
      ;
      ;
      undefined;
      const v2620 = v2538[stdlib.checkedBigNumberify('./n2nn.rsh:96:11:spread', stdlib.UInt_max, 0)];
      const v2624 = v2043.balA;
      const v2625 = v2043.balB;
      const v2626 = v2620.newHarvesterAddr;
      const v2627 = v2620.newProtocolFee;
      const v2628 = v2620.newProviderFee;
      const v2629 = v2620.receiver;
      const v2630 = stdlib.addressEq(v2534, v2092);
      stdlib.assert(v2630, {
        at: './util.rsh:278:10:application',
        fs: ['at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
        msg: 'Thou art not the harvester                                      ',
        who: 'Harvester_harvest'
        });
      const v2634 = stdlib.sub(v2051, v2624);
      ;
      const v2636 = stdlib.eq(await ctc.getBalance(), stdlib.checkedBigNumberify('./util.rsh:280:27:application', stdlib.UInt_max, 0)) ? stdlib.checkedBigNumberify('./util.rsh:280:27:application', stdlib.UInt_max, 0) : stdlib.sub(await ctc.getBalance(), v2634);
      const v2637 = stdlib.add(v2636, v2634);
      const v2641 = stdlib.sub(v2637, v2636);
      ;
      const v2647 = stdlib.sub(v2052, v2625);
      ;
      const v2648 = [v2624, v2625];
      const v2649 = await txn1.getOutput('Harvester_harvest', 'v2648', ctc12, v2648);
      if (v1407) {
        stdlib.protect(ctc5, await interact.out(v2538, v2649), {
          at: './n2nn.rsh:96:12:application',
          fs: ['at ./n2nn.rsh:96:12:application call to [unknown function] (defined at: ./n2nn.rsh:96:12:function exp)', 'at ./util.rsh:283:14:application call to "harvestDone" (defined at: ./n2nn.rsh:99:28:function exp)', 'at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
          msg: 'out',
          who: 'Harvester_harvest'
          });
        }
      else {
        }
      
      let v2654;
      switch (v2626[0]) {
        case 'None': {
          const v2655 = v2626[1];
          v2654 = v2092;
          
          break;
          }
        case 'Some': {
          const v2656 = v2626[1];
          v2654 = v2656;
          
          break;
          }
        }
      let v2657;
      switch (v2627[0]) {
        case 'None': {
          const v2658 = v2627[1];
          v2657 = v2093;
          
          break;
          }
        case 'Some': {
          const v2659 = v2627[1];
          v2657 = v2659;
          
          break;
          }
        }
      let v2660;
      switch (v2628[0]) {
        case 'None': {
          const v2661 = v2628[1];
          v2660 = v2094;
          
          break;
          }
        case 'Some': {
          const v2662 = v2628[1];
          v2660 = v2662;
          
          break;
          }
        }
      const v2664 = stdlib.add(v2657, v2660);
      const v2668 = stdlib.add(v2660, v2657);
      const v2669 = stdlib.eq(v2664, v2668);
      const v2670 = stdlib.lt(v2664, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
      const v2671 = v2669 ? v2670 : false;
      const v2672 = stdlib.gt(v2664, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
      const v2673 = v2671 ? v2672 : false;
      stdlib.assert(v2673, {
        at: './util.rsh:94:4:application',
        fs: ['at ./util.rsh:291:21:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
        msg: null,
        who: 'Harvester_harvest'
        });
      const v2674 = {
        addr: v2654,
        fee: v2657,
        lpFee: v2660,
        totFee: v2664
        };
      const v6843 = v2042;
      const v6844 = v2040;
      const v6845 = v2674;
      const v6847 = v2641;
      const v6848 = v2647;
      const v6849 = v2053;
      return;
      
      break;
      }
    case 'Provider_deposit0_151': {
      const v2983 = v2535[1];
      return;
      break;
      }
    case 'Provider_withdraw0_151': {
      const v3439 = v2535[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_151': {
      const v3889 = v2535[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_151': {
      const v4339 = v2535[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc1
    });
  const ctc9 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc7], ['newProtocolFee', ctc8], ['newProviderFee', ctc8]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_151: ctc10,
    Provider_deposit0_151: ctc5,
    Provider_withdraw0_151: ctc11,
    Trader_swapAForB0_151: ctc12,
    Trader_swapBForA0_151: ctc12
    });
  
  
  const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1]);
  const v2146 = stdlib.protect(ctc5, await interact.in(), {
    at: './n2nn.rsh:1:23:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v2147 = v2146[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 0)];
  const v2148 = v2146[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 1)];
  const v2149 = v2146[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 2)];
  const v2151 = stdlib.gt(v2147, stdlib.checkedBigNumberify('./n2nn.rsh:149:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2151, {
    at: './n2nn.rsh:149:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Provider_deposit'
    });
  const v2152 = stdlib.gt(v2148, stdlib.checkedBigNumberify('./n2nn.rsh:150:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2152, {
    at: './n2nn.rsh:150:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtB > 0',
    who: 'Provider_deposit'
    });
  const v2154 = v2043.balA;
  const v2155 = stdlib.sub(v2051, v2154);
  const v2157 = v2043.balB;
  const v2158 = stdlib.sub(v2052, v2157);
  const v2160 = stdlib.sub(stdlib.UInt_max, v2051);
  const v2161 = stdlib.ge(v2160, v2147);
  stdlib.assert(v2161, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:153:34:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'deposit: new balance(A)',
    who: 'Provider_deposit'
    });
  const v2162 = stdlib.add(v2051, v2147);
  const v2164 = stdlib.sub(stdlib.UInt_max, v2052);
  const v2165 = stdlib.ge(v2164, v2148);
  stdlib.assert(v2165, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:154:34:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'deposit: new balance(B)',
    who: 'Provider_deposit'
    });
  const v2166 = stdlib.add(v2052, v2148);
  const v2170 = stdlib.sub(stdlib.UInt_max, v2155);
  const v2171 = stdlib.ge(v2170, v2147);
  stdlib.assert(v2171, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:155:31:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'deposit: new balance(A)',
    who: 'Provider_deposit'
    });
  const v2172 = stdlib.add(v2155, v2147);
  const v2176 = stdlib.sub(stdlib.UInt_max, v2158);
  const v2177 = stdlib.ge(v2176, v2148);
  stdlib.assert(v2177, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:156:31:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'deposit: new balance(B)',
    who: 'Provider_deposit'
    });
  const v2178 = stdlib.add(v2158, v2148);
  const v2179 = stdlib.le(v2162, stdlib.UInt_max);
  stdlib.assert(v2179, {
    at: './n2nn.rsh:157:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'actBalAP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2180 = stdlib.le(v2166, stdlib.UInt_max);
  stdlib.assert(v2180, {
    at: './n2nn.rsh:158:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'actBalBP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2181 = stdlib.le(v2172, stdlib.UInt_max);
  stdlib.assert(v2181, {
    at: './n2nn.rsh:159:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balAP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2182 = stdlib.le(v2178, stdlib.UInt_max);
  stdlib.assert(v2182, {
    at: './n2nn.rsh:160:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balBP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2183 = stdlib.eq(v2042, stdlib.checkedBigNumberify('./n2nn.rsh:162:47:decimal', stdlib.UInt_max, 0));
  let v2184;
  if (v2183) {
    const v2186 = stdlib.gt(v2149, stdlib.checkedBigNumberify('./util.rsh:183:15:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v2186, {
      at: './util.rsh:183:5:application',
      fs: ['at ./n2nn.rsh:163:34:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'minted > 0                                                      ',
      who: 'Provider_deposit'
      });
    const v2187 = stdlib.muldiv(v2147, v2148, v2149);
    const v2188 = stdlib.ge(v2187, v2149);
    stdlib.assert(v2188, {
      at: './util.rsh:185:4:application',
      fs: ['at ./n2nn.rsh:163:34:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
      who: 'Provider_deposit'
      });
    const v2189 = stdlib.le(v2149, v2053);
    stdlib.assert(v2189, {
      at: './util.rsh:186:4:application',
      fs: ['at ./n2nn.rsh:163:34:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'minted <= poolBalance                                           ',
      who: 'Provider_deposit'
      });
    v2184 = v2149;
    }
  else {
    const v2191 = stdlib.gt(v2155, stdlib.checkedBigNumberify('./util.rsh:161:13:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v2191, {
      at: './util.rsh:161:5:application',
      fs: ['at ./n2nn.rsh:164:29:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'balA > 0                                                        ',
      who: 'Provider_deposit'
      });
    const v2192 = stdlib.gt(v2158, stdlib.checkedBigNumberify('./util.rsh:162:13:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v2192, {
      at: './util.rsh:162:5:application',
      fs: ['at ./n2nn.rsh:164:29:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'balB > 0                                                        ',
      who: 'Provider_deposit'
      });
    const v2193 = stdlib.muldiv(v2147, v2042, v2155);
    const v2194 = stdlib.muldiv(v2148, v2042, v2158);
    const v2195 = stdlib.sub(stdlib.UInt_max, v2193);
    const v2196 = stdlib.ge(v2195, v2194);
    stdlib.assert(v2196, {
      at: './util.rsh:14:4:application',
      fs: ['at ./util.rsh:54:19:application call to [unknown function] (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:165:21:application call to "avg" (defined at: ./util.rsh:53:30:function exp)', 'at ./n2nn.rsh:164:29:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'add overflow                                                    ',
      who: 'Provider_deposit'
      });
    const v2197 = stdlib.add(v2193, v2194);
    const v2198 = stdlib.div(v2197, stdlib.checkedBigNumberify('./util.rsh:54:28:decimal', stdlib.UInt_max, 2));
    const v2199 = stdlib.le(v2198, v2053);
    stdlib.assert(v2199, {
      at: './util.rsh:166:4:application',
      fs: ['at ./n2nn.rsh:164:29:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'result <= poolBalance                                           ',
      who: 'Provider_deposit'
      });
    v2184 = v2198;
    }
  const v2200 = stdlib.sub(stdlib.UInt_max, v2042);
  const v2201 = stdlib.ge(v2200, v2184);
  stdlib.assert(v2201, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:165:22:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_151" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Provider_deposit'
    });
  const v2204 = ['Provider_deposit0_151', v2146];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053, v2204],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v2147, [[stdlib.checkedBigNumberify('./n2nn.rsh:167:38:decimal', stdlib.UInt_max, 0), v2031], [v2148, v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn1;
      
      switch (v2535[0]) {
        case 'Harvester_harvest0_151': {
          const v2538 = v2535[1];
          
          break;
          }
        case 'Provider_deposit0_151': {
          const v2983 = v2535[1];
          const v2984 = v2983[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 0)];
          const v2985 = v2983[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 1)];
          const v2986 = v2983[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 2)];
          const v3070 = stdlib.add(v2051, v2984);
          sim_r.txns.push({
            amt: v2984,
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2031
            });
          const v3074 = stdlib.add(v2052, v2985);
          sim_r.txns.push({
            amt: v2985,
            kind: 'to',
            tok: v2015
            });
          undefined;
          const v3142 = stdlib.gt(v2984, stdlib.checkedBigNumberify('./n2nn.rsh:173:26:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3142, {
            at: './n2nn.rsh:173:18:application',
            fs: ['at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
            msg: 'amtA > 0',
            who: 'Provider_deposit'
            });
          const v3143 = stdlib.gt(v2985, stdlib.checkedBigNumberify('./n2nn.rsh:174:26:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3143, {
            at: './n2nn.rsh:174:18:application',
            fs: ['at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
            msg: 'amtB > 0',
            who: 'Provider_deposit'
            });
          const v3146 = stdlib.sub(v3070, v2154);
          const v3149 = stdlib.sub(v3074, v2157);
          let v3153;
          if (v2183) {
            const v3156 = stdlib.muldiv(v2984, v2985, v2986);
            const v3157 = stdlib.ge(v3156, v2986);
            stdlib.assert(v3157, {
              at: './util.rsh:185:4:application',
              fs: ['at ./n2nn.rsh:182:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
              msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
              who: 'Provider_deposit'
              });
            const v3158 = stdlib.le(v2986, v2053);
            stdlib.assert(v3158, {
              at: './util.rsh:186:4:application',
              fs: ['at ./n2nn.rsh:182:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
              msg: 'minted <= poolBalance                                           ',
              who: 'Provider_deposit'
              });
            v3153 = v2986;
            }
          else {
            const v3159 = stdlib.sub(v3146, v2984);
            const v3160 = stdlib.sub(v3149, v2985);
            const v3164 = stdlib.muldiv(v2984, v2042, v3159);
            const v3165 = stdlib.muldiv(v2985, v2042, v3160);
            const v3168 = stdlib.add(v3164, v3165);
            const v3169 = stdlib.div(v3168, stdlib.checkedBigNumberify('./util.rsh:54:28:decimal', stdlib.UInt_max, 2));
            const v3170 = stdlib.le(v3169, v2053);
            stdlib.assert(v3170, {
              at: './util.rsh:166:4:application',
              fs: ['at ./n2nn.rsh:183:34:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
              msg: 'result <= poolBalance                                           ',
              who: 'Provider_deposit'
              });
            v3153 = v3169;
            }
          const v3174 = stdlib.sub(v2053, v3153);
          sim_r.txns.push({
            amt: v3153,
            kind: 'from',
            to: v2534,
            tok: v2031
            });
          const v3175 = stdlib.add(v2042, v3153);
          const v3179 = await txn1.getOutput('Provider_deposit', 'v3153', ctc1, v3153);
          
          const v6885 = v3175;
          const v6886 = v2043;
          const v6887 = v2044;
          const v6889 = v3070;
          const v6890 = v3074;
          const v6891 = v3174;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_151': {
          const v3439 = v2535[1];
          
          break;
          }
        case 'Trader_swapAForB0_151': {
          const v3889 = v2535[1];
          
          break;
          }
        case 'Trader_swapBForA0_151': {
          const v4339 = v2535[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn1;
  switch (v2535[0]) {
    case 'Harvester_harvest0_151': {
      const v2538 = v2535[1];
      return;
      break;
      }
    case 'Provider_deposit0_151': {
      const v2983 = v2535[1];
      const v2984 = v2983[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 0)];
      const v2985 = v2983[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 1)];
      const v2986 = v2983[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 2)];
      const v3070 = stdlib.add(v2051, v2984);
      ;
      ;
      const v3074 = stdlib.add(v2052, v2985);
      ;
      undefined;
      const v3142 = stdlib.gt(v2984, stdlib.checkedBigNumberify('./n2nn.rsh:173:26:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v3142, {
        at: './n2nn.rsh:173:18:application',
        fs: ['at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
        msg: 'amtA > 0',
        who: 'Provider_deposit'
        });
      const v3143 = stdlib.gt(v2985, stdlib.checkedBigNumberify('./n2nn.rsh:174:26:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v3143, {
        at: './n2nn.rsh:174:18:application',
        fs: ['at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
        msg: 'amtB > 0',
        who: 'Provider_deposit'
        });
      const v3146 = stdlib.sub(v3070, v2154);
      const v3149 = stdlib.sub(v3074, v2157);
      let v3153;
      if (v2183) {
        const v3156 = stdlib.muldiv(v2984, v2985, v2986);
        const v3157 = stdlib.ge(v3156, v2986);
        stdlib.assert(v3157, {
          at: './util.rsh:185:4:application',
          fs: ['at ./n2nn.rsh:182:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
          who: 'Provider_deposit'
          });
        const v3158 = stdlib.le(v2986, v2053);
        stdlib.assert(v3158, {
          at: './util.rsh:186:4:application',
          fs: ['at ./n2nn.rsh:182:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'minted <= poolBalance                                           ',
          who: 'Provider_deposit'
          });
        v3153 = v2986;
        }
      else {
        const v3159 = stdlib.sub(v3146, v2984);
        const v3160 = stdlib.sub(v3149, v2985);
        const v3164 = stdlib.muldiv(v2984, v2042, v3159);
        const v3165 = stdlib.muldiv(v2985, v2042, v3160);
        const v3168 = stdlib.add(v3164, v3165);
        const v3169 = stdlib.div(v3168, stdlib.checkedBigNumberify('./util.rsh:54:28:decimal', stdlib.UInt_max, 2));
        const v3170 = stdlib.le(v3169, v2053);
        stdlib.assert(v3170, {
          at: './util.rsh:166:4:application',
          fs: ['at ./n2nn.rsh:183:34:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'result <= poolBalance                                           ',
          who: 'Provider_deposit'
          });
        v3153 = v3169;
        }
      const v3174 = stdlib.sub(v2053, v3153);
      ;
      const v3175 = stdlib.add(v2042, v3153);
      const v3179 = await txn1.getOutput('Provider_deposit', 'v3153', ctc1, v3153);
      if (v1407) {
        stdlib.protect(ctc6, await interact.out(v2983, v3179), {
          at: './n2nn.rsh:147:12:application',
          fs: ['at ./n2nn.rsh:147:12:application call to [unknown function] (defined at: ./n2nn.rsh:147:12:function exp)', 'at ./n2nn.rsh:192:22:application call to "depositDone" (defined at: ./n2nn.rsh:172:46:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v6885 = v3175;
      const v6886 = v2043;
      const v6887 = v2044;
      const v6889 = v3070;
      const v6890 = v3074;
      const v6891 = v3174;
      return;
      
      break;
      }
    case 'Provider_withdraw0_151': {
      const v3439 = v2535[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_151': {
      const v3889 = v2535[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_151': {
      const v4339 = v2535[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc1
    });
  const ctc9 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc7], ['newProtocolFee', ctc8], ['newProviderFee', ctc8]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_151: ctc10,
    Provider_deposit0_151: ctc11,
    Provider_withdraw0_151: ctc5,
    Trader_swapAForB0_151: ctc12,
    Trader_swapBForA0_151: ctc12
    });
  const ctc14 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
  
  const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1]);
  const v2120 = stdlib.protect(ctc5, await interact.in(), {
    at: './n2nn.rsh:1:23:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_151" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v2121 = v2120[stdlib.checkedBigNumberify('./n2nn.rsh:101:11:spread', stdlib.UInt_max, 0)];
  const v2123 = stdlib.gt(v2042, stdlib.checkedBigNumberify('./n2nn.rsh:103:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2123, {
    at: './n2nn.rsh:103:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_151" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'There has been liquidity dispensed.',
    who: 'Provider_withdraw'
    });
  const v2124 = stdlib.le(v2121, v2042);
  stdlib.assert(v2124, {
    at: './n2nn.rsh:104:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_151" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'liquidity less than total',
    who: 'Provider_withdraw'
    });
  const v2126 = v2043.balA;
  const v2127 = stdlib.sub(v2051, v2126);
  const v2129 = v2043.balB;
  const v2130 = stdlib.sub(v2052, v2129);
  const v2131 = stdlib.gt(v2127, stdlib.checkedBigNumberify('./n2nn.rsh:107:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2131, {
    at: './n2nn.rsh:107:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_151" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2132 = stdlib.gt(v2130, stdlib.checkedBigNumberify('./n2nn.rsh:108:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2132, {
    at: './n2nn.rsh:108:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_151" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2133 = stdlib.muldiv(v2121, v2127, v2042);
  const v2134 = stdlib.le(v2133, v2127);
  stdlib.assert(v2134, {
    at: './n2nn.rsh:110:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_151" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2135 = stdlib.muldiv(v2121, v2130, v2042);
  const v2136 = stdlib.le(v2135, v2130);
  stdlib.assert(v2136, {
    at: './n2nn.rsh:112:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_151" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2138 = stdlib.sub(stdlib.UInt_max, v2053);
  const v2139 = stdlib.ge(v2138, v2121);
  stdlib.assert(v2139, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:113:22:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_151" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Provider_withdraw'
    });
  const v2142 = ['Provider_withdraw0_151', v2120];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053, v2142],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./n2nn.rsh:116:28:decimal', stdlib.UInt_max, 0), [[v2121, v2031], [stdlib.checkedBigNumberify('./n2nn.rsh:116:54:decimal', stdlib.UInt_max, 0), v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn1;
      
      switch (v2535[0]) {
        case 'Harvester_harvest0_151': {
          const v2538 = v2535[1];
          
          break;
          }
        case 'Provider_deposit0_151': {
          const v2983 = v2535[1];
          
          break;
          }
        case 'Provider_withdraw0_151': {
          const v3439 = v2535[1];
          const v3440 = v3439[stdlib.checkedBigNumberify('./n2nn.rsh:101:11:spread', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v3522 = stdlib.add(v2053, v3440);
          sim_r.txns.push({
            amt: v3440,
            kind: 'to',
            tok: v2031
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2015
            });
          undefined;
          const v3647 = stdlib.muldiv(v3440, v2127, v2042);
          const v3648 = stdlib.le(v3647, v2127);
          stdlib.assert(v3648, {
            at: './n2nn.rsh:131:18:application',
            fs: ['at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
            msg: null,
            who: 'Provider_withdraw'
            });
          const v3652 = stdlib.sub(v2051, v3647);
          sim_r.txns.push({
            amt: v3647,
            kind: 'from',
            to: v2534,
            tok: undefined
            });
          const v3653 = stdlib.muldiv(v3440, v2130, v2042);
          const v3654 = stdlib.le(v3653, v2130);
          stdlib.assert(v3654, {
            at: './n2nn.rsh:136:18:application',
            fs: ['at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
            msg: null,
            who: 'Provider_withdraw'
            });
          const v3658 = stdlib.sub(v2052, v3653);
          sim_r.txns.push({
            amt: v3653,
            kind: 'from',
            to: v2534,
            tok: v2015
            });
          const v3659 = stdlib.sub(v2042, v3440);
          const v3660 = [v3647, v3653];
          const v3661 = await txn1.getOutput('Provider_withdraw', 'v3660', ctc14, v3660);
          
          const v6927 = v3659;
          const v6928 = v2043;
          const v6929 = v2044;
          const v6931 = v3652;
          const v6932 = v3658;
          const v6933 = v3522;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_151': {
          const v3889 = v2535[1];
          
          break;
          }
        case 'Trader_swapBForA0_151': {
          const v4339 = v2535[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn1;
  switch (v2535[0]) {
    case 'Harvester_harvest0_151': {
      const v2538 = v2535[1];
      return;
      break;
      }
    case 'Provider_deposit0_151': {
      const v2983 = v2535[1];
      return;
      break;
      }
    case 'Provider_withdraw0_151': {
      const v3439 = v2535[1];
      const v3440 = v3439[stdlib.checkedBigNumberify('./n2nn.rsh:101:11:spread', stdlib.UInt_max, 0)];
      ;
      const v3522 = stdlib.add(v2053, v3440);
      ;
      ;
      undefined;
      const v3647 = stdlib.muldiv(v3440, v2127, v2042);
      const v3648 = stdlib.le(v3647, v2127);
      stdlib.assert(v3648, {
        at: './n2nn.rsh:131:18:application',
        fs: ['at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
        msg: null,
        who: 'Provider_withdraw'
        });
      const v3652 = stdlib.sub(v2051, v3647);
      ;
      const v3653 = stdlib.muldiv(v3440, v2130, v2042);
      const v3654 = stdlib.le(v3653, v2130);
      stdlib.assert(v3654, {
        at: './n2nn.rsh:136:18:application',
        fs: ['at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
        msg: null,
        who: 'Provider_withdraw'
        });
      const v3658 = stdlib.sub(v2052, v3653);
      ;
      const v3659 = stdlib.sub(v2042, v3440);
      const v3660 = [v3647, v3653];
      const v3661 = await txn1.getOutput('Provider_withdraw', 'v3660', ctc14, v3660);
      if (v1407) {
        stdlib.protect(ctc6, await interact.out(v3439, v3661), {
          at: './n2nn.rsh:101:12:application',
          fs: ['at ./n2nn.rsh:101:12:application call to [unknown function] (defined at: ./n2nn.rsh:101:12:function exp)', 'at ./n2nn.rsh:142:23:application call to "withdrawDone" (defined at: ./n2nn.rsh:119:35:function exp)', 'at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v6927 = v3659;
      const v6928 = v2043;
      const v6929 = v2044;
      const v6931 = v3652;
      const v6932 = v3658;
      const v6933 = v3522;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_151': {
      const v3889 = v2535[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_151': {
      const v4339 = v2535[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc1
    });
  const ctc9 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc7], ['newProtocolFee', ctc8], ['newProviderFee', ctc8]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_151: ctc10,
    Provider_deposit0_151: ctc11,
    Provider_withdraw0_151: ctc12,
    Trader_swapAForB0_151: ctc5,
    Trader_swapBForA0_151: ctc5
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  
  const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1]);
  const v2208 = stdlib.protect(ctc5, await interact.in(), {
    at: './n2nn.rsh:1:23:application',
    fs: ['at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v2209 = v2208[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 0)];
  const v2210 = v2208[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 1)];
  const v2213 = v2043.balA;
  const v2214 = stdlib.sub(v2051, v2213);
  const v2216 = v2043.balB;
  const v2217 = stdlib.sub(v2052, v2216);
  const v2218 = stdlib.gt(v2209, stdlib.checkedBigNumberify('./util.rsh:195:18:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2218, {
    at: './util.rsh:195:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Trader_swapAForB'
    });
  const v2219 = stdlib.gt(v2214, v2209);
  stdlib.assert(v2219, {
    at: './util.rsh:196:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) > 0',
    who: 'Trader_swapAForB'
    });
  const v2220 = stdlib.gt(v2217, stdlib.checkedBigNumberify('./util.rsh:197:19:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2220, {
    at: './util.rsh:197:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokB) > 0',
    who: 'Trader_swapAForB'
    });
  const v2221 = stdlib.gt(v2210, stdlib.checkedBigNumberify('./util.rsh:198:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2221, {
    at: './util.rsh:198:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapAForB'
    });
  const v2222 = stdlib.lt(v2210, v2217);
  stdlib.assert(v2222, {
    at: './util.rsh:199:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapAForB'
    });
  const v2224 = stdlib.sub(stdlib.UInt_max, v2051);
  const v2225 = stdlib.ge(v2224, v2209);
  stdlib.assert(v2225, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:201:27:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapAForB'
    });
  const v2226 = stdlib.add(v2051, v2209);
  const v2227 = stdlib.lt(v2226, stdlib.UInt_max);
  stdlib.assert(v2227, {
    at: './util.rsh:202:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v2228 = stdlib.sub(stdlib.UInt_max, v2214);
  const v2229 = stdlib.ge(v2228, v2209);
  stdlib.assert(v2229, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:203:24:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapAForB'
    });
  const v2230 = stdlib.add(v2214, v2209);
  const v2231 = stdlib.lt(v2230, stdlib.UInt_max);
  stdlib.assert(v2231, {
    at: './util.rsh:204:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v2232 = stdlib.lt(v2217, stdlib.UInt_max);
  stdlib.assert(v2232, {
    at: './util.rsh:205:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokB) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v2233 = v2044.fee;
  const v2234 = v2044.lpFee;
  const v2235 = v2044.totFee;
  const v2238 = stdlib.mul(v2233, stdlib.checkedBigNumberify('./util.rsh:117:38:decimal', stdlib.UInt_max, 100));
  const v2239 = stdlib.div(v2238, v2235);
  const v2249 = stdlib.add(v2234, v2233);
  const v2250 = stdlib.eq(v2235, v2249);
  const v2251 = stdlib.lt(v2235, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
  const v2252 = v2250 ? v2251 : false;
  const v2253 = stdlib.gt(v2235, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
  const v2254 = v2252 ? v2253 : false;
  stdlib.assert(v2254, {
    at: './util.rsh:94:4:application',
    fs: ['at ./util.rsh:100:15:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2256 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:102:15:decimal', stdlib.UInt_max, 10000), v2235);
  const v2257 = stdlib.gt(v2256, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2257, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:103:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapAForB'
    });
  const v2258 = stdlib.div(stdlib.UInt_max, v2256);
  const v2259 = stdlib.le(v2209, v2258);
  stdlib.assert(v2259, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:103:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2260 = stdlib.mul(v2209, v2256);
  const v2261 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
  const v2262 = stdlib.le(v2214, v2261);
  stdlib.assert(v2262, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:104:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2263 = stdlib.mul(v2214, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
  const v2264 = stdlib.sub(stdlib.UInt_max, v2263);
  const v2265 = stdlib.ge(v2264, v2260);
  stdlib.assert(v2265, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2266 = stdlib.add(v2263, v2260);
  const v2267 = stdlib.muldiv(v2260, v2217, v2266);
  const v2268 = stdlib.gt(v2267, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2268, {
    at: './util.rsh:122:4:application',
    fs: ['at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut > 0',
    who: 'Trader_swapAForB'
    });
  const v2272 = stdlib.gt(v2230, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2272, {
    at: './util.rsh:65:4:application',
    fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2273 = stdlib.muldiv(v2209, v2217, v2230);
  const v2274 = stdlib.ge(v2273, v2267);
  stdlib.assert(v2274, {
    at: './util.rsh:40:4:application',
    fs: ['at ./util.rsh:124:23:application call to "chkS" (defined at: ./util.rsh:39:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'a >= b                                                          ',
    who: 'Trader_swapAForB'
    });
  const v2275 = stdlib.sub(v2273, v2267);
  const v2276 = stdlib.muldiv(v2209, v2233, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
  const v2277 = stdlib.gt(v2239, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2277, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:127:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapAForB'
    });
  const v2278 = stdlib.div(stdlib.UInt_max, v2239);
  const v2279 = stdlib.le(v2275, v2278);
  stdlib.assert(v2279, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:127:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'outFee',
    who: 'Trader_swapAForB'
    });
  const v2280 = stdlib.mul(v2275, v2239);
  const v2281 = stdlib.div(v2280, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
  const v2282 = stdlib.le(v2281, v2275);
  stdlib.assert(v2282, {
    at: './util.rsh:128:4:application',
    fs: ['at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'pFeeOut <= outFee',
    who: 'Trader_swapAForB'
    });
  const v2283 = stdlib.muldiv(v2281, v2214, v2217);
  const v2284 = stdlib.ge(v2283, v2276);
  const v2285 = [v2267, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2281];
  const v2286 = [v2267, v2276, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v2287 = v2284 ? v2285 : v2286;
  const v2288 = v2287[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 0)];
  const v2289 = v2287[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 1)];
  const v2290 = v2287[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 2)];
  const v2291 = stdlib.ge(v2288, v2210);
  stdlib.assert(v2291, {
    at: './util.rsh:208:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut >= expectedOut',
    who: 'Trader_swapAForB'
    });
  const v2292 = stdlib.le(v2288, v2217);
  stdlib.assert(v2292, {
    at: './util.rsh:209:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut <= bal(tokB)',
    who: 'Trader_swapAForB'
    });
  const v2293 = stdlib.sub(v2217, v2288);
  const v2295 = stdlib.sub(v2052, v2288);
  const v2298 = stdlib.sub(stdlib.UInt_max, v2213);
  const v2299 = stdlib.ge(v2298, v2289);
  stdlib.assert(v2299, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:215:25:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2300 = stdlib.add(v2213, v2289);
  const v2301 = stdlib.le(v2300, v2226);
  stdlib.assert(v2301, {
    at: './util.rsh:216:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2302 = stdlib.sub(stdlib.UInt_max, v2216);
  const v2303 = stdlib.ge(v2302, v2290);
  stdlib.assert(v2303, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:217:26:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2304 = stdlib.add(v2216, v2290);
  const v2305 = stdlib.le(v2304, v2295);
  stdlib.assert(v2305, {
    at: './util.rsh:218:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2319 = stdlib.gt(v2214, v2217);
  const v2320 = v2319 ? v2214 : v2217;
  const v2321 = stdlib.lt(v2214, v2217);
  const v2322 = v2321 ? v2214 : v2217;
  const v2323 = stdlib.muldiv(v2230, v2293, v2320);
  const v2324 = stdlib.ge(v2323, v2322);
  stdlib.assert(v2324, {
    at: './util.rsh:225:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_151" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'newK >= market.k',
    who: 'Trader_swapAForB'
    });
  const v2326 = ['Trader_swapAForB0_151', v2208];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053, v2326],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v2209, [[stdlib.checkedBigNumberify('./n2nn.rsh:200:34:decimal', stdlib.UInt_max, 0), v2031], [stdlib.checkedBigNumberify('./n2nn.rsh:200:47:decimal', stdlib.UInt_max, 0), v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn1;
      
      switch (v2535[0]) {
        case 'Harvester_harvest0_151': {
          const v2538 = v2535[1];
          
          break;
          }
        case 'Provider_deposit0_151': {
          const v2983 = v2535[1];
          
          break;
          }
        case 'Provider_withdraw0_151': {
          const v3439 = v2535[1];
          
          break;
          }
        case 'Trader_swapAForB0_151': {
          const v3889 = v2535[1];
          const v3890 = v3889[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 0)];
          const v3891 = v3889[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 1)];
          const v3970 = stdlib.add(v2051, v3890);
          sim_r.txns.push({
            amt: v3890,
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2031
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2015
            });
          undefined;
          const v4122 = stdlib.sub(v3970, v2213);
          const v4126 = stdlib.lt(v3890, v4122);
          stdlib.assert(v4126, {
            at: './util.rsh:231:10:application',
            fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
            msg: 'amtIn <= balance(amtInTok)',
            who: 'Trader_swapAForB'
            });
          const v4127 = stdlib.gt(v3890, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4127, {
            at: './util.rsh:234:10:application',
            fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
            msg: 'amtIn > 0',
            who: 'Trader_swapAForB'
            });
          const v4128 = stdlib.sub(v4122, v3890);
          const v4156 = stdlib.mul(v3890, v2256);
          const v4159 = stdlib.mul(v4128, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
          const v4162 = stdlib.add(v4159, v4156);
          const v4163 = stdlib.muldiv(v4156, v2217, v4162);
          const v4164 = stdlib.gt(v4163, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4164, {
            at: './util.rsh:122:4:application',
            fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
            msg: 'amtOut > 0',
            who: 'Trader_swapAForB'
            });
          const v4167 = stdlib.add(v4128, v3890);
          const v4168 = stdlib.gt(v4167, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4168, {
            at: './util.rsh:65:4:application',
            fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
            msg: null,
            who: 'Trader_swapAForB'
            });
          const v4169 = stdlib.muldiv(v3890, v2217, v4167);
          const v4171 = stdlib.sub(v4169, v4163);
          const v4172 = stdlib.muldiv(v3890, v2233, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
          const v4176 = stdlib.mul(v4171, v2239);
          const v4177 = stdlib.div(v4176, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
          const v4178 = stdlib.le(v4177, v4171);
          stdlib.assert(v4178, {
            at: './util.rsh:128:4:application',
            fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
            msg: 'pFeeOut <= outFee',
            who: 'Trader_swapAForB'
            });
          const v4179 = stdlib.muldiv(v4177, v4128, v2217);
          const v4180 = stdlib.ge(v4179, v4172);
          const v4181 = [v4163, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4177];
          const v4182 = [v4163, v4172, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v4183 = v4180 ? v4181 : v4182;
          const v4184 = v4183[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
          const v4185 = v4183[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
          const v4186 = v4183[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
          const v4187 = stdlib.ge(v4184, v3891);
          stdlib.assert(v4187, {
            at: './util.rsh:236:10:application',
            fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
            msg: 'out >= expectedOut',
            who: 'Trader_swapAForB'
            });
          const v4188 = stdlib.le(v4184, v2217);
          stdlib.assert(v4188, {
            at: './util.rsh:237:10:application',
            fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
            msg: 'amtOut <= bal(out)',
            who: 'Trader_swapAForB'
            });
          const v4192 = stdlib.sub(v2052, v4184);
          sim_r.txns.push({
            amt: v4184,
            kind: 'from',
            to: v2534,
            tok: v2015
            });
          const v4196 = stdlib.sub(v4192, v2216);
          const v4198 = stdlib.gt(v4128, v2217);
          const v4199 = v4198 ? v4128 : v2217;
          const v4200 = stdlib.lt(v4128, v2217);
          const v4201 = v4200 ? v4128 : v2217;
          const v4202 = stdlib.muldiv(v4122, v4196, v4199);
          const v4203 = stdlib.ge(v4202, v4201);
          stdlib.assert(v4203, {
            at: './util.rsh:246:10:application',
            fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
            msg: 'newK >= market.k',
            who: 'Trader_swapAForB'
            });
          const v4207 = stdlib.add(v2213, v4185);
          const v4211 = stdlib.add(v2216, v4186);
          const v4212 = {
            balA: v4207,
            balB: v4211
            };
          const v4217 = [v4184, v4185, v4186, v4196, v4122];
          const v4218 = await txn1.getOutput('Trader_swapAForB', 'v4217', ctc14, v4217);
          
          const v6969 = v2042;
          const v6970 = v4212;
          const v6971 = v2044;
          const v6973 = v3970;
          const v6974 = v4192;
          const v6975 = v2053;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_151': {
          const v4339 = v2535[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn1;
  switch (v2535[0]) {
    case 'Harvester_harvest0_151': {
      const v2538 = v2535[1];
      return;
      break;
      }
    case 'Provider_deposit0_151': {
      const v2983 = v2535[1];
      return;
      break;
      }
    case 'Provider_withdraw0_151': {
      const v3439 = v2535[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_151': {
      const v3889 = v2535[1];
      const v3890 = v3889[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 0)];
      const v3891 = v3889[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 1)];
      const v3970 = stdlib.add(v2051, v3890);
      ;
      ;
      ;
      undefined;
      const v4122 = stdlib.sub(v3970, v2213);
      const v4126 = stdlib.lt(v3890, v4122);
      stdlib.assert(v4126, {
        at: './util.rsh:231:10:application',
        fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'amtIn <= balance(amtInTok)',
        who: 'Trader_swapAForB'
        });
      const v4127 = stdlib.gt(v3890, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4127, {
        at: './util.rsh:234:10:application',
        fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'amtIn > 0',
        who: 'Trader_swapAForB'
        });
      const v4128 = stdlib.sub(v4122, v3890);
      const v4156 = stdlib.mul(v3890, v2256);
      const v4159 = stdlib.mul(v4128, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
      const v4162 = stdlib.add(v4159, v4156);
      const v4163 = stdlib.muldiv(v4156, v2217, v4162);
      const v4164 = stdlib.gt(v4163, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4164, {
        at: './util.rsh:122:4:application',
        fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'amtOut > 0',
        who: 'Trader_swapAForB'
        });
      const v4167 = stdlib.add(v4128, v3890);
      const v4168 = stdlib.gt(v4167, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4168, {
        at: './util.rsh:65:4:application',
        fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v4169 = stdlib.muldiv(v3890, v2217, v4167);
      const v4171 = stdlib.sub(v4169, v4163);
      const v4172 = stdlib.muldiv(v3890, v2233, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
      const v4176 = stdlib.mul(v4171, v2239);
      const v4177 = stdlib.div(v4176, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
      const v4178 = stdlib.le(v4177, v4171);
      stdlib.assert(v4178, {
        at: './util.rsh:128:4:application',
        fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'pFeeOut <= outFee',
        who: 'Trader_swapAForB'
        });
      const v4179 = stdlib.muldiv(v4177, v4128, v2217);
      const v4180 = stdlib.ge(v4179, v4172);
      const v4181 = [v4163, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4177];
      const v4182 = [v4163, v4172, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v4183 = v4180 ? v4181 : v4182;
      const v4184 = v4183[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
      const v4185 = v4183[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
      const v4186 = v4183[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
      const v4187 = stdlib.ge(v4184, v3891);
      stdlib.assert(v4187, {
        at: './util.rsh:236:10:application',
        fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'out >= expectedOut',
        who: 'Trader_swapAForB'
        });
      const v4188 = stdlib.le(v4184, v2217);
      stdlib.assert(v4188, {
        at: './util.rsh:237:10:application',
        fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'amtOut <= bal(out)',
        who: 'Trader_swapAForB'
        });
      const v4192 = stdlib.sub(v2052, v4184);
      ;
      const v4196 = stdlib.sub(v4192, v2216);
      const v4198 = stdlib.gt(v4128, v2217);
      const v4199 = v4198 ? v4128 : v2217;
      const v4200 = stdlib.lt(v4128, v2217);
      const v4201 = v4200 ? v4128 : v2217;
      const v4202 = stdlib.muldiv(v4122, v4196, v4199);
      const v4203 = stdlib.ge(v4202, v4201);
      stdlib.assert(v4203, {
        at: './util.rsh:246:10:application',
        fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'newK >= market.k',
        who: 'Trader_swapAForB'
        });
      const v4207 = stdlib.add(v2213, v4185);
      const v4211 = stdlib.add(v2216, v4186);
      const v4212 = {
        balA: v4207,
        balB: v4211
        };
      const v4217 = [v4184, v4185, v4186, v4196, v4122];
      const v4218 = await txn1.getOutput('Trader_swapAForB', 'v4217', ctc14, v4217);
      if (v1407) {
        stdlib.protect(ctc6, await interact.out(v3889, v4218), {
          at: './n2nn.rsh:197:12:application',
          fs: ['at ./n2nn.rsh:197:12:application call to [unknown function] (defined at: ./n2nn.rsh:197:12:function exp)', 'at ./util.rsh:253:12:application call to "tradeDone" (defined at: ./n2nn.rsh:203:40:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v6969 = v2042;
      const v6970 = v4212;
      const v6971 = v2044;
      const v6973 = v3970;
      const v6974 = v4192;
      const v6975 = v2053;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_151': {
      const v4339 = v2535[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc1
    });
  const ctc9 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc7], ['newProtocolFee', ctc8], ['newProviderFee', ctc8]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_151: ctc10,
    Provider_deposit0_151: ctc11,
    Provider_withdraw0_151: ctc12,
    Trader_swapAForB0_151: ctc5,
    Trader_swapBForA0_151: ctc5
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  
  const [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1]);
  const v2330 = stdlib.protect(ctc5, await interact.in(), {
    at: './n2nn.rsh:1:23:application',
    fs: ['at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v2331 = v2330[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 0)];
  const v2332 = v2330[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 1)];
  const v2335 = v2043.balB;
  const v2336 = stdlib.sub(v2052, v2335);
  const v2338 = v2043.balA;
  const v2339 = stdlib.sub(v2051, v2338);
  const v2340 = stdlib.gt(v2331, stdlib.checkedBigNumberify('./util.rsh:195:18:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2340, {
    at: './util.rsh:195:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Trader_swapBForA'
    });
  const v2341 = stdlib.gt(v2336, v2331);
  stdlib.assert(v2341, {
    at: './util.rsh:196:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) > 0',
    who: 'Trader_swapBForA'
    });
  const v2342 = stdlib.gt(v2339, stdlib.checkedBigNumberify('./util.rsh:197:19:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2342, {
    at: './util.rsh:197:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokB) > 0',
    who: 'Trader_swapBForA'
    });
  const v2343 = stdlib.gt(v2332, stdlib.checkedBigNumberify('./util.rsh:198:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2343, {
    at: './util.rsh:198:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapBForA'
    });
  const v2344 = stdlib.lt(v2332, v2339);
  stdlib.assert(v2344, {
    at: './util.rsh:199:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapBForA'
    });
  const v2346 = stdlib.sub(stdlib.UInt_max, v2052);
  const v2347 = stdlib.ge(v2346, v2331);
  stdlib.assert(v2347, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:201:27:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapBForA'
    });
  const v2348 = stdlib.add(v2052, v2331);
  const v2349 = stdlib.lt(v2348, stdlib.UInt_max);
  stdlib.assert(v2349, {
    at: './util.rsh:202:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v2350 = stdlib.sub(stdlib.UInt_max, v2336);
  const v2351 = stdlib.ge(v2350, v2331);
  stdlib.assert(v2351, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:203:24:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapBForA'
    });
  const v2352 = stdlib.add(v2336, v2331);
  const v2353 = stdlib.lt(v2352, stdlib.UInt_max);
  stdlib.assert(v2353, {
    at: './util.rsh:204:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v2354 = stdlib.lt(v2339, stdlib.UInt_max);
  stdlib.assert(v2354, {
    at: './util.rsh:205:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokB) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v2355 = v2044.fee;
  const v2356 = v2044.lpFee;
  const v2357 = v2044.totFee;
  const v2360 = stdlib.mul(v2355, stdlib.checkedBigNumberify('./util.rsh:117:38:decimal', stdlib.UInt_max, 100));
  const v2361 = stdlib.div(v2360, v2357);
  const v2371 = stdlib.add(v2356, v2355);
  const v2372 = stdlib.eq(v2357, v2371);
  const v2373 = stdlib.lt(v2357, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
  const v2374 = v2372 ? v2373 : false;
  const v2375 = stdlib.gt(v2357, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
  const v2376 = v2374 ? v2375 : false;
  stdlib.assert(v2376, {
    at: './util.rsh:94:4:application',
    fs: ['at ./util.rsh:100:15:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2378 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:102:15:decimal', stdlib.UInt_max, 10000), v2357);
  const v2379 = stdlib.gt(v2378, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2379, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:103:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapBForA'
    });
  const v2380 = stdlib.div(stdlib.UInt_max, v2378);
  const v2381 = stdlib.le(v2331, v2380);
  stdlib.assert(v2381, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:103:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2382 = stdlib.mul(v2331, v2378);
  const v2383 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
  const v2384 = stdlib.le(v2336, v2383);
  stdlib.assert(v2384, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:104:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2385 = stdlib.mul(v2336, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
  const v2386 = stdlib.sub(stdlib.UInt_max, v2385);
  const v2387 = stdlib.ge(v2386, v2382);
  stdlib.assert(v2387, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2388 = stdlib.add(v2385, v2382);
  const v2389 = stdlib.muldiv(v2382, v2339, v2388);
  const v2390 = stdlib.gt(v2389, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2390, {
    at: './util.rsh:122:4:application',
    fs: ['at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut > 0',
    who: 'Trader_swapBForA'
    });
  const v2394 = stdlib.gt(v2352, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2394, {
    at: './util.rsh:65:4:application',
    fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2395 = stdlib.muldiv(v2331, v2339, v2352);
  const v2396 = stdlib.ge(v2395, v2389);
  stdlib.assert(v2396, {
    at: './util.rsh:40:4:application',
    fs: ['at ./util.rsh:124:23:application call to "chkS" (defined at: ./util.rsh:39:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'a >= b                                                          ',
    who: 'Trader_swapBForA'
    });
  const v2397 = stdlib.sub(v2395, v2389);
  const v2398 = stdlib.muldiv(v2331, v2355, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
  const v2399 = stdlib.gt(v2361, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2399, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:127:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapBForA'
    });
  const v2400 = stdlib.div(stdlib.UInt_max, v2361);
  const v2401 = stdlib.le(v2397, v2400);
  stdlib.assert(v2401, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:127:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'outFee',
    who: 'Trader_swapBForA'
    });
  const v2402 = stdlib.mul(v2397, v2361);
  const v2403 = stdlib.div(v2402, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
  const v2404 = stdlib.le(v2403, v2397);
  stdlib.assert(v2404, {
    at: './util.rsh:128:4:application',
    fs: ['at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'pFeeOut <= outFee',
    who: 'Trader_swapBForA'
    });
  const v2405 = stdlib.muldiv(v2403, v2336, v2339);
  const v2406 = stdlib.ge(v2405, v2398);
  const v2407 = [v2389, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2403];
  const v2408 = [v2389, v2398, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v2409 = v2406 ? v2407 : v2408;
  const v2410 = v2409[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 0)];
  const v2411 = v2409[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 1)];
  const v2412 = v2409[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 2)];
  const v2413 = stdlib.ge(v2410, v2332);
  stdlib.assert(v2413, {
    at: './util.rsh:208:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut >= expectedOut',
    who: 'Trader_swapBForA'
    });
  const v2414 = stdlib.le(v2410, v2339);
  stdlib.assert(v2414, {
    at: './util.rsh:209:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut <= bal(tokB)',
    who: 'Trader_swapBForA'
    });
  const v2415 = stdlib.sub(v2339, v2410);
  const v2417 = stdlib.sub(v2051, v2410);
  const v2420 = stdlib.sub(stdlib.UInt_max, v2335);
  const v2421 = stdlib.ge(v2420, v2411);
  stdlib.assert(v2421, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:215:25:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2422 = stdlib.add(v2335, v2411);
  const v2423 = stdlib.le(v2422, v2348);
  stdlib.assert(v2423, {
    at: './util.rsh:216:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2424 = stdlib.sub(stdlib.UInt_max, v2338);
  const v2425 = stdlib.ge(v2424, v2412);
  stdlib.assert(v2425, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:217:26:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2426 = stdlib.add(v2338, v2412);
  const v2427 = stdlib.le(v2426, v2417);
  stdlib.assert(v2427, {
    at: './util.rsh:218:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2441 = stdlib.gt(v2336, v2339);
  const v2442 = v2441 ? v2336 : v2339;
  const v2443 = stdlib.lt(v2336, v2339);
  const v2444 = v2443 ? v2336 : v2339;
  const v2445 = stdlib.muldiv(v2352, v2415, v2442);
  const v2446 = stdlib.ge(v2445, v2444);
  stdlib.assert(v2446, {
    at: './util.rsh:225:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_151" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'newK >= market.k',
    who: 'Trader_swapBForA'
    });
  const v2448 = ['Trader_swapBForA0_151', v2330];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2015, v2031, v2040, v2042, v2043, v2044, v2051, v2052, v2053, v2448],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./n2nn.rsh:218:26:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./n2nn.rsh:218:31:decimal', stdlib.UInt_max, 0), v2031], [v2331, v2015]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn1;
      
      switch (v2535[0]) {
        case 'Harvester_harvest0_151': {
          const v2538 = v2535[1];
          
          break;
          }
        case 'Provider_deposit0_151': {
          const v2983 = v2535[1];
          
          break;
          }
        case 'Provider_withdraw0_151': {
          const v3439 = v2535[1];
          
          break;
          }
        case 'Trader_swapAForB0_151': {
          const v3889 = v2535[1];
          
          break;
          }
        case 'Trader_swapBForA0_151': {
          const v4339 = v2535[1];
          const v4340 = v4339[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 0)];
          const v4341 = v4339[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 1)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2031
            });
          const v4424 = stdlib.add(v2052, v4340);
          sim_r.txns.push({
            amt: v4340,
            kind: 'to',
            tok: v2015
            });
          undefined;
          const v4683 = stdlib.sub(v4424, v2335);
          const v4687 = stdlib.lt(v4340, v4683);
          stdlib.assert(v4687, {
            at: './util.rsh:231:10:application',
            fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
            msg: 'amtIn <= balance(amtInTok)',
            who: 'Trader_swapBForA'
            });
          const v4688 = stdlib.gt(v4340, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4688, {
            at: './util.rsh:234:10:application',
            fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
            msg: 'amtIn > 0',
            who: 'Trader_swapBForA'
            });
          const v4689 = stdlib.sub(v4683, v4340);
          const v4717 = stdlib.mul(v4340, v2378);
          const v4720 = stdlib.mul(v4689, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
          const v4723 = stdlib.add(v4720, v4717);
          const v4724 = stdlib.muldiv(v4717, v2339, v4723);
          const v4725 = stdlib.gt(v4724, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4725, {
            at: './util.rsh:122:4:application',
            fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
            msg: 'amtOut > 0',
            who: 'Trader_swapBForA'
            });
          const v4728 = stdlib.add(v4689, v4340);
          const v4729 = stdlib.gt(v4728, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4729, {
            at: './util.rsh:65:4:application',
            fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
            msg: null,
            who: 'Trader_swapBForA'
            });
          const v4730 = stdlib.muldiv(v4340, v2339, v4728);
          const v4732 = stdlib.sub(v4730, v4724);
          const v4733 = stdlib.muldiv(v4340, v2355, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
          const v4737 = stdlib.mul(v4732, v2361);
          const v4738 = stdlib.div(v4737, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
          const v4739 = stdlib.le(v4738, v4732);
          stdlib.assert(v4739, {
            at: './util.rsh:128:4:application',
            fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
            msg: 'pFeeOut <= outFee',
            who: 'Trader_swapBForA'
            });
          const v4740 = stdlib.muldiv(v4738, v4689, v2339);
          const v4741 = stdlib.ge(v4740, v4733);
          const v4742 = [v4724, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4738];
          const v4743 = [v4724, v4733, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v4744 = v4741 ? v4742 : v4743;
          const v4745 = v4744[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
          const v4746 = v4744[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
          const v4747 = v4744[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
          const v4748 = stdlib.ge(v4745, v4341);
          stdlib.assert(v4748, {
            at: './util.rsh:236:10:application',
            fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
            msg: 'out >= expectedOut',
            who: 'Trader_swapBForA'
            });
          const v4749 = stdlib.le(v4745, v2339);
          stdlib.assert(v4749, {
            at: './util.rsh:237:10:application',
            fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
            msg: 'amtOut <= bal(out)',
            who: 'Trader_swapBForA'
            });
          const v4753 = stdlib.sub(v2051, v4745);
          sim_r.txns.push({
            amt: v4745,
            kind: 'from',
            to: v2534,
            tok: undefined
            });
          const v4757 = stdlib.sub(v4753, v2338);
          const v4759 = stdlib.gt(v4689, v2339);
          const v4760 = v4759 ? v4689 : v2339;
          const v4761 = stdlib.lt(v4689, v2339);
          const v4762 = v4761 ? v4689 : v2339;
          const v4763 = stdlib.muldiv(v4683, v4757, v4760);
          const v4764 = stdlib.ge(v4763, v4762);
          stdlib.assert(v4764, {
            at: './util.rsh:246:10:application',
            fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
            msg: 'newK >= market.k',
            who: 'Trader_swapBForA'
            });
          const v4768 = stdlib.add(v2338, v4747);
          const v4772 = stdlib.add(v2335, v4746);
          const v4773 = {
            balA: v4768,
            balB: v4772
            };
          const v4778 = [v4745, v4746, v4747, v4757, v4683];
          const v4779 = await txn1.getOutput('Trader_swapBForA', 'v4778', ctc14, v4778);
          
          const v7011 = v2042;
          const v7012 = v4773;
          const v7013 = v2044;
          const v7015 = v4753;
          const v7016 = v4424;
          const v7017 = v2053;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2535], secs: v2537, time: v2536, didSend: v1407, from: v2534 } = txn1;
  switch (v2535[0]) {
    case 'Harvester_harvest0_151': {
      const v2538 = v2535[1];
      return;
      break;
      }
    case 'Provider_deposit0_151': {
      const v2983 = v2535[1];
      return;
      break;
      }
    case 'Provider_withdraw0_151': {
      const v3439 = v2535[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_151': {
      const v3889 = v2535[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_151': {
      const v4339 = v2535[1];
      const v4340 = v4339[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 0)];
      const v4341 = v4339[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 1)];
      ;
      ;
      const v4424 = stdlib.add(v2052, v4340);
      ;
      undefined;
      const v4683 = stdlib.sub(v4424, v2335);
      const v4687 = stdlib.lt(v4340, v4683);
      stdlib.assert(v4687, {
        at: './util.rsh:231:10:application',
        fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'amtIn <= balance(amtInTok)',
        who: 'Trader_swapBForA'
        });
      const v4688 = stdlib.gt(v4340, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4688, {
        at: './util.rsh:234:10:application',
        fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'amtIn > 0',
        who: 'Trader_swapBForA'
        });
      const v4689 = stdlib.sub(v4683, v4340);
      const v4717 = stdlib.mul(v4340, v2378);
      const v4720 = stdlib.mul(v4689, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
      const v4723 = stdlib.add(v4720, v4717);
      const v4724 = stdlib.muldiv(v4717, v2339, v4723);
      const v4725 = stdlib.gt(v4724, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4725, {
        at: './util.rsh:122:4:application',
        fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'amtOut > 0',
        who: 'Trader_swapBForA'
        });
      const v4728 = stdlib.add(v4689, v4340);
      const v4729 = stdlib.gt(v4728, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4729, {
        at: './util.rsh:65:4:application',
        fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v4730 = stdlib.muldiv(v4340, v2339, v4728);
      const v4732 = stdlib.sub(v4730, v4724);
      const v4733 = stdlib.muldiv(v4340, v2355, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
      const v4737 = stdlib.mul(v4732, v2361);
      const v4738 = stdlib.div(v4737, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
      const v4739 = stdlib.le(v4738, v4732);
      stdlib.assert(v4739, {
        at: './util.rsh:128:4:application',
        fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'pFeeOut <= outFee',
        who: 'Trader_swapBForA'
        });
      const v4740 = stdlib.muldiv(v4738, v4689, v2339);
      const v4741 = stdlib.ge(v4740, v4733);
      const v4742 = [v4724, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4738];
      const v4743 = [v4724, v4733, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v4744 = v4741 ? v4742 : v4743;
      const v4745 = v4744[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
      const v4746 = v4744[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
      const v4747 = v4744[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
      const v4748 = stdlib.ge(v4745, v4341);
      stdlib.assert(v4748, {
        at: './util.rsh:236:10:application',
        fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'out >= expectedOut',
        who: 'Trader_swapBForA'
        });
      const v4749 = stdlib.le(v4745, v2339);
      stdlib.assert(v4749, {
        at: './util.rsh:237:10:application',
        fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'amtOut <= bal(out)',
        who: 'Trader_swapBForA'
        });
      const v4753 = stdlib.sub(v2051, v4745);
      ;
      const v4757 = stdlib.sub(v4753, v2338);
      const v4759 = stdlib.gt(v4689, v2339);
      const v4760 = v4759 ? v4689 : v2339;
      const v4761 = stdlib.lt(v4689, v2339);
      const v4762 = v4761 ? v4689 : v2339;
      const v4763 = stdlib.muldiv(v4683, v4757, v4760);
      const v4764 = stdlib.ge(v4763, v4762);
      stdlib.assert(v4764, {
        at: './util.rsh:246:10:application',
        fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'newK >= market.k',
        who: 'Trader_swapBForA'
        });
      const v4768 = stdlib.add(v2338, v4747);
      const v4772 = stdlib.add(v2335, v4746);
      const v4773 = {
        balA: v4768,
        balB: v4772
        };
      const v4778 = [v4745, v4746, v4747, v4757, v4683];
      const v4779 = await txn1.getOutput('Trader_swapBForA', 'v4778', ctc14, v4778);
      if (v1407) {
        stdlib.protect(ctc6, await interact.out(v4339, v4779), {
          at: './n2nn.rsh:215:12:application',
          fs: ['at ./n2nn.rsh:215:12:application call to [unknown function] (defined at: ./n2nn.rsh:215:12:function exp)', 'at ./util.rsh:253:12:application call to "tradeDone" (defined at: ./n2nn.rsh:221:40:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v7011 = v2042;
      const v7012 = v4773;
      const v7013 = v2044;
      const v7015 = v4753;
      const v7016 = v4424;
      const v7017 = v2053;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    sigs: [`Harvester_harvest((address,(byte,byte[32]),(byte,byte[8]),(byte,byte[8])))(uint64,uint64)`, `Provider_deposit(uint64,uint64,uint64)uint64`, `Provider_withdraw(uint64)uint64[2]`, `Trader_swapAForB(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`]
    },
  appApproval: `BSARAAEIBJBOIGQDAhD///////////8BoI0G4dSZ0QHZ7/m4A+bEyrgMp9LZngEwJgUBAAgAAAAAAAAAAAABAUMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIjUAMRhBC14qZEkiWzUBJFs1AjYaABdJQQEnIjUDIzUFSSEMDEAAk0khDQxAAHFJIQ4MQAASIQ4SRDYaATX/KDT/UDUEQgEbIQ0SRDYaATYaAlA2GgNQNf8rNP9QgDsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFA1BEIAwyEMEkQ2GgE2GgJQNf+AAQM0/1AnBFA1BEIAqEkhDwxAABshDxJENhoBNhoCUDX/gAEENP9QJwRQNQRCAIaB29jtRRJENhoBNf+AAQI0/1CASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFA1BEIAITYaARc2GgIXNQM2GgM1BEkhCAxAB3xJIQcMQAd0IQcSRCU0ARJENANJIhJMNAISEUQoZCtkUEkiWzX/SSRbNf5JVxAQNf1JIQVbNfxJVygQNftJVzg4NfpJgXBbNflJgXhbNfhJgYABWzX3SDQESRWBVBJESTX2SIAEXWqlOTT2ULA09kk19SJVSSEIDEAEcUkhBwxAA4pJJQxAAcUlEkQ09VcBEEk19CJbNfM0+DTzCDXyNPNJQQAlNABJIwg1AExLATgSEkQ0/0sBOBESRCVLATgQEkQyCksBOBQSREg0+yRbNfE08jTxCTXwNPsiWzXvNPk07wk17jTzNPAMRDTzIg1ENPA08wk17TT6IQVbNew0+iEQWzXrNPMhBDTrCQtJNeo07h0iNO0hBAs06ggfSEhMIhJESTXpIg1ENO008whJNegiDUQ08zTuHSI06B9ISEwiEkQ06Qk15zTzNOwdIiEEH0hITCISRDXmNOc07CEGCzTrCgshBgpJNeU05w5ENOkWNOYWUClQNOkWKVA05RZQNOU07R0iNO4fSEhMIhJENOYPTUk15CJbNeM05CRbNeI05CEJWzXhNOM09CRbD0Q04zTuDkQ0+TTjCTXgNONJQQAMsbIII7IQMQCyB7MiSDTgNO8JNd808DTfHSI07jTtSTTuDU0fSEhMIhJENO407Uk07gxND0SACAAAAAAAABKqNOMWNOIWUDThFlA03xZQNPAWUFCwNOMWNOIWUDThFlA03xZQNPAWUEk1BjT/NP40/TT8NO804QgWNPE04ggWUDT6MgY04DTyNPdCB0hINPVXARBJNfQiWzXzNPk08wg18jTzSUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESDT7Ils18TTyNPEJNfA0+yRbNe80+DTvCTXuNPM08AxENPMiDUQ08DTzCTXtNPohBVs17DT6IRBbNes08yEENOsJC0k16jTuHSI07SEECzTqCB9ISEwiEkRJNekiDUQ07TTzCEk16CINRDTzNO4dIjToH0hITCISRDTpCTXnNPM07B0iIQQfSEhMIhJENeY05zTsIQYLNOsKCyEGCkk15TTnDkQ06RY05hZQKVA06RYpUDTlFlA05TTtHSI07h9ISEwiEkQ05g9NSTXkIls14zTkJFs14jTkIQlbNeE04zT0JFsPRDTjNO4ORDT4NOMJNeA040lBABCxshIlshAxALIUNP+yEbMiSDTgNO8JNd808DTfHSI07jTtSTTuDU0fSEhMIhJENO407Uk07gxND0SACAAAAAAAABB5NOMWNOIWUDThFlA03xZQNPAWUFCwNOMWNOIWUDThFlA03xZQNPAWUEk1BjT/NP40/TT8NPE04ggWNO804QgWUDT6MgY08jTgNPdCBYlINPVXAQhJNfQXNfM080lBACU0AEkjCDUATEsBOBISRDT+SwE4ERJEJUsBOBASRDIKSwE4FBJESDT5NPsiWwk18jT4NPskWwk18TTzNPIdIjT8H0hITCISREk18DTyDkQ08ElBAAyxsggjshAxALIHsyJINPM08R0iNPwfSEhMIhJESTXvNPEORDTvSUEAELGyEiWyEDEAshQ0/7IRsyJIgAgAAAAAAAAOTDTwFjTvFlBQsDTwFjTvFlBJNQY0/zT+NP00/DTzCTT7NPoyBjT5NPAJNPg07wk09zTzCEIEqUkjDEABL0g09VcBGEk19CJbNfM09CRbNfI09CEJWzXxNPk08wg18DTzSUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESDT4NPIINe808klBACU0AEkjCDUATEsBOBISRDT/SwE4ERJEJUsBOBASRDIKSwE4FBJESDTzIg1ENPIiDUQ0/CISQQAgNPM08h0iNPEfSEhMIhJENPEPRDTxNPcORDTxNe5CAD008zT8HSI08DT7IlsJNPMJH0hITCISRDTyNPwdIjTvNPskWwk08gkfSEhMIhJECCEICkk17TT3DkQ07TXuNO5JQQAQsbISJbIQMQCyFDT+shGzIkiACAAAAAAAAAxRNO4WULA07kkWNQY0/zT+NP00/DTuCDT7NPoyBjTwNO809zTuCUIDdEg09VcBUzX0NPQ18zT6VwAgNfI0+yJbNfE0+yRbNfA081cAIDXvMQA08hJENPk08Qk17jTxSUEADLGyCCOyEDTvsgezIkgyCmAyCngJNO4JNe007UlBAAyxsggjshA077IHsyJINPBJQQAQsbISJbIQNO+yFDT/shGzIkiACAAAAAAAAApYNPEWNPAWUFCwNPEWNPAWUEk1BjTzVyAhSTXrIlVJIwxAABAjEkQ061cBIEk16jXsQgAISDTyNexCAAA081dBCUk16iJVSSMMQAAPIxJENOojW0k16TXrQgALSDT6IQVbNetCAAA081dKCUk16SJVSSMMQAAPIxJENOkjW0k16DXqQgALSDT6gShbNepCAAA06zTqCEk16TTqNOsIEjTpIQYMEDTpIg0QRDT/NP40/TT8NP007DTrFlA06hZQNOkWUDIGNO007gg07Qk0+DTwCTT3QgIZSEkjDEAAikgjNAESRDQDSSISTDQCEhFEKGRJVwAgNf9JIQVbNf5JVyggNf1JgUhbNfxINARJFSISREiABJqLkXSwNP8xABJEgBAAAAAAAAAAAAAAAAAAAAAANfs0/jT8NPsiNPs0/YAIAAAAAAAAAAVQgAgAAAAAAAAAGVCACAAAAAAAAAAeUDIGIiIhCkIBiEgiNAESRDQDSSISTDQCEhFEKkg0BEkVgVASREkiWzX/SVcIIDX+SVcoCDX9SVcwIDX8SIAEcAheYTT/FlA0/lA0/VA0/FCwIQtJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIIQtJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIIrGyEiWyEDIKshQ0/7IRsyJIIQohBA1EIQtJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIsSEHshAhCrIigQayIzT9siU0/rImgGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJzIDsigyCrIps7Q8NfuACAAAAAAAAAfuNPsWULA0+zX6MQA0/xZQNPxQNPoWUChLAVcAUGdIIzUBMgY1AjEZIhJEQgBRNf81/jX9Nfw1+zX6Nfk1+DX3STX2FjT3FlA0+FA0+RZQNPpQNPtQNP0WUDT+FlA0/xZQKEsBVwB/ZytLAVd/CWdIJTUBMgY1AjEZIhJEQgAAKjQBFjQCFlBnNAVBAAqABBUffHU0BlCwNABJIwgyBBJEMRYSRCNDIkMxGSISRCI1ASI1AkL/yQ==`,
  appClear: `BQ==`,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
  unsupported: [],
  version: 9,
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v2015",
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
                "internalType": "struct T5",
                "name": "v2016",
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
                "internalType": "struct T6",
                "name": "v2017",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2018",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v2015",
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
                "internalType": "struct T5",
                "name": "v2016",
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
                "internalType": "struct T6",
                "name": "v2017",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2018",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "address payable",
                            "name": "receiver",
                            "type": "address"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T14",
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
                            "internalType": "struct T14",
                            "name": "newHarvesterAddr",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T15",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T15",
                            "name": "newProtocolFee",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T15",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T15",
                            "name": "newProviderFee",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T16",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Harvester_harvest0_151",
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
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Provider_deposit0_151",
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
                    "internalType": "struct T19",
                    "name": "_Provider_withdraw0_151",
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
                    "internalType": "struct T20",
                    "name": "_Trader_swapAForB0_151",
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
                    "internalType": "struct T20",
                    "name": "_Trader_swapBForA0_151",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v2535",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
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
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v2030",
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
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2648",
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
    "name": "_reach_oe_v3153",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[2]",
        "name": "v0",
        "type": "uint256[2]"
      }
    ],
    "name": "_reach_oe_v3660",
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
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v4217",
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
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v4778",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "receiver",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T14",
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
            "internalType": "struct T14",
            "name": "newHarvesterAddr",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T15",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "_None",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "_Some",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "newProtocolFee",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T15",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "_None",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "_Some",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "newProviderFee",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Harvester_harvest",
    "outputs": [
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
        "internalType": "struct T20",
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
      },
      {
        "internalType": "uint256",
        "name": "_a2",
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
        "internalType": "uint256[2]",
        "name": "",
        "type": "uint256[2]"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_aBal",
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
    "name": "Tokens_aTok",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_bBal",
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
    "name": "Tokens_bTok",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_liquidityToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_minted",
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
    "name": "Tokens_protocolBals",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_balA",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_balB",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_protocolInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "_addr",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_fee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_lpFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_totFee",
            "type": "uint256"
          }
        ],
        "internalType": "struct T2",
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
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
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
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
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
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "address payable",
                            "name": "receiver",
                            "type": "address"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T14",
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
                            "internalType": "struct T14",
                            "name": "newHarvesterAddr",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T15",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T15",
                            "name": "newProtocolFee",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T15",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T15",
                            "name": "newProviderFee",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T16",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Harvester_harvest0_151",
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
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Provider_deposit0_151",
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
                    "internalType": "struct T19",
                    "name": "_Provider_withdraw0_151",
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
                    "internalType": "struct T20",
                    "name": "_Trader_swapAForB0_151",
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
                    "internalType": "struct T20",
                    "name": "_Trader_swapBForA0_151",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v2535",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
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
  Bytecode: `0x6080604052604051620056083803806200560883398101604081905262000026916200048b565b6000808055436003556040805160e0810182526080810183815260a0820184905260c0820184905281528151602080820184528482528201529081018290526060810191909152604080518351815260208085015180516001600160a01b039081168385015291810151518385015280840151516001600160c01b031916606080850191909152015116608082015290517fa3648a8496052b1e61f9726e60fca4bdeb5ec4ebeb65d899247c06fa79186d609181900360a00190a1620000ef3415600f620002f7565b620000fd60016010620002f7565b80516000908190528151602090810182905282516040908101839052818401519290925283810151810151518251918201520160408051808303601f1901815282825260208581015190920151516001600160c01b031916918301919091529060280160408051808303601f190181528282528451805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252602086810151519084015291016040516020818303038152906040526000196012604051620001d49062000321565b620001e596959493929190620005ba565b604051809103906000f08015801562000202573d6000803e3d6000fd5b506001600160a01b0316604082810182905260608301829052519081527f9e25c2eb1e48fef3e5effbdc61ca43aeee36b2482205d8c5651b87830a7944e49060200160405180910390a16040805160808082018352600060208084018281528486018381526060808701858152338089528b86018051516001600160a01b0390811687529051840151811685528b8401518116835260019788905543909755895195860152925185169784019790975251831695820195909552935116908301529060a00160405160208183030381529060405260029080519060200190620002ed9291906200032f565b5050505062000662565b816200031d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b610f75806200469383390190565b8280546200033d9062000625565b90600052602060002090601f016020900481019282620003615760008555620003ac565b82601f106200037c57805160ff1916838001178555620003ac565b82800160010185558215620003ac579182015b82811115620003ac5782518255916020019190600101906200038f565b50620003ba929150620003be565b5090565b5b80821115620003ba5760008155600101620003bf565b604080519081016001600160401b03811182821017156200040657634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200040657634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200040657634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200048657600080fd5b919050565b600081830360a08112156200049f57600080fd5b620004a9620003d5565b835181526080601f1983011215620004c057600080fd5b620004ca6200040c565b620004d8602086016200046e565b81526020603f1984011215620004ed57600080fd5b620004f76200043d565b60408601518152806020830152506020605f19840112156200051857600080fd5b620005226200043d565b60608601519093506001600160c01b0319811681146200054157600080fd5b83526040810183905262000558608086016200046e565b60608201526020820152949350505050565b6000815180845260005b81811015620005925760208185018101518683018201520162000574565b81811115620005a5576000602083870101525b50601f01601f19169290920160200192915050565b60c081526000620005cf60c08301896200056a565b8281036020840152620005e381896200056a565b90508281036040840152620005f981886200056a565b905082810360608401526200060f81876200056a565b6080840195909552505060a00152949350505050565b600181811c908216806200063a57607f821691505b602082108114156200065c57634e487b7160e01b600052602260045260246000fd5b50919050565b61402180620006726000396000f3fe6080604052600436106101015760003560e01c806368ac35681161008f578063c8dc446711610061578063c8dc44671461027a578063d2846e011461028f578063d469fcc7146102a4578063d4a2311c146102b9578063dc8d714f146102cc57005b806368ac35681461020d5780638323075714610222578063ab53f2c614610237578063c8867ae91461025a57005b806332020fec116100d357806332020fec1461016957806358b394ee146101895780635ac10ac2146101ab5780635bbc0ed6146101be5780635f827f46146101eb57005b80631894c0a11461010a5780631e93b0f11461011d57806328db2cb2146101415780632c10a1591461015657005b3661010857005b005b610108610118366004613517565b6102df565b34801561012957600080fd5b506003545b6040519081526020015b60405180910390f35b34801561014d57600080fd5b5061012e610303565b610108610164366004613530565b610484565b61017c610177366004613542565b6104a4565b604051610138919061355b565b34801561019557600080fd5b5061019e610502565b604051610138919061358c565b61012e6101b93660046135a3565b610692565b3480156101ca57600080fd5b506101d36106fa565b6040516001600160a01b039091168152602001610138565b3480156101f757600080fd5b5061020061086f565b60405161013891906135cf565b34801561021957600080fd5b506101d3610a26565b34801561022e57600080fd5b5060015461012e565b34801561024357600080fd5b5061024c610baa565b60405161013892919061362f565b61026d610268366004613669565b610c47565b604051610138919061368b565b34801561028657600080fd5b506101d3610cae565b34801561029b57600080fd5b5061012e610e12565b3480156102b057600080fd5b5061012e610f90565b61019e6102c736600461391e565b61110e565b61026d6102da366004613669565b611174565b6102e7612d61565b6102ff6102f9368490038401846139f8565b826111d9565b5050565b6000600160005414156103c05760006002805461031f90613ac0565b80601f016020809104026020016040519081016040528092919081815260200182805461034b90613ac0565b80156103985780601f1061036d57610100808354040283529160200191610398565b820191906000526020600020905b81548152906001019060200180831161037b57829003601f168201915b50505050508060200190518101906103b09190613b05565b90506103be6000600c61285f565b505b60046000541415610475576000600280546103da90613ac0565b80601f016020809104026020016040519081016040528092919081815260200182805461040690613ac0565b80156104535780601f1061042857610100808354040283529160200191610453565b820191906000526020600020905b81548152906001019060200180831161043657829003601f168201915b505050505080602001905181019061046b9190613c17565b6060015192915050565b6104816000600c61285f565b90565b61048c612d61565b6102ff61049e36849003840184613cb7565b82612885565b6104ac612dac565b6104b4612d61565b6104bc612dca565b6104c4612de4565b604080516020808201835287825260608401919091526002835281518082019092528282528301526104f682846111d9565b50506040015192915050565b6040805180820190915260008082526020820152600160005414156105d15760006002805461053090613ac0565b80601f016020809104026020016040519081016040528092919081815260200182805461055c90613ac0565b80156105a95780601f1061057e576101008083540402835291602001916105a9565b820191906000526020600020905b81548152906001019060200180831161058c57829003601f168201915b50505050508060200190518101906105c19190613b05565b90506105cf6000600d61285f565b505b60046000541415610686576000600280546105eb90613ac0565b80601f016020809104026020016040519081016040528092919081815260200182805461061790613ac0565b80156106645780601f1061063957610100808354040283529160200191610664565b820191906000526020600020905b81548152906001019060200180831161064757829003601f168201915b505050505080602001905181019061067c9190613c17565b6080015192915050565b6104816000600d61285f565b600061069c612d61565b6106a4612dca565b6106ac612de4565b604080516060810182528881526020808201899052818301889052838301919091526001835281518082019092528282528301526106ea82846111d9565b50506020015190505b9392505050565b6000600160005414156107b15760006002805461071690613ac0565b80601f016020809104026020016040519081016040528092919081815260200182805461074290613ac0565b801561078f5780601f106107645761010080835404028352916020019161078f565b820191906000526020600020905b81548152906001019060200180831161077257829003601f168201915b50505050508060200190518101906107a79190613b05565b6020015192915050565b60046000541415610863576000600280546107cb90613ac0565b80601f01602080910402602001604051908101604052809291908181526020018280546107f790613ac0565b80156108445780601f1061081957610100808354040283529160200191610844565b820191906000526020600020905b81548152906001019060200180831161082757829003601f168201915b505050505080602001905181019061085c9190613c17565b5192915050565b6104816000600a61285f565b610877612e87565b600160005414156109655760006002805461089190613ac0565b80601f01602080910402602001604051908101604052809291908181526020018280546108bd90613ac0565b801561090a5780601f106108df5761010080835404028352916020019161090a565b820191906000526020600020905b8154815290600101906020018083116108ed57829003601f168201915b50505050508060200190518101906109229190613b05565b905061092c612eb8565b60409182015181516001600160a01b03909116905280516005602090910152805160199201919091528051601e60609091015251919050565b60046000541415610a1a5760006002805461097f90613ac0565b80601f01602080910402602001604051908101604052809291908181526020018280546109ab90613ac0565b80156109f85780601f106109cd576101008083540402835291602001916109f8565b820191906000526020600020905b8154815290600101906020018083116109db57829003601f168201915b5050505050806020019051810190610a109190613c17565b60a0015192915050565b6104816000600e61285f565b600060016000541415610ae357600060028054610a4290613ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6e90613ac0565b8015610abb5780601f10610a9057610100808354040283529160200191610abb565b820191906000526020600020905b815481529060010190602001808311610a9e57829003601f168201915b5050505050806020019051810190610ad39190613b05565b9050610ae16000600861285f565b505b60046000541415610b9e57600060028054610afd90613ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2990613ac0565b8015610b765780601f10610b4b57610100808354040283529160200191610b76565b820191906000526020600020905b815481529060010190602001808311610b5957829003601f168201915b5050505050806020019051810190610b8e9190613c17565b9050610b9c6000600861285f565b505b6104816000600861285f565b600060606000546002808054610bbf90613ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610beb90613ac0565b8015610c385780601f10610c0d57610100808354040283529160200191610c38565b820191906000526020600020905b815481529060010190602001808311610c1b57829003601f168201915b50505050509050915091509091565b610c4f612ecb565b610c57612d61565b610c5f612dca565b610c67612de4565b60408051808201825287815260208082018890526080840191909152600383528151808201909252828252830152610c9f82846111d9565b50506060015190505b92915050565b600060016000541415610d5b57600060028054610cca90613ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf690613ac0565b8015610d435780601f10610d1857610100808354040283529160200191610d43565b820191906000526020600020905b815481529060010190602001808311610d2657829003601f168201915b505050505080602001905181019061046b9190613b05565b60046000541415610e0657600060028054610d7590613ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610da190613ac0565b8015610dee5780601f10610dc357610100808354040283529160200191610dee565b820191906000526020600020905b815481529060010190602001808311610dd157829003601f168201915b50505050508060200190518101906107a79190613c17565b6104816000600b61285f565b600060016000541415610ecf57600060028054610e2e90613ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5a90613ac0565b8015610ea75780601f10610e7c57610100808354040283529160200191610ea7565b820191906000526020600020905b815481529060010190602001808311610e8a57829003601f168201915b5050505050806020019051810190610ebf9190613b05565b9050610ecd6000600961285f565b505b60046000541415610f8457600060028054610ee990613ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610f1590613ac0565b8015610f625780601f10610f3757610100808354040283529160200191610f62565b820191906000526020600020905b815481529060010190602001808311610f4557829003601f168201915b5050505050806020019051810190610f7a9190613c17565b60e0015192915050565b6104816000600961285f565b60006001600054141561104d57600060028054610fac90613ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610fd890613ac0565b80156110255780601f10610ffa57610100808354040283529160200191611025565b820191906000526020600020905b81548152906001019060200180831161100857829003601f168201915b505050505080602001905181019061103d9190613b05565b905061104b6000600761285f565b505b600460005414156111025760006002805461106790613ac0565b80601f016020809104026020016040519081016040528092919081815260200182805461109390613ac0565b80156110e05780601f106110b5576101008083540402835291602001916110e0565b820191906000526020600020905b8154815290600101906020018083116110c357829003601f168201915b50505050508060200190518101906110f89190613c17565b60c0015192915050565b6104816000600761285f565b604080518082019091526000808252602082015261112a612d61565b611132612dca565b61113a612de4565b60408051602080820183528782528381019190915260008352815180820190925282825283015261116b82846111d9565b50505192915050565b61117c612ecb565b611184612d61565b61118c612dca565b611194612de4565b604080518082018252878152602080820188905260a08401919091526004835281518082019092528282528301526111cc82846111d9565b5050608001519392505050565b6111e9600460005414603d61285f565b81516112049015806111fd57508251600154145b603e61285f565b60008080556002805461121690613ac0565b80601f016020809104026020016040519081016040528092919081815260200182805461124290613ac0565b801561128f5780601f106112645761010080835404028352916020019161128f565b820191906000526020600020905b81548152906001019060200180831161127257829003601f168201915b50505050508060200190518101906112a79190613c17565b90506112b1612efa565b7f92cab69d2c81bf85be48024420d7e5e5b977d37539cb53e37dcb1b534c45aed1846040516112e09190613d65565b60405180910390a1600060208501515151600481111561130257611302613d1b565b141561175757602080850151510151815261131f3415601561285f565b6113396113323384602001516000612a94565b601661285f565b61135361134c3384600001516000612a94565b601761285f565b60a08201515161136f906001600160a01b03163314601861285f565b60808201515160c08301516113849190613e72565b6020820152805151516080830151516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156113c9573d6000803e3d6000fd5b5060208101516113d99047613e72565b60408083018290528251515190516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611419573d6000803e3d6000fd5b50815181515151608084015160200151611434929190612aaa565b60808201805151606083018051919091529051602090810151825190910152516040517f3d4c70347dbc886c9036cd4a554a3ebde9e37014275a23b5f78ff8abddfd4782916114829161358c565b60405180910390a1606081015183526000815151602001515160018111156114ac576114ac613d1b565b14156114cb5760a0820151516001600160a01b0316608082015261150d565b6001815151602001515160018111156114e6576114e6613d1b565b141561150d5780515160200151604001516001600160a01b031660a0820181905260808201525b60008151516040015151600181111561152857611528613d1b565b14156115415760a08201516020015160c082015261157a565b60018151516040015151600181111561155c5761155c613d1b565b141561157a57805151604090810151015160e0820181905260c08201525b60008151516060015151600181111561159557611595613d1b565b14156115af5760a0820151604001516101008201526115ea565b6001815151606001515160018111156115ca576115ca613d1b565b14156115ea57805151606001516040015161012082018190526101008201525b8061010001518160c001516115ff9190613e89565b61014082015260c08101516101008201516116559161161d91613e89565b8261014001511461162f576000611639565b6064826101400151105b61164457600061164e565b6000826101400151115b601961285f565b6080810151610160820180516001600160a01b0390921690915260c082015181516020015261010082015181516040015261014082015190516060015261169a61324a565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850180518451830152606080870151848601805191909152915182518501526101608601518251840152905143910152830151908301516117009082613e89565b61170a9190613e72565b816020015160800181815250508260800151602001518360e0015161172f9190613e72565b60208201805160a00191909152610100840151905160c0015261175181612ac3565b50612859565b600160208501515151600481111561177157611771613d1b565b1415611a93576020840151516040015161018082018190525160c08301516117999190613e89565b6101a0820152610180810151516117b3903414601a61285f565b6117cd6117c63384602001516000612a94565b601b61285f565b806101800151602001518260e001516117e69190613e89565b6101c082015281516101808201516020015161180f9161180891339190612a94565b601c61285f565b61018081015151611823901515601d61285f565b61183a60008261018001516020015111601e61285f565b60608201516118a9576101808101516040810151602082015191516118789282916118659190613ea1565b61186f9190613ec0565b1015601f61285f565b611894826101000151826101800151604001511115602061285f565b610180810151604001516101e082015261197e565b600281610180015160200151836080015160200151836101c001516118ce9190613e72565b6118d89190613e72565b8360600151836101800151602001516118f19190613ea1565b6118fb9190613ec0565b610180830151516080850151516101a08501516119189190613e72565b6119229190613e72565b6060850151610180850151516119389190613ea1565b6119429190613ec0565b61194c9190613e89565b6119569190613ec0565b6102008201819052610100830151611971911115602161285f565b6102008101516101e08201525b611992826020015133836101e00151612aaa565b7f768e61ce002f40f7e4435bafcc70bcb17780004a86dabc330ff0bf52f10a417f816101e001516040516119c891815260200190565b60405180910390a16101e081015160208401526119e361324a565b825181516001600160a01b039182169052602080850151835192169101526040808401518251909101526101e08201516060840151611a229190613e89565b602080830180519290925260808086015183519092019190915260a080860151835160400152825143606091909101526101a08501518351909201919091526101c0840151915101526101e0820151610100840151611a819190613e72565b602082015160c0015261175181612ac3565b6002602085015151516004811115611aad57611aad613d1b565b1415611d305760208401515160600151610220820152611acf3415602261285f565b611af1611aea33846020015184610220015160000151612a94565b602361285f565b611b0b611b043384600001516000612a94565b602461285f565b60808201515160c0830151611b209190613e72565b61024082015260808201516020015160e0830151611b3e9190613e72565b610260820152606082015161024082015161022083015151611b609190613ea1565b611b6a9190613ec0565b6102808201819052610240820151611b85911115602561285f565b610280810151604051339180156108fc02916000818181858888f19350505050158015611bb6573d6000803e3d6000fd5b50606082015161026082015161022083015151611bd39190613ea1565b611bdd9190613ec0565b6102a08201819052610260820151611bf8911115602661285f565b611c0c826000015133836102a00151612aaa565b6102808101516102c082018051919091526102a0820151815160200152516040517f24c742e040a77ea3fbaa5c66e7e44b42fd5ba287d6f85aa0a5cd08c6cd9979c791611c589161355b565b60405180910390a16102c08101516040840152611c7361324a565b825181516001600160a01b03918216905260208085015183519216910152604080840151825190910152610220820151516060840151611cb39190613e72565b6020808301805192909252608085015182519091015260a084015181516040015251436060919091015261028082015160c0840151611cf29190613e72565b6020820151608001526102a082015160e0840151611d109190613e72565b602082015160a0015261022082015151610100840151611a819190613e89565b6003602085015151516004811115611d4a57611d4a613d1b565b14156122b557602084015151608001516102e082018190525160c0830151611d729190613e89565b6103008201526102e081015151611d8c903414602761285f565b611da6611d9f3384602001516000612a94565b602861285f565b611dc0611db93384600001516000612a94565b602961285f565b608082015151610300820151611dd69190613e72565b61032082015260808201516020015160e0830151611df49190613e72565b6103408201526103208101516102e082015151611e139111602a61285f565b6102e081015151611e27901515602b61285f565b6102e081015151610320820151611e3e9190613e72565b61036082015260a082015160600151611e5990612710613e72565b6102e082015151611e6a9190613ea1565b6103808201819052610360820151611e859061271090613ea1565b611e8f9190613e89565b816103400151826103800151611ea59190613ea1565b611eaf9190613ec0565b6103a08201819052611ec4901515602c61285f565b6102e081015151610360820151611edb9190613e89565b6103c08201819052611ef0901515602d61285f565b6103a08101516103c08201516103408301516102e084015151611f139190613ea1565b611f1d9190613ec0565b611f279190613e72565b6103e082015260a0820151602001516102e08201515161271091611f4a91613ea1565b611f549190613ec0565b61040082015260a0820151606081015160209091015160649190611f79908390613ea1565b611f839190613ec0565b826103e00151611f939190613ea1565b611f9d9190613ec0565b61042082018190526103e0820151611fb8911115602e61285f565b6103a0810180516104408301805191909152805160006020918201819052610420850180519351604090810194909452935161046086018051919091526104008601805182519094019390935251909201919091525161034083015161036084015192519192909161202a9190613ea1565b6120349190613ec0565b10156120455780610460015161204c565b8061044001515b61048082018190526102e082015160200151905161206d911115602f61285f565b612089816103400151826104800151600001511115603061285f565b6104808101515160e083015161209f9190613e72565b6104a08201528151610480820151516120ba91903390612aaa565b816080015160200151816104a001516120d39190613e72565b6104c082015261034081015161036082015161214c91116120f957816103400151612100565b8161036001515b8261034001518361036001511161211c57826103400151612123565b8261036001515b836104c001518461032001516121399190613ea1565b6121439190613ec0565b1015603161285f565b610480810151602001516080830151516121669190613e89565b6104e0820151526104808101516040015160808301516020015161218a9190613e89565b6104e08201516020908101919091526104808201805151610500840180519190915281518301518151909301929092525160409081015182518201526104c0830151825160600152610320830151825160800152905190517fe96d9876f0e27bc2d32e1feeefc0471a3e013c3df03d270492cd66f877e07cac9161220d9161368b565b60405180910390a1610500810151606084015261222861324a565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201526060808601518385018051919091526104e086015181519094019390935260a0808701518451909301929092528251439101526103008401518251608001526104a0840151825190910152610100840151905160c0015261175181612ac3565b60046020850151515160048111156122cf576122cf613d1b565b14156128595760208401515160a001516105208201526122f13415603261285f565b61230b6123043384602001516000612a94565b603361285f565b6105208101515160e08301516123219190613e89565b6105408201528151610520820151516123479161234091339190612a94565b603461285f565b8160800151602001518161054001516123609190613e72565b61056082015260808201515160c083015161237b9190613e72565b6105808201526105608101516105208201515161239a9111603561285f565b610520810151516123ae901515603661285f565b610520810151516105608201516123c59190613e72565b6105a082015260a0820151606001516123e090612710613e72565b610520820151516123f19190613ea1565b6105c082018190526105a082015161240c9061271090613ea1565b6124169190613e89565b816105800151826105c0015161242c9190613ea1565b6124369190613ec0565b6105e0820181905261244b901515603761285f565b610520810151516105a08201516124629190613e89565b6106008201819052612477901515603861285f565b6105e08101516106008201516105808301516105208401515161249a9190613ea1565b6124a49190613ec0565b6124ae9190613e72565b61062082015260a08201516020015161052082015151612710916124d191613ea1565b6124db9190613ec0565b61064082015260a0820151606081015160209091015160649190612500908390613ea1565b61250a9190613ec0565b82610620015161251a9190613ea1565b6125249190613ec0565b610660820181905261062082015161253f911115603961285f565b6105e081018051610680830180519190915280516000602091820181905261066085018051935160409081019490945293516106a08601805191909152610640860180518251909401939093525190920191909152516105808301516105a08401519251919290916125b19190613ea1565b6125bb9190613ec0565b10156125cc57806106a001516125d3565b8061068001515b6106c082018190526105208201516020015190516125f4911115603a61285f565b612610816105800151826106c00151600001511115603b61285f565b6106c08101515160c08301516126269190613e72565b6106e08201526106c081015151604051339180156108fc02916000818181858888f1935050505015801561265e573d6000803e3d6000fd5b506080820151516106e08201516126759190613e72565b6107008201526105808101516105a08201516126ee911161269b578161058001516126a2565b816105a001515b826105800151836105a00151116126be578261058001516126c5565b826105a001515b8361070001518461056001516126db9190613ea1565b6126e59190613ec0565b1015603c61285f565b6106c0810151604001516080830151516127089190613e89565b610720820151526106c081015160209081015160808401519091015161272e9190613e89565b6107208201516020908101919091526106c0820180515161074084018051919091528151830151815190930192909252516040908101518251820152610700830151825160600152610560830151825160800152905190517f25e0bb8d4649a0e68d8c75304e3592b37435fec97a1a35d19cda599f9511d278916127b19161368b565b60405180910390a161074081015160808401526127cc61324a565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015183850180519190915261072086015181519094019390935260a0808701518451909301929092528251439101526106e0840151825160800152610540840151825190910152610100840151905160c0015261175181612ac3565b50505050565b816102ff5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b612895600160005414601361285f565b81516128b09015806128a957508251600154145b601461285f565b6000808055600280546128c290613ac0565b80601f01602080910402602001604051908101604052809291908181526020018280546128ee90613ac0565b801561293b5780601f106129105761010080835404028352916020019161293b565b820191906000526020600020905b81548152906001019060200180831161291e57829003601f168201915b50505050508060200190518101906129539190613b05565b905061295d61326a565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16129a83415601161285f565b81516129c0906001600160a01b03163314601261285f565b8051600090819052815160209081019190915260408084015182840180516001600160a01b03909216909152805160059301929092528151601991015251601e606090910152612a0e61324a565b60208084015182516001600160a01b039182169052606080860151845192169183019190915283518351604090810191909152838301805160009081905286518251860152938601518151909201919091528051439201919091528051608001829052805160a001919091525160001960c090910152612a8d81612ac3565b5050505050565b6000612aa283853085612b7b565b949350505050565b612ab5838383612c55565b612abe57600080fd5b505050565b612acb613293565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015281840180515160608501528051830151608080860191909152815183015160a08087019190915282519091015160c08087019190915282519091015160e08601529051015161010084015260046000554360015551612b5791839101613ee2565b60405160208183030381529060405260029080519060200190612abe92919061332d565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612be291613fb2565b60006040518083038185875af1925050503d8060008114612c1f576040519150601f19603f3d011682016040523d82523d6000602084013e612c24565b606091505b5091509150612c3582826001612d26565b5080806020019051810190612c4a9190613fce565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612cb491613fb2565b60006040518083038185875af1925050503d8060008114612cf1576040519150601f19603f3d011682016040523d82523d6000602084013e612cf6565b606091505b5091509150612d0782826002612d26565b5080806020019051810190612d1c9190613fce565b9695505050505050565b60608315612d355750816106f3565b825115612d455782518084602001fd5b60405163100960cb60e01b81526004810183905260240161287c565b6040805160e081018252600060a0820181815260c0830182905282526020820152908101612d8d612dac565b8152602001612d9a612ecb565b8152602001612da7612ecb565b905290565b60405180604001604052806002906020820280368337509192915050565b604051806040016040528060008152602001612da76133b1565b6040805160c081019091528060008152602001612dff6133c4565b8152602001612e2860405180606001604052806000815260200160008152602001600081525090565b8152602001612e436040518060200160405280600081525090565b8152602001612e65604051806040016040528060008152602001600081525090565b8152602001612da7604051806040016040528060008152602001600081525090565b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060200160405280612da7612e87565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b604051806107600160405280612f0e6133c4565b81526020016000815260200160008152602001612f3e604051806040016040528060008152602001600081525090565b815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001612f8e612e87565b8152602001612fb760405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001612fee6040518060200160405280600081525090565b815260200160008152602001600081526020016000815260200160008152602001613017612dac565b8152602001613039604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016130a860405180606001604052806000815260200160008152602001600081525090565b81526020016130d160405180606001604052806000815260200160008152602001600081525090565b81526020016130fa60405180606001604052806000815260200160008152602001600081525090565b8152602001600081526020016000815260200161312a604051806040016040528060008152602001600081525090565b8152602001613137612ecb565b8152602001613159604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016131c860405180606001604052806000815260200160008152602001600081525090565b81526020016131f160405180606001604052806000815260200160008152602001600081525090565b815260200161321a60405180606001604052806000815260200160008152602001600081525090565b81526020016000815260200160008152602001612d9a604051806040016040528060008152602001600081525090565b604051806040016040528061325d6133d7565b8152602001612da761341f565b604080516080810182526000918101828152606082019290925290815260208101612da7612e87565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b031681526020016132dc604051806040016040528060008152602001600081525090565b815260200160008152602001613305604051806040016040528060008152602001600081525090565b8152602001613312612e87565b81526020016000815260200160008152602001600081525090565b82805461333990613ac0565b90600052602060002090601f01602090048101928261335b57600085556133a1565b82601f1061337457805160ff19168380011785556133a1565b828001600101855582156133a1579182015b828111156133a1578251825591602001919060010190613386565b506133ad92915061347d565b5090565b6040518060200160405280612da7612de4565b6040518060200160405280612da7613492565b604051806060016040528060006001600160a01b0316815260200160006001600160a01b03168152602001612da7604051806040016040528060008152602001600081525090565b6040518060e001604052806000815260200161344e604051806040016040528060008152602001600081525090565b815260200161345b612e87565b8152602001600081526020016000815260200160008152602001600081525090565b5b808211156133ad576000815560010161347e565b604051806080016040528060006001600160a01b031681526020016134d26040805160608101909152806000815260006020820181905260409091015290565b81526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190612da7565b6000610280828403121561352a57600080fd5b50919050565b60006040828403121561352a57600080fd5b60006020828403121561355457600080fd5b5035919050565b60408101818360005b6002811015613583578151835260209283019290910190600101613564565b50505092915050565b815181526020808301519082015260408101610ca8565b6000806000606084860312156135b857600080fd5b505081359360208301359350604090920135919050565b81516001600160a01b0316815260208083015190820152604080830151908201526060808301519082015260808101610ca8565b60005b8381101561361e578181015183820152602001613606565b838111156128595750506000910152565b8281526040602082015260008251806040840152613654816060850160208701613603565b601f01601f1916919091016060019392505050565b6000806040838503121561367c57600080fd5b50508035926020909101359150565b600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b6040516060810167ffffffffffffffff811182821017156136f657634e487b7160e01b600052604160045260246000fd5b60405290565b6040516080810167ffffffffffffffff811182821017156136f657634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156136f657634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156136f657634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156136f657634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156136f657634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461380757600080fd5b50565b6002811061380757600080fd5b801515811461380757600080fd5b60006060828403121561383757600080fd5b61383f6136c5565b9050813561384c8161380a565b8152602082013561385c81613817565b806020830152506040820135604082015292915050565b600081830361014081121561388757600080fd5b61388f6136fc565b9150823561389c816137f2565b82526060601f19820112156138b057600080fd5b506138b96136c5565b60208301356138c78161380a565b815260408301356138d781613817565b602082015260608301356138ea816137f2565b604082015260208201526139018360808401613825565b60408201526139138360e08401613825565b606082015292915050565b6000610140828403121561393157600080fd5b6106f38383613873565b6000610140828403121561394e57600080fd5b61395661372d565b90506139628383613873565b815292915050565b60006060828403121561397c57600080fd5b6139846136c5565b905081358152602082013560208201526040820135604082015292915050565b6000602082840312156139b657600080fd5b6139be61372d565b9135825250919050565b6000604082840312156139da57600080fd5b6139e261375e565b9050813581526020820135602082015292915050565b6000818303610280811215613a0c57600080fd5b613a1461375e565b83358152610260601f1983011215613a2b57600080fd5b613a3361372d565b9150613a3d61378f565b602085013560058110613a4f57600080fd5b8152613a5e866040870161393b565b6020820152613a7186610180870161396a565b6040820152613a84866101e087016139a4565b6060820152613a978661020087016139c8565b6080820152613aaa8661024087016139c8565b60a0820152825260208101919091529392505050565b600181811c90821680613ad457607f821691505b6020821081141561352a57634e487b7160e01b600052602260045260246000fd5b8051613b00816137f2565b919050565b600060808284031215613b1757600080fd5b6040516080810181811067ffffffffffffffff82111715613b4857634e487b7160e01b600052604160045260246000fd5b6040528251613b56816137f2565b81526020830151613b66816137f2565b60208201526040830151613b79816137f2565b60408201526060830151613b8c816137f2565b60608201529392505050565b600060408284031215613baa57600080fd5b613bb261375e565b9050815181526020820151602082015292915050565b600060808284031215613bda57600080fd5b613be26136fc565b90508151613bef816137f2565b8082525060208201516020820152604082015160408201526060820151606082015292915050565b60006101c08284031215613c2a57600080fd5b613c326137c0565b613c3b83613af5565b8152613c4960208401613af5565b6020820152613c5b8460408501613b98565b604082015260808301516060820152613c778460a08501613b98565b6080820152613c898460e08501613bc8565b60a082015261016083015160c082015261018083015160e08201526101a09092015161010083015250919050565b600060408284031215613cc957600080fd5b6040516040810181811067ffffffffffffffff82111715613cfa57634e487b7160e01b600052604160045260246000fd5b604052823581526020830135613d0f81613817565b60208201529392505050565b634e487b7160e01b600052602160045260246000fd5b6002811061380757613807613d1b565b8051613d4c81613d31565b8252602081810151151590830152604090810151910152565b8151815260208201515180516102808301919060058110613d8857613d88613d1b565b8060208501525060208101515160018060a01b0380825116604086015260208201518051613db581613d31565b606087015260208101511515608087015260409081015190911660a0860152810151613de460c0860182613d41565b5060600151613df7610120850182613d41565b5060408181015180516101808601526020808201516101a08701529101516101c08501526060820151516101e08501526080820151805161020086015281015161022085015260a0909101518051610240850152015161026090920191909152919050565b634e487b7160e01b600052601160045260246000fd5b600082821015613e8457613e84613e5c565b500390565b60008219821115613e9c57613e9c613e5c565b500190565b6000816000190483118215151615613ebb57613ebb613e5c565b500290565b600082613edd57634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b031681526020808301516101c0830191613f0f908401826001600160a01b03169052565b506040830151613f2c604084018280518252602090810151910152565b50606083015160808301526080830151613f5360a084018280518252602090810151910152565b5060a083015180516001600160a01b031660e08401526020810151610100840152604081015161012084015260608101516101408401525060c083015161016083015260e0830151610180830152610100909201516101a09091015290565b60008251613fc4818460208701613603565b9190910192915050565b600060208284031215613fe057600080fd5b81516106f38161381756fea2646970667358221220436562b0a893aa0131f54cbb369cbf0c19fc8aef5be59eef7c7b7111afb48dd564736f6c6343000809003360806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea26469706673582212203a06b9a22ac0d243ff0e6e2671ae0f6268815cdedde3a6fa295e2102c9cf260664736f6c63430008090033`,
  BytecodeLen: 22024,
  Which: `oD`,
  version: 6,
  views: {
    Tokens: {
      aBal: `Tokens_aBal`,
      aTok: `Tokens_aTok`,
      bBal: `Tokens_bBal`,
      bTok: `Tokens_bTok`,
      liquidityToken: `Tokens_liquidityToken`,
      minted: `Tokens_minted`,
      protocolBals: `Tokens_protocolBals`,
      protocolInfo: `Tokens_protocolInfo`
      }
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Harvester_harvest": Harvester_harvest,
  "Provider_deposit": Provider_deposit,
  "Provider_withdraw": Provider_withdraw,
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_swapBForA": Trader_swapBForA
  };
export const _APIs = {
  Harvester: {
    harvest: Harvester_harvest
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
