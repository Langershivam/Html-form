const records = JSON.parse(localStorage.getItem("items"));

 
 let items=[];
 const form = document.querySelector('form');
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateForm();
    const data=new FormData(form);
    const details=Object.fromEntries(data);
    let languages=data.getAll("languages");
    details.languages=languages;
    items.push(details);
    localStorage.setItem("items",JSON.stringify(items));
    alert("Your details are saved in local storage");
    form.reset()
 });


    

document.getElementById("showData").addEventListener("click",function(){
    let i=0;
    const records = JSON.parse(localStorage.getItem("items"));
    let table=document.getElementById("tab");
    table.innerHTML="";
    for(val of records){
        let row=table.insertRow(0);
        for(obj in val){
           let cell=row.insertCell(i);
           cell.innerHTML=obj.toUpperCase();
           cell.setAttribute("id","thead");
           i++; 
        }
        cell=row.insertCell(i);
        cell.innerHTML="EDIT/DELETE";
        cell.setAttribute("id","thead");
        break;
    }
    
    let ro=1;
    let co=0;
    records.forEach((element,index) => {
        let row=table.insertRow(ro);
        for(obj in element){
          let cell=row.insertCell(co);
          cell.innerHTML=element[obj];
         ++co;
        }
        let cell=row.insertCell(co);
       let button= document.createElement("button");
       button.innerHTML="Edit";
       button.setAttribute("value",index);
       cell.appendChild(button);

       button.onclick = (e)=>{
        onEdit(e.target.value);
        
        let updateButton = document.createElement("button");
        updateButton.innerHTML = "Update";
        updateButton.setAttribute("value",index);
        updateButton.onclick = (e) => {
            // console.log(e.target.value)
        updateRecord(e.target.value);
        };
        cell.appendChild(updateButton);
        button.style.display = "none";
    }
        let button2= document.createElement("button");
        button2.innerHTML="DELETE";
        button2.setAttribute("value",index);
       button2.onclick = (e)=>{ondelete(e.target.value);}
       cell.appendChild(button2);
        co=0;
        ++ro;
     }
    );  

 });
 

