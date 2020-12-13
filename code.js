const traerTextoBusqueda = () => {
    const botonBuscar = document.getElementById('botonBuscar')
    botonBuscar.addEventListener('click',(evento) => {
        const textoBuscar = document.getElementById('textoBuscar')
        valorTextBuscar= textoBuscar.value;
        console.log(textoBuscar.value);
        llamadaAPI(valorTextBuscar);
    })
}
 
        
    const llamadaAPI = async (valorTextBuscar) => {
        const solicitud= await fetch(url="https://gnews.io/api/v4/search?q="+valorTextBuscar+"&token=5909b4b307c9c8a64c0db2998f18fae2&lang=es")
        console.log(solicitud);
        const resultadojson= await solicitud.json();
        
        console.log(resultadojson)

        const not = resultadojson['articles']
        if (not==0)
        {
            alert("No se encontraron noticias")
        }
        else {
        const not0 =not['0']
        const cont0=not0['content']
        const title0=not0['title']
        const urlimg0=not0['image']
        console.log(cont0)
        console.log(title0)

        
        document.getElementById('imgnot0').src = urlimg0
        document.getElementById('title0').innerHTML = title0
        document.getElementById('parr0').innerHTML = cont0
        
        const not1 =not['1']
        const cont1=not1['content']
        const title1=not1['title']
        const urlimg1=not1['image']
        console.log(cont1)

        document.getElementById('imgnot1').src = urlimg1
        document.getElementById('title1').innerHTML = title1
        document.getElementById('parr1').innerHTML = cont1
        
        const not2 =not['2']
        const cont2=not2['content']
        const title2=not2['title']
        const urlimg2=not2['image']
        console.log(cont2)

        
        document.getElementById('imgnot2').src = urlimg2
        document.getElementById('title2').innerHTML = title2
        document.getElementById('parr2').innerHTML = cont2

        const not3 =not['3']
        const cont3=not3['content']
        const title3=not3['title']
        const urlimg3=not3['image']
        console.log(cont3)

        document.getElementById('imgnot3').src = urlimg3
        document.getElementById('title3').innerHTML = title3
        document.getElementById('parr3').innerHTML = cont3

        contenedorRespuesta= document.getElementById('contnot0');

        if (contenedorRespuesta.style.display==="")
        {
            contenedorRespuesta.style.display="block";
        }
        contenedorRespuesta= document.getElementById('contnot1');

        if (contenedorRespuesta.style.display==="")
        {
            contenedorRespuesta.style.display="block";
        }        contenedorRespuesta= document.getElementById('contnot2');

        if (contenedorRespuesta.style.display==="")
        {
            contenedorRespuesta.style.display="block";
        }        contenedorRespuesta= document.getElementById('contnot3');

        if (contenedorRespuesta.style.display==="")
        {
            contenedorRespuesta.style.display="block";
        }
    }
    } 



traerTextoBusqueda();   