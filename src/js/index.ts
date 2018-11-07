import { OrderLine } from "./OrderLine";
import { Order } from "./Order";

// OrderLine example
let orderLine: OrderLine = new OrderLine({
    ProductId: 1322,
    OrderQty: 3,
    UnitPriceDiscount: 10,
    UnitPrice: 40
});

// orderLineList
let orderLineList: OrderLine[] = [];
orderLineList.push(
    new OrderLine({
        ProductId: 1322,
        OrderQty: 3,
        UnitPriceDiscount: 10,
        UnitPrice: 40
    }),
    new OrderLine({
        ProductId: 1322,
        OrderQty: 3,
        UnitPriceDiscount: 10,
        UnitPrice: 40
    }),
    new OrderLine({
        ProductId: 1322,
        OrderQty: 3,
        UnitPriceDiscount: 10,
        UnitPrice: 40
    })
);

// Create new Order
let order: Order = new Order(1, orderLineList);
console.log(order);
console.log("Sum total of product prices: [" + order.TotalSum() + "] DKK");