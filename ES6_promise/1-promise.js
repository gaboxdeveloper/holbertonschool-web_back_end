export default function getResponseFromAPI(success) {
  return new Promise((res, rej) => {
    if (success === true) {
      res({ status: 200, body: 'Success' });
    } else {
      rej(new Error('The fake API is not working currently'));
    }
  });
}
