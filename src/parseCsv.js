const fs = require('fs'); 
const csv = require('csvtojson'); 
const inputFilePath="csvFile.csv";
const outfileFilePath="csvToJsonFile.json";

module.exports.convertToCsv=function(){
    csv()
    .fromFile(inputFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
        if(jsonObj.length>0){
            let json={};
            json[jsonObj[0].key]=jsonObj[0].value;
            jsonObj[0]=json;
            let obj=jsonObj.reduce((prev,next)=>{
                prev[next.key]=next.value;
                return prev;
            });
            fs.writeFile(outfileFilePath, JSON.stringify(obj), { flag: 'w' }, function (err) {
                if (err) throw err;
                console.log("It's saved!");
            });
        }
    });
}