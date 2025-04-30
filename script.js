

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
        
            
        }

        let tr = document.createElement("tr");

        let name_td = document.createElement("td");
            name_td.innerText = name;
        tr.appendChild(name_td);

        let grade_td = document.createElement("td");
        grade_td.innerText = grade;
        tr.appendChild(grade_td)


    table.tBodies[0].appendChild(tr);

    document.getElementById("studentName").value= "";
    document.getElementById("studentGrade").value= "";

}