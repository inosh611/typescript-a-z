const Status = {
    Pending: "pending",
    Delivered: "delivered",
} as const;


type Status = (typeof Status)[keyof typeof Status];




const orderStatus: Status = Status.Delivered;
console.log("Order Status", orderStatus);
