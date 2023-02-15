// find min and max value
// when given a string of integers

function solution(s) {
    let a = s.split(' ').sort(function(a,b){return a - b})
    return `${a[0]} ${a[a.length-1]}`
}
