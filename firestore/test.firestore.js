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

db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        document.write(doc.id, " => ", doc.data());
    });
});
});

