import React from "react";
import {
    MDBRow,
    MDBCol,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer, MDBAnimation
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "./../components/sectionContainer";
import poz from '../Slike/poz.jpg';
import zena from '../Slike/zenasesir.png';

import '../Css/Galerija.css';

class Galerija extends React.Component {
    render(){
        return(
       <MDBContainer className="pb-5">
 <SectionContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls
          className="z-depth-1"
          
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                 // src="https://mdbootstrap.com/img/Photos/Slides/img%20(92).jpg"
                 src={poz}
                  alt="First slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                 //src="https://mdbootstrap.com/img/Photos/Slides/img%20(90).jpg"
                 src={zena}
                  alt="Second slide"
                />
                 <MDBMask overlay="black-light" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                 // src="https://mdbootstrap.com/img/Photos/Slides/img%20(91).jpg"
                 src={poz}
                  alt="Third slide"
                />
                 <MDBMask overlay="black-light" />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>


      <MDBRow className="mb-4">
            <MDBCol md="4">
              <MDBAnimation reveal type="bounceInUp">
              <MDBView hover zoom>
                <img
                  alt="A view on mountains."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                />
                </MDBView>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="tada">
              <MDBView hover zoom>
                <img
                  alt="Cottage on a lake surrounded by mountains."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                />
                </MDBView>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
              <MDBView hover zoom>
                <img
                  alt="A boat floating on an ocean"
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                />
                </MDBView>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
              <MDBView hover zoom>
                <img
                  alt="View on mountains from mountain top."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                />
                </MDBView>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
              <MDBView hover zoom>
                <img
                  alt="Rocky shore in the morning."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
                />
                </MDBView>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation
                reveal
                type="fadeInUp"
                onAnimationEnd={() =>
                  console.log("The last picture has been revealed")
                }
              >
                  <MDBView hover zoom>
                <img
                  alt="Rocky shore in the morning."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                />
                </MDBView>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

        </MDBContainer>
        )
    }
}

export default Galerija;