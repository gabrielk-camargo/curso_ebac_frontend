$(document).ready(function () {
    $("#carrossel__slides").slick({
        autoplay: true,
    });

    $(".menu__hamburguer").click(function(){
        $("nav").slideToggle();
    })
    
    $("#Telefone").mask("(00) 00000-0000")
    
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem__enviar:{
                required: true
            },
            Veiculo__interesse:{
                required: false
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if( camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretor`)
            }
        }
    })
    $('.lista__veiculos button').click(function(){
        const destino = $("#Contato")

        const nomeVeiculo = $(this).parent().find("h3").text()

        $("#Veiculo__interesse").val(nomeVeiculo)

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
  });