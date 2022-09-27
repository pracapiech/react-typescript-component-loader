import { useEffect, useState } from "react";
import { UsersInterface } from "./interfaces/UserInterface";
import { withLoading } from "./components/withLoading";
import { UsersTable } from "./components/UsersTable";
import { Container } from "react-bootstrap";

export default function App() {
  const [isUsersLoading, setIsUsersLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UsersInterface[]>([]);
  const UsersTableWithLoading = withLoading<{users: UsersInterface[]}>(UsersTable);

  useEffect(() => {
    setIsUsersLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((json) => json.json())
      .then((users) => {
        setIsUsersLoading(false);
        setUsers(users);
      });
  }, []);

  return (
    <Container>
      <UsersTableWithLoading isLoading={isUsersLoading} users={users} />
    </Container>
  );
}
