var array = ['java','C','PHP'];

// var a = array[0];
// var b = array[1];
// var c = array[2];

var [a,b,c]=array;
var [a1, , c1] = array;
var [a2, ...conlai] = array; // toán tử rest ...tenbien bỏ tất cả vào mảng

console.log(a,b,c);
console.log(a1,c1);
console.log(a2,conlai);


var course ={
    name: 'javaCourse',
    price: 1000,
    price2: 'cấu trúc phải lấy ra đúng tên',
    children:{
        name: 'React'
    }
};

var {name,price,price3} = course; // phải lấy ra mới dùng được
console.log(name,price,price3); // không phải là là bất kì tên nào cũng được

// thủ thuật xóa 1 key
var {price, ...newCourse} = course;
console.log(newCourse)

//đổi tên
var {name : parentName, children:{name:childrenName}} = course; 
console.log(parentName, childrenName)

var{name:name1, price4 = 'gia duoc mac dinh neu khong co'} = course;
console.log(name1,price4, name) // name này của cái trước

function logger(a,...param){ // nếu bỏ a thì khá giống arguments
    console.log(param);
    console.log(arguments);
    console.log(arguments[1],param[1]);

}

logger(1,5,3,6,8,2);

function logger1 ({name,price,...rest}){ // mảng cũng tương tự
    console.log(name);
    console.log(rest);
}

logger1({
    name:'java',
    price: 3200,
    description:'hi'
})
