function Course(name,price){
    this.name = name;
    thiss.price = price;
    this.getName = function(){
        return this.name;
    }
}

const phpCourse = new Course('PHP',1000);
console.log(phpCourse);

// cách ghi này tương tự nhưng tổ chức nhìn gọn gàng hơn
class Course1{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getName(){
        return this.name;
    }
    
}



