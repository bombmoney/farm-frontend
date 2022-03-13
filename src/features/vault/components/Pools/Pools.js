import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Grid from '@material-ui/core/Grid';

import TVLLoader from './TVLLoader/TVLLoader';
import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchBalances, useFetchVaultsData, useFetchApys } from '../../redux/hooks';
import VisiblePools from '../VisiblePools/VisiblePools';
import styles from './styles';
import { usePoolsTvl, useUserTvl } from '../../hooks/usePoolsTvl';
import { formatGlobalTvl } from 'features/helpers/format';
import { useFetchBifibuyback } from 'features/vault/redux/fetchBifiBuyback';
import { getNetworkFriendlyName } from '../../../helpers/getNetworkData';

const FETCH_INTERVAL_MS = 15 * 1000;

const useStyles = makeStyles(styles);

export default function Pools() {
  const { t } = useTranslation();
  const { web3, address } = useConnectWallet();
  const { pools, fetchVaultsData, fetchVaultsDataPending, fetchVaultsDataDone } =
    useFetchVaultsData();
  const { tokens, fetchBalances, fetchBalancesPending, fetchBalancesDone } = useFetchBalances();
  const { apys, fetchApys, fetchApysDone } = useFetchApys();
  const { bifibuyback, fetchBifibuyback, fetchBifibuybackDone } = useFetchBifibuyback();
  const { poolsTvl } = usePoolsTvl(pools);
  const { userTvl } = useUserTvl(pools, tokens);
  const classes = useStyles();

  useEffect(() => {
    fetchApys();
    const id = setInterval(fetchApys, FETCH_INTERVAL_MS);
    return () => clearInterval(id);
  }, [fetchApys]);

  useEffect(() => {
    fetchBifibuyback();
    const id = setInterval(fetchBifibuyback, FETCH_INTERVAL_MS);
    return () => clearInterval(id);
  }, [fetchBifibuyback]);

  useEffect(() => {
    const fetch = () => {
      if (address && web3 && !fetchBalancesPending) {
        fetchBalances({ address, web3, tokens });
      }
      if (!fetchVaultsDataPending) {
        fetchVaultsData({ web3, pools });
      }
    };
    fetch();

    const id = setInterval(fetch, FETCH_INTERVAL_MS);
    return () => clearInterval(id);

    // Adding tokens and pools to this dep list, causes an endless loop, DDoSing the api
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, web3, fetchBalances, fetchVaultsData]);

  // const chainNameLowercase = getNetworkFriendlyName().toLowerCase();
  // const chainBifibuyback =
  //   fetchBifibuybackDone && chainNameLowercase in bifibuyback
  //     ? bifibuyback[chainNameLowercase].buybackUsdAmount
  //     : undefined;

  const activePoolCount = pools.filter(pool => pool.status === 'active').length;

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6}>
        {/* <h1 className={classes.title}>{t('Vault-Network')}</h1> */}
        {/* <NetworksToggle /> */}
        {fetchVaultsDataDone && activePoolCount && (
          <>
            <h2 className={classes.title}> {`${activePoolCount} ${t('Vault-MainTitle')}`}</h2>
          </>
        )}
      </Grid>
      <Grid item xs={6}>
        <div className={classes.tvl}>
          <span className={classes.title}>
            TVL{' '}
            {fetchVaultsDataDone && poolsTvl > 0 ? (
              formatGlobalTvl(poolsTvl)
            ) : (
              <TVLLoader className={classes.titleLoader} />
            )}
          </span>

          {/* {fetchBifibuybackDone && chainBifibuyback && (
            <span className={classes.text}>
              {t('Vault-BifiBuyback', { amount: formatGlobalTvl(chainBifibuyback) })}
            </span>
          )} */}

          <span className={classes.text}>
            {t('Vault-Deposited')}{' '}
            {fetchVaultsDataDone && fetchBalancesDone ? (
              formatGlobalTvl(userTvl)
            ) : (
              <TVLLoader className={classes.titleLoader} />
            )}
          </span>

          <h4 className={classes.subtitle} style={{ marginTop: '16px' }}>
            <AllInclusiveIcon className={classes.infinityIcon} />
            {t('Vault-AutocompoundingNote')}
          </h4>
        </div>
      </Grid>

      <VisiblePools
        pools={pools}
        apys={apys}
        tokens={tokens}
        fetchBalancesDone={fetchBalancesDone}
        fetchApysDone={fetchApysDone}
        fetchVaultsDataDone={fetchVaultsDataDone}
      />
    </Grid>
  );
}
