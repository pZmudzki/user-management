import UserTable from "./components/UserTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setFilter } from "./store/slices/usersSlice";
import { RootState, AppDispatch } from "./store/store";

function App() {
  // The `useDispatch` and `useSelector` hooks are used to interact with the Redux store
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error, filter } = useSelector(
    (state: RootState) => state.users
  );

  // Fetch users when the component mounts or when the user state changes
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  // Filter users based on the search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.username.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase()) ||
      user.phone.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 py-20 px-4">
      <div className="fixed top-4 left-1/2 -translate-x-1/2">
        <input
          type="text"
          className="rounded-full py-3 pl-5 pr-12 bg-slate-500 text-slate-300 border border-slate-300 focus:outline focus:outline-slate-200"
          placeholder="Search"
          value={filter}
          onChange={handleFilterChange}
        />
        <svg
          viewBox="0 0 24 24"
          className="stroke-slate-300 fill-none absolute top-1/2 -translate-y-1/2 right-3 h-7 w-7"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <UserTable users={filteredUsers} loading={loading} error={error} />
    </div>
  );
}

export default App;
