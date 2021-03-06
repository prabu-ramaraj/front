import { withStyles } from "@material-ui/core/styles";
import cx from 'classnames';
import { withRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { getMetaInfo } from "../../shared/seo";

const styles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  content: {
    flex: 1
  }
});

interface ILayoutProps {
  classes: any;
  component: any;
  title?: string;
  description?: string;
  children: any;
  className?: string;
  headerProps?: object;
  noHero: boolean;
  router: any;
}

export class Layout extends React.Component<ILayoutProps, {}> {
  public static defaultProps: Partial<ILayoutProps> = {
    headerProps: {},
    noHero: false
  };

  public render() {
    const { classes, component, children, className, headerProps, noHero } = this.props;
    const { pathname } = this.props.router;
    let cleanPath = pathname.substr(1);

    if (cleanPath === '') cleanPath = 'index';

    const metaInfo = getMetaInfo();
    let title: string;
    if (this.props.title) {
      title = this.props.title
    } else {
      if (metaInfo[cleanPath] && metaInfo[cleanPath].title) {
        title = metaInfo[cleanPath].title;
      }
    }

    let description: string;
    if (this.props.description) {
      description = this.props.description
    } else {
      if (metaInfo[cleanPath] && metaInfo[cleanPath].description) {
        description = metaInfo[cleanPath].description;
      }
    }

    return (
      <div className={cx(classes.container, className)}>
        <div className={classes.content}>
          <Header {...headerProps} />
          {!noHero &&
            <Hero
              imageURL="https://static.cuistotducoin.com/img/home/landing.jpg"
              valueProposition={title}
              description={description}
            >
              {component}
            </Hero>
          }
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles as any)(withRouter(Layout as any) as any) as any;
