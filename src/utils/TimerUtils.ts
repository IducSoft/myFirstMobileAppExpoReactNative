export function millisecondsToHuman(ms: string): string {
    // Convertir el string a un número
    let milliseconds = parseInt(ms);
    
    // Calcular las horas, minutos y segundos
    let hours : string | number = Math.floor(milliseconds / 3600000);
    milliseconds %= 3600000;
    let minutes : string | number = Math.floor(milliseconds / 60000);
    milliseconds %= 60000;
    let seconds : string | number = Math.floor(milliseconds / 1000);
    
    // Formatear los tiempos para que siempre tengan dos dígitos
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    // Retornar el tiempo en formato HH:MM:SS
    return hours + ":" + minutes + ":" + seconds;
}
