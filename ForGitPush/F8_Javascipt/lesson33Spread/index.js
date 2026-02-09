// toán tử giải
var array =['java','ruby','PHP'];
var array2 = ['React','Dart'];
// có thể dùng concat
console.log(array.concat(array2));
//cách dùng spread
var array3 = [...array2, ...array];
console.log(array3)

// ... của destructuring là có input vào trực tiếp hoặc thông qua hàm -> gom nhóm lại thành mảng
// còn ... của spread là từ những cái sẵn có trong mảng tạo nên mảng mới


var object1 = {
    name: 'java'
}
var object2 ={
    price: 3220,
    getName(){
        return this.name;
    }
}

var object3 = {
    ...object1,
    ...object2
};

console.log(object3);

var defaultConfig = {
    api:'https://domain',
    apiVersion: 'v1',
    //
}

// thừa hưởng lại những cái chung 
var specificConfig ={
    ...defaultConfig,
    api: 'https://domainGhiDe'
}// 2 key trùng nhau thì sẽ lấy cái sau ghi đè lại

console.log(specificConfig);



function logger(...rest){
    console.log(rest, 'kết hợp spread và rest');
}

logger(...array3)