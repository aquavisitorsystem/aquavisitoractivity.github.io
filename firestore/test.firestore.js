describe("Aqua Visitor Management System - Activity Log", () => {
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
             var checkin = doc.data().checkin;
             var checkout = doc.data().checkout;
            
            if (checkin.length === 0) {
  checkin = "";
            }else {
                mydate = doc.data().checkin;
                checkin = ", Checkin"; // + doc.data().checkin;
            }

            if (checkout.length === 0) {
   checkout = "";
        }else {
                checkin = "";   
                mydate = doc.data().checkout;
                checkout = ", Checkout";// + doc.data().checkout;
            }
            //text.substring(0, 15);
            peeps.push("<br>" + mydate.toLocaleString() + checkin + checkout + ", " + doc.data().firstname + " " + doc.data().lastname  + ", " + doc.data().company + ", Visiting: " + doc.data().message);
        });
        document.getElementById("message").innerHTML = "Current activity: " +  "<br>" + peeps.join(" ");
       
    });
         });
});

