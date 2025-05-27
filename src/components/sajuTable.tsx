import { sajuTableData } from "@/data/sajuTableData";
import SajuRow from "./sajuRow";
import { useCallback, useMemo } from "react";

const SajuTable = () => {
  const getBorderRightStyle = useCallback((colIndex: number) => {
    return colIndex >= 1 && colIndex <= 3
      ? "0.5px solid #8A8A8A"
      : "1px solid #000000";
  }, []);

  const headerElements = useMemo(() => {
    return sajuTableData.headers.map((header, colIndex) => (
      <th
        key={`header-${colIndex}`}
        className="border-b border-b-black py-[4px]"
        style={{ borderRight: getBorderRightStyle(colIndex) }}
      >
        {header}
      </th>
    ));
  }, [getBorderRightStyle]);

  return (
    <div className="absolute left-1/2 top-[6%] z-20 w-[90%] translate-x-[-50%] text-center text-[#424242]">
      <h1 className="mb-1 text-[clamp(0.9rem,6vw,1.8rem)]">
        {sajuTableData.name}의 사주
      </h1>
      <h2 className="mb-4 whitespace-nowrap text-[clamp(1rem,6vw,1.8rem)] font-bold">
        {sajuTableData.birthday}
      </h2>

      <table className="w-full table-fixed border-collapse whitespace-nowrap">
        <thead>
          <tr>{headerElements}</tr>
        </thead>
        <tbody>
          {sajuTableData.rows.map((rowData, rowIndex) => (
            <SajuRow
              key={`rowData-${rowIndex}`}
              rowData={rowData}
              rowIndex={rowIndex}
              getBorderRightStyle={getBorderRightStyle}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SajuTable;
