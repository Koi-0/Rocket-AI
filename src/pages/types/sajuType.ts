// 한 셀에 들어가는 기본 객체 타입
export type SajuCellObject = {
  main: string;
  sub1: string;
  sub2?: string;
};

// 한 셀은 단일 객체이거나 객체 배열일 수 있음
export type SajuCell = SajuCellObject | SajuCellObject[];

// 전체 사주 테이블 데이터 타입
export type SajuTableData = {
  name: string;
  birthday: string;
  headers: string[];
  rows: SajuCell[][];
};

// SajuCell 컴포넌트가 받는 props
export type SajuCellProps = {
  cell: SajuCell;
  rowIndex: number;
  colIndex: number;
};

// SajuRow 컴포넌트가 받는 props
export type SajuRowProps = {
  rowData: SajuCell[];
  rowIndex: number;
  getBorderRightStyle: (colIndex: number) => string;
};
