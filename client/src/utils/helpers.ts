export function formatCurrency(amount : number){
    return amount.toLocaleString("en-Us",{
        style:"currency",
        currency:"USD",
    })
}