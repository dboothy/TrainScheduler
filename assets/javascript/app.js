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
$(document).on("click", "#add-train-btn", function(e){
    e.preventDefault()

    // Gather input from form
    var trainName = $("#train-name-input").val()
    var destName = $("#destination-input").val()
    var trainTime = $("#trainTime-input").val()
    var freqInput = $("#frequency-input").val()
   
    console.log(trainName, destName, trainTime, freqInput)


    // Insert new object into database
    database.ref().push({
        trainName: trainName, 
        destName: destName,
        trainTime: trainTime,
        freqInput: freqInput
    }) 
    
})


// Instructions on what to do when a new object is inserted into database
database.ref().on("child_added", function(snapshot){
    /*
        1. get copy of new object
        2. calculate nextArrival and minutesAway
        3. use JQuery to append to DOM
    */
    const newTrain = {
        trainName: snapshot.val().trainName,
        destName: snapshot.val().destName,
        trainTime: snapshot.val().trainTime,
        freqInput: snapshot.val().freqInput
    }



    // .trainTime = Math.abs(moment(newTrain.freqInput).diff(moment.now(), 'months'))

    // newTrain.totalBilled = newTrain.monthsWorked * newTrain.rate;

    // console.log(newTrain)


    // snapshot = copy of object added to database

    // Use moment to calculate next arrival and how many minutes away

    // var nextArrival = moment.things
    // var minutesAway = use moment to find difference in time beteen now and nextArrival (moment.now())

    // var table = $("tbody")

    // table.append("<tr><td>"+snapshot.val().trainName+"</td>" +"<td>" +snapshot.val().destName +"</td>"+"<td>"+snapshot.val().freqInput+"</td>")

        // +"<td>"+newEmployee.monthsWorked+"</td><td>"+newEmployee.rate+"</td><td>"+newEmployee.totalBilled+"</td>" );


})




})