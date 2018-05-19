import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import UserStoryTile from "../UserStoryTile";

class StoryList extends Component{
    constructor(props){
        super(props);
        this.state = {
            stories: []
        };
    }

 

    componentDidMount(){
        let token = sessionStorage.getItem("TNToken");

        axios.get('/api/user/' + token)
            .then((result) => {
                let userName = result.data.userName;
                let userId = result.data.id;
                console.log("useName: " + userName);
                console.log("userId: " + userId);

            let formData = {userId};
            

            console.log("x: " + JSON.stringify(formData));

            console.log("here's the post");

            axios.get('/api/event/storyList/' + userId)
            .then((result) => {
                // access results...
                
                console.log("promise completed");
                console.log(result.data);
                this.setState({stories: result.data});
                console.log("----");
                console.log(this.state.stories[0].id);
                
            });
            });
    }

    render(){
        return(
            <div> 
                {this.state.stories.map(story => (             
                        
                        <nav className="navbar navbar-top navbar-light bg-light">
                             
                            <Link to={"/choosecontenttype/" + story.id}>
                            <img className="thumb" src={story.Moments[0] ? story.Moments[0].moment : "https://www.calgaryhumane.ca/wp-content/uploads/2018/02/Coming-soon.jpg" }/>
                                    {story.title} 
                            <a className="navbar-brand"></a>
                            </Link>

                            </nav>
                    
                ))}
                
            </div>
        );
    }
}




export default StoryList;