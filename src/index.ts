const menu = [
    { name: "Margaline", price:100}, 
    { name: "Margaline", Price:200}, 
    { name: "Margaline", Price:300}, 
    { name: "Margaline", Price:400}, 
    { name: "Margaline", price:500}, 
    { name: "Margaline", Price:600}, 
    { name: "Margaline", Price:700}, 
    { name: "Margaline", Price:800}, 
 ]
 
 
 let cashInRegister = 100
 let nextOrderId = 1
 const orderQueue = []
 
 
 function addNewPizza (pizzaObj) {
     menu.push(pizzaObj);
 }
 
 function placeOrder(pizzaName) {
     const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)

     if(!selectedPizza){

        console.error(`${pizzaName}, does not exist`)
     }
 
     cashInRegister += selectedPizza.price
     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status : "ordered" }
 
     orderQueue.push(newOrder)
 
     return newOrder
 }
 
 
 function completeOrder(orderId){
 
     const order = orderQueue.find(order => order.id === orderId)
 
     order.status = "completed"
 
     return order
 
 }
 
 addNewPizza({ name: "Chicken Bacon Ranch", price: 100 })
 addNewPizza({ name: "BBQ Chicken ", price: 50 })
 addNewPizza({ name: "Spicy Sausage", price: 200 })
 
 placeOrder("Chicken Bicon Ranch")
 completeOrder("1")
 
 console.log("Menu:", menu)
 console.log("Cash in::", cashInRegister)
 console.log("orderQueue:", orderQueue)

