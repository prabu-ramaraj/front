import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Layout from "../components/Layout";
import Link from "../components/Link";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing(3)
  },
  image: {
    height: "100%",
    maxWidth: 320,
    width: "100%"
  }
});

export interface IBusinessProps {
  classes?: any;
}

export class Business extends React.Component<IBusinessProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout
        component={
          <Grid
            container
            justify="space-around"
            className={classes.grid}
          >
            <Button
              variant="contained"
              color="secondary"
              href="https://landbot.io/u/H-117244-32JN5PQL01AGBAXB/index.html"
              target="_blank"
            >
              Obtenir un devis
              </Button>
          </Grid>
        }
      >
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
          spacing={2}
        >
          <Grid item sm={6} xs={12}>
            <Typography
              variant="h6"
              align="center"
              component="h2"
              gutterBottom
            >
              Vous souhaitez organiser un atelier
            </Typography>
            <Typography variant="body1" align="justify" paragraph>
              A la recherche d’une activité fédératrice, propice à la cohésion d’équipe et au partage ? Enfilez le tablier avec vos collaborateurs et rejoignez nos cuistots passionnés aux fourneaux. Nos ateliers laissent place à la collaboration et encouragent l’esprit d’équipe et la créativité. Chaque atelier se termine par la dégustation des préparations autour d’un buffet convivial, voir d’un repas.
            </Typography>
            <Grid container alignItems="center" justify="center">
              <Link href="/workshop-business">
                <Button variant="contained" color="secondary">En savoir plus</Button>
              </Link>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid container justify="center">
              <img
                className={classes.image}
                alt="Organisez un atelier Cuistot du Coin"
                src="https://static.cuistotducoin.com/img/business/organisez-un-atelier.jpg"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
          spacing={2}
        >
          <Grid item sm={6} xs={12}>
            <Grid container justify="center">
              <img
                className={classes.image}
                alt="Organisez un cocktail Cuistot du Coin"
                src="https://static.cuistotducoin.com/img/business/organisez-un-cocktail.jpg"
              />
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography
              variant="h6"
              align="center"
              component="h2"
              gutterBottom
            >
              Vous souhaitez faire appel à notre service traiteur
            </Typography>
            <Typography variant="body1" align="justify" paragraph>
              A l’issue d’une réunion d’équipe, lors d’un séminaire, à l’occasion d’une rencontre entre collaborateurs, vous recherchez une formule de repas qui allie originalité, simplicité et convivialité. Notre service traiteur est une invitation au voyage : découvrez des saveurs d’ici et d’ailleurs au travers de recettes authentiques.
            </Typography>
            <Grid container alignItems="center" justify="center">
              <Link href="/cater">
                <Button variant="contained" color="secondary">En savoir plus</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
          spacing={2}
        >
          <Grid item sm={6} xs={12}>
            <Typography
              variant="h6"
              align="center"
              component="h2"
              gutterBottom
            >
              Vous souhaitez organiser une journée de travail conviviale
            </Typography>
            <Typography variant="body1" align="justify" paragraph>
              Pour que le travail en équipe et vos réunions riment avec motivation, cohésion et inspiration, confiez-nous l’organisation de vos journées entre collaborateurs. Nous dénichons le lieu adapté pour vos temps de travail, tout en s’assurant d’une ambiance chaleureuse et conviviale. Ces temps productifs seront marqués par la découverte de recettes authentiques au travers de cocktail déjeunatoires pour vous restaurer ou lors d’un atelier si le timing le permet !
            </Typography>
            <Grid container alignItems="center" justify="center">
              <Link href="/working-day">
                <Button variant="contained" color="secondary">En savoir plus</Button>
              </Link>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid container justify="center">
              <img
                className={classes.image}
                alt="Organisez votre journée entière"
                src="https://static.cuistotducoin.com/img/business/organisez-une-journee-entiere.jpg"
              />
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-around"
            alignItems="center"
            className={classes.grid}
            spacing={2}
          >
            <Grid item sm={6} xs={12}>
              <Grid container justify="center">
                <img
                  className={classes.image}
                  alt="Activité Comité d'entreprise"
                  src="https://static.cuistotducoin.com/img/business/activite-comite-entreprise.jpg"
                />
              </Grid>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography
                variant="h6"
                align="center"
                component="h2"
                gutterBottom
              >
                Vous êtes un Comité d’Entreprise
            </Typography>
              <Typography variant="body1" align="justify" paragraph>
                Nous construisons à vos côtés un programme d’ateliers de cuisine privatisés dans nos lieux partenaires pour vos salariés. Les ateliers proposés sont accessibles à tous, amateurs ou passionnés avertis. Nos formats d’ateliers et la diversité des univers culinaires de nos cuistots permettront de satisfaire le plus grand nombre, tout en garantissant des moments conviviaux.
            </Typography>
              <Grid container alignItems="center" justify="center">
                <Link href="/work-council">
                  <Button variant="contained" color="secondary">En savoir plus</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout >
    );
  }
}

export default withStyles(styles as any)(Business as any) as any;
