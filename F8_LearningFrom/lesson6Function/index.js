// hàm chỉ thực thi code khi được gọi
// không đặt tên hàm có số ở thứ tự đầu tiên

function showDialog(){
    alert('xin chào');
}


function showLog(message , message2){
    if(message) console.log(message); // kiểm tra khác null thì mới in
    console.log(message2); // ko có tham số thì là undefined
}

// showDialog();
showLog();

// bên trong hàm có cái đặc biệt là arguments là giống mảng

function showArgument(){
    console.log(arguments);
}

showArgument('gs',2, null);



function showFor(){ // nếu function trùng tên thì chạy cái sau cùng ghi đè 
    for(var x of arguments){
        console.log(x, '-');
    }
}
function showFor1(){
    for(var x in arguments){ // in là lặp qua từng chỉ số
        console.log(x, '-');
    }
}
function showFor2(){ // đây là kiểu Declaration function
    var myString ='';
    for(var x of arguments){
        myString += `${x} -`;
    }
    function showInternal(){
        console.log('hello from internal function')
    }
    showInternal(); // hàm trong hàm được nhưng chỉ có phạm vi trong hàm ko gọi được bên ngoài
    console.log(myString);
}
showFor('as', 'gdsa');
showFor1('as', 'gdsa');
showFor2('as', 'gdsa');


var isConfirm = confirm('Dong Y?'); // các hàm hiện hộp thoại
// thì các dòng code dưới không thực thi cho đến khi thoát hộp thoại
console.log(isConfirm);


function cong(a,b){
    return a+b; // mặc định không trả về thì 
    // giá trị là undefined 
    // giá trị trả về là bất kì 
    a += b; // đã return thì không chạy tiếp
}

var res = cong(45,2);


var ExpressionFunction = function() // đây là hàm được đặt bằng cách gán biến 
{ // dùng phép gán
    console.log('Khác biệt ở chỗ hoisting so với declaration ( có thể gọi trước khi định nghĩa) còn expresstion thì cần định nghĩa mới được gọi')
} //Hoisting là cơ chế mà JavaScript đẩy phần khai báo biến và hàm lên đầu phạm vi (scope) khi thực thi code.=> không thể gọi hàm trước dòng định nghĩa
// setTimeout hay callback cũng là dạng này, có thể đặt tên hoặc không
// đặt tên function khi gán chỉ phục vụ cho mục đích dễ hiểu và debug

var myObject ={
    myExpressionFunction : function autoLogin(){}
}





