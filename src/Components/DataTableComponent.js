import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

export default function DataTableComponent({ columns, data, ...props }) {
  return (
    <DataTableExtensions columns={columns} data={data}>
      <DataTable noHeader pagination highlightOnHover />
    </DataTableExtensions>
  );
}
