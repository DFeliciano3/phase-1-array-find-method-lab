// code your solution here
function superbowlWin(record){
    let recordResult = record.find(recordYear => recordYear.result === "W")
    if (recordResult === undefined){

    }
    else{
        return recordResult.year
        }
    }