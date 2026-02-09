
var pass = '39'

var myInfo ={ // key : value, nếu thêm key mà vi phạm thì đưa nó thành chuối
    name : 'Son',
    age : 18,
    '12name-gas': 4,
    getName: function(){
        return this.name; // dùng this để đỡ đổi theo tên biến dễ tái sử dụng được 
    },
    [pass] : 2
};

myInfo.email = 'sontg@fullstack';
myInfo['my-email'] = 2; // có thể dùng cách này để thêm từ vi phạm trả key chuỗi

console.log(myInfo['name']);
console.log(myInfo.age);
console.log(myInfo.hai); // trả về undefined

var truyVan = 'name';
console.log(myInfo[truyVan]); // truyền dưới dạng biến thì truy vấn ra giá trị


// phương thức trong object / method
// others -> thuộc tính / property


console.log(myInfo.getName());

delete myInfo.age;

console.log(myInfo);



// object constructor: quy ước chung thì viết hoa chữ đầu

// class User { // cách viết mới của ES6
//     constructor(firstName, lastName, avatar){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.avatar = avatar;
//     }
// }



function User(firstName, lastName, avatar){ // mô tả thiết kế đối tượng
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}



// phải dùng new thì mới là tạo đối tượng mới, vì nếu gọi thường thì this là undefined 
var author = new User ('son' , 'dang' , 'ava1') // String, Array, ... là object constructor
var user = new User ('son' , 'dang' , 'ava2')


author.title = 'chia sẻ câu chuyện';
user.comment = 'noi gi do'; // đây là những thuộc  tính phương thức riêng

console.log(author.getName());
console.log(author);
console.log(user);

// cách phân biệt constructor nào thì f12 tìm constructor hoặc ...
console.log(author.constructor === User);
