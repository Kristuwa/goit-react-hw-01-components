import styled from '@emotion/styled';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  width: 90%;
  border-collapse: collapse;
  border: 1px solid #a1a1a1;
  text-align: center;
`;

export const TableHeader = styled.thead`
  border: 1px solid #a1a1a1;
  background-color: #7390d5;
`;

export const ColumnTitle = styled.th`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.18;
  padding: 10px 20px;
  color: #ffffff;
  text-transform: uppercase;
  border: 1px solid #a1a1a1;
`;

export const TableRow = styled.tr`
  font-size: 18px;

  & + & {
    border-top: 1px solid #a1a1a1;
  }
`;

export const CellValue = styled.td`
  padding: 10px 20px;
  & + & {
    border-left: 1px solid #a1a1a1;
  }
`;

export const TableBody = styled.tbody`
  background-color: #ffffff;
`;
