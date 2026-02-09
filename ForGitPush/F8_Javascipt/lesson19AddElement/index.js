var BOX = document.querySelector('.box')

// thuộc tính của element node
BOX.innerHTML = '<h1 title ="heading">Heading</h1>' // thêm vào dưới dạng element node nếu có thẻ tag
// nếu ko có thẻ tag thì là text node
BOX.innerHTML += '<div class = "them"> noi dung được thêm </div>';
// thêm cuối 

BOX.innerHTML = '<div> noi dung them dau</div>' + BOX.innerHTML;
// thêm đầu

console.log(BOX.innerHTML);
// đây hoàn toàn là ghi đè bên trong thuộc tính đang trỏ


var BOX2 = document.querySelector('.box2')

BOX2.outerHTML = '<h1> đây là thay thế hoàn toàn cho node đang xét</h1>'

console.log(BOX2); // vẫn hiện cũ vì BOX2 vẫn trỏ cái cũ trong stack
// không lấy ra được cái đang xét nữa

BOX2.outerHTML = '<h1> không đổi? </h1>' // do BOX2 không chứa tiếp cái mới thay thế
// outerHTML thì ghi đè 1 lần ko dùng đc nữa



