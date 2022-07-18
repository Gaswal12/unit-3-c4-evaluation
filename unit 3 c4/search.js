
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


import {search_Tesla,appendSearch} from"./searchFetch.js";


let newsArr = JSON.parse(localStorage.getItem("news"));
console.log(newsArr[0]);
let value = newsArr[0];

search_Tesla(value).then((data)=>{
    console.log(data);  
    
    let container = document.getElementById("results");

    appendSearch(data,container); 
    
    
})


let search=(e)=>{
    if(e.key=="Enter"){


        let query = document.getElementById("search_input").value;

        search_Tesla(query).then((data)=>{
            console.log(data);  
            
            let container = document.getElementById("results");

            appendSearch(data,container);   
        })

    }
}

document.getElementById("search_input").addEventListener("keydown",search);

