window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("promsie1")
	},Math.floor(Math.random()*5)+1000)
})
let promise2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("promsie2")
	},Math.floor(Math.random()*5)+1000)
})
let promise3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("promsie3")
	},Math.floor(Math.random()*5)+1000)
})
let promise4=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("promsie4")
	},Math.floor(Math.random()*5)+1000)
})
let promise5=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("promsie5")
	},Math.floor(Math.random()*5)+1000)
})

const myarr=[promise1,promise2,promise3,promise4,promise5]

Promise.any(myarr).then((res)=>document.getElementById("output").innerHTML=res);

