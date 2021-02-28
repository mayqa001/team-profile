var fs = require("fs");
let page = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>team profile</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <h1 style="text-align: center; background-color: rgb(248, 113, 113); height:200px; padding-top: 70px; color: white;">My team</h1>
    <div class="container">
            
`;

function createCard(team) {
  var cards = ` <div class="row">`;
  for (let i = 0; i < team.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      cards += `</div>`;
      cards += ` <div class="row" style = "margin-top: 50px;">`;
    }
    if (team[i].officeNumber !== "") {
      cards += `
      <div class ="col">
      <div class="card" style="width: 18rem;">
          <div class="card-header">
            Name: ${team[i].name}
            <h4>Manager</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${team[i].id}</li>
            <li class="list-group-item">Email: ${team[i].email}</li>
            <li class="list-group-item">Office Number: ${team[i].officeNumber}</li>
          </ul>
        </div>
      </div>
            
            `;
    } else if (team[i].github !== "") {
      cards += `
      <div class ="col">
      <div class="card" style="width: 18rem;">
          <div class="card-header">
          Name: ${team[i].name}
          <h4>Engineer</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${team[i].id}</li>
            <li class="list-group-item">Email: ${team[i].email}</li>
            <li class="list-group-item">Github: ${team[i].github}</li>
          </ul>
        </div>
      </div>
            
        `;
    } else {
      cards += `
      <div class="col">
      <div class="card" style="width: 18rem;">
          <div class="card-header">
            Name: ${team[i].name}
            <h4>Intern</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${team[i].id}</li>
            <li class="list-group-item">Email: ${team[i].email}</li>
            <li class="list-group-item">School: ${team[i].school} </li>
          </ul>
        </div>
      </div>
            
        `;
    }
  }

  return (
    cards +
    ` </div>
  </div>
</body>

</html>`
  );
}

function createHtml(team) {
  let content = page + createCard(team);
  fs.writeFile("index.html", content, function (err) {
    if (err) throw err;
    console.log("page is created!");
  });
}

module.exports.createHtml = createHtml;
