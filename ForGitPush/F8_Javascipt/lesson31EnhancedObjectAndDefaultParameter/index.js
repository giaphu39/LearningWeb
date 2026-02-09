
//1.Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3.Định nghĩa key cho object dưới dạng 
var name = 'java'
var price = 1000;

// var course ={
//     name: name,
//     price:price
// }

// thay thế được bằng nếu key và name tên giống
var course ={
    name,
    price,
    getName(){
        return this.name;
    }
}

var fieldName = 'name1';
var fieldPrice = 'price1';

const course1 ={
    [fieldName]:'Java',
    [fieldPrice]: [price]
} // lấy ra giá trị của 1 biến làm key, nhưng nếu là value thì không cần ghi vậy

console.log(course1)

function logger(log,isAlert){ //để tường minh thì có thể cho = false lun cũng được
    if(isAlert) return alert(log);
    console.log(log);
}

logger('Message...');

function logger1(log,type = 'log'){ // với những giá trị không bắt buộc nhập vào mới cần default
    console[type](log); //truy cập thuộc tính của object bằng biến thay vì viết trực tiếp tên thuộc tính.
}
logger1('In log từ type')

