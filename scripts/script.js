var hour = 0;
var minute = 0;
var seconds = 0;

var time = 1000; /* Determina os milisegundos que o contador irá funcionar */
var cron;

/* Iniciar o cronometro */
function startCount() {
    cron = setInterval(timer, time);
}

/* Pausar o cronometro */
function pauseCount() {
    clearInterval(cron);
}

/* Zerar o cronometro */
function stopCount() {
    clearInterval(cron);
    hour = 0;
    minute = 0;
    seconds = 0;
    document.getElementById("counter").innerText = '00:00:00';
}

/* Funcao para os digitos ficarem sempre com duas casas decimais */
function count(element) {
    // Utilizando operador ternario:
    return element < 10 ? '0' + element : element;
    
    // Utilizando if
//     if (element < 10) {
//         return '0' + element
//     } else {
//         element
//     }
}

/* Funcao principal do cronometro */
function timer() {
    seconds++

    if (seconds == 60) {
        seconds = 0;
        minute++
    }

    if (minute == 60) {
        minute = 00;
        hour++
    }

    var format = count(hour) + ':' + count(minute) + ':' + count(seconds);
    document.getElementById("counter").innerText = format;
}
