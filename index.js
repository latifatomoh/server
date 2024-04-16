const fs = require ("fs")
// const idrisFiles = fs.readFileSync("./files/idris.txt", "utf-8")
// console.log(idrisFiles)


// const toheedFiles =  fs.readFileSync("./files/toheed.txt", "utf-8")
// console.log(toheedFiles)

// const victorFiles = fs.readFileSync("./files/victor.txt", "utf-8")
// console.log(victorFiles)

const nike = 'accountant'
fs.writeFileSync("./files/david.txt", nike)

const abu = 'businessman'
fs.writeFileSync("./files/femi.txt", abu)

fs.readFile("./files/zee.txt", "utf-8", (error, data) => {
if (error){
    console.log(error)
} else {
    console.log(data)
}
})


fs.readFile("./files/Ayo.txt", "utf-8", (error, data) => {
    if (error){
        console.log(error)
    } else {
        console.log(data)
    }
    })
    



    
