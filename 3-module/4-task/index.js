let data = [
  {
    "balance": "$1,825.65",
    "picture": "https://placehold.it/32x32",
    "age": 21,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana",
},
{
    "balance": "$1,490.15",
    "picture": "https://placehold.it/32x32",
    "age": 20,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana",
},
{
    "balance": "$1,450.15",
    "picture": "https://placehold.it/32x32",
    "age": 32,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana",
},
]
function showSalary(data,age) {
 let userNames =[];
for (let user of data){

userNames.push(`
${user.name},
${user.balance}\\${user.favoriteFruit} `)
}
  return userNames;
}
console.log(showSalary(data))