export async function login(cred:{email:string,password:string}){
    const res = await fetch("https://testing-store.onrender.com/auth/login",{method:"POST",body:JSON.stringify(cred)})
    const data = await res.json()
    if(!res.ok){
        throw new Error(data.error)
    }
    return data
}
export async function register (cred:{name:string,email:string,password:string}){
    const res = await fetch("https://testing-store.onrender.com/auth/register",{method:"POST",body:JSON.stringify(cred),
    headers:{"Content-type" : "application/json; charset=UTF-8","Accept": "application/json"} })
    const data = await res.json()
    if(!res.ok){
        throw new Error(data.message)
    }
    return data
}