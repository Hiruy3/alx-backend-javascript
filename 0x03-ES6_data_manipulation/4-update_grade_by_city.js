const updateStudentGradeByCity = (arr, city, newGrades) => {
  const studs = arr.filter((item) => item.location === city);
  studs.forEach((element, idx) => {
    const g = newGrades.filter((item) => item.studentId === element.id);
    if (g.length > 0) {
      studs[idx].grade = g[0].grade;
    } else {
      studs[idx].grade = 'N/A';
    }
  });

  return studs.map((item) => item);
};
export default updateStudentGradeByCity;
