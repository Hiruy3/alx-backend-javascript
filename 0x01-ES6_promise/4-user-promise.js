export default function signUpUser(firstName, lastName) {
  const prom = new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
  return prom;
}
