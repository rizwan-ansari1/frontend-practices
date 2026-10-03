import { useEffect, useState } from "react";
import type { Status, User } from "./types";
import { filterUsers, formatCount } from "./utils";
import Panel from "./Panel";
import SearchBox from "./SearchBox";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [search, setSearch] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Bad response");
        const data: User[] = await res.json();
        setUsers(data);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    }
    loadUsers();
  }, []);

  const handleSelect = (id: number): void => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const visibleUsers = filterUsers(users, search);
  const selectedUser = users.find((u) => u.id === selectedId);

  return (
    <main className="app">
      <Panel
        title="Team Directory"
        subtitle={
          status === "success" ? formatCount(visibleUsers.length) : undefined
        }
      >
        {status === "loading" && <p className="message">Loading team...</p>}
        {status === "error" && (
          <p className="message error">Could not load the team.</p>
        )}
        {status === "success" && (
          <>
            <SearchBox value={search} onChange={setSearch} />
            <ul className="user-list">
              {visibleUsers.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  isSelected={user.id === selectedId}
                  onSelect={handleSelect}
                />
              ))}
            </ul>
          </>
        )}
      </Panel>

      <Panel title="Selected person">
        {selectedUser ? (
          <div>
            <p>
              <strong>{selectedUser.name}</strong>
            </p>
            <p>{selectedUser.email}</p>
            <p>{selectedUser.phone}</p>
          </div>
        ) : (
          <p className="message">Click a person to see details.</p>
        )}
      </Panel>
    </main>
  );
}

export default App;
