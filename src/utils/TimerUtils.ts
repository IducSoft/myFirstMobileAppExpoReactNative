import { TimerData } from "../types/types";
import { random } from "./CharacterRandom";

export function millisecondsToHuman(ms: any): string {
    // Convertir el string a un número
    let milliseconds = ms;
  
    // Calcular las horas, minutos y segundos
    let hours : string | number  = Math.floor(milliseconds / 3600);
    milliseconds %= 3600000;
    let minutes : string | number = Math.floor(milliseconds / 60);
    milliseconds %= 60000;
    let seconds : string | number = Math.floor(milliseconds / 1);
    
    // Formatear los tiempos para que siempre tengan dos dígitos
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // Retornar el tiempo en formato HH:MM:SS
    return hours + ":" + minutes + ":" + seconds;
}


export const newTimer = (attrs:TimerData) => {
    const timer:TimerData = {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        id: random(),
        elapsed: 0,
        isRunning: false,
    };
    return timer;
};
