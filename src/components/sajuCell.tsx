import { SajuCellProps } from "@/types/sajuType";
import React from "react";

const SajuCell = ({ cell, rowIndex, colIndex }: SajuCellProps) => {
  const firstCol = colIndex === 0;
  const specialRow = rowIndex === 1 || rowIndex === 2;
  const specialCol = colIndex >= 1 && colIndex <= 4;
  const specialCell = specialRow && specialCol;

  // 특정 cell에 대한 스타일
  const getSajuCellStyle = () => {
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
      } ${firstCol ? "w-3/4" : "w-full"}`}
      style={getSajuCellStyle()}
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

export default React.memo(SajuCell);
