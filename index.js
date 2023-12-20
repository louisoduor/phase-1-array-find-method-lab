// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
 
  ]
function superbowlWin(record) {
    const wRecord = record.find(record => record.result === "W");
  
    return wRecord ? wRecord.year : undefined;
  }