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
                      <MDBIcon icon="clone" className="mr-2" /> View project
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
                href="https://onlineprodavnica1.000webhostapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MDBIcon icon="graduation-cap" className="mr-2" />
                <span className="font-weight-bold">PHP website</span>
              </a>
            </MDBRow>
          </MDBCardBody>

        
  <MDBContainer>
       
          <SectionContainer header="Vidi">
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
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <a href="https://onlineprodavnica1.000webhostapp.com" rel="noopener noreferrer" target="_blank"
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
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn color="light-blue" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn color="light-blue" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>
      </MDBContainer>



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
                      Websites
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "2"}
                      onClick={this.toggle("2")}
                      role="tab"
                    >
                      WordPress
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "3"}
                      onClick={this.toggle("3")}
                      role="tab"
                    >
                      Apps
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem}>
                  <MDBTabPane tabId="1" role="tabpanel">
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta
                      doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur.
                      Tempora, placeat ratione porro voluptate odit minima.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2" role="tabpanel">
                    <p className="mt-2">
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                      reiciendis molestiae placeat unde eos molestias.
                    </p>
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                      reiciendis molestiae placeat unde eos molestias.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3" role="tabpanel">
                    <p className="mt-2">
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                      reiciendis molestiae placeat unde eos molestias.
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
                          <MDBNavLink 
                              tag="button"
                              to="/onama"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
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
                            <strong>TRAVEL</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use components that you can use in your
                            applications. Both basic and extended versions!
                          </MDBCardText>
                          <MDBNavLink 
                              tag="button"
                              to="/kontakt"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
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
                            <strong>CAR WASH</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Advanced components such as charts, carousels,
                            tooltips and popovers. All in Material Design
                            version.
                          </MDBCardText>

                          <a 
                              tag="button"
                              href="https://onlineprodavnica1.000webhostapp.com"
                       rel="noopener noreferrer"
                              target="_blank"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
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
                            <strong>BEAUTY</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/navigation"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
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
                            <strong>SHOP</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/tables"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
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
                            <strong>SHOP 2</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Modals used to display advanced messages to the
                            user. Cookies, logging in, registration and much
                            more.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/modals"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
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
