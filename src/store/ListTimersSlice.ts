import { createSlice } from "@reduxjs/toolkit";
import { ListTimers, TimerData } from "../types/types";
import { random } from "../utils/CharacterRandom";


let initialState: ListTimers = [
    {
        title: 'Mow the lawn',
        project: 'House Chores',
        id: random(),
        elapsed: 0,
        isRunning: false,
    },
    {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: random(),
        elapsed: 0,
        isRunning: false,
    },
];


export const ListTimersReducer = createSlice({
    name: "ListTimers",
    initialState,
    reducers:{
        //aqui van los reducers
        addNewTimer:(state, payload)=>{
            state.push(payload.payload);
        },
        editTimer:(state, {payload})=>{
            //console.log(payload.timer)
            for (let index = 0; index < state.length; index++) {
                const element = {...state[index]};
                if(element.id === payload.id){
                    //console.log(element);
                    state[index] = {...element, ...payload.timer}
                }
            }
            
        },
        removeTimer: (state, {payload})=>{
            const arrayResult:ListTimers = [];
            for (let index = 0; index < state.length; index++) {
                const element = {...state[index]};
                if(element.id !== payload){
                    //console.log(element);
                    arrayResult.push(element)
                    
                }
            }
            return state = arrayResult;
            
            
        },
        addCounterTime:(state, {payload})=>{
            for (let index = 0; index < state.length; index++) {
                const element = {...state[index]};
                if(element.id === payload){
                    state[index] = {...element, elapsed: state[index].elapsed + 1}
                }
            }
            
        },
        startAddCounterTime:(state, {payload})=>{
            for (let index = 0; index < state.length; index++) {
                const element = {...state[index]};
                if(element.id === payload){
                    state[index] = {...element, isRunning: true}
                }
            }
        },
        stopAddCounterTime:(state,{payload})=>{
            for (let index = 0; index < state.length; index++) {
                const element = {...state[index]};
                if(element.id === payload){
                    state[index] = {...element, isRunning: false}
                }
            }
        },
    }
})

export const { addNewTimer, editTimer, removeTimer, addCounterTime, stopAddCounterTime, startAddCounterTime } = ListTimersReducer.actions;

export default ListTimersReducer.reducer;