// Add your code here
let name = "name";
let email = "email";

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
  .then((response) => {
    return response.json()
})
  .then((userData) => {
    document.querySelector('body').innerHTML = userData.id
  })
  .catch((error) => {
    document.querySelector('body').innerHTML = error.message
  })
}
submitData()