

// input & select
var bienluu;
var inputElement = document.querySelector('input[type ="text"]');

inputElement.onchange = function(e){ // gọi đến khi value input khác value trước đó
    // console.log(e.target.value); // thực hiện sau khi trỏ (blur) ra ngoài 
    bienluu = e.target.value;
}

inputElement.oninput = function(e){ // gọi đến khi value input được nhập 
    console.log(e.target.value);  
}


var inputCheckBox = document.querySelector('input[type="checkbox"]');

inputCheckBox.onchange = function(e){
    console.log(e.target.value); 
    console.log(e.target.checked);
}

var inputOption = document.querySelector('select');
inputOption.onchange = function(e){
    console.log(e.target.value);
} 

// key up&down

inputElement.onkeydown = function(e){ // dùng keydown
    // thì khi nhấn xuống thực thi
    console.log(e); // trả về keyboard event 
    // in ra trước cái trên vì độ ưu tiên hay do thứ tự 
    //xảy ra sự kiện
    console.log(e.which); // cho biết giá trị ascii của bàn phím
    //từ các phím này mình sẽ thao tác theo ý mình ví dụ
    switch(e.which){
        case 27:
                console.log('exit');
                break;
    }
}

// tác động lên cả document
document.onkeyup = function(e){ // nhấc phím lên thì thực thi
    console.log(e.which);
    switch(e.which){
        case 27:
            console.log('exit');
            break;
        case 13:
            console.log('enter');
            break;
    }
}

// onkeypress nhấn xuống và giữ , escape không nhận ctrong press 