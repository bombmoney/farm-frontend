import { addressBook } from 'bombfarm-addressbook';

const {
  polygon: polygonAddressBook,
  heco: hecoAddressBook,
  celo: celoAddressBook,
  avax: avaxAddressBook,
  bsc: bscAddressBook,
  bomb: bombAddressBook,
  fantom: fantomAddressBook,
  one: harmonyAddressBook,
  arbitrum: arbitrumAddressBook,
  moonriver: moonriverAddressBook,
  cronos: cronosAddressBook,
} = addressBook;
export {
  bscAddressBook,
  bombAddressBook,
  hecoAddressBook,
  celoAddressBook,
  avaxAddressBook,
  polygonAddressBook,
  fantomAddressBook,
  harmonyAddressBook,
  arbitrumAddressBook,
  moonriverAddressBook,
  cronosAddressBook,
};

export {
  vaultABI,
  bnbVaultABI,
  erc20ABI,
  strategyABI,
  multicallABI,
  govPoolABI,
  beefyUniV2ZapABI,
  uniswapV2PairABI,
  uniswapV2RouterABI,
  launchPoolABI,
} from './abi';
export { bscStakePools } from './stake/bsc_stake';
export { hecoStakePools } from './stake/heco_stake';
export { bombZaps } from './zap/bomb_zaps';
export { avalancheStakePools } from './stake/avalanche_stake';
export { celoStakePools } from './stake/celo_stake';
export { moonriverStakePools } from './stake/moonriver_stake';
export { polygonStakePools } from './stake/polygon_stake';
export { fantomStakePools } from './stake/fantom_stake';
export { harmonyStakePools } from './stake/harmony_stake';
export { arbitrumStakePools } from './stake/arbitrum_stake';
export { cronosStakePools } from './stake/cronos_stake';
export { bscPools } from './vault/bsc_pools';
export { bombPools } from './vault/bomb_pools';
export { hecoPools } from './vault/heco_pools';
export { avalanchePools } from './vault/avalanche_pools';
export { celoPools } from './vault/celo_pools';
export { moonriverPools } from './vault/moonriver_pools';
export { polygonPools } from './vault/polygon_pools';
export { fantomPools } from './vault/fantom_pools';
export { harmonyPools } from './vault/harmony_pools';
export { arbitrumPools } from './vault/arbitrum_pools';
export { cronosPools } from './vault/cronos_pools';
export { bscZaps } from './zap/bsc_zaps';
export { hecoZaps } from './zap/heco_zaps';
export { avalancheZaps } from './zap/avalanche_zaps';
export { celoZaps } from './zap/celo_zaps';
export { moonriverZaps } from './zap/moonriver_zaps';
export { polygonZaps } from './zap/polygon_zaps';
export { fantomZaps } from './zap/fantom_zaps';
export { harmonyZaps } from './zap/harmony_zaps';
export { arbitrumZaps } from './zap/arbitrum_zaps';
export { cronosZaps } from './zap/cronos_zaps';
export { nativeCoins } from './native_coins';
