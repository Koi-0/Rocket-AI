import React from "react";
import { SajuCell } from "../types/sajuType";
import { sajuTableData } from "../data/sajuTableData";

const SajuTable = () => {
  // 특정 cell에 대한 스타일
  const getSajuCellStyle = (rowIndex: number, colIndex: number) => {
    if (rowIndex === 1 && colIndex === 2) {
      return {
        backgroundColor: "#C23030",
      };
    }

    if (rowIndex === 2 && colIndex === 1) {
      return {
        backgroundColor: "#18868C",
      };
    }

    if (rowIndex === 2 && colIndex === 2) {
      return {
        backgroundColor: "#C23030",
      };
    }

    if (rowIndex === 2 && colIndex === 4) {
      return {
        backgroundColor: "#f9f9f9",
        border: "1px solid #000000",
        color: "#000000",
      };
    }

    return {};
  };

  // 특정 cell에 대한 오른쪽 테두리 스타일
  const getBorderRightStyle = (colIndex: number) => {
    return colIndex >= 1 && colIndex <= 3
      ? "0.5px solid #8A8A8A"
      : "1px solid #000000";
  };

  // 각 cell의 내용을 렌더링하는 함수
  const renderCellContent = (
    cell: SajuCell,
    rowIndex: number,
    colIndex: number,
  ) => {
    const firstCol = colIndex === 0;
    const specialRow = rowIndex === 1 || rowIndex === 2;
    const specialCol = colIndex >= 1 && colIndex <= 4;
    const specialCell = specialRow && specialCol;

    // cell이 배열인 경우
    if (Array.isArray(cell)) {
      return (
        <div
          className={`m-1 flex flex-col items-center justify-center gap-1 leading-tight`}
        >
          {cell.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-sm">{item.main}</div>
              <div className="text-[9px]">{item.sub1}</div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div
        className={`flex flex-col items-center justify-center text-center leading-tight ${
          specialCell
            ? "m-1 h-[55px] rounded-xl bg-[#2f2f2f] text-white"
            : "h-[42px]"
        } ${firstCol ? "w-12" : "w-[55px]"}`}
        style={getSajuCellStyle(rowIndex, colIndex)}
      >
        <div
          className={
            firstCol ? "text-[12px]" : specialCell ? "text-[7px]" : "text-sm"
          }
        >
          {cell.main}
        </div>
        <div
          className={
            firstCol
              ? "text-[7px]"
              : specialCell
                ? "text-[25px]"
                : "0 text-[10px]"
          }
        >
          {cell.sub1}
        </div>
        {cell.sub2 && (
          <div className={specialCell ? "text-[8px]" : ""}>{cell.sub2}</div>
        )}
      </div>
    );
  };

  return (
    <div className="absolute left-1/2 top-[40px] z-20 translate-x-[-50%]">
      <div className="flex flex-col items-center justify-center text-[#424242]">
        <h1 className="mb-3 text-base">{sajuTableData.name}의 사주</h1>
        <h2 className="mb-[26px] text-xl font-bold">
          {sajuTableData.birthday}
        </h2>
        <table>
          <thead>
            <tr>
              {sajuTableData.headers.map((header, colIndex) => {
                return (
                  <th
                    key={`header-${colIndex}`}
                    className="h-9 border-b border-b-black"
                    style={{ borderRight: getBorderRightStyle(colIndex) }}
                  >
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {sajuTableData.rows.map((rowData, rowIndex) => (
              <tr key={`rowData-${rowIndex}`}>
                {rowData.map((cellData, colIndex) => {
                  return (
                    <td
                      key={`cellData-${rowIndex}-${colIndex}`}
                      className="border-b border-b-black"
                      style={{ borderRight: getBorderRightStyle(colIndex) }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        {renderCellContent(cellData, rowIndex, colIndex)}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SajuTable;
