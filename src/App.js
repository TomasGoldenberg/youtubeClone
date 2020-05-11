import React from "react";
import { Grid } from "@material-ui/core";
import {SearchBar, VideoList , VideoDetail} from "./components"
import youtube from "./api/youtube";
class App extends React.Component{
    state={
        videos:[],
        selectedVideo:null,

    }

    componentDidMount(){ //component did mount is the first thing that the app will execute, thats why we give the app a default value to start with
        this.handleSubmit("tortu el diario de un viajero")
    }

    handleSubmit= async (searchTerm)=>{
        const response = await youtube.get("search",{
        params:{
            part:"snippet",
            maxResults:5,
            key:"AIzaSyDrM5AlslAsWQlhGpgRndE98WKFrzuQR0o", //youtube api key 
            q: searchTerm
        }})
       
        this.setState({videos: response.data.items , selectedVideo: response.data.items[1] })//we choose the item number 2 of the array because the first one sometimes is the channel , not a video
        
    }

    onVideoSelect= (video)=>{
        this.setState({selectedVideo:video})
    }
    render(){
        const {selectedVideo,videos}= this.state
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>

                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>

                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>

                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


export default App