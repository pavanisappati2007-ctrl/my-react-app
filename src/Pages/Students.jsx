function Students() {
  const students = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Kiran" }
  ];

  return (
    <div>
      <h1>Students Page</h1>

      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Students;