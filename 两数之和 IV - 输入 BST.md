# 前序遍历+hash

```
var findTarget = function (root, target) {
  let findTargetFromHash=(root,target,hash)=>{
      if(root===null)return false
      let reminder=target-root.val
      if(hash.hasOwnProperty(reminder))return true
      else hash[root.val]=true
      return findTargetFromHash(root.left,target,hash)||findTargetFromHash(root.right,target,hash)
  }
  return findTargetFromHash(root,target,{})
};

