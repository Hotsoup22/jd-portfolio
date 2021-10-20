import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
export default function ProjectCard({
  title,
  image,
  liveUrl,
  repoUrl,
  technology,
}) {
  return (
    <Container>
      <Row xs={1} md={1} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                alt="Application Image"
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                <ButtonGroup>
                            <a rel="noreferrer" href={liveUrl} target="_blank"
                                className="btn btn-sm btn-outline-secondary">View</a>
                            <a rel="noreferrer" href={repoUrl} target="_blank"
                                className="btn btn-sm btn-outline-secondary">Repo</a>
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
