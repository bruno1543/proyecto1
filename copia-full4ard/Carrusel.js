let imagenes = ['imagenes/img1.png','imagenes/img2.png','imagenes/img3.png','imagenes/img4,png'],
cont = 0;

function carrusel(pri){
    pri.addEventListener('click', e =>{
        let atras = pri.querySelector('.atras'),
        adelante= pri.querySelector('.adelante'),
        img= pri.querySelector('img'),
        tgt= e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            } else{
                img.src =imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        }
        else if(tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            } else{
                img.src =imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded",()=>{
    let pri = document.querySelector('.pri');
    carrusel(pri);
})