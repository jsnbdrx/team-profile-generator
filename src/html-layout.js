const { default: build } = require("jest-leak-detector");

//function that creates variables containing html markup templates for each role type
const printProfiles= data => {
 
    //maps manager data into the associated template literal
    const manager = data.manager.map(function(data) {
        let managerHtml = `
        <div class="card border col-sm m-4 p-0 shadow" style="min-width: 18rem; max-width:max-content;">
            <div class="bg-primary justify p-2 text-light">
                <h2>${data.name}</h2>
                <h4><i class="bi bi-cup-fill"></i> Manager<h4>
            </div>
            <div class="bg-light p-4">
                <p class="border" style="font-size: large">ID: ${data.id}</p>
                <p class="border" style="font-size: large">Email: <a href="mailto:${data.email}">${data.email}</a></p>
                <p class="border mb-0">Office Number: ${data.officeNumber}</p>
            </div>
        </div>
        `
        return managerHtml
    });

    //maps engineer data into the associated template literal
    const engineer = data.engineer.map(function(data) {
        let engineerHtml = `
        <div class="card border col-sm m-4 p-0 shadow" style="min-width: 18rem; max-width:max-content;">
            <div class="bg-primary justify p-2 text-light">
                <h2>${data.name}</h2>
                <h4><i class="bi bi-eyeglasses"></i> Engineer<h4>
            </div>
            <div class="bg-light p-4">
                <p class="border" style="font-size: large">ID: ${data.id}</p>
                <p class="border" style="font-size: large">Email: <a href="mailto:${data.email}">${data.email}</a></p>
                <p class="border mb-0"> Github Profile: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></p>
            </div>
        </div>
        `
        return engineerHtml
    })

    //maps intern data into the associated template literal
    const intern = data.intern.map(function(data) {
        let internHtml = `
        <div class="card border col-sm m-4 p-0 shadow" style="min-width: 18rem; max-width:max-content;">
            <div class="bg-primary justify p-2 text-light">
                <h2>${data.name}</h2>
                <h4><i class="bi bi-pencil-fill"></i> Intern<h4>
            </div>
            <div class="bg-light p-4">
                <p class="border" style="font-size: large">ID: ${data.id}</p>
                <p class="border" style="font-size: large">Email: <a href="mailto:${data.email}">${data.email}</a></p>
                <p class="border mb-0"> University: ${data.school}</p>
            </div>
        </div>
        `
        return internHtml
    })
    //add the outputs of all 3 functions into 1
    const team = manager + engineer + intern;
    //return output of profile functions
    return team

}

//exports markup with profiles injected in body
module.exports = buildHTML => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
            <!-- Bootstrap Font Icon CSS -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
            <title>My Team - Team Profile Generator</title>
        </head>
        <body>
            <header style="height:10rem" class="d-flex bg-danger pt-1 mb-5 justify-content-center align-items-center">
                <h1 class="text-light m-0">My Team</h1>
            </header>
                <div class="container d-flex flex-wrap justify-content-center" style="min-width: 75vw;">
                    <div class="row col-8 flex-wrap justify-content-center">
                        ${printProfiles(buildHTML)}
                    </div>
                </div>
        </body>
        </html>    
        `
}