

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let slideShow = document.getElementById("slideShow");
let stop = document.getElementById("stop");
let img = document.images[0];
let count = 1;
let intervalId = null;
next.onclick = rightSlide;

previous.onclick = () => {
  count--;
  if (count < 1) count = 3;
  img.src = `images/${count}.jpeg`;
};


function rightSlide() {
  count++;
  if (count > 3) count = 1;
  img.src = `images/${count}.jpeg`;
}

slideShow.onclick = () => {
    intervalId =setInterval(rightSlide, 1500);
};

stop.onclick = () => { 
clearInterval(intervalId);
intervalId = null;
};



//-----------------------------------------------------------------------------------------------------
//Q2

function addToTable() {
    let table = document.getElementsByTagName("table")[0];

    let name = document.getElementById("studentName").value;
    let grade = document.getElementById("studentGrade").value;

    let nameError = document.getElementById("nameError");
    nameError.style.display="none";

    let gradeError = document.getElementById("gradeError");
    gradeError.style.display="none";

   
        if (name === ""){
            nameError.innerText = "StudentName should not be empty";
            nameError.style.display="inline";
            }
      //name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        name= name.replace(/^./, name[0].toUpperCase())

        if (grade ==="" || isNaN(grade) || grade>100 || grade<0){
            
            gradeError.innerText="StudentGrade should be between 0:100";
            gradeError.style.display="inline"; 
            grade.style.display="none";      
        }

        let tr = document.createElement("tr");

        let name_td = document.createElement("td");
            name_td.innerText = name;
        tr.appendChild(name_td);

        let grade_td = document.createElement("td");
        grade_td.innerText = grade;
        tr.appendChild(grade_td)

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText="delete";
        tr.appendChild(deleteBtn);

    table.tBodies[0].appendChild(tr);

    document.getElementById("studentName").value= "";
    document.getElementById("studentGrade").value= "";

}


//NOTE: we can use for loop to append elements and in this way we make name for all of them -> getelementbyName advantage : redududancy , disadvantage : time of looping
// another way to get element by ID in seperate variables , disadvantage memory wast because of variables storage


 filter.onchange= () =>{
    let rows = document.querySelectorAll("#myTable tbody tr");
    for (row of rows){
        let grade = row.children[1].innerText;
        if (filter.value == "greater")
            row.style.display =grade > 60 ? "":"none";
        else if (filter.value == "less")
            row.style.display =grade < 60 ? "":"none";
        else if (filter.value == "all")
            row.style.display ="";
    }
}

// sort.onchange = () =>{
//     const sort = document.getElementById('sort');
//     const myTable = document.getElementById('myTable');

//     let rows = Array.from(document.querySelectorAll("#myTable tbody tr"))
    
//     const colIndex ={
//         name :0,
//         grade :1,
//     };
//     rows.sort( (a,b) =>{
//         let aValue = a.children[colIndex[sort.value]].innerText;
//         let bValue = b.children[colIndex[sort.value]].innerText;

//         if (sort.value == "grade"){
//             aValue = parseFloat(aValue);
//             bValue = parseFloat(bValue);
//         }

//         if (aValue < bValue) return -1;
//         if (aValue > bValue) return 1;
//         return 0;

//     });
//     myTable.tBodies[0].innerHTML = "";
//     rows.forEach( (row) => myTable.tBodies[0].appendChild(row));
// };