import { BillType } from "@/store/bill/type";

export const bills: BillType[] = [
  {
    id: 1,
    quantity: 2,
    shoeName: "Vans classic black",
    userName: "Ha",
    billStatus: "WAIT",
    billReceived: false,
    shoeSize: 37,
    createdDate: "asd",
    totalPrice: 200,
  },
  {
    id: 2,
    quantity: 1,
    shoeName: "Vans classic black",
    userName: "Ha",
    billStatus: "DELIVERY",
    billReceived: false,
    shoeSize: 39,
    createdDate: "asd",
    totalPrice: 200,
  },
  {
    id: 3,
    quantity: 1,
    shoeName: "Vans classic black",
    userName: "Ha",
    billStatus: "COMPLETED",
    billReceived: true,
    shoeSize: 40,
    createdDate: "asd",
    totalPrice: 200,
  },
];
