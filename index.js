// function sum() {
//     var result = 0;
  
//     for (var i = 0; i < arguments.length; i++) {
//       result += arguments[i];
//     }
  
//     return result;
//   }

//   console.log(sum(1,10.,100))

  var calculations = {
    salarySum: function() {
      return this.reduce(function(acc, next) {
        return acc + next;
      }, 0);
    },
    logName: function() {
      this.forEach(function(user) {
        console.log(user.name);
      });
    },
    findUsersByIds: function(ids) {
      return this.filter(function(user) {
        return ids.find(function(id) {
            return user.id === id;
        })
      });
    }
  };
  
  var users = [
    {
      id: 1,
      name: "User 2",
      salary: 200
    },
    {
      id: 2,
      name: "User 3",
      salary: 200
    },
    {
      id: 3,
      name: "User 4",
      salary: 200
    }
  ];


var salaryArray = users.map(function(users){
  return users.salary;
});

var output = calculations.salarySum.call(salaryArray)
console.log(output);

calculations.logName.call(users);

var output1 = calculations.findUsersByIds.apply(users, [[1,3]])
console.log(output1);