//返回一个boolean值，看能否分组-》相同的个数才能
export default=(arr)=>{
//先定一个空数组 group放相同的元素个数用
let group=[]
//定义一个空对象，临时的，用于记录相同的值
let tmp={}
//遍历数组
arr.forEach(item=>{
  tmp[item]=tmp[item]?tmp[item]+1:1
})
for(let v of Object.values(tmp)){
  group.push(v)
}
//写求最大公约数的方法
 let gcd=(a,b)=>{
 if(b===0){
  return a;
 }else{
 return gcd(b,a%b)
 }
 }
 while(group.length>1){
  let a= group.shift();
  let b=group.shift();
  let v= gcd(a,b)
  if(v===1){
    return false;
  }else{
    group.unshift(v)
  }
 }
  return group.length?group[0]>1:false
}
