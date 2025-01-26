// Add JS here

let counter = document.getElementById("number-of-people");

let entries = document.getElementById("entries");


function Increase(){
    return counter.innerHTML++;
}



function Decrease(){
     if (counter.innerHTML ===0){
        alert("U can't decrease at this point the nummber of people is '0'")
     }
     else{
        return counter.innerHTML--;
     }
    
}

let first =0;
function Save(){
    if (first === 0){
        entries.innerText += " "+ counter.innerText;
        first++;
    }
    else{
        entries.innerText += " - " + counter.innerText;
    }
    counter.innerText = 0;

}

let time =0;
function toggleTheme(){
    if (time===0){
        document.body.style.backgroundImage = 'url("./image.png")';
        document.getElementsByTagName('main').style.backgroundColor = 'rgba(72, 138, 196, 0.74)';

        time++;
    }
    else{
        document.body.style.backgroundImage = 'url("/image2.png")';
        document.getElementsByTagName('main').style.backgroundColor = 'rgba(40, 83, 121, 0.736)';
        time--;
    }
}