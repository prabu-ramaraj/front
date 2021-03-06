import grey from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from 'mdi-material-ui/Facebook';
import InstagramIcon from 'mdi-material-ui/Instagram';
import TwitterIcon from 'mdi-material-ui/Twitter';
import React from "react";
import Link from "../../components/Link";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing(3)
  },
  root: {
    backgroundColor: grey[900]
  },
  title: {
    marginBottom: '1.5rem',
    opacity: '0.85'
  },
  subheading: {
    marginBottom: '0.3rem',
    color: 'white',
    fontSize: '0.8rem'
  },
  icons: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
    "& a": {
      color: 'white',
      marginRight: '10px'
    }
  }
});

export interface IFooterProps {
  classes?: any;
}

export class Footer extends React.Component<IFooterProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="space-around" className={classes.grid}>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography component="p" variant="h6" className={classes.title} color="primary">
                Cuistot du Coin
              </Typography>
              <Link href="/team" className={classes.subheading}>
                L'équipe
              </Link>
              <Link href="/mission" className={classes.subheading}>
                Notre mission
              </Link>
              <Link href="/join" className={classes.subheading}>
                Nous rejoindre
              </Link>
              <Link href="/presskit" className={classes.subheading}>
                Contact & Presse
              </Link>
              <Link href="/terms" className={classes.subheading}>
                Conditions légales
              </Link>
              <Link href="https://faq.cuistotducoin.com" target="_blank" rel="noopener noreferrer" className={classes.subheading}>
                FAQ
              </Link>
              <Link href="http://www.blog.cuistotducoin.com" target="_blank" rel="noopener noreferrer" className={classes.subheading}>
                Blog
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography component="p" variant="h6" className={classes.title} color="primary">
                Gourmets
              </Typography>
              <Link href="/testimony-gourmet" className={classes.subheading}>
                Temoignages
              </Link>
              <Link href="/gift" className={classes.subheading}>
                Carte Cadeau
              </Link>
              <Link href="/invite" className={classes.subheading}>
                Parrainage
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography component="p" variant="h6" className={classes.title} color="primary">
                Cuistots
              </Typography>
              <Link href="/testimony-cook" className={classes.subheading}>
                Temoignages
              </Link>
              <Link href="/become-cook" className={classes.subheading}>
                Devenir Cuistot
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography component="p" variant="h6" className={classes.title} color="primary">
                Entreprises
              </Typography>
              <Link href="/testimony-business" className={classes.subheading}>
                Temoignages
              </Link>
              <Link href="/invite-business" className={classes.subheading}>
                Parrainage
              </Link>
              <Link href="/terms-pro" className={classes.subheading}>
                Conditions légales
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography component="p" variant="h6" className={classes.title} color="primary">
                Partenaires
              </Typography>
              <Link href="/testimony-partner" className={classes.subheading}>
                Temoignages
              </Link>
              <Link href="/become-partner" className={classes.subheading}>
                Devenir partenaires
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.icons}>
          <a href="https://www.facebook.com/cuistotducoin/" target="_blank" rel="noopener noreferrer"><FacebookIcon titleAccess="facebook" /></a>
          <a href="https://twitter.com/cuistotducoin?lang=fr" target="_blank" rel="noopener noreferrer"><TwitterIcon titleAccess="twitter" /></a>
          <a href="https://www.instagram.com/cuistotducoin/" target="_blank" rel="noopener noreferrer"><InstagramIcon titleAccess="instagram" /></a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles as any)(Footer as any) as any;