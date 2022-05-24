import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { signInWithGoogle } from "../../db/firebase";

import "./SignUp.scss";
import { signUpMongo } from "../../db/mongo";


function SignUp(){

    const navigate = useNavigate();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword:""
    }

    function handleSubmit(){
        console.log("submit")
    }

    async function signUpGoogle(){ 
        const user = await signInWithGoogle();  
        const mongoData = await signUpMongo(user.user);
        console.log(mongoData)
        // navigate("/profile");
    }

    return(
        <div>
            <h1>Register</h1>
            <Formik
             initialValues={initialValues}
             validationSchema=""
             onSubmit={() => {handleSubmit()}}
            >
                 <Form>
                    <Field type="text" id="username" name="username" placeholder="Username"/>
                    <Field type="mail" id="email" name="email" placeholder="email"/>
                    <Field type="password" id="password" name="password" placeholder="password"/>
                    <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/>
                    <Button type="submit">Register</Button>
                 </Form>
            </Formik>
            <hr></hr>
            <h2>SignUp with google</h2>
            <Button type="submit" onClick={() => signUpGoogle()}>Google</Button>
            <Button redirect="/login">Login</Button>
            <Button redirect="/">Home</Button>
        </div>
    );

}

export default SignUp;