import { bscPools } from '../src/features/configure/vault/bsc_pools.js';
// import { hecoPools } from '../src/features/configure/vault/heco_pools.js';
// import { avalanchePools } from '../src/features/configure/vault/avalanche_pools.js';
// import { polygonPools } from '../src/features/configure/vault/polygon_pools.js';
// import { fantomPools } from '../src/features/configure/vault/fantom_pools.js';
// import { harmonyPools } from '../src/features/configure/vault/harmony_pools.js';
// import { arbitrumPools } from '../src/features/configure/vault/arbitrum_pools.js';
// import { celoPools } from '../src/features/configure/vault/celo_pools.js';
// import { moonriverPools } from '../src/features/configure/vault/moonriver_pools.js';
// import { cronosPools } from '../src/features/configure/vault/cronos_pools.js';

export const chainPools = {
  bsc: bscPools,
  // heco: hecoPools,
};
export const chainRpcs = {
  bsc:
    process.env.BSC_RPC ||
    'https://rpc.ankr.com/bsc/eb6d1bd7efcaa7628ae461af5b40cbdcfe27c2c10a389ad7212300c3ea9445cd',
  // heco: process.env.HECO_RPC || 'https://http-mainnet.hecochain.com',
};
