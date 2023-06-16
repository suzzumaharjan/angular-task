export class Item
{
    constructor(
        public id: number | undefined,
        public item_name: string | undefined,
        public quantity: number | undefined,
        public rate: number,
        public total: number | undefined
   
     ){
        this.id;
        this.item_name;
        this.quantity;
        this.rate;
        this.total;
     }
}