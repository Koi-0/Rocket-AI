import { SajuRowProps } from "@/types/sajuType";
import SajuCell from "./sajuCell";
import React from "react";

const SajuRow = ({ rowData, rowIndex, getBorderRightStyle }: SajuRowProps) => {
  return (
    <tr>
      {rowData.map((cellData, colIndex) => (
        <td
          key={`cellData-${rowIndex}-${colIndex}`}
          className="border-b border-b-black"
          style={{ borderRight: getBorderRightStyle(colIndex) }}
        >
          <div className="flex flex-col items-center justify-center text-blue-400">
            <SajuCell cell={cellData} rowIndex={rowIndex} colIndex={colIndex} />
          </div>
        </td>
      ))}
    </tr>
  );
};

export default React.memo(SajuRow);
