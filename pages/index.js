import React, {useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'

function Home() {
  
  useEffect(() => {
 
    (function() {
      'use strict';
      window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
          }
          form.classList.add('was-validated');
          }, false);
      });
      }, false);
  })();
var elements = document.getElementsByClassName( 'parallax' );

for( let element of elements ) {
    let position = element.offsetTop;
    position = position - 500;
    if( position < 0 ) {
        position = 0;
    }
    document.addEventListener( 'scroll', function( event ) {
        if( window.pageYOffset > position ) {
            element.style.backgroundPositionY = -(window.pageYOffset - position + 500) * 0.15 + 'px';
        }
        // console.log( window.pageYOffset * 0.03 );
    });
}

// @Author: Guilherme Lucas
//Fazendo menu aparecer onHover no icone
$( 'document' ).ready(function() {
$('#menu-icon, .menu-cover').hover( function() {
    $('.menu-cover, .menu-list').addClass('appear');
}, function(){
    $('.menu-cover, .menu-list').removeClass('appear');
});

$('#menu-icon-mobile, .menu-cover-mobile, .menu-cover-mobile-background').click( function() {
    $('.menu-cover-mobile, .menu-list-mobile, .menu-cover-mobile-background').toggleClass('appear');
    $('body, html').toggleClass('unscrollable');
});
});


//Aumentado altura do textArea dinamicamente
$( 'document' ).ready(function() {
var default_height = $("#message-box").css('height');
$("#message-box").on('input', function() {
    var scroll_height = $("#message-box").get(0).scrollHeight;
    $("#message-box").css('height', scroll_height + 'px');

    if( $( this ).val() === '' ) {
        $("#message-box").css('height', default_height );
    }
});
});

//Escondendo ícone de Wpp em seções full-screen
$( 'document' ).ready(function() {
let div_sobre_position = $('#sobre').offset().top;
let div_contato_position = $('#contato').offset().top;
let div_footer_position = $('#footer').offset().top;
let document_height = $( document ).height
$( window ).scroll( function() {
    let wpp_btn_position = $('#whatsapp-btn').offset().top;
//Fazendo botão do wpp aparecer após seção Sobre
if( wpp_btn_position > div_sobre_position) {
    $('#whatsapp-btn').css('opacity', 1);
    $('#whatsapp-btn').css('pointerEvents', 'auto');
}
else {
    $('#whatsapp-btn').css('opacity', 0);
    $('#whatsapp-btn').css('pointerEvents', 'none');
}

//Fazendo botão do wpp mudar de cores na seção de Contato
    if( wpp_btn_position > div_contato_position) {
        $('#whatsapp-btn').css('background', '#ffffff');
        $('.wpp-text').css('color', '#000000');
        $('.wpp-img').attr('src', 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgOTAgOTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggaWQ9IldoYXRzQXBwIiBkPSJNOTAsNDMuODQxYzAsMjQuMjEzLTE5Ljc3OSw0My44NDEtNDQuMTgyLDQzLjg0MWMtNy43NDcsMC0xNS4wMjUtMS45OC0yMS4zNTctNS40NTVMMCw5MGw3Ljk3NS0yMy41MjIgICBjLTQuMDIzLTYuNjA2LTYuMzQtMTQuMzU0LTYuMzQtMjIuNjM3QzEuNjM1LDE5LjYyOCwyMS40MTYsMCw0NS44MTgsMEM3MC4yMjMsMCw5MCwxOS42MjgsOTAsNDMuODQxeiBNNDUuODE4LDYuOTgyICAgYy0yMC40ODQsMC0zNy4xNDYsMTYuNTM1LTM3LjE0NiwzNi44NTljMCw4LjA2NSwyLjYyOSwxNS41MzQsNy4wNzYsMjEuNjFMMTEuMTA3LDc5LjE0bDE0LjI3NS00LjUzNyAgIGM1Ljg2NSwzLjg1MSwxMi44OTEsNi4wOTcsMjAuNDM3LDYuMDk3YzIwLjQ4MSwwLDM3LjE0Ni0xNi41MzMsMzcuMTQ2LTM2Ljg1N1M2Ni4zMDEsNi45ODIsNDUuODE4LDYuOTgyeiBNNjguMTI5LDUzLjkzOCAgIGMtMC4yNzMtMC40NDctMC45OTQtMC43MTctMi4wNzYtMS4yNTRjLTEuMDg0LTAuNTM3LTYuNDEtMy4xMzgtNy40LTMuNDk1Yy0wLjk5My0wLjM1OC0xLjcxNy0wLjUzOC0yLjQzOCwwLjUzNyAgIGMtMC43MjEsMS4wNzYtMi43OTcsMy40OTUtMy40Myw0LjIxMmMtMC42MzIsMC43MTktMS4yNjMsMC44MDktMi4zNDcsMC4yNzFjLTEuMDgyLTAuNTM3LTQuNTcxLTEuNjczLTguNzA4LTUuMzMzICAgYy0zLjIxOS0yLjg0OC01LjM5My02LjM2NC02LjAyNS03LjQ0MWMtMC42MzEtMS4wNzUtMC4wNjYtMS42NTYsMC40NzUtMi4xOTFjMC40ODgtMC40ODIsMS4wODQtMS4yNTUsMS42MjUtMS44ODIgICBjMC41NDMtMC42MjgsMC43MjMtMS4wNzUsMS4wODItMS43OTNjMC4zNjMtMC43MTcsMC4xODItMS4zNDQtMC4wOS0xLjg4M2MtMC4yNy0wLjUzNy0yLjQzOC01LjgyNS0zLjM0LTcuOTc3ICAgYy0wLjkwMi0yLjE1LTEuODAzLTEuNzkyLTIuNDM2LTEuNzkyYy0wLjYzMSwwLTEuMzU0LTAuMDktMi4wNzYtMC4wOWMtMC43MjIsMC0xLjg5NiwwLjI2OS0yLjg4OSwxLjM0NCAgIGMtMC45OTIsMS4wNzYtMy43ODksMy42NzYtMy43ODksOC45NjNjMCw1LjI4OCwzLjg3OSwxMC4zOTcsNC40MjIsMTEuMTEzYzAuNTQxLDAuNzE2LDcuNDksMTEuOTIsMTguNSwxNi4yMjMgICBDNTguMiw2NS43NzEsNTguMiw2NC4zMzYsNjAuMTg2LDY0LjE1NmMxLjk4NC0wLjE3OSw2LjQwNi0yLjU5OSw3LjMxMi01LjEwN0M2OC4zOTgsNTYuNTM3LDY4LjM5OCw1NC4zODYsNjguMTI5LDUzLjkzOHoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K')
    }
    else {
        $('#whatsapp-btn').css('background', '#000000');
        $('.wpp-text').css('color', '#ffffff');
        $('.wpp-img').attr('src', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDkwIDkwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MCA5MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnPgoJPHBhdGggaWQ9IldoYXRzQXBwIiBkPSJNOTAsNDMuODQxYzAsMjQuMjEzLTE5Ljc3OSw0My44NDEtNDQuMTgyLDQzLjg0MWMtNy43NDcsMC0xNS4wMjUtMS45OC0yMS4zNTctNS40NTVMMCw5MGw3Ljk3NS0yMy41MjIgICBjLTQuMDIzLTYuNjA2LTYuMzQtMTQuMzU0LTYuMzQtMjIuNjM3QzEuNjM1LDE5LjYyOCwyMS40MTYsMCw0NS44MTgsMEM3MC4yMjMsMCw5MCwxOS42MjgsOTAsNDMuODQxeiBNNDUuODE4LDYuOTgyICAgYy0yMC40ODQsMC0zNy4xNDYsMTYuNTM1LTM3LjE0NiwzNi44NTljMCw4LjA2NSwyLjYyOSwxNS41MzQsNy4wNzYsMjEuNjFMMTEuMTA3LDc5LjE0bDE0LjI3NS00LjUzNyAgIGM1Ljg2NSwzLjg1MSwxMi44OTEsNi4wOTcsMjAuNDM3LDYuMDk3YzIwLjQ4MSwwLDM3LjE0Ni0xNi41MzMsMzcuMTQ2LTM2Ljg1N1M2Ni4zMDEsNi45ODIsNDUuODE4LDYuOTgyeiBNNjguMTI5LDUzLjkzOCAgIGMtMC4yNzMtMC40NDctMC45OTQtMC43MTctMi4wNzYtMS4yNTRjLTEuMDg0LTAuNTM3LTYuNDEtMy4xMzgtNy40LTMuNDk1Yy0wLjk5My0wLjM1OC0xLjcxNy0wLjUzOC0yLjQzOCwwLjUzNyAgIGMtMC43MjEsMS4wNzYtMi43OTcsMy40OTUtMy40Myw0LjIxMmMtMC42MzIsMC43MTktMS4yNjMsMC44MDktMi4zNDcsMC4yNzFjLTEuMDgyLTAuNTM3LTQuNTcxLTEuNjczLTguNzA4LTUuMzMzICAgYy0zLjIxOS0yLjg0OC01LjM5My02LjM2NC02LjAyNS03LjQ0MWMtMC42MzEtMS4wNzUtMC4wNjYtMS42NTYsMC40NzUtMi4xOTFjMC40ODgtMC40ODIsMS4wODQtMS4yNTUsMS42MjUtMS44ODIgICBjMC41NDMtMC42MjgsMC43MjMtMS4wNzUsMS4wODItMS43OTNjMC4zNjMtMC43MTcsMC4xODItMS4zNDQtMC4wOS0xLjg4M2MtMC4yNy0wLjUzNy0yLjQzOC01LjgyNS0zLjM0LTcuOTc3ICAgYy0wLjkwMi0yLjE1LTEuODAzLTEuNzkyLTIuNDM2LTEuNzkyYy0wLjYzMSwwLTEuMzU0LTAuMDktMi4wNzYtMC4wOWMtMC43MjIsMC0xLjg5NiwwLjI2OS0yLjg4OSwxLjM0NCAgIGMtMC45OTIsMS4wNzYtMy43ODksMy42NzYtMy43ODksOC45NjNjMCw1LjI4OCwzLjg3OSwxMC4zOTcsNC40MjIsMTEuMTEzYzAuNTQxLDAuNzE2LDcuNDksMTEuOTIsMTguNSwxNi4yMjMgICBDNTguMiw2NS43NzEsNTguMiw2NC4zMzYsNjAuMTg2LDY0LjE1NmMxLjk4NC0wLjE3OSw2LjQwNi0yLjU5OSw3LjMxMi01LjEwN0M2OC4zOTgsNTYuNTM3LDY4LjM5OCw1NC4zODYsNjguMTI5LDUzLjkzOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiNmZmZmZmYiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+')
    }
//Fazendo botão do wpp parar de descer ao chegar no Footer
    if( ( 80 + wpp_btn_position ) > div_footer_position) {
        $("#whatsapp-btn").css('bottom', ( $('#footer').innerHeight() + 20 ) );
    }
    else {
        $("#whatsapp-btn").css('bottom', '20px');
    }
});
});
  })

  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      
      </Head>
      <nav className="d-none d-lg-block navbar-menu pt-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <div className="logo-wrapper">
                      <Link href={'/'}>
                        <img src="/img/logo.png" alt="Devware" className="logo-img"/>
                      </Link>
                    </div>
                    <div className="menu-icon-wrapper">
                        <img id="menu-icon" src="/img/menu-button.png" alt="Menu" className="menu-icon"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-cover">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1">
                        <div className="menu-icon-wrapper">
                            <img src="/img/menu-button-dark.png" alt="Menu" className="menu-icon"/>
                        </div>
                        <ul className="menu-list text-center">
                            <li className="menu-list-item first-of-menu">
                                <a href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="menu-list-item">
                                <a href="#beneficios">
                                    Benefícios
                                </a>
                            </li>
                            <li className="menu-list-item">
                                <a href="#sobre">
                                    Sobre Nós
                                </a>
                            </li>
                            <li className="menu-list-item">
                                <a href="#contato">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

{/* <!-- (Mobile) Navbar Menu --> */}
    <nav id="nav-mobile" className="d-block d-lg-none navbar-menu pt-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <div className="logo-wrapper">
                    <Link href={'/'}>
                      <img src="/img/logo.png" alt="Devware" className="logo-img"/>
                    </Link>
                    </div>
                    <div className="menu-icon-wrapper">
                        <img id="menu-icon-mobile" src="/img/menu-button.png" alt="Menu" className="menu-icon"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-none menu-cover-mobile-background"></div>
        <div className="menu-cover-mobile">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1">
                        <div className="menu-icon-wrapper">
                            <img src="/img/menu-button-dark.png" alt="Menu" className="menu-icon"/>
                        </div>
                        <ul className="menu-list-mobile text-center">
                            <li className="menu-list-item first-of-menu">
                                <a href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="menu-list-item">
                                <a href="#beneficios">
                                    Benefícios
                                </a>
                            </li>
                            <li className="menu-list-item">
                                <a href="#sobre">
                                    Sobre Nós
                                </a>
                            </li>
                            <li className="menu-list-item">
                                <a href="#contato">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
{/* <!-- Section Welcome --> */}
    <section id="home" className="section-welcome">
        <div className="container-fluid">
            <div className="row mt-n1 mt-lg-0">
                <div className="col-12 col-lg-10 offset-lg-1 black-bg d-flex align-items-center">
                    <div className="welcome-text-wrapper">
                        <h1 className="welcome-title text-white">Bem-Vindo ao Futuro</h1>
                        <p className="welcome-description">
                            Faça uma <b>consultoria de graça</b> e descubra <br className="d-none d-lg-block"/> 
                            como iremos fazer o site da sua empresa <br className="d-none d-lg-block"/>
                            ter mais visibilidade e credibilidade! 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

{/* <!-- Section Pesquisa --> */}
    <section id="beneficios" className="section-pesquisa py-4 py-lg-5">
        <div className="container-fluid pb-5">
            <div className="row">
                <div className="col-10 offset-1 offset-lg-0 col-lg-12 mb-0 mb-lg-5">
                    <h1 className="pesquisa-title text-center">Por que ter um site premium</h1>
                    <p className="pesquisa-description text-center pb-lg-4">
                        Uma pesquisa realizada pela Universidade Standford mostrou que
                    </p>
                </div>
                <div className="d-none d-lg-block col-lg-1"></div>
                <div className="col-10 offset-1 offset-lg-0 col-lg-10 mt-lg-5 mb-lg-5 pb-lg-5 pt-5">
                    <div className="row">
                        <div className="col-12 col-lg-4 d-flex justify-content-center mb-5 mb-lg-0">
                            <div>
                                <h1 className="pesquisa-porcentagem mb-lg-4">90%</h1>
                                <h2 className="pesquisa-text">
                                    das primeiras impressões <br className="d-none d-lg-block"/>
                                    estão ligadas à beleza e <br className="d-none d-lg-block"/>
                                    usabilidade do seu site.
                                </h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex justify-content-center mb-5 mb-lg-0">
                            <div>
                                <h1 className="pesquisa-porcentagem mb-lg-4">88%</h1>
                                <h2 className="pesquisa-text">
                                    admitiram não retornar  <br className="d-none d-lg-block"/>
                                    após uma experiência <br className="d-none d-lg-block"/>
                                    negativa no site.
                                </h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex justify-content-center mb-lg-0">
                            <div>
                                <h1 className="pesquisa-porcentagem mb-lg-4">75%</h1>
                                <h2 className="pesquisa-text">
                                    julgam a credibilidade <br className="d-none d-lg-block"/>
                                    de uma empresa pelo <br className="d-none d-lg-block"/>
                                    aspecto do seu site.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-1"></div>
            </div>
        </div>
    </section>

{/* <!-- (Desktop) Section Marcante --> */}
    <section className="d-none d-lg-block section-marcante parallax">
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="d-none d-lg-block col-lg-1"></div>
                <div className="col-12 col-lg-10 my-auto d-flex align-items-center">
                    <div className="marcante-text-wrapper">
                        <h1 className="marcante-title"><span className="underline white">#</span>Marcante</h1>
                        <h2 className="marcante-description">
                            Dê á sua empresa primeiras <br className="d-none d-lg-block"/>
                            impressões marcantes e <br className="d-none d-lg-block"/>
                            inesquecíveis.</h2>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-1"></div>
            </div>
        </div>
    </section>

{/* <!-- (Mobile) Section Marcante --> */}
    <section className="d-block d-lg-none section-marcante">
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="d-none d-lg-block col-lg-1"></div>
                <div className="col-12 col-lg-10 my-auto d-flex align-items-center">
                    <div className="marcante-text-wrapper">
                        <h1 className="marcante-title"><span className="underline white">#</span>Marcante</h1>
                        <h2 className="marcante-description mb-0">
                            Dê á sua empresa primeiras <br className="d-none d-lg-block"/>
                            impressões marcantes e <br className="d-none d-lg-block"/>
                            inesquecíveis.</h2>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-1"></div>
            </div>
        </div>
    </section>

{/* <!-- (Desktop) Section Experiência --> */}
    <section className="d-none d-lg-block section-experiencia">
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="d-none d-lg-block col-lg-1"></div>
                <div className="col-12 col-lg-10 my-auto d-flex align-items-center">
                    <div className="marcante-text-wrapper">
                        <h1 className="experiencia-title"><span className="underline black">#</span>Experiência</h1>
                        <h2 className="experiencia-description">
                            Dê aos seus usuários <br className="d-none d-lg-block"/>
                            experiências fluidas e bem <br className="d-none d-lg-block"/>
                            planejadas.</h2>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-1"></div>
            </div>
        </div>
    </section>

{/* <!-- (Mobile) Section Experiência --> */}
    <section className="d-block d-lg-none section-experiencia">
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="d-none d-lg-block col-lg-1"></div>
                <div className="col-12 col-lg-10 my-auto d-flex align-items-center">
                    <div className="marcante-text-wrapper">
                        <h1 className="experiencia-title"><span className="underline black">#</span>Experiência</h1>
                        <h2 className="experiencia-description mb-0">
                            Dê aos seus usuários <br className="d-none d-lg-block"/>
                            experiências fluidas e bem <br className="d-none d-lg-block"/>
                            planejadas.</h2>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-1"></div>
            </div>
        </div>
    </section>

{/* <!-- (Desktop) Section Minimalista --> */}
    <section className="d-none d-lg-block section-minimalista parallax">
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="d-none d-lg-block col-lg-1"></div>
                <div className="col-12 col-lg-10 my-auto d-flex align-items-center">
                    <div className="marcante-text-wrapper">
                        <h1 className="minimalista-title"><span className="underline white">#</span>Minimalista</h1>
                        <h2 className="minimalista-description">
                            Com um aspecto minimalista, <br className="d-none d-lg-block"/>
                            toda a sua credibilidade <br className="d-none d-lg-block"/>
                            será passada de forma limpa.
                        </h2>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-1"></div>
            </div>
        </div>
    </section>

{/* <!-- (Mobile) Section Minimalista --> */}
    <section className="d-block d-lg-none section-minimalista">
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="d-none d-lg-block col-lg-1"></div>
                <div className="col-12 col-lg-10 col-lg-10 my-auto d-flex align-items-center">
                    <div className="marcante-text-wrapper">
                        <h1 className="minimalista-title"><span className="underline white">#</span>Minimalista</h1>
                        <h2 className="minimalista-description mb-0 pr-5">
                            Com um aspecto minimalista, <br className="d-none d-lg-block"/>
                            toda a sua credibilidade <br className="d-none d-lg-block"/>
                            será passada de forma limpa.
                        </h2>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-1"></div>
            </div>
        </div>
    </section>

{/* <!-- Section TimeLine --> */}
    <section id="sobre" className="section-timeline py-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <h1 className="timeline-main-title">Sobre a Devware</h1>
                    <ul className="timeline mt-5">
                    {/* <!-- Multiplataforma --> */}
                        <li className="mt-5">
                            <div className="row">
                                <div className="col-12 col-lg-4 order-2 order-lg-1 d-flex align-items-center">
                                    <div className="timeline-text-wrapper">
                                        <h1 className="timeline-title text-center text-lg-left">Multiplataforma</h1>
                                        <p className="timeline-description text-center text-lg-left">
                                            Nosso objetivo é entregar a grandes empresas produtos digitais 
                                            de alta qualidade, altamente funcionais em <b>quaisquer dispositivos</b>.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 order-lg-2">
                                    <div className="timeline-image-wrapper mb-3 mb-lg-auto">
                                       <img src="/img/timeline-img-1.png" alt="Funciona em qualquer dispositivo" className="timeline-image"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- Garantia --> */}
                        <li className="mt-lg-5 pt-5">
                            <div className="row">
                                <div className="col-12 col-lg-4 offset-lg-4">
                                    <div className="timeline-image-wrapper mb-3 mb-lg-auto">
                                       <img src="/img/timeline-img-2.png" alt="Funciona em qualquer dispositivo" className="timeline-image"/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 d-flex align-items-center">
                                    <div className="timeline-text-wrapper">
                                        <h1 className="timeline-title text-center text-lg-left">Garantia</h1>
                                        <p className="timeline-description text-center text-lg-left">
                                            A Devware se predispõe a garantir a qualidade do produto entregue, 
                                            dando a você uma <b>garantia de 7 dias</b> caso suas expectativas não sejam 
                                            correspondidas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- Metodologia --> */}
                        <li className="mt-lg-5 pt-5">
                            <div className="row">
                                <div className="col-12 col-lg-4 order-2 order-lg-1 d-flex align-items-center">
                                    <div className="timeline-text-wrapper">
                                        <h1 className="timeline-title text-center text-lg-left">Metodologia</h1>
                                        <p className="timeline-description text-center text-lg-left">
                                            Como parte da nossa metodologia, iremos te entregar um produto simples, lindo e que passe <b>credibilidade</b> para a sua marca.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 order-lg-2">
                                    <div className="timeline-image-wrapper mb-3 mb-lg-auto">
                                       <img src="/img/timeline-img-3.png" alt="Funciona em qualquer dispositivo" className="timeline-image"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

{/* <!-- Section Contato --> */}
    <section id="contato" className="section-contato py-5">
        <div className="container-fluid">
            <div className="row mt-4 mb-4">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <h1 className="contato-title">Vamos construir algo incrível juntos?</h1>
                </div>
            </div>
                <div className="row section-form-row align-items-center">
                    <div className="col-12 col-lg-4 offset-lg-4 text-center mt-4">
                        <button className="modal-form-btn" data-toggle="modal" data-target="#modal-form">Sim, vamos fazer isto!</button>
                    </div>
                </div>
        </div>
    </section>

{/* // <!-- WhatsApp Float Button --> */}
    <a href="https://api.whatsapp.com/send?phone=5561999622175&text=Ol%C3%A1!%20Gostaria%20de%20dar%20a%20minha%20empresa%20um%20site%20premium.%20Voc%C3%AA%20poderia%20me%20ajudar%3F" rel="noreferrer" target="_blank">
        <div id="whatsapp-btn" className="wpp-button-wrapper">
            <img className="wpp-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDkwIDkwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MCA5MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnPgoJPHBhdGggaWQ9IldoYXRzQXBwIiBkPSJNOTAsNDMuODQxYzAsMjQuMjEzLTE5Ljc3OSw0My44NDEtNDQuMTgyLDQzLjg0MWMtNy43NDcsMC0xNS4wMjUtMS45OC0yMS4zNTctNS40NTVMMCw5MGw3Ljk3NS0yMy41MjIgICBjLTQuMDIzLTYuNjA2LTYuMzQtMTQuMzU0LTYuMzQtMjIuNjM3QzEuNjM1LDE5LjYyOCwyMS40MTYsMCw0NS44MTgsMEM3MC4yMjMsMCw5MCwxOS42MjgsOTAsNDMuODQxeiBNNDUuODE4LDYuOTgyICAgYy0yMC40ODQsMC0zNy4xNDYsMTYuNTM1LTM3LjE0NiwzNi44NTljMCw4LjA2NSwyLjYyOSwxNS41MzQsNy4wNzYsMjEuNjFMMTEuMTA3LDc5LjE0bDE0LjI3NS00LjUzNyAgIGM1Ljg2NSwzLjg1MSwxMi44OTEsNi4wOTcsMjAuNDM3LDYuMDk3YzIwLjQ4MSwwLDM3LjE0Ni0xNi41MzMsMzcuMTQ2LTM2Ljg1N1M2Ni4zMDEsNi45ODIsNDUuODE4LDYuOTgyeiBNNjguMTI5LDUzLjkzOCAgIGMtMC4yNzMtMC40NDctMC45OTQtMC43MTctMi4wNzYtMS4yNTRjLTEuMDg0LTAuNTM3LTYuNDEtMy4xMzgtNy40LTMuNDk1Yy0wLjk5My0wLjM1OC0xLjcxNy0wLjUzOC0yLjQzOCwwLjUzNyAgIGMtMC43MjEsMS4wNzYtMi43OTcsMy40OTUtMy40Myw0LjIxMmMtMC42MzIsMC43MTktMS4yNjMsMC44MDktMi4zNDcsMC4yNzFjLTEuMDgyLTAuNTM3LTQuNTcxLTEuNjczLTguNzA4LTUuMzMzICAgYy0zLjIxOS0yLjg0OC01LjM5My02LjM2NC02LjAyNS03LjQ0MWMtMC42MzEtMS4wNzUtMC4wNjYtMS42NTYsMC40NzUtMi4xOTFjMC40ODgtMC40ODIsMS4wODQtMS4yNTUsMS42MjUtMS44ODIgICBjMC41NDMtMC42MjgsMC43MjMtMS4wNzUsMS4wODItMS43OTNjMC4zNjMtMC43MTcsMC4xODItMS4zNDQtMC4wOS0xLjg4M2MtMC4yNy0wLjUzNy0yLjQzOC01LjgyNS0zLjM0LTcuOTc3ICAgYy0wLjkwMi0yLjE1LTEuODAzLTEuNzkyLTIuNDM2LTEuNzkyYy0wLjYzMSwwLTEuMzU0LTAuMDktMi4wNzYtMC4wOWMtMC43MjIsMC0xLjg5NiwwLjI2OS0yLjg4OSwxLjM0NCAgIGMtMC45OTIsMS4wNzYtMy43ODksMy42NzYtMy43ODksOC45NjNjMCw1LjI4OCwzLjg3OSwxMC4zOTcsNC40MjIsMTEuMTEzYzAuNTQxLDAuNzE2LDcuNDksMTEuOTIsMTguNSwxNi4yMjMgICBDNTguMiw2NS43NzEsNTguMiw2NC4zMzYsNjAuMTg2LDY0LjE1NmMxLjk4NC0wLjE3OSw2LjQwNi0yLjU5OSw3LjMxMi01LjEwN0M2OC4zOTgsNTYuNTM3LDY4LjM5OCw1NC4zODYsNjguMTI5LDUzLjkzOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiNmZmZmZmYiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />            <p className="wpp-text">Enviar mensagem</p>
        </div>
    </a>

{/* // <!-- Section Footer --> */}
    <section id="footer" className="footer-section py-3">
        <div className="footer-text-wrapper text-center text-dark">
            Copyright 2019 - Devware - Todos os Direitos Reservados
        </div>
    </section>

{/* <!-- Modal do Formulário --> */}
    <div className="modal fade" id="modal-form" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body p-5">
                    <span className="close-icon" data-dismiss="modal">x</span>
                    <h1 className="modal-form-title text-center">Faça a avaliação <b>gratuita</b>!</h1>
                    <form action="#" method="POST" className="needs-validation mt-5 mb-4" noValidate>
                        <input value="" type="hidden" />
                        <div className="form-group">
                            <label className="form-label mb-0">Seu nome</label>
                            <input type="text" className="form-control input" name="nome" id="nome" required/>
                            <div className="invalid-feedback">
                                Ops, preciso do seu nome para fecharmos negócio!
                            </div>
                        </div>
                        <div className="form-group mt-4 pt-2">
                            <label className="form-label mb-0">Seu email</label>
                            <input type="email" className="form-control input" name="email" id="email" required/>
                            <div className="invalid-feedback">
                                Ops, preciso do seu email para trocarmos mensagem!
                            </div>
                        </div>
                        <div className="form-group mt-4 pt-2">
                            <label className="form-label mb-0">Seu telefone</label>
                            <input type="telephone" className="form-control input" name="telefone" id="telefone" required/>
                            <div className="invalid-feedback">
                                Ops, preciso do seu telefone para eu te ligar caso alguma coisa aconteça!
                            </div>
                        </div>
                        <div className="form-group mt-4 pt-2">
                            <label className="form-label mb-0">Como posso te ajudar?</label>
                            <textarea id="message-box" className="form-control input" name="mensagem" rows="1" required></textarea>
                            <div className="invalid-feedback">
                                Ops, preciso saber mais para te ajudar da melhor maneira possível!
                            </div>
                        </div>
                    
                        <button className="btn form-btn mt-4">Enviar</button>
                        {/* <!-- <button className="btn form-btn-light mt-4" data-dismiss="modal">
                            <img className="return-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAxIDUxMi4wMDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4NC44MzQsMTgwLjY5OWMtMC42OTgsMC0zNDguNzMzLDAtMzQ4LjczMywwbDczLjMyNi04Mi4xODdjNC43NTUtNS4zMyw0LjI4OS0xMy41MDUtMS4wNDEtMTguMjYgICAgYy01LjMyOC00Ljc1NC0xMy41MDUtNC4yOS0xOC4yNiwxLjA0MWwtODIuNTgyLDkyLjU2Yy0xMC4wNTksMTEuMjc4LTEwLjA1OCwyOC4yODIsMC4wMDEsMzkuNTU3bDgyLjU4Miw5Mi41NjEgICAgYzIuNTU2LDIuODY1LDYuMDk3LDQuMzIzLDkuNjU0LDQuMzIzYzMuMDY0LDAsNi4xMzktMS4wODMsOC42MDYtMy4yODJjNS4zMy00Ljc1NSw1Ljc5NS0xMi45MywxLjA0MS0xOC4yNmwtNzMuMzI2LTgyLjE4OCAgICBjMCwwLDM0OC4wMzQsMCwzNDguNzMzLDBjNTUuODU4LDAsMTAxLjMsNDUuNDQ0LDEwMS4zLDEwMS4zcy00NS40NDMsMTAxLjMtMTAxLjMsMTAxLjNoLTYxLjU4ICAgIGMtNy4xNDMsMC0xMi45MzMsNS43OTEtMTIuOTMzLDEyLjkzM2MwLDcuMTQyLDUuNzksMTIuOTMzLDEyLjkzMywxMi45MzNoNjEuNThjNzAuMTIsMCwxMjcuMTY2LTU3LjA0NiwxMjcuMTY2LTEyNy4xNjYgICAgQzUxMiwyMzcuNzQ1LDQ1NC45NTQsMTgwLjY5OSwzODQuODM0LDE4MC42OTl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                        </button> --> */}
                    </form>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Home
