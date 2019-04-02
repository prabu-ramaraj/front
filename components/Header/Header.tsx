import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import AccountDropdown from "../../components/AccountDropdown";
import Link from "../../components/Link";
import Logo from "../../components/Logo";

const styles = (theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.appBar,
    background: "linear-gradient(180deg,hsla(0,0%,100%,.9) 0,hsla(0,0%,100%,.8))",
    boxShadow: "none"
  },
  button: {
    margin: theme.spacing(1)
  },
  accountButton: {
    extend: "button",
    color: "white"
  },
  logo: {
    marginRight: theme.spacing(1)
  },
  logoText: {
    marginRight: theme.spacing(1)
  }
});

interface IHeaderProps {
  classes: any;
  static?: boolean;
  hideSignUpLogin?: boolean;
  hideCompanyIndividual?: boolean;
  isLoggedIn: boolean;
}

interface IHeaderState {
  up?: boolean;
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
      up: true
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  public handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ up: false });
    } else {
      this.setState({ up: true });
    }
  };

  public componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  public render() {
    const {
      classes,
      isLoggedIn
    } = this.props;

    const hideSignUpLogin = true;
    let rightElement;

    if (isLoggedIn) {
      rightElement = <AccountDropdown />;
    } else if (!hideSignUpLogin) {
      if (this.state.up) {
        rightElement = (
          <Link href="/login">
            <Button
              className={classes.accountButton}
              variant="contained"
              color="primary"
              onScroll={this.handleScroll}
            >
              Se connecter
            </Button>
          </Link>
        );
      } else {
        rightElement = (
          <Link href="/sign-up">
            <Button
              className={classes.accountButton}
              variant="contained"
              color="primary"
              onScroll={this.handleScroll}
            >
              Premiers pas avec Cuistot du Coin
            </Button>
          </Link>
        );
      }
    }

    return (
      <AppBar
        position={this.props.static ? "static" : "sticky"}
        className={classes.appBar}
        color="inherit"
      >
        <Toolbar>
          <Grid container justify="flex-start" alignItems="center">
            <Link href="/">
              <Grid container justify="flex-start" alignItems="center">
                <Logo className={classes.logo} />
                <Typography className={classes.logoText}
                  variant="subtitle1"
                  component="div"
                >
                  Cuistot du Coin
                  </Typography>
              </Grid>
            </Link>
          </Grid>
          {rightElement && (
            <Grid container justify="flex-end">
              {rightElement}
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles as any)(Header as any) as any;
