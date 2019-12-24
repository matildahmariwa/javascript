let

    EL_name = document.getElementById("name"),
    EL_subject = document.getElementById("subject"),
    EL_time = document.getElementById("time"),
    EL_day = document.getElementById("day"),
    EL_table = document.getElementById("table"), // Our empty table in HTML
    arr = [];                        // One simple array to store object literals


function addTo() {

    // Create an Object literal with out event data
    let obj = {
        name: EL_name.value,
        subject: EL_subject.value,
        time: EL_time.value,
        day: EL_day.value

    };

    // Create Row
    let row = `<tr>
               <td>${obj.name}</td>
               <td>${obj.subject}</td>
                <td>${obj.time}</td>
                 <td>${obj.day}</td>
             </tr>`;

    // Clear inputs
    EL_name.value = EL_day.value = "";

    // Store into Array
    arr.push(obj);

    // Insert row into table
    EL_table.insertAdjacentHTML("beforeend", row);

}
