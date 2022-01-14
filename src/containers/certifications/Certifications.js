import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import { extracurriculars } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
//import ExtraCurricularCard from  "../../components/certificationCard/ExtracurricularCard";
function Certifications(props) {
  const theme = props.theme;
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Academic Publications
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert) => {
          return <CertificationCard certificate={cert} theme={theme} />;
        })}
      </div>




      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Extracurriculars and Certifications
          </h1>
        </Fade>
      </div>
      
      <div className="certs-body-div">
        {extracurriculars.extracurriculars.map((cert) => {
          return <CertificationCard certificate={cert} theme={theme} />;
        })}
      </div>



    </div>
  );
}

export default Certifications;
