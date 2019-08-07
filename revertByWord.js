let revertByWord=(s)=>{
 return result=s.split(' ').map(item=>{
  return item.split('').reverse().join('')
 }).join(' ')
}
