type Props = {
    age: number;
}

export const UserAge = ({age}: Props) => {
  return (
    <h4>Minha idade é {age} anos</h4>
  );
}
