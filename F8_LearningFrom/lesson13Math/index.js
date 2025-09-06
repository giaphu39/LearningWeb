


console.log(Math.PI);
console.log(Math.round(1.3)); // lam tron như thực tế
console.log(Math.abs(-5));
console.log(Math.ceil(4.1)); // làm tròn trên 
console.log(Math.floor(4.999)); // làm tròn dưới
console.log(Math.random()); // trả số thập phân nhỏ hơn 1
console.log(Math.floor(Math.random() * 100)); // random số nguyên từ 0 đến 99

var Random = Math.floor(Math.random() * 5);

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];

console.log(bonus[Random]);



Random = Math.floor(Math.random() * 100); // thay đổi tỉ lệ xác suất thì xét điều kiện trong khoảng
if(Random <= 40){
    console.log('Tang chi mang');
} 
else{
    console.log('Đòn đánh thường không kèm hiệu ứng');

}
// Math.max(x1, x2, x3, ...) -> chỉ nhận danh sách đối số không nhận mảng
console.log(Math.max(-1,54,65));
console.log(Math.min(-1,54,65));

var A = [-1,54,623];
console.log(Math.max(...A)); // spreed operator


var B = [-1,54,623, [43],[2359,86]];
var flatB = B.flat(Infinity);
console.log(Math.max(...flatB));
// Array.prototype.flat(depth) có tham số depth: số cấp độ làm phẳng mảng.

