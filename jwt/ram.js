const { listen } = require("express/lib/application")
const { Types } = require("mongoose")

var projects = [
    { id: 1,name: "Ram's Project", userId: 1 ,progress:89},
    { id: 2, name: "Samyak's Project", userId: 2 ,progress:19},
    { id: 3, name: "Ritesh's Project", userId: 3 ,progress:23}
  
]

 



let project=projects.filter(p=>p.progress>90)
console.log(project)


data Types
list
dictionary

javascript 