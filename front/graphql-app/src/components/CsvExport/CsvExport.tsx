import { Button } from "@material-ui/core";
import React from "react";
import { CSVLink } from "react-csv";
import "./CsvExport.scss";

const CsvExport: React.FC<any> = (props) => {
  return (
    <Button className="export-button" variant="contained" color="primary">
      <CSVLink {...props}>Télécharger en csv</CSVLink>
    </Button>
  );
};

export default CsvExport;
