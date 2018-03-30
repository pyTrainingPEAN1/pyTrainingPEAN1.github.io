//current energy consumption update picture
function update_data(id, number) {
    $("#"+String(id)).text(String(number));
    console.log("update data!!!!");

}
$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
        apiKey: "AIzaSyDev8sdqkLW7jKrYC4o3JCkvjfaV3FANCE",
        authDomain: "pytrainingpean1.firebaseapp.com",
        databaseURL: "https://pytrainingpean1.firebaseio.com",
        projectId: "pytrainingpean1",
        storageBucket: "pytrainingpean1.appspot.com",
        messagingSenderId: "1065995023447"
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref();

    var num_frtuRef = firebase.database().ref("overall");

    num_FRTURef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else {
           update_data(data.key, parseInt(data.val()))
        }
    });

  

});
