

// code block: if else, loop, {},...-> khai báo biến trong codeblock

{
    var course = 'java'; // chỉ var truy cập được
    // let course = 'java';
    // const course = 'java'; 

}
// var truy cập toàn cục
console.log(course);


{
    const test1 = 'C';
    {
        let test1 ='C++'
        console.log(test1);
    }
    console.log(test1);
}


//hoisting: đưa lên đầu khai báo thực thi thực hiện sau
// định nghĩa biến lên đầu

a = 1;
var a = 8;
console.log(a);

// b = 1;
// let b; // lỗi const và let không hỗ trợ hoisting
// console.log(b);

const c =3;
// c = 7; // không thể sử dụng toán tử gán lần 2 cho const
console.log(c);


const collection = {
    name:'Ruby'
};
collection.name = 'PHP'; // thay đổi được do là thay đổi thuộc tính không phải thay đổi bằng toán tử gám
console.log(collection);

//code thuần: chỉ js thì dùng var
// thư viện babel: chỉ dùng const,let
// khi định nghĩa biến không cần gán lại -> const
// khi cần gán lại -> let


