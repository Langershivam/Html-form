// function ondelete(td){
//     row=td.parentElement.parentElement;
//     document.getElementById('tab').deleteRow(row.rowIndex)
// }

// function reset(){
//    document.getElementById('Name').value="";
//    document.getElementById('Contact').value="";
//    document.getElementById('Email').value="";
//    document.getElementById('Address').value="";
//    document.getElementById('languages').value="";
//    document.getElementById('gender').value="";
//    document.getElementById('').value="";
// }

function ondelete(value){
 console.log(records[value]);
//  delete records[value];
// if(value===0){
//     records.unshift();
// }
// else{
//     records.splice(value,value)
// }
//  localStorage.setItem("items",JSON.stringify(records));
console.log(records)
 document.getElementById("showData").click();   
}