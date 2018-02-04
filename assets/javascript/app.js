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


    var database = firebase.database(); 

//console.log("connected to html")

console.log(moment())

//////////////////////////////////////////////////////
/* 
submit employee info to firebase 
    declare variables that retrieve form input data
    push the employee object to the firebase database
    */
    $(document).on("click", "#add-train-btn", function(e){
        e.preventDefault()

        // Gather input from form
        var trainName = $("#train-name-input").val().trim()
        var destName  = $("#destination-input").val().trim()
        var trainTime = $("#trainTime-input").val().trim()
        var freqInput = $("#frequency-input").val().trim()
       
        //console.log(trainName, destName, trainTime, freqInput)


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

          //console.log(snapshot.val());
        /*
            1. get copy of new object
            2. calculate nextArrival and minutesAway
            3. use JQuery to append to DOM
        */

      

              // Getting the frequency of each train
  
              // Retriving the start time of each train
             
              // Converting the first train to leave
              
              // Current time

              // Difference in time
             
              // Time apart

    
        var trainName = snapshot.val().trainName;
        var destName =  snapshot.val().destName;
        var trainTime =  snapshot.val().trainTime; 
        console.log(trainTime);

        // console.log(moment().hours(splitTime[0]).minutes(splitTime[1]))]
        var freqInput = snapshot.val().freqInput;    //convert newTrain.freqInput to int first 
        var currentTime = moment().format("HH:mm");
        console.log(currentTime);
        var nextArrival = null; 
        var minutesAway = null;


        // subtravt hours and subrat min both need to be ints to do this

        /*ie 20:00 - 13:10
                ||
         20 00 - 13 10 */
        //var result = currentTime - moment(newTrain.trainTime).format("HH:mm"); 


        //console.log(result);

        // reslut = (result / newTrain.freqInput).ceil();//  round this up 
        // reslut = result * newTrain.freqInput;
        // result = result / 60
        // nextArrival = result + newTrain.trainTime // result maybe a deial
        // minutesAway = currentTime - nextArrival;

        

        var table = $("tbody");

        table.append(`<tr>
                        <td>${trainName}</td>
                        <td>${destName}</td>
                        <td>${freqInput}</td>
                        <td>${nextArrival}</td>
                        <td>${minutesAway}</td>
                    </tr>`);


    })


});