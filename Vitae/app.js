
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

/* para el footer*/

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

$(document).ready(function(){
    $("#sub").hover(function(){
        
        $(' .ejemplo1 .img1').css("transform","scale(1.2)");
        $(' .ejemplo1 .img1').css("transition","1s");
    }, function(){
        $('.ejemplo1 .img1').css("transform","scale(1)");
    }, function(){
                    
});
});

$(document).ready(function(){
    $(function(){
        $('#sub .selector1').css("color","#383838","transition 4s")
    })
    $("#sub").hover(function(){
        
        $('.selector1').css("color","#0bc6c7","transition 4s");
    }, function(){
        $('.selector1').css("color","#383838","transition 4s");
    }, function(){
            
        
});
});



$(document).ready(function(){
    $("#sub2").hover(function(){
        
        $(' .ejemplo2 .img2').css("transform","scale(1.2)","transition 0.5s");
        $(' .ejemplo2 .img2').css("transition","1s");
    }, function(){
        $('.ejemplo2 .img2').css("transform","scale(1)");
    }, function(){
                    
});
});

$(document).ready(function(){
    $(function(){
        $('#sub2 .selector2').css("color","#383838","transition 4s")
    })
    $("#sub2").hover(function(){
        
        $('.selector2').css("color","#0bc6c7","transition 4s");
    }, function(){
        $('.selector2').css("color","#383838","transition 4s");
    }, function(){
            
        
});
});


$(document).ready(function(){
    $("#sub3").hover(function(){
        
        $(' .ejemplo3 .img3').css("transform","scale(1.2)","transition 0.5s");
        $(' .ejemplo3 .img3').css("transition","1s");
    }, function(){
        $('.ejemplo3 .img3').css("transform","scale(1)");
    }, function(){
                    
});
});

$(document).ready(function(){
    $(function(){
        $('#sub3 .selector3').css("color","#383838","transition 4s")
    })
    $("#sub3").hover(function(){
        
        $('.selector3').css("color","#0bc6c7","transition 4s");
    }, function(){
        $('.selector3').css("color","#383838","transition 4s");
    }, function(){
            
        
});
});


$(document).ready(function(){
    $("#sub4").hover(function(){
        
        $(' .ejemplo4 .img4').css("transform","scale(1.2)","transition 0.5s");
        $(' .ejemplo4 .img4').css("transition","1s");
    }, function(){
        $('.ejemplo4 .img4').css("transform","scale(1)");
    }, function(){
                    
});
});

$(document).ready(function(){
    $(function(){
        $('#sub4 .selector4').css("color","#383838","transition 4s")
    })
    $("#sub4").hover(function(){
        
        $('.selector4').css("color","#0bc6c7","transition 4s");
    }, function(){
        $('.selector4').css("color","#383838","transition 4s");
    }, function(){
            
        
});
});


$(document).ready(function(){
    $("#sub5").hover(function(){
        
        $(' .ejemplo5 .img5').css("transform","scale(1.2)","transition 0.5s");
        $(' .ejemplo5 .img5').css("transition","1s");
    }, function(){
        $('.ejemplo5 .img5').css("transform","scale(1)");
    }, function(){
                    
});
});

$(document).ready(function(){
    $(function(){
        $('#sub5 .selector5').css("color","#383838","transition 4s")
    })
    $("#sub5").hover(function(){
        
        $('.selector5').css("color","#0bc6c7","transition 4s");
    }, function(){
        $('.selector5').css("color","#383838","transition 4s");
    }, function(){
            
        
});
});

$(document).ready(function(){
    $("#sub6").hover(function(){
        
        $(' .ejemplo6 .img6').css("transform","scale(1.2)","transition 0.5s");
        $(' .ejemplo6 .img6').css("transition","1s");
    }, function(){
        $('.ejemplo6 .img6').css("transform","scale(1)");
    }, function(){
                    
});
});

$(document).ready(function(){
    $(function(){
        $('#sub6 .selector6').css("color","#383838","transition 4s")
    })
    $("#sub6").hover(function(){
        
        $('.selector6').css("color","#0bc6c7","transition 4s");
    }, function(){
        $('.selector6').css("color","#383838","transition 4s");
    }, function(){
            
        
});
});

$(document).ready(function(){
    $("#sub7").hover(function(){
        
        $(' .ejemplo7 .img7').css("transform","scale(1.2)","transition 0.5s");
        $(' .ejemplo7 .img7').css("transition","1s");
    }, function(){
        $('.ejemplo7 .img7').css("transform","scale(1)");
    }, function(){
                    
});
});

$(document).ready(function(){
    $(function(){
        $('#sub7 .selector7').css("color","#383838","transition 4s")
    })
    $("#sub7").hover(function(){
        
        $('.selector7').css("color","#0bc6c7","transition 4s");
    }, function(){
        $('.selector7').css("color","#383838","transition 4s");
    }, function(){
            
        
});
});


$(document).ready(function(){
    $("#sub8").hover(function(){
        
        $(' .ejemplo8 .img8').css("transform","scale(1.2)","transition 0.5s");
        $(' .ejemplo8 .img8').css("transition","1s");
    }, function(){
        $('.ejemplo8 .img8').css("transform","scale(1)");
    }, function(){
                    
});
});

$(document).ready(function(){
    $(function(){
        $('#sub8 .selector8').css("color","#383838","transition 4s")
    })
    $("#sub8").hover(function(){
        
        $('.selector8').css("color","#0bc6c7","transition 4s");
    }, function(){
        $('.selector8').css("color","#383838","transition 4s");
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

addEventListener('DOMContentLoaded', ()=>{
    const contadores1 = document.querySelectorAll('.contador_cantidad1');
    const velocidad1 = 1000;

    const animarContadores1 = () =>{
        for(const contador1 of contadores1){
            const actualizar_contador1 =() =>{
                let cantidad_maxima = +contador1.dataset.cantidadTotal,
                valor_actual = +contador1.innerText,
                incremento = cantidad_maxima / velocidad1;
                if(valor_actual < cantidad_maxima){
                    contador1.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout((actualizar_contador1), 80);
                }else{
                    contador1.innerText = cantidad_maxima;

                }
            }
            actualizar_contador1();
        }
    }

    const mostrarContadores1 = elementos =>{
        elementos.forEach(element => {
            if(element.isIntersecting){
                   element.target.classList.add('animar');
                   element.target.classList.remove('ocultar');
                   setTimeout(animarContadores1, 300)
            }
        });
    }

    const observer1 = new IntersectionObserver(mostrarContadores1, {
        threshold: 0.75 //0 - 1 
    })

    const elementosHTML1 = document.querySelectorAll('.contador1')
    elementosHTML1.forEach(elementoHTML =>{
        observer1.observe(elementoHTML)
    })
    
})

addEventListener('DOMContentLoaded', ()=>{
    const contadores = document.querySelectorAll('.contador_cantidad');
    const velocidad = 600;

    const animarContadores = () =>{
        for(const contador of contadores){
            const actualizar_contador =() =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad;
                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout((actualizar_contador), 5);
                }else{
                    contador.innerText = cantidad_maxima;

                }
            }
            actualizar_contador();
        }
    }

    const mostrarContadores = elementos =>{
        elementos.forEach(element => {
            if(element.isIntersecting){
                   element.target.classList.add('animar');
                   element.target.classList.remove('ocultar');
                   setTimeout(animarContadores, 300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75 //0 - 1 
    })

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML)
    })
    
});




