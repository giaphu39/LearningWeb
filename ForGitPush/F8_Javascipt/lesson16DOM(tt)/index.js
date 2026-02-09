var listItemNodes = document.querySelectorAll('.box-1 li');

console.log(listItemNodes);

var boxNODE =
    document.querySelector('.box-1');
// sử dụng tới các li elements của .box-1 ( có thể lấy ra nhiều element tái sử dụng hơn)

console.log(boxNODE.querySelectorAll('li'));
// nghĩa là tìm theo con
console.log(boxNODE.querySelectorAll('.trongUL'));

// querySelector và getElementbyID mới trả về object trực tiếp luôn

document.write('HELLO from tag script');