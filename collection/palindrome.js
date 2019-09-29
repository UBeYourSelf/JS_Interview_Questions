//Check if a given string is a palindrome "racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account
const palindrome = (str) =>{
  let counter = 0
  let arr1 = str.replace(/\s/g,'').split('')
  let arr1Len = arr1.length
  for(let i=0; i<=arr1Len/2;i++){
    if(arr1[i] === arr1[arr1Len-i-1]){
      counter++
    }
    else{
      return false
    } 
  }
  return counter === Math.round(arr1Len/2)
}

console.log(palindrome('race car'))
