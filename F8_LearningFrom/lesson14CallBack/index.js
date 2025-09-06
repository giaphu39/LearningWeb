// là hàm được truyền qua đối số khi gọi hàm khác ( tham số truyền vào là hàm)

function myCallBack(value){
    console.log('value: ', value);
}

function myFunction(param){
    if(typeof param ==='function'){ // có dòng này để khi truyền vào số thì không bị lỗi
        console.log(typeof param);
        param('bài này hay quá'); //đối số truyền vào là hàm 
    }
    else{
        console.log(param);
    }
}

myFunction(myCallBack);
myFunction(124);


// tự định nghĩa map

var courses = [
    'java',
    'C',
    'Ruby'
]

Array.prototype.map2 = function(callBackForMap){
    // for(var i = 0 ; i < this.length ; i++){ // mỗi lần lặp qua 1 thuộc tính thì chậm hơn
    // để mỗi lần lặp có giá trị trả về thì dùng mảng 
    var output =[];

    var arrayLenght = this.length;
    for(var i = 0; i < arrayLenght; i++){
        var result =callBackForMap(this[i],i); // gọi map2 thì sẽ lặp từng phần tử và mỗi lần 
        // lặp sẽ gọi function được truyền vào và ở đây ta 
        // đã định nghĩa tham số của callBack là gì   
        output.push(result);
    }

    return output;
}

var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`;
})

console.log(htmls.join('\n'));


// đệ quy và call back

function loop(start, end, cb){
    if(start == end + 1) return;
    else{
        cb(start); // khởi tạo giá trị cho cb
        return loop(start+1,end,cb);
    }
}


loop(0,courses.length-1, function(index){ // đây là callback vì nó là hàm được truyền vào hàm cha
    console.log('index: ', index);
})


function giaiThua(number){
    if(number == 1) return number;
    else{
        return number * giaiThua(number-1);
    }
}

console.log(giaiThua(6));

// tự định nghĩa every


// trả về sai nếu có 1 sai

Array.prototype.every2 = function(callback){
    // var result = [];
    var size = this.length;
    for(var i = 0 ; i < size; i++){
        var temp = callback(this[i],i); // trả về bool
        if(temp == 0) return 0;
    }
    return 1;
}


var result2 = courses.every2(function(course,index){
    return course != 'S';
})
console.log(result2);