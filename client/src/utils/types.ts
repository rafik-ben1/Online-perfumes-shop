export type cartItem  = product &{

quantity : number
}

export type cartReducerAction = {
        type : string,
        payload : {
            quantity?  : number,
            item:cartItem
        }
}

export type product = {
    id : string,
    title : string,
    image : string,
    price : number,
    rating:number,
    totalRatings:number,
}