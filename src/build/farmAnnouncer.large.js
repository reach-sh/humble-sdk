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
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./announcer.rsh:32:59:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
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
    impure: [`_reachp_0((uint64))void`, `_reachp_2((uint64,((uint64,uint64,uint64,uint64,(uint64,uint64),uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64))))void`, `announce((uint64,uint64,uint64,uint64,(uint64,uint64),uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64))void`, `_reachp_2((uint64,((uint64,uint64,uint64,uint64,(uint64,uint64),uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64))))void`, `announce((uint64,uint64,uint64,uint64,(uint64,uint64),uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64))void`]
    },
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAEAAEIAyYBADEYQQFRKGRJIls1ASRbNQIoggMEBTrygARPOJqtBMGUrZk2GgCOAwEeAUYBCgA0DTULgAVhcHBJRDQLVwAIUAM1CDIKeDUJKDIKYDQJCRY1CrEisgGBBrIQNAsiW7IYgARlxrONshqzMgpgNAkJNAoXCRa3AD5XBABQNQ2ACAAAAAAAAAE8NA1QsDQNNQwiNAwiWxJEKDUMgAgAAAAAAAABazQMULA0DDUEKDUMgATRkCNwMQBQNAtQNAxQsDIGNQ4oJTIGNQI1AUgoNAEWNAIWUGcxGSISRIgA/TQDQAAKgAQVH3x1NARQsCNDJK80C1A1CyU0ARJENAsiWzUMNAtXCIk1DYAEGh/8mTQMFlA0DVCwNAyIAMxC/xM0Cxc1DIAEgsRh/jQMFlCwNAyIALQyBjUOQv+KiACagaCNBjQGCDUGNhoBNQtC/9CIAIY2GgE1C0L/nSIxNBJEIzE1EkQiMTYSRCIxNxJEiABnKCIiQv9SNhoBNQtC/3ExGSISREL/XSKyASOyELIHsgiziUiJTAlJNQYyCYgAU4kJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIkxGYEFEkSIAA8iMgoyCYgAIUL/ByM1A4k0BjQHSg9B/7BC/7hJIhJMNAISEUSJsUL/kbGyCUL/iw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `4`,
    100: `46`,
    101: `47`,
    102: `48`,
    103: `50`,
    104: `50`,
    105: `51`,
    106: `51`,
    107: `51`,
    108: `51`,
    109: `51`,
    11: `4`,
    110: `51`,
    111: `52`,
    112: `52`,
    113: `53`,
    114: `57`,
    115: `57`,
    116: `58`,
    117: `59`,
    118: `59`,
    119: `60`,
    12: `5`,
    120: `61`,
    121: `61`,
    122: `62`,
    123: `63`,
    124: `64`,
    125: `65`,
    126: `65`,
    127: `65`,
    128: `66`,
    129: `66`,
    13: `5`,
    130: `66`,
    131: `67`,
    132: `68`,
    133: `68`,
    134: `69`,
    135: `69`,
    136: `69`,
    137: `69`,
    138: `69`,
    139: `69`,
    14: `5`,
    140: `69`,
    141: `69`,
    142: `69`,
    143: `69`,
    144: `70`,
    145: `70`,
    146: `71`,
    147: `72`,
    148: `73`,
    149: `73`,
    15: `6`,
    150: `74`,
    151: `74`,
    152: `75`,
    153: `76`,
    154: `76`,
    155: `77`,
    156: `78`,
    157: `79`,
    158: `80`,
    159: `84`,
    16: `7`,
    160: `85`,
    161: `85`,
    162: `86`,
    163: `86`,
    164: `86`,
    165: `86`,
    166: `86`,
    167: `86`,
    168: `86`,
    169: `86`,
    17: `8`,
    170: `86`,
    171: `86`,
    172: `87`,
    173: `87`,
    174: `88`,
    175: `89`,
    176: `90`,
    177: `90`,
    178: `91`,
    179: `91`,
    18: `9`,
    180: `92`,
    181: `93`,
    182: `93`,
    183: `94`,
    184: `94`,
    185: `94`,
    186: `94`,
    187: `94`,
    188: `94`,
    189: `95`,
    19: `10`,
    190: `95`,
    191: `96`,
    192: `97`,
    193: `97`,
    194: `98`,
    195: `99`,
    196: `99`,
    197: `100`,
    198: `101`,
    199: `103`,
    2: `2`,
    20: `11`,
    200: `103`,
    201: `104`,
    202: `104`,
    203: `107`,
    204: `108`,
    205: `109`,
    206: `109`,
    207: `111`,
    208: `111`,
    209: `112`,
    21: `11`,
    210: `112`,
    211: `113`,
    212: `114`,
    213: `115`,
    214: `115`,
    215: `116`,
    216: `117`,
    217: `117`,
    218: `118`,
    219: `119`,
    22: `12`,
    220: `120`,
    221: `121`,
    222: `121`,
    223: `122`,
    224: `123`,
    225: `124`,
    226: `126`,
    227: `126`,
    228: `126`,
    229: `128`,
    23: `13`,
    230: `128`,
    231: `129`,
    232: `129`,
    233: `129`,
    234: `131`,
    235: `131`,
    236: `131`,
    237: `131`,
    238: `131`,
    239: `131`,
    24: `14`,
    240: `132`,
    241: `132`,
    242: `133`,
    243: `134`,
    244: `136`,
    245: `137`,
    246: `139`,
    247: `140`,
    248: `141`,
    249: `141`,
    25: `14`,
    250: `142`,
    251: `143`,
    252: `143`,
    253: `145`,
    254: `146`,
    255: `146`,
    256: `147`,
    257: `148`,
    258: `150`,
    259: `150`,
    26: `15`,
    260: `151`,
    261: `152`,
    262: `153`,
    263: `153`,
    264: `154`,
    265: `154`,
    266: `155`,
    267: `155`,
    268: `155`,
    269: `156`,
    27: `17`,
    270: `156`,
    271: `157`,
    272: `157`,
    273: `157`,
    274: `157`,
    275: `157`,
    276: `157`,
    277: `158`,
    278: `158`,
    279: `159`,
    28: `17`,
    280: `160`,
    281: `161`,
    282: `161`,
    283: `162`,
    284: `163`,
    285: `165`,
    286: `165`,
    287: `166`,
    288: `166`,
    289: `166`,
    29: `17`,
    290: `167`,
    291: `167`,
    292: `167`,
    293: `169`,
    294: `169`,
    295: `170`,
    296: `171`,
    297: `171`,
    298: `172`,
    299: `172`,
    3: `2`,
    30: `17`,
    300: `172`,
    301: `172`,
    302: `172`,
    303: `172`,
    304: `173`,
    305: `173`,
    306: `174`,
    307: `175`,
    308: `176`,
    309: `178`,
    31: `17`,
    310: `178`,
    311: `179`,
    312: `179`,
    313: `179`,
    314: `180`,
    315: `180`,
    316: `181`,
    317: `181`,
    318: `182`,
    319: `182`,
    32: `17`,
    320: `182`,
    321: `184`,
    322: `184`,
    323: `184`,
    324: `185`,
    325: `185`,
    326: `185`,
    327: `185`,
    328: `187`,
    329: `187`,
    33: `17`,
    330: `188`,
    331: `189`,
    332: `189`,
    333: `190`,
    334: `190`,
    335: `190`,
    336: `191`,
    337: `191`,
    338: `192`,
    339: `192`,
    34: `17`,
    340: `192`,
    341: `194`,
    342: `194`,
    343: `194`,
    344: `195`,
    345: `195`,
    346: `195`,
    347: `196`,
    348: `196`,
    349: `197`,
    35: `17`,
    350: `197`,
    351: `197`,
    352: `199`,
    353: `200`,
    354: `200`,
    355: `201`,
    356: `202`,
    357: `203`,
    358: `204`,
    359: `204`,
    36: `17`,
    360: `205`,
    361: `206`,
    362: `207`,
    363: `208`,
    364: `208`,
    365: `209`,
    366: `210`,
    367: `211`,
    368: `212`,
    369: `212`,
    37: `17`,
    370: `213`,
    371: `214`,
    372: `215`,
    373: `215`,
    374: `215`,
    375: `216`,
    376: `217`,
    377: `218`,
    378: `219`,
    379: `219`,
    38: `17`,
    380: `219`,
    381: `221`,
    382: `221`,
    383: `221`,
    384: `222`,
    385: `222`,
    386: `223`,
    387: `223`,
    388: `223`,
    389: `225`,
    39: `17`,
    390: `225`,
    391: `226`,
    392: `227`,
    393: `228`,
    394: `230`,
    395: `230`,
    396: `230`,
    397: `232`,
    398: `233`,
    399: `233`,
    4: `2`,
    40: `17`,
    400: `234`,
    401: `235`,
    402: `235`,
    403: `236`,
    404: `236`,
    405: `237`,
    406: `237`,
    407: `238`,
    408: `239`,
    409: `241`,
    41: `17`,
    410: `242`,
    411: `244`,
    412: `245`,
    413: `246`,
    414: `247`,
    415: `247`,
    416: `248`,
    417: `248`,
    418: `249`,
    419: `249`,
    42: `17`,
    420: `249`,
    421: `250`,
    422: `252`,
    423: `253`,
    424: `254`,
    425: `254`,
    426: `254`,
    427: `255`,
    428: `256`,
    429: `256`,
    43: `17`,
    430: `259`,
    431: `259`,
    432: `260`,
    433: `260`,
    434: `261`,
    435: `262`,
    436: `263`,
    437: `264`,
    438: `264`,
    439: `265`,
    44: `18`,
    440: `266`,
    441: `266`,
    442: `267`,
    443: `267`,
    444: `268`,
    445: `268`,
    446: `269`,
    447: `270`,
    448: `271`,
    449: `271`,
    45: `18`,
    450: `272`,
    451: `273`,
    452: `274`,
    453: `275`,
    454: `275`,
    455: `276`,
    456: `277`,
    457: `278`,
    458: `280`,
    459: `280`,
    46: `18`,
    460: `281`,
    461: `281`,
    462: `282`,
    463: `283`,
    464: `285`,
    465: `285`,
    466: `285`,
    467: `287`,
    468: `288`,
    469: `288`,
    47: `19`,
    470: `289`,
    471: `289`,
    472: `290`,
    473: `290`,
    474: `290`,
    475: `291`,
    476: `291`,
    477: `291`,
    478: `293`,
    479: `294`,
    48: `19`,
    480: `294`,
    481: `295`,
    482: `297`,
    483: `297`,
    484: `298`,
    485: `298`,
    486: `299`,
    487: `300`,
    488: `301`,
    489: `301`,
    49: `19`,
    490: `301`,
    491: `302`,
    492: `302`,
    493: `302`,
    494: `304`,
    495: `305`,
    496: `306`,
    497: `307`,
    498: `308`,
    499: `308`,
    5: `2`,
    50: `19`,
    500: `309`,
    501: `310`,
    502: `311`,
    503: `312`,
    504: `314`,
    505: `315`,
    506: `315`,
    507: `315`,
    508: `317`,
    509: `318`,
    51: `19`,
    510: `318`,
    511: `319`,
    52: `19`,
    53: `19`,
    54: `19`,
    55: `21`,
    56: `23`,
    57: `23`,
    58: `24`,
    59: `24`,
    6: `2`,
    60: `25`,
    61: `25`,
    62: `25`,
    63: `25`,
    64: `25`,
    65: `25`,
    66: `25`,
    67: `26`,
    68: `26`,
    69: `27`,
    7: `2`,
    70: `27`,
    71: `27`,
    72: `28`,
    73: `29`,
    74: `30`,
    75: `30`,
    76: `31`,
    77: `31`,
    78: `32`,
    79: `33`,
    8: `2`,
    80: `33`,
    81: `34`,
    82: `35`,
    83: `35`,
    84: `36`,
    85: `37`,
    86: `37`,
    87: `38`,
    88: `39`,
    89: `40`,
    9: `2`,
    90: `40`,
    91: `41`,
    92: `42`,
    93: `43`,
    94: `43`,
    95: `44`,
    96: `44`,
    97: `45`,
    98: `45`,
    99: `46`
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
  warnings: [`Step 2 calls a remote object at /app/announcer.rsh:32:59:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v456","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"address payable","name":"ctcInfo","type":"address"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"address payable","name":"rewardTokenId","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"rewardsPerBlock","type":"tuple"},{"internalType":"address payable","name":"stakedTokenId","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"pairTokenAId","type":"tuple"},{"internalType":"bytes8","name":"pairTokenASymbol","type":"bytes8"},{"internalType":"address payable","name":"pairTokenBId","type":"address"},{"internalType":"bytes8","name":"pairTokenBSymbol","type":"bytes8"},{"internalType":"uint256","name":"rewardTokenDecimals","type":"uint256"},{"internalType":"bytes8","name":"rewardTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenDecimals","type":"uint256"},{"internalType":"address payable","name":"stakedTokenPoolId","type":"address"},{"internalType":"bytes8","name":"stakedTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenTotalSupply","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"v1","type":"tuple"},{"indexed":false,"internalType":"bool","name":"v2","type":"bool"}],"name":"Announce","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"address payable","name":"ctcInfo","type":"address"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"address payable","name":"rewardTokenId","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"rewardsPerBlock","type":"tuple"},{"internalType":"address payable","name":"stakedTokenId","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"pairTokenAId","type":"tuple"},{"internalType":"bytes8","name":"pairTokenASymbol","type":"bytes8"},{"internalType":"address payable","name":"pairTokenBId","type":"address"},{"internalType":"bytes8","name":"pairTokenBSymbol","type":"bytes8"},{"internalType":"uint256","name":"rewardTokenDecimals","type":"uint256"},{"internalType":"bytes8","name":"rewardTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenDecimals","type":"uint256"},{"internalType":"address payable","name":"stakedTokenPoolId","type":"address"},{"internalType":"bytes8","name":"stakedTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenTotalSupply","type":"uint256"}],"internalType":"struct T2","name":"elem0","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"address payable","name":"rewardToken1","type":"address"},{"internalType":"address payable","name":"stakeToken","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"rewardsPerBlock","type":"tuple"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address payable","name":"Rewarder0","type":"address"}],"internalType":"struct T7","name":"opts","type":"tuple"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"remainingRewards","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"v0","type":"tuple"}],"name":"_reach_oe_v316","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v363","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"components":[{"internalType":"address payable","name":"ctcInfo","type":"address"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"address payable","name":"rewardTokenId","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"rewardsPerBlock","type":"tuple"},{"internalType":"address payable","name":"stakedTokenId","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"pairTokenAId","type":"tuple"},{"internalType":"bytes8","name":"pairTokenASymbol","type":"bytes8"},{"internalType":"address payable","name":"pairTokenBId","type":"address"},{"internalType":"bytes8","name":"pairTokenBSymbol","type":"bytes8"},{"internalType":"uint256","name":"rewardTokenDecimals","type":"uint256"},{"internalType":"bytes8","name":"rewardTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenDecimals","type":"uint256"},{"internalType":"address payable","name":"stakedTokenPoolId","type":"address"},{"internalType":"bytes8","name":"stakedTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenTotalSupply","type":"uint256"}],"internalType":"struct T2","name":"elem0","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v459","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address payable","name":"ctcInfo","type":"address"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"address payable","name":"rewardTokenId","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"rewardsPerBlock","type":"tuple"},{"internalType":"address payable","name":"stakedTokenId","type":"address"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T1","name":"pairTokenAId","type":"tuple"},{"internalType":"bytes8","name":"pairTokenASymbol","type":"bytes8"},{"internalType":"address payable","name":"pairTokenBId","type":"address"},{"internalType":"bytes8","name":"pairTokenBSymbol","type":"bytes8"},{"internalType":"uint256","name":"rewardTokenDecimals","type":"uint256"},{"internalType":"bytes8","name":"rewardTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenDecimals","type":"uint256"},{"internalType":"address payable","name":"stakedTokenPoolId","type":"address"},{"internalType":"bytes8","name":"stakedTokenSymbol","type":"bytes8"},{"internalType":"uint256","name":"stakedTokenTotalSupply","type":"uint256"}],"internalType":"struct T2","name":"v453","type":"tuple"}],"name":"announce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200140490813803601f1980601f83011683019360018060401b039284861084871117620002bb5780859260409788528339602094859181010312620002d15784519084820182811085821117620002bb5786525181524360035584518581019080821085831117620002bb57859187526000918183809352015260049160ff835416620002a4577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a151801590811562000297575b50156200028057346200026957600381556001944386558651928282850152818452878401848110878211176200025657885283519586116200024357600254908782811c9216801562000238575b83831014620002255750601f8111620001d9575b508093601f8611600114620001715750509183949184939462000165575b50501b916000199060031b1c1916176002555b5161112d9081620002d78239f35b01519250388062000144565b600283528183209493928692918316915b88838310620001be5750505010620001a4575b505050811b0160025562000157565b015160001960f88460031b161c1916905538808062000195565b85870151885590960195948501948793509081019062000182565b60028352818320601f870160051c8101918388106200021a575b601f0160051c019087905b8281106200020e57505062000126565b848155018790620001fe565b9091508190620001f3565b634e487b7160e01b845260229052602483fd5b91607f169162000112565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000c3565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630449fe101461007c5780631e93b0f1146100735780635c0112b61461006a57806383230757146100615763ab53f2c60361000e5761005c610267565b61000e565b5061005c610248565b5061005c610109565b5061005c6100ea565b6102803660031901126100e557610091610494565b6040519061009e8261032d565b60043582526102603660231901126100e5576100d5916040516100c081610355565b6100c9366106f8565b81526020820152610c2e565b60405160008152602090f35b0390f35b600080fd5b50346100e55760003660031901126100e5576020600354604051908152f35b506102603660031901126100e5576100e16020610124610494565b61023481610130610474565b6101386104be565b81526024358582015260443560408201526101516104cb565b606082015261015f36610544565b608082015261016c6104d8565b60a082015261017a3661059e565b60c0820152610187610638565b60e08201526101946104e5565b6101008201526101a2610650565b6101208201526101a4356101408201526101ba610668565b6101608201526101e4356101808201526101d26104f3565b6101a08201526101e0610680565b6101c0820152610244356101e0820152604051906101fd82610355565b610205611072565b80835252604051906102168261032d565b6000825285820190610226611072565b825260008352519052610c2e565b015160405190151581529081906020820190565b50346100e55760003660031901126100e5576020600154604051908152f35b50346100e5576000806003193601126102d95780546102846103c9565b906040519283918252602090604082840152835191826040850152815b8381106102c257505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016102a1565b80fd5b90600182811c9216801561030c575b60208310146102f657565b634e487b7160e01b600052602260045260246000fd5b91607f16916102eb565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761034857604052565b610350610316565b604052565b602081019081106001600160401b0382111761034857604052565b606081019081106001600160401b0382111761034857604052565b60c081019081106001600160401b0382111761034857604052565b601f909101601f19168101906001600160401b0382119082101761034857604052565b60405190600082600254916103dd836102dc565b8083526001938085169081156104535750600114610405575b50610403925003836103a6565b565b6002600090815260008051602061110183398151915294602093509091905b81831061043b5750506104039350820101386103f6565b85548884018501529485019487945091830191610424565b905061040394506020925060ff191682840152151560051b820101386103f6565b6040519061020082016001600160401b0381118382101761034857604052565b604051906104a18261032d565b60006020838281520152565b6001600160a01b038116036100e557565b60043590610403826104ad565b60643590610403826104ad565b60c43590610403826104ad565b6101643590610403826104ad565b6102043590610403826104ad565b60243590610403826104ad565b60843590610403826104ad565b60e43590610403826104ad565b6101843590610403826104ad565b6102243590610403826104ad565b60409060831901126100e5576040519061055d8261032d565b608435825260a4356020830152565b60409060a31901126100e557604051906105858261032d565b60a435825260c4356020830152565b801515036100e557565b60609060e31901126100e557604051906105b782610370565b8160e43560028110156100e5578152610104356105d381610594565b6020820152604061012435916105e8836104ad565b0152565b6060906101031901126100e5576040519061060682610370565b816101043560028110156100e55781526101243561062381610594565b6020820152604061014435916105e8836104ad565b61014435906001600160c01b0319821682036100e557565b61018435906001600160c01b0319821682036100e557565b6101c435906001600160c01b0319821682036100e557565b61022435906001600160c01b0319821682036100e557565b61016435906001600160c01b0319821682036100e557565b6101a435906001600160c01b0319821682036100e557565b6101e435906001600160c01b0319821682036100e557565b61024435906001600160c01b0319821682036100e557565b906102606023198301126100e557610759610711610474565b9261071a610501565b84526044356020850152606435604085015261073461050e565b60608501526107428161056c565b608085015261074f61051b565b60a08501526105ec565b60c0830152610766610698565b60e0830152610773610528565b6101008301526107816106b0565b6101208301526101c4356101408301526107996106c8565b610160830152610204356101808301526107b1610536565b6101a08301526107bf6106e0565b6101c0830152610264356101e0830152565b6040908151916107e08361032d565b6020836000928382528051936107f585610370565b815160c081016001600160401b0381118282101761084c575b83528181528185820152610820610494565b838201528160608201528160808201528160a0820152855283850152610844610494565b908401520152565b610854610316565b61080e565b60405190608082016001600160401b0381118382101761089d575b60405260006060838281526108876107d1565b60208201526108946107d1565b60408201520152565b6108a5610316565b610874565b908160209103126100e557516108bf81610594565b90565b6001600160a01b03169052565b80519060028210156108fe579082526020818101511515908301526040908101516001600160a01b0316910152565b634e487b7160e01b600052602160045260246000fd5b6001600160c01b0319169052565b610240906109318382516108c2565b6020810151602084015260408101516040840152610957606082015160608501906108c2565b6109736080820151608085019060208091805184520151910152565b61098560a082015160c08501906108c2565b61099760c082015160e08501906108cf565b60e0810151906109ad6101409283860190610914565b610a29610100820151926109c761016094858801906108c2565b610a1b610120840151916109e161018093848a0190610914565b840151946101a0958689015284015191610a016101c093848a0190610914565b840151946101e095868901528401516102008801906108c2565b820151610220860190610914565b0151910152565b604060206104039395946102a084019660018060a01b03168452805182850152015191019051610922565b3d15610aa3573d906001600160401b038211610a96575b60405191610a8a601f8201601f1916602001846103a6565b82523d6000602084013e565b610a9e610316565b610a72565b606090565b91908260409103126100e557604051610ac08161032d565b6020808294805184520151910152565b8082039161014083126100e55760e060405193610aec85610370565b126100e557610100610b6f92604051610b048161038b565b8151610b0f816104ad565b81526020820151610b1f816104ad565b6020820152610b318460408401610aa8565b60408201526080820151606082015260a0820151608082015260c0820151610b58816104ad565b60a0820152855260e0810151602086015201610aa8565b604082015290565b6104039092919261012060406020610160840196805185520151805160a0600180821b03918281511660208801528260208201511685880152610bcb85820151606089019060208091805184520151910152565b606081015182880152608081015160c088015201511660e08501526020810151610100850152015191019060208091805184520151910152565b6001600160a01b0390911681526102a081019291600091610280916105e8906020830190610922565b610c36610859565b91610c45600360005414610e31565b610c4d6103c9565b90610c626020928380825183010191016108aa565b50610c7e610c79610c7560045460ff1690565b1590565b610e51565b6040937f2c67f9aa085629fec29a9f313d1b00f52f452b92be106a97103f1e54c5d25d3f855180610cb0873383610a30565b0390a1610cc884518015908115610e25575b50610e71565b610cd23415610e91565b844760608301908152610ced600160ff196004541617600455565b8151958580880191632009701760e11b835260048952610d0c8961032d565b0180515151975190976001600160a01b0316905a9260008094938194f190610d32610a5b565b9182610d3d91610ed1565b50610d4d60ff1960045416600455565b4790519003908584019182515285808251830101910190610d6d91610ad0565b8582510152519101908082528551610d86819282610b77565b037f3824876d985f6979a12fe0e53ddd78b35e88328c9e1bbc4a0ec52410bfb2d01891a1515115610db690610eb1565b8351600081527f25d012a08a5440fd4e8b586d26126df5c4e28bf6f9b861ef39004768fc9e74f790602090a101600090525151905180913390610df99183610c05565b037f4239858cdd734aff1c0185c484e22bc3ad172d8c84503734bf05164ba94fe85e91a1610403610f55565b90506001541438610cc2565b15610e3857565b60405163100960cb60e01b8152600a6004820152602490fd5b15610e5857565b60405163100960cb60e01b8152600b6004820152602490fd5b15610e7857565b60405163100960cb60e01b8152600c6004820152602490fd5b15610e9857565b60405163100960cb60e01b8152600d6004820152602490fd5b15610eb857565b60405163100960cb60e01b8152600f6004820152602490fd5b15610ed95790565b805115610ee857805190602001fd5b60405163100960cb60e01b8152600e6004820152602490fd5b601f8111610f0d575050565b6000906002825260208220906020601f850160051c83019410610f4b575b601f0160051c01915b828110610f4057505050565b818155600101610f34565b9092508290610f2b565b600360005560014381556040516020600081830152808252610f768261032d565b8151916001600160401b038311611046575b610f9c83610f976002546102dc565b610f01565b81601f8411600114610fd65750928293918392600094610fcb575b50501b916000199060031b1c191617600255565b015192503880610fb7565b6002600052919083601f198116600080516020611101833981519152946000905b8883831061102c5750505010611013575b505050811b01600255565b015160001960f88460031b161c19169055388080611008565b858701518855909601959485019487935090810190610ff7565b61104e610316565b610f88565b6040519061106082610370565b60006040838281528260208201520152565b6040519061107f82610355565b81611088610474565b9060008083528060208401528060408401528060608401526110a8610494565b60808401528060a08401526110bb611053565b60c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c08401526101e08301525256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 5124,
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
