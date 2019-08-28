# 题目分析
##  由于是有序的，所以想到对撞指针
###  方法一：对撞指针
```
var twoSum = function(numbers, target) {
  let left=0;
  let right=numbers.length-1;
  while(left<right){
    if(numbers[left]+numbers[right]===target){
    return [left+1,right+1]
  }else if(numbers[left]+numbers[right]>target){
    right-=1
  }else{
    left+=1
  }
}
}
return []
}
```

### 方法二：哈希表
```
var twoSum = function(numbers, target) {
    let hash=new Map()
    for(let i in numbers){
        hash.set(numbers[i],i)
    }
    for(let j=0;j<numbers.length;j++){
        if(hash.has(target-numbers[j])&&j!=hash.get(target-numbers[j])){
           return [j+1,parseInt(hash.get(target-numbers[j]))+1]
        }
    }
    return []
};
```
