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
  MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBCollapse
} from "mdbreact";

import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import MenuLink from "./../components/menuLink";

import '../Css/Onama.css';

class Onama extends React.Component {

    state = {
        collapseID: ""
      };
    
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      };

  render(){
      return(
        <>
         <MDBJumbotron fluid id="fluidjumb">
        <MDBContainer>
          <h2 className="display-4">Fluid jumbotron</h2>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal space of its parent.
          </p>
        </MDBContainer>
      </MDBJumbotron>

      <MDBRow id="red1onama">
          <MDBCol>
          <SectionContainer header="Accordion without icon">
          <div>
            <div>
              <MDBBtn
                color="primary"
                onClick={this.toggleCollapse("accordion1")}
                style={{ marginBottom: "1rem" }}
              >
                Collapsible Group Item #1
              </MDBBtn>
            </div>
            <MDBCollapse id="accordion1" isOpen={this.state.collapseID}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven&apos;t heard of them
              accusamus labore sustainable VHS.
            </MDBCollapse>

            <div>
              <MDBBtn
                color="primary"
                onClick={this.toggleCollapse("accordion2")}
                style={{ marginBottom: "1rem" }}
              >
                Collapsible Group Item #2
              </MDBBtn>
            </div>
            <MDBCollapse id="accordion2" isOpen={this.state.collapseID}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven&apos;t heard of them
              accusamus labore sustainable VHS.
            </MDBCollapse>

            <div>
              <MDBBtn
                color="primary"
                onClick={this.toggleCollapse("accordion3")}
                style={{ marginBottom: "1rem" }}
              >
                Collapsible Group Item #2
              </MDBBtn>
            </div>
            <MDBCollapse id="accordion3" isOpen={this.state.collapseID}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven&apos;t heard of them
              accusamus labore sustainable VHS.
            </MDBCollapse>
          </div>
        </SectionContainer>
          </MDBCol>
          <MDBCol id="red1slika">
         
              </MDBCol>
      </MDBRow>

<MDBContainer>
      <SectionContainer header="About">
        <MDBCardGroup>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
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
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
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
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg"
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
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>
      </MDBContainer>
        </>
      )
  }
}

export default Onama;