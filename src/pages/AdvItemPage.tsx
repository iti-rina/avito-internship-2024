interface Props {
  title: string;
  imagePath: string;
  likes: number;
  orders: number
}

const AdvItemPage: React.FC<Props> = ({ title }) => {
  return (
    <h1>{title}</h1>
  );
}

export default AdvItemPage;