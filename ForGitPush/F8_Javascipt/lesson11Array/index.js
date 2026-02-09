

var courses =[
    {
        id:1,
        name:'java',
        coin: 0
    }
    ,
    {
        id : 2,
        name: 'c',
        coin: 0
    }
        ,
    {
        id : 3,
        name: 'C++',
        coin: 200
    }
        ,
    {
        id : 4,
        name: 'Ruby',
        coin: 300
    }
            ,
    {
        id : 5,
        name: 'Ruby',
        coin: 300
    }
]


// hàm được truyền vào tham số được gọi là call back
// forEach hàm có sẵn trong array và cần hàm 
// hàm này cho 2 giá trị object và index
courses.forEach(function(course, index){
    console.log(course, index);
})
// có thể thay thế bằng hàm mũi tên hay hàm bên ngoài

//every kiểm tra tất cả phần tử trả ra bool
var isFree = courses.every(function(course,index){
    // console.log(course[index].id); // course là 1 obj không phải mảng nên cái này sai
    // console.log(courses[index].id);
    // hoặc 
    console.log(course.id);
    return course.coin === 0; // nếu trả về đúng mới kiểm tra thằng tiếp theo
    // nghĩa là chạy chỗ sai thì dừng không lặp nữa
})

console.log(isFree);

//every thì kiểm tra tất cả cho đến khi gặp sai
//some thì kiểm tra tất cả cho đến khi gặp 1 đúng

var isFree = courses.some(function(course,index){
    console.log(courses[index].id);
    return course.coin === 0; 
})
console.log(isFree);

var isHavingRubyLanguage = courses.find(function(course, index){
    return course.name === 'Ruby';
}) // thấy 1 ông đúng là trả về , còn nhiều phần tử thỏa thì không trả về đúng

console.log(isHavingRubyLanguage); // return về obj

var isHavingRubyLanguage = courses.filter(function(course, index){
    return course.name === 'Ruby';
}) 

console.log(isHavingRubyLanguage);

// map lặp qua từng phần tử thực thi thay đổi vì vậy
// khi mà không truyền tham số vào thì là undefined

function courseHandler(course,index, originArray){ // tham số thứ 3 là mảng gốc nhưng có thể thay thế bằng cách dưới
    console.log(course);

    // return gì thì lấy cái đó là obj
    //ko có return thì là undefined hết 5 giá trị
    // return 123;
    return {
        id: course.id,
        name: `khoa hoc: ${course.name}`,
        cointext: `Gia: ${course.coin}`,
        oldCourse: courses[index],
    }
};


var newCourses = courses.map(courseHandler); // lặp từng cái sau dó tạo thành array
console.log(newCourses);

// có thể dùng map này để hiển thị html ra luôn ví dụ `<h1>${course.name}</h1>`

// biến lưu trữ
var totalCoin = 0 ;
for(var course of courses){
    totalCoin += course.coin;
}
console.log(totalCoin);
// không ngắn gọn, phải học các hàm có sẵn để viết cú pháp
// ngắn gọn và đỡ tốn thời gian, tuy nhiên thực thi chậm hơn
// do truyền vào function cho các hàm trên


var Count = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){ // dịch ra là biến lưu trữ
    // currentValue là obj đang xét
    // currentIndex là index của obj đang xét
    Count++;
    
    console.table({
        'lượt chay: ': Count,
        'Biến tích trữ: ': accumulator
    })
    // không return thì là undefined nhưng lần đầu là 0 vì có giá trị ban đầu nhưng từ lần sau là ko đc return

    return accumulator + currentValue.coin; // có thể để này thành biến riêng total =...
}

var totalCoin = courses.reduce(coinHandler,0); // initial value = 0

console.log(Count, 'nghĩa là gọi hàm bao nhiêu lần');
// nên viết hàm trong hàm reduce luôn, sau này học luôn arrow function để viết ngắn hơn


var tongTien = courses.reduce(function(total,course){
    return total + course.coin;
},0); // inital value không bắt buộc khi không có thì lấy giá trị đầu của mảng làm
// giá trị khởi tạo => trong lần gọi đầu lấy ra 2 obj lun nên giảm 1 bước chạy
// biến tích trữ trở thành obj 

// vậy giá trị khởi tạo là kiểu dữ liệu mình mong muốn , vừa là giá trị ban đầu
console.log(tongTien);

var numbers =[100,200,220,200,480];

totalCoin = numbers.reduce(function(total,number){
    return total + number;
}) //  giá trị khởi tạo ban đầu lấy ra vẫn là số 
// lần đầu chạy là 100 +200;

console.log(totalCoin);

// làm phẳng mảng
var depthArray = [1,2,3,[4,3], 5, 6,2,[3,7,9]];
var flatArray = depthArray.reduce(function(ans,depthItem){
    return ans.concat(depthItem); // nối mảng 
}, [])
console.log(flatArray);


var topics = [
    {
        topic: "front-end",
        courses: [{
            id : 1,
            title: 'react'
        },
            {id : 2,
                title: 'tailwind'
            }
        ]
    },

    {
        topic: "back-end",
        courses: [{
            id : 1,
            title: 'NODEjs'
        },
            {id : 2,
                title: '.Net'
            }
        ]
    },
    
]

var new_Courses = topics.reduce(function(course, topic){
    return course.concat(topic.courses);
}, [])

console.log(new_Courses);