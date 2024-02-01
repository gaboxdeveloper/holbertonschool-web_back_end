export default function updateStudentGradeByCity(students, city, grades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      let grade = 'N/A';
      for (const g of grades) {
        if (g.studentId === student.id) {
          grade = g.grade;
        }
      }
      return { ...student, grade };
    });
}
