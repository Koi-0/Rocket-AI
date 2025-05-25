import { SajuRowProps } from "../types/sajuType";
import SajuCell from "./sajuCell";

const SajuRow = ({ rowData, rowIndex, getBorderRightStyle }: SajuRowProps) => {
  return (
    <tr>
      {rowData.map((cellData, colIndex) => (
        <td
          key={`cellData-${rowIndex}-${colIndex}`}
          className="border-b border-b-black"
          style={{ borderRight: getBorderRightStyle(colIndex) }}
        >
          <div className="flex h-full flex-col items-center justify-center">
            <SajuCell cell={cellData} rowIndex={rowIndex} colIndex={colIndex} />
          </div>
        </td>
      ))}
    </tr>
  );
};

export default SajuRow;
