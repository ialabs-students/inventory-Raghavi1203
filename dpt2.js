var lakme = /** @class */ (function () {
    function lakme(product, price, count) {
        this.brand = 'lakme';
        this.product = product;
        this.price = price;
        this.count = count;
    }
    lakme.prototype.getEngineInfo = function () {
        return "Lakme count:" + this.count;
    };
    return lakme;
}());
var sugar = /** @class */ (function () {
    function sugar(product, price, count) {
        this.brand = 'sugar';
        this.product = product;
        this.price = price;
        this.count = count;
    }
    sugar.prototype.getEngineInfo = function () {
        return "sugar count:" + this.count;
    };
    return sugar;
}());
var lakme1 = new lakme('serum', '150', '20');
lakme1.expiry = "25days";
var lakme2 = new lakme('facewash', '200', '30');
var sugar1 = new sugar('lipstick', '250', '23');
var sugar2 = new sugar('kajal', '160', '30');
var sugar3 = new sugar('eyeliner', '250', '40');
delete sugar3['product'];
console.log("-----------------------");
function getKey(lakme1, lakme2) {
    var arr = [], obj = Object.keys(lakme1);
    for (var count in obj) {
        if (lakme1[obj[count]] > 5) {
            arr.push(obj[count]);
        }
    }
    return arr;
}
var lakme5 = [{ product: "hairoil", price: "100", count: "50" },
    { product: "shampoo", price: "300", count: "20" }];
var result = lakme5.filter(function (obj) {
    return obj.count > '5';
});
console.log(result);
console.log("Beauty Product dataset");
console.log(lakme1, lakme2, sugar1, sugar2);
console.log("--------------------------------");
console.log("delete");
console.log(sugar3);
console.log("-----------------------");
console.log("addional");
console.log(lakme5);
console.log("-----------------------");
console.log("threshold");
console.log(getKey(lakme1, lakme2));
console.log(result);
console.log(lakme1);
