import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './user.css'
import { signUpAction } from '../../redux/action'

const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userType: ''
    }

    const userSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Please enter your first name')
            .min(3, 'Must be 5 characters')
            .matches(/[aA-zZ][a-z]*$/, 'Enter valid Username'),
        lastName: Yup.string()
            .required('Please enter your last name')
            .min(3, 'Must be 5 characters')
            .matches(/[aA-zZ][a-z]*$/, 'Enter valid Username'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email Id is required'),
        password: Yup.string()
            .required('Password is required')
    })

    

    const handleSubmit = (values) => {
        dispatch(signUpAction(values, navigate))
    }

    return (
        <div className='loginContainer'>
            <div className='leftSide'>
            </div>
            <div className='rightSide'>
                <div className='loginBox'>
                    <div className='login-header'>
                        <h2>Create Account</h2>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={userSchema}
                        onSubmit={(value) => handleSubmit(value)}
                    >
                        {({ setFieldValue }) => (
                            <Form className='user-form'>
                                <Field
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                    className="loginField"
                                />
                                <span className='error-msg'><ErrorMessage name='firstName' /></span>
                                <Field
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Last Name"
                                    className="loginField"
                                />
                                <span className='error-msg'><ErrorMessage name='lastName' /></span>
                                <Field
                                    name="email"
                                    id="email"
                                    placeholder="Email ID"
                                    className="loginField"
                                />
                                <span className='error-msg'><ErrorMessage name='email' /></span>
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="loginField"
                                />
                                <span className='error-msg'><ErrorMessage name='password' /></span>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="test"
                                            value="Ngo"
                                            onChange={() => setFieldValue("userType", "NGO")}
                                        />NGO
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="test"
                                            value="User"
                                            onChange={() => setFieldValue("userType", "USER")}
                                        />User
                                    </label>
                                </div>
                                <button type='submit' className="LoginBtn">Sign Up</button>
                                <p className="text-center mt-3" style={{ fontSize: "1rem" }}>
                                    Already a Member? <a href="/">Click here to Signin</a>
                                </p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Signup
