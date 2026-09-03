/*function assign(...items) {
    const target = items[0];
    items.slice(1).forEach(function(item) {
        for(const key in item) {
            target[key] = item[key]; 
        };
    });

    return target;
};

const creditCard = {number: 5566, name: "USBbank"};
const paymentCard = {data: 27082026, name: "GOLOVA"};
const result = assign({}, creditCard, paymentCard);
console.log(result);
console.log(creditCard);
console.log(paymentCard);*/