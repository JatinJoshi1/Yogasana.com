const firebaseConfig = {
  apiKey: "AIzaSyABkhuAfw04irzVAoL88W10I-oA2HRa7-0",
  authDomain: "notice-board-a3a7f.firebaseapp.com",
  databaseURL: "https://notice-board-a3a7f-default-rtdb.firebaseio.com",
  projectId: "notice-board-a3a7f",
  storageBucket: "notice-board-a3a7f.appspot.com",
  messagingSenderId: "773569603794",
  appId: "1:773569603794:web:b7516a962a950d28b4650b"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
var bookmarkedNotices = JSON.parse(localStorage.getItem('bookmarkedNotices')) || [];
// Fetch existing notices from Firebase Realtime Database
database.ref("notices").on("value", function(snapshot) {
    var noticesDiv = document.getElementById("notices");
    noticesDiv.innerHTML = ""; // Clear previous notices

    snapshot.forEach(function(childSnapshot) {
        var notice = childSnapshot.val();
        var noticeDiv = document.createElement("div");
        noticeDiv.classList.add("nd");
        noticeDiv.innerHTML = "<i class='bx bx-bookmark' style='color:rgba(251,161,0,0.53)'  ></i><h3>" + notice.heading + "</h3><p>" + notice.content + "</p><p>" + notice.dateTime + "</p>";

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            deleteNotice(childSnapshot.key);
        })

        noticeDiv.appendChild(deleteButton);
        noticesDiv.appendChild(noticeDiv);

    });
});
