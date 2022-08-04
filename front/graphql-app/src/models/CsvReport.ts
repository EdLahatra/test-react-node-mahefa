import { CsvHeader } from "./CsvHeader";

export interface CsvReport {
  data: Array<any>;
  headers: Array<CsvHeader>;
  filename: string;
}
