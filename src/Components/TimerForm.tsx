import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import TimerButton from './TimerButton';
import { newTimer } from '../utils/TimerUtils';
import { addNewTimer } from '../store/ListTimersSlice';
import { useDispatch } from 'react-redux';


export default function TimerForm({onFormSubmit, onFormClose, id, title, project }:{onFormSubmit?:any, onFormClose?: any, id?:string, title?:string, project?:string}) {
    
    const dispatch = useDispatch();
    const [state, setState] = useState(
        {
            title: title || '',
            project: project || '',
            elapsed:0,
        }
    )
    const handleChange = (field:string, value: string) => {
        setState(prevState => ({
        ...prevState,
        [field]: value
        }));
    };

    const handleCreateFormSubmit = () => {
        dispatch(addNewTimer(newTimer(state)))
        onFormClose();
    };

    const submitText = id ? 'Update' : 'Create';
    
    return (
        <View style={styles.formContainer}>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Title</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => handleChange('title', value)}
                        value={state.title}
                    />
                </View>
            </View>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Project</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => handleChange('project', value)}
                        value={state.project}
                    />
                </View>
            </View>
            <View style={styles.buttonGroup}>
                {!id ? <TimerButton 
                    onPress={handleCreateFormSubmit} 
                    small 
                    color="#21BA45" 
                    title={submitText} 
                /> : <TimerButton 
                    onPress={()=>onFormSubmit(state)}
                    small 
                    color="#21BA45" 
                    title={submitText} 
                />  }
                
                <TimerButton 
                    onPress={onFormClose} 
                    small 
                    color="#DB2828" 
                    title="Cancel"
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});