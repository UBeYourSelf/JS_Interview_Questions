const str1 = 'Mary', str2 ='rbym'
let str11 = str1.toLowerCase().split('').sort().join('')
console.log("str11: ", str11)
let str22 = str2.toLowerCase().split('').sort().join('')
console.log("str22: ", str22)
if(str11 === str22){
    console.log("Its anagram")
}
else{
    console.log("Its not anagram")
}