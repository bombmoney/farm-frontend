import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { WbSunny, NightsStay } from '@material-ui/icons';
import Davatar from '@davatar/react';
import Button from 'components/CustomButtons/Button.js';
import { useTranslation } from 'react-i18next';
import { useENS } from 'hooks/useENS';
import { LanguageDropdown } from '../LanguageDropdown/LanguageDropdown';

import styles from './styles';

const useStyles = makeStyles(styles);

const HeaderLinks = ({
  connected,
  address,
  connectWallet,
  disconnectWallet,
  isNightMode,
  setNightMode,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [shortAddress, setShortAddress] = useState('');
  const { ensName } = useENS(address);

  useEffect(() => {
    if (!connected) {
      return;
    }

    if (address.length < 11) {
      setShortAddress(address);
    } else {
      setShortAddress(`${address.slice(0, 6)}...${address.slice(-4)}`);
    }
  }, [address, connected]);

  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <Hidden smDown>
        <ListItem className={classes.listItem}>
          <IconButton onClick={setNightMode} className={classes.iconButton}>
            {isNightMode ? <WbSunny /> : <NightsStay />}
          </IconButton>
        </ListItem>
      </Hidden>
      <ListItem className={classes.listItem}>
        <LanguageDropdown navLinkClass={classes.navLink} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          disableElevation
          className={classes.walletDisplay}
          onClick={connected ? disconnectWallet : connectWallet}
        >
          {connected ? (
            <>
              <span style={{ marginRight: '6px' }}>
                <Davatar size={25} address={address} />
              </span>
              {ensName || shortAddress}
            </>
          ) : (
            <>
              <i className={classes.icon + ' far fa-question-circle'} />
              {t('Vault-Wallet')}
            </>
          )}
        </Button>
      </ListItem>
    </List>
  );
};

export default HeaderLinks;
