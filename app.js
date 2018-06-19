function makeNewRow(trainName, destination, firstTrain, frequency){
var militaryTime = "HH:MM";
var convertedTime = moment(militaryTime);
console.log(convertedTime);


   var newRow = $('<tr>'+
   'class="col-2">'+trainName+'</td>'+
   '<td class="col-2">'+destination+'</td>'+
   '<td class="col-2">'+frequency+'</td>'+
   '<td class="col-2">'+firstTrain+'</td>'+
   '</tr>');
   $("#employee-list").append(newRow);
}

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
  
  let database = firebase.database();

$("#submit").on("click", function(event){
    event.preventDefault();
    var data = {
    trainName : $("#trainName").val(),
    destination : $("#destination").val(),
    firstTrain : $("#firstTrain").val(),
    frequency : $("#frequency").val(),
    };
    database.ref().push(data);            
});

database.ref().on("child_added", function(snapshot){
    snapshot.val().name
    
});