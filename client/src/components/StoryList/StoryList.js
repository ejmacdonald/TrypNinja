import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import UserStoryTile from "../UserStoryTile";
import { Paper, Grid } from "@material-ui/core"

class StoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: []
        };
    }



    componentDidMount() {
        let token = sessionStorage.getItem("TNToken");

        axios.get('/api/user/' + token)
            .then((result) => {
                let userName = result.data.userName;
                let userId = result.data.id;
                axios.get('/api/event/storyList/' + userId)
                    .then((result) => {
                        console.log(result.data);
                        this.setState({ stories: result.data.filter(story => story.isOpen == true) });

                    });
            });
    }

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    {this.state.stories.map(story => (
                        <Grid item xs={12}>
                            <Paper>
                                <Link to={"/choosecontenttype/" + story.id}>
                                    <img className="thumb" src={story.Moments[0] ? story.Moments[0].moment : "https://www.calgaryhumane.ca/wp-content/uploads/2018/02/Coming-soon.jpg"} />
                                    {story.title}
                                </Link>
                            </Paper>
                        </Grid>

                    ))}
                </Grid>

            </div>
        );
    }
}




export default StoryList;