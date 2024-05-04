var x = new XMLHttpRequest();
var screen;
var url = '../screens/main.html';
// console.log(x);

setTimeout(()=>{
    x.onreadystatechange = function(){
        if(x.readyState == 4 && x.status == 200){
            // console.log(x.response)
            screen = x.response
            abrirScreen()
        }
        else{
            // console.log('Deu errado')
        }
    }
    
    x.open('GET', url);
    
    x.send();
}, '1000');

function abrirScreen(){
    var loadingSection = document.getElementById('loadingSection')
    loadingSection.style.display='none'
    if(loadingSection.style.display === "none"){
        document.getElementById("tela").innerHTML = screen;
    }
}

// fetch('../teste.txt')
//     .then((headers) => setTimeout(()=>{
//         if(response.status == '200'){
//             screen = headers.headers
//             abrirScreen()
//             console.log(response);
//         }
//     }), '1000');
//     // window.location.href = response.url