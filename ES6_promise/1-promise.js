export default function getResponseFromAPI(success) {
  const Promesa = new Promise((res, rej) => {
    if (success) {
      res(
        {
          status: 200,
          body: 'Success',
        }
      );
    } else {
      rej(console.error('The fake API is not working currently'));
    }
  });
  return Promesa;
}
