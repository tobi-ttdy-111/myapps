


// main variables
let matriz;
const matrizIngreso = document.querySelector( '#matrizIngreso' );
const button = document.querySelector( '#button' );
let puntos = [];
const info = document.querySelector( '#info' );



// validarIngreso
const validarIngreso = ( numero ) => {

    puntos = [];
    if ( numero < 3 ) {
        info.innerHTML = `<p style="color: #FF6471">No puedes ingresar un numero menor a 3</p>`
        return false
    } else if ( numero % 2 == 0 ) {
        info.innerHTML = `<p style="color: #FF6471">Solo se pueden numeros impares</p>`;
        return false
    } else {
        matriz = parseInt( matrizIngreso.value );
        info.innerHTML = `
            <p>Secuencia <span>1, 2, ..., ${ matriz * matriz }</span></p>
            <p>Coordenadas centrales <span>( ${ ( matriz / 2 ) + .5 }, ${ ( matriz / 2 ) + .5 } )</span></p>
            <p>Sumatoria  ( n (n2 + 1) ) / 2: <span>${ ( matriz * ( ( matriz * matriz )+ 1 ) ) / 2 }</span></p>
        `;
        return true;
    }

};


// addEvent
button.addEventListener( 'click', () => {

    const validado = validarIngreso( matrizIngreso.value );
    if ( validado ) {


        console.log( matriz )

        // primeraCoordenada
        const primeraCoordenada = () => {

            const ejex = ( ( matriz / 2 ) + .5 );
            const ejey = ( ( matriz / 2 ) + .5 ) -1;
            puntos.push({ numero: 1, ejex, ejey, coordenada: `coordenada${ ejex }-${ ejey }` });

        };
        primeraCoordenada();

        // validarPunto
        const validarPunto = ( sitio ) => {

            let puntoOcupado = false;
            puntos.forEach( punto => {
                if ( punto.coordenada == sitio ) {
                    return puntoOcupado = true;
                };
            });
            return puntoOcupado;

        };

        // validarEje
        const validarEje = ( eje ) => {

            if ( eje === 0 ) { return matriz };
            if ( eje === -1 ) { return matriz - 1 };
            return eje;

        };

        // generarCoordenadas
        const generarCoordenadas = () => {

            while ( puntos.length < ( matriz * matriz ) ) {
                const anterior = puntos[ puntos.length - 1 ];
                let ejex = anterior.ejex - 1;
                let ejey = anterior.ejey - 1;
                ejex = validarEje( ejex );
                ejey = validarEje( ejey );
                const puntoOcupado = validarPunto( `coordenada${ ejex }-${ ejey }` );
                if ( puntoOcupado ) {
                    ejex = anterior.ejex;
                    ejey = anterior.ejey - 2;
                };
                ejex = validarEje( ejex );
                ejey = validarEje( ejey );
                puntos.push({ numero: anterior.numero + 1, ejex, ejey, coordenada: `coordenada${ ejex }-${ ejey }` });

            };

        };
        generarCoordenadas();


        // cuadro
        const cuadro = document.querySelector( '.cuadro' );
        cuadro.innerHTML = ''

        // generarTabla
        const generarTabla = () => {

            let columna = 1;
            let fila = matriz;
            let filaActual;
            while ( fila >= 1 ) {
                if ( columna == 1 ) {
                    cuadro.innerHTML += `<div class="fila${ fila }" style="display: flex;"></div>`;
                    filaActual = document.querySelector( `.fila${ fila }` );
                };
                filaActual.innerHTML += `<div class="coordenada${ columna }-${ fila } coo"></div>`;
                columna ++;
                if ( columna > matriz ) { columna = 1; fila -- };
            };

        };
        generarTabla();


        // rellenarTabla
        const rellenarTabla = () => {

            puntos.forEach( punto => {
                document.querySelector( `.${ punto.coordenada }` ).innerHTML = `<p>${ punto.numero }</p>`;
            });

        };
        rellenarTabla();


    };

});

