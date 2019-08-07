//方便用Jest做单元测试
export default(str)=>{
    //定义一个空数组用来存放满足条件的子串
    let arr=[]
    //提取出来的match方法
    let match(str)=>{
      //先取出来第一个数字要么是0要么是1(用正则匹配)
      let j=str.match(/^(0+|1+)/)[0];
      //如果第一个数是1就变成0如果是0就变成1（用和1的异或来做返回的是一个数字），将数字转成字符串 然后补全
      let o=(j[0]^1).toString().repeat(j.length)
      //子串是一个j和o组成的动态的一个新的字符串
      let reg=new RegExp(`^(${j}${o)`)
      //验证是否符合条件 用test方法
      if(reg.test(str)){
          return RegExp.$1//返回第一个结果
          }else{
            return ''
              }
      
      }
    //循环遍历传进来的字符串，将满足匹配条件match（）的内容push到那个定义好的空数组里返回出来
    for(let i=0;len=str.length-1;i++){
    let sub=match(str.slice(i));//slice方法是截取字符串的
    if(sub){
      arr.push(sub)
      }
    }
    return arr
}
