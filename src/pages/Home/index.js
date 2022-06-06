import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Home.scss";

function Home( {user} ) {


    return(
        <div className="main">
            <Header user={user}></Header>
                
            <Footer></Footer>
        </div>
    );
}

export default Home;