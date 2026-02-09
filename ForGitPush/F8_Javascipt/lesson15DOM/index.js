// phải học từ tổng thể rồi đi vào cụ thể ( đọc file w3school)
// trang web được tải thì Document object model được tạo ra
// khi gõ url vào web thì nhận chuỗi html 
// kết hợp qui chuẩn (w3c) tạo ra mô hình DOM dạng cây

console.log(document);
document.write('hello from javascript add in the end');

var headingNODE = document.getElementsByClassName('heading')
console.log(headingNODE); // trả về HTML collection giống mảng nhưng không có các phương thức như mảng

console.log({
    element: headingNODE
})

// get ID luôn là số ít ( 1 đối tượng )
var oneso = document.getElementById('gs2') // trả về NULL nếu viết sai heading hoặc trùng tên ID
console.log(oneso);

console.log({
    element: oneso
})

var getTag = document.getElementsByTagName('h2'); // elements thì luôn trả về như mảng nên truy cập
// thì dùng vòng lặp
console.log(getTag);

var CSSheading = document.querySelector('.heading');
console.log(CSSheading)
// kiến thức css như nào thì như vậy
// chỉ select cái gặp đầu tiên thỏa
var CSSheading = document.querySelector('.box .heading2');
console.log(CSSheading)

// trả về node list khá giống mảng 
CSSheading = document.querySelectorAll('.heading');
console.log(CSSheading)

console.log(document.forms) // acess tất cả form có trong document
console.log(document.forms[2]);
console.log(document.forms['form2']);
console.log(document.forms.form1); // truy xuất vào id

console.log(document.anchors); // lấy ra tất cả tag a




