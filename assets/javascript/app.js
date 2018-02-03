// Initialize Firebase
    var config = {
    apiKey: "AIzaSyAoVYsXKQOY7CDGb4kxBUqfUUyLPbO9Dzk",
    authDomain: "fir-time-517f2.firebaseapp.com",
    databaseURL: "https://fir-time-517f2.firebaseio.com",
    projectId: "fir-time-517f2",
    storageBucket: "fir-time-517f2.appspot.com",
    messagingSenderId: "66899248071"
    };

    firebase.initializeApp(config);


    var database = firebase.database();

$(document).ready(function(){   

console.log("connected to html")

//////////////////////////////////////////////////////
/* 
submit employee info to firebase 
    declare variables that retrieve form input data
    push the employee object to the firebase database
    */
$(document).on("click", "#add-employee-btn", function(e){
    e.preventDefault()

    // Gather input from form
    var employeeName = $("#employee-name-input").val()
    var roleName = $("#role-input").val()
    var startInput = $("#start-input").val()
    var rateInput = $("#rate-input").val()
    console.log(employeeName, roleName, startInput, rateInput)


    // Insert new object into database
    database.ref().push({
        employeeName: employeeName, 
        roleName: roleName,
        startInput: startInput,
        rateInput: rateInput
    }) 
    
})


// Instructions on what to do when a new object is inserted into database
database.ref().on("child_added", function(snapshot){
    /*
        1. get copy of new object
        2. calculate nextArrival and minutesAway
        3. use JQuery to append to DOM
    */
    const newEmployee = {
        name: snapshot.val().employeeName,
        role: snapshot.val().roleName,
        startDate: snapshot.val().startInput,
        rate: snapshot.val().rateInput
    }

    newEmployee.monthsWorked = Math.abs(moment(newEmployee.startDate).diff(moment.now(), 'months'))

    newEmployee.totalBilled = newEmployee.monthsWorked * newEmployee.rate;

    console.log(newEmployee)


    // snapshot = copy of object added to database

    // Use moment to calculate next arrival and how many minutes away

    // var nextArrival = moment.things
    // var minutesAway = use moment to find difference in time beteen now and nextArrival (moment.now())

    var table = $("tbody")

    table.append("<tr><td>"+snapshot.val().employeeName+"</td>" +"<td>" +snapshot.val().roleName +"</td>"+"<td>"+snapshot.val().startInput+"</td>"+"<td>"+newEmployee.monthsWorked+"</td><td>"+newEmployee.rate+"</td><td>"+newEmployee.totalBilled+"</td>" );


})











})