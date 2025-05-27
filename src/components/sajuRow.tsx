import { SajuRowProps } from "@/types/sajuType";
import React from "react";
import SajuCell from "./sajuCell";

const SajuRow = ({ rowData, rowIndex, getBorderRightStyle }: SajuRowProps) => {
  return (
    <tr>
      {rowData.map((cellData, colIndex) => (
        <td
          key={`cellData-${rowIndex}-${colIndex}`}
          className="border-b border-b-black"
          style={{
            borderRight: getBorderRightStyle(colIndex),
            borderBottom: rowIndex === 1 ? "0.5px solid #8A8A8A" : "",
            padding: "clamp(2px, 1vw, 7px)",
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <SajuCell cell={cellData} rowIndex={rowIndex} colIndex={colIndex} />
          </div>
        </td>
      ))}
    </tr>
  );
};

export default React.memo(SajuRow);
