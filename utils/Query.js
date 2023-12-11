export function toPaginate(query,pageSize=20,page=1){
    
    return query.skip(pageSize*(page-1)).limit(pageSize)
}

export function toSort(query,field){
    if(!field){
        return query
    }
const sort = field.split("sc")
let sortType = sort[0] ==="a" ? 1 : -1 
let sortField = sort[1]
return query.sort({[sortField]:sortType})
}

export function toFilter(Model,filterObj){
    let excluded = ["sortBy","limit","page"]
    let QueryObj ={}
     
Object.keys(filterObj).forEach(el=>{
    if(!excluded.includes(el)){
        QueryObj[el] = filterObj[el]
    }
})
const filter = JSON.stringify(QueryObj).replace(
        /\b(gt|gte|eq|lt|lte)\b/g,
        (match) => `$${match}`
      );
    return Model.find(JSON.parse(filter))
}
