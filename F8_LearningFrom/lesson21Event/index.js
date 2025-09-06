// event là sự kiện của web hoặc người dùng ví dụ: click , lăn chuột, bôi chữ
// bước 1 xác định thao tác người dùng
// bước 2 viết thao tác từ lắng nghe người dùng
// đọc các event tại DOM event của w3school
// thêm tiền tố on


// 1.Attribute events

var Q1 = document.querySelector('.testQuery');

// bản chất vẫn là callback, trong đó có đối số là mouseevent
Q1.onclick = function(){
    console.log('viết event trong hàm');
}

var Q2 = document.querySelectorAll('.QAll');

for(var i = 0  ; i < Q2.length; i++){
    Q2[i].onclick = function(mouseEvent){ // tên biến có thể đổi
        console.log(Q2[i]); // lỗi vì chỉ có 2 phần tử, hành vi click vào diễn ra sau khi chạy for nên i là 2 => sai
        console.log(mouseEvent.target); // target là trả về chính node đó luôn
    }
    // cách giải quyết lỗi dùng this, dùng let thay vì var
}

console.log(i);
//https://chatgpt.com/share/6888d170-d7ec-8006-9bd3-642749888fdf
