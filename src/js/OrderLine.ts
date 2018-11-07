import { IOrderLine } from "./IOrderLine";

export class OrderLine implements IOrderLine {
    // ProductID
    private _ProductId : number;
    public get ProductId() : number {
        return this._ProductId;
    }
    public set ProductId(v : number) {
        this._ProductId = v;
    }

    // OrderQty
    private _OrderQty : number;
    public get OrderQty() : number {
        return this._OrderQty;
    }
    public set OrderQty(v : number) {
        this._OrderQty = v;
    }
    
    // UnitPrice
    private _UnitPrice : number;
    public get UnitPrice() : number {
        return this._UnitPrice;
    }
    public set UnitPrice(v : number) {
        this._UnitPrice = v;
    }

    // UnitPriceDiscount
    private _UnitPriceDiscount : number;
    public get UnitPriceDiscount() : number {
        return this._UnitPriceDiscount;
    }
    public set UnitPriceDiscount(v : number) {
        this._UnitPriceDiscount = v;
    }
    
    constructor( orderLine: IOrderLine) {
        this.OrderQty = orderLine.OrderQty;
        this.ProductId = orderLine.ProductId;
        this.UnitPrice = orderLine.UnitPrice;
        this.UnitPriceDiscount = orderLine.UnitPriceDiscount;
    }



    public calcSum(): number {
        return this.OrderQty * (this.UnitPrice - this.UnitPriceDiscount);
    }

    public calcVat(): number {
        return this.calcSum() * .25;
    }

    public calcTotal(): number {
        return this.calcSum() + this.calcVat();
    }
}