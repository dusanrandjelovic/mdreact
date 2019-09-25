import React from "react";
import {
  MDBFreeBird,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBContainer,
  MDBEdgeHeader,
  MDBIframe
} from "mdbreact";
import DocsLink from "./../components/docsLink";
import SectionContainer from "./../components/sectionContainer";
import '../Css/Kontakt.css';

const Kontakt = props => {
  return (
      <>
    <MDBContainer className="mt-3 text-center">
     
      <SectionContainer>
        <MDBEdgeHeader color="mdb-color darken-2" className="edgeheaderpoz"/>
        
        <MDBFreeBird>
        
          <MDBRow>
            <MDBCol
              md="8"
              lg="7"
              className="text-left mx-auto float-none white z-depth-1 py-2 px-2"
            >
              <MDBCardBody>
                <MDBCardTitle>Kontakt</MDBCardTitle>
                <p className="pb-4">Example of Material Design Form</p>
                <form>
                  <MDBInput label="Your name" group type="text" icon="user" />
                  <MDBInput
                    label="Your email"
                    group
                    type="email"
                    icon="envelope"
                  />
                  <MDBInput
                    type="textarea"
                    rows="2"
                    label="Textarea"
                    icon="pencil-alt"
                  />
                  <MDBBtn color="mdb-color" className="text-xs-left">
                    Submit
                  </MDBBtn>
                </form>
                <div className="my-2">
                  <p style={{ fontWeight: "300", fontSize: "0.75rem" }}>
                    Never submit your passwords here
                  </p>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
      </SectionContainer>

<MDBRow>
  <MDBCol>
    <h2>Address</h2>
    <p>Belgrade</p>
    </MDBCol>
    <MDBCol>
    <h2>Email</h2>
    <p>dusanrandjelovic92@gmail.com</p>
    </MDBCol>
    <MDBCol>
    <h2>Phone</h2>
    <p>065/888-11-96</p>
    </MDBCol>
</MDBRow>
<MDBRow className="social">
<a href="https://sr-rs.facebook.com/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Facebook"><i class="fab fa-facebook-square fa-2x"></i></a>
<a href="https://twitter.com/login?lang=sr" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Twitter"><i class="fab fa-twitter-square fa-2x"></i></a>
<a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Instagram"><i class="fab fa-instagram fa-2x"></i></a>
<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Youtube"><i class="fab fa-youtube-square fa-2x"></i></a>
</MDBRow>

    </MDBContainer>

<MDBContainer className="text-center">

<MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />
</MDBContainer>
</>
  );
};

export default Kontakt;