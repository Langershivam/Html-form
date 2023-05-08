// function savedetails(){
    
//     let Name = document.getElementById("Name").value;
//     let gender;
//     let genderlist=document.querySelectorAll("#gender");
//     for(let item of genderlist){
//         if(item.checked==true){
//             gender=(item.value);
//         }
//     }

//     let Contact = document.getElementById("Contact").value;
//     let Dob = document.getElementById("Dob").value;
//     let Email = document.getElementById("Email").value;
//     let Address = document.getElementById("Address").value;
//     let languages="";
//     let languagesList=document.querySelectorAll("#languages");
//     for(let item of languagesList){
//         if(item.checked == true)
//             {
//                 languages=languages.concat(item.value,",");
//             }
//     }

//    let Hobbies = document.getElementById("Hobbies").value;

//     localStorage.setItem("Name",Name);
//     localStorage.setItem("Gender",gender);
//     localStorage.setItem("Contact",Contact);
//     localStorage.setItem("Dob",Dob);
//     localStorage.setItem("Email",Email);
//     localStorage.setItem("Address",Address);
//     localStorage.setItem("languages",languages);
//     localStorage.setItem("Hobbies",Hobbies);
    
//     // alert("your data is saved in local Storage");
//     // alert(gender)
// }

// function showdetails(){

//  let name=localStorage.getItem("Name");
//  let gender=localStorage.getItem("Gender");
//  let contact=localStorage.getItem("Contact");
//  let dob=localStorage.getItem("Dob");
//  let email=localStorage.getItem("Email");
//  let address=localStorage.getItem("Address");
//  let languages=localStorage.getItem("languages");
//  let hobbies=localStorage.getItem("Hobbies");

//  document.getElementById("Output").innerHTML="";
//  document.getElementById("Output").innerHTML+="Name:  "+name+"<br>";
//  document.getElementById("Output").innerHTML+="Gender: "+gender+"<br>";
//  document.getElementById("Output").innerHTML+="Contact:  "+contact+"<br>";
//  document.getElementById("Output").innerHTML+="Dob:  "+dob+"<br>";
//  document.getElementById("Output").innerHTML+="Email:  "+email+"<br>";
//  document.getElementById("Output").innerHTML+="Address:  "+address+"<br>";
//  document.getElementById("Output").innerHTML+="languages:  "+languages+"<br>";
//  document.getElementById("Output").innerHTML+="Hobbies: "+hobbies+"<br>";
// }
 
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
 
    let values=JSON.parse(localStorage.getItem("items"));

    console.log(values);
 
    });


    

document.getElementById("showData").addEventListener("click",function(){
    let keys=document.querySelector(".key");
    let values=document.querySelector(".value");
    if(keys.innerHTML!=""&&values.innerHTML!=""){
        keys.innerHTML="";
        values.innerHTML="";
    }
    const records = JSON.parse(localStorage.getItem("items"));
    
    for(val of records){
        for(obj in val){
            document.querySelector(".key").innerHTML+=obj.toUpperCase()+":<br>";
            document.querySelector(".value").innerHTML+=val[obj]+"<br>";
    
    }
    
    }


 });


