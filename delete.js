function ondelete(td){
    row=td.parentElement.parentElement;
    document.getElementById('tab').deleteRow(row.rowIndex);
    reset();
}

function reset(){
   document.getElementById('Name').value="";
   document.getElementById('Contact').value="";
   document.getElementById('Email').value="";
   document.getElementById('Address').value="";
   document.getElementById('languages').value="";
   document.getElementById('gender').value="";
   document.getElementById('Country').value="";
}