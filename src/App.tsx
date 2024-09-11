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
    <div>
      <div>
        <h1>User management</h1>
        <input
          type="text"
          placeholder="Search by name, username, email, or phone"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <UserTable users={filteredUsers} loading={loading} error={error} />
    </div>
  );
}

export default App;
