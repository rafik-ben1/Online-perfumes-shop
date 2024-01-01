

export type cartReducerAction = | {
        type : string,
        payload : {
            item:Product | cartItem
        }
} 

export type Baseproduct = {
    _id? : string,
    title : string,
    price : number | string,
    rating?:number,
    totalRatings?:number,
    description : string,
    brand : string
    stock:number | string ,
    gender: "male" | "female" | "uni"
}
export type Product = Baseproduct& {
image : string
}
export type ProductForm = Baseproduct&{
image : string | File
}

type Basebrand = {
    _id? : string,
    title : string,
    description : string,
}

export type BrandForm = Basebrand&{
    image : File | string
}
export type Brand = Basebrand&{
    image : string
}

export type cartItem  = Product &{

    quantity : number
    }

export type User = {
    _id? :string
    email : string;
    name: string;
    avatar? : string;
role : "admin" | "user"
password?:string
}

  export  type userType  = {
        token : string;
       user: User
    } | null


    export type ApiResponse <p> ={
        status : "success" | "fail" | "error"
        data? : p
        message? : string
    }