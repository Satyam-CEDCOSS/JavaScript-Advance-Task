let alnum = ["ab4","d8","c6","b7"]
let num = []
let al = []
let x;
let obj = {}
let regex1 = new RegExp(/\d+/g)
let regex2 = new RegExp(/^[A-Za-z]/)
for (let i = 0; i< alnum.length; i++) {
    num.push(alnum[i].match(regex1)[0])
}
for (let i = 0; i< alnum.length; i++) {
    al.push(alnum[i].match(regex2)[0])
    // console.log(alnum[i].match(regex2)[0])
}
for (var i = 0; i < alnum.length; i++) {
    obj[al[i]] = num[i];
}
function sortObj(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
}
console.log(sortObj(alnum))
console.log(sortObj(obj))

