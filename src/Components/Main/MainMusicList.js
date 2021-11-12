import axios from 'axios'
import {useState} from "react";
import { MusicList } from "../../app/store";
import { useDispatch,useSelector } from "react-redux";



const MainMusicList = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { List } = state;
        const MusicListAPI = async()=>{
            const url =  'https://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=1f7d927933cb93a6498028d59d238139&format=json';    
            try{
                const response = await axios.get(url);  
                console.log(response);
                dispatch(MusicList(response));  
            }catch(error){
                const data = error.response;
                return data;
            }
        }
        
        return (
            <div>
            <button onClick={MusicListAPI}>불러오기</button>
        </div>
    );
};

export default MainMusicList;