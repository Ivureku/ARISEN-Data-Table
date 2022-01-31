window.onload = () =>{
    
    let input = {
        name: [], 
        gender: [], 
        age: [],
    }

    table = document.querySelector(".table");

    function showTable(){

        let header, row;

        

        header = "<thead>";
        header += "<tr>";
        header += "<th>No.</th>";
        header += "<th>Name</th>";
        header += "<th>Gender</th>";
        header += "<th>Age</th>";
        header += "</tr>";
        header += "</thead>";

        row = "<body>";
        row += "<tr>";
        for(let i = 0; i < input.name.length; i++){
            row_num = i + 1;

            row += "<td>"+row_num+"</td>";
            row += "<td>"+input.name[i] +"</td>";
            row += "<td>"+input.gender[i] +"</td>";
            row += "<td>"+input.age[i] +"</td>";
            row += "</tr>"
        }
        row += "</body>";

        table.innerHTML = "<table>"+header+row+"</table>";
    }
    


    document.getElementById("add").addEventListener("click", () => {

    let name = document.getElementById("name");
    let gender = document.getElementById("gender");
    let age = document.getElementById("age");

    if ((name.value != null && name.value != "") && (gender.value != null && (gender.value.toLowerCase() == "male" || gender.value.toLowerCase() == "female")) && (age.value > 0)) {
        input.name.push(name.value);
        input.gender.push(gender.value);
        input.age.push(age.value);
        showTable();
    }
    })


    document.getElementById("removeLine").addEventListener("click", () => {
        
        let remove = Number(document.getElementById("delete").value) - 1;
       
        if (document.getElementById("delete").value > 0) {
        input.name.splice(remove, 1);
        input.gender.splice(remove, 1);
        input.age.splice(remove, 1);
        
        showTable();
        }
    })

    
}
    
