interface Props {
  title: string;
}

const OrdersPage: React.FC<Props> = ({title}) => {
  return (
    <h1>Заказы</h1>
  );
}

export default OrdersPage;