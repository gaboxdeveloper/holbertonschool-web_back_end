export default function getListStudentIds(arr) {
  let respuesta = [];
  if (Array.isArray(arr)) {
    respuesta = arr.map((a) => a.id);
  }
  return respuesta;
}
