import styled from '@emotion/styled';

export const Table = styled.table`
  color: white;
  margin: 0 auto 100px;
  padding: 20px;
  border-radius: 30px;
  background: #1b2d29;
  box-shadow: 11px 11px 22px #0e1715, -11px -11px 22px #29443e;
  width: 600px;
  min-height: 700px;
`;

export const Header = styled.thead``;

export const Frame = styled.tr`
  &:nth-of-type(even) {
    background-color: rgba(40, 145, 114, 0.9);
    opacity: 0.8;
  }
`;

export const ColumnName = styled.th`
  font-size: 22px;
  border: 1px solid #1c2422;
  background-color: #1c2422;
  border-radius: 10px;
`;

export const InfoData = styled.tbody`
  padding-top: 20px;
  text-align: center;
`;

export const TableItem = styled.td`
  border-radius: 10px;
`;
