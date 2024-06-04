export default function updateStudentGradeByCity(ArrayOfObjects, city,
  GradesObjectsArray) {
    return ArrayOfObjects.filter((EachObject) => EachObject.location === city)
    .map((EachFilterObject) => {
      const MatchingIds = GradesObjectsArray
      .find((GradeObj) => GradeObj.studentId === EachFilterObject.id);
      console.log(MatchingIds);
      return {
        ...EachFilterObject,
        grade: MatchingIds ?  MatchingIds.grade : 'N/A',
      };
      }); 
  }
