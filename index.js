class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    const id = setInterval(() => {
      if (this.age < 50) {
        this.age++;
      } else {
        clearInterval(id);
      }
    }, 1000);
  }
}
const randomAge = () => Math.floor(Math.random() * Math.floor(50));
const users = [
  new Person(faker.name.findName(), randomAge()),
  new Person(faker.name.findName(), randomAge()),
  new Person(faker.name.findName(), randomAge()),
  new Person(faker.name.findName(), randomAge()),
];
const newUsers = [];

const checkAge = (users, maxAge) => {
  const id = setInterval(() => {
    if (users.length != 0) {
      users = users.filter((user) => user.age < maxAge);
      console.log("Users :", users);
    } else {
      clearInterval(id);
    }
  }, 1000);
};

const addUsersToArray = (numberOfUsers, array) => {
  let id;
  for (let i = 0; i <= numberOfUsers; i++) {
    id = setTimeout(() => {
      array = [...array, new Person(faker.name.findName(), randomAge())];
      console.log("newArray :", array);
    }, i * 2000);
  }
  clearTimeout(id);
};

checkAge(users, 40);
addUsersToArray(5, newUsers);
