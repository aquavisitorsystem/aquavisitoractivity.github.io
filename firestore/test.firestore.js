describe("Aqua Visitor Management System - Activity Report", () => {
    var db;
    before(() => {
        var config = {
            apiKey: "AIzaSyC_Wl1RgIWazRk3OhodD5QQTykOcIyZMNs",
            authDomain: "aquacheckin-e0b0b.firebaseapp.com",
            projectId: "aquacheckin-e0b0b"
        };
        var app = firebase.initializeApp(config);
        db = firebase.firestore(app);
        //firebase.firestore.setLogLevel("debug");
    });

    it("initialize database", () => {
      // [START initialize_persistence]
      firebase.initializeApp({
            apiKey: "AIzaSyC_Wl1RgIWazRk3OhodD5QQTykOcIyZMNs",
            authDomain: "aquacheckin-e0b0b.firebaseapp.com",
            projectId: "aquacheckin-e0b0b"
      }
      // [START_EXCLUDE silent]
      ,"persisted_app"
      // [END_EXCLUDE]
      );
    });
     it("active listening turned on", () => {
   db.collection("log").orderBy("date", "desc")
    .onSnapshot(function(querySnapshot) {
        var peeps = [];
        querySnapshot.forEach(function(doc) {
            var mydate = new Date(doc.data().date);
            peeps.push("<br>" + mydate.toLocaleString() + ", Visiting: " + doc.data().message + ", Visitor: " + doc.data().firstname + " " + doc.data().lastname + ", Company: " + doc.data().company + ", Checkin: " + doc.data().checkin + ", Checkout: " + doc.data().checkout);
        });
        document.getElementById("message").innerHTML = "Current activity: " +  "<br>" + peeps.join(" ");
       
    });
         });
});

