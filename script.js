const url = "https://jsonplaceholder.typicode.com/posts/1";

const btn=document.getElementById("btn")
const outputDiv = document.getElementById("output");
//your JS code here. If required.
async function getData(callback){
	try{
		const data=await fetch(url);
		const jsonData=await data.json();
		callback(jsonData)
	}catch(err){
		console.log("error",err)
	}
}
function callbackFunction(jsonData) {
	outputDiv.innerHTML=`<h3>${jsonData.title}</h3>`
}

btn.addEventListener("click",()=>{
	getData(callbackFunction)
})
