let arr=[
    "i want to eat food at 10am",
    "i want to meet balayya bau at 12pm",
    "i want to meet kcr at 10pm"
]


function display(){
    let trs="";
    for(let ind in arr){
        trs+=`
            <tr>
                <td>${arr[ind]}</td>
                <td>
                    <button onclick="deleteTask(${ind});">delete</button>
                </td>
                <td>
                    <button onclick="editTask(${ind});">edit</button>
                </td>
            </tr>
        `
    }
    let refElem=document.getElementById("ref");
    refElem.innerHTML=`
        <table border="1px">
            ${trs}
        </table>
    `;
   
}


display();


function deleteTask(index){
    let rev=confirm("want to delete??");// confirmation from user 
    if(rev==false){
        return;
    }


    arr.splice(index,1);
    display();
    alert("deleted!!!");
}


function addTask(e){
    e.preventDefault();// to prevent refresh
    let allForms=document.forms;// to get all forms
    let myFormElem=allForms.myForm; // to get my form (name)
    let textBoxElem=myFormElem.task;// to get textBox (name=task)
    let task=textBoxElem.value;// get value from textbox
    arr.push(task);
    display();
    textBoxElem.value="";// remove value form textBox
    alert("added!!!");
}




function editTask(ind){
   
    let enteredTask = prompt(arr[ind]);// take input from user
    arr[ind]=enteredTask;
    display();
}

