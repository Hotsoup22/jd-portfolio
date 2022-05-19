import Card from "react-bootstrap/Card";
import '../projectCard/projectCardStyle.css';
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";


export default function ProjectCard({
  title,
  image,
  liveUrl,
  repoUrl,
  description,
  features,
  browserBasedTechnologies,
  databases,
  serverSideDevelopment,
  aPIDesign,
  deploymentAndDelivery,
}) {
  return (
    <Container  className="container  myProjectsCard">
            <Card bg="dark"  >
            <Card.Header text='light' className="card-title">{title}</Card.Header>
            
              <a href={liveUrl}><Card.Img className=" project-image"
                variant="top"
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                alt="Application Image"
              /></a>
              <Card.Body className="myProjectsCard-body">
                

                <p className="description"><b>Description:</b> {description}</p>  
                <p className="features"><b>Features:</b> {features}</p>

                    <ul className=" technologies-List">
                      <li><span className="technologies-List-liTitle">Browser Based Technologies: </span>{browserBasedTechnologies}</li>  
                      <li><span className="technologies-List-liTitle">Database: </span>{databases}</li>  
                      <li><span className="technologies-List-liTitle">Server Side Development: </span>{serverSideDevelopment}</li>  
                      <li><span className="technologies-List-liTitle">API Design: </span>{aPIDesign}</li>  
                      <li><span className="technologies-List-liTitle">Deployment And Delivery: </span>{deploymentAndDelivery}</li>  
                    </ul>              

                  <ButtonGroup>
                    <a
                      rel="noreferrer"
                      href={liveUrl}
                      target="_blank"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View Live App
                    </a>
                    <a
                      rel="noreferrer"
                      href={repoUrl}
                      target="_blank"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      GitHub Repository
                    </a>
                  </ButtonGroup>
              </Card.Body>
            </Card>

    </Container>
  );
}
