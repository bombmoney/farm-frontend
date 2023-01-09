import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';
import { getNetworkBuyUrl } from '../../features/helpers/getNetworkData';
import { Dialog, withStyles } from '@material-ui/core';
import CustomButton from '../../components/CustomButtons/Button';
import styles from './styles';

const useStyles = makeStyles(styles);

const StyledDialog = withStyles(theme => ({
  paper: {
    margin: '16px',
    backgroundColor: theme.palette.background.primary,
  },
  paperScrollPaper: {
    maxHeight: 'calc(100% - 32px)',
  },
}))(Dialog);

const Header = ({ links, isNightMode, setNightMode }) => {
  const { chain } = useParams();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={`${classes.appBar} ${classes.dark}`} position="relative">
      <Toolbar className={classes.container}>
        <Link to={`/${chain}`}>
          <Button className={classes.title}>
            <Hidden xsDown>
              <img
                alt="PegHub"
                src={require(`images/peghubstaking.png`)}
                height={'70px'}
                className={classes.logo}
              />
            </Hidden>
            <Hidden smUp>
              <img
                alt="PegHub"
                src={require(`images/peghubstaking.png`)}
                height={'35px'}
                className={classes.logo}
              />
            </Hidden>
          </Button>
        </Link>

        <div className={classes.middleNav}>
          <Hidden smDown>
            {renderLink('https://www.peghub.com', t('PegHub'), null, classes)}
            {renderLink('https://app.bomb.money/', t('BOMB Money'), null, classes)}
            {renderLink('https://app.bitbomb.io/', t('bitBOMB'), null, classes)}
            {renderLink('https://www.czpegs.com/', t('czPegs'), null, classes)}
            {renderLink('https://www.snowpegs.com/', t('SnowPegs'), null, classes)}
            {renderLink('https://www.polypegs.com/', t('PolyPegs'), null, classes)}
            {renderLink('https://swap.peghub.com/swap', t('Swap'), null, classes)}
            {renderLink('https://vaults.peghub.com/', t('Vaults'), null, classes, '#000000')}
            {renderLink('https://docs.peghub.com/', t('Docs'), null, classes)}
          </Hidden>
        </div>

        {/* {renderLink('docs', t('docs'), 'book', classes)} */}
        {/* {renderLink('blog', t('blog'), 'file-alt', classes)} */}
        {/* <InsureLink t={t} classes={classes} /> */}
        {/* </Hidden> */}
        {/* {renderLink('buy', t('buy'), 'dollar-sign', classes)} */}

        <Hidden smDown implementation="css">
          <div className={classes.collapse}>{links}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
          <div style={{ textAlign: 'center' }}>
            <LinkSidebar url="https://www.peghub.com" label={t('PegHub')} classes={classes} />
            <LinkSidebar url="https://app.bomb.money" label={t('BOMB Money')} classes={classes} />
            <LinkSidebar url="https://app.bitbomb.io" label={t('bitBOMB')} classes={classes} />
            <LinkSidebar url="https://www.czpegs.com/" label={t('czPegs')} classes={classes} />
            <LinkSidebar url="https://www.snowpegs.com/" label={t('SnowPegs')} classes={classes} />
            <LinkSidebar url="https://www.polypegs.com/" label={t('PolyPegs')} classes={classes} />
            <LinkSidebar url="https://swap.peghub.com/swap" label={t('Swap')} classes={classes} />
            <LinkSidebar url="https://vaults.peghub.com/" label={t('Vaults')} classes={classes} />
            <LinkSidebar url="https://docs.peghub.com/" label={t('Docs')} classes={classes} />
            {/* <LinkSidebar name="dashboard" label={t('stats')} icon="chart-bar" classes={classes} />
            <LinkSidebar name="docs" label={t('docs')} icon="book" classes={classes} />
            <LinkSidebar name="blog" label={t('blog')} icon="file-alt" classes={classes} />
            <LinkSidebar name="forum" label={t('forum')} icon="comments" classes={classes} />
            <InsureLinkSidebar t={t} classes={classes} />
            <LinkSidebar name="buy" label={t('buy')} icon="dollar-sign" classes={classes} /> */}
            {/*<IconButton onClick={setNightMode} className={classes.icon}>
              {isNightMode ? <WbSunny /> : <NightsStay />}
            </IconButton>*/}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

// const InsureLinkSidebar = memo(function InsureLinkSidebar(props) {
//   return (
//     <div style={{ width: '100%', paddingTop: '10px' }}>
//       <InsureLink {...props} />
//     </div>
//   );
// });

// const InsureLink = memo(function InsureLink({ t, classes }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);
//   const handleOpen = useCallback(
//     e => {
//       e.preventDefault();
//       setIsOpen(true);
//     },
//     [setIsOpen]
//   );

//   return (
//     <>
//       <Link
//         component="button"
//         className={classes.link}
//         style={{ marginLeft: '5px', marginRight: '5px' }}
//         onClick={handleOpen}
//       >
//         <i className={`fas fa-shield-alt ${classes.icon}`} />
//         <span>{t('insure')}</span>
//       </Link>
//       <StyledDialog open={isOpen} onClose={handleClose} fullWidth={true} maxWidth="sm">
//         <div className={classes.modalInner}>
//           <IconButton className={classes.modalClose} onClick={handleClose}>
//             <Close />
//           </IconButton>
//           <h1 className={classes.modalTitle}>{t('InsurAce-Title')}</h1>
//           <div className={classes.modalSections}>
//             {t('InsurAce-Sections', { returnObjects: true }).map(section => (
//               <div className={classes.modalSection}>
//                 <h2 className={classes.modalSectionTitle}>{section.title}</h2>
//                 {section.content.map(paragraph => (
//                   <p key={paragraph} className={classes.modalSectionText}>
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>
//             ))}
//           </div>
//           <CustomButton
//             href="https://app.insurace.io/Insurance/Cart?id=110&chain=BSC&referrer=95244279533280151623141934507761661103282646845"
//             target="_blank"
//             className={classes.modalButton}
//           >
//             {t('InsurAce-Button')}
//           </CustomButton>
//         </div>
//       </StyledDialog>
//     </>
//   );
// });

const renderLink = (url, label, icon, classes, color) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      style={{ marginLeft: '5px', marginRight: '5px' }}
    >
      {icon && <i className={`fas fa-${icon} ${classes.icon}`} />}
      {color ? <span style={{ color: color }}>{label}</span> : <span>{label}</span>}
    </a>
  );
};

const LinkSidebar = ({ url, label, icon, classes }) => (
  <div style={{ width: '100%', paddingTop: '10px' }}>{renderLink(url, label, icon, classes)}</div>
);

export default Header;
