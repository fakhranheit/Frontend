const removeUrlAnchor=(a)=>{
    var pisah=a.split('?')
    pisah.pop()
    return pisah
}
console.log(removeUrlAnchor('www.codewars.com?about'))