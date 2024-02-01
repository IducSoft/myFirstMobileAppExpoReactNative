import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'
import { TimerData } from '../types/types';
import { editTimer } from '../store/ListTimersSlice';
import { useDispatch } from 'react-redux';


export default function EditableTimer({id,title,project,elapsed,isRunning, onFormSubmit}:any) {

    const [editFormOpen, setEditFormOpen] = useState(false);
    const dispatch= useDispatch()

    const handleEditPress = ()=>{
        setEditFormOpen(true)
    }

    const handleFormClose =()=>{
        setEditFormOpen(false);
    }

    const handleSubmit =(timer:TimerData)=>{
        dispatch(editTimer({timer,id}))
        setEditFormOpen(false)
    }

    if (editFormOpen) {
        return (
        <TimerForm 
            id={id} 
            title={title} 
            project={project}
            onFormSubmit={handleSubmit}
            onFormClose={handleFormClose}
        />
        )
    }
    return (
        <Timer
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            onEditPress={handleEditPress}
        />
    )
}

const styles = StyleSheet.create({})