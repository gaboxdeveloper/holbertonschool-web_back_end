export default function getListStudentIds(array) {
  if (Array.isArray(arr)) {
    const respuesta = array.map( a => a.id)
    return respuesta
  } else {
    return [];
  }
}