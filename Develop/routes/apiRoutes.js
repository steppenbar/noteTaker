const fs = require("fs");
var data = require("../db/db.json");

//GET need to fill in
module.exports = function(app) {
   
  
    app.get("/api/notes", function(req, res) {
        fs.readFile("./db/db.json", "utf8", (err, notes) => {
if(err) throw err;
let parsedNotes;

try{
    parsedNotes = [].concat(JSON.parse(notes));
} catch (err){
    parsedNotes =[];
}
        }

        
     // res.json();
   // });
  
   



    //POST need to fill in

    app.post("/api/tables", function(req, res) {
       
        if (tableData.length < 5) {
          tableData.push(req.body);
          res.json(true);
        }
        else {
          waitListData.push(req.body);
          res.json(false);
        }
      });
    
      
    
    };
    