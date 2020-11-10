const searchMatch= ()=> {

let filter= document.getElementById("myinput").value.toUpperCase();
let  search = document.getElementById("names");
let tr = search.getElementsByTagName("tr");

for(var i=0; i<tr.length; i++){
     
    let td = tr[i].getElementsByTagName("td")[0];
    
   if(td){ 
      let textvaule= td.textContent ||  td.innerHTML;
   if(textvaule.toUpperCase().indexOf(filter) >-1)
    {
         tr[i].style.display="";
    }
    else
    {
         tr[i].style.display="none";
    }

   }

} 
}

