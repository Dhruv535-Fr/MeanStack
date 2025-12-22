const promise = new Promise((resolve,reject) => {
  console.log("This is Promise");
  resolve(123);
});
console.log(promise);

function GetData(id,GetNextData){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Data:",id);
      resolve("success!");
    },2000);
  });
};
GetData(33457); // Wait for few sec then complete promise then print data...
//promise completed..


//.then for resolve/.catch for reject ...
const GetPromise = () =>{
    return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Data:",567);
      resolve("success!");
    },5000);
  });
};

let newPromise = GetPromise();

//in .then you can also pass res parameter by default that used in function...resolve("success!"); here success passed.
newPromise.then((res) =>{
  console.log("Promise fulfilled!",res);
});

//if get rejected then it will not run.. so we can use .catch that also contain err parameter default....

