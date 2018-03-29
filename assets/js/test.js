//current energy consumption update picture
function update_data(id, number) {
    $("#"+String(id)).text(String(number));
}


$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      apiKey: "AIzaSyBVgNwV9f1r-UijuKqDgeLuQeGOOYVWAas",
      authDomain: "pythontraining-ac906.firebaseapp.com",
      databaseURL: "https://pythontraining-ac906.firebaseio.com",
      projectId: "pythontraining-ac906",
      storageBucket: "pythontraining-ac906.appspot.com",
      messagingSenderId: "456795489232"
    };
    firebase.initializeApp(config);

    // var ref = firebase.database().ref();
    //
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

    total_load_activePower = 0;

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'member_profit') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'order') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'issue_report') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'ipo_margin') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'payment') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'logistic') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'avg_order') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'transaction') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'revenue') {
            update_data(data.key,parseInt(data.val()));
        }



        else {
            console.log("need to parse this key " + data.key)
        }
    });


});
