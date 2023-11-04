import { download, generateCsv, mkConfig } from 'export-to-csv';

const csvConfig = mkConfig({ useKeysAsHeaders: true });

export default function downloadCsvFile(data) {
  const csv = generateCsv(csvConfig)(data);
  download(csvConfig)(csv);
}
