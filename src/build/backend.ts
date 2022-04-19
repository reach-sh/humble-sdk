// Requires JS file extension (instead of .mjs)
import * as PoolBackend from "./index.tok_tok.js";
import * as PoolBackendN2NN from "./index.net_tok.js";
import * as AnnouncerBackend from "./announcer.main.js";
import * as FarmBackend from "./staker.main.js";

export const poolBackend = PoolBackend;
export const poolBackendN2NN = PoolBackendN2NN;
export const announcerBackend = AnnouncerBackend;
export const farmBackend = FarmBackend;
