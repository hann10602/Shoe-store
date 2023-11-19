import { OrderType } from "@/store/order/type";

export const orders: OrderType[] = [
  {
    id: 1,
    quantity: 2,
    shoeId: 1,
    shoeName: "Vans classic black",
    shoeImage:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png?v=1625925617317",
    userId: 1,
    shoePrice: 50,
    shoeSalePrice: 40,
    orderStatus: "WAIT",
    orderReceived: false,
  },
  {
    id: 2,
    quantity: 1,
    shoeId: 2,
    shoeName: "Vans classic black",
    shoeImage:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-slip-on-checkerboard-black-off-white-vn000eyebww-1.png?v=1625923436960",
    userId: 1,
    shoePrice: 75.5,
    shoeSalePrice: 65.5,
    orderStatus: "DELIVERY",
    orderReceived: false,
  },
  {
    id: 3,
    quantity: 1,
    shoeId: 3,
    shoeName: "Vans classic black",
    shoeImage:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-old-skool-classic-navy-white-vn000d3hnvy-1.jpg?v=1625922070377",
    userId: 1,
    shoePrice: 100,
    orderStatus: "COMPLETED",
    orderReceived: true,
  },
];
