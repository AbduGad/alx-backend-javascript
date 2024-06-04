export default function getStudentIdsSum(ArrayOfObjects) {
  return ArrayOfObjects.reduce(((accumilator, EachObject) => {
    /*console.log(EachObject.id);
    console.log(accumilator);*/
    return accumilator + EachObject.id;
  }), 0);
}
