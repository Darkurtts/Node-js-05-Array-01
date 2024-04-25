function getSeniales(datos){
    const senial = datos.split('_').map(Number);
    return senial;
}

function getCuadrantes(senial) {
    let cuadrantes = [];
    for (let sen of senial) {
        if (sen < 0) {
            break;
        }
        let cuadrante = "";
        if (sen <= 45 || sen > 315) {
            cuadrante = 'E';
        } else if (sen > 45 && sen <= 135) {
            cuadrante = 'N';
        } else if (sen > 135 && sen <= 225) {
            cuadrante = 'O';
        } else if (sen > 225 && sen <= 315) {
            cuadrante = 'S';
        }
        cuadrantes.push(cuadrante);
    }
    return cuadrantes.join(' ');
}

function contarCiclosCompletos(cuadrantes) {
    const ciclosCompletos = ['NESO', 'NOSE', 'OSEN', 'ESON', 'SENO', 'SONE', 'ENOS', 'ONES'];
    let ciclos = 0;
    let secuenciaStr = cuadrantes.replace(/ /g, ""); 
    for(let i = 0; i < ciclosCompletos.length;i++){
        if(secuenciaStr.match(ciclosCompletos[i]) != null){ 
            ciclos++;                                       
        }
    }
    return ciclos;
}

function porcentajeCuadrante(cuadrantes) {
    let secuencia = cuadrantes.replace(/ /g, ""); 
    const total = secuencia.length;
    const porcentajeN = ((secuencia.match(/N/g)).length / total * 100).toFixed(2);
    const porcentajeS = ((secuencia.match(/S/g)).length / total * 100).toFixed(2);
    const porcentajeE = ((secuencia.match(/E/g)).length / total * 100).toFixed(2);
    const porcentajeO = ((secuencia.match(/O/g)).length / total * 100).toFixed(2);
    return [porcentajeN, porcentajeS, porcentajeE, porcentajeO];
}

function procesarSeniales(){
    const datos = "100_200_50_330_250_180_190_200_150_90_165_240_20_340"; 
    const senial = getSeniales(datos);
    const secuencia = getCuadrantes(senial);
    const ciclos = contarCiclosCompletos(secuencia);
    const porcentajes = porcentajeCuadrante(secuencia);
    
    alert("Seniales ingresadas: " + senial.join("_"))
    alert("Secuencia de cuadrantes: " + secuencia);
    alert("Cantidad de ciclos completos: " + ciclos);
    alert("Porcentaje de ocurrencias de cada cuadrante: \nNorte: " + porcentajes[0] + "%\nSur: " + porcentajes[1] + "%\nEste: " + porcentajes[2] + "%\nOeste: " + porcentajes[3] + "%");

    console.log("Seniales ingresadas: " + senial.join("_"));
    console.log("Secuencia de cuadrantes: " + secuencia);
    console.log("Cantidad de ciclos completos: " + ciclos);
    console.log("Porcentaje de ocurrencias de cada cuadrante: \nNorte: " + porcentajes[0] + "%\nSur: " + porcentajes[1] + "%\nEste: " + porcentajes[2] + "%\nOeste: " + porcentajes[3] + "%");
}
