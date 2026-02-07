let tasks = [];
let dates = [];      // changed from times
let statusArr = [];

function display() {
    let trs = "";
    for (let ind in tasks) {
        trs += `
        <tr>
            <td>${tasks[ind]}</td>
            <td>${dates[ind]}</td>
            <td>${statusArr[ind]}</td>
            <td>
                <button class="delete" onclick="deleteTask(${ind});">delete</button>
           
                <button class="edit" onclick="editTask(${ind});">edit</button>
            </td>
        </tr>
        `;
    }
    let refElem = document.getElementById("ref");
    refElem.innerHTML = `
        <table class="task-table">
            <tr>
                <th>Task</th>
                <th>Date</th>   <!-- changed -->
                <th>Status</th>
                <th>Actions</th>
                
            </tr>
            ${trs}
        </table>
    `;
}

function deleteTask(index) {
    let rev = confirm("Do you want to delete??");
    if (rev == false) {
        return;
    }
    tasks.splice(index, 1);
    dates.splice(index, 1);     // changed
    statusArr.splice(index, 1);
    display();
    alert("Deleted Successfully!!!");
}

function addTask(e) {
    e.preventDefault();
    let allForms = document.forms;
    let myFormElem = allForms.myForm;

    let textBoxElem = myFormElem.task;
    let task = textBoxElem.value;

    let dateBoxElem = myFormElem.date;   // changed
    let date = dateBoxElem.value;

    let selected = "";
    for (let r of myFormElem.status) {
        if (r.checked) selected = r.value;
    }

    if (!selected) {
        alert("Select status");
        return;
    }

    tasks.push(task);
    dates.push(date);     // changed
    statusArr.push(selected);

    display();
    myFormElem.reset();
    alert("Task Added!!!");
}

function editTask(ind) {
    let enteredTask = prompt("Edit Task: ", tasks[ind]);
    let enteredDate = prompt("Edit Date: ", dates[ind]);   // changed
    let enteredstatus = prompt("Edit status: ", statusArr[ind]);

    if (enteredTask == null || enteredDate == null || enteredstatus == null) {
        return;
    }

    tasks[ind] = enteredTask;
    dates[ind] = enteredDate;   // changed
    statusArr[ind] = enteredstatus;

    display();
}
