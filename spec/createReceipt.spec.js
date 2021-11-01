describe("Create receipt", () => {
  it("returns receipt string if there are any items in the basket", () => {
    const basket = [{ name: "rubber duck", price: 3.5, quantity: 100 }];

    const result = createReceipt(basket);

    expect(result).toEqual(
      `Rubber duck | 3.5 x 100 | Subtotal: 35 || Total: 35`
    );
  });

  it("returns receipt string if there are any items in the basket", () => {
    const basket = [
      { name: "rubber duck", price: 3.5, quantity: 100 },
      { name: "pen", price: 1, quantity: 10 },
    ];

    const result = createReceipt(basket);

    expect(result).toEqual(
      `Rubber duck | 3.5 x 100 || Subtotal: 35
      Pen | 1 x 10 || Subtotal: 10`
    );
  });

  it("returns message string if there are no items in the basket", () => {
    const basket = [];

    const result = createReceipt(basket);

    expect(result).toEqual(`The basket is empty`);
  });
});
