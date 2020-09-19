import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import { MdLocationOn } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";
import "../styles/Card.css";

const CardComponent = ({
  image,
  title,
  location,
  date,
  participants,
  note,
}) => {
  return (
    <Col lg="4" md="6">
      <Card className="card-context">
        <CardImg
          top
          width="100%"
          src={`http://localhost:8080/images/${image}`}
          alt={image}
          className="card-image"
        />
        <CardBody>
          <CardTitle className="text-location">
            <MdLocationOn className="icon-location" /> {location}
          </CardTitle>
          <CardSubtitle className="text-title">{title}</CardSubtitle>
          <CardText>
            {new Date(date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </CardText>
          <Row className="participants-content">
            {JSON.parse(participants).map((participant, index) => {
              if (index === JSON.parse(participants).length - 1) {
                return (
                  <CardText key={index} className="text-participant mb-3">
                    <BsPeopleCircle className="icon-participant" />{" "}
                    {participant}
                  </CardText>
                );
              }
              return (
                <CardText key={index} className="text-participant">
                  <BsPeopleCircle className="icon-participant" /> {participant}
                </CardText>
              );
            })}
          </Row>
        </CardBody>
        <CardBody className="note-content">
          <CardText className="text-location mb-0 mt-n3">Note:</CardText>
          <CardText className="note-text">{note}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardComponent;
