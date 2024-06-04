export default function getStudentsByLocation(ArrayOfObjects, city) {
  return ArrayOfObjects.filter((EachObject) => EachObject.location === city);
}
