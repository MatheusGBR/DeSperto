var pastaNumero = JSON.parse(localStorage.getItem("pastaNumero"));



var feriados = [
    [8, 7],
    [9, 12],
    [10, 2],
    [10, 15],
    [11, 25]
]



setInterval(function alarmeTocar() {

    let data

    let horario = Date.now();

    data = new Date(horario)
    let diaAtual = data.getDay()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    hora = checkTime(hora);
    minutos = checkTime(minutos);
    let mesAtual = data.getMonth()
    let dia = data.getDate()
    let horaAtual = hora + ":" + minutos







    for (contador = 0; contador < pastaNumero; contador++) {

        let pastaNome = "A" + (contador + 1)
        let pastaAtual = JSON.parse(localStorage.getItem(pastaNome))

        for (contador2 = 0; contador2 < pastaAtual[0]; contador2++) {
            let contador3 = 1
            for (contador4 = 0; contador4 < 5; contador4++) {

                if (feriados[contador4][0] == pastaAtual[contador3].feriado == 1 && mesAtual && feriados[contador4][1] == dia) {
                }
                else {
                    if (pastaAtual[contador3].dias[0] == 1 && diaAtual == 0) {

                        if (pastaAtual[contador3].horas == horaAtual) {

                            if (pastaAtual[contador3].som == 1) {

                                let audio = new Audio('sons/som1.mp3');
                                audio.play();

                            }
                            else if (pastaAtual[contador3].som == 2) {
                                let audio = new Audio('sons/som2.mp3');
                                audio.play();

                            }
                            else if (pastaAtual[contador3].som == 3) {
                                let audio = new Audio('sons/som3.mp3');
                                audio.play();



                            }
                        }
                    }
                    else if (pastaAtual[contador3].dias[1] == 1 && diaAtual == 1) {

                        if (pastaAtual[contador3].horas == horaAtual) {
                            if (pastaAtual[contador3].som == 1) {
                                let audio = new Audio('sons/som1.mp3');
                                audio.play();

                            }
                            else if (pastaAtual[contador3].som == 2) {
                                let audio = new Audio('sons/som2.mp3');
                                audio.play();

                            }
                            else if (pastaAtual[contador3].som == 3) {
                                let audio = new Audio('sons/som3.mp3');
                                audio.play();

                            }


                        }
                    }
                    else if (pastaAtual[contador3].dias[2] == 1 && diaAtual == 2) {

                        if (pastaAtual[contador3].horas == horaAtual) {
                            if (pastaAtual[contador3].som == 1) {
                                let audio = new Audio('sons/som1.mp3');
                                audio.play();

                            }
                            else if (pastaAtual[contador3].som == 2) {
                                let audio = new Audio('sons/som2.mp3');
                                audio.play();
                                if (pastaAtual[contador3].temporario == 1) {
                                    pastaAtual.splice(contador3, 1)
                                    localStorage.setItem("A" + contador1, pastaAtual)
                                }
                            }
                            else if (pastaAtual[contador3].som == 3) {
                                let audio = new Audio('sons/som3.mp3');
                                audio.play();

                            }


                        }
                    }
                    else if (pastaAtual[contador3].dias[3] == 1 && diaAtual == 3) {


                        if (pastaAtual[contador3].horas == horaAtual) {
                            if (pastaAtual[contador3].som == 1) {
                                let audio = new Audio('sons/som1.mp3');

                            }
                            else if (pastaAtual[contador3].som == 2) {
                                let audio = new Audio('sons/som2.mp3');
                                audio.play();

                            }
                            else if (pastaAtual[contador3].som == 3) {
                                let audio = new Audio('sons/som3.mp3');
                                audio.play();

                            }


                        }
                    }
                    else if (pastaAtual[contador3].dias[4] == 1 && diaAtual == 4) {

                        if (pastaAtual[contador3].horas == horaAtual) {
                            if (pastaAtual[contador3].som == 1) {
                                let audio = new Audio('sons/som1.mp3');
                                audio.play();

                            }
                            else if (pastaAtual[contador3].som == 2) {
                                let audio = new Audio('sons/som2.mp3');
                                audio.play();
                                if (pastaAtual[contador3].temporario == 1) {

                                    localStorage.setItem("A" + contador1, pastaAtual)
                                }
                            }
                            else if (pastaAtual[contador3].som == 3) {
                                let audio = new Audio('sons/som3.mp3');
                                audio.play();

                            }


                        }
                    }
                    else if (pastaAtual[contador3].dias[5] == 1 && diaAtual == 5) {


                        if (pastaAtual[contador3].horas == horaAtual) {
                            console.log(horaAtual)
                            if (pastaAtual[contador3].som == 1) {
                                let audio = new Audio('sons/som1.mp3');
                                audio.play();
                                if (pastaAtual[contador3].temporario == 1) {

                                    localStorage.setItem("A" + contador1, pastaAtual)
                                }
                            }
                            else if (pastaAtual[contador3].som == 2) {
                                let audio = new Audio('sons/som2.mp3');
                                audio.play();
                                if (pastaAtual[contador3].temporario == 1) {

                                    localStorage.setItem("A" + contador1, pastaAtual)
                                }
                            }
                            else if (pastaAtual[contador3].som == 3) {
                                let audio = new Audio('sons/som3.mp3');
                                audio.play();


                            }


                        }
                    }
                    else if (pastaAtual[contador3].dias[6] == 1 && diaAtual == 6) {

                        if (pastaAtual[contador3].horas == horaAtual) {
                            if (pastaAtual[contador3].som == 1) {
                                let audio = new Audio('sons/som1.mp3');
                                audio.play();
                                if (pastaAtual[contador3].temporario == 1) {

                                    localStorage.setItem("A" + contador1, pastaAtual)
                                }
                            }
                            else if (pastaAtual[contador3].som == 2) {
                                let audio = new Audio('sons/som2.mp3');
                                audio.play();

                            }
                        }
                        else if (pastaAtual[contador3].som == 3) {
                            let audio = new Audio('sons/som3.mp3');
                            audio.play();

                        }








                    }
                }
            }
            contador3++
        }

    }





}, 600)
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}