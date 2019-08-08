export default=(n)=>{
let final=[]
let method=(n)=>{
  if(n===0){
  return ['0']
  }else if(n===1){
  return ['0','1']
  }else{
  let prev=method(n-1)
  let result=[]
  let max=Math.pow(2,n)-1
  for(let i=0;i<prev.length;i++){
  result[i]=`0${prev[i]}`
  result[max-i]=`1${prev[i]}`
  }
  return result
  }
}
 method(n).forEach(items=>{
 final.push(parseInt(items,2))
 })
return final
}
