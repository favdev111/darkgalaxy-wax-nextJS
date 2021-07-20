import React, { Component, useEffect } from "react";
import Link from "../../site/components/Link";
import Words from "../../src/Words";
import Button from "../../src/Button";
import withStyles from "../../src/tools/withStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { cloudWalletLogin, cloudWalletLogout } from "../../redux/pages/login/actions";
import { toggleNav, hideNav } from "../../redux/pages/resp/actions";
import { connect } from "react-redux";
import CartIcon from "../cart/cartIcon";

const styles = () => {
  return {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "auto",
      padding: "20px 0",
      borderBottom: "2px solid #26dafd",
      background: "rgba(2, 17, 20, 0.7)",
      "@media screen and (max-width: 575px)": {
        flexDirection: "column",
        padding: "10px 0 5px",
      },
    },
    mainPageNav: {
      "@media screen and (max-width: 575px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        transition: "all 0.5s",
        maxHeight: 0,
      },
    },
    opened: {
      "@media screen and (max-width: 575px)": {
        maxHeight: 500,
      },
    },
    mainNavToggler: {
      display: "none",
      "@media screen and (max-width: 575px)": {
        display: "block",
      },
    },
    mainPageNavBtn: {
      margin: "0 15px",
      "@media screen and (max-width: 575px)": {
        width: 120,
        margin: "7px 0",
        textAlign: "center",
      },
    },
  };
};

class MainPageNav extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    // If a new user record was loaded, check it's signature
    // this.wax = new waxjs.WaxJS("https://wax.greymass.com", null, null, false);
    const { activeUser } = this.props.ual;
    if (!prevProps.ual.activeUser && activeUser) {
      this.props.cloudWalletLogin(activeUser);
    }
  }
/*  openCheckout = () => {
    const Paddle = window.Paddle;
    Paddle.Checkout.open({
      product: 644604,
      locale: "en",
      displayModeTheme: "dark",
    });
  };
*/

  proceedOnLink = () => {
    const { onLink, hideNav } = this.props;
    hideNav();
    onLink();
  };
  addAccount = () => {
    this.props.ual.showModal();
  };
  removeSession = async () => {
    const {
      ual: { logout },
      cloudWalletLogout
    } = this.props;
    logout();
    cloudWalletLogout();
  };

  render() {
    const {
      loginPage,
      responsivePage,
      classes,
      onLink,
      anim,
      cloudWalletLogin,
      toggleNav,
    } = this.props;

    const { walletAddress } = loginPage;
    const { navOpened } = responsivePage;

    return (
      <header className={classes.header}>
        <nav
          className={
            navOpened
              ? `${classes.mainPageNav} ${classes.opened}`
              : `${classes.mainPageNav}`
          }
        >
          <Link href="/team" onLink={this.proceedOnLink}>
            <Button
              animate
              show={anim.entered}
              className={classes.mainPageNavBtn}
            >
              <Words>Team</Words>
            </Button>
          </Link>
          <Link href="/products" onLink={this.proceedOnLink}>
            <Button
              animate
              show={anim.entered}
              className={classes.mainPageNavBtn}
            >
              <Words>Shop</Words>
            </Button>
          </Link>
          <Link href="/characters" onLink={this.proceedOnLink}>
            <Button
              animate
              show={anim.entered}
              className={classes.mainPageNavBtn}
            >
              <Words>Characters</Words>
            </Button>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/dharry1968/DarkGalaxies/wiki"
            onLink={onLink}
          >
            <Button
              animate
              show={anim.entered}
              className={classes.mainPageNavBtn}
            >
              <Words>Wiki</Words>
            </Button>
          </Link>
          {walletAddress && (
            <Link href="/myAssets">
              <Button
                animate
                show={anim.entered}
                className={classes.mainPageNavBtn}
              >
                <Words>My Assets</Words>
              </Button>
            </Link>
          )}
          {!walletAddress && (
            <Button
              animate
              show={anim.entered}
              onClick={() => this.addAccount()}
              className={classes.mainPageNavBtn}
            >
              <Words>Login</Words>
            </Button>
          )}
          {walletAddress &&
            /*                        <Link
                            href={`/unity?${walletAddress}`}
                            onLink={onLink}
                        >
                            <Button
                                animate
                                show={anim.entered}
                                className={classes.mainPageNavBtn}
                            >
                                <Words>Play Now</Words>
                            </Button>
                        </Link>
*/
            ""}

          {walletAddress && <Words>{walletAddress}</Words>}
          {walletAddress && (
            <Button
              animate
              show={anim.entered}
              onClick={() => this.removeSession()}
              className={classes.mainPageNavBtn}
            >
              <Words>Logout</Words>
            </Button>
          )}
          {(walletAddress === "jrkqu.wam" || walletAddress === "abc123") && (
            <Link
              className={classes.option}
              href="https://darkgalaxies.io"
              href="/shop"
              onLink={onLink}
            >
              <Button
                animate
                show={anim.entered}
                className={classes.mainPageNavBtn}
              >
                <Words>Buy Packs</Words>
              </Button>
            </Link>
          )}
        </nav>
        <div className={classes.mainNavToggler} onClick={toggleNav}>
          <FontAwesomeIcon icon={navOpened ? faChevronUp : faChevronDown} />
        </div>
        <CartIcon />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  loginPage: state.loginPage,
  responsivePage: state.responsivePage,
});

const mapDispatchToProps = {
  cloudWalletLogin,
  toggleNav,
  hideNav,
  cloudWalletLogout
};

const connectedMainPageNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPageNav);

export default withStyles(styles)(connectedMainPageNav);
