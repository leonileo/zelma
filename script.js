let menu = document.getElementById("mbLinks");
let links = document.getElementById("mLinks");


    menu.addEventListener('click', fun1)

    function fun1(){
        if(menu.className === "active" ){
            menu.setAttribute("class", "mobile-Links");
            links.style.display = "none";
        }else{
            menu.setAttribute("class", "active");
            links.style.display = "block";
        }
    }

  