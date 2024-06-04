export default function getListStudentIds(ArrayOfObjects) {
  if (!(ArrayOfObjects instanceof Array)) {
    return [];
  }
  return ArrayOfObjects.map((EachObject) => EachObject.id);
}
