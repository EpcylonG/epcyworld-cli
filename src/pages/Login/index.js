import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "../../components/Button";
import { signInWithGoogle } from "../../db/firebase"
import { signInMongo } from "../../db/mongo";
import { useDispatch } from "react-redux";
import "./Login.scss";
import { setUser } from "../../redux/user-slice";


function Login(){

    const dispatch = useDispatch()

    const initialValues = {
        username: "",
        email: "",
        password: "",
    }

    function handleSubmit(){
        // console.log("submit")
    }

    async function signInGoogle(){ 
        const user = await signInWithGoogle();
        const mongo = await signInMongo(user.user.accessToken);
        console.log(mongo);
        dispatch(setUser(mongo.data));
    }


    return(
        <div>
            <h1>Sing In</h1>
                <Formik
                initialValues={initialValues}
                validationSchema=""
                onSubmit={() => handleSubmit()}
                >
                    <Form>
                        <Field type="text" id="username" name="username" placeholder="Username"/>
                        <Field type="mail" id="email" name="email" placeholder="email"/>
                        <Field type="password" id="password" name="password" placeholder="password"/>
                        <Button type="submit" onClick={() => signInGoogle()}>Login</Button>
                    </Form>
                </Formik>
            <Button redirect="/signup">SignUp</Button>
            <Button redirect="/">Home</Button>
        </div>
    );

}

export default Login;