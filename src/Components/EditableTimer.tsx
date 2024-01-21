import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'

export default function EditableTimer({id,title,project,elapsed,isRunning,editFormOpen,}:{id:string, title:string, project:string, elapsed:string, isRunning:boolean, editFormOpen:boolean}) {
    if (editFormOpen) {
        return <TimerForm id={id} title={title} project={project} />
    }
    return (
        <Timer
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        isRunning={isRunning}
        />
    )
}

const styles = StyleSheet.create({})