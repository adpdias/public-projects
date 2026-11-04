type props = {
    email: string;
}

export const UserEmail = ({email}: props) => {
  return (
    <h4>Meu email é {email}</h4>
  );
}
