
  function loadImages() {
    document.getElementById("moreImages").className = "w3-row-padding w3-center";
    document.getElementById("loadMore").className = "hidden";
  }

  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }

  // Change style of navbar on scroll
  window.onscroll = function () { myFunction() };
  function myFunction() {
    var navbar = document.getElementById("myNavbar");
    var logoW = document.getElementById("logoW");
    var logoB = document.getElementById("logoB");
    var logoWhite = document.getElementById("logoWhite");
    var logoBlack = document.getElementById("logoBlack");
    var logo = document.getElementById("logoIntro");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          logo.className = "hidden";
          
        
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      navbar.className = "w3-bar" + " wN-black";
      logoB.className = "";
      logoW.className ="hidden";
      logoBlack.className = "";
      logoWhite.className ="hidden";
    } 
  }
    else {
      navbar.className = navbar.className.replace(" wN-black", " wN-white");
      logoB.className = "hidden";
      logoW.className ="";
      logoBlack.className = "hidden";
      logoWhite.className ="";
      logo.className = "overlay3"
    }
  }


  // window.onscroll = function () { myFunction2() };
  // function myFunction2() {
  //   var logo = document.getElementById("logoIntro");
  
  //   if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 100) {
  //     logo.className = "hidden";
      
  //   } 
    
  //   else {
      
  //     logo.className = "overlay3";
      
  //   }
  // }
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    var iframe = document.getElementById('iframe');
    iframe.src = iframe.src;
  }


  function openNav1() {

    document.getElementById("myNav1").style.width = "100%";
  }

function closeNav1() {

    document.getElementById("myNav1").style.width = "0%";
    var iframe = document.getElementById('iframe1');
    iframe.src = iframe.src;
  }

  function openNav2() {

    document.getElementById("myNav2").style.width = "100%";
  }

function closeNav2() {

    document.getElementById("myNav2").style.width = "0%";
    var iframe = document.getElementById('iframe2');
    iframe.src = iframe.src;
  }
  
  function openNav3() {

    document.getElementById("myNav3").style.width = "100%";
  }

function closeNav3() {

    document.getElementById("myNav3").style.width = "0%";
    var iframe = document.getElementById('iframe3');
    iframe.src = iframe.src;
  }
    
  function openNav4() {

    document.getElementById("myNav4").style.width = "100%";
  }

function closeNav4() {

    document.getElementById("myNav4").style.width = "0%";
    var iframe = document.getElementById('iframe4');
    iframe.src = iframe.src;
  }


///////////////////////////

  function openApp() {
    document.getElementById("myApp").style.width = "100%";
  
  }

  function closeApp() {
    document.getElementById("myApp").style.width = "0%";

  }
  function openApp1() {
    document.getElementById("myApp1").style.width = "100%";
  
  }

  function closeApp1() {
    document.getElementById("myApp1").style.width = "0%";

  }

  function openApp2() {
    document.getElementById("myApp2").style.width = "100%";
  
  }

  function closeApp2() {
    document.getElementById("myApp2").style.width = "0%";

  }

  function openApp3() {
    document.getElementById("myApp3").style.width = "100%";
  
  }

  function closeApp3() {
    document.getElementById("myApp3").style.width = "0%";

  }

  
  function openApp4() {
    document.getElementById("myApp4").style.width = "100%";
  
  }

  function closeApp4() {
    document.getElementById("myApp4").style.width = "0%";

  }
