export default=(str)=>{
//现将电话号码的字母做一个映射，数字是数组的脚标，字母是对应的值
//如果str为空 返回一个空数组
if(str.length<1) return []
let map=['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
//如果就按了一个数字，就直接把这个字符串拆开成数组
if(str.length<2)_return map[str].split('')
//将输入的数字字符串转成数组
let num=str.split('')
//将map遍历，将结果返回到一个code的新数组里面，数组里就是映射的字符串
let code=[]
num.forEach(item=>{
    if(map[item]){
     code.push(map[item])
    }
})
let comb=(arr)=>{
 let tmp=[];
 //arr永远只关心数组的前两位的组合
 //最外层是第一个元素
 for(let i=0;i<arr[0].length;i++){
    for(let j=0;j<arr[1].length;j++){
    tmp.push(`${arr[0][i]}${arr[1][j]}`)
  }
 }
 arr.splice(0,2,tmp)
 if(arr.length>1){
 comb(arr)
 }else{
 return tmp
 }
return arr[0]
}
return comb(code)
}
