const getSum = (a) => {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          console.log(a + b + c + d + e);
        };
      };
    };
  };
};

getSum(5)(4)(3)(2)(1);
