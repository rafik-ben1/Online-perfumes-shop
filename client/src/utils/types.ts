

export type cartReducerAction = {
        type : string,
        payload : {
            quantity?  : number,
            item:cartItem
        }
}

export type product = {
    _id : string,
    title : string,
    image : string,
    price : number,
    rating:number,
    totalRatings:number,
}
export type brand = {
    _id? : string,
    title : string,
    description : string,
    image : File | string
}
export type cartItem  = product &{

    quantity : number
    }

  export  type userType  = {
        token : string;
       user: {email : string;
        name: string;
        avatar : string }
    } | null