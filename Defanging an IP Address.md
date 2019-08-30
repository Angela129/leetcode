# 正则表达式（regular expression）
##  空间复杂度很低但是时间复杂度很高，因此改变策略
```
var defangIPaddr = function(address) {
  //regular expression
   return address.replace(/\./g,'[.]')
};
```
##  方法二，用数组
```
var defangIPaddr = function(address) {
  let arr=address.split('')
  for(let i=0;i<arr.length;i++){
      if(arr[i]==='.'){
          arr[i]='[.]'
      }
  }
    return arr.join('')
};
