import { Injectable } from '@angular/core';
import * as json2csv from 'json2csv'; // convert json file to csv
import { saveAs } from 'file-saver';  // save the file

@Injectable()
export class ExportCsvService {
    Json2csvParser = json2csv.Parser;
    constructor() {

    }

    public downloadFile(data: any,fields: any, filename?: string) {
        let csvData = this.convertJsonToCsv(data,fields);
        const blob = new Blob(['\ufeff', csvData], { type: 'text/csv;charset=ansi;' });
        saveAs(blob, filename);
    }

    public convertJsonToCsv(jsonData:any, headers:any)
    {
      // To avoid any errors
      let jsonToCsv = "";
      if (jsonData && jsonData.length > 0 && headers && headers.length > 0) {
        // Adding columns names to the csv as it should be the starting point
        for (let i = 0; i < headers.length; i++) {
          const header = headers[i];
          jsonToCsv += header.label || "";
          if (i < headers.length-1) {
            jsonToCsv += ",";
          }
        }
        jsonToCsv+='\r\n'
        for (let i = 0; i < jsonData.length; i++) {
          const temp = jsonData[i];
          for (let j = 0; j < headers.length; j++) {
            const header = headers[j];
            jsonToCsv += temp[header.key] || "";
            if (j < headers.length-1) {
              // If we dont keep this condition it will add ',' to the last column also which we dont need.
              jsonToCsv += ",";
            }
          }
          if (i < jsonData.length-1) {
            jsonToCsv += "\r\n";
          }
        }
      }
      return jsonToCsv;
    }

}