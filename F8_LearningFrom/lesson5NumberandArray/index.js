var age = 19;
var PI = 3.14;

var otherNumber = new Number(5); // khởi tạo đối tượng mà còn rườm rà, cũng như loại trở thành object
//=> dùng cách đầu

console.log(typeof otherNumber);

var res = 20/'ABC';
console.log(res); // giá trị NaN là 1 số không hợp lệ
console.log(typeof res);

// không thể check res == NaN và res === NaN được
console.log(isNaN(res));
// keyword: javascript number method
console.log(age);
console.log(age.toString());

// làm tròn số thập phân
console.log(PI.toFixed()); // ko truyền thì hiểu là số 0 hoặc các giá trị tương tự false thì 
// làm tròn nguyên nhỏ hơn 0.5 thì làm tròn dưới còn lại làm tròn trên


var money = 323.365721
console.log(money.toFixed(3));

var languages = [
    'java',
    'javascript',
    'ruby',
    'C',
    1,
    5,
    null,
    undefined
]; // tên biến cần ý nghĩa để biết nó chứa gì


// var languages = new Array(
//     'java',
//     'ryby'   
// )


console.log(typeof languages); // là object
console.log(Array.isArray(languages));
console.log(languages.length);
console.log(languages[0]);

console.log(languages.toString());
console.log(languages.join('* '));

console.log(languages.pop()); // pop thực sự xóa sau đó trả về phần tử bị xóa
console.log(languages);

console.log(languages.push('C++','Python')); // trả về độ dài mới của mảng
// push thực sự thay đổi


// xóa phần tử đầu mảng trả về giá trị bị xóa, xóa hết mà vẫn lấy ra undefined 
console.log(languages.shift());
// thêm lại về đầu mảng trả về độ dài mảng 
console.log(languages.unshift('java'));


// xóa phần tử 
languages.splice(4,4) // vị trí 4 xóa 4 phần tử từ đó
console.log(languages);

// chèn bằng splice
languages.splice(1,0,'Dart');
languages.splice(2,2,'C#'); // xóa 2 phần tử tại 2 rồi thêm 
console.log(languages);



var extra = [
    '.Net',
    'GoLang'
]

console.log(languages.concat(extra));
console.log(languages.slice(0)); // copy mảng  
console.log(languages.slice(1,3)) ; //vị trí bắt đầu lấy đến kết thúc( không lấy điểm kết thúc lấy -1)
 
// mutating methods tham chiếu tới mảng gốc