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
        // padding: "0.5rem",
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
            <div className="bg-white text-[clamp(1rem,5vw,1.2rem)]">
              {item.main}
            </div>
            <div className="bg-green-300 text-[clamp(0.6rem,6vw,0.7rem)]">
              {item.sub1}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center text-center leading-tight ${
        specialCell ? "m-1 rounded-xl bg-[#2f2f2f] text-white" : ""
      } ${firstCol ? "" : ""}`}
      style={getSajuCellStyle()}
    >
      <div
        className={
          firstCol
            ? "bg-purple-200 text-[clamp(1rem,5vw,1.2rem)]"
            : specialCell
              ? "bg-orange-600 text-[clamp(0.5rem,3vw,0.7rem)]"
              : "bg-red-700 text-[clamp(1rem,5vw,1.2rem)]"
        }
      >
        {cell.main}
      </div>
      <div
        className={
          firstCol
            ? "bg-blue-800 text-[clamp(0.4rem,5vw,0.6rem)]"
            : specialCell
              ? "bg-black text-[clamp(1.2rem,7vw,1.8rem)]"
              : "bg-yellow-300 text-[clamp(0.6rem,6vw,0.7rem)]"
        }
      >
        {cell.sub1}
      </div>
      {cell.sub2 && (
        <div
          className={
            specialCell ? "bg-slate-500 text-[clamp(0.5rem,3vw,0.8rem)]" : ""
          }
        >
          {cell.sub2}
        </div>
      )}
    </div>
  );
};

export default React.memo(SajuCell);
