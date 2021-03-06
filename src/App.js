import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink
} from "mdbreact";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

import './Css/App.css';

import haha from './Slike/hahatrans.png';


class App extends Component {
  state = {
    collapseID: ""
  };
  
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };

  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
    
        <div className="flyout">
          <MDBNavbar color="green" dark expand="md" fixed="top" scrolling>
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              
              <img src={haha} style={{width: '2.5em', height: '2.5em'}} />
              <strong className="align-middle">Dusan R</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/pocetna"
                  >
               <strong>Sites</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/onama"
                  >
               <strong>About</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/galerija"
                  >
               <strong>Gallery</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/todo"
                  >
               <strong>Todo app</strong>
                  </MDBNavLink>
                </MDBNavItem>

               

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/kontakt"
                  >
                    <strong>Contact</strong>
                  </MDBNavLink>
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
          <MDBFooter color="gray">
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; {new Date().getFullYear()} Copyright:
              <a href="https://dusanrandjelovicportfolio.000webhostapp.com" rel="noopener noreferrer"
                              target="_blank"> Dusan Randjelovic Portfolio </a>
             
            </p>
          </MDBFooter>
        </div>
     
      </Router>
    );
  }
}

export default App;

/*
<Logo style={{ height: "2.5rem", width: "2.5rem" }} />

 <MDBNavLink  to="/kontakt" onClick={this.scrollToTop}>Kontakt</MDBNavLink>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/css"
                  >
                <strong>CSS</strong>
                  </MDBNavLink>
                </MDBNavItem>


                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/tables"
                  >
                    <strong>Tables</strong>
                  </MDBNavLink>
                </MDBNavItem>

                 <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/navigation"
                  >
                    <strong>Navigation</strong>
                  </MDBNavLink>
                </MDBNavItem>


                 <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/components"
                  >
                    <strong>Components</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/advanced"
                  >
                    <strong>Advanced</strong>
                  </MDBNavLink>
                </MDBNavItem>
               

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/forms"
                  >
                    <strong>Forms</strong>
                  </MDBNavLink>
                </MDBNavItem>


                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/modals"
                  >
                    <strong>Modals</strong>
                      </MDBNavLink>
                </MDBNavItem>

                    <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/addons"
                  >
                    <strong>Addons</strong>
                 </MDBNavLink>
                </MDBNavItem>
*/
