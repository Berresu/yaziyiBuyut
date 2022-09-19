let metin=document.getElementById("txtMetin");
let button=document.getElementById("btnGir");
let sonuc=document.getElementById("sonuc");

button.addEventListener("click", ()=>{
    for(let i=6; i>0; i--){
        document.write("<h"+i+">"+metin+"</h"+i+">")
    }
});
