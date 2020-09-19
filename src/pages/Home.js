import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataNoLimitActionCreator } from "../redux/actions/data";
import { Container, Row } from "reactstrap";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(state => state.data);

  useEffect(
    () => {
      dispatch(getDataNoLimitActionCreator());
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className="home-container">
      <Navbar />
      <Container fluid="md" style={{ marginTop: "50px" }}>
        <Row>
          {data.map(data => (
            <Card key={data.id} {...data} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
