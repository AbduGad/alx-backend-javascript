export default function getStudentIdsSum(ArrayOfObjects) {
  return ArrayOfObjects.reduce(((accumilator, EachObject) => accumilator + EachObject.id
    /* console.log(EachObject.id);
    console.log(accumilator); */
  ), 0);
}
