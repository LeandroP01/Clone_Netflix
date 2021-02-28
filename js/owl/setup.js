

$('.owl-carousel').owlCarousel({
    loop:true, /**True:Loop infinito das imagens. false: vai até um certo ponto */
    margin:10, /**Margem entre uma caixa e outra */
    nav:false, /**Botoes de navegação < > habilitados */
    responsive:{
        0:{         /**Quando a tela estiver perto de 0px, mostrará 1 item por vez */
            items:1
        },
        600:{      /**Quando a tela estiver com 600px ou menor, mostrará 3 itens por vez */
            items:3
        },
        1000:{      /**Quando a tela estiver  com 1000px ou menor, mostrará 5 itens por vez */
            items:5
        }
    }
    
})



