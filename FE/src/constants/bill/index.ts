import { BillType } from "@/store/bill/type";

export const bills: BillType[] = [
  {
    id: 1,
    quantity: 2,
    shoeName: "Vans classic black",
    shoeId: 1,
    userName: "Ha",
    status: "WAIT",
    received: false,
    shoeSize: 37,
    createdDate: "asd",
    isEvaluate: false,
    totalPrice: 200,
  },
  {
    id: 2,
    quantity: 1,
    shoeName: "Vans classic black",
    shoeId: 2,
    userName: "Ha",
    status: "DELIVERY",
    received: true,
    shoeSize: 39,
    createdDate: "asd",
    isEvaluate: false,
    totalPrice: 200,
  },
  {
    id: 3,
    quantity: 1,
    shoeName: "Vans classic black",
    shoeId: 3,
    userName: "Ha",
    status: "COMPLETED",
    received: true,
    shoeSize: 40,
    createdDate: "asd",
    isEvaluate: true,
    totalPrice: 200,
  },
];
