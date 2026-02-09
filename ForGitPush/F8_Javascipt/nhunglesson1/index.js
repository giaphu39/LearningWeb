alert('Xin Chao')

// ten bien co phan biet hoa thuong
var fullName =  'Kin' //code convention chữ đầu thường tiếp theo hoa
var age = 20

// viết dấu ; để ghi nhiều code trong 1 dòng 

alert (fullName)
alert(age)

var isSuccess = age > 25;

// các giá trị sau là false trong bool
// 0
// false
// rỗng như '' hay ""
// undefined
// NaN
// null

if(isSuccess){ // bieu thuc bat ki khac 0 la true tham chi la string
    console.log('Success');
}

else{
    console.log('Failed');
}

var isNULL = null;
if(isNULL){ // bieu thuc bat ki khac 0 la true tham chi la string
    console.log('Success');
}

else{
    console.log('Failed');
}


var a = 1;
var b =2;
var result = a < b && b > 4; // thì giá trị && trả về vế nếu có sai
// nghĩa là nó lần lượt so sánh từ trái sáng phải toán tử không khác 6 giá trị so sánh 
//trên gặp phần tử giống 6 giá trị trên thì trả về và gán cho result luôn
 
var result1 = 'A' && 'B' && 'C'; 
console.log(result);
console.log(result1); // in ra C

// còn || thì gặp giá trị khác 0(...) thì trả về luôn
var result2 = 'A' || 'B' || undefined ||'c';
var result3= null || 'a' || 'c';
console.log(result2);
console.log(result3);