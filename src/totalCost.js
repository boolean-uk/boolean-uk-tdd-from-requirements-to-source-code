const totalCost = (basket) => {
  let total = 0;
  basket.forEach((item) => (total += item.price * item.quantity));

  return total;
};

module.exports = totalCost;
