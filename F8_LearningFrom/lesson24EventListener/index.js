


var btn = document.getElementById('btn');
console.log(btn);


// btn.onclick = function(){ // đây là cách DOM event thực hiện nhiều công việc trong 1 nút
//     console.log('viec1');
//     console.log('viec2');
//     alert('viec3');
// }

// xử lý nhiều việc khi 1 event xảy ra
// lắng nghe/ hủy bỏ lắng nghe

setTimeout(function(){
    btn.onclick = function(){ // đây là cách DOM event thực hiện nhiều công việc trong 1 nút
    console.log('viec1');
    console.log('viec2');
    alert('viec3');

}
},3000) // sau 3s mới bấm ra nội dung trên


setTimeout(function(){
    btn.onclick = function(){ } // gán lại 1 funciton rỗng để hủy lắng nghe
},10000) // sau 10s thì không cho bấm nữa

function event3(e){
    console.log('event3');
}

// 2 đối số là event name, callback, không viết chung vào 1 function như cách DOM Event
btn.addEventListener('click', function(e){
    console.log(Math.random(), 'event1');
})

btn.addEventListener('click', function(e){
    console.log(Math.random(), 'event2');
})

btn.addEventListener('click', function(e){
    console.log(Math.random(), event3);
})

// đồng loạt được gọi ông nào được viết trước thì đc gọi trươc


setTimeout(function(){
    btn.removeEventListener('click',event3); // phải viết funtion thì mới xóa được event
},3000)

// dùng DOM event khi muốn lắng nghe 1 sự kiện và không muốn gỡ bỏ
// phương thức quá to, quá rối thì dùng event listener
// muốn hủy bỏ lắng nghe dùng event listener




