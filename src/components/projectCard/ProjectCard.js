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
  technology,
}) {
  return (
    <Container className="container">
            <Card bg='dark' >
              <a href={liveUrl}><Card.Img className=" project-image"
                variant="top"
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                alt="Application Image"
              /></a>
              <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>

                <p className="description"><b>Description:</b> {description}</p>  
                <p className="features"><b>Features:</b> {features}</p>
                <p className="technologies"><b>Technologies:</b> {technology}</p>
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
