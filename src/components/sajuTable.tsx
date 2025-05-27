import { sajuTableData } from "@/data/sajuTableData";
import SajuRow from "./sajuRow";
import { useCallback, useMemo } from "react";

const SajuTable = () => {
  // 특정 cell에 대한 오른쪽 테두리 스타일
  const getBorderRightStyle = useCallback((colIndex: number) => {
    return colIndex >= 1 && colIndex <= 3
      ? "0.5px solid #8A8A8A"
      : "1px solid #000000";
  }, []);

  // 헤더 요소를 useMemo로 메모이제이션하여 성능 최적화
  const headerElements = useMemo(() => {
    return sajuTableData.headers.map((header, colIndex) => (
      <th
        key={`header-${colIndex}`}
        className="h-9 border-b border-b-black"
        style={{ borderRight: getBorderRightStyle(colIndex) }}
      >
        {header}
      </th>
    ));
  }, [getBorderRightStyle]);

  return (
    <div className="absolute left-1/2 top-[6%] z-20 translate-x-[-50%] bg-blue-300 text-center text-[#424242]">
      <h1 className="mb-1 text-[clamp(0.9rem,6vw,1.8rem)]">
        {sajuTableData.name}의 사주
      </h1>
      <h2 className="mb-4 whitespace-nowrap text-[clamp(1rem,6vw,1.8rem)] font-bold">
        {sajuTableData.birthday}
      </h2>

      <table className="table-absolute border-collapse whitespace-nowrap bg-red-300">
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
