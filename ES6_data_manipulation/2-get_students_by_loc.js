export default function getStudentsByLocation(arr, city) {
  const result = arr.filter((arr) => arr.location === city);
  return result;
}
