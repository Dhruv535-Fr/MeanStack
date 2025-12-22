const url = "https://jsonplaceholder.typicode.com/todos/1/users";

const GetData = async ()=>{
    console.log("Getting Data...");
    const response = await fetch(url); // fetch(url,[options]) by default its get..
    console.log(response); // json format..
    let data = await response.json();
    console.log(data);
}
GetData();