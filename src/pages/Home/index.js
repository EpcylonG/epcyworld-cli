import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home( {user}) {


    return(
        <>
            <Header user={user}></Header>
                
            <Footer></Footer>
        </>
    );
}

export default Home;