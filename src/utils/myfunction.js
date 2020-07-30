export const data = (productdata) => {
    let mydata = []
    var sum = 0;
    var total_price = 0;
    const object = {}
    for(let i in productdata){
        
        sum = sum + productdata[i].quantity
        total_price = total_price + (productdata[i].quantity*productdata[i].price)
    }
    object['total_quantity']=sum;
    object['total_price']=total_price;
    mydata.push(object)
    return mydata;
}