
// const logger = function(log){
//     console.log(log);
// }

let logger = (log)=>{
    console.log(log);
}

logger('Message...');


const sum = (a,b) => a+b; // không có dấu {} thì là return luôn
console.log(sum(8,4));

const expr = (a,b)=> ({a:a,b:b}); // dùng () để hiểu là trả về object thay vì là code block
console.log(expr(4,2))


// chỉ có 1 đối số thì bỏ ngoặc lun

logger = log=>{
    console.log(log);
}

logger('Message...');


const course ={
    name: 'java',
    getName: function(){
        return this; // context
    }
}

console.log(course.getName())
// trong khi đó 

const course1 ={
    name: 'java',
    getName: ()=>{
        return this; // không có context
    }
}

console.log(course1.getName())

// Và cách arrow function thì không tạo được constructor
const Course2 = function(name,price){
    this.name = name;
    this.price = price;
}

const jsCourse = new Course2('JaVaScript',134);
console.log(jsCourse)