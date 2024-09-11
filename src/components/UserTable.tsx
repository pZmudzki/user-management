import { type UsersState } from "../store/slices/usersSlice";
import HighlightedText from "./HighlightedText";

function UserTable({ users, loading, error, filter }: UsersState) {
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
            <td className="py-2 px-4">
              <HighlightedText text={user.name} highlight={filter} />
            </td>
            <td className="py-2 px-4">
              <HighlightedText text={user.username} highlight={filter} />
            </td>
            <td className="py-2 px-4">
              <HighlightedText text={user.email} highlight={filter} />
            </td>
            <td className="py-2 px-4">
              <HighlightedText text={user.phone} highlight={filter} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
