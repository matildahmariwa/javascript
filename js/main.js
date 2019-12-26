
const mySchedules=[];
class Schedule {
    constructor(name, subject, time, day) {
        this.name = name;
        this.subject = subject;
        this.time = time;
        this.day = day;

    }
}



function create() {

    let
        name = document.getElementById("name").value,
        subject = document.getElementById("subject").value,
        time = document.getElementById("time").value,
        day = document.getElementById("day").value,
        table = document.getElementById("table")


    mySchedules.push(new Schedule(name, subject, time, day))


//create object
    let obj = new Schedule(name,subject,time,day);

// Create Row
    let row = `<tr>
               <td>${obj.name}</td>
               <td>${obj.subject}</td>
               <td>${obj.time}</td>
               <td>${obj.day}</td>
             </tr>`;

    table.insertAdjacentHTML("beforeend", row);

}



