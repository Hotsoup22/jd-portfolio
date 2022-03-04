import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";


export default function ProjectCard({
  title,
  image,
  liveUrl,
  repoUrl,
  technology,
}) {
  return (
    <Container className="container">
      <Row  className="g-4">
        {Array.from({ length: 1 }).map((_) => (
          <Col>

            <Card style={{ border: "5px solid darkGrey" }}>
              <Card.Img 
                variant="top"
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                href
                alt="Application Image"
              />
              <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Card.Text className="card-text">
                <p><span className="technologies">Technologies:</span> {technology}</p>
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
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    // <div className="ProjectCard">

    //     <img src={`${process.env.PUBLIC_URL}/assets/${image}`} alt="Application Image"/>
    //     <div>
    //         <a href={liveUrl}>Visit Live Website</a>
    //         <br></br>
    //         <a href={repoUrl}>Visit Repositorie</a>
    //         <h5>technology used</h5>
    //         <ul>{technology}</ul>
    //     </div>
    // </div>
  );
}
