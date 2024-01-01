

export type cartReducerAction = | {
        type : string,
        payload : {
            item: cartItem
        }
} 

export type Baseproduct = {
    _id? : string,
    title : string,
    price : number | string,
    rating?:number,
    totalRatings?:number,
    description : string,
    
    stock:number | string ,
    gender: "male" | "female" | "uni"
}
export type Product = Baseproduct& {
image : string
brand : string
}

export type review = {
    author :{
        name : string
        email : string
        avatar : string
    }
    review : string
    rating : number
    createdAt : Date
    product :string
}

export type SingleProduct = Product & {
reviews : review[]
brand :{
    _id:string
    title:string
    image:string
}
}
export type ProductForm = Baseproduct&{
image : string | File
brand : string
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

    export type ReviewForm = {
        rating : number
        review : string
    }