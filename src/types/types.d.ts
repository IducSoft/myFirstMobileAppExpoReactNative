export type TimerData = {

    title:string,
    project:string,
    id?:string,
    elapsed?:number,
    isRunning?:boolean,
}

export type ListTimers = TimerData[];