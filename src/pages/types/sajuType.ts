export type SajuCellObject = {
  main: string;
  sub1: string;
  sub2?: string;
};

export type SajuCell = SajuCellObject | SajuCellObject[];

export type SajuTableData = {
  name: string;
  birthday: string;
  headers: string[];
  rows: SajuCell[][];
};
