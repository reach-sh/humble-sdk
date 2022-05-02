// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    computeMint_: ((_v24112, _v24113, _v24114 ) => {
        const v24112 = stdlib.protect(ctc1, _v24112, null);
        const v24113 = stdlib.protect(ctc1, _v24113, null);
        const v24114 = stdlib.protect(ctc1, _v24114, null);
      
      const v24115 = v24112.A;
      const v24116 = v24112.B;
      const v24117 = v24113.A;
      const v24118 = v24113.B;
      const v24120 = v24114.B;
      let v24121;
      const v24128 = stdlib.eq(v24120, stdlib.checkedBigNumberify('298:19:decimal', stdlib.UInt_max, '0'));
      if (v24128) {
        const v24129 = stdlib.cast(false, true, v24115);
        const v24130 = stdlib.cast(false, true, v24116);
        const v24131 = stdlib.mul256(v24129, v24130);
        const v24132 = stdlib.sqrt256(v24131);
        const v24133 = stdlib.cast(true, false, v24132);
        v24121 = v24133;
        }
      else {
        const v24142 = stdlib.muldiv(v24115, v24120, v24117);
        const v24149 = stdlib.muldiv(v24116, v24120, v24118);
        const v24151 = stdlib.lt(v24142, v24149);
        const v24152 = v24151 ? v24142 : v24149;
        v24121 = v24152;
        }
      
      return v24121;}),
    computeSwap_: ((_v24153, _v24154, _v24155, _v24156 ) => {
        const v24153 = stdlib.protect(ctc2, _v24153, null);
        const v24154 = stdlib.protect(ctc1, _v24154, null);
        const v24155 = stdlib.protect(ctc1, _v24155, null);
        const v24156 = stdlib.protect(ctc4, _v24156, null);
      
      const v24157 = v24154.A;
      const v24158 = v24154.B;
      const v24159 = v24155.A;
      const v24160 = v24155.B;
      const v24162 = v24156.protoFee;
      const v24163 = v24156.lpFee;
      const v24164 = v24156.totFee;
      const v24165 = stdlib.lt(v24162, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v24166 = stdlib.lt(v24163, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v24167 = v24165 ? v24166 : false;
      const v24168 = stdlib.add(v24163, v24162);
      const v24169 = stdlib.eq(v24164, v24168);
      const v24170 = v24167 ? v24169 : false;
      const v24171 = stdlib.lt(v24164, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v24172 = v24170 ? v24171 : false;
      const v24173 = stdlib.gt(v24164, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v24174 = v24172 ? v24173 : false;
      stdlib.assert(v24174, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v24176 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v24176, {
        at: '289:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v24177;
      if (v24153) {
        const v24182 = stdlib.eq(v24158, stdlib.checkedBigNumberify('./index.rsh:276:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v24182, {
          at: './index.rsh:276:10:application',
          fs: ['at 290:31:application call to "computeSwap" (defined at: ./index.rsh:272:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v24191 = stdlib.add(v24159, v24157);
        const v24199 = stdlib.muldiv(v24157, v24160, v24191);
        const v24200 = stdlib.cast(false, true, v24157);
        const v24201 = stdlib.cast(false, true, v24164);
        const v24202 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v24201);
        const v24203 = stdlib.mul256(v24200, v24202);
        const v24204 = stdlib.cast(false, true, v24191);
        const v24205 = stdlib.mul256(v24204, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v24206 = stdlib.add256(v24205, v24203);
        const v24207 = stdlib.cast(false, true, v24160);
        const v24208 = stdlib.mul256(v24203, v24207);
        const v24209 = stdlib.div256(v24208, v24206);
        const v24210 = stdlib.cast(true, false, v24209);
        const v24215 = stdlib.sub(v24199, v24210);
        const v24219 = stdlib.mul(v24162, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
        const v24220 = stdlib.div(v24219, v24164);
        const v24226 = stdlib.muldiv(v24215, v24220, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
        const v24231 = stdlib.muldiv(v24157, v24162, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
        const v24239 = stdlib.muldiv(v24231, v24160, v24191);
        const v24240 = stdlib.gt(v24239, v24226);
        const v24241 = [v24231, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v24242 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24226];
        const v24243 = v24240 ? v24241 : v24242;
        const v24245 = v24243[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
        const v24246 = v24243[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
        const v24248 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v24210
          };
        const v24250 = {
          A: v24245,
          B: v24246
          };
        const v24251 = [v24248, v24250];
        v24177 = v24251;
        }
      else {
        const v24252 = stdlib.eq(v24157, stdlib.checkedBigNumberify('./index.rsh:281:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v24252, {
          at: './index.rsh:281:10:application',
          fs: ['at 290:31:application call to "computeSwap" (defined at: ./index.rsh:272:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v24261 = stdlib.add(v24160, v24158);
        const v24269 = stdlib.muldiv(v24158, v24159, v24261);
        const v24270 = stdlib.cast(false, true, v24158);
        const v24271 = stdlib.cast(false, true, v24164);
        const v24272 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v24271);
        const v24273 = stdlib.mul256(v24270, v24272);
        const v24274 = stdlib.cast(false, true, v24261);
        const v24275 = stdlib.mul256(v24274, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v24276 = stdlib.add256(v24275, v24273);
        const v24277 = stdlib.cast(false, true, v24159);
        const v24278 = stdlib.mul256(v24273, v24277);
        const v24279 = stdlib.div256(v24278, v24276);
        const v24280 = stdlib.cast(true, false, v24279);
        const v24285 = stdlib.sub(v24269, v24280);
        const v24289 = stdlib.mul(v24162, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
        const v24290 = stdlib.div(v24289, v24164);
        const v24296 = stdlib.muldiv(v24285, v24290, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
        const v24301 = stdlib.muldiv(v24158, v24162, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
        const v24309 = stdlib.muldiv(v24301, v24159, v24261);
        const v24310 = stdlib.gt(v24309, v24296);
        const v24311 = [v24301, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v24312 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24296];
        const v24313 = v24310 ? v24311 : v24312;
        const v24315 = v24313[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
        const v24316 = v24313[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
        const v24318 = {
          A: v24280,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v24320 = {
          A: v24316,
          B: v24315
          };
        const v24321 = [v24318, v24320];
        v24177 = v24321;
        }
      const v24322 = v24177[stdlib.checkedBigNumberify('290:11:array', stdlib.UInt_max, '0')];
      const v24323 = v24177[stdlib.checkedBigNumberify('290:11:array', stdlib.UInt_max, '1')];
      const v24324 = v24322.A;
      const v24325 = v24322.B;
      const v24326 = v24323.A;
      const v24327 = v24323.B;
      const v24328 = {
        A: v24324,
        B: v24325
        };
      const v24329 = {
        A: v24326,
        B: v24327
        };
      const v24330 = [v24328, v24329];
      
      return v24330;})
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
  
  return {
    infos: {
      Info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v25353, v25365, v25367, v25368, v25372] = svs;
            return (await ((async () => {
              
              const v25416 = v25367.protoFee;
              const v25417 = v25367.lpFee;
              const v25418 = v25367.totFee;
              const v25419 = v25367.protoAddr;
              const v25420 = v25367.locked;
              const v25421 = {
                locked: v25420,
                lpFee: v25417,
                protoAddr: v25419,
                protoFee: v25416,
                totFee: v25418
                };
              const v25422 = {
                cmds: v25365,
                protoInfo: v25421,
                triumvirs: v25368
                };
              
              return v25422;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
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
    Triumvir_propose0_24470: ctc11,
    Triumvir_support0_24470: ctc12,
    register0_24470: ctc13
    });
  const ctc15 = stdlib.T_Struct([['A', ctc7], ['B', ctc7]]);
  const ctc16 = stdlib.T_Tuple([ctc15, ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc7, ctc16]);
  
  
  const v25340 = stdlib.protect(ctc1, interact.triumvirs, 'for Admin\'s interact field triumvirs');
  
  const txn1 = await (ctc.sendrecv({
    args: [v25340],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:123:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:123:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25347], secs: v25349, time: v25348, didSend: v24345, from: v25346 } = txn1;
      
      ;
      const v25350 = await ctc.getContractAddress();
      
      const v25353 = ['NoOp', null];
      const v25359 = [v25353, v25353, v25353];
      const v25364 = {
        locked: false,
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
        protoAddr: v25350,
        protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
        };
      const v25365 = v25359;
      const v25366 = false;
      const v25367 = v25364;
      const v25368 = v25347;
      const v25369 = v25348;
      const v25372 = stdlib.checkedBigNumberify('./index.rsh:119:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v25415 = v25366 ? false : true;
        
        return v25415;})()) {
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
  const {data: [v25347], secs: v25349, time: v25348, didSend: v24345, from: v25346 } = txn1;
  ;
  const v25350 = await ctc.getContractAddress();
  stdlib.protect(ctc2, await interact.ready(), {
    at: './index.rsh:131:23:application',
    fs: ['at ./index.rsh:131:23:application call to [unknown function] (defined at: ./index.rsh:131:23:function exp)', 'at ./index.rsh:131:23:application call to "liftedInteract" (defined at: ./index.rsh:131:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v25353 = ['NoOp', null];
  const v25359 = [v25353, v25353, v25353];
  const v25364 = {
    locked: false,
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
    protoAddr: v25350,
    protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
    };
  let v25365 = v25359;
  let v25366 = false;
  let v25367 = v25364;
  let v25368 = v25347;
  let v25369 = v25348;
  let v25372 = stdlib.checkedBigNumberify('./index.rsh:119:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v25415 = v25366 ? false : true;
    
    return v25415;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v25627], secs: v25629, time: v25628, didSend: v24939, from: v25626 } = txn2;
    switch (v25627[0]) {
      case 'Triumvir_propose0_24470': {
        const v25630 = v25627[1];
        undefined /* setApiDetails */;
        ;
        const v25644 = v25630[stdlib.checkedBigNumberify('./index.rsh:218:9:spread', stdlib.UInt_max, '0')];
        let v25645;
        switch (v25644[0]) {
          case 'Harvest': {
            const v25646 = v25644[1];
            v25645 = true;
            
            break;
            }
          case 'Kill': {
            const v25647 = v25644[1];
            v25645 = true;
            
            break;
            }
          case 'NewInfo': {
            const v25648 = v25644[1];
            const v25649 = v25648.protoFee;
            const v25650 = v25648.lpFee;
            const v25651 = v25648.totFee;
            const v25652 = stdlib.lt(v25649, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
            const v25653 = stdlib.lt(v25650, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
            const v25654 = v25652 ? v25653 : false;
            const v25655 = stdlib.add(v25650, v25649);
            const v25656 = stdlib.eq(v25651, v25655);
            const v25657 = v25654 ? v25656 : false;
            const v25658 = stdlib.lt(v25651, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
            const v25659 = v25657 ? v25658 : false;
            const v25660 = stdlib.gt(v25651, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
            const v25661 = v25659 ? v25660 : false;
            v25645 = v25661;
            
            break;
            }
          case 'NewTriumvirs': {
            const v25662 = v25644[1];
            v25645 = true;
            
            break;
            }
          case 'NoOp': {
            const v25663 = v25644[1];
            v25645 = true;
            
            break;
            }
          case 'Rewards': {
            const v25664 = v25644[1];
            v25645 = true;
            
            break;
            }
          }
        stdlib.assert(v25645, {
          at: './index.rsh:161:14:application',
          fs: ['at ./index.rsh:221:26:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:221:14:application call to [unknown function] (defined at: ./index.rsh:221:14:function exp)'],
          msg: 'invalid command',
          who: 'Admin'
          });
        const v25665 = ['None', null];
        const v25666 = await stdlib.Array_asyncReduce([v25368], v25665, async([v25668], v25667, v25669) => {
          let v25670;
          switch (v25667[0]) {
            case 'None': {
              const v25671 = v25667[1];
              v25670 = true;
              
              break;
              }
            case 'Some': {
              const v25672 = v25667[1];
              v25670 = false;
              
              break;
              }
            }
          const v25673 = stdlib.addressEq(v25626, v25668);
          const v25674 = v25670 ? v25673 : false;
          const v25675 = ['Some', v25669];
          const v25676 = v25674 ? v25675 : v25667;
          
          return v25676;})
        let v25677;
        switch (v25666[0]) {
          case 'None': {
            const v25678 = v25666[1];
            v25677 = false;
            
            break;
            }
          case 'Some': {
            const v25679 = v25666[1];
            v25677 = true;
            
            break;
            }
          }
        stdlib.assert(v25677, {
          at: './index.rsh:149:14:application',
          fs: ['at ./index.rsh:162:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:221:26:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:221:14:application call to [unknown function] (defined at: ./index.rsh:221:14:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v25680 = stdlib.fromSome(v25666, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
        const v25682 = stdlib.Array_set(v25365, v25680, v25644);
        const v25683 = null;
        await txn2.getOutput('Triumvir_propose', 'v25683', ctc2, v25683);
        null;
        const cv25365 = v25682;
        const cv25366 = false;
        const cv25367 = v25367;
        const cv25368 = v25368;
        const cv25369 = v25628;
        const cv25372 = v25372;
        
        v25365 = cv25365;
        v25366 = cv25366;
        v25367 = cv25367;
        v25368 = cv25368;
        v25369 = cv25369;
        v25372 = cv25372;
        
        continue;
        break;
        }
      case 'Triumvir_support0_24470': {
        const v25996 = v25627[1];
        undefined /* setApiDetails */;
        ;
        const v26099 = v25996[stdlib.checkedBigNumberify('./index.rsh:223:9:spread', stdlib.UInt_max, '0')];
        const v26100 = v25996[stdlib.checkedBigNumberify('./index.rsh:223:9:spread', stdlib.UInt_max, '1')];
        const v26101 = stdlib.lt(v26099, stdlib.checkedBigNumberify('./index.rsh:197:31:dot', stdlib.UInt_max, '3'));
        stdlib.assert(v26101, {
          at: './index.rsh:197:14:application',
          fs: ['at ./index.rsh:226:32:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
          msg: 'illegal idx',
          who: 'Admin'
          });
        const v26102 = ['None', null];
        const v26103 = await stdlib.Array_asyncReduce([v25368], v26102, async([v26105], v26104, v26106) => {
          let v26107;
          switch (v26104[0]) {
            case 'None': {
              const v26108 = v26104[1];
              v26107 = true;
              
              break;
              }
            case 'Some': {
              const v26109 = v26104[1];
              v26107 = false;
              
              break;
              }
            }
          const v26110 = stdlib.addressEq(v25626, v26105);
          const v26111 = v26107 ? v26110 : false;
          const v26112 = ['Some', v26106];
          const v26113 = v26111 ? v26112 : v26104;
          
          return v26113;})
        let v26114;
        switch (v26103[0]) {
          case 'None': {
            const v26115 = v26103[1];
            v26114 = false;
            
            break;
            }
          case 'Some': {
            const v26116 = v26103[1];
            v26114 = true;
            
            break;
            }
          }
        stdlib.assert(v26114, {
          at: './index.rsh:149:14:application',
          fs: ['at ./index.rsh:198:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:226:32:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v26117 = stdlib.fromSome(v26103, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
        const v26118 = stdlib.eq(v26099, v26117);
        const v26119 = v26118 ? false : true;
        stdlib.assert(v26119, {
          at: './index.rsh:199:14:application',
          fs: ['at ./index.rsh:226:32:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
          msg: 'cannot support self',
          who: 'Admin'
          });
        const v26121 = v25365[v26099];
        const v26122 = stdlib.digest(ctc11, [v26100]);
        const v26123 = stdlib.digest(ctc11, [v26121]);
        const v26124 = stdlib.digestEq(v26122, v26123);
        stdlib.assert(v26124, {
          at: './index.rsh:201:14:application',
          fs: ['at ./index.rsh:226:32:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
          msg: 'command switched',
          who: 'Admin'
          });
        const v26127 = stdlib.Array_set(v25365, v26099, v25353);
        const v26128 = null;
        await txn2.getOutput('Triumvir_support', 'v26128', ctc2, v26128);
        null;
        switch (v26121[0]) {
          case 'Harvest': {
            const v26176 = v26121[1];
            const v26177 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '0')];
            const v26178 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '1')];
            const v26179 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '2')];
            const v26180 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '3')];
            switch (v26178[0]) {
              case 'None': {
                const v26181 = v26178[1];
                const v26182 = v25367.protoFee;
                const v26183 = v25367.lpFee;
                const v26184 = v25367.totFee;
                const v26185 = v25367.protoAddr;
                const v26186 = v25367.locked;
                const v26199 = {
                  locked: v26186,
                  lpFee: v26183,
                  protoAddr: v26185,
                  protoFee: v26182,
                  totFee: v26184
                  };
                const v26200 = undefined /* Remote */;
                const v26201 = await txn2.getOutput('internal', 'v26200', ctc17, v26200);
                const v26203 = v26201[stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0')];
                const v26212 = stdlib.add(v25372, v26203);
                const v26213 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'), v26203);
                stdlib.assert(v26213, {
                  at: './index.rsh:181:15:application',
                  fs: ['at ./index.rsh:185:26:application call to "go" (defined at: ./index.rsh:176:30:function exp)', 'at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:174:46:function exp)', 'at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:170:45:function exp)', 'at ./index.rsh:206:59:application call to "evalCommand" (defined at: ./index.rsh:170:33:function exp)', 'at ./index.rsh:226:47:application call to [unknown function] (defined at: ./index.rsh:203:20:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
                  msg: 'remote bill check',
                  who: 'Admin'
                  });
                const cv25365 = v26127;
                const cv25366 = false;
                const cv25367 = v25367;
                const cv25368 = v25368;
                const cv25369 = v25628;
                const cv25372 = v26212;
                
                v25365 = cv25365;
                v25366 = cv25366;
                v25367 = cv25367;
                v25368 = cv25368;
                v25369 = cv25369;
                v25372 = cv25372;
                
                continue;
                break;
                }
              case 'Some': {
                const v26223 = v26178[1];
                const v26224 = v25367.protoFee;
                const v26225 = v25367.lpFee;
                const v26226 = v25367.totFee;
                const v26227 = v25367.protoAddr;
                const v26228 = v25367.locked;
                const v26241 = {
                  locked: v26228,
                  lpFee: v26225,
                  protoAddr: v26227,
                  protoFee: v26224,
                  totFee: v26226
                  };
                const v26242 = undefined /* Remote */;
                const v26243 = await txn2.getOutput('internal', 'v26242', ctc17, v26242);
                const v26245 = v26243[stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0')];
                const v26254 = stdlib.add(v25372, v26245);
                const v26255 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'), v26245);
                stdlib.assert(v26255, {
                  at: './index.rsh:181:15:application',
                  fs: ['at ./index.rsh:184:26:application call to "go" (defined at: ./index.rsh:176:30:function exp)', 'at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:174:46:function exp)', 'at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:170:45:function exp)', 'at ./index.rsh:206:59:application call to "evalCommand" (defined at: ./index.rsh:170:33:function exp)', 'at ./index.rsh:226:47:application call to [unknown function] (defined at: ./index.rsh:203:20:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
                  msg: 'remote bill check',
                  who: 'Admin'
                  });
                const cv25365 = v26127;
                const cv25366 = false;
                const cv25367 = v25367;
                const cv25368 = v25368;
                const cv25369 = v25628;
                const cv25372 = v26254;
                
                v25365 = cv25365;
                v25366 = cv25366;
                v25367 = cv25367;
                v25368 = cv25368;
                v25369 = cv25369;
                v25372 = cv25372;
                
                continue;
                break;
                }
              }
            break;
            }
          case 'Kill': {
            const v26265 = v26121[1];
            const cv25365 = v26127;
            const cv25366 = true;
            const cv25367 = v25367;
            const cv25368 = v25368;
            const cv25369 = v25628;
            const cv25372 = v25372;
            
            v25365 = cv25365;
            v25366 = cv25366;
            v25367 = cv25367;
            v25368 = cv25368;
            v25369 = cv25369;
            v25372 = cv25372;
            
            continue;
            break;
            }
          case 'NewInfo': {
            const v26274 = v26121[1];
            const v26275 = v26274.locked;
            const v26276 = v26274.lpFee;
            const v26277 = v26274.protoAddr;
            const v26278 = v26274.protoFee;
            const v26279 = v26274.totFee;
            const v26280 = {
              locked: v26275,
              lpFee: v26276,
              protoAddr: v26277,
              protoFee: v26278,
              totFee: v26279
              };
            const cv25365 = v26127;
            const cv25366 = false;
            const cv25367 = v26280;
            const cv25368 = v25368;
            const cv25369 = v25628;
            const cv25372 = v25372;
            
            v25365 = cv25365;
            v25366 = cv25366;
            v25367 = cv25367;
            v25368 = cv25368;
            v25369 = cv25369;
            v25372 = cv25372;
            
            continue;
            break;
            }
          case 'NewTriumvirs': {
            const v26290 = v26121[1];
            const cv25365 = v26127;
            const cv25366 = false;
            const cv25367 = v25367;
            const cv25368 = v26290;
            const cv25369 = v25628;
            const cv25372 = v25372;
            
            v25365 = cv25365;
            v25366 = cv25366;
            v25367 = cv25367;
            v25368 = cv25368;
            v25369 = cv25369;
            v25372 = cv25372;
            
            continue;
            break;
            }
          case 'NoOp': {
            const v26299 = v26121[1];
            const cv25365 = v26127;
            const cv25366 = false;
            const cv25367 = v25367;
            const cv25368 = v25368;
            const cv25369 = v25628;
            const cv25372 = v25372;
            
            v25365 = cv25365;
            v25366 = cv25366;
            v25367 = cv25367;
            v25368 = cv25368;
            v25369 = cv25369;
            v25372 = cv25372;
            
            continue;
            break;
            }
          case 'Rewards': {
            const v26308 = v26121[1];
            const v26310 = (stdlib.le(await ctc.getBalance(), v25372) ? stdlib.checkedBigNumberify('./index.rsh:190:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v25372));
            const v26311 = stdlib.add(v26310, v25372);
            const v26315 = stdlib.sub(v26311, v26310);
            ;
            const cv25365 = v26127;
            const cv25366 = false;
            const cv25367 = v25367;
            const cv25368 = v25368;
            const cv25369 = v25628;
            const cv25372 = v26315;
            
            v25365 = cv25365;
            v25366 = cv25366;
            v25367 = cv25367;
            v25368 = cv25368;
            v25369 = cv25369;
            v25372 = cv25372;
            
            continue;
            break;
            }
          }
        break;
        }
      case 'register0_24470': {
        const v26362 = v25627[1];
        undefined /* setApiDetails */;
        ;
        const v26691 = v26362[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '0')];
        const v26692 = v26362[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '1')];
        const v26693 = v26362[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '2')];
        const v26694 = stdlib.ctcAddrEq(v26691, v25626);
        stdlib.assert(v26694, {
          at: './index.rsh:153:14:application',
          fs: ['at ./index.rsh:216:33:application call to "doRegister" (defined at: ./index.rsh:152:54:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
          msg: 'not contract',
          who: 'Admin'
          });
        const v26695 = v25367.protoFee;
        const v26696 = v25367.lpFee;
        const v26697 = v25367.totFee;
        const v26698 = v25367.protoAddr;
        const v26699 = v25367.locked;
        const v26700 = {
          locked: v26699,
          lpFee: v26696,
          protoAddr: v26698,
          protoFee: v26695,
          totFee: v26697
          };
        await txn2.getOutput('register', 'v26700', ctc9, v26700);
        null;
        const cv25365 = v25365;
        const cv25366 = false;
        const cv25367 = v25367;
        const cv25368 = v25368;
        const cv25369 = v25628;
        const cv25372 = v25372;
        
        v25365 = cv25365;
        v25366 = cv25366;
        v25367 = cv25367;
        v25368 = cv25368;
        v25369 = cv25369;
        v25372 = cv25372;
        
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
    Triumvir_propose0_24470: ctc13,
    Triumvir_support0_24470: ctc14,
    register0_24470: ctc15
    });
  
  
  const [v25353, v25365, v25367, v25368, v25372] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v25447 = ctc.selfAddress();
  const v25449 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:219:11:application call to [unknown function] (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_propose0_24470" (defined at: ./index.rsh:218:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_propose'
    });
  const v25450 = v25449[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v25473;
  switch (v25450[0]) {
    case 'Harvest': {
      const v25474 = v25450[1];
      v25473 = true;
      
      break;
      }
    case 'Kill': {
      const v25475 = v25450[1];
      v25473 = true;
      
      break;
      }
    case 'NewInfo': {
      const v25476 = v25450[1];
      const v25477 = v25476.protoFee;
      const v25478 = v25476.lpFee;
      const v25479 = v25476.totFee;
      const v25480 = stdlib.lt(v25477, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v25481 = stdlib.lt(v25478, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v25482 = v25480 ? v25481 : false;
      const v25483 = stdlib.add(v25478, v25477);
      const v25484 = stdlib.eq(v25479, v25483);
      const v25485 = v25482 ? v25484 : false;
      const v25486 = stdlib.lt(v25479, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v25487 = v25485 ? v25486 : false;
      const v25488 = stdlib.gt(v25479, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v25489 = v25487 ? v25488 : false;
      v25473 = v25489;
      
      break;
      }
    case 'NewTriumvirs': {
      const v25490 = v25450[1];
      v25473 = true;
      
      break;
      }
    case 'NoOp': {
      const v25491 = v25450[1];
      v25473 = true;
      
      break;
      }
    case 'Rewards': {
      const v25492 = v25450[1];
      v25473 = true;
      
      break;
      }
    }
  stdlib.assert(v25473, {
    at: './index.rsh:161:14:application',
    fs: ['at ./index.rsh:219:35:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:219:11:application call to [unknown function] (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:219:11:application call to [unknown function] (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_propose0_24470" (defined at: ./index.rsh:218:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'invalid command',
    who: 'Triumvir_propose'
    });
  const v25493 = ['None', null];
  const v25494 = await stdlib.Array_asyncReduce([v25368], v25493, async([v25496], v25495, v25497) => {
    let v25498;
    switch (v25495[0]) {
      case 'None': {
        const v25499 = v25495[1];
        v25498 = true;
        
        break;
        }
      case 'Some': {
        const v25500 = v25495[1];
        v25498 = false;
        
        break;
        }
      }
    const v25501 = stdlib.addressEq(v25447, v25496);
    const v25502 = v25498 ? v25501 : false;
    const v25503 = ['Some', v25497];
    const v25504 = v25502 ? v25503 : v25495;
    
    return v25504;})
  let v25505;
  switch (v25494[0]) {
    case 'None': {
      const v25506 = v25494[1];
      v25505 = false;
      
      break;
      }
    case 'Some': {
      const v25507 = v25494[1];
      v25505 = true;
      
      break;
      }
    }
  stdlib.assert(v25505, {
    at: './index.rsh:149:14:application',
    fs: ['at ./index.rsh:162:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:219:35:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:219:11:application call to [unknown function] (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:219:11:application call to [unknown function] (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_propose0_24470" (defined at: ./index.rsh:218:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_propose'
    });
  const v25534 = ['Triumvir_propose0_24470', v25449];
  
  const txn1 = await (ctc.sendrecv({
    args: [v25353, v25365, v25367, v25368, v25372, v25534],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:220:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25627], secs: v25629, time: v25628, didSend: v24939, from: v25626 } = txn1;
      
      switch (v25627[0]) {
        case 'Triumvir_propose0_24470': {
          const v25630 = v25627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_propose"
            });
          ;
          const v25644 = v25630[stdlib.checkedBigNumberify('./index.rsh:218:9:spread', stdlib.UInt_max, '0')];
          let v25645;
          switch (v25644[0]) {
            case 'Harvest': {
              const v25646 = v25644[1];
              v25645 = true;
              
              break;
              }
            case 'Kill': {
              const v25647 = v25644[1];
              v25645 = true;
              
              break;
              }
            case 'NewInfo': {
              const v25648 = v25644[1];
              const v25649 = v25648.protoFee;
              const v25650 = v25648.lpFee;
              const v25651 = v25648.totFee;
              const v25652 = stdlib.lt(v25649, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
              const v25653 = stdlib.lt(v25650, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
              const v25654 = v25652 ? v25653 : false;
              const v25655 = stdlib.add(v25650, v25649);
              const v25656 = stdlib.eq(v25651, v25655);
              const v25657 = v25654 ? v25656 : false;
              const v25658 = stdlib.lt(v25651, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
              const v25659 = v25657 ? v25658 : false;
              const v25660 = stdlib.gt(v25651, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
              const v25661 = v25659 ? v25660 : false;
              v25645 = v25661;
              
              break;
              }
            case 'NewTriumvirs': {
              const v25662 = v25644[1];
              v25645 = true;
              
              break;
              }
            case 'NoOp': {
              const v25663 = v25644[1];
              v25645 = true;
              
              break;
              }
            case 'Rewards': {
              const v25664 = v25644[1];
              v25645 = true;
              
              break;
              }
            }
          ;
          const v25665 = ['None', null];
          const v25666 = await stdlib.Array_asyncReduce([v25368], v25665, async([v25668], v25667, v25669) => {
            let v25670;
            switch (v25667[0]) {
              case 'None': {
                const v25671 = v25667[1];
                v25670 = true;
                
                break;
                }
              case 'Some': {
                const v25672 = v25667[1];
                v25670 = false;
                
                break;
                }
              }
            const v25673 = stdlib.addressEq(v25626, v25668);
            const v25674 = v25670 ? v25673 : false;
            const v25675 = ['Some', v25669];
            const v25676 = v25674 ? v25675 : v25667;
            
            return v25676;})
          let v25677;
          switch (v25666[0]) {
            case 'None': {
              const v25678 = v25666[1];
              v25677 = false;
              
              break;
              }
            case 'Some': {
              const v25679 = v25666[1];
              v25677 = true;
              
              break;
              }
            }
          ;
          const v25680 = stdlib.fromSome(v25666, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
          const v25682 = stdlib.Array_set(v25365, v25680, v25644);
          const v25683 = null;
          const v25684 = await txn1.getOutput('Triumvir_propose', 'v25683', ctc1, v25683);
          
          null;
          const v32442 = v25682;
          const v32444 = v25367;
          const v32445 = v25368;
          const v32447 = v25372;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Triumvir_support0_24470': {
          const v25996 = v25627[1];
          
          break;
          }
        case 'register0_24470': {
          const v26362 = v25627[1];
          
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
  const {data: [v25627], secs: v25629, time: v25628, didSend: v24939, from: v25626 } = txn1;
  switch (v25627[0]) {
    case 'Triumvir_propose0_24470': {
      const v25630 = v25627[1];
      undefined /* setApiDetails */;
      ;
      const v25644 = v25630[stdlib.checkedBigNumberify('./index.rsh:218:9:spread', stdlib.UInt_max, '0')];
      let v25645;
      switch (v25644[0]) {
        case 'Harvest': {
          const v25646 = v25644[1];
          v25645 = true;
          
          break;
          }
        case 'Kill': {
          const v25647 = v25644[1];
          v25645 = true;
          
          break;
          }
        case 'NewInfo': {
          const v25648 = v25644[1];
          const v25649 = v25648.protoFee;
          const v25650 = v25648.lpFee;
          const v25651 = v25648.totFee;
          const v25652 = stdlib.lt(v25649, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
          const v25653 = stdlib.lt(v25650, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
          const v25654 = v25652 ? v25653 : false;
          const v25655 = stdlib.add(v25650, v25649);
          const v25656 = stdlib.eq(v25651, v25655);
          const v25657 = v25654 ? v25656 : false;
          const v25658 = stdlib.lt(v25651, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v25659 = v25657 ? v25658 : false;
          const v25660 = stdlib.gt(v25651, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v25661 = v25659 ? v25660 : false;
          v25645 = v25661;
          
          break;
          }
        case 'NewTriumvirs': {
          const v25662 = v25644[1];
          v25645 = true;
          
          break;
          }
        case 'NoOp': {
          const v25663 = v25644[1];
          v25645 = true;
          
          break;
          }
        case 'Rewards': {
          const v25664 = v25644[1];
          v25645 = true;
          
          break;
          }
        }
      stdlib.assert(v25645, {
        at: './index.rsh:161:14:application',
        fs: ['at ./index.rsh:221:26:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:221:14:application call to [unknown function] (defined at: ./index.rsh:221:14:function exp)'],
        msg: 'invalid command',
        who: 'Triumvir_propose'
        });
      const v25665 = ['None', null];
      const v25666 = await stdlib.Array_asyncReduce([v25368], v25665, async([v25668], v25667, v25669) => {
        let v25670;
        switch (v25667[0]) {
          case 'None': {
            const v25671 = v25667[1];
            v25670 = true;
            
            break;
            }
          case 'Some': {
            const v25672 = v25667[1];
            v25670 = false;
            
            break;
            }
          }
        const v25673 = stdlib.addressEq(v25626, v25668);
        const v25674 = v25670 ? v25673 : false;
        const v25675 = ['Some', v25669];
        const v25676 = v25674 ? v25675 : v25667;
        
        return v25676;})
      let v25677;
      switch (v25666[0]) {
        case 'None': {
          const v25678 = v25666[1];
          v25677 = false;
          
          break;
          }
        case 'Some': {
          const v25679 = v25666[1];
          v25677 = true;
          
          break;
          }
        }
      stdlib.assert(v25677, {
        at: './index.rsh:149:14:application',
        fs: ['at ./index.rsh:162:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:221:26:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:221:14:application call to [unknown function] (defined at: ./index.rsh:221:14:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_propose'
        });
      const v25680 = stdlib.fromSome(v25666, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
      const v25682 = stdlib.Array_set(v25365, v25680, v25644);
      const v25683 = null;
      const v25684 = await txn1.getOutput('Triumvir_propose', 'v25683', ctc1, v25683);
      if (v24939) {
        stdlib.protect(ctc1, await interact.out(v25630, v25684), {
          at: './index.rsh:218:10:application',
          fs: ['at ./index.rsh:218:10:application call to [unknown function] (defined at: ./index.rsh:218:10:function exp)', 'at ./index.rsh:165:12:application call to "k" (defined at: ./index.rsh:221:14:function exp)', 'at ./index.rsh:221:35:application call to [unknown function] (defined at: ./index.rsh:164:20:function exp)', 'at ./index.rsh:221:14:application call to [unknown function] (defined at: ./index.rsh:221:14:function exp)'],
          msg: 'out',
          who: 'Triumvir_propose'
          });
        }
      else {
        }
      
      null;
      const v32442 = v25682;
      const v32444 = v25367;
      const v32445 = v25368;
      const v32447 = v25372;
      return;
      
      break;
      }
    case 'Triumvir_support0_24470': {
      const v25996 = v25627[1];
      return;
      break;
      }
    case 'register0_24470': {
      const v26362 = v25627[1];
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
    Triumvir_propose0_24470: ctc14,
    Triumvir_support0_24470: ctc13,
    register0_24470: ctc15
    });
  const ctc17 = stdlib.T_Struct([['A', ctc6], ['B', ctc6]]);
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc18]);
  
  
  const [v25353, v25365, v25367, v25368, v25372] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v25536 = ctc.selfAddress();
  const v25538 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:224:17:application call to [unknown function] (defined at: ./index.rsh:224:17:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_24470" (defined at: ./index.rsh:223:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_support'
    });
  const v25539 = v25538[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v25540 = v25538[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v25564 = stdlib.lt(v25539, stdlib.checkedBigNumberify('./index.rsh:197:31:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v25564, {
    at: './index.rsh:197:14:application',
    fs: ['at ./index.rsh:224:41:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:224:17:application call to [unknown function] (defined at: ./index.rsh:224:17:function exp)', 'at ./index.rsh:224:17:application call to [unknown function] (defined at: ./index.rsh:224:17:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_24470" (defined at: ./index.rsh:223:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'illegal idx',
    who: 'Triumvir_support'
    });
  const v25565 = ['None', null];
  const v25566 = await stdlib.Array_asyncReduce([v25368], v25565, async([v25568], v25567, v25569) => {
    let v25570;
    switch (v25567[0]) {
      case 'None': {
        const v25571 = v25567[1];
        v25570 = true;
        
        break;
        }
      case 'Some': {
        const v25572 = v25567[1];
        v25570 = false;
        
        break;
        }
      }
    const v25573 = stdlib.addressEq(v25536, v25568);
    const v25574 = v25570 ? v25573 : false;
    const v25575 = ['Some', v25569];
    const v25576 = v25574 ? v25575 : v25567;
    
    return v25576;})
  let v25577;
  switch (v25566[0]) {
    case 'None': {
      const v25578 = v25566[1];
      v25577 = false;
      
      break;
      }
    case 'Some': {
      const v25579 = v25566[1];
      v25577 = true;
      
      break;
      }
    }
  stdlib.assert(v25577, {
    at: './index.rsh:149:14:application',
    fs: ['at ./index.rsh:198:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:224:41:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:224:17:application call to [unknown function] (defined at: ./index.rsh:224:17:function exp)', 'at ./index.rsh:224:17:application call to [unknown function] (defined at: ./index.rsh:224:17:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_24470" (defined at: ./index.rsh:223:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_support'
    });
  const v25580 = stdlib.fromSome(v25566, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
  const v25581 = stdlib.eq(v25539, v25580);
  const v25582 = v25581 ? false : true;
  stdlib.assert(v25582, {
    at: './index.rsh:199:14:application',
    fs: ['at ./index.rsh:224:41:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:224:17:application call to [unknown function] (defined at: ./index.rsh:224:17:function exp)', 'at ./index.rsh:224:17:application call to [unknown function] (defined at: ./index.rsh:224:17:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_24470" (defined at: ./index.rsh:223:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'cannot support self',
    who: 'Triumvir_support'
    });
  const v25584 = v25365[v25539];
  const v25585 = stdlib.digest(ctc14, [v25540]);
  const v25586 = stdlib.digest(ctc14, [v25584]);
  const v25587 = stdlib.digestEq(v25585, v25586);
  stdlib.assert(v25587, {
    at: './index.rsh:201:14:application',
    fs: ['at ./index.rsh:224:41:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:224:17:application call to [unknown function] (defined at: ./index.rsh:224:17:function exp)', 'at ./index.rsh:224:17:application call to [unknown function] (defined at: ./index.rsh:224:17:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_24470" (defined at: ./index.rsh:223:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'command switched',
    who: 'Triumvir_support'
    });
  const v25615 = ['Triumvir_support0_24470', v25538];
  
  const txn1 = await (ctc.sendrecv({
    args: [v25353, v25365, v25367, v25368, v25372, v25615],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:225:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25627], secs: v25629, time: v25628, didSend: v24939, from: v25626 } = txn1;
      
      switch (v25627[0]) {
        case 'Triumvir_propose0_24470': {
          const v25630 = v25627[1];
          
          break;
          }
        case 'Triumvir_support0_24470': {
          const v25996 = v25627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_support"
            });
          ;
          const v26099 = v25996[stdlib.checkedBigNumberify('./index.rsh:223:9:spread', stdlib.UInt_max, '0')];
          const v26100 = v25996[stdlib.checkedBigNumberify('./index.rsh:223:9:spread', stdlib.UInt_max, '1')];
          const v26101 = stdlib.lt(v26099, stdlib.checkedBigNumberify('./index.rsh:197:31:dot', stdlib.UInt_max, '3'));
          ;
          const v26102 = ['None', null];
          const v26103 = await stdlib.Array_asyncReduce([v25368], v26102, async([v26105], v26104, v26106) => {
            let v26107;
            switch (v26104[0]) {
              case 'None': {
                const v26108 = v26104[1];
                v26107 = true;
                
                break;
                }
              case 'Some': {
                const v26109 = v26104[1];
                v26107 = false;
                
                break;
                }
              }
            const v26110 = stdlib.addressEq(v25626, v26105);
            const v26111 = v26107 ? v26110 : false;
            const v26112 = ['Some', v26106];
            const v26113 = v26111 ? v26112 : v26104;
            
            return v26113;})
          let v26114;
          switch (v26103[0]) {
            case 'None': {
              const v26115 = v26103[1];
              v26114 = false;
              
              break;
              }
            case 'Some': {
              const v26116 = v26103[1];
              v26114 = true;
              
              break;
              }
            }
          ;
          const v26117 = stdlib.fromSome(v26103, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
          const v26118 = stdlib.eq(v26099, v26117);
          const v26119 = v26118 ? false : true;
          ;
          const v26121 = v25365[v26099];
          const v26122 = stdlib.digest(ctc14, [v26100]);
          const v26123 = stdlib.digest(ctc14, [v26121]);
          const v26124 = stdlib.digestEq(v26122, v26123);
          ;
          const v26127 = stdlib.Array_set(v25365, v26099, v25353);
          const v26128 = null;
          const v26129 = await txn1.getOutput('Triumvir_support', 'v26128', ctc1, v26128);
          
          null;
          switch (v26121[0]) {
            case 'Harvest': {
              const v26176 = v26121[1];
              const v26177 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '0')];
              const v26178 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '1')];
              const v26179 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '2')];
              const v26180 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '3')];
              switch (v26178[0]) {
                case 'None': {
                  const v26181 = v26178[1];
                  const v26182 = v25367.protoFee;
                  const v26183 = v25367.lpFee;
                  const v26184 = v25367.totFee;
                  const v26185 = v25367.protoAddr;
                  const v26186 = v25367.locked;
                  const v26199 = {
                    locked: v26186,
                    lpFee: v26183,
                    protoAddr: v26185,
                    protoFee: v26182,
                    totFee: v26184
                    };
                  const v26200 = [stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
                    accs: [v26180],
                    bills: stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('./index.rsh:178:40:application', stdlib.UInt_max, '2'),
                    kind: 'remote',
                    obj: v26177,
                    pays: stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'),
                    toks: [v26179]
                    })), undefined)];
                  const v26201 = await txn1.getOutput('internal', 'v26200', ctc19, v26200);
                  const v26203 = v26201[stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0')];
                  const v26212 = stdlib.add(v25372, v26203);
                  const v26213 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'), v26203);
                  ;
                  const v32512 = v26127;
                  const v32514 = v25367;
                  const v32515 = v25368;
                  const v32517 = v26212;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'Some': {
                  const v26223 = v26178[1];
                  const v26224 = v25367.protoFee;
                  const v26225 = v25367.lpFee;
                  const v26226 = v25367.totFee;
                  const v26227 = v25367.protoAddr;
                  const v26228 = v25367.locked;
                  const v26241 = {
                    locked: v26228,
                    lpFee: v26225,
                    protoAddr: v26227,
                    protoFee: v26224,
                    totFee: v26226
                    };
                  const v26242 = [stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
                    accs: [v26180],
                    bills: stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('./index.rsh:178:40:application', stdlib.UInt_max, '3'),
                    kind: 'remote',
                    obj: v26177,
                    pays: stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'),
                    toks: [v26223, v26179]
                    })), undefined)];
                  const v26243 = await txn1.getOutput('internal', 'v26242', ctc19, v26242);
                  const v26245 = v26243[stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0')];
                  const v26254 = stdlib.add(v25372, v26245);
                  const v26255 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'), v26245);
                  ;
                  const v32519 = v26127;
                  const v32521 = v25367;
                  const v32522 = v25368;
                  const v32524 = v26254;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                }
              break;
              }
            case 'Kill': {
              const v26265 = v26121[1];
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              break;
              }
            case 'NewInfo': {
              const v26274 = v26121[1];
              const v26275 = v26274.locked;
              const v26276 = v26274.lpFee;
              const v26277 = v26274.protoAddr;
              const v26278 = v26274.protoFee;
              const v26279 = v26274.totFee;
              const v26280 = {
                locked: v26275,
                lpFee: v26276,
                protoAddr: v26277,
                protoFee: v26278,
                totFee: v26279
                };
              const v32533 = v26127;
              const v32535 = v26280;
              const v32536 = v25368;
              const v32538 = v25372;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NewTriumvirs': {
              const v26290 = v26121[1];
              const v32540 = v26127;
              const v32542 = v25367;
              const v32543 = v26290;
              const v32545 = v25372;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NoOp': {
              const v26299 = v26121[1];
              const v32547 = v26127;
              const v32549 = v25367;
              const v32550 = v25368;
              const v32552 = v25372;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Rewards': {
              const v26308 = v26121[1];
              const v26310 = (stdlib.le(await ctc.getBalance(), v25372) ? stdlib.checkedBigNumberify('./index.rsh:190:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v25372));
              const v26311 = stdlib.add(v26310, v25372);
              const v26315 = stdlib.sub(v26311, v26310);
              sim_r.txns.push({
                amt: v26310,
                kind: 'from',
                to: v26308,
                tok: undefined /* Nothing */
                });
              const v32554 = v26127;
              const v32556 = v25367;
              const v32557 = v25368;
              const v32559 = v26315;
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'register0_24470': {
          const v26362 = v25627[1];
          
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
  const {data: [v25627], secs: v25629, time: v25628, didSend: v24939, from: v25626 } = txn1;
  switch (v25627[0]) {
    case 'Triumvir_propose0_24470': {
      const v25630 = v25627[1];
      return;
      break;
      }
    case 'Triumvir_support0_24470': {
      const v25996 = v25627[1];
      undefined /* setApiDetails */;
      ;
      const v26099 = v25996[stdlib.checkedBigNumberify('./index.rsh:223:9:spread', stdlib.UInt_max, '0')];
      const v26100 = v25996[stdlib.checkedBigNumberify('./index.rsh:223:9:spread', stdlib.UInt_max, '1')];
      const v26101 = stdlib.lt(v26099, stdlib.checkedBigNumberify('./index.rsh:197:31:dot', stdlib.UInt_max, '3'));
      stdlib.assert(v26101, {
        at: './index.rsh:197:14:application',
        fs: ['at ./index.rsh:226:32:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
        msg: 'illegal idx',
        who: 'Triumvir_support'
        });
      const v26102 = ['None', null];
      const v26103 = await stdlib.Array_asyncReduce([v25368], v26102, async([v26105], v26104, v26106) => {
        let v26107;
        switch (v26104[0]) {
          case 'None': {
            const v26108 = v26104[1];
            v26107 = true;
            
            break;
            }
          case 'Some': {
            const v26109 = v26104[1];
            v26107 = false;
            
            break;
            }
          }
        const v26110 = stdlib.addressEq(v25626, v26105);
        const v26111 = v26107 ? v26110 : false;
        const v26112 = ['Some', v26106];
        const v26113 = v26111 ? v26112 : v26104;
        
        return v26113;})
      let v26114;
      switch (v26103[0]) {
        case 'None': {
          const v26115 = v26103[1];
          v26114 = false;
          
          break;
          }
        case 'Some': {
          const v26116 = v26103[1];
          v26114 = true;
          
          break;
          }
        }
      stdlib.assert(v26114, {
        at: './index.rsh:149:14:application',
        fs: ['at ./index.rsh:198:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:226:32:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_support'
        });
      const v26117 = stdlib.fromSome(v26103, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
      const v26118 = stdlib.eq(v26099, v26117);
      const v26119 = v26118 ? false : true;
      stdlib.assert(v26119, {
        at: './index.rsh:199:14:application',
        fs: ['at ./index.rsh:226:32:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
        msg: 'cannot support self',
        who: 'Triumvir_support'
        });
      const v26121 = v25365[v26099];
      const v26122 = stdlib.digest(ctc14, [v26100]);
      const v26123 = stdlib.digest(ctc14, [v26121]);
      const v26124 = stdlib.digestEq(v26122, v26123);
      stdlib.assert(v26124, {
        at: './index.rsh:201:14:application',
        fs: ['at ./index.rsh:226:32:application call to "doSupport" (defined at: ./index.rsh:196:42:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
        msg: 'command switched',
        who: 'Triumvir_support'
        });
      const v26127 = stdlib.Array_set(v25365, v26099, v25353);
      const v26128 = null;
      const v26129 = await txn1.getOutput('Triumvir_support', 'v26128', ctc1, v26128);
      if (v24939) {
        stdlib.protect(ctc1, await interact.out(v25996, v26129), {
          at: './index.rsh:223:10:application',
          fs: ['at ./index.rsh:223:10:application call to [unknown function] (defined at: ./index.rsh:223:10:function exp)', 'at ./index.rsh:204:12:application call to "k" (defined at: ./index.rsh:226:20:function exp)', 'at ./index.rsh:226:47:application call to [unknown function] (defined at: ./index.rsh:203:20:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
          msg: 'out',
          who: 'Triumvir_support'
          });
        }
      else {
        }
      
      null;
      switch (v26121[0]) {
        case 'Harvest': {
          const v26176 = v26121[1];
          const v26177 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '0')];
          const v26178 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '1')];
          const v26179 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '2')];
          const v26180 = v26176[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '3')];
          switch (v26178[0]) {
            case 'None': {
              const v26181 = v26178[1];
              const v26182 = v25367.protoFee;
              const v26183 = v25367.lpFee;
              const v26184 = v25367.totFee;
              const v26185 = v25367.protoAddr;
              const v26186 = v25367.locked;
              const v26199 = {
                locked: v26186,
                lpFee: v26183,
                protoAddr: v26185,
                protoFee: v26182,
                totFee: v26184
                };
              const v26200 = undefined /* Remote */;
              const v26201 = await txn1.getOutput('internal', 'v26200', ctc19, v26200);
              const v26203 = v26201[stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0')];
              const v26212 = stdlib.add(v25372, v26203);
              const v26213 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'), v26203);
              stdlib.assert(v26213, {
                at: './index.rsh:181:15:application',
                fs: ['at ./index.rsh:185:26:application call to "go" (defined at: ./index.rsh:176:30:function exp)', 'at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:174:46:function exp)', 'at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:170:45:function exp)', 'at ./index.rsh:206:59:application call to "evalCommand" (defined at: ./index.rsh:170:33:function exp)', 'at ./index.rsh:226:47:application call to [unknown function] (defined at: ./index.rsh:203:20:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
                msg: 'remote bill check',
                who: 'Triumvir_support'
                });
              const v32512 = v26127;
              const v32514 = v25367;
              const v32515 = v25368;
              const v32517 = v26212;
              return;
              
              break;
              }
            case 'Some': {
              const v26223 = v26178[1];
              const v26224 = v25367.protoFee;
              const v26225 = v25367.lpFee;
              const v26226 = v25367.totFee;
              const v26227 = v25367.protoAddr;
              const v26228 = v25367.locked;
              const v26241 = {
                locked: v26228,
                lpFee: v26225,
                protoAddr: v26227,
                protoFee: v26224,
                totFee: v26226
                };
              const v26242 = undefined /* Remote */;
              const v26243 = await txn1.getOutput('internal', 'v26242', ctc19, v26242);
              const v26245 = v26243[stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0')];
              const v26254 = stdlib.add(v25372, v26245);
              const v26255 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:181:15:application', stdlib.UInt_max, '0'), v26245);
              stdlib.assert(v26255, {
                at: './index.rsh:181:15:application',
                fs: ['at ./index.rsh:184:26:application call to "go" (defined at: ./index.rsh:176:30:function exp)', 'at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:174:46:function exp)', 'at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:170:45:function exp)', 'at ./index.rsh:206:59:application call to "evalCommand" (defined at: ./index.rsh:170:33:function exp)', 'at ./index.rsh:226:47:application call to [unknown function] (defined at: ./index.rsh:203:20:function exp)', 'at ./index.rsh:226:20:application call to [unknown function] (defined at: ./index.rsh:226:20:function exp)'],
                msg: 'remote bill check',
                who: 'Triumvir_support'
                });
              const v32519 = v26127;
              const v32521 = v25367;
              const v32522 = v25368;
              const v32524 = v26254;
              return;
              
              break;
              }
            }
          break;
          }
        case 'Kill': {
          const v26265 = v26121[1];
          return;
          
          break;
          }
        case 'NewInfo': {
          const v26274 = v26121[1];
          const v26275 = v26274.locked;
          const v26276 = v26274.lpFee;
          const v26277 = v26274.protoAddr;
          const v26278 = v26274.protoFee;
          const v26279 = v26274.totFee;
          const v26280 = {
            locked: v26275,
            lpFee: v26276,
            protoAddr: v26277,
            protoFee: v26278,
            totFee: v26279
            };
          const v32533 = v26127;
          const v32535 = v26280;
          const v32536 = v25368;
          const v32538 = v25372;
          return;
          
          break;
          }
        case 'NewTriumvirs': {
          const v26290 = v26121[1];
          const v32540 = v26127;
          const v32542 = v25367;
          const v32543 = v26290;
          const v32545 = v25372;
          return;
          
          break;
          }
        case 'NoOp': {
          const v26299 = v26121[1];
          const v32547 = v26127;
          const v32549 = v25367;
          const v32550 = v25368;
          const v32552 = v25372;
          return;
          
          break;
          }
        case 'Rewards': {
          const v26308 = v26121[1];
          const v26310 = (stdlib.le(await ctc.getBalance(), v25372) ? stdlib.checkedBigNumberify('./index.rsh:190:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v25372));
          const v26311 = stdlib.add(v26310, v25372);
          const v26315 = stdlib.sub(v26311, v26310);
          ;
          const v32554 = v26127;
          const v32556 = v25367;
          const v32557 = v25368;
          const v32559 = v26315;
          return;
          
          break;
          }
        }
      break;
      }
    case 'register0_24470': {
      const v26362 = v25627[1];
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
    Triumvir_propose0_24470: ctc14,
    Triumvir_support0_24470: ctc15,
    register0_24470: ctc13
    });
  
  
  const [v25353, v25365, v25367, v25368, v25372] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v25425 = ctc.selfAddress();
  const v25427 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:134:19:application call to "runregister0_24470" (defined at: ./index.rsh:213:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v25428 = v25427[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v25437 = stdlib.ctcAddrEq(v25428, v25425);
  stdlib.assert(v25437, {
    at: './index.rsh:153:14:application',
    fs: ['at ./index.rsh:214:42:application call to "doRegister" (defined at: ./index.rsh:152:54:function exp)', 'at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:134:19:application call to "runregister0_24470" (defined at: ./index.rsh:213:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'not contract',
    who: 'register'
    });
  const v25445 = ['register0_24470', v25427];
  
  const txn1 = await (ctc.sendrecv({
    args: [v25353, v25365, v25367, v25368, v25372, v25445],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:215:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25627], secs: v25629, time: v25628, didSend: v24939, from: v25626 } = txn1;
      
      switch (v25627[0]) {
        case 'Triumvir_propose0_24470': {
          const v25630 = v25627[1];
          
          break;
          }
        case 'Triumvir_support0_24470': {
          const v25996 = v25627[1];
          
          break;
          }
        case 'register0_24470': {
          const v26362 = v25627[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          ;
          const v26691 = v26362[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '0')];
          const v26692 = v26362[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '1')];
          const v26693 = v26362[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '2')];
          const v26694 = stdlib.ctcAddrEq(v26691, v25626);
          ;
          const v26695 = v25367.protoFee;
          const v26696 = v25367.lpFee;
          const v26697 = v25367.totFee;
          const v26698 = v25367.protoAddr;
          const v26699 = v25367.locked;
          const v26700 = {
            locked: v26699,
            lpFee: v26696,
            protoAddr: v26698,
            protoFee: v26695,
            totFee: v26697
            };
          const v26701 = await txn1.getOutput('register', 'v26700', ctc8, v26700);
          
          null;
          const v32624 = v25365;
          const v32626 = v25367;
          const v32627 = v25368;
          const v32629 = v25372;
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
  const {data: [v25627], secs: v25629, time: v25628, didSend: v24939, from: v25626 } = txn1;
  switch (v25627[0]) {
    case 'Triumvir_propose0_24470': {
      const v25630 = v25627[1];
      return;
      break;
      }
    case 'Triumvir_support0_24470': {
      const v25996 = v25627[1];
      return;
      break;
      }
    case 'register0_24470': {
      const v26362 = v25627[1];
      undefined /* setApiDetails */;
      ;
      const v26691 = v26362[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '0')];
      const v26692 = v26362[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '1')];
      const v26693 = v26362[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '2')];
      const v26694 = stdlib.ctcAddrEq(v26691, v25626);
      stdlib.assert(v26694, {
        at: './index.rsh:153:14:application',
        fs: ['at ./index.rsh:216:33:application call to "doRegister" (defined at: ./index.rsh:152:54:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
        msg: 'not contract',
        who: 'register'
        });
      const v26695 = v25367.protoFee;
      const v26696 = v25367.lpFee;
      const v26697 = v25367.totFee;
      const v26698 = v25367.protoAddr;
      const v26699 = v25367.locked;
      const v26700 = {
        locked: v26699,
        lpFee: v26696,
        protoAddr: v26698,
        protoFee: v26695,
        totFee: v26697
        };
      const v26701 = await txn1.getOutput('register', 'v26700', ctc8, v26700);
      if (v24939) {
        stdlib.protect(ctc1, await interact.out(v26362, v26701), {
          at: './index.rsh:213:10:application',
          fs: ['at ./index.rsh:213:10:application call to [unknown function] (defined at: ./index.rsh:213:10:function exp)', 'at ./index.rsh:155:12:application call to "k" (defined at: ./index.rsh:216:20:function exp)', 'at ./index.rsh:216:48:application call to [unknown function] (defined at: ./index.rsh:154:20:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      null;
      const v32624 = v25365;
      const v32626 = v25367;
      const v32627 = v25368;
      const v32629 = v25372;
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
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Triumvir_propose3(ctcTop, interact);}
  };
export async function Triumvir_support(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Triumvir_support expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Triumvir_support expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Triumvir_support3(ctcTop, interact);}
  };
export async function register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _register3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Triumvir_propose((byte,byte[96]))byte[0]`, `Triumvir_support(uint64,(byte,byte[96]))byte[0]`, `register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)`],
    pure: [`Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))`],
    sigs: [`Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))`, `Triumvir_propose((byte,byte[96]))byte[0]`, `Triumvir_support(uint64,(byte,byte[96]))byte[0]`, `register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)`]
    },
  appApproval: `BiAUAAEDYQIFowIgCGTMms7XBMWA36QO6JToygSEAzm9A2AJBAYmCAEBAAEAAQIBAwEEBWFwcElEBCiaRG4iNQAxGEEHeylkSSJbNQEhCFs1AjYaABdJQQC3IjUEIzUGSSEKDEAAL0khCwxAABQhCxJENhoBNf8qNP9QIQivUEIApyEKEkQ2GgE2GgJQNf8oNP9QQgCTSSEMDEAAHCEMEkQ2GgE2GgJQNhoDUDX/KzT/UIFQr1BCAHCB9rvQ5QESRDQBJBJEKmQoZFArZFAnBGRQJwVkUEk1AyENIQ5YNf80AyEPIRBYNAMlIQZYUDT/VykINP9XAQhQNP9XMQhQNP9XCSBQNP9XAAFQUDUHQgaoNhoCFzUENhoDNhoBF0khBAxABS8hBBJEJDQBEkQ0BEkiEkw0AhIRRCpkKGRQK2RQJwRkUCcFZFBJNQNJSklXAGE1/yUhBlg1/iENIQ5YNf0hDyEQWDX8gZ0EWzX7STUFNfqABKLqoRI0+lCwNPoiVUkjDEADhEkhBAxAAIshBBJENPpXARk19zT3Ils19icGNPYWUAMxABJEgAgAAAAAAABoTDT9VykINP1XAQhQNP1XMQhQNP1XCSBQNP1XAAFQULA0/VcpCDT9VwEIUDT9VzEIUDT9VwkgUDT9VwABUDUHgAS6Xf0zNPYWUDT3VwgJUDT3VxEIULA0/zT+IjT9NPwyBjT7QgT9SDT6VwFpNfc09yJbSTX2JAxEIRGvNfUiNfQ0/CEHNPQLIQdYNfM09SJVQAAGIzXyQgAGIjXyQgAANPUoNPQWUDTyMQA08xIQTTX1NPQjCEk19CQMQP/DNPUiVUAABiI19EIABiM19EIAADT0RDT2IjT1STXzI1s08yJVTRNENP4lNPYLJVg18zT3VwhhATTzARJENP4iJTT2C1I0/1A0/iVJNPYLCCEGUlA18oAIAAAAAAAAZhCwKTUHgASiIOREMQBQNPYWUDTzULA08yJVSSQMQAB0SSESDEAAVUkhBQxAAD0hBRJENPNXASA18TIKYDIKeAk0+wk18LEisgE08LIII7IQNPGyB7M0/zTyIjT9NPwyBjTwNPsINPAJQgPdSDT/NPIiNP00/DIGNPtCA8xINPNXAWA18TT/NPIiNP008TIGNPtCA7RJIwxAAEtJIQQMQAAzSDTzVwE5NfE0/zTyIjTxVzgBNPFXCAhQNPFXGCBQNPFXAAhQNPFXEAhQNPwyBjT7QgN0SDT/NPIjNP00/DIGNPtCA2NINPNXATlJNfEiWzXwNPGBEVs17zTxVxkgNe408VcICUk17SJVQACTJwY08BZQAzXrMgpgMgp4CRY16rEisgEhE7IQNPCyGCcHsho07rIaNP1XKQg0/VcBCFA0/VcxCFA0/VcJIFA0/VcAAVCyGjTvsjA07rIcszIKYDIKeAk06hcJFrcAPlcEAFA17IAIAAAAAAAAZlg07FCwNOxJNesiWzXqIjTqEkQ0/zTyIjT9NPwyBjT7NOoIQgKoNO0jWzXsJwY08BZQAzXqMgpgMgp4CRY16bEisgEhE7IQNPCyGCcHsho07rIaNP1XKQg0/VcBCFA0/VcxCFA0/VcJIFA0/VcAAVCyGjTssjA077IwNO6yHLMyCmAyCngJNOkXCRa3AD5XBABQNeuACAAAAAAAAGaCNOtQsDTrSTXqIls16SI06RJENP808iI0/TT8MgY0+zTpCEICC0g0+lcBYTX3NPdJNfYiVUkkDEAAJkkhEgxAABhJIQUMQAAKIQUSRCM19UIAaEgjNfVCAGFIIzX1QgBaSSMMQABNSSEEDEAAP0g09lcBOUk19CJbNfM09CEIWzXyNPSBEFs18TTzIQkMNPIhCQwQNPE08jTzCBIQNPEhCQwQNPEiDRA19UIADkgjNfVCAAdIIzX1QgAANPVEIRGvNfQiNfM0/CEHNPMLIQdYNfI09CJVQAAGIzXxQgAGIjXxQgAANPQoNPMWUDTxMQA08hIQTTX0NPMjCEk18yQMQP/DNPQiVUAABiI180IABiM180IAADTzRIAIAAAAAAAAZFOwKTUHgATt9gUDMQBQNPZQsDT/NP4iJSI09Ek18iNbNPIiVU0LUjT2UDT+JUkiNPRJNfIjWzTyIlVNCwghBlJQIjT9NPwyBjT7QgDCIhJEIjQBEkQ0BEkiEkw0AhIRREk1BTX/gAQyKutZNP9QsIGgjQaIAU2AYQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJNf5JSVA0/lAigAkAAAAAAAAAABkyClCACAAAAAAAAAAFUIAIAAAAAAAAAB5QNP8yBiJCAAA1/zX+Nf01/DX7Nfo1+TT7QQADQgBFNPk0+lA0/FA0/VA0/xZQKksBVwB/ZyhLAVd/f2crSwFX/n9nJwRLAYH9AoF/WGcnBUsBgfwDgSlYZ0gkNQEyBjUCQgAcMRkhBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 5,
  stateSize: 549,
  unsupported: [],
  version: 10,
  warnings: [`Step 2 calls a remote object at /app/index.rsh:181:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v25347",
                "type": "address[3]"
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
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
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
            "internalType": "struct T2",
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
            "internalType": "struct T3",
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
        "internalType": "struct T4",
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
            "internalType": "enum _enum_T1",
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
        "internalType": "struct T1",
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
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
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
            "internalType": "struct T2",
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
            "internalType": "struct T3",
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
        "internalType": "struct T4",
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
                "name": "v25347",
                "type": "address[3]"
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
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
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
                            "internalType": "struct T2",
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
                            "internalType": "struct T3",
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
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Triumvir_propose0_24470",
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
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
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
                            "internalType": "struct T2",
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
                            "internalType": "struct T3",
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
                        "internalType": "struct T4",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Triumvir_support0_24470",
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
                            "internalType": "enum _enum_T1",
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
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem2",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_register0_24470",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v25627",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
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
    "name": "_reach_oe_v25683",
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
    "name": "_reach_oe_v26128",
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
                "internalType": "struct T19",
                "name": "elem0",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v26200",
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
                "internalType": "struct T19",
                "name": "elem0",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v26242",
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
        "internalType": "struct T3",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v26700",
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
                "internalType": "enum _enum_T4",
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
                        "internalType": "enum _enum_T1",
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
                    "internalType": "struct T1",
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
                "internalType": "struct T2",
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
                "internalType": "struct T3",
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
            "internalType": "struct T4[3]",
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
            "internalType": "struct T3",
            "name": "protoInfo",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
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
            "internalType": "struct T2",
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
            "internalType": "struct T3",
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
        "internalType": "struct T4",
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
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
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
            "internalType": "struct T2",
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
            "internalType": "struct T3",
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
        "internalType": "struct T4",
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
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
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
                            "internalType": "struct T2",
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
                            "internalType": "struct T3",
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
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Triumvir_propose0_24470",
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
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
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
                            "internalType": "struct T2",
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
                            "internalType": "struct T3",
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
                        "internalType": "struct T4",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Triumvir_support0_24470",
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
                            "internalType": "enum _enum_T1",
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
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem2",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_register0_24470",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v25627",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
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
            "internalType": "enum _enum_T1",
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
        "internalType": "struct T1",
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
        "internalType": "struct T3",
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
  Bytecode: `0x6080604052604051620036f6380380620036f6833981016040819052620000269162000615565b60008055436003556200003862000213565b7fe5d35ee1d5d0380ec4bb3893af49ad0266757898dc8e4981d86f4fcd3a980e5533836040516200006b929190620006ff565b60405180910390a162000081341560086200013e565b8051600490528051600060a0909101819052815160208084018051929092528351825182015283519151604090810192909252818401805193909352825160199101528151309101528051600560609091015251601e608090910152620000e76200026d565b81518151526020808301518183018051919091528051600090830181905260408086015183519091015291850151518151606001528051436080909101525160a00152620001358162000168565b5050506200095a565b81620001645760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b806020015160200151156200019257600080805560018190556200018f9060029062000291565b50565b6200019c620002d0565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a00151608084015260036000554360015551620001e89183910162000863565b604051602081830303815290604052600290805190602001906200020e9291906200033e565b505050565b604051806060016040528062000228620003cd565b81526020016200023762000459565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b60405180604001604052806200028262000489565b8152602001620002686200049e565b5080546200029f906200091d565b6000825580601f10620002b0575050565b601f0160209004906000526020600020908101906200018f919062000522565b6040518060a00160405280620002e5620003cd565b8152602001620002f462000459565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016200033162000539565b8152602001600081525090565b8280546200034c906200091d565b90600052602060002090601f016020900481019282620003705760008555620003bb565b82601f106200038b57805160ff1916838001178555620003bb565b82800160010185558215620003bb579182015b82811115620003bb5782518255916020019190600101906200039e565b50620003c992915062000522565b5090565b6040805160e081019091528060008152602001620003ea62000557565b8152602001600015158152602001620004366040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b81526020016200044562000539565b815260006020820181905260409091015290565b60405180606001604052806003905b62000472620003cd565b815260200190600190039081620004685790505090565b604051806020016040528062000268620003cd565b6040518060c00160405280620004b362000459565b8152602001600015158152602001620004ff6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81526020016200050e62000539565b815260200160008152602001600081525090565b5b80821115620003c9576000815560010162000523565b60405180606001604052806003906020820280368337509192915050565b604051806080016040528060006001600160a01b0316815260200162000445604080516060810190915280600062000445565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620005c557620005c56200058a565b60405290565b604051602081016001600160401b0381118282101715620005c557620005c56200058a565b604051606081016001600160401b0381118282101715620005c557620005c56200058a565b600081830360808112156200062957600080fd5b62000633620005a0565b8351815260206060601f19840112156200064c57600080fd5b62000656620005cb565b925085603f8601126200066857600080fd5b62000672620005f0565b8060808701888111156200068557600080fd5b8388015b81811015620006b95780516001600160a01b0381168114620006ab5760008081fd5b845292840192840162000689565b50508452508101919091529392505050565b8060005b6003811015620006f95781516001600160a01b0316845260209384019390910190600101620006cf565b50505050565b600060a08201905060018060a01b03841682528251602083015260208301516200072e604084018251620006cb565b509392505050565b634e487b7160e01b600052602160045260246000fd5b80516006811062000761576200076162000736565b825260208181015180516001600160a01b03908116838601529181015180519192916002811062000796576200079662000736565b60408681019190915260208201511515606080880191909152918101518316608087015283015190911660a085015201516001600160a01b03811660c084015250604081015180151560e084015250606081810151805161010085015260208101516101208501526040810151610140850152908101516001600160a01b0316610160840152608081015115156101808401525060808101516200083f6101a0840182620006cb565b5060a0810151151561020083015260c001516001600160a01b031661022090910152565b6000610a2082019050620008798284516200074c565b60208084015161024080850160005b6003811015620008b0576200089f8285516200074c565b928401929082019060010162000888565b5050505060408481015180511515610900860152918201516109208501528101516001600160a01b03166109408401526060808201516109608501526080909101516109808401528301516200090b6109a0840182620006cb565b506080830151610a0083015292915050565b600181811c908216806200093257607f821691505b602082108114156200095457634e487b7160e01b600052602260045260246000fd5b50919050565b612d8c806200096a6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b578063832307571461010b578063ab53f2c614610120578063d379c61114610143578063dfcc43891461015657005b80631a6febfe146100825780631e93b0f1146100aa5780633b02a717146100c95780634012e02e146100e957005b3661008057005b005b610095610090366004612336565b610169565b60405190151581526020015b60405180910390f35b3480156100b657600080fd5b506003545b6040519081526020016100a1565b6100dc6100d7366004612364565b6101c9565b6040516100a191906123e6565b3480156100f557600080fd5b506100fe610243565b6040516100a19190612547565b34801561011757600080fd5b506001546100bb565b34801561012c57600080fd5b50610135610381565b6040516100a19291906125b4565b6100806101513660046125ee565b61041e565b610095610164366004612607565b610442565b6000610173611a27565b61017b611a4b565b610183611a65565b6040805180820182528781526020808201889052838301919091526001835281518082019092528282528301526101ba8284610496565b50506020015190505b92915050565b6101d1611a9a565b6101d9611a27565b6101e1611a4b565b6101e9611a65565b60408051606080820183526001600160a01b038a8116835260208084018b905290891683850152908401919091526002835281518082019092528282528301526102338284610496565b50506040015190505b9392505050565b61024b611ad4565b600360005414156103725760006002805461026590612624565b80601f016020809104026020016040519081016040528092919081815260200182805461029190612624565b80156102de5780601f106102b3576101008083540402835291602001916102de565b820191906000526020600020905b8154815290600101906020018083116102c157829003601f168201915b50505050508060200190518101906102f691906128a0565b9050610300611b01565b604080830180516060908101518451528151602090810151855182015282516080908101518651860152835185015186516001600160a01b0390911690840152925151855190151593019290925284015181840180519190915293810151845190910152905182519091015251919050565b61037e600060076118b0565b90565b60006060600054600280805461039690612624565b80601f01602080910402602001604051908101604052809291908181526020018280546103c290612624565b801561040f5780601f106103e45761010080835404028352916020019161040f565b820191906000526020600020905b8154815290600101906020018083116103f257829003601f168201915b50505050509050915091509091565b610426611a27565b61043e610438368490038401846129a3565b82610496565b5050565b600061044c611a27565b610454611a4b565b61045c611a65565b60408051602080820183528782528381019190915260008352815180820190925282825283015261048d8284610496565b50505192915050565b6104a660036000541460176118b0565b81516104c19015806104ba57508251600154145b60186118b0565b6000808055600280546104d390612624565b80601f01602080910402602001604051908101604052809291908181526020018280546104ff90612624565b801561054c5780601f106105215761010080835404028352916020019161054c565b820191906000526020600020905b81548152906001019060200180831161052f57829003601f168201915b505050505080602001905181019061056491906128a0565b905061056e611b21565b7f6392de3086ad392d559b57a003ab34e70460d2baca532f308e45c5a87ed12206338560405161059f929190612a8a565b60405180910390a160006020850151515160028111156105c1576105c1612420565b14156109e75760208085015151015181526105de341560096118b0565b60008151515160058111156105f5576105f5612420565b14156106075760016020820152610757565b600181515151600581111561061e5761061e612420565b14156106305760016020820152610757565b600281515151600581111561064757610647612420565b14156106e05780515160600151604082018190525160641161066a576000610677565b6064816040015160200151105b6106825760006106a4565b604081015180516020909101516106999190612b49565b816040015160400151145b6106af5760006106bc565b6064816040015160400151105b6106c75760006106d4565b6000816040015160400151115b15156020820152610757565b60038151515160058111156106f7576106f7612420565b14156107095760016020820152610757565b600481515151600581111561072057610720612420565b14156107325760016020820152610757565b600581515151600581111561074957610749612420565b141561075757600160208201525b6107668160200151600a6118b0565b6060810180516000908190528151602001819052905160a08301525b600381101561086e57826060015181600381106107a1576107a1612b61565b60200201516001600160a01b031660c0830152600060a08301515160018111156107cd576107cd612420565b14156107df57600160e0830152610806565b600160a08301515160018111156107f8576107f8612420565b141561080657600060e08301525b61010082018051600190525160400181905260e0820151610828576000610842565b8160c001516001600160a01b0316336001600160a01b0316145b610850578160a00151610857565b8161010001515b60a08301528061086681612b77565b915050610782565b5060a08101516080820181905251600090600181111561089057610890612420565b14156108a35760006101208201526108cb565b600160808201515160018111156108bc576108bc612420565b14156108cb5760016101208201525b6108db816101200151600b6118b0565b604051600081527f0e45a2845341f63c63bb6095f2b3ce6dd9874918a8befc3daa6a6e1675dc5f1a9060200160405180910390a1600083528051516040517f510fa3e00163331e7163ef9e01f872b444c3d8848dda15e731d1789d76c636189161094791339190612b92565b60405180910390a1610957611cba565b8251815152602083015161099c906001608085015151600181111561097e5761097e612420565b1461098a576000610994565b8360800151604001515b8451516118d6565b602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109e18161194a565b506118aa565b6001602085015151516002811115610a0157610a01612420565b14156117165760208401515160400151610140820152610a233415600c6118b0565b610a3a60038261014001516000015110600d6118b0565b61016081018051600090819052815160200181905290516101a08301525b6003811015610b4d5782606001518160038110610a7757610a77612b61565b60200201516001600160a01b03166101c083015260006101a0830151516001811115610aa557610aa5612420565b1415610ab85760016101e0830152610ae1565b60016101a0830151516001811115610ad257610ad2612420565b1415610ae15760006101e08301525b6102008201805160019052516040018190526101e0820151610b04576000610b1f565b816101c001516001600160a01b0316336001600160a01b0316145b610b2e57816101a00151610b35565b8161020001515b6101a083015280610b4581612b77565b915050610a58565b506101a08101516101808201819052516000906001811115610b7157610b71612420565b1415610b84576000610220820152610bad565b6001610180820151516001811115610b9e57610b9e612420565b1415610bad5760016102208201525b610bbd816102200151600e6118b0565b610c0e6001610180830151516001811115610bda57610bda612420565b14610be6576000610bf1565b816101800151604001515b6101408301515114610c04576001610c07565b60005b600f6118b0565b610c9482602001518261014001516000015160038110610c3057610c30612b61565b6020020151604051602001610c459190612bb0565b60408051601f198184030181529082905280516020918201206101408501518201519092610c739201612bb0565b6040516020818303038152906040528051906020012060001c1460106118b0565b6020820151610140820151518351610cad9291906118d6565b610240820152604051600081527f1ed26de5a26ec372c28cb51aaf1954277d89a231b74420bb221ae85d474724339060200160405180910390a1600060208085019190915261014082015151908301517f1ca272bbb6018d7b99180311121f45ec91a0b47a19077a7badd69e3dbd0db37e9133918160038110610d3257610d32612b61565b6020020151604051610d4693929190612bbf565b60405180910390a1600060208301516101408301515160038110610d6c57610d6c612b61565b6020020151516005811115610d8357610d83612420565b14156112ca5760208201516101408201515160038110610da557610da5612b61565b6020908102919091015181015161026083018190520151516000906001811115610dd157610dd1612420565b141561103e5760408083018051606090810151610280850180519190915282516020908101518251909101528251608090810151825186015283519094015181516001600160a01b039091169201919091529051519051901515910152610e39600047612bec565b6104408201526102608101516060015161028082015160405160009263038da9cb60e21b92610e6a92602401612c03565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080836102600151600001516001600160a01b0316600084604051610ec59190612c20565b60006040518083038185875af1925050503d8060008114610f02576040519150601f19603f3d011682016040523d82523d6000602084013e610f07565b606091505b5091509150610f18828260116119ec565b50610440840151610f299047612bec565b6102a0850151528051610f459082016020908101908301612c3c565b6102a08501805160200191909152516102c085018190526040517fc9ddec068c5653f3e507864b740e099cf90943d0f7549043b19f46380520e7e791610fae91815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a16102c084015151610fc9901560126118b0565b610fd1611cba565b855181515261024085015160208083018051929092528151600091015260408088015182519091015260608088015182519091015251436080918201526102c086015151908701516110239190612b49565b602082015160a001526110358161194a565b505050506118aa565b60016102608201516020015151600181111561105c5761105c612420565b14156112c5576102608101516020908101516040908101516001600160a01b039081166102e08501528482018051606090810151610300870180519190915282518601518151909601959095528151608090810151865186015282519094015185519316920191909152515191519115159101526110db600047612bec565b6104608201526102608101516060015161030082015160405160009263038da9cb60e21b9261110c92602401612c03565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080836102600151600001516001600160a01b03166000846040516111679190612c20565b60006040518083038185875af1925050503d80600081146111a4576040519150601f19603f3d011682016040523d82523d6000602084013e6111a9565b606091505b50915091506111ba828260136119ec565b506104608401516111cb9047612bec565b6103208501515280516111e79082016020908101908301612c3c565b61032085018051602001919091525161034085018190526040517fc70cebcaf956d0f65ca4b02b3351eb5805140129fdf73b8fd70e5ac7fd3076259161125091815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a16103408401515161126b901560146118b0565b611273611cba565b8551815152610240850151602080830180519290925281516000910152604080880151825190910152606080880151825190910152514360809182015261034086015151908701516110239190612b49565b6118aa565b6001602083015161014083015151600381106112e8576112e8612b61565b60200201515160058111156112ff576112ff612420565b141561135d5761130d611cba565b8251815152610240820151602080830180519290925281516001910152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109e18161194a565b60026020830151610140830151516003811061137b5761137b612b61565b602002015151600581111561139257611392612420565b141561147257602082015161014082015151600381106113b4576113b4612b61565b602090810291909101516060908101516103608401818152608091820151610380860180519115159091528151850151815190950194909452805183015184516001600160a01b03909116604091820152815151855190940193909352519091015191510152611422611cba565b8251815152610240820151602080830180519290925281516000910152610380830151815160400152606080850151825190910152805143608091820152840151905160a001526109e18161194a565b60036020830151610140830151516003811061149057611490612b61565b60200201515160058111156114a7576114a7612420565b141561153057602082015161014082015151600381106114c9576114c9612b61565b6020020151608001516103a08201526114e0611cba565b82518151526102408201516020808301805192909252815160009101526040808501518251909101526103a0830151815160600152805143608091820152840151905160a001526109e18161194a565b60046020830151610140830151516003811061154e5761154e612b61565b602002015151600581111561156557611565612420565b14156115c357611573611cba565b8251815152610240820151602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109e18161194a565b6005602083015161014083015151600381106115e1576115e1612b61565b60200201515160058111156115f8576115f8612420565b14156112c5576020820151610140820151516003811061161a5761161a612b61565b602002015160c001516001600160a01b03166103c082015260808201514790811061165357608083015161164e9082612bec565b611656565b60005b6103e083018190526103c08301516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611699573d6000803e3d6000fd5b506116a2611cba565b835181515261024083015160208083018051929092528151600091015260408086015182519091015260608086015182519091015251436080918201526103e0840151908501516116f39082612b49565b6116fd9190612bec565b602082015160a0015261170f8161194a565b50506118aa565b600260208501515151600281111561173057611730612420565b14156118aa5760208401515160600151610400820152611752341560156118b0565b6104008101515161176f906001600160a01b0316331460166118b0565b604080830180516060908101516104208501805191909152825160209081015182519091015282516080908101518251860152835185015182516001600160a01b0390911693019290925291515182519015159101525190517fcf50e679841cb4fcb3696d0d98c2b6572f2e5b686655fc4939c35ec5c1979345916117f3916123e6565b60405180910390a1610420810151604080850191909152610400820151805160208201519183015192517ffe325ddb46ceb5c5c02d1b18bc5e927e25bc0ec2cf49203c2ae8c0c355b290cf936118499391612c95565b60405180910390a1611859611cba565b825181515260208084015181830180519190915280516000920191909152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109e18161194a565b50505050565b8161043e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6118de611cda565b60005b600381101561192a578481600381106118fc576118fc612b61565b602002015182826003811061191357611913612b61565b60200201528061192281612b77565b9150506118e1565b508181846003811061193e5761193e612b61565b60200201529392505050565b80602001516020015115611971576000808055600181905561196e90600290611d07565b50565b611979611d41565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a001516080840152600360005543600155516119c391839101612cc5565b604051602081830303815290604052600290805190602001906119e7929190611d88565b505050565b606083156119fb57508161023c565b825115611a0b5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016118cd565b6040805160608101825260008082526020820152908101611a46611a9a565b905290565b604051806040016040528060008152602001611a46611e0c565b60408051608081019091528060008152602001611a80611e1f565b8152602001611a8d611e32565b8152602001611a46611e4c565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040518060600160405280611ae7611e7c565b8152602001611af4611cda565b8152602001611a46611a9a565b6040518060400160405280611b14611a9a565b8152602001611a46611ad4565b604051806104800160405280611b35611e1f565b815260006020820152604001611b49611a9a565b8152602001611b56611e9a565b8152602001611b63611e9a565b8152602001611b70611e9a565b81526000602082018190526040820152606001611b8b611e9a565b815260006020820152604001611b9f611e32565b8152602001611bac611e9a565b8152602001611bb9611e9a565b8152602001611bc6611e9a565b81526000602082018190526040820152606001611be1611e9a565b815260006020820152604001611bf5611cda565b8152602001611c02611ebd565b8152602001611c0f611a9a565b8152602001611c1c611ee0565b8152602001611c29611ee0565b815260006020820152604001611c3d611a9a565b8152602001611c4a611ee0565b8152602001611c57611ee0565b8152602001611c64611a9a565b8152602001611c71611efa565b8152602001611c7e611e7c565b81526000602082018190526040820152606001611c99611e4c565b8152602001611ca6611a9a565b815260200160008152602001600081525090565b6040518060400160405280611ccd611e1f565b8152602001611a46611f34565b60405180606001604052806003905b611cf1611f68565b815260200190600190039081611ce95790505090565b508054611d1390612624565b6000825580601f10611d23575050565b601f01602090049060005260206000209081019061196e9190611fa4565b6040518060a00160405280611d54611f68565b8152602001611d61611cda565b8152602001611d6e611efa565b8152602001611d7b611e7c565b8152602001600081525090565b828054611d9490612624565b90600052602060002090601f016020900481019282611db65760008555611dfc565b82601f10611dcf57805160ff1916838001178555611dfc565b82800160010185558215611dfc579182015b82811115611dfc578251825591602001919060010190611de1565b50611e08929150611fa4565b5090565b6040518060200160405280611a46611a65565b6040518060200160405280611a46611f68565b604051806040016040528060008152602001611a46611f68565b604051806060016040528060006001600160a01b03168152602001611e6f611fb9565b8152600060209091015290565b60405180606001604052806003906020820280368337509192915050565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806080016040528060006001600160a01b03168152602001611ea9611fb9565b604051806040016040528060008152602001611a46611fcc565b6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060c00160405280611f47611cda565b815260006020820152604001611f5b611efa565b8152602001611ca6611e7c565b6040805160e081019091528060008152602001611f83611ebd565b815260006020820152604001611f97611a9a565b8152602001611ea9611e7c565b5b80821115611e085760008155600101611fa5565b6040805160608101909152806000611ea9565b6040805160808101825260009181018281526060820192909252908190611d7b565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561202757612027611fee565b60405290565b6040516080810167ffffffffffffffff8111828210171561202757612027611fee565b60405160a0810167ffffffffffffffff8111828210171561202757612027611fee565b60405160e0810167ffffffffffffffff8111828210171561202757612027611fee565b6040805190810167ffffffffffffffff8111828210171561202757612027611fee565b6040516020810167ffffffffffffffff8111828210171561202757612027611fee565b6006811061196e57600080fd5b6001600160a01b038116811461196e57600080fd5b8035612109816120e9565b919050565b6002811061196e57600080fd5b801515811461196e57600080fd5b80356121098161211b565b60006060828403121561214657600080fd5b61214e612004565b9050813561215b8161210e565b8152602082013561216b8161211b565b6020820152604082013561217e816120e9565b604082015292915050565b600060a0828403121561219b57600080fd5b6121a3612050565b905081358152602082013560208201526040820135604082015260608201356121cb816120e9565b606082015260808201356121de8161211b565b608082015292915050565b600082601f8301126121fa57600080fd5b612202612004565b80606084018581111561221457600080fd5b845b81811015612237578035612229816120e9565b845260209384019301612216565b509095945050505050565b600081830361024081121561225657600080fd5b61225e612073565b9150823561226b816120dc565b825260c0601f198201121561227f57600080fd5b5061228861202d565b6020830135612296816120e9565b81526122a58460408501612134565b602082015260a08301356122b8816120e9565b604082015260c08301356122cb816120e9565b606082015260208201526122e160e08301612129565b60408201526122f4836101008401612189565b6060820152612307836101a084016121e9565b60808201526123196102008301612129565b60a082015261232b61022083016120fe565b60c082015292915050565b600080610260838503121561234a57600080fd5b8235915061235b8460208501612242565b90509250929050565b600080600060a0848603121561237957600080fd5b8335612384816120e9565b92506123938560208601612134565b915060808401356123a3816120e9565b809150509250925092565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b60a081016101c382846123ae565b8060005b60038110156118aa5781516001600160a01b03168452602093840193909101906001016123f8565b634e487b7160e01b600052602160045260246000fd5b80516002811061244857612448612420565b82526020818101511515908301526040908101516001600160a01b0316910152565b80516006811061247c5761247c612420565b825260208181015180516001600160a01b0390811683860152918101519091906124a96040860182612436565b50604082810151821660a086015260609283015190911660c0850152820151151560e08401528101516124e06101008401826123ae565b5060808101516124f46101a08401826123f4565b5060a0810151151561020083015260c001516001600160a01b031661022090910152565b8060005b60038110156118aa5761253084835161246a565b61024093909301926020919091019060010161251c565b60006107c08201905061255b8284516123f4565b602083015161256d6060840182612518565b5060408301516125816107208401826123ae565b5092915050565b60005b838110156125a357818101518382015260200161258b565b838111156118aa5750506000910152565b82815260406020820152600082518060408401526125d9816060850160208701612588565b601f01601f1916919091016060019392505050565b6000610580828403121561260157600080fd5b50919050565b6000610240828403121561261a57600080fd5b61023c8383612242565b600181811c9082168061263857607f821691505b6020821081141561260157634e487b7160e01b600052602260045260246000fd5b8051612109816120e9565b80516121098161211b565b600060a0828403121561268157600080fd5b612689612050565b905081518152602082015160208201526040820151604082015260608201516126b1816120e9565b606082015260808201516121de8161211b565b600082601f8301126126d557600080fd5b6126dd612004565b8060608401858111156126ef57600080fd5b845b81811015612237578051612704816120e9565b8452602093840193016126f1565b600081830361024081121561272657600080fd5b61272e612073565b9150825161273b816120dc565b825260c0601f198201121561274f57600080fd5b61275761202d565b6020840151612765816120e9565b81526060603f198301121561277957600080fd5b612781612004565b915060408401516127918161210e565b825260608401516127a18161211b565b602083015260808401516127b4816120e9565b6040830152602081018290526127cc60a08501612659565b60408201526127dd60c08501612659565b60608201526020830152506127f460e08301612664565b604082015261280783610100840161266f565b606082015261281a836101a084016126c4565b608082015261282c6102008301612664565b60a082015261232b6102208301612659565b600060a0828403121561285057600080fd5b612858612050565b905081516128658161211b565b815260208281015190820152604082015161287f816120e9565b80604083015250606082015160608201526080820151608082015292915050565b6000610a2082840312156128b357600080fd5b6128bb612050565b6128c58484612712565b81526102408461025f8501126128da57600080fd5b6128e2612004565b806109008601878111156128f557600080fd5b8387015b8181101561291a5761290b8982612712565b845260209093019284016128f9565b5081602086015261292b888261283e565b604086015250505050612942846109a085016126c4565b6060820152610a009290920151608083015250919050565b600060a0828403121561296c57600080fd5b612974612004565b90508135612981816120e9565b81526129908360208401612134565b6020820152608082013561217e816120e9565b60008183036105808112156129b757600080fd5b6129bf612096565b83358152610560601f19830112156129d657600080fd5b6129de6120b9565b6129e661202d565b6020860135600381106129f857600080fd5b8152610240603f1985011215612a0d57600080fd5b612a156120b9565b612a228860408901612242565b8152602082015261026061027f1985011215612a3d57600080fd5b612a45612096565b93506102808601358452612a5d876102a08801612242565b6020850152836040820152612a76876104e0880161295a565b606082015281526020820152949350505050565b6001600160a01b03838116825282516020808401919091528301515180516105a0840192919060038110612ac057612ac0612420565b806040860152506020810151612ada60608601825161246a565b50604081015180516102a086015260200151612afa6102c086018261246a565b5060600151805182166105008501526020810151612b1c610520860182612436565b508160408201511661058085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612b5c57612b5c612b33565b500190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415612b8b57612b8b612b33565b5060010190565b6001600160a01b0383168152610260810161023c602083018461246a565b61024081016101c3828461246a565b6001600160a01b0384168152602081018390526102808101612be4604083018461246a565b949350505050565b600082821015612bfe57612bfe612b33565b500390565b6001600160a01b038316815260c0810161023c60208301846123ae565b60008251612c32818460208701612588565b9190910192915050565b60008183036060811215612c4f57600080fd5b612c57612096565b6040821215612c6557600080fd5b612c6d612096565b9150835182526020840151602083015281815260408401516020820152809250505092915050565b6001600160a01b03848116825260a0820190612cb46020840186612436565b808416608084015250949350505050565b6000610a2082019050612cd982845161246a565b6020830151612cec610240840182612518565b50604083810151805115156109008501526020810151610920850152908101516001600160a01b0316610940840152606080820151610960850152608090910151610980840152830151612d446109a08401826123f4565b506080830151610a008301529291505056fea2646970667358221220420d890bfc3e6fa2da268ca9c803a1f0ed4eaf042eac56ed1d0882a19474ec7064736f6c634300080c0033`,
  BytecodeLen: 14070,
  Which: `oD`,
  version: 7,
  views: {
    Info: `Info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:229:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:134:19:after expr stmt semicolon',
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
