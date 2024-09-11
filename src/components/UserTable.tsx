import { User } from "../store/slices/usersSlice";

type UserTableProps = {
  users: User[];
  loading: boolean;
  error: string | null;
};

function UserTable({ users, loading, error }: UserTableProps) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table className="table-fixed w-full">
      <thead className="text-xl border-b-2 border-slate-200 bg-slate-800 text-slate-200">
        <tr className="divide-x-2 divide-slate-200">
          <th className="text-start p-4">Name</th>
          <th className="text-start py-2 px-4">Username</th>
          <th className="text-start py-2 px-4">Email</th>
          <th className="text-start py-2 px-4">Phone</th>
        </tr>
      </thead>
      <tbody className="text-lg bg-slate-700 divide-y divide-slate-400 text-slate-300">
        {users.map((user) => (
          <tr key={user.id} className="divide-x divide-slate-400">
            <td className="py-2 px-4">{user.name}</td>
            <td className="py-2 px-4">{user.username}</td>
            <td className="py-2 px-4">{user.email}</td>
            <td className="py-2 px-4">{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
