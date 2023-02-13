import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Grid container item className={classes.root} justifyContent="center">
        <Typography>
          Copyright © 2023 Bomb Money. All Rights Reserved.Investing in Digital Assets carries risk
          and it’s important to remember you are responsible for the safekeeping of your wallet,
          seed phrase and private keys. Digital Assets are not bank deposits, are not legal tender,
          are not backed by the government and no government protections apply. BOMB Money does not
          provide financial, investment, tax, or legal advice. No communication or content provided
          by us is intended to imply financial advice, nor that any Digital Asset or strategy to
          generate rewards is low-risk. By using our website and services you agree to our Terms of
          Service and Privacy Policy. 
        </Typography>
      </Grid>
      {/* <div className={classes.column}>
        <div className={classes.title}>beefy.finance</div>
        <a
          href="https://docs.beefy.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-book ${classes.linkIcon}`} />
          <span>{t('docs')}</span>
        </a>

        <a
          href="https://blog.beefy.finance/articles"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-file-alt ${classes.linkIcon}`} />
          <span>{t('blog')}</span>
        </a>

        <a
          href="https://forum.beefy.finance/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-comments ${classes.linkIcon}`} />
          <span>{t('forum')}</span>
        </a>

        <a
          href="https://github.com/beefyfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-github ${classes.linkIcon}`} />
          <span>{t('source')}</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('products')}</div>
        <a
          href="https://gov.beefy.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-landmark ${classes.linkIcon}`} />
          <span>{t('gov')}</span>
        </a>

        <a
          href="https://vote.beefy.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-vote-yea ${classes.linkIcon}`} />
          <span>{t('vote')}</span>
        </a>

        <a
          href="https://www.vaults.peghub.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-hand-holding-usd ${classes.linkIcon}`} />
          <span>{t('app')}</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('socials')}</div>
        <a
          href="https://twitter.com/beefyfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-twitter ${classes.linkIcon}`} />

          <span>twitter</span>
        </a>
        <a
          href="https://t.me/beefyfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-telegram ${classes.linkIcon}`} />

          <span>telegram</span>
        </a>
        <a
          href="https://discord.gg/yq8wfHd"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-discord ${classes.linkIcon}`} />
          <span>discord</span>
        </a>
      </div> */}
    </div>
  );
};

export default memo(Footer);
