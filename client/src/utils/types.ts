

export type cartReducerAction = {
        type : string,
        payload : {
            quantity?  : number,
            item:cartItem
        }
}

export type Baseproduct = {
    _id? : string,
    title : string,
    price : number | string,
    rating?:number,
    totalRatings?:number,
    stock:number | string ,
    gender: "male" | "female" | "uni"
}
export type Product = Baseproduct& {
image : string
}
export type ProductForm = Baseproduct&{
image : string | File
}



export type brand = {
    _id? : string,
    title : string,
    description : string,
    image : File | string
}

export type cartItem  = Product &{

    quantity : number
    }

  export  type userType  = {
        token : string;
       user: {email : string;
        name: string;
        avatar : string;
    role : "admin" | "user"
    }
    } | null


    export type ApiResponse <p> ={
        status : "success" | "fail" | "error"
        data? : p
        message? : string
    }