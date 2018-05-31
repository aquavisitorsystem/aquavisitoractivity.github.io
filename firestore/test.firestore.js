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
        apiKey: '### FIREBASE API KEY ###',
        authDomain: '### FIREBASE AUTH DOMAIN ###',
        projectId: '### CLOUD FIRESTORE PROJECT ID ###',
      }
      // [START_EXCLUDE silent]
      ,"persisted_app"
      // [END_EXCLUDE]
      );
    });

    


        it("should get all users", () => {
            return output =
            // [START get_all_users]
            db.collection("users").get().then((querySnapshot) => {
                .orderBy("date")
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                });
            });
            // [END get_all_users]
        });

        
        it("should loop through a watched collection", (done) => {
            // This is not a typo.
            var unsubscribe =

            // [START listen_for_users]
            db.collection("users")
                .onSnapshot(function(snapshot) {
                    snapshot.forEach(function (userSnapshot) {
                        console.log(userSnapshot.data())
                    });
                });
            // [END listen_for_users]

            setTimeout(() => {
                unsubscribe();
                done();
            }, 1500);
        });
});
