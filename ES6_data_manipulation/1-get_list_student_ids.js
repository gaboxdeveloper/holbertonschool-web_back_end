export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const respuesta = arr.map(a => a.id);
    return respuesta;
  } else {
    return [];
  }
}