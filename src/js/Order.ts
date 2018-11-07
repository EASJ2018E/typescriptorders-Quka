import { OrderLine } from "./OrderLine";

export class Order {
    // Order id
    
    private _OrderId : number;
    public get OrderId() : number {
        return this._OrderId;
    }
    public set OrderId(v : number) {
        this._OrderId = v;
    }
    
    // List of orders
    private _OrderLineList : OrderLine[];
    public get OrderLineList() : OrderLine[] {
        return this._OrderLineList;
    }
    public set OrderLineList(v : OrderLine[]) {
        this._OrderLineList = v;
    }

    constructor(orderId: number, orderLines: OrderLine[]) {
        this.OrderId = orderId;
        this._OrderLineList = orderLines;
    }

    // Calculate total sum of all lines
    public TotalSum(): number {
        let total: number = 0;
        this.OrderLineList.forEach(ol => {
            total += ol.calcTotal();
        });
        return total;
    }
}