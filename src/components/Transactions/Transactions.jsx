import PropTypes from 'prop-types';
import {
  Table,
  Header,
  Frame,
  ColumnName,
  InfoData,
  TableItem,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Header>
        <Frame>
          <ColumnName>Type</ColumnName>
          <ColumnName>Amount</ColumnName>
          <ColumnName>Currency</ColumnName>
        </Frame>
      </Header>
      <InfoData>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Frame key={id}>
              <TableItem>{type}</TableItem>
              <TableItem>{amount}</TableItem>
              <TableItem>{currency}</TableItem>
            </Frame>
          );
        })}
      </InfoData>
    </Table>
  );
};

TransactionHistory.propTypes = PropTypes.arrayOf(
  PropTypes.exact({
    key: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  })
);
