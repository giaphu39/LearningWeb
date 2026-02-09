
var a = 1 ; //  giá trị 1 được lưu trong vùng nhớ 
a = 2; // 2 dược tạo ra và a gán cho vùng nhớ chứa 2
// Number type


//string type
var name = 'Son \'Dang';
var fullName = "Dang sao Nam"; // nháy dơn và kép không khác gì nhau '' thì nhìn gọn hơn


//boolean
var isSuccess = 42 > 23;

//undefined type
var age; // bien ko co gia tri
console.log(age);

//null
var isNull = null; // khi in kiểu ra lại ra là object


// symbol
var id = Symbol('id'); // tham so truyền vào là description và có tính unique
var id2 = Symbol('id2');
console.log(id == id2);


//function ( tự định nghĩa)
var myFunction = function(){
    alert('chay function'); // alert là function có sẵn
}

myFunction(); // thực hiện tại đây

var myObject={ // có key và value
    name: "son dang",
    age : 14,
    address : 'hanoi',
    Function : function(){
        console.log('hello');
    }
};

console.log('Object1', myObject);


// array
var myArray = [
    'java',
    'PHP',
    'Ruby'
]; // key = index bắt đầu = 0 đến n

console.log(myArray);

console.log(typeof myFunction); // dể in ra kiểu