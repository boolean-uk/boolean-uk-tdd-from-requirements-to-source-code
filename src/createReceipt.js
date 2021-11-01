const createReceipt = (basket) => {
  let receipt = "";
  basket.forEach(
    (item) =>
      (receipt += `\n${item.name} | ${item.price} x ${
        item.quantity
      } || Subtotal: ${item.price * item.quantity}`)
  );
  return receipt;
};

module.exports = createReceipt;
