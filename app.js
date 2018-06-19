
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDywFNm1aiXSq0302R97DtvxnJx4g7Zo5I",
    authDomain: "train-schedule-db50c.firebaseapp.com",
    databaseURL: "https://train-schedule-db50c.firebaseio.com",
    projectId: "train-schedule-db50c",
    storageBucket: "train-schedule-db50c.appspot.com",
    messagingSenderId: "831746273144"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();

$("#submit").on("click", function(event){
    event.preventDefault();

    var trainName = $("#trainName").val();
    var destination = $("#destination").val();
    var firstTrain = $("#firstTrain").val().trim();
    var frequency = $("#frequency").val().trim();

    var newTrain = {
      trainName: trainTrainName,
      destination: trainDestination,
      firstTrain: trainFirstTrain,
      frequency: trainFrequency,
    };
    database.ref().push(newTrain);

    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrain").val("");
    $("#frequency").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    var trainTrainName = childSnapshot.val().trainName;
    var trainDestination = childSnapshot.val().destination;
    var trainFirstTrain = childSnapshot.val().firstTrain;
    var trainFrequency = childSnapshot.val().frequency;

    //var empStartPretty = moment.unix().format("HH:mm")

    $("#trainList > tbody").append("<tr><td>" + trainTrainName + "</td><td>" + trainDestination + "</td><td>" +
    trainFirstTrain + "</td><td>" + trainFrequency + "</td></tr>");

    
});