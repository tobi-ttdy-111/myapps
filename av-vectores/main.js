

// main variables
let vectorA,
    vectorB,
    vectorC,
    vectorD;


// resultantes
let vectorRx;
let vectorRy;
let vectorResult;
let angulo;


// rotateBtn
const rotateBtn = document.querySelector( '#rotateBtn' );
let rotate = false;
rotateBtn.addEventListener( 'click', () => {

    let rotateDeg = 0
    if ( rotate ) { rotate = false; rotateDeg = 0; rotateBtn.innerHTML = '<i class="ri-arrow-left-up-line"></i>' } else { rotate = true; rotateDeg = 45; rotateBtn.innerHTML = '<i class="ri-arrow-up-line"></i>' };
    rotarPlano( rotateDeg );
    console.log( vectorResult );
    if ( rotate ) { vectorResult.setAttribute( 'transform', `rotate( ${ 45 }, ${ vectorResult.attributes.x.value }, ${ vectorResult.attributes.y.value } )` ) };

});


// rotarPlano
const rotarPlano = ( rotateDeg ) => {

    svgEtiqueta.classList.toggle( 'rotate' );
    document.querySelectorAll( '.ejes' ).forEach( eje => {
        eje.setAttribute( 'transform', `rotate( ${ rotateDeg }, ${ eje.attributes.x.value }, ${ eje.attributes.y.value } )` );
    });
    document.querySelectorAll( '.coordenateNum' ).forEach( eje => {
        const x = eje.attributes.x.value;
        const y = eje.attributes.y.value;
        eje.setAttribute( 'transform', `rotate( ${ rotateDeg }, ${ x + 50 }, ${ y } )` );
    });

};


// transformVectores
const transformVectores = () => {

    vectorA = document.querySelector( '#vectorA' ).value * 1;
    vectorB = document.querySelector( '#vectorB' ).value * 1;
    vectorC = document.querySelector( '#vectorC' ).value * -1;
    vectorD = document.querySelector( '#vectorD' ).value * -1;
    vectorRx = vectorA + vectorC;
    vectorRy = vectorB + vectorD;

};


// coordenadaMayor
const coordenadaMayor = () => {

    const coordenadas = [];
    coordenadas.push( Math.sign( vectorA ) * vectorA, Math.sign( vectorB ) * vectorB, Math.sign( vectorC ) * vectorC, Math.sign( vectorD ) * vectorD, Math.sign( vectorRx ) * vectorRx, Math.sign( vectorRy ) * vectorRy );
    return Math.max( ...coordenadas );

};


// puntaFlecha
const puntaFlecha = ( vector, xActual, yActual, eje ) => {

    if ( eje == 'y' ) {
        if ( vector > 0 && vector != 0 ) {
            svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual - 1 }" y1="${ yActual }" x2="${ xActual + 5 }" y2="${ yActual + 10 }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`;
            svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual + 1 }" y1="${ yActual }" x2="${ xActual - 5 }" y2="${ yActual + 10 }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`;
        } else if ( vector != 0 ) {
            svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual - 1 }" y1="${ yActual }" x2="${ xActual + 5 }" y2="${ yActual - 10 }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`;
            svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual + 1 }" y1="${ yActual }" x2="${ xActual - 5 }" y2="${ yActual - 10 }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`;
        };
    };
    if ( eje == 'x' ) {
        if ( vector > 0 && vector != 0 ) {
            svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual }" y1="${ yActual - 1 }" x2="${ xActual - 10 }" y2="${ yActual + 5 }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`;
            svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual }" y1="${ yActual + 1 }" x2="${ xActual - 10 }" y2="${ yActual - 5 }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`;
        } else if ( vector != 0 ) {
            svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual }" y1="${ yActual - 1 }" x2="${ xActual + 10 }" y2="${ yActual + 5 }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`;
            svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual }" y1="${ yActual + 1 }" x2="${ xActual + 10 }" y2="${ yActual - 5 }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`;
        };
    };

};


// graficarVectores
const graficarVectores = ( svgEtiqueta, avance, width ) => {

    let xActual = width;
    let yActual = width;

    svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual }" y1="${ yActual }" x2="${ xActual + ( vectorA * avance ) }" y2="${ yActual }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`;
    xActual = xActual + ( vectorA * avance );
    puntaFlecha( vectorA, xActual, yActual, 'x' );

    svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual }" y1="${ yActual }" x2="${ xActual }" y2="${ yActual - ( vectorB * avance ) }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`
    yActual = yActual - ( vectorB * avance );
    puntaFlecha( vectorB, xActual, yActual, 'y' );

    svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual }" y1="${ yActual }" x2="${ xActual + ( vectorC * avance ) }" y2="${ yActual }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`
    xActual = xActual + ( vectorC * avance );
    puntaFlecha( vectorC, xActual, yActual, 'x' );

    svgEtiqueta.innerHTML += `<line class="line" x1="${ xActual }" y1="${ yActual }" x2="${ xActual }" y2="${ yActual - ( vectorD * avance ) }" stroke="hsl(277, 56%, 68%)" stroke-width="4px"/>`
    yActual = yActual - ( vectorD * avance );
    puntaFlecha( vectorD, xActual, yActual, 'y' );

    svgEtiqueta.innerHTML += `<line class="line" x1="${ width }" y1="${ width }" x2="${ xActual }" y2="${ yActual }" stroke="hsl(203, 71%, 60%)" stroke-width="4px"/>`;

    let totalX = ( width - xActual ) / avance;
    let totalY = ( width - yActual ) / avance;
    let cuadrante;

    if ( totalX <= 0 && totalY >= 0 ) { cuadrante = 1 };
    if ( totalX > 0 && totalY >= 0 ) { cuadrante = 2 };
    if ( totalX >= 0 && totalY < 0 ) { cuadrante = 3 };
    if ( totalX < 0 && totalY < 0 ) { cuadrante = 4 };

    if ( totalX < 0 ) { totalX = totalX * -1 };
    if ( totalY < 0 ) { totalY = totalY * -1 };
    angulo = Math.atan2( totalY, totalX );
    angulo = angulo * 180 / Math.PI;

    svgEtiqueta.innerHTML += `<text id="vectorResult" fill="#fff">Vr = ( ${ totalX }, ${ totalY } )</text>`;

    vectorResult = document.querySelector( '#vectorResult' );
    if ( ( width * 2 ) - xActual <= 30 ) { vectorResult.setAttribute( 'x', `${ xActual - 50 }` ); } else { vectorResult.setAttribute( 'x', `${ xActual }` ) };
    if ( ( width * 2 ) - yActual <= 30 && yActual >= width ) { vectorResult.setAttribute( 'y', `${ yActual }` ); } else { vectorResult.setAttribute( 'y', `${ yActual + 7 }` ) };
    if ( ( width * 2 ) - yActual <= 30 && yActual <= width ) { vectorResult.setAttribute( 'y', `${ yActual }` ); } else { vectorResult.setAttribute( 'y', `${ yActual - 7 }` ) };
    if ( rotate ) { vectorResult.setAttribute( 'transform', `rotate( ${ 45 }, ${ vectorResult.attributes.x.value }, ${ vectorResult.attributes.y.value } )` ) };

    switch ( cuadrante ) {
        case 2: angulo = 180 - angulo; break;
        case 3: angulo = angulo + 180; break;
        case 4: angulo = 360 - angulo; break;
    };
    if ( angulo < 0 ) { angulo = angulo * -1 };
    svgEtiqueta.innerHTML += `<line class="line" transform="rotate( ${ angulo * -1 }, ${ xActual }, ${ yActual } )" x1="${ xActual - 1 }" y1="${ yActual }" x2="${ xActual - 10 }" y2="${ yActual + 5 }" stroke="hsl(203, 71%, 60%)" stroke-width="4px"/>`;
    svgEtiqueta.innerHTML += `<line class="line" transform="rotate( ${ angulo * -1 }, ${ xActual }, ${ yActual } )" x1="${ xActual + 1 }" y1="${ yActual }" x2="${ xActual - 10 }" y2="${ yActual - 5 }" stroke="hsl(203, 71%, 60%)" stroke-width="4px"/>`;

};


// crearPlano
const crearPlano = ( mayor ) => {

    const svgEtiqueta = document.querySelector( '#svgEtiqueta' );
    let width = window.screen.width;
    svgEtiqueta.innerHTML = '';
    let size;
    ( width < 500 ) ? width = 245 : width = 495;
    const avance = parseInt( ( width / 2 ) / mayor );
    ( avance < 30 ) ? size = 2 : size = 5;


    // ejes
    width = width / 2
    svgEtiqueta.innerHTML = `
        <line x1="${ width }" y1="15" x2="${ width }" y2="${ ( width * 2 ) - 15 }" stroke="#adb5bd" stroke-width="2px"/>
        <line x1="15" y1="${ width }" x2="${ ( width * 2 ) - 15 }" y2="${ width }" stroke="#adb5bd" stroke-width="2px"/>

        <text class="ejes" x="${ ( width * 2 ) - 10 }" y="${ width + 3 }" fill="#adb5bd">A</text>
        <text class="ejes" x="${ width - 3 }" y="${ 10 }" fill="#adb5bd">B</text>
        <text class="ejes" x="${ 0 }" y="${ width + 3 }" fill="#adb5bd">C</text>
        <text class="ejes" x="${ width - 3 }" y="${ width * 2 }" fill="#adb5bd">D</text>
    `;
    graficarVectores( svgEtiqueta, avance, width );

    // generateX+
    for ( let i = 1; i < mayor; i++ ) {
        svgEtiqueta.innerHTML += `
            <line x1="${ width - size }" y1="${ width - ( avance * i ) }" x2="${ width + size }" y2="${ width - ( avance * i ) }" stroke="#adb5bd" stroke-width="2px"/>
        `;
        if ( avance > 20 ) { svgEtiqueta.innerHTML += `<text class="coordenateNum" x="${ width + 10 }" y="${ width - ( avance * i ) + 2 }" fill="#adb5bd">${ i }</text>`};
    };

    // generateX-
    for ( let i = 1; i < mayor; i++ ) {
        svgEtiqueta.innerHTML += `
            <line x1="${ width - size }" y1="${ width + ( avance * i ) }" x2="${ width + size }" y2="${ width + ( avance * i ) }" stroke="#adb5bd" stroke-width="2px"/>
        `;
        if ( avance > 20 ) { svgEtiqueta.innerHTML += `<text class="coordenateNum" x="${ width - 22 }" y="${ width + ( avance * i ) + 2 }" fill="#adb5bd">${ i * -1 }</text>`};
    };

    // generateY+
    for ( let i = 1; i < mayor; i++ ) {
        svgEtiqueta.innerHTML += `
            <line x1="${ width + ( avance * i ) }" y1="${ width - size }" x2="${ width + ( avance * i ) }" y2="${ width + size }" stroke="#adb5bd" stroke-width="2px"/>
        `;
        if ( avance > 20 ) { svgEtiqueta.innerHTML += `<text class="coordenateNum" x="${ width + ( avance * i ) + -2 }" y="${ width + 18 }" fill="#adb5bd">${ i }</text>`};
    };

    // generateY+
    for ( let i = 1; i < mayor; i++ ) {
        svgEtiqueta.innerHTML += `
            <line x1="${ width + ( avance * i ) }" y1="${ width - size }" x2="${ width + ( avance * i ) }" y2="${ width + size }" stroke="#adb5bd" stroke-width="2px"/>
        `;
        if ( avance > 20 ) { svgEtiqueta.innerHTML += `<text class="coordenateNum" x="${ width + ( avance * i ) + -2 }" y="${ width + 18 }" fill="#adb5bd">${ i }</text>`};
    };

    // generateY+
    for ( let i = 1; i < mayor; i++ ) {
        svgEtiqueta.innerHTML += `
            <line x1="${ width - ( avance * i ) }" y1="${ width - size }" x2="${ width - ( avance * i ) }" y2="${ width + size }" stroke="#adb5bd" stroke-width="2px"/>
        `;
        if ( avance > 20 ) { svgEtiqueta.innerHTML += `<text class="coordenateNum" x="${ width - ( avance * i ) + -8 }" y="${ width - 10 }" fill="#adb5bd">${ i * -1 }</text>`};
    };

};


// graficarBtn
const graficarBtn = document.querySelector( '#graficarBtn' );
graficarBtn.addEventListener( 'click', () => {

    transformVectores();
    const mayor = coordenadaMayor();
    crearPlano( mayor + 1 );
    if ( rotate ) { rotarPlano( 0 ); rotarPlano( 45 ); };

});