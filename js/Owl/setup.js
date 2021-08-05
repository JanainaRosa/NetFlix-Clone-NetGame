
//* esta function redireciona para o login do site, não separei pois estão em uma mesma
//* "role" e assim sendo se separesse acredito que iria desconfigurar a Style do HTML.
//* queria colocar os botões abrindo em uma nova aba, tentei add o target="_blank" ao final
//* do endereço mais não entrou ;(

$('button').click(function(){
    window.location.href='https://my.account.sony.com/central/signin/?duid=0000000700090100f7b1da1f97fca3eb644762a17c838283e5c2832f27e7b7099efb6ed45ab5aac2&response_type=code&client_id=e4a62faf-4b87-4fea-8565-caaabb3ac918&scope=web%3Acore&access_type=offline&state=d1e57ceb40516a69fef547506dd1644586b99359cee098bddd09277918689956&service_entity=urn%3Aservice-entity%3Apsn&ui=pr&smcid=web%3Astore&redirect_uri=https%3A%2F%2Fweb.np.playstation.com%2Fapi%2Fsession%2Fv1%2Fsession%3Fredirect_uri%3Dhttps%253A%252F%252Fstore.playstation.com%252Fpt-br%252Fproduct%252FUP0002-CUSA15240_00-CODWARZONE000001%252F%26x-psn-app-ver%3D%2540sie-ppr-web-session%252Fsession%252Fv5.10.3&auth_ver=v3&error=login_required&error_code=4165&error_description=User+is+not+authenticated&no_captcha=false&cid=c32ecb4c-4c32-4bcc-a296-57abc19c0f21#/signin/ca?entry=ca';
})


//* serve como anfitrião do site - trazendo experiência para o usuário...
var nome = window.prompt('Qual seu Nome?')
var res = window.document.getElementById('resultado')
res.innerText =` Olá, ${nome}! `



//* já peguei com o codigo assim ...

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


