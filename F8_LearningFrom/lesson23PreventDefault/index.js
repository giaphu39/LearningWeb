


// prevent default

// var aElements = document.anchors; // dùng anchor thì phải có name trong thẻ a
var aElements = document.links;

for(var i = 0  ; i < aElements.length;i++){
    aElements[i].onclick = function(e){
        console.log(e.target.href);
        if(e.target.href.startsWith('https://google')){ // nó theo cái được gán trong html không theo cái ở ngoài biến đổi
            e.preventDefault(); // start thiếu s, preventDefault thiếu ()
        }
    }
}
var ulElement = document.querySelector('ul');
ulElement.onclick = function(e){
    console.log(e.target);
}// để ý là ngăn chặn hành vi mặc định trở về none khi click chuột xuống

ulElement.onmousedown = function(e){
    e.preventDefault(); // ở đây là ngăn chặn trỏ về ẩn none khi out trỏ input
}

// document.querySelector('div').onclick = 

document.querySelector('button').onclick =
    function(e){
        e.stopPropagation(); // ngăn sự kiện nổi bọt
        console.log('Chỉ in ra click me from js vì bị ghi đè hoàn toàn')
    }
