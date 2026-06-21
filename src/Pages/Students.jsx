import { Link } from "react-router-dom";

export default function Students() {
  const students = [
    { id: 1, name: "Teja" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Sita" },
  ];

  return (
    <div>
      <h1>Students Page</h1>

      {students.map((student) => (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
            {student.name}
          </Link>
        </div>
      ))}
    </div>
  );
}