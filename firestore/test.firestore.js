describe("firestore", () => {
    var db;
    before(() => {
        var config = {
            apiKey: "AIzaSyBu4FaHCylofeNVO5gHkyS4IYFcYZLOiA4",
            authDomain: "aquaguide2018.firebaseio.com",
            projectId: "aquaguide2018"
        };
        var app = firebase.initializeApp(config);
        db = firebase.firestore(app);
        //firebase.firestore.setLogLevel("debug");
    });

    it("should be initializable with persistence", () => {
      // [START initialize_persistence]
      firebase.initializeApp({
         apiKey: "AIzaSyBu4FaHCylofeNVO5gHkyS4IYFcYZLOiA4",
            authDomain: "aquaguide2018.firebaseio.com",
            projectId: "aquaguide2018",
      }
      // [START_EXCLUDE silent]
      ,"persisted_app"
      // [END_EXCLUDE]
      );
    });
     it("Lets get data", () => {
   db.collection("users")
    .onSnapshot(function(querySnapshot) {
        var peeps = [];
        querySnapshot.forEach(function(doc) {
            peeps.push("<br>" + doc.data().device + "," + doc.data().date + "," + doc.data().visited);
        });
        document.write("Current activity: ", peeps.join(", "));
    });
         });
});

