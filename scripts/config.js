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
  // avax: avalanchePools,
  // polygon: polygonPools,
  // fantom: fantomPools,
  // one: harmonyPools,
  // arbitrum: arbitrumPools,
  // celo: celoPools,
  // moonriver: moonriverPools,
  // cronos: cronosPools,
};

export const chainRpcs = {
  bsc: process.env.BSC_RPC || 'https://rpc.ankr.com/bsc',
  // heco: process.env.HECO_RPC || 'https://http-mainnet.hecochain.com',
  // avax: process.env.AVAX_RPC || 'https://api.avax.network/ext/bc/C/rpc',
  // polygon: process.env.POLYGON_RPC || 'https://polygon-rpc.com',
  // fantom: process.env.FANTOM_RPC || 'https://rpc.ftm.tools/',
  // one: process.env.HARMONY_RPC || 'https://api.s0.t.hmny.io/',
  // arbitrum: process.env.ARBITRUM_RPC || 'https://arb1.arbitrum.io/rpc',
  // celo: process.env.CELO_RPC || 'https://forno.celo.org',
  // moonriver: process.env.MOONRIVER_RPC || 'https://rpc.moonriver.moonbeam.network',
  // cronos: process.env.CRONOS_RPC || 'https://evm-cronos.crypto.org',
};
