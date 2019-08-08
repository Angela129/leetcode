export default=(arr,n)=>{
let match=0;//计数器
//补一个零在最后
arr.push(0)
//边界问题（当第一个是0的时候 如果第二个也是0 那就可以种下一棵树）
for (let i=0;i<arr.length-1;i++){
  if(arr[i]===0){
    if(i===0&&arr[1]===0){
       match++;
       i+=1;
    }else if(arr[i-1]===0&&arr[i+1]===0){
      match ++
      i+=1;
    }
  }
}
return n<=match
}
