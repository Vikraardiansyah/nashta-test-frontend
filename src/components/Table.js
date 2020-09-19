import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import "../styles/Table.css";

const TableComponent = () => {
  const { dataLimit, pagination } = useSelector(state => state.data);

  return (
    <Table responsive>
      <thead className="table-head">
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Location</th>
          <th>Date</th>
          <th>Participants</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {dataLimit.map((data, index) => (
          <tr key={data.id}>
            <th scope="row">{index + 1 + (pagination.page - 1) * 5}.</th>
            <td>{data.title}</td>
            <td>{data.location}</td>
            <td>
              {new Date(data.date).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </td>
            <td className="text-participant">
              {JSON.parse(data.participants).join(", ")}
            </td>
            <td className="note-data">{data.note}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
