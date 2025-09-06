
 // cứ . thì sẽ biết có phương thức gì
var date = new Date();

console.log(date); // đây là kiểu string

var nam = date.getFullYear();
var thang = date.getMonth() + 1; // trả về 0 -11
var ngay = date.getDate();

// console.log(ngay,'/', thang , '/', nam);
console.log(`${ngay}/${thang}/${nam}`);

// tìm tài liệu trên mozilla
