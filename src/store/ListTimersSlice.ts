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
]

export const ListTimersReducer = createSlice({
    name: "ListTimers",
    initialState: initialState,
    reducers:{
        //aqui van los reducers
        addNewTimer:(state, payload)=>{
            state.push(payload.payload);
        },
        editTimer:(state, {payload})=>{
            console.log(payload)
            const arrayResult:ListTimers = [];
            const element:TimerData = payload.timer;
            state.map((item)=>{
                if(payload.id !== item.id){
                    arrayResult.push({...item})
                }
            })
            console.log(arrayResult)
            
        },
    }
})

export const { addNewTimer, editTimer } = ListTimersReducer.actions;

export default ListTimersReducer.reducer;