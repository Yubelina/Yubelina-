

const headerW= document.getElementById("header")
headerW.addEventListener("mouseover",function(){

  headerW.style.backgroundColor = " #c1946a";
})



const navbarW= document.getElementById("navbar")
navbarW.addEventListener("mouseover",function(){

  navbarW.style.backgroundColor = " #80ced6";
})
 





const tampung = document.getElementById("left2")
const ubah = document.getElementById("left3")
 tampung.addEventListener("click",function(){
     ubah.innerHTML="ubah berhasil";
 })

 const klik= document.getElementById("left1")
const keterangan= document.getElementById("left3")
 klik.addEventListener("click",function(){
     keterangan.innerHTML=" BERHASIL";
 })


 const tampungA = document.getElementById("center1")
 const ubahA = document.getElementById("center2")
  tampungA.addEventListener("click",function(){
      ubahA.innerHTML="  CENNTER untuk menjawab soal no.1 silakan clik  tulisa-tulisan panel dan arakan cursor ke semua bagian panel akan terlihat evennya";
  })
 
  const centerW= document.getElementById("center_panel")
  centerW.addEventListener("mouseover",function(){

    centerW.style.backgroundColor = "#ffef96";
})
   
  const centerP= document.getElementById("center_panel")
  const ubahS = document.getElementById("center1")
  const ubahD = document.getElementById("center2")
  const ubahT = document.getElementById("center3")
   centerP.addEventListener("click",function(){

    ubahS.style.backgroundColor = "  #feb236";
       ubahT.style.backgroundColor = " #feb236";
       ubahD.style.backgroundColor = " #feb236";
   })

    
  const leftW= document.getElementById("left_panel")
  leftW.addEventListener("mouseover",function(){

    leftW.style.backgroundColor = "coral";
})
  const leftP= document.getElementById("left_panel")
  const leftS = document.getElementById("left1")
  const leftD = document.getElementById("left2")
  const leftT = document.getElementById("left3")
   leftP.addEventListener("click",function(){

    leftS.style.backgroundColor = "  #ff7b25";
       leftD.style.backgroundColor = " #ff7b25";
       leftT.style.backgroundColor = " #ff7b25";
   })


    
  const rightW= document.getElementById("right_panel")
  rightW.addEventListener("mouseover",function(){

    rightW.style.backgroundColor = "coral";
})

  const rightP= document.getElementById("right_panel")
  const rightS = document.getElementById("right1")
  const rightD = document.getElementById("right2")

   rightP.addEventListener("click",function(){

    rightS.style.backgroundColor = "#6b5b95  ";
       rightD.style.backgroundColor = " #6b5b95";
    
   })



   
  const footerW= document.getElementById("footer")
  footerW.addEventListener("mouseover",function(){

    footerW.style.backgroundColor = " #146EB4";
})


   
  const footerP= document.getElementById("footer")
  const footerS = document.getElementById("footer_right")
  const footerD = document.getElementById("footer_left")

   footerP.addEventListener("click",function(){

    footerS.style.backgroundColor = "#6b5b95  ";
       footerD.style.backgroundColor = " #6b5b95";
    
   })


   const headerP= document.getElementById("header")

   const navbarH= document.getElementById("navbar")
   const leftH1 = document.getElementById("left_panel")
   const leftH1a = document.getElementById("left1")
   const leftH1b = document.getElementById("left2")
   const leftH1c = document.getElementById("left3")


   const centerH2 = document.getElementById("center_panel")
   const centerH2a = document.getElementById("center1")
   const centerH2b = document.getElementById("center2")
   const centerH2c = document.getElementById("center3")

   const rightH3 = document.getElementById("right_panel")
   const rightH3a= document.getElementById("right1")
   const rightH3b = document.getElementById("right2")
  
   const footerH4= document.getElementById("footer")
   const footerH4a= document.getElementById("footer_left")
   const footerH4b= document.getElementById("footer_right")

    headerP.addEventListener("click",function(){
 
     navbarH.style.backgroundColor = "#618685 ";
     headerP.style.backgroundColor = "black ";


     leftH1.style.backgroundColor = "#618685 ";
     leftH1a.style.backgroundColor = "#618685  ";
     leftH1b.style.backgroundColor = "#618685  ";
     leftH1c.style.backgroundColor = "#618685 ";



     centerH2.style.backgroundColor = "#618685 ";
     centerH2a.style.backgroundColor = "#618685 ";
     centerH2b.style.backgroundColor = "#618685 ";
     centerH2c.style.backgroundColor = "#618685 ";

        rightH3.style.backgroundColor = " #618685";
        rightH3a.style.backgroundColor = " #618685";
        rightH3b.style.backgroundColor = " #618685";

        footerH4.style.backgroundColor = " #618685";
        footerH4a.style.backgroundColor = " #618685";
        footerH4b.style.backgroundColor = " #618685";
        
        
     
    })


//yang kedua


var button = document.getElementById("bt")
button.addEventListener("click",function(){
    var warna = document.getElementById("in").value;
    let li = document.getElementsByTagName("li");
    for (let i=0; i<li.length; i++) {
        if(i%2==0){
            li[i].style.backgroundColor = warna;
            li[i].style.Color = warna;
        }
    }
});




//  ~~~by bebe~~~~
//const headerW= document.getElementById("header")
// headerW.addEventListener("mouseover",function(){

//   headerW.style.backgroundColor = " #c1946a";
// })



// const navbarW= document.getElementById("navbar")
// navbarW.addEventListener("mouseover",function(){

//   navbarW.style.backgroundColor = " #80ced6";
// })
 





// const tampung = document.getElementById("left2")
// const ubah = document.getElementById("left3")
//  tampung.addEventListener("click",function(){
//      ubah.innerHTML="ubah berhasil";
//  })

//  const klik= document.getElementById("left1")
// const keterangan= document.getElementById("left3")
//  klik.addEventListener("click",function(){
//      keterangan.innerHTML=" BERHASIL";
//  })


//  const tampungA = document.getElementById("center1")
//  const ubahA = document.getElementById("center2")
//   tampungA.addEventListener("click",function(){
//       ubahA.innerHTML="  CENNTER untuk menjawab soal no.1 silakan clik  tulisa-tulisan panel dan arakan cursor ke semua bagian panel akan terlihat evennya";
//   })
 
//   const centerW= document.getElementById("center_panel")
//   centerW.addEventListener("mouseover",function(){

//     centerW.style.backgroundColor = "#ffef96";
// })
   
//   const centerP= document.getElementById("center_panel")
//   const ubahS = document.getElementById("center1")
//   const ubahD = document.getElementById("center2")
//   const ubahT = document.getElementById("center3")
//    centerP.addEventListener("click",function(){

//     ubahS.style.backgroundColor = "  #feb236";
//        ubahT.style.backgroundColor = " #feb236";
//        ubahD.style.backgroundColor = " #feb236";
//    })

    
//   const leftW= document.getElementById("left_panel")
//   leftW.addEventListener("mouseover",function(){

//     leftW.style.backgroundColor = "coral";
// })
//   const leftP= document.getElementById("left_panel")
//   const leftS = document.getElementById("left1")
//   const leftD = document.getElementById("left2")
//   const leftT = document.getElementById("left3")
//    leftP.addEventListener("click",function(){

//     leftS.style.backgroundColor = "  #ff7b25";
//        leftD.style.backgroundColor = " #ff7b25";
//        leftT.style.backgroundColor = " #ff7b25";
//    })


    
//   const rightW= document.getElementById("right_panel")
//   rightW.addEventListener("mouseover",function(){

//     rightW.style.backgroundColor = "coral";
// })

//   const rightP= document.getElementById("right_panel")
//   const rightS = document.getElementById("right1")
//   const rightD = document.getElementById("right2")

//    rightP.addEventListener("click",function(){

//     rightS.style.backgroundColor = "#6b5b95  ";
//        rightD.style.backgroundColor = " #6b5b95";
    
//    })



   
//   const footerW= document.getElementById("footer")
//   footerW.addEventListener("mouseover",function(){

//     footerW.style.backgroundColor = " #146EB4";
// })


   
//   const footerP= document.getElementById("footer")
//   const footerS = document.getElementById("footer_right")
//   const footerD = document.getElementById("footer_left")

//    footerP.addEventListener("click",function(){

//     footerS.style.backgroundColor = "#6b5b95  ";
//        footerD.style.backgroundColor = " #6b5b95";
    
//    })


//    const headerP= document.getElementById("header")

//    const navbarH= document.getElementById("navbar")
//    const leftH1 = document.getElementById("left_panel")
//    const leftH1a = document.getElementById("left1")
//    const leftH1b = document.getElementById("left2")
//    const leftH1c = document.getElementById("left3")


//    const centerH2 = document.getElementById("center_panel")
//    const centerH2a = document.getElementById("center1")
//    const centerH2b = document.getElementById("center2")
//    const centerH2c = document.getElementById("center3")

//    const rightH3 = document.getElementById("right_panel")
//    const rightH3a= document.getElementById("right1")
//    const rightH3b = document.getElementById("right2")
  
//    const footerH4= document.getElementById("footer")
//    const footerH4a= document.getElementById("footer_left")
//    const footerH4b= document.getElementById("footer_right")

//     headerP.addEventListener("click",function(){
 
//      navbarH.style.backgroundColor = "#618685 ";
//      headerP.style.backgroundColor = "black ";


//      leftH1.style.backgroundColor = "#618685 ";
//      leftH1a.style.backgroundColor = "#618685  ";
//      leftH1b.style.backgroundColor = "#618685  ";
//      leftH1c.style.backgroundColor = "#618685 ";



//      centerH2.style.backgroundColor = "#618685 ";
//      centerH2a.style.backgroundColor = "#618685 ";
//      centerH2b.style.backgroundColor = "#618685 ";
//      centerH2c.style.backgroundColor = "#618685 ";

//         rightH3.style.backgroundColor = " #618685";
//         rightH3a.style.backgroundColor = " #618685";
//         rightH3b.style.backgroundColor = " #618685";

//         footerH4.style.backgroundColor = " #618685";
//         footerH4a.style.backgroundColor = " #618685";
//         footerH4b.style.backgroundColor = " #618685";
        
        
     
//     })


// //yang kedua


// var button = document.getElementById("bt")
// button.addEventListener("click",function(){
//     var warna = document.getElementById("in").value;
//     let li = document.getElementsByTagName("li");
//     for (let i=0; i<li.length; i++) {
//         if(i%2==0){
//             li[i].style.backgroundColor = warna;
//             li[i].style.Color = warna;
//         }
//     }
// });
// ~~~by bebe~~~~

