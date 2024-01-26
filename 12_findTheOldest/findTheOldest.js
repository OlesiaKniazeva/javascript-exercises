const findTheOldest = function (people) {
  const addAge = (person) => {
    if (person.yearOfBirth && person.yearOfDeath) {
      person.age = person.yearOfDeath - person.yearOfBirth;
    } else {
      person.age = new Date().getFullYear() - person.yearOfBirth;
    }
  };

  return people.reduce((oldest, current) => {
    addAge(current);
    if (!oldest.age) {
      addAge(oldest);
    }

    return current.age > oldest.age ? current : oldest;
  });
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
