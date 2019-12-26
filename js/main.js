
const mySchedules=[];
class Schedule {
    constructor(name, subject, time, day) {
        this.name = name;
        this.subject = subject;
        this.time = time;
        this.day = day;
    }
}



function create(){

    let
        name = document.getElementById("name").value,
        subject = document.getElementById("subject").value,
        time = document.getElementById("time").value,
        day = document.getElementById("day").value


    mySchedules.push(new Schedule(name,subject,time,day))

}

//create object
let arr = new Schedule();






