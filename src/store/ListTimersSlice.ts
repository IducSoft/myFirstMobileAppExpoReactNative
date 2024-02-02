import { createSlice } from "@reduxjs/toolkit";
import { ListTimers, TimerData } from "../types/types";
import { random } from "../utils/CharacterRandom";


let initialState: ListTimers = [
    {
        title: 'Mow the lawn',
        project: 'House Chores',
        id: random(),
        elapsed: 0,
        isRunning: true,
    },
    {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: random(),
        elapsed: 0,
        isRunning: true,
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
    }
})

export const { addNewTimer, editTimer, removeTimer } = ListTimersReducer.actions;

export default ListTimersReducer.reducer;