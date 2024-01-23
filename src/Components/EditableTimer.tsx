import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'

export default function EditableTimer({id,title,project,elapsed,isRunning}:{id:string, title:string, project:string, elapsed:number, isRunning:boolean}) {

    const [editFormOpen, setEditFormOpen] = useState(false)

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