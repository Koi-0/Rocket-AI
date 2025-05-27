import { SajuCellProps } from "@/types/sajuType";
import React from "react";

const SajuCell = ({ cell, rowIndex, colIndex }: SajuCellProps) => {
  const firstCol = colIndex === 0;
  const specialRow = rowIndex === 1 || rowIndex === 2;
  const specialCol = colIndex >= 1 && colIndex <= 4;
  const specialCell = specialRow && specialCol;

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

  if (Array.isArray(cell)) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-1 leading-tight`}
      >
        {cell.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-[clamp(0.8rem,4vw,1.2rem)]">{item.main}</div>
            <div className="text-[clamp(0.6rem,6vw,0.7rem)]">{item.sub1}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-[2px] text-center leading-tight ${
        specialCell
          ? "m-1 h-[clamp(45px,15vw,75px)] w-[clamp(45px,15vw,75px)] gap-[2px] rounded-xl bg-[#2f2f2f] text-white"
          : ""
      } `}
      style={getSajuCellStyle()}
    >
      <div
        className={
          firstCol
            ? "text-[clamp(0.8rem,4vw,1.2rem)]"
            : specialCell
              ? "text-[clamp(0.4rem,2vw,0.5rem)]"
              : "text-[clamp(0.8rem,4vw,1.2rem)]"
        }
      >
        {cell.main}
      </div>
      <div
        className={
          firstCol
            ? "text-[clamp(0.4rem,5vw,0.5rem)]"
            : specialCell
              ? "text-[clamp(1rem,6vw,1.8rem)]"
              : "text-[clamp(0.6rem,6vw,0.7rem)]"
        }
      >
        {cell.sub1}
      </div>
      {cell.sub2 && (
        <div className={specialCell ? "text-[clamp(0.5rem,2vw,0.8rem)]" : ""}>
          {cell.sub2}
        </div>
      )}
    </div>
  );
};

export default React.memo(SajuCell);
