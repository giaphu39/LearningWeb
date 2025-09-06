// JSON là 1 định dạng dữ liệu(chuỗi)
// JavaScript object Notation -> ngôn ngữ cùng hiểu quy ước dữ liệu đó
// JSON: thể hiện được kiểu
// Number,Boolean, Null, Array, Object, string
// biến JSON -> dữ liệu trên : giải mã/ decode/ Parse
// biến dữ lieuj -> JSON : Mã hóa/ Encode / Stringify

var json ='1'; // chuỗi json
var json1 = 'null';
var json2 = '["Js","PHP"]'; // thể hiện mảng
var json3 = '{"name":"Son","age":19}'; 
var json4 = '"hai4"'; // thể hiện chuỗi


console.log(JSON.parse(json)); // parse đưa json thành js types
console.log(JSON.stringify(true)); // màu đen là string ( trên light theme), màu trắng (dark theme)
console.log(JSON.stringify([
    'JS','Ruby','java"scitp', 'C\"'
])) // từ parse muốn có "" thì \" rồi ghi 


console.log(JSON.stringify({
    name:'SonKu',
    test:function(){
        return 1; // JSON không định dạng phương thức 
    }
}))