// Luodaan luokka
class order {
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }
    summarize() {
        const summary = 'order id: ' + 
            this.id + 
            ', message: ' + 
            this.message +
            ', delivered:' + 
            this.delivered;
        return summary; 
    }
    // (parametrim p2)=> {koodi}
    summarize__2 = () => {
        const summary = 'order id: ' + 
        this.id + 
        ', message: ' + 
        this.message +
        ', delivered:' + 
        this.delivered;
    return summary;
    }
}
/*
//Luodaan objekti
let order = {
    id: 1234,
    message: "my order",
    delivered: false
}
*/
//var order_id = 1234;    // Vakio muuttuja
//const order_message1 = 'my order'; // Kiinteä muuttuja
//var order_message2 = "my order";
//var order_message3 = `my order: ${order_id}`; // Voi poimia muuttujien arvoja sisälle

let order_delivered = false; // Muutuja voi vaihtua

function summarize_oder(id, message1, delivered){
    var summary = 'order id: ' + 
        id + 
        ', message: ' + 
        message1 +
        ', delivered:' + 
        delivered;
    return summary;
}
let order_obj = new order(1234, 'second order');

//const order_summary = summarize_oder(order_id, order_message1, order_delivered)
//const order_summary = summarize_oder(order.id, order.message, order.delivered)
//const order_summary = summarize_oder(order_obj.id, order_obj.message, order_obj.delivered)
const order_summary = order_obj.summarize();
console.log(order_summary);

//order_delivered = true;
//order.delivered = true; // kutsutaan muutujaa (objekti) order ja sen sisällä olevaa muuttujaa delivered

const order_summary_2 = summarize_oder(order_obj.id, order_obj.message, order_obj.delivered)
console.log(order_summary_2);

//TypeError
//order_id = 5678;