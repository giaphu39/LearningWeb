

const BOX = document.querySelector('.box')

// truy cập 1 phần tử thì thường ưu tiên in ra HTML lun
console.log(BOX, typeof BOX) // đây là object khi truy cập 1 thuộc tính

console.log([BOX]) // cú pháp tạo mảng-> khi nằm trong
//mảng hoặc object thì inspect có thể xem mở rộng
// có những thuộc tính chung của 3 loại node này
 // ví dụ là text content mở ra trên console để xem
// tất cả đều có thể biến thành thẻ input


console.log(BOX.style)
BOX.style.width = '100px';
BOX.style.height = '200px';
BOX.style.backgroundColor = 'red';

// cách viết khác ( dạng inline )
Object.assign(BOX.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
})


// lấy ra thuộc tính chứ không phải giá trị
console.log(BOX.style.width)
//chưa khai báo, inline, css từ ngoài file hoặc class không nằm trong style thì không dùng đc
// khi đó dùng cách này:
console.log(getComputedStyle(BOX).width);



BOX.classList.add('lop2dcAdd');
BOX.classList.add('red', 'blue');
console.log(BOX.classList.length) // số lượng phần tử
console.log(BOX.classList.value) // lấy ra tên
console.log(BOX.classList)


BOX.classList.contains('red'); // kiểm tra class có tồn tại
// thường dùng để kiểm tra trạng thái menu đóng hay mở

BOX.classList.remove('blue');

setTimeout(() =>{ // chỉ chạy 1 lần
    BOX.classList.remove('red')
}, 3000)

setInterval(()=>{ // chạy liên tục liên hồi 
    BOX.classList.toggle('green') // có thì bỏ không có thì thêm
}, 2000)

