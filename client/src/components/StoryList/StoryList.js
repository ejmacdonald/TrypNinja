import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import UserStoryTile from "../UserStoryTile";
import CreateNew from "../CreateNew"
import { Grid } from "@material-ui/core"

//set 'open' to true to only get open stories
//set 'notEmpty' to true to only get populated stories
//set 'create' to true to add a 'create story' option
class StoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false
        };
        this.props=props
    }
    option = this.props.open ? "open" : (this.props.notEmpty ? "notEmpty" : "")
    getStories = () => {
        if(this.props.userId){
            axios.get("/api/user/id/" + this.props.userId)
            .then(user => {
                axios.get(`/api/event/storyList/${this.props.userId}/${this.option}` )
                .then(events => {
                    console.log(user.data)
                    console.log(events.data)
                    this.setState({ user: user.data, storyList: events.data, render:true })
                })
            })
        }
        else {
            axios.get("/api/event/all")
            .then(events=>{
                console.log(events.data)
                this.setState({storyList: events.data, render:true})
            })
        }
    }
    componentWillMount(){
        this.getStories()
    }
    render() {
        const {create, origin, hideUser} = this.props;
        return this.state.render ? (
            <div>
                <Grid container spacing={24}>
                    {(create) ? <CreateNew /> : null}
                    {this.state.storyList.map(story => (
                        <UserStoryTile 
                        key={story.id}
                        id={story.id}
                        title={story.title}
                        userName={hideUser ? "" : story.User.userName}
                        src={story.Moments[0].moment}
                        userId={story.User.id}
                        origin={origin}
                        link={create ? `/choosecontenttype/${story.id}` : undefined}
                        />
                    ))}
                </Grid>

            </div>
        ) : null
    }
}




export default StoryList;