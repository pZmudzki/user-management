import { type UsersState } from "../store/slices/usersSlice";
import HighlightedText from "./HighlightedText";

function UserTable({ users, loading, error, filter }: UsersState) {
  // Display a loading indicator while the data is being fetched
  if (loading)
    return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <svg
          className="animate-spin stroke-slate-200 fill-none w-20 h-20"
          viewBox="0 0 25 25"
        >
          <path
            d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"
            strokeWidth="1.2"
          />
        </svg>
      </div>
    );

  // Display an error message if the data failed to load
  if (error)
    return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <p className="text-bold text-xl text-slate-200">{error}</p>
      </div>
    );

  return (
    <div className="overflow-x-auto">
      <table className="table-fixed lg:w-full text-nowrap">
        <thead className="md:text-xl border-b-2 border-slate-200 bg-slate-800 text-slate-200">
          <tr className="divide-x-2 divide-slate-200">
            <th className="text-start p-4">Name</th>
            <th className="text-start py-2 px-4">Username</th>
            <th className="text-start py-2 px-4">Email</th>
            <th className="text-start py-2 px-4">Phone</th>
          </tr>
        </thead>
        <tbody className="text-sm md:text-lg bg-slate-700 divide-y divide-slate-400 text-slate-300">
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
    </div>
  );
}

export default UserTable;
