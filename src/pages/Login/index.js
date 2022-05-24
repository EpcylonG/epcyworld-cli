import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../db/firebase"
import { signInMongo } from "../../db/mongo";
import { useDispatch } from "react-redux";
import "./Login.scss";
import { setUser } from "../../redux/user-slice";


function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        email: "",
        password: "",
    }

    function handleSubmit(){
        // console.log("submit")
    }

    async function signInGoogle(){ 
        try{
            const user = await signInWithGoogle();
            const mongo = await signInMongo(user.user.accessToken);
            if(mongo.data !== null) {
                dispatch(setUser(mongo.data));
                navigate("/profile");
            } 
        } catch (error) {
            if(error.response.status === 404) navigate("/signup");
        }

    }


    return(
        <div>
            <h1>Sign In</h1>
                <Formik
                initialValues={initialValues}
                validationSchema=""
                onSubmit={() => handleSubmit()}
                >
                    <Form>
                        <Field type="text" id="username" name="username" placeholder="Username"/>
                        <Field type="mail" id="email" name="email" placeholder="email"/>
                        <Field type="password" id="password" name="password" placeholder="password"/>
                        <Button type="submit" onClick={() => signInGoogle()}>Login with Google</Button>
                    </Form>
                </Formik>
            <Button redirect="/signup">SignUp</Button>
            <Button redirect="/">Home</Button>
        </div>
    );

}

export default Login;