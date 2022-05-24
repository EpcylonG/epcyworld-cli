import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { storage } from '../../db/firebase';
import {
    ref,
    getDownloadURL,
    listAll
  } from 'firebase/storage';
import Button from "../../components/Button";
import axios from "axios";

function Home( {user}) {

    const [search, setSearch] = useState();
    const [gifs, setGifs] = useState([])
    const [memes, setMemes] = useState([])

    const reqApi = `https://api.giphy.com/v1/gifs/search?api_key=K1z6vIKPF3oukqLGtg39gKTYRw0E7jcc&q=${search}&limit=10&offset=0&rating=g&lang=en`;


    function temp () {
        const listRef = ref(storage, "");  
        listAll(listRef).then((res) => {
            res.prefixes.forEach((folderRef) => {
                listAll(folderRef).then((res) => {
                    res.items.forEach(async (itemRef) => {
                        const image = await getDownloadURL(itemRef)
                        setMemes((prev) => [...prev, image]);
                    });
                });
            });
        }).catch((error) => {
            console.error(error)
        });
    }

    useEffect(() => {
        temp();

    }, [])



    function handleChange(e){
        setSearch(e.target.value)
    }

    async function serachGift(){
        const gifs = await axios.get(reqApi);
        gifs.data.data.forEach((gif) => {
            setGifs((prev) => [...prev, gif]);
        })
    }

    function handleClick(e){
        console.log("Copied url: " + e.target.src);
    }



    return(
        <>
            <Header user={user}></Header>
                <div>
                    <h2>GIFTs</h2>
                    <input type="text" placeholder="Search gift" onChange={handleChange}></input>
                    <Button onClick={serachGift}>Search</Button>
                </div>
                <div>
                    {gifs ? gifs.map(gif => {
                        return <img key={gif.id} src={gif.images.downsized_medium.url} alt="no found"  height="100" onClick={handleClick}></img>
                    }) : ""}
                </div>
                <div>
                    <h2>Memes</h2>
                    {memes ? memes.map((meme, index) => {
                        return <img key={index} src={meme} alt="no found" height="100" onClick={handleClick}></img>
                    }) : ""}
                </div>
            <Footer></Footer>
        </>
    );
}

export default Home;