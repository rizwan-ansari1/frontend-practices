function TeamMember({ name, role, isOnline, isNew }) {
  return (
    <li className="team-member">
      <span
        className={isOnline ? "status-dot online" : "status-dot offline"}
      ></span>
      <div className="member-info">
        <p className="member-name">
          {name} {isNew && <span className="new-badge">New!</span>}
        </p>
        <p className="member-role">{role}</p>
      </div>
    </li>
  );
}
export default TeamMember;
