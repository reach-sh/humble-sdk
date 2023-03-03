# src/json

This directory contains mostly static JSON files, as well as a helper module for interacting with some of them. 
The directory was initially meant to enable plug-and-play integration of new blockchain support. It has since evolved to hold other static values. 


- [src/json](#srcjson)
- [Files](#files)
    - [index.ts](#indexts)
    - [\_CONNECTOR.json](#_connectorjson)
    - [ALGO.json](#algojson)
    - [ANNOUNCERS.json](#announcersjson)
    - [ETH.json](#ethjson)
 


# Files
All files are listed below.

--- 
### index.ts
Module index. Merges some JSON files into a single export, and also provides some utilities that depend on blockchain JSON constants (e.g. `convertDateToBlock`). 

This file is accompanied by an `index.test.ts` file. 

--- 
### _CONNECTOR.json
This is a "template" for integrating new blockchain constants. The basic outline is: 
- **File name** MUST be `BLOCKCHAIN.json` (e.g. `POLYGON.json`)
- **File contents** MUST mirror the contents of `_CONNECTOR.json` (same structure with substituted values)


--- 
### ALGO.json
Algorand-specific implementation of `_CONNECTOR.json`. Contains Algorand constants. 


--- 
### ANNOUNCERS.json
This is the only file that is not directly referenced by the [module index](#indexts).

**ANNOUNCERS.json** is used by the SDK to determine what master smart contracts to call. It became necessary during the v2-to-v3 migration, at which time Liquidity Migration was introduced as a feature. It makes querying data from a specific version easier. 

The file contains a single JSON object. At the top level, the keys represent versions of the SDK (e.g. `v2`, `v3`). 

```json
{
    "v2": { /* v2 data */ },
    "v3": { /* v3 data */ },
    // ...
}
```

Each version is another object that maps environments to their variables. 
For clarity: 
- `dev`: internal; used by localhost, **dev.humbleswap.com**. Runs on `TestNet`
- `staging`: public; used by **testnet.humbleswap.com**. Runs on `TestNet`
- `mainnet`: production instance. Runs on `MainNet`
```json
{
    "v2": {
        "dev": { /* dev data */ },
        "staging": { /* staging data */ },
        "mainnet": { /* mainnet data */ },
    },
}
```


Each **environment object** holds a standardized set of keys. Remember, HumbleSwap has Announcers for different types of data. 
```json
{
    "v2": {
        "dev": {
            "protocolAddress": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "protocolId": 00000000,
            "partnerFarmAnnouncerId": 00000000,
            "publicFarmAnnouncer": 00000000,
            "limitOrderAnnouncer": 00000000
         },
    },
}
```
- `protocolAddress`: **Triumvirate** contract application address
- `protocolId`: **Triumvirate** contract application id
- `partnerFarmAnnouncerId`: **Farm Announcer** application used for partner farms
- `publicFarmAnnouncer`: **Farm Announcer** application used for public farms
- `limitOrderAnnouncer`: **Limit Order Announcer** application used for partner farms

**IMPORTANT:** Any `0` value is a placeholder or indicates "no value." For example, Limit Orders were introduced in `v3`, so all `v2` environments have a `limitOrderAnnouncer` value of `0`.


--- 
### ETH.json
Ethereum-specific implementation of `_CONNECTOR.json`. Contains Ethereum constants. 


