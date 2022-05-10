import ExcelJS, { Workbook } from "exceljs";
import _ from "lodash";
import moment from "moment";
import XLSX from "xlsx";

export class BuildExcel {
  createWorkbook() {
    const workbook = new ExcelJS.Workbook();
    workbook.created = new Date();
    workbook.lastModifiedBy = "Me";
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.lastPrinted = new Date();
    return workbook;
  }

  async build(header, data, option) {
    const workbook = this.createWorkbook();
    const sheetContact = workbook.addWorksheet(option.title, {
      views: [{ showGridLines: false, state: "frozen", xSplit: 0, ySplit: 2 }],
    });
    sheetContact.properties.defaultRowHeight = 20;

    // create header
    sheetContact.mergeCells("A1:F1");
    sheetContact.getCell(`A1`).alignment = {
      horizontal: "center",
      vertical: "middle",
    };
    sheetContact.getCell(`A1`).value = option.title;
    sheetContact.getCell(`A1`).font = {
      bold: true,
      size: 15,
    };
    sheetContact.getRow(1).height = 30;

    // add data to table

    sheetContact.addTable({
      name: "30491cb1-c08a-4a0a-9c0e-3bf2a3366832",
      ref: "A2",
      headerRow: true,
      // totalsRow: true,
      style: {
        // theme: 'TableStyleDark3',
        showRowStripes: true,
      },
      columns: Object.values(header).map((v) => ({
        name: v,
        filterButton: true,
      })), // please,help me add option here.
      rows: data.map((dc, i) => Object.keys(header).map((k) => _.get(dc, k))),
    });

    // add format for excel
    sheetContact.getRows(3, data.length).forEach((r, i) => {
      [...Array(Object.keys(header).length)].forEach((v, index) => {
        r.getCell(index + 1).border = {
          top: { style: "hair", color: { argb: "D1D5DC" } },
          left: { style: "hair", color: { argb: "D1D5DC" } },
          bottom: { style: "hair", color: { argb: "D1D5DC" } },
          right: { style: "hair", color: { argb: "D1D5DC" } },
        };
        if (i % 2 == 1) {
          r.getCell(index + 1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "C0CEE1" },
          };
        }
      });
    });
    [...Array(Object.keys(header).length)].forEach((v, i) => {
      const col = sheetContact.getColumn(i + 1);
      const lengthPerCell = [];
      col.eachCell(
        (c, indexCell) =>
          indexCell > 1 && lengthPerCell.push(c.value?.toString().length)
      );
      col.width = _.max(lengthPerCell.filter(Boolean)) * 1.2 + 3;
      const getHeaderTitle = sheetContact.getCell(2, i + 1);
      getHeaderTitle.style.alignment = { horizontal: "center" };
      getHeaderTitle.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "A0B5DB" },
      };
      getHeaderTitle.style.font = {
        color: { argb: "ffffff" },
        size: 12,
        bold: true,
      };
    });
    // workbook.xlsx.writeFile("ABC");

    const bufferData = await workbook.xlsx.writeBuffer();
    return bufferData;
  }
}

export const buildExcel = new BuildExcel();
