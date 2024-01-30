import { createSlice } from "@reduxjs/toolkit";
import { ListTimers } from "../types/types";
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
        }
    }
})

export const { addNewTimer } = ListTimersReducer.actions;

export default ListTimersReducer.reducer;