const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const submitBtn = document.querySelector('#submitBtn');
const output = document.querySelector('#output');

const users = []

class userData {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  id = Date.now().toString();
}

const createUser = (firstName, lastName, email) => {

  const user = new userData(firstName, lastName, email);

  users.push(userData); //pushar till min array
  output.insertAdjacentHTML('beforeend', newUser(userData)); // lägger till i min UI
  // renderUsers();
  const u = document.querySelectorAll('#output .user');
  u.forEach(userData => {
    userData.addEventListener('click', function() {
      this.classList.add('slideout');
      setTimeout(() => {
        this.remove()
      },500)
      console.log(users);
    })
  })
}

const newUser = userData => {
  const template = `
  <div class="card">
    <div class="card-content"> 
      <h3>${userData.firstName} ${userData.lastName}</h3>
      <p>${userData.email}</p>
    </div>  
  </div>
  `
  return template
}

// const renderUsers = () => {
//   output.innerHTML = '';
//   users.forEach(user => {
//     output.innerHTML += newUser(user);
//   })
// }

form.addEventListener('submit', e => {
  e.preventDefault();

  if(firstName.value !== '' && lastName.value !== '' && email.value !== '') {
    createUser(firstName.value, lastName.value, email.value)
    form.reset();
    firstName.focus();
  }

})