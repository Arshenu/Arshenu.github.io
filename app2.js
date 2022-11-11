window.onscroll = () => {
    var nav  = document.querySelector('nav');
    
    if (window.pageYOffset > 0) {
        nav.classList.add("sticky")
    } 
    else {
        nav.classList.remove("sticky");
    }

    if (window.innerWidth <= 864) {
        nav.classList.remove("sticky");
      }
}

$(document).ready(function(){
    $(function(){
        $('.lista .hover1').css("color","#04BFBC");
    })
    $(".lista .hover1").hover(function(){       
        $('.lista .fa-brands.fa-facebook-f').css("color","#fff");
        $('.lista .hover1').css("background-color","#04BFBC");
    }, function(){
        $('.lista .fa-brands.fa-facebook-f').css("color","#04BFBC");
        $('.lista .hover1').css("background-color","#f1f1f1");
    }, function(){
                  
});
});

$(document).ready(function(){
    $(function(){
        $('.lista .hover2').css("color","#04BFBC");
    })
    $(".lista .hover2").hover(function(){       
        $('.lista .fa-brands.fa-square-instagram').css("color","#fff");
        $('.lista .hover2').css("background-color","#04BFBC");
    }, function(){
        $('.lista .fa-brands.fa-square-instagram').css("color","#04BFBC");
        $('.lista .hover2').css("background-color","#f1f1f1");
    }, function(){
                  
});
});

$(document).ready(function(){
    $(function(){
        $('.lista .hover3').css("color","#04BFBC");
    })
    $(".lista .hover3").hover(function(){       
        $('.lista .fa-brands.fa-twitter').css("color","#fff");
        $('.lista .hover3').css("background-color","#04BFBC");
    }, function(){
        $('.lista .fa-brands.fa-twitter').css("color","#04BFBC");
        $('.lista .hover3').css("background-color","#f1f1f1");
    }, function(){
                  
});
});

$(document).ready(function(){
    $(function(){
        $('.lista .hover4').css("color","#04BFBC");
    })
    $(".lista .hover4").hover(function(){       
        $('.lista .fa.fa-whatsapp').css("color","#fff");
        $('.lista .hover4').css("background-color","#04BFBC");
    }, function(){
        $('.lista .fa.fa-whatsapp').css("color","#04BFBC");
        $('.lista .hover4').css("background-color","#f1f1f1");
    }, function(){
                  
});
});

(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 945){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 945){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();

document.querySelector(".menu__hamburguer").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

$(document).ready(function(){
    $(function(){
        $('.listafooter .hover1').css("color","#04BFBC");
    })
    $(".listafooter .hover1").hover(function(){       
        $('.listafooter .fa-brands.fa-facebook-f').css("color","#fff");
        $('.listafooter .hover1').css("background-color","#04BFBC");
    }, function(){
        $('.listafooter .fa-brands.fa-facebook-f').css("color","#04BFBC");
        $('.listafooter .hover1').css("background-color","#f1f1f1");
    }, function(){
                  
});
});

$(document).ready(function(){
    $(function(){
        $('.listafooter .hover2').css("color","#04BFBC");
    })
    $(".listafooter .hover2").hover(function(){       
        $('.listafooter .fa-brands.fa-square-instagram').css("color","#fff");
        $('.listafooter .hover2').css("background-color","#04BFBC");
    }, function(){
        $('.listafooter .fa-brands.fa-square-instagram').css("color","#04BFBC");
        $('.listafooter .hover2').css("background-color","#f1f1f1");
    }, function(){
                  
});
});

$(document).ready(function(){
    $(function(){
        $('.listafooter .hover3').css("color","#04BFBC");
    })
    $(".listafooter .hover3").hover(function(){       
        $('.listafooter .fa-brands.fa-twitter').css("color","#fff");
        $('.listafooter .hover3').css("background-color","#04BFBC");
    }, function(){
        $('.listafooter .fa-brands.fa-twitter').css("color","#04BFBC");
        $('.listafooter .hover3').css("background-color","#f1f1f1");
    }, function(){
                  
});
});

$(document).ready(function(){
    $(function(){
        $('.listafooter .hover4').css("color","#04BFBC");
    })
    $(".listafooter .hover4").hover(function(){       
        $('.listafooter .fa.fa-whatsapp').css("color","#fff");
        $('.listafooter .hover4').css("background-color","#04BFBC");
    }, function(){
        $('.listafooter .fa.fa-whatsapp').css("color","#04BFBC");
        $('.listafooter .hover4').css("background-color","#f1f1f1");
    }, function(){
                  
});
});