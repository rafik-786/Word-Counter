let words = document.getElementById("words");
let chars = document.getElementById("characters");

let textArea=document.getElementById('textarea');


textArea.addEventListener('input',function(){
    let text = this.value;
    let len = text.length;
    chars.innerText=len;

    text = text.trim();
    let w = text.split(' ');
    let totalword = 0;
    console.log(w);
    for(let i=0;i<w.length;i++){
        if(w[i]!=="") totalword++;
    }
    words.innerText=totalword;
});