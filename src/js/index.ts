import { OrderLine } from "./OrderLine";

// OrderLine example
let orderLine: OrderLine = new OrderLine({
    ProductId: 1322,
    OrderQty: 3,
    UnitPriceDiscount: 10,
    UnitPrice: 40
});
console.log(orderLine);

// OrderLineList
let OrderLineList: OrderLine[] = [];
OrderLineList.push(
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
console.log(OrderLineList);