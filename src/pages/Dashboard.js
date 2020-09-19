import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { getDataActionCreator } from "../redux/actions/data";
import { Container, FormGroup, Input } from "reactstrap";
import qs from "querystring";
import Pagination from "react-bootstrap-4-pagination";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import "../styles/Dashboard.css";

const Dashboard = ({ history, location }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(
    qs.parse(location.search.slice(1)).search || ""
  );
  const [page, setPage] = useState(
    qs.parse(location.search.slice(1)).page || 1
  );

  const searchData = search => {
    if (search) {
      setPage(1);
      dispatch(getDataActionCreator({ page, search }));
      history.push(`/dashboard?${qs.stringify({ page, search })}`);
    } else {
      dispatch(getDataActionCreator({ page }));
      history.push(`/dashboard?${qs.stringify({ page })}`);
    }
  };

  const { pagination } = useSelector(state => state.data);

  const debounceSearch = useCallback(
    debounce(search => searchData(search), 1000),
    []
  );

  useEffect(() => {
    if (search) {
      dispatch(getDataActionCreator({ page, search }));
      history.push(`/dashboard?${qs.stringify({ page, search })}`);
    } else {
      dispatch(getDataActionCreator({ page }));
      history.push(`/dashboard?${qs.stringify({ page })}`);
    } // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <Navbar />
      <Container fluid="md" className="dashboard-container">
        <FormGroup>
          <Input
            className="search"
            type="search"
            name="search"
            id="examplesearch"
            placeholder="Search..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              debounceSearch(e.target.value);
            }}
          />
        </FormGroup>
        <Table />
        <div className="d-flex justify-content-center">
          <Pagination
            className="pagination"
            size="sm"
            circle
            threeDots
            totalPages={pagination.totalPages}
            currentPage={pagination.page}
            showMax={5}
            prevNext={false}
            activeBgColor="#bdbdbd"
            activeBorderColor="#bdbdbd"
            onClick={selectedPage => setPage(selectedPage)}
          />
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
