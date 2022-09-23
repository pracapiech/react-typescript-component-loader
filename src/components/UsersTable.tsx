import { UsersInterface } from "../interfaces/UserInterface";
import Table from "react-bootstrap/Table";

interface UsersTableInterface {
  users: UsersInterface[];
}

export function UsersTable({ users }: UsersTableInterface) {
  if (!users) return null;
  if (!users.length) return <p>No users, sorry</p>;
  return (
    <Table responsive striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: UsersInterface) => {
          return (
            <tr key={user.id}>
              <td>@{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
