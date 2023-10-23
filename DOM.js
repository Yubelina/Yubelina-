

const input = document.getElementById("textInput");
const btn_set = document.getElementById("set");
const btn_addcolor = document.getElementById("addcolor");
const btn_add = document.getElementById("add");
const footer= document.getElementById("footer");

//  ~~~by bebe~~~~button pertama
btn_set.addEventListener("click",function(){
    if (input.value == "merah") {
        const merah = document.getElementsByClassName("tag1")[0];
        merah.style.backgroundColor = "red";
     }
     else if (input.value == "biru") {
        const biru = document.getElementsByClassName("tag1")[1];
        biru.style.backgroundColor = "blue";
     }
     else if (input.value == "kuning") {
        const kuning = document.getElementsByClassName("tag1")[2];
        kuning.style.backgroundColor = "yellow";
     }
     else if (input.value == "ungu") {
        const ungu = document.getElementsByClassName("tag1")[3];
        ungu.style.backgroundColor = "purple";
     }
     else if (input.value == "pink") {
        const pink = document.getElementsByClassName("tag1")[4];
        pink.style.backgroundColor = "pink";
     }
    
});

//  ~~~by bebe~~~~ pulihkan background
const list = document.getElementsByClassName("tag1");
for (let i=0;i<list.length;i++) {
    list[i].addEventListener("click", function(){
        list[i].style.backgroundColor = "aliceblue";
    })
}




//  ~~~by bebe~~~~ button kedua
btn_addcolor.addEventListener("click", function(){
    let value = input.value;
    const ul = document.getElementById('Tag');
    const newList = document.createElement('li');

    newList.appendChild(document.createTextNode(value));
    ul.appendChild(newList);
    newList.style.backgroundColor = value;
})



// ~~~by bebe~~~~button ketiga

// btn_add.addEventListener("click", function(){
//     const footer = document.getElementsById("footer")[0];
//     footer.innerHTML = "Design by saya";
// });

//  const Addr=document.getElementsById("add")
//  const AddFooter=document.getElementsById("footer")[0]

 btn_add.addEventListener("click",function(){
    footer.style.display="block"
    footer.innerHTML = "Design by yubelina M Bonai";
 });