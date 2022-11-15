import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  ColumnTitle,
  TableRow,
  CellValue,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <ColumnTitle>Type</ColumnTitle>
          <ColumnTitle>Amount</ColumnTitle>
          <ColumnTitle>Currency</ColumnTitle>
        </TableRow>
      </TableHeader>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <CellValue>{type}</CellValue>
              <CellValue>{amount}</CellValue>
              <CellValue>{currency}</CellValue>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
