import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import InputField from './InputField'
import InputButton from './InputButton'
import Heading from './Heading'
import ErrorMessage from './ErrorMessage'
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    fullname: Yup.string()
        .label('Fullname')
        .required('Please enter your name'),
    email: Yup.string()
        .label('phone')
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid').
         max(14).
         min(8)
        .required('Please enter your Mobile Number'),
    password: Yup.string()
        .label('Password')
        .required('Please enter your password')
        .min(8, 'Password must have at least 6 characters')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
})

export default function SignupForm() {
    return (
        <KeyboardAvoidingView style={styles.avoidKeyboard} behavior="padding" enabled keyboardVerticalOffset={85}>
        <View style={styles.container}>
            <Heading h2 title="Signup" />

            <View style={styles.form}>

                <Formik
                    initialValues={{ 
                        fullname: '',
                        phone: '',
                        password: ''
                    }}
                    onSubmit={(values) => {
                        // Use API to handle validated data
                        alert( JSON.stringify(values) );
                    }}
                    validationSchema={validationSchema}>
                    {({handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur}) => (
                        <>
                            <InputField 
                                name='fullname'
                                label='Full Name'
                                value={values.fullname}
                                onChangeText={handleChange('fullname')}
                                onBlur={handleBlur('fullname')}
                                placeholder='Enter your name'
                                returnKeyType='done'
                                iconName='ios-person'
                                iconColor='#533263'
                            />
                            <ErrorMessage errorValue={touched.fullname && errors.fullname} />

                            <InputField 
                                name='phone'
                                label='Mobile Number'
                                value={values.phone}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                placeholder='Enter Mobile Number'
                                keyboardType='phone-pad'
                                returnKeyType='done'
                                autoCapitalize='none'
                                iconName='ios-mailios-call-sharp'
                                iconColor='#533263'
                            />
                            <ErrorMessage errorValue={touched.phone && errors.phone} />

                            <InputField 
                                name='password'
                                label='Password'
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                placeholder='Enter password'
                                returnKeyType='done'
                                autoCapitalize='none'
                                secureTextEntry={true}
                                iconName='ios-lock-closed'
                                iconColor='#533263'
                            />
                            <ErrorMessage errorValue={touched.password && errors.password} />

                            <InputButton 
                                onPress={handleSubmit}
                                disabled={! isValid || isSubmitting}
                                buttonType='solid'
                                title='SIGN UP'
                                buttonColor='#533263'
                                loading={ isSubmitting }
                            />
                        </>
                    )}
                </Formik>
            </View>
            <StatusBar style="auto" />
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFBFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        color: '#533263', 
        fontWeight: 'bold'
    },
    form: {
        width: '90%',
        marginTop: 50
    },

    avoidKeyboard: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',
        height:'100%'
    }
});
