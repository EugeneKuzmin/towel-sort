
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(matrix){
    let m = matrix.reduce((a,l,i)=>{
      if(i%2){
          a.push(...l.reverse())
      }else {
          a.push(...l)
      }
      return a
    },[])
    return m
  }else{
    return []
  }



}
