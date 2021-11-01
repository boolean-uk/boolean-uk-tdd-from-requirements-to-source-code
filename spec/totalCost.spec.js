const totalCost = require("../src/totalCost");

describe("Total cost", () => {
  it("returns total cost of items if there are items in the basket", () => {
    const basket = [
      { name: "carrot", price: 0.5, quantity: 10 },
      { name: "potatoe", price: 0.1, quantity: 3 },
    ];

    const result = totalCost(basket);

    expect(result).toEqual(5.3);
  });

  it("returns 0 if there are no items in the basket", () => {
    const basket = [];

    const result = totalCost(basket);

    expect(result).toEqual(0);
  });
});
