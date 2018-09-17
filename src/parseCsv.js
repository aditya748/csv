const fs = require('fs'); 
const csv = require('csvtojson'); 
const inputFilePath="csvFile.csv";
const outfileFilePath="csvToJsonFile.json";

module.exports.convertToCsv=function(){
    csv()
    .fromFile(inputFilePath)
    .then((jsonObj)=>{
        if(jsonObj.length>0){
            var json={};
            json[jsonObj[0].key]=jsonObj[0].value;
            jsonObj[0]=json;
            var obj=jsonObj.reduce((prev,next)=>{
                prev[next.key]=next.value;
                return prev;
            });
            fs.writeFile(outfileFilePath, JSON.stringify(obj), { flag: 'w' }, function (err) {
                if (err) throw err;
                console.log("Csv successfully uploaded");
            });
        }
    });
}