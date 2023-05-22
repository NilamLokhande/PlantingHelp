import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './user.css'
import { signInAction } from '../../redux/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit=(values)=>{
        dispatch(signInAction(values, navigate))
    }

    const initialValues = {
        email: '',
        password: ''
    }

    const userSchema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    })

    return (
        <div className='loginContainer'>
            <div className='leftSide'>
            </div>
            <div className='rightSide'>
                <div className='loginBox'>
                    <div className='login-header'>
                        <h2>Login</h2>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={userSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className='user-form'>
                            <Field
                                name="email"
                                id="email"
                                placeholder="Email ID"
                                className="loginField"
                            />
                           <span className='error-msg'><ErrorMessage name='email'/></span>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="loginField"
                            />
                            <span className='error-msg'><ErrorMessage name='password'/></span>
                            <button type='submit' className="LoginBtn">Login</button>
                            <p className="text-center mt-3" style={{ fontSize: "1rem" }}>
                                New to Planting Help? <a href="/signup">Click here to Signup</a>
                            </p>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Signin
