import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBCardGroup,
  MDBAnimation,
  MDBNavLink,
  MDBTabPane, MDBTabContent, MDBNav, MDBNavItem
} from "mdbreact";

import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import MenuLink from "./../components/menuLink";

import '../Css/Pocetna.css';
import haha from '../Slike/hahatrans.png';

// deo u liniji 175 ne sme u produkciju


class Pocetna extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

        state = {
          activeItem: "1"
        };
      
        toggle = tab => e => {
          if (this.state.activeItem !== tab) {
            this.setState({
              activeItem: tab
            });
          }
        };

  render(){
      return(
          <>
            <MDBContainer >
        <MDBRow>
          <MDBCol>
            <SectionContainer noBorder>
              <MDBJumbotron style={{ padding: 0 }} id="poza">
                <MDBCol
                  className="text-white text-center py-5 px-4"
                >
                  <MDBCol className="py-5">
                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold" style={{color: 'whitesmoke'}}>
                      React website by Dusan
                    </MDBCardTitle>
                    <p className="mx-5 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam,
                      voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum
                      dignissimos. Odit sed qui, dolorum!
                    </p>
                    <MDBBtn outline color="white" className="mb-5">
                      <MDBIcon icon="clone" className="mr-2" /> <a 
                              href="https://jedantackasedam.000webhostapp.com"
                              rel="noopener noreferrer"
                              target="_blank">View project</a>
                    </MDBBtn>
                  </MDBCol>
                </MDBCol>
              </MDBJumbotron>
            </SectionContainer>
          </MDBCol>
        </MDBRow>
        </MDBContainer>

            <MDBCardBody className="text-center">
            <h2 className="h2-responsive mb-4">
              <strong className="font-weight-bold">
                <img
                  src={haha} style={{width: '3em', height: '3em'}}
                  alt="mdbreact-logo"
                  className="pr-2"
                />
                Demo App By Dusan - Home
              </strong>
            </h2>
            <MDBRow />
            <p>React Bootstrap with Material Design</p>
            <p className="pb-4">
              This application shows the actual use of MDB React
              components in the application.
            </p>
            <MDBRow className="d-flex flex-row justify-content-center row">
              <a
                className="border nav-link border-light rounded mr-1"
                href="https://13decverzija.000webhostapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MDBIcon icon="graduation-cap" className="mr-2" />
                <span className="font-weight-bold">Laravel website</span>
              </a>
            </MDBRow>
          </MDBCardBody>

        
  <MDBContainer>
       
          <SectionContainer header="View">
        <MDBCardGroup deck className="mt-3">
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">WordPress 1</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <a href="https://andragog.000webhostapp.com" 
              rel="noopener noreferrer"
              target="_blank"  
              ><MDBBtn color="light-blue" size="md">
                read more
              </MDBBtn></a>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">WordPress 2</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <a href="https://carwash3.000webhostapp.com" 
              rel="noopener noreferrer"
              target="_blank"  
              ><MDBBtn color="light-blue" size="md">
                read more
              </MDBBtn></a>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">WordPress 3</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <a href="https://barbershop4.000webhostapp.com" 
              rel="noopener noreferrer"
              target="_blank"  
              ><MDBBtn color="light-blue" size="md">
                read more
              </MDBBtn></a>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>
      </MDBContainer>

<div>
  {/*
      <MDBContainer>
      <MDBNavLink onClick={this.scrollToTop} ><MenuLink to="/galerija" title="Galerija" /></MDBNavLink>
      </MDBContainer>
  */}
      </div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <SectionContainer header="My knowledge">
                <MDBNav className="nav-tabs">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "1"}
                      onClick={this.toggle("1")}
                      role="tab"
                    >
                      Laravel / MySQL
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "2"}
                      onClick={this.toggle("2")}
                      role="tab"
                    >
                      Frontend
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "3"}
                      onClick={this.toggle("3")}
                      role="tab"
                    >
                      WordPress
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem}>
                  <MDBTabPane tabId="1" role="tabpanel">
                    <p className="mt-2">
                      I do backend with Laravel. I have code for online shop with shopping cart and checkout. I have code
                      for admin panel, login/registration system, CRUD apps, database filtering and contact forms with 
                      server side validation.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2" role="tabpanel">
                    <p className="mt-2">
                      I have wide spectrum of frontend knowledge. I have codes with various designs, galleries,
                      animations, modern photography, videos all done primary with flex. I use JS, jQuery, React,
                      Bootstrap, MDBootstrap, jQuery plugins.
                    </p>
                    <p>
                      I have modern and futuristic designs. Some of my websites are on first google page.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3" role="tabpanel">
                    <p className="mt-2">
                      I can create and deploy WordPress websites with numerous plugins (for security, SEO, forms, 
                      shop, FAQ, chat, translations, multilanguage and more). I use elementor, beaver builder and more. 
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      

<MDBContainer>
      <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="css3"
                              brand
                              className="pink-text pr-2"
                            />
                            <strong>BARBERS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Animations, colours, shadows, skins and many more!
                            Get to know all our css styles in one place.
                          </MDBCardText>
                          <a 
                              tag="button"
                              href="https://berbernica.000webhostapp.com"
                              rel="noopener noreferrer"
                              target="_blank"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            >
                              More
                          </a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInDown">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="cubes" className="blue-text pr-2" />
                            <strong>React</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use components that you can use in your
                            applications. Both basic and extended versions!
                          </MDBCardText>
                          <a 
                              tag="button"
                              href="https://stoic-payne-cd40cb.netlify.com/"
                              rel="noopener noreferrer"
                              target="_blank"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            >
                              More
                          </a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInRight">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="code" className="green-text pr-2" />
                            <strong>MAKE UP</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Advanced components such as charts, carousels,
                            tooltips and popovers. All in Material Design
                            version.
                          </MDBCardText>

                          <a 
                              tag="button"
                              href="https://makeupstudio1.000webhostapp.com"
                              rel="noopener noreferrer"
                              target="_blank"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            >
                              More
                          </a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>

                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="bars" className="pink-text pr-2" />
                            <strong>SHOP</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </MDBCardText>
                          <a 
                              tag="button"
                              href="https://jedantackasedam.000webhostapp.com"
                              rel="noopener noreferrer"
                              target="_blank"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            >
                              More
                          </a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  

                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInRight">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="table" className="green-text pr-2" />
                            <strong>RESTAURANT</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </MDBCardText>
                          <a 
                              tag="button"
                              href="https://authlara.000webhostapp.com"
                              rel="noopener noreferrer"
                              target="_blank"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            >
                              More
                          </a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="window-restore"
                              far
                              className="pink-text pr-2"
                            />
                            <strong>WP SHOP</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Modals used to display advanced messages to the
                            user. Cookies, logging in, registration and much
                            more.
                          </MDBCardText>

                          <a 
                              tag="button"
                              href="https://dusanshop.000webhostapp.com"
                              rel="noopener noreferrer"
                              target="_blank"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            >
                              More
                          </a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>

                </MDBContainer>
          </>
      )
  }
}

export default Pocetna;