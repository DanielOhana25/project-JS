import { Class } from "./class.js";
import { Teacher } from "./teacher.js";
import { Student } from "./student.js";

let header = document.getElementById("header");
header.style.textAlign = "center";
header.style.height = "100px";
let addClassBtn = document.createElement("button");
addClassBtn.style.border = "10px solid brown";
addClassBtn.style.borderRadius = "2rem";
addClassBtn.style.backgroundColor = "burlywood";
addClassBtn.style.width = "100px";
addClassBtn.style.height = "100px";
addClassBtn.style.textAlign = "center";
addClassBtn.innerText = "Add Class";
header.appendChild(addClassBtn);

addClassBtn.addEventListener("click", addClass);

function addClass() {
  let container = document.getElementById("container");
  let form = document.createElement("form");
  form.id = "classForm";
  form.style.border = "5px solid brown";
  form.style.backgroundColor = "white";
  form.style.height = "150px";
  form.style.width = "200px";
  form.style.textAlign = "center";
  form.style.marginLeft = "auto";
  form.style.marginRight = "auto";
  form.style.marginTop = "50px";
  form.style.position = "absolute";
  form.style.zIndex = "1";
  form.style.top = "100px";
  form.style.left = "525px";

  let ageClassLabel = document.createElement("label");
  ageClassLabel.htmlFor = "class";
  ageClassLabel.textContent = "Class : ";
  let ageClass = document.createElement("input");
  ageClass.type = "text";
  ageClass.id = "ageClassValue";
  ageClass.style.boxShadow = "0 1px 2px 0";
  ageClass.style.borderRadius = "2rem";
  ageClass.style.width = "120px";
  ageClass.style.marginTop = "10px";
  form.appendChild(ageClassLabel);
  form.appendChild(ageClass);

  let dayLabel = document.createElement("label");
  dayLabel.htmlFor = "day";
  dayLabel.textContent = "Day : ";
  let day = document.createElement("select");
  day.id = "dayValue";
  day.name = "day";
  day.style.boxShadow = "0 1px 2px 0";
  day.style.borderRadius = "2rem";
  day.style.marginTop = "10px";

  let sunday = document.createElement("option");
  sunday.value = "sunday";
  sunday.textContent = "Sunday";
  let monday = document.createElement("option");
  monday.value = "monday";
  monday.textContent = "Monday";
  let tuesday = document.createElement("option");
  tuesday.value = "tuesday";
  tuesday.textContent = "Tuesday";
  let wednesday = document.createElement("option");
  wednesday.value = "wednesday";
  wednesday.textContent = "Wednesday";
  let thursday = document.createElement("option");
  thursday.value = "thursday";
  thursday.textContent = "Thursday";

  form.appendChild(dayLabel);
  form.appendChild(day);
  day.appendChild(sunday);
  day.appendChild(monday);
  day.appendChild(tuesday);
  day.appendChild(wednesday);
  day.appendChild(thursday);

  let space = document.createElement("br");
  let timeLabel = document.createElement("label");
  timeLabel.htmlFor = "time";
  timeLabel.textContent = "Time :    ";
  let time = document.createElement("input");
  time.type = "time";
  time.id = "timeValue";
  time.style.boxShadow = "0 1px 2px 0";
  time.style.borderRadius = "2rem";
  time.style.marginTop = "10px";
  time.style.marginBottom = "10px";
  form.appendChild(space);
  form.appendChild(timeLabel);
  form.appendChild(time);

  let addBtn = document.createElement("button");
  addBtn.type = "submit";
  addBtn.textContent = "Add";
  addBtn.style.display = "block";
  addBtn.style.marginLeft = "auto";
  addBtn.style.marginRight = "auto";
  addBtn.style.borderRadius = "2rem";
  addBtn.style.backgroundColor = "burlywood";
  addBtn.style.fontSize = "16px";
  addBtn.style.border = "1px solid brown";
  addBtn.style.boxShadow = "0 1px 2px 0";
  form.appendChild(addBtn);

  form.addEventListener("submit", () => {
    // let idExists = classs.some((classId) => {
    //   return classId === ageClass;
    // });
    // if (idExists) {
    //   alert("Eroor : The name of the class Exist");
    // } else {
    let newClass = new Class();
    newClass.ageClass = document.getElementById("ageClassValue").value;
    newClass.day = document.getElementById("dayValue").value;
    newClass.time = document.getElementById("timeValue").value;
    classs.push(newClass);
    setClassItem();
    history.go(0); // display the new class directly on the screen of the user
    // }
  });

  container.appendChild(form);
}

let classs = JSON.parse(localStorage.getItem("class")) || [];
function setClassItem() {
  localStorage.setItem("class", JSON.stringify(classs));
}

function displayClass() {
  classs.forEach((element) => {
    let container = document.getElementById("container");
    container.style.position = "absolute";
    container.style.marginTop = "10px";
    let newDiv = document.createElement("button"); // need to be 'div' butthere are a problem with the display
    newDiv.innerHTML = `<br>${element.ageClass}<br> ${element.day}<br>${element.time}<br>`;
    newDiv.style.marginRight = "5px";
    newDiv.style.marginLeft = "5px";
    newDiv.style.border = "10px solid brown";
    newDiv.style.borderRadius = "2rem";
    newDiv.style.backgroundColor = "burlywood";
    newDiv.style.width = "300px";
    newDiv.style.height = "300px";
    newDiv.style.textAlign = "center";
    newDiv.style.marginBottom = "10px";
    newDiv.style.fontSize = "36px";
    newDiv.style.position = "relative";
    container.appendChild(newDiv);

    let addStudentBtn = document.createElement("button");
    addStudentBtn.style.borderRadius = "2rem";
    addStudentBtn.style.backgroundColor = "burlywood";
    addStudentBtn.style.fontSize = "16px";
    addStudentBtn.style.border = "1px solid brown";
    addStudentBtn.style.boxShadow = "0 1px 2px 0";
    addStudentBtn.textContent = "+ Add student";
    addStudentBtn.addEventListener("click", () => {
      let form = document.createElement("form");
      form.id = "studentForm";
      form.style.border = "5px solid brown";
      form.style.backgroundColor = "white";
      form.style.height = "auto";
      form.style.width = "200px";
      form.style.textAlign = "center";
      form.style.marginLeft = "auto";
      form.style.marginRight = "auto";
      form.style.marginTop = "50px";
      form.style.position = "absolute";
      form.style.zIndex = "1";
      form.style.top = "100px";
      form.style.left = "525px";

      let nameLabel = document.createElement("label");
      nameLabel.htmlFor = "name";
      nameLabel.textContent = "Name : ";
      let name = document.createElement("input");
      name.type = "text";
      name.id = "nameStudentValue";
      name.style.boxShadow = "0 1px 2px 0";
      name.style.borderRadius = "2rem";
      name.style.width = "120px";
      name.style.marginTop = "10px";
      form.appendChild(nameLabel);
      form.appendChild(name);

      let telLabel = document.createElement("label");
      telLabel.htmlFor = "tel";
      telLabel.innerHTML = `<br>${"Tel : "}`;
      let tel = document.createElement("input");
      tel.type = "number";
      tel.id = "telStudentValue";
      tel.style.boxShadow = "0 1px 2px 0";
      tel.style.borderRadius = "2rem";
      tel.style.width = "120px";
      tel.style.marginTop = "10px";

      form.appendChild(telLabel);
      form.appendChild(tel);

      let emailLabel = document.createElement("label");
      emailLabel.htmlFor = "email";
      emailLabel.innerHTML = `<br>${"Email : "}`;
      let email = document.createElement("input");
      email.type = "email";
      email.id = "emailStudentValue";
      email.style.boxShadow = "0 1px 2px 0";
      email.style.borderRadius = "2rem";
      email.style.width = "120px";
      email.style.marginTop = "10px";

      form.appendChild(emailLabel);
      form.appendChild(email);

      let genderLabel = document.createElement("label");
      genderLabel.htmlFor = "gender";
      genderLabel.textContent = "Gender : ";
      let gender = document.createElement("select");
      gender.id = "genderValue";
      gender.name = "gender";
      gender.style.boxShadow = "0 1px 2px 0";
      gender.style.borderRadius = "2rem";
      gender.style.marginTop = "10px";

      let boy = document.createElement("option");
      boy.value = "boy";
      boy.textContent = "Boy";
      let girl = document.createElement("option");
      girl.value = "girl";
      girl.textContent = "Girl";

      form.appendChild(genderLabel);
      form.appendChild(gender);
      gender.appendChild(boy);
      gender.appendChild(girl);

      let payLabel = document.createElement("label");
      payLabel.htmlFor = "pay";
      payLabel.innerHTML = `<br>${"have To pay (nis) : "}`;
      let pay = document.createElement("input");
      pay.type = "number";
      pay.id = "payValue";
      pay.style.boxShadow = "0 1px 2px 0";
      pay.style.borderRadius = "2rem";
      pay.style.width = "50px";
      pay.style.marginTop = "10px";

      form.appendChild(payLabel);
      form.appendChild(pay);

      let addBtn = document.createElement("button");
      addBtn.type = "submit";
      addBtn.textContent = "Add";

      addBtn.style.display = "block";
      addBtn.style.marginTop = "10px";
      addBtn.style.marginLeft = "auto";
      addBtn.style.marginRight = "auto";
      addBtn.style.marginBottom = "10px";
      addBtn.style.borderRadius = "2rem";
      addBtn.style.backgroundColor = "burlywood";
      addBtn.style.fontSize = "16px";
      addBtn.style.border = "1px solid brown";
      addBtn.style.boxShadow = "0 1px 2px 0";
      form.appendChild(addBtn);

      form.addEventListener("submit", () => {
        let newStudent = new Student();
        newStudent.name = document.getElementById("nameStudentValue").value;
        newStudent.tel = document.getElementById("telStudentValue").value;
        newStudent.email = document.getElementById("emailStudentValue").value;
        newStudent.gender = document.getElementById("genderValue").value;
        newStudent.pay = document.getElementById("payValue").value;

        let newClass = new Class(element.ageClass, element.day, element.time);
        newClass.teacher = element.teacher;
        newClass.students = element.students;
        newClass.setStudent(newStudent);

        let nameClass = element.ageClass;
        classs = classs.filter((element4) => {
          return element4.ageClass !== nameClass;
        });
        localStorage.setItem("class", JSON.stringify(classs));
        classs.push(newClass);
        setClassItem();
      });

      container.appendChild(form);
    });
    newDiv.appendChild(addStudentBtn);

    let showBtn = document.createElement("button");
    let iconEye = document.createElement("img");
    iconEye.src = "/imgs/eye.png";
    iconEye.alt = "show";
    showBtn.append(iconEye);
    showBtn.style.backgroundColor = "burlywood";
    showBtn.style.border = "none";
    showBtn.style.position = "absolute";
    showBtn.style.top = "10px";
    showBtn.style.left = "10px";

    showBtn.addEventListener("click", () => {
      newDiv.innerText = ""; //there are a little bug that the class i choose become on the top of the container and the other down, but it's nice.

      let studentsDetails = document.createElement("div");
      let teacherBtn = document.createElement("button");
      teacherBtn.innerHTML = `Teacher : ${element.teacher.name}`;
      teacherBtn.style.borderRadius = "2rem";
      teacherBtn.style.backgroundColor = "burlywood";
      teacherBtn.style.fontSize = "16px";
      teacherBtn.style.border = "1px solid brown";
      teacherBtn.style.boxShadow = "0 1px 2px 0";
      teacherBtn.style.marginBottom = "10px";
      teacherBtn.addEventListener("click", () => {
        newDiv.style.fontSize = "16px";
        newDiv.style.height = "300px";
        newDiv.innerHTML = `Name : ${element.teacher.name}<br><br> Tel: ${element.teacher.tel}<br><br> Salary: ${element.teacher.salary}<br><br>`;
      });
      newDiv.appendChild(teacherBtn);
      element.students.forEach((element5) => {
        let studentBtn = document.createElement("button");
        studentBtn.innerHTML += `${element5.name}`;
        studentBtn.style.display = "block";
        studentBtn.style.borderRadius = "2rem";
        studentBtn.style.backgroundColor = "burlywood";
        studentBtn.style.fontSize = "16px";
        studentBtn.style.border = "1px solid brown";
        studentBtn.style.boxShadow = "0 1px 2px 0";
        studentBtn.style.marginBottom = "10px";
        studentBtn.addEventListener("click", () => {
          newDiv.style.fontSize = "16px";
          newDiv.style.height = "300px";
          newDiv.innerHTML = `Name : ${element5.name}<br><br> Tel: ${element5.tel}<br><br> Email: ${element5.email}<br><br> Gender: ${element5.gender}<br><br> Pay: ${element5.pay}`;
          let returnBtn = document.createElement("button");
          returnBtn.style.backgroundColor = "burlywood";
          returnBtn.style.border = "none";
          returnBtn.style.position = "absolute";
          returnBtn.style.top = "10px";
          returnBtn.style.left = "10px";
          let iconBack = document.createElement("img");
          iconBack.src = "/imgs/arrow-left-circle.png";
          iconBack.alt = "back";
          returnBtn.addEventListener("click", () => {
            history.back();
          });

          returnBtn.appendChild(iconBack);
          newDiv.insertBefore(returnBtn, newDiv.firstChild);
        });
        studentsDetails.appendChild(studentBtn);
      });
      newDiv.style.height = "auto";
      newDiv.appendChild(studentsDetails);
      newDiv.appendChild(addStudentBtn);
      addTeacherBtn.textContent = "Edit teacher";
      newDiv.appendChild(addTeacherBtn);
    });

    newDiv.appendChild(showBtn);

    let clearClassBtn = document.createElement("button");
    let iconCancel = document.createElement("img");
    iconCancel.src = "/imgs/close-circle.png";
    iconCancel.alt = "cancel";
    clearClassBtn.appendChild(iconCancel);
    clearClassBtn.style.backgroundColor = "burlywood";
    clearClassBtn.style.border = "none";
    clearClassBtn.style.position = "absolute";
    clearClassBtn.style.top = "10px";
    clearClassBtn.style.right = "10px";

    clearClassBtn.addEventListener("click", () => {
      let nameClass = element.ageClass;
      classs = classs.filter((element2) => {
        return element2.ageClass !== nameClass;
      });
      localStorage.setItem("class", JSON.stringify(classs));
      container.removeChild(newDiv);
    });

    newDiv.insertBefore(clearClassBtn, newDiv.firstChild); //displat clearClassBtn on the top of each div of class

    let addTeacherBtn = document.createElement("button");
    addTeacherBtn.style.borderRadius = "2rem";
    addTeacherBtn.style.backgroundColor = "burlywood";
    addTeacherBtn.style.fontSize = "16px";
    addTeacherBtn.style.border = "1px solid brown";
    addTeacherBtn.style.boxShadow = "0 1px 2px 0";
    addTeacherBtn.style.marginLeft = "20px";
    addTeacherBtn.textContent = "+ Add teacher";
    addTeacherBtn.addEventListener("click", () => {
      let form = document.createElement("form");
      form.id = "teacherForm";
      form.style.border = "5px solid brown";
      form.style.backgroundColor = "white";
      form.style.height = "150px";
      form.style.width = "200px";
      form.style.textAlign = "center";
      form.style.marginLeft = "auto";
      form.style.marginRight = "auto";
      form.style.marginTop = "50px";
      form.style.position = "absolute";
      form.style.zIndex = "1";
      form.style.top = "100px";
      form.style.left = "525px";

      let nameLabel = document.createElement("label");
      nameLabel.htmlFor = "name";
      nameLabel.textContent = "Name : ";
      let name = document.createElement("input");
      name.type = "text";
      name.id = "nameValue";
      name.style.boxShadow = "0 1px 2px 0";
      name.style.borderRadius = "2rem";
      name.style.width = "120px";
      name.style.marginTop = "10px";
      form.appendChild(nameLabel);
      form.appendChild(name);

      let telLabel = document.createElement("label");
      telLabel.htmlFor = "tel";
      telLabel.innerHTML = `<br>${"Tel : "}`;
      let tel = document.createElement("input");
      tel.type = "number";
      tel.id = "telValue";
      tel.style.boxShadow = "0 1px 2px 0";
      tel.style.borderRadius = "2rem";
      tel.style.width = "120px";
      tel.style.marginTop = "10px";

      form.appendChild(telLabel);
      form.appendChild(tel);

      let salaryLabel = document.createElement("label");
      salaryLabel.htmlFor = "salary";
      salaryLabel.innerHTML = `<br>${"Salary (nis) : "}`;
      let salary = document.createElement("input");
      salary.type = "number";
      salary.id = "salaryValue";
      salary.style.boxShadow = "0 1px 2px 0";
      salary.style.borderRadius = "2rem";
      salary.style.width = "50px";
      salary.style.marginTop = "10px";

      form.appendChild(salaryLabel);
      form.appendChild(salary);

      let addBtn = document.createElement("button");
      addBtn.type = "submit";
      addBtn.textContent = "Add";

      addBtn.style.display = "block";
      addBtn.style.marginTop = "10px";
      addBtn.style.marginLeft = "auto";
      addBtn.style.marginRight = "auto";
      addBtn.style.borderRadius = "2rem";
      addBtn.style.backgroundColor = "burlywood";
      addBtn.style.fontSize = "16px";
      addBtn.style.border = "1px solid brown";
      addBtn.style.boxShadow = "0 1px 2px 0";
      form.appendChild(addBtn);

      form.addEventListener("submit", () => {
        let newTeacher = new Teacher();
        newTeacher.name = document.getElementById("nameValue").value;
        newTeacher.tel = document.getElementById("telValue").value;
        newTeacher.salary = document.getElementById("salaryValue").value;

        let newClass = new Class(element.ageClass, element.day, element.time);
        newClass.students = element.students;
        newClass.setTeacher(newTeacher);

        let nameClass = element.ageClass;
        classs = classs.filter((element3) => {
          return element3.ageClass !== nameClass;
        });
        localStorage.setItem("class", JSON.stringify(classs));
        classs.push(newClass);
        setClassItem();
      });

      container.appendChild(form);
    });
    newDiv.appendChild(addTeacherBtn);
  });
}

displayClass();
