function addStudent() {
    // FOR REGISTER STUDENT IN LIST
    
    const register = document.getElementById("register");
    register.style.display = "block";
    register.className = "visible1";
    }
    
    var children = [];
    function registerUser() {
        // TO ADD STUDENT'S DETAIL IN TABLE/LIST
        event.preventDefault();
        
        const form = document.getElementById("register");
        form.style.display = "none";
        
        var student = {
            rollNum: document.getElementById("rollNum").value,
            name: document.getElementById("name").value,
            fName: document.getElementById("FName").value,
            age: document.getElementById("sample2").value,
            class: document.getElementById("sample3").value,
            address:document.getElementById("sample4").value,
            mobile: document.getElementById("sample5").value,
            attendents: ["P"]            
        } 
         console.log(student);
        
        children.push(student);
        console.log(children); 

        localStorage.setItem("children", JSON.stringify(children)); //SAVE TO LOCAL STORAGE
     
    //  getting form local storage
    var data = localStorage.getItem("children");
    
    var x = JSON.parse(data)

    for (var i = 0; i < x.length; i++) {
        console.log(x[i])
    
        const tBody = document.getElementById("tBody").innerHTML += `
        <tr id=${"age_" + x[i].age}>
          <td>${x[i].rollNum}</td>
          <td onClick = check()> ${x[i].name}</td>
          <td>${x[i].fName}</td>
          ${x[i].attendents.map((attendents,index) => `<td id=${"rollNum" + x[i].rollNum + (index + 1)} ondblclick=change1(${"rollNum" + x[i].rollNum + (index + 1)}) onClick=change(${"rollNum" + x[i].rollNum + (index + 1)})>${attendents}</td>`)}
          </tr>`
    }
    
        // EMPTY THE FIELDS
        document.getElementById("rollNum").value = "";
        document.getElementById("name").value = "";
        document.getElementById("FName").value = "";
        document.getElementById("sample2").value = "";
        document.getElementById("sample3").value = "";
        document.getElementById("sample4").value = "";
        document.getElementById("sample5").value = "";
}
    
    function logOut() {    
    // console.log()
        const logOut = document.getElementById("abc");
        logOut.style.display = "none";

        const form = document.getElementById("logInBtn");
        form.style.display = "block"
        
    }  
    
function logIn(id) {
    event.preventDefault();
    var adminName = document.getElementById('adminName').value;
    var password = document.getElementById('password').value;
    console.log(adminName,password)
    if(!adminName && !password ||  adminName !== "admin" && password !== 1){
        alert("Fields Empty OR Password Incorrect")
    }else{

        alert("success")
        
        const form1 = document.getElementById("logInBtn");
                     form1.style.display = "none";
        const table = document.getElementById("abc");
             table.style.display = "block";

    }
 }
 
 function check() {
     window.location.href = "studentDetails.html";
 }

    function change(elem) {
        console.log(elem)
        // FOR CHANGE TO ABSENT
        elem.style.color = "red"
        elem.innerHTML = "A";
    }
    
    function change1(elem) {
        console.log(elem)
        // FOR CHANGE TO ABSENT
        elem.style.color = "green"
        elem.innerHTML = "P";
    }
        
    function newAttendence() {
        var date = new Date();
        var date1 = date.getDate();
        var month = (date.getMonth() + 1);
        var acctualDate = date1 + "/"+ month; 
       
        // making th cell
        var thCell = document.getElementById("tHeader").innerHTML +=`
        <th>${acctualDate}</th>
        `

        // getting data
      var get = JSON.parse(localStorage.getItem("children"));
         
      console.log(get);
    
    //    adding coloumn to all students
    for (var q = 0; q < get.length; q++) {
        
                get[q].attendents.push("P");
        
        document.getElementById( "age_" + get[q].age).innerHTML = '';
        
            var tRow1 = document.getElementById( "age_" + get[q].age).innerHTML += `
        
            <td>${get[q].rollNum}</td>
        
            <td onClick=check()>${get[q].name}</td>
        
            <td>${get[q].fName}</td>
            ${get[q].attendents.map((attendent,index) => `<td id=${"rollNum" + get[q].rollNum + (index)} ondblclick=change1(${"rollNum" + get[q].rollNum + (index)}) onClick=change(${"rollNum" + get[q].rollNum + (index)})>${attendent}</td>`).join(' ')}
           `
            }
            localStorage.setItem("children", JSON.stringify(get)); //SAVE TO LOCAL STORAGE
        
}


// Image slider code

var totalImg = 6;
var currentImg = 0;

slider()
function slider() {
    if(totalImg === currentImg) {
        currentImg = 0;
    }

    for(let i = 0; i <totalImg; i++) {
        if(i === currentImg)  document.getElementById(i).className = "show";
    
        else document.getElementById(i).className = "hide";
    }
    currentImg++;
}

setInterval(function(){
    slider();
}, 2000)

