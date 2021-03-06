import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from "react";
import Layout from "../components/Layout";
import WorkshopCardList from "../components/WorkshopCardList";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1300
  },
  tabs: {

  }
});

export interface IIndividualProps {
  classes?: any;
}

interface IIndividualState {
  tab: number;
}

export class Individual extends React.Component<IIndividualProps, IIndividualState> {
  constructor(props: IIndividualProps) {
    super(props);

    this.state = {
      tab: 0
    };

  }

  public handleChange = (event, tab: number) => {
    this.setState({ tab });
  };

  public render() {
    const { classes } = this.props;
    const { tab } = this.state;

    const workshops = [
      {
        availableSeat: 6,
        date: "samedi 11 mai, 9h30-14h30",
        duration: 5,
        image:
          "https://static.cuistotducoin.com/img/workshops/michel-decouverte-ayurvedique.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/michel.jpg",
        name: "Atelier + Repas : Cuisine ayurvédique",
        nameCook: "Michel",
        price: 50,
        spot: "chez Michel, Plougastel",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/R2phZF",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "samedi 18 mai, 14h30-16h30",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-froment.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Atelier Initiation au tournage de crêpes",
        nameCook: "Nadine",
        price: 25,
        spot: "Terre D'Embruns, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/ovm0IZ",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "vendredi 24 mai, 17h-20h",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-ble-noir.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Initiation au tournage de galettes + Repas",
        nameCook: "Nadine",
        price: 30,
        spot: "Terre D'Embruns, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/m29858",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "vendredi 24 mai, 17h30-20h",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/luis-calzone.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/luis.jpg",
        name: "Atelier initiation à la cuisine italienne - Calzone",
        nameCook: "Luis",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/iL1ANy",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "samedi 25 mai, 10h-13h",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/hayet-tadjine.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/hayet.jpg",
        name: "Tadjine",
        nameCook: "Hayet",
        price: 35,
        spot: "Schmidt, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/qjgFFz",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "samedi 25 mai, 14h-16h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-fete-des-meres.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Atelier enfant inédit : Spécial fête des Mères",
        nameCook: "Audrey",
        price: 30,
        spot: "Cuisinella, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/BBBJqE",
        type: "Atelier collectif"
      }
    ];

    const privateWorkshops = [
    ];

    const privateChef = [
    ];

    const ads = [
      {
        title: "Offrez une carte cadeau à votre proche",
        subtitle: "Il disposera d’une année pour participer à l’atelier de son choix !"
      },
      {
        title: "Offre étudiante à Brest",
        subtitle: "Sous présentation de ta carte étudiante, paye ton premier atelier de cuisine collectif à 5€ !"
      },
      {
        title: "Carte CEZAM",
        subtitle: "Bénéficiez de -10% sur tous nos ateliers !"
      }
    ];

    return (
      <Layout>
        <Grid className={classes.grid}>
          <Tabs value={tab} onChange={this.handleChange} centered={true}>
            <Tab label="Atelier collectif" />
            <Tab label="Atelier privatif" />
            <Tab label="Chef à domicile" />
          </Tabs>
          {tab === 0 && <WorkshopCardList workshops={workshops} ads={ads} />}
          {tab === 1 && <WorkshopCardList workshops={privateWorkshops} ads={ads} />}
          {tab === 2 && <WorkshopCardList workshops={privateChef} ads={ads} />}
        </Grid>
      </Layout >
    );
  }
}

export default withStyles(styles as any)(Individual as any) as any;
