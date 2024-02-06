const findTheOldest = function (people) {
  const oldest = people.sort(function (a, b) {
    const lastGuy = getAge(a.yearOfDeath, a.yearOfBirth);
    const nextGuy = getAge(b.yearOfDeath, b.yearOfBirth);

    if (lastGuy > nextGuy) {
      return -1;
    } else {
      return 1;
    }
  });
  return oldest[0];
};

const getAge = function (death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
