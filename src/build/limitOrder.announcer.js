// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

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
    lct: stdlib.checkedBigNumberify('./limitOrder.rsh:140:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:140:5:decimal', stdlib.UInt_max, '0'), []],
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
    at: './limitOrder.rsh:141:19:application',
    fs: ['at ./limitOrder.rsh:141:19:application call to [unknown function] (defined at: ./limitOrder.rsh:141:19:function exp)', 'at ./limitOrder.rsh:141:19:application call to "liftedInteract" (defined at: ./limitOrder.rsh:141:19:application)'],
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
    const v263 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '0')];
    const v264 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '1')];
    const v265 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '2')];
    const v266 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '3')];
    const v267 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '4')];
    const v268 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '5')];
    const v269 = stdlib.digest([ctc4], [v265]);
    const v270 = stdlib.digest([ctc4], [v266]);
    const v271 = stdlib.digestEq(v269, v270);
    const v272 = v271 ? false : true;
    stdlib.assert(v272, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./limitOrder.rsh:146:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:147:17:application call to [unknown function] (defined at: ./limitOrder.rsh:147:17:function exp)'],
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
    fs: ['at ./limitOrder.rsh:145:75:application call to [unknown function] (defined at: ./limitOrder.rsh:145:75:function exp)', 'at ./limitOrder.rsh:145:75:application call to [unknown function] (defined at: ./limitOrder.rsh:145:75:function exp)'],
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
    fs: ['at ./limitOrder.rsh:146:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:145:75:application call to [unknown function] (defined at: ./limitOrder.rsh:145:75:function exp)', 'at ./limitOrder.rsh:145:75:application call to [unknown function] (defined at: ./limitOrder.rsh:145:75:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:decimal', stdlib.UInt_max, '0'), []],
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
      const v263 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '0')];
      const v264 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '1')];
      const v265 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '2')];
      const v266 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '3')];
      const v267 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '4')];
      const v268 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '5')];
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
  const v263 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '0')];
  const v264 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '1')];
  const v265 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '2')];
  const v266 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '3')];
  const v267 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '4')];
  const v268 = v259[stdlib.checkedBigNumberify('./limitOrder.rsh:145:10:spread', stdlib.UInt_max, '5')];
  const v269 = stdlib.digest([ctc4], [v265]);
  const v270 = stdlib.digest([ctc4], [v266]);
  const v271 = stdlib.digestEq(v269, v270);
  const v272 = v271 ? false : true;
  stdlib.assert(v272, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:146:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:147:17:application call to [unknown function] (defined at: ./limitOrder.rsh:147:17:function exp)'],
    msg: 'Disallow identical tokens (invalid limit orders)',
    who: 'announceLimitOrder'
    });
  const v280 = null;
  const v281 = await txn1.getOutput('announceLimitOrder', 'v280', ctc2, v280);
  if (v146) {
    stdlib.protect(ctc2, await interact.out(v259, v281), {
      at: './limitOrder.rsh:145:11:application',
      fs: ['at ./limitOrder.rsh:145:11:application call to [unknown function] (defined at: ./limitOrder.rsh:145:11:function exp)', 'at ./limitOrder.rsh:148:10:application call to "k" (defined at: ./limitOrder.rsh:147:17:function exp)', 'at ./limitOrder.rsh:147:17:application call to [unknown function] (defined at: ./limitOrder.rsh:147:17:function exp)'],
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
    impure: [`_reachp_0((uint64))void`, `_reachp_2((uint64,(address,uint64,(byte,byte[8]),(byte,byte[8]),uint64,uint64)))void`, `announceLimitOrder(address,uint64,(byte,byte[8]),(byte,byte[8]),uint64,uint64)void`],
    pure: [],
    sigs: [`_reachp_0((uint64))void`, `_reachp_2((uint64,(address,uint64,(byte,byte[8]),(byte,byte[8]),uint64,uint64)))void`, `announceLimitOrder(address,uint64,(byte,byte[8]),(byte,byte[8]),uint64,uint64)void`]
    },
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAEAAEIAyYBADEYQQE3KGRJIls1ASRbNQIoggMESpxryQSBHupDBMGUrZk2GgCOAwEsAQQA8AA0DVcAIDUSNA2BIFs1ETQNVygJNRA0DVcxCTUPNA2BOls1DDQNgUJbNQs0EAE0DwETRCg1DYAIAAAAAAAAARg0DVCwNA01BIAEr/NenjQSUDQRFlA0EFA0D1A0DBZQNAsWULAyBjUOKCUyBjUCNQFIKDQBFjQCFlBnMRkiEkSIASs0A0AACoAEFR98dTQEULAjQySvNBA0DxZQNA5QNA1QNAwWUDQLFlBQNQslNAESRDQLIls1DDQLVwhKNQ2ABPIIovs0DBZQNA1QsDQMiADoQv8tNAsXNQyABILEYf40DBZQsDQMiADQMgY1DkL/eIgAtoGgjQY0Bgg1BjYaATULQv/QiACiNhoBNQtC/50iMTQSRCMxNRJEIjE2EkQiMTcSRIgAgygiIkL/QDYaATYaAhc2GgM2GgQ2GgUXNhoGFzULNQw1DTUONQ81EEL/QzEZIhJEQv8vIrIBI7IQsgeyCLOJSIlMCUk1BjIJiABTiQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiTEZgQUSRIgADyIyCjIJiAAhQv7ZIzUDiTQGNAdKD0H/sEL/uEkiEkw0AhIRRImxQv+RsbIJQv+L`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `4`,
    100: `45`,
    101: `46`,
    102: `46`,
    103: `47`,
    104: `48`,
    105: `49`,
    106: `54`,
    107: `55`,
    108: `55`,
    109: `56`,
    11: `4`,
    110: `56`,
    111: `56`,
    112: `56`,
    113: `56`,
    114: `56`,
    115: `56`,
    116: `56`,
    117: `56`,
    118: `56`,
    119: `57`,
    12: `5`,
    120: `57`,
    121: `58`,
    122: `59`,
    123: `60`,
    124: `60`,
    125: `61`,
    126: `61`,
    127: `62`,
    128: `62`,
    129: `62`,
    13: `5`,
    130: `62`,
    131: `62`,
    132: `62`,
    133: `63`,
    134: `63`,
    135: `64`,
    136: `65`,
    137: `65`,
    138: `66`,
    139: `67`,
    14: `5`,
    140: `68`,
    141: `68`,
    142: `69`,
    143: `70`,
    144: `70`,
    145: `71`,
    146: `72`,
    147: `72`,
    148: `73`,
    149: `74`,
    15: `6`,
    150: `75`,
    151: `75`,
    152: `76`,
    153: `77`,
    154: `78`,
    155: `80`,
    156: `80`,
    157: `81`,
    158: `81`,
    159: `84`,
    16: `7`,
    160: `85`,
    161: `86`,
    162: `86`,
    163: `88`,
    164: `88`,
    165: `89`,
    166: `89`,
    167: `90`,
    168: `91`,
    169: `92`,
    17: `8`,
    170: `92`,
    171: `93`,
    172: `94`,
    173: `94`,
    174: `95`,
    175: `96`,
    176: `97`,
    177: `98`,
    178: `98`,
    179: `99`,
    18: `9`,
    180: `100`,
    181: `101`,
    182: `103`,
    183: `103`,
    184: `103`,
    185: `105`,
    186: `105`,
    187: `106`,
    188: `106`,
    189: `106`,
    19: `10`,
    190: `108`,
    191: `108`,
    192: `108`,
    193: `108`,
    194: `108`,
    195: `108`,
    196: `109`,
    197: `109`,
    198: `110`,
    199: `111`,
    2: `2`,
    20: `11`,
    200: `113`,
    201: `114`,
    202: `116`,
    203: `117`,
    204: `118`,
    205: `118`,
    206: `119`,
    207: `119`,
    208: `120`,
    209: `121`,
    21: `11`,
    210: `122`,
    211: `122`,
    212: `123`,
    213: `124`,
    214: `124`,
    215: `125`,
    216: `126`,
    217: `126`,
    218: `127`,
    219: `128`,
    22: `12`,
    220: `129`,
    221: `129`,
    222: `130`,
    223: `131`,
    224: `132`,
    225: `133`,
    226: `133`,
    227: `135`,
    228: `136`,
    229: `136`,
    23: `13`,
    230: `137`,
    231: `138`,
    232: `140`,
    233: `140`,
    234: `141`,
    235: `142`,
    236: `143`,
    237: `143`,
    238: `144`,
    239: `144`,
    24: `14`,
    240: `145`,
    241: `145`,
    242: `145`,
    243: `146`,
    244: `146`,
    245: `147`,
    246: `147`,
    247: `147`,
    248: `147`,
    249: `147`,
    25: `14`,
    250: `147`,
    251: `148`,
    252: `148`,
    253: `149`,
    254: `150`,
    255: `151`,
    256: `151`,
    257: `152`,
    258: `153`,
    259: `155`,
    26: `15`,
    260: `155`,
    261: `156`,
    262: `156`,
    263: `156`,
    264: `157`,
    265: `157`,
    266: `157`,
    267: `159`,
    268: `159`,
    269: `160`,
    27: `17`,
    270: `161`,
    271: `161`,
    272: `162`,
    273: `162`,
    274: `162`,
    275: `162`,
    276: `162`,
    277: `162`,
    278: `163`,
    279: `163`,
    28: `17`,
    280: `164`,
    281: `165`,
    282: `166`,
    283: `168`,
    284: `168`,
    285: `169`,
    286: `169`,
    287: `169`,
    288: `170`,
    289: `170`,
    29: `17`,
    290: `171`,
    291: `171`,
    292: `172`,
    293: `172`,
    294: `172`,
    295: `174`,
    296: `174`,
    297: `174`,
    298: `175`,
    299: `175`,
    3: `2`,
    30: `17`,
    300: `175`,
    301: `175`,
    302: `177`,
    303: `177`,
    304: `178`,
    305: `179`,
    306: `179`,
    307: `180`,
    308: `180`,
    309: `180`,
    31: `17`,
    310: `181`,
    311: `181`,
    312: `182`,
    313: `182`,
    314: `182`,
    315: `184`,
    316: `184`,
    317: `184`,
    318: `185`,
    319: `185`,
    32: `17`,
    320: `185`,
    321: `186`,
    322: `186`,
    323: `187`,
    324: `187`,
    325: `187`,
    326: `189`,
    327: `190`,
    328: `190`,
    329: `191`,
    33: `17`,
    330: `192`,
    331: `193`,
    332: `194`,
    333: `194`,
    334: `195`,
    335: `196`,
    336: `197`,
    337: `198`,
    338: `198`,
    339: `199`,
    34: `17`,
    340: `200`,
    341: `201`,
    342: `202`,
    343: `202`,
    344: `203`,
    345: `204`,
    346: `205`,
    347: `205`,
    348: `205`,
    349: `206`,
    35: `17`,
    350: `207`,
    351: `208`,
    352: `209`,
    353: `209`,
    354: `209`,
    355: `211`,
    356: `211`,
    357: `211`,
    358: `212`,
    359: `212`,
    36: `17`,
    360: `212`,
    361: `213`,
    362: `214`,
    363: `214`,
    364: `214`,
    365: `215`,
    366: `215`,
    367: `215`,
    368: `216`,
    369: `216`,
    37: `17`,
    370: `216`,
    371: `217`,
    372: `218`,
    373: `218`,
    374: `218`,
    375: `219`,
    376: `220`,
    377: `220`,
    378: `221`,
    379: `221`,
    38: `17`,
    380: `222`,
    381: `222`,
    382: `223`,
    383: `223`,
    384: `224`,
    385: `224`,
    386: `225`,
    387: `225`,
    388: `226`,
    389: `226`,
    39: `17`,
    390: `226`,
    391: `228`,
    392: `228`,
    393: `229`,
    394: `230`,
    395: `231`,
    396: `233`,
    397: `233`,
    398: `233`,
    399: `235`,
    4: `2`,
    40: `17`,
    400: `236`,
    401: `236`,
    402: `237`,
    403: `238`,
    404: `238`,
    405: `239`,
    406: `239`,
    407: `240`,
    408: `240`,
    409: `241`,
    41: `17`,
    410: `242`,
    411: `244`,
    412: `245`,
    413: `247`,
    414: `248`,
    415: `249`,
    416: `250`,
    417: `250`,
    418: `251`,
    419: `251`,
    42: `17`,
    420: `252`,
    421: `252`,
    422: `252`,
    423: `253`,
    424: `255`,
    425: `256`,
    426: `257`,
    427: `257`,
    428: `257`,
    429: `258`,
    43: `17`,
    430: `259`,
    431: `259`,
    432: `262`,
    433: `262`,
    434: `263`,
    435: `263`,
    436: `264`,
    437: `265`,
    438: `266`,
    439: `267`,
    44: `18`,
    440: `267`,
    441: `268`,
    442: `269`,
    443: `269`,
    444: `270`,
    445: `270`,
    446: `271`,
    447: `271`,
    448: `272`,
    449: `273`,
    45: `18`,
    450: `274`,
    451: `274`,
    452: `275`,
    453: `276`,
    454: `277`,
    455: `278`,
    456: `278`,
    457: `279`,
    458: `280`,
    459: `281`,
    46: `18`,
    460: `283`,
    461: `283`,
    462: `284`,
    463: `284`,
    464: `285`,
    465: `286`,
    466: `288`,
    467: `288`,
    468: `288`,
    469: `290`,
    47: `19`,
    470: `291`,
    471: `291`,
    472: `292`,
    473: `292`,
    474: `293`,
    475: `293`,
    476: `293`,
    477: `294`,
    478: `294`,
    479: `294`,
    48: `19`,
    480: `296`,
    481: `297`,
    482: `297`,
    483: `298`,
    484: `300`,
    485: `300`,
    486: `301`,
    487: `301`,
    488: `302`,
    489: `303`,
    49: `19`,
    490: `304`,
    491: `304`,
    492: `304`,
    493: `305`,
    494: `305`,
    495: `305`,
    496: `307`,
    497: `308`,
    498: `309`,
    499: `310`,
    5: `2`,
    50: `19`,
    500: `311`,
    501: `311`,
    502: `312`,
    503: `313`,
    504: `314`,
    505: `315`,
    506: `317`,
    507: `318`,
    508: `318`,
    509: `318`,
    51: `19`,
    510: `320`,
    511: `321`,
    512: `321`,
    513: `322`,
    52: `19`,
    53: `19`,
    54: `19`,
    55: `21`,
    56: `23`,
    57: `23`,
    58: `24`,
    59: `24`,
    6: `2`,
    60: `24`,
    61: `25`,
    62: `25`,
    63: `26`,
    64: `26`,
    65: `27`,
    66: `27`,
    67: `28`,
    68: `29`,
    69: `29`,
    7: `2`,
    70: `30`,
    71: `30`,
    72: `31`,
    73: `31`,
    74: `31`,
    75: `32`,
    76: `32`,
    77: `33`,
    78: `33`,
    79: `34`,
    8: `2`,
    80: `34`,
    81: `34`,
    82: `35`,
    83: `35`,
    84: `36`,
    85: `36`,
    86: `37`,
    87: `37`,
    88: `38`,
    89: `39`,
    9: `2`,
    90: `39`,
    91: `40`,
    92: `40`,
    93: `41`,
    94: `41`,
    95: `42`,
    96: `43`,
    97: `43`,
    98: `44`,
    99: `44`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"v351","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"indexed":false,"internalType":"struct T0","name":"v2","type":"tuple"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v4","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v5","type":"uint256"}],"name":"LimitOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem3","type":"tuple"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v280","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem3","type":"tuple"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v354","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v343","type":"address"},{"internalType":"address payable","name":"v344","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"v345","type":"tuple"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"v346","type":"tuple"},{"internalType":"uint256","name":"v347","type":"uint256"},{"internalType":"uint256","name":"v348","type":"uint256"}],"name":"announceLimitOrder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062000cca90813803601f1980601f83011683019360018060401b039284861084871117620002bb5780859260409788528339602094859181010312620002d15784519084820182811085821117620002bb5786525181524360035584518581019080821085831117620002bb57859187526000918183809352015260049160ff835416620002a4577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a151801590811562000297575b50156200028057346200026957600381556001944386558651928282850152818452878401848110878211176200025657885283519586116200024357600254908782811c9216801562000238575b83831014620002255750601f8111620001d9575b508093601f8611600114620001715750509183949184939462000165575b50501b916000199060031b1c1916176002555b516109f39081620002d78239f35b01519250388062000144565b600283528183209493928692918316915b88838310620001be5750505010620001a4575b505050811b0160025562000157565b015160001960f88460031b161c1916905538808062000195565b85870151885590960195948501948793509081019062000182565b60028352818320601f870160051c8101918388106200021a575b601f0160051c019087905b8281106200020e57505062000126565b848155018790620001fe565b9091508190620001f3565b634e487b7160e01b845260229052602483fd5b91607f169162000112565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000c3565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe60806040818152600436101561001c575b5050361561001a57005b005b600091823560e01c90816305341eb414610267575080631e93b0f11461024957806363946c41146100e857806383230757146100ca5763ab53f2c60361001057346100c657816003193601126100c65781546100766104c3565b91805193849283526020828185015284518093850152815b8381106100af57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161008e565b5080fd5b50346100c657816003193601126100c6576020906001549051908152f35b506101603660031901126100c6578051916101028361045c565b80835260209181838501528051936101198561045c565b60043585526101403660231901126102455781519460c086016001600160401b0381118782101761023157835261014e610407565b86526001600160a01b039560443587811681036102255781870152606036606319011261022d5783516101808161048d565b60643560028110156102295781526084358015158103610229578782015260a435888116810361022957818601528185015260603660c319011261022d5783516101c98161048d565b60c435600281101561022957815260e43580151581036102295787820152610104359788168803610225578495969761021f9582015260608201526101243560808201526101443560a0820152868201526105cf565b51908152f35b8580fd5b8680fd5b8480fd5b634e487b7160e01b85526041600452602485fd5b8280fd5b50346100c657816003193601126100c6576020906003549051908152f35b83836101403660031901126100c6576001600160a01b03600435818116949085900361040357610295610407565b606036604319011261022d5760603660a319011261022d576102b68261045c565b848252602094858301938185526102cb610997565b978852808789019316835285880186516102e48161048d565b604435600281101561022d578152606435801515810361022d5789820152608435838116810361022d578882015281526060890187516103238161048d565b60a435600281101561022557815260c4358015158103610225578a82015260e43584811681036102255789820152815260808a019161010435835260a08b01936101243585528951968b88019c8d8981109060018060401b0310176103ef578b9c9d6103e59b9c5282610394610997565b91828b525116905251168b8751015251898651015251606085510152516080845101525160a0835101528551916103ca8361045c565b818352878301916103d9610997565b835283525190526105cf565b5115159051908152f35b634e487b7160e01b88526041600452602488fd5b8380fd5b602435906001600160a01b038216820361041d57565b600080fd5b90600182811c92168015610452575b602083101461043c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610431565b604081019081106001600160401b0382111761047757604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b0382111761047757604052565b608081019081106001600160401b0382111761047757604052565b6040519060006002546104d581610422565b80855260019180831690811561056b5750600114610513575b5050829003601f01601f191682016001600160401b0381118382101761047757604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b838510610557575050505083010138806104ee565b805488860183015293019284908201610542565b919250506020925060ff191682850152151560051b83010138806104ee565b80519060028210156105b9579082526020818101511515908301526040908101516001600160a01b0316910152565b634e487b7160e01b600052602160045260246000fd5b90600091600383540361094f576105e46104c3565b9260209384818051810103126100c6578401518015150361094c5760049260ff84541661093457604092835133815281518782015286820180519360018060a01b039384865116888501527f591e5106d5fb797c1c7768632ac6ba295dc3ba7078f74b26a21c50b52cf7e622610180868c8901511695606096878201526106728b8a0151608083019061058a565b610683878a015160e083019061058a565b60a060808a0151996101409a8b8401520151610160820152a1518015908115610928575b501561091157346108fa57868251015187516106c68b8201809361058a565b8481526106d2816104a8565b519020838351015188516106e98c8201809361058a565b8581526106f5816104a8565b519020036108f357855b156108dc579085897f1f45f4e093c0f58bc2cb1be8adabab3e49ca01ba8e209a399aaeedd0b7f6b651969594937fc335972f7fef60fbcd52f38b50e23776377dd6217b87e96501ad0efe33acc2b5828b51858152a101525161079883825116938a830151169261078e89840151918401519160a06080860151950151958b519788528d8801528a87019061058a565b60a085019061058a565b610100830152610120820152a1600381556001914383555181858201528481526107c18161045c565b8051936001600160401b0385116108c957506107de600254610422565b601f8111610882575b508491601f8511600114610821579394508492919083610816575b50501b916000199060031b1c191617600255565b015192503880610802565b6002815285812093958591601f198316915b88838310610868575050501061084f575b505050811b01600255565b015160001960f88460031b161c19169055388080610844565b858701518855909601959485019487935090810190610833565b60028352858320601f860160051c8101918787106108bf575b601f0160051c019084905b8281106108b45750506107e7565b8481550184906108a6565b909150819061089b565b634e487b7160e01b835260419052602482fd5b865163100960cb60e01b8152600e818a0152602490fd5b60016106ff565b865163100960cb60e01b8152600d818a0152602490fd5b865163100960cb60e01b8152600c818a0152602490fd5b905060015414386106a7565b60405163100960cb60e01b8152600b81860152602490fd5b80fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405190606082016001600160401b038111838210176104775760405260006040838281528260208201520152565b6040519060c082016001600160401b0381118382101761047757604052600060a0838281528260208201526109ca610968565b60408201526109d7610968565b6060820152826080820152015256fea164736f6c6343000811000a`,
  BytecodeLen: 3274,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './limitOrder.rsh:152:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './limitOrder.rsh:142:27:after expr stmt semicolon',
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
