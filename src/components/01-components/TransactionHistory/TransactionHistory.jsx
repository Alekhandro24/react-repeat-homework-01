import {
  TransactionHistoryTable,
  HederRow,
  ColumnHeader,
  ValuesRow,
  TransactionData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <HederRow>
        <ValuesRow>
          <ColumnHeader>Type</ColumnHeader>
          <ColumnHeader>Amount</ColumnHeader>
          <ColumnHeader>Currency</ColumnHeader>
        </ValuesRow>
      </HederRow>

      <tbody>
        {items.map(item => (
          <ValuesRow key={item.id}>
            <TransactionData>{item.type}</TransactionData>
            <TransactionData>{item.amount}</TransactionData>
            <TransactionData>{item.currency}</TransactionData>
          </ValuesRow>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};
