const http = require("http")
    const port = 8060
  const fs = require("fs")

  const homepages = fs.readFileSync("./pages/home.html", "utf-8")
  const aboutpages = fs.readFileSync("./pages/about.html", "utf-8")
  const testimonialpages = fs.readFileSync("./pages/Testimonial.html", "utf-8")
  const contactpages = fs.readFileSync("./pages/contact.html", "utf-8")
  const errorpages =  fs.readFileSync("./pages/home.html", "utf-8")


    const server = http.createServer((request, response) => {
        let path = request.url
        if(path === "/" || path === "/home"){
            response.end(homepages)
        } else if(path === "/about"){
            response.end(aboutpages)
        } else if(path === "/pages"){
            response.end(pages)
        } else if(path === "/testimonial"){
            response.end(testimonialpages)
        } else if(path === "/contact"){
            response.end(contactpages)
        } else {
            response.end(errorpages)
        }
    })



    server.listen(port, () => {
        console.log("server started successfully")
    })
