describe("This is to test monthly rate", function () {
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 40000,
    years: 7,
    rate: 3.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('543.08');
});
});

describe("This is to test 2 decimal places", function () {
it("should return a result with 2 decimal places", function() {
   const values = {
    amount: 20000,
    years: 7,
    rate: 3.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('271.54');
});
})

describe("This is to test high interest rates", function () {
it("should return a result with high interest rate included", function() {
   const values = {
    amount: 50000,
    years: 7,
    rate: 100
  };
  expect(calculateMonthlyPayment(values)).toEqual('4171.68');
});
})