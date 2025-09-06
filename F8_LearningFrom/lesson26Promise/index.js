// cần hiểu hàm/ công cụ sinh ra để làm gì từ đó mới học cái mới cái workframe, vai trò của nó, thấu hiểu nỗi đau của nó

//Sync- đồng bộ
// Async

// chỉ dùng promise khi gặp callback hell

//Promise cần new Promise và Executor, Promise có 3 trạng thái
//1. Pendding : gây memory leak, lúc không resolve hoặc reject
//2. Fulfilted: chạy thành công resolve và chạy vào then
//3. Rejected : lọt vào catch


// tạo đối tượng Promise(executor) là 1 hàm thực thi trước khi nhận promise 
var promise1 = new Promise(function(resolve,reject){ // thành công, thất bại
    //logic (nghiệp vụ mình cần làm), dẫn logic đến thành công hay thất bại

    //thành công

    // thất bại

    // --------------------------
    //fake call API trong phần thành công
    resolve([
        {
            id: 1,
            name: 'js'
        }
    ]) // gặp resolve trước là return luôn


    // Uncaught (in promise) Loi nếu có reject mà không có catch
    reject('Loi')  // các giá trị trong đây trả về làm tham số cho hàm tiếp theo

    // luôn phải gọi 1 trong 2 resolve hoặc reject -> nếu không bị treo -> memory leak
});

// lời hứa khi thực hiện thành công thì sao, hoặc thất bại thì bắt lỗi như nào
promise1
    .then(function(courses){ // khi resolve được gọi
        console.log('Successfully');
        console.log(courses);
    })
    .catch(function(error){ // khi reject được gọi
        console.log('Failure');
        console.log(error)
    })
    .finally(function(){ // 1 trong 2 thằng resolve hoặc reject được gọi thì cái này được gọi
        console.log('Done');
    })





var promise2 = new Promise(function(resolve,reject){
    
    resolve(); // giá trị trả về là undefined vì không có tham số
})


promise2
    .then(function(){
        return 1; // return bất kì không phải promise thì chạy tiếp then
    })
    //.then() luôn trả về một Promise mới. Giá trị 1 sẽ được wrap thành Promise.resolve(1) và truyền xuống then tiếp theo.
    .then(function(data){
        console.log(data, 'gia tri dau');
        return data+1;
    })
    .then(function(data){
        console.log(data);
        return data+1;
    })

var promise3 = new Promise(function(resolve,reject){
    
    resolve();
})


promise3
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(resolve([1,2,3]),3000);
        }); 
    })
    .then(function(data){
        console.log(data, 'gia tri xuat hien sau 3s'); // giá trị undefined do hàm trên không trả về giá trị gì -> bị đổi thành mảng
        return data;
    })
    .catch(function(){
        console.log('error');
    })
    .finally(function(){
        console.log('ket thuc tu promise3');
    })


function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    })
}

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return sleep(1000);
    })
    .then(function(){
        console.log(3, 'Tu sleep');
        return sleep(1000);
    })


function sleepError(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    })
}

sleepError(1000)
    .then(function(){
        console.log(1);
        return sleepError(1000);
    })
    .then(function(){
        console.log(2);
        return new Promise(function(resolve,reject){
            reject('co loi');
        })
    })
    .then(function(){
        console.log(3);
        return sleepError(1000); // Không chạy tiếp cái 3
    })
    .catch(function(value){
        console.log(value)
    })

// các cái trên là full promise
// ta có thể chỉ dùng resolve hoặc reject hoặc all


// trong các Thư viện: output luôn là một promise

var promise4 = Promise.resolve('Success');

promise4
    .then(function(value){
        console.log('result: ', value);
    })
    .catch(function(error){ 
        console.log('err: ',error);
    })

// muốn chạy // , 2 thằng không phụ thuộc nhau nhưng cần kết quả 2 thằng để làm gì đó -> dùng all
var promise5 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1]);
        },2000);
    }
);
// 2 cái này không phụ thuộc nhau nhưng chạy tuần tự, hãy cho nó chạy đồng thời thì tiết kiệm thời gian hơn
var promise6 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3]);
        },5000);
    }
);
// muốn nối 2 mảng 
Promise.all([promise5,promise6]) // nhận đối số là mảng chứa các promise-> sau khi các promise thực thi xong thì .then thực thi
    // .then(function(result){
    //     // console.log(result);
    //     var result1 = result[0];
    //     var result2 = result[1];
    //     console.log( result1.concat(result2));
    //     // return result1.concat(result2)

    // }
    //cách ghi thứ 2 ES6
    .then(function([result1,result2]){
        console.log( result1.concat(result2));
    }
)

var promise7 = Promise.reject('Loi trong promise.all');
Promise.all([promise5,promise7])
    .then(function([result1,result2]){
        console.log( result1.concat(result2));
    })
    .catch(function(err){
        console.log('lỗi từ Promise.all')
    })