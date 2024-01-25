export default function getResponseFromAPI() {
  const Promesa = new Promise((res, rej) => {
    res();
    rej();
  });
  return Promesa;
}
