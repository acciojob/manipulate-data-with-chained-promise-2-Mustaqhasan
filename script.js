let arr = [1, 2, 3, 4];

const myPromise =(arr)=>{return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(arr);
  }, 3000);
})}
const first =(data)=>{return new Promise((resolve, reject) => {
  setTimeout(() => {
    data=data.filter(item=>item%2==0)
    resolve(data)
  }, 1000);
})}
const second=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            data=data.map((item=>item*2))
            resolve(data)
        },2000)
    })
}
myPromise(arr).then((mess) => {
  return first(mess)
}).then((even)=>{
    return second(even)
}).then((multi)=>{
    // console.log(multi)
	let res=""
	for(let i=0;i<multi.length; i++){
		res+=multi[i]+","
	}
	document.getElementById("output").innerText=res;
})