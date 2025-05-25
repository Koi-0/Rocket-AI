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
    <div className="absolute left-1/2 top-[40px] z-20 translate-x-[-50%]">
      <div className="flex flex-col items-center justify-center text-[#424242]">
        <h1 className="mb-3 text-base">{sajuTableData.name}의 사주</h1>
        <h2 className="mb-[26px] text-xl font-bold">
          {sajuTableData.birthday}
        </h2>
        <table>
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
    </div>
  );
};

export default SajuTable;
