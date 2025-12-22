function AsyncFun1(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Data1:",123);
      resolve("success!");
    },5000);
  });
}
function AsyncFun2(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Data2:",456);
      resolve("success!");
    },3000);
  });
}

console.log("Fetching data1....");
let p1 = AsyncFun1();

p1.then((res) =>{
    console.log("Data1 is fetched...",res);
    console.log("Now Fetching data2....");
    let p2 = AsyncFun2();
    p2.then((res)=>{
        console.log("Data2 is fetched...",res);
    });
});
//or.. we can directly use this..

setTimeout(() =>{
  console.log("Fetching Data again using second method:> \nFetching data1....");
  AsyncFun1().then((res) =>{
    console.log("Data1 is fetched...",res);
    console.log("Now Fetching data2....");
    return AsyncFun2();
  }).then((res)=>{
    console.log("Data2 is fetched...",res);
  });
},7000);