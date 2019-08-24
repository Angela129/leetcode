# 题目分析
##  三次遍历思想
### 将输入的字符串转成数组<br>将输入的第二个和第三个值push到一个数组里面<br>遍历第一个数组，如果这个数组的第i项和第二个数组的第0项相等，并且这个数组的第i+1项和第二个数组的第1项相等，则判断一下第i+2有没有值，如果有就push到一个新数组中。<br>最后，返回这个数组
```
  var findOcurrences = function(text, first, second) {
  let arr=text.split(' ')
  let input=[]
  let output=[]
  input.push(first,second)
   for(let i=0;i<arr.length;i++){
       if(arr[i]==input[0]&&arr[i+1]==input[1]&&Boolean(arr[i+2])!=false){
           output.push(arr[i+2])
       }
   }
    return output
};
