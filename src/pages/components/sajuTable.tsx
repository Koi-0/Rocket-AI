import React from "react";
import { SajuCell } from "../types/sajuType";
import { sajuTableData } from "../data/sajuTableData";

const SajuTable = () => {
  const renderCellContent = (
    cell: SajuCell,
    rowIndex?: number,
    cellIndex?: number,
  ) => {
    const isFirstCol = cellIndex === 0;
    const isSpecialCell = rowIndex === 1 || rowIndex === 2;
    const highlight = isSpecialCell && cellIndex! >= 1 && cellIndex! <= 4;

    if (Array.isArray(cell)) {
      return (
        <div
          className={`m-1 flex flex-col items-center justify-center leading-tight ${
            isFirstCol ? "bg-[#f5f5f5]" : ""
          }`}
        >
          {cell.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={isFirstCol ? "text-base" : "text-sm"}>
                {item.main}
              </div>
              <div className={isFirstCol ? "text-[10px]" : "text-[9px]"}>
                {item.sub1}
              </div>
              {item.sub2 && (
                <div className={isFirstCol ? "text-[10px]" : "text-[8px]"}>
                  {item.sub2}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div
        className={`flex flex-col items-center justify-center leading-tight ${
          highlight
            ? "m-1 h-[55px] w-[55px] rounded-xl bg-[#2F2F2F] text-white"
            : "h-[42px]"
        } ${isFirstCol ? "w-12" : ""}`}
      >
        <div
          className={
            isFirstCol ? "text-[12px]" : highlight ? "text-[7px]" : "text-sm"
          }
        >
          {cell.main}
        </div>
        <div
          className={
            isFirstCol
              ? "text-[7px]"
              : highlight
                ? "text-[25px]"
                : "0 text-[10px]"
          }
        >
          {cell.sub1}
        </div>
        {cell.sub2 && (
          <div className={highlight ? "text-[8px]" : ""}>{cell.sub2}</div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center text-[#424242]">
      <h1 className="mb-3 text-sm">{sajuTableData.name}의 사주</h1>
      <p className="text-md mb-[26px] font-bold">{sajuTableData.birthday}</p>
      <table>
        <thead>
          <tr>
            {sajuTableData.headers.map((header, index) => {
              const borderRight =
                index >= 1 && index <= 3
                  ? "0.5px solid #8A8A8A"
                  : "1px solid #424242";

              return (
                <th
                  key={index}
                  className="border-b border-b-[#424242] text-center"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight,
                    height: "36px",
                  }}
                >
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sajuTableData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const borderRight =
                  cellIndex >= 1 && cellIndex <= 3
                    ? "0.5px solid #8A8A8A"
                    : "1px solid #424242";

                return (
                  <td
                    key={cellIndex}
                    className="border-b border-b-[#424242] text-center"
                    style={{ borderRight }}
                  >
                    {renderCellContent(cell, rowIndex, cellIndex)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SajuTable;
