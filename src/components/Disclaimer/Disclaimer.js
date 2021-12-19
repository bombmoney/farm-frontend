import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const useStyles = makeStyles(styles);

const Disclaimer = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid container item className={classes.root} justifyContent="center">
      <Typography className={classes.disclaimer}>
        {t('Disclaimer')}
        <br />
        <br />
        BOMB was not effected by any exploits.{' '}
        <a
          target="_blank"
          href="https://medium.com/@bombbshare/dec-18-quick-update-regarding-grim-exploit-4f1a0c989fba"
        >
          Read more here
        </a>
      </Typography>
    </Grid>
  );
};

export default memo(Disclaimer);
