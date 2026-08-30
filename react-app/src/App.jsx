import "./App.css";
import TeamMember from "./TeamMember";
const teamMembers = [
  {
    id: 1,
    name: "Aria Patel",
    role: "Frontend Developer",
    isOnline: true,
    isNew: true,
  },
  {
    id: 2,
    name: "Sam Okafor",
    role: "Backend Developer",
    isOnline: false,
    isNew: false,
  },
  {
    id: 3,
    name: "Maya Chen",
    role: "Product Designer",
    isOnline: true,
    isNew: true,
  },
  {
    id: 4,
    name: "Leo Fischer",
    role: "QA Engineer",
    isOnline: false,
    isNew: false,
  },
];

function App() {
  return (
    <div className="app">
      <h1>Team Directory</h1>
      <ul className="team-list">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.id}
            role={member.role}
            name={member.name}
            isOnline={member.isOnline}
            isNew={member.isNew}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
