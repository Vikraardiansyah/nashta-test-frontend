import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postDataActionCreator } from "../redux/actions/data";
import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Input,
  Label,
  FormText,
  Button,
} from "reactstrap";
import Swal from "sweetalert2";
import "../styles/Form.css";

const FormComponent = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);
  const [location, setLocation] = useState(null);
  const [participants, setParticipants] = useState(null);
  const [date, setDate] = useState(null);
  const [note, setNote] = useState(null);
  const [image, setImage] = useState(null);
  const [imageFilter, setImageFilter] = useState(null);

  const addImage = e => {
    const size = 1 * 1024 * 1024;
    const file = e.target.files[0];
    if (file.size < size) {
      setImage(file);
      setImageFilter(null);
    } else {
      e.target.value = null;
      setImageFilter("size more than 1 MB");
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    e.target.reset();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("location", location);
    formData.append("participants", participants);
    formData.append("date", date);
    formData.append("note", note);
    formData.append("image", image);

    dispatch(postDataActionCreator(formData));

    Swal.fire({ title: "Success", icon: "success" });
  };

  return (
    <Container fluid="md" className="form-container">
      <Row>
        <Col lg="6" className="form-col">
          <Form className="form-content" onSubmit={handleSubmit}>
            <p>Add Event</p>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    autoComplete="off"
                    required
                    onChange={e => {
                      setTitle(e.target.value);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="location"
                    autoComplete="off"
                    required
                    onChange={e => {
                      setLocation(e.target.value);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="date"
                    id="pacticipant"
                    placeholder="pacticipant"
                    autoComplete="off"
                    required
                    onChange={e => {
                      setParticipants(
                        JSON.stringify(e.target.value.split(","))
                      );
                    }}
                  />
                  <FormText>
                    {" "}
                    if more than one, separate them with comma.
                  </FormText>
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Date"
                    required
                    onChange={e => setDate(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col lg="12">
                <FormGroup>
                  <Input
                    type="textarea"
                    name="note"
                    id="note"
                    placeholder="Note"
                    autoComplete="off"
                    className="text-area"
                    required
                    onChange={e => {
                      setNote(e.target.value);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <Label for="exampleFile">Picture</Label>
                  <Input
                    type="file"
                    name="file"
                    id="exampleFile"
                    accept="image/*"
                    required
                    onChange={addImage}
                  />
                  <FormText color={imageFilter ? "danger" : "muted"}>
                    size must be less than 1 MB
                  </FormText>
                </FormGroup>
              </Col>
            </Row>
            <Row className="d-flex justify-content-end">
              <Col lg="6" className="d-flex justify-content-end">
                <Button>Submit</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col lg="6" className="image-home"></Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
