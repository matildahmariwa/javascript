
describe("should add elements to the array",()=> {

    beforeEach(function(){
        let operand=`<div id ="operand"> <input class="form-control" name="name" id="name">
            <input class="form-control"  id="subject"></input>
            <input class="form-control" id="day" type="date" >
            <input class="form-control" id="time" type="time">

            <button  class="btn btn-primary" type="submit" id="add">Create</button>
`

        document.body.insertAdjacentHTML(
            'afterbegin',operand  );

    });



    it("should push the elements to the array", () => {
        const mySchedules=[1,2,3];
        mySchedules.push(4);
        expect(mySchedules).toEqual([1,2,3,4])
    })

    it('should return display elements on the table', function() {
        document.getElementById('name').value = 'matelda';
        document.getElementById('subject').value =  'kuwaiti';
        document.getElementById('day').value =  'monday';
        document.getElementById('time').value =  '9.00';
        document.getElementById('add').click();

    });
});
