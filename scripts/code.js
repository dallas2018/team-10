// This is to import applications from Firebase to Google sheets

function writeSheets() {
  var ss = SpreadsheetApp.openById("spreadsheet id");
  var firebaseUrl = "firebase link";
  var secret = "secret-key-here";
  var sheet = ss.getSheets()[0];
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);
  var data = base.getData();
  var keys = Object.keys(data["users"]);
  var sheetRow = [];
  var entryKeys = ["firstName", "lastName"];
  for (index in keys) {
    sheetRow = [];
    for (i in entryKeys) {
      if (data["users"][keys[index]][entryKeys[i]] == "" || !data["users"][keys[index]][entryKeys[i]]) {
        sheetRow.push("none specified");
      } else {
        sheetRow.push(data["users"][keys[index]][entryKeys[i]]);
      }
    }
    sheet.appendRow(sheetRow);  
  }
}
