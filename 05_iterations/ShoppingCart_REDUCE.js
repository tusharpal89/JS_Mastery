const ShoppingCart = [
    {
      itemName: "CP Course",
      price : 1499
    },
    {
      itemName: "DSA Course",
      price : 4999
    },
    {
      itemName: "Full Stack Course",
      price : 8999
    },
]


const wantedInfo = ShoppingCart.reduce((acc, currval) => (acc + currval.price),0);
console.log(wantedInfo);
 