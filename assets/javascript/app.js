$(document).ready(function(){  


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
    
    //----------------------------------------------------//
    /////////// Set ups connection to Firebase Database /////
    var database = firebase.database(); 

    //------------------on click submit btn event------------------------//
    $(document).on("click", "#add-train-btn", function(event){
        event.preventDefault()

        // Gather input from form
        var trainName = $("#train-name-input").val().trim();
        console.log(trainName)
        var destName  = $("#destination-input").val().trim();
        console.log(destName)
        var trainTime = $("#trainTime-input").val().trim();
        console.log(trainTime)
        var freqInput = $("#frequency-input").val().trim();
        console.log(freqInput)
       
        //console.log(trainName, destName, trainTime, freqInput)

        //on click event assign values of inputs to object
        var newTrain = {
            trainName: trainName, 
            destName:  destName,
            trainTime: trainTime,
            freqInput: freqInput
        }
        // Insert new object into database
        database.ref().push(newTrain); 
    })


        // Instructions on what to do when a new object is inserted into database
        database.ref().on("child_added", function(snapshot){
            


            //on event child_added in firebase, capture object values with jQuery
            var trainName = snapshot.val().trainName;
            var destName =  snapshot.val().destName;
            var trainTime =  snapshot.val().trainTime; 
            var freqInput = snapshot.val().freqInput; 
            //test current time format HH:mm moment.js
            console.log()   
            var currentTime = moment().format("HH:mm");
            //moment.js - takes difference of current time and "first train's time and formats time display"
            var diff = moment().diff(moment(trainTime,"hh:mm A"),"m");
            console.log(diff)
            //modulus aka remainder of difference and frequency of train stops
            var modTime = diff % freqInput;
            //subtract answer from frequency of trainstops to get minutes away
            var minutesAway = freqInput - modTime

            // console.log(minutesAway)

            //add the minutes away (train is to the next stop) to the current time in minutes format

            nextArrival = moment().add(minutesAway, "m");

            //convert those minutes back into AM/PM format

            var actualArrive = moment(nextArrival).format("hh:mm A")

            
            //use JQuery to append values to DOM
            var table = $("tbody");

            table.append(`<tr>
                            <td>${trainName}</td>
                            <td>${destName}</td>
                            <td>${freqInput}</td>
                            <td>${actualArrive}</td>
                            <td>${minutesAway}</td>
                        </tr>`);


    })


});