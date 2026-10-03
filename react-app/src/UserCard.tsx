import type { User } from "./types";
import { getInitials } from "./utils";

interface UserCardProps {
  user: User;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

function UserCard({ user, isSelected, onSelect }: UserCardProps) {
  return (
    <li>
      <button
        className={isSelected ? "card selected" : "card"}
        onClick={() => onSelect(user.id)}
      >
        <span className="avatar">{getInitials(user.name)}</span>
        <span className="info">
          <strong>{user.name}</strong>
          <span>{user.company.name}</span>
          {user.website && <span className="site">{user.website}</span>}
        </span>
      </button>
    </li>
  );
}

export default UserCard;
