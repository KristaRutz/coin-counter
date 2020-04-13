import { CoinCounterUSD } from "./../src/CoinCounter.js";

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     var triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
// });

describe("CoinCounterUSD", () => {
  test("should pass an empty test", () => {});

  test("should return '1 penny' for change of 1 cent", () => {
    expect(CoinCounterUSD.GetChangeDistribution(1)).toEqual({ pennies: 1 });
  });
});
