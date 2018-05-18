import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

class EndButton extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }


    onClick = (e) => {
        e.preventDefault();
    
        const { title  } = this.state;

        //hard code a storyID for now
        let storyID = 1;
        let open = "false";

        let formData = new FormData();

        formData = { open }
    
        console.log("ending this story, need id for story");

        axios.put('/api/event/nothing/' + storyID, formData)
        .then((result) => {
            // access results...
        console.log("promise completed");
        console.log(result);
      });
    }


    render() {
        return (
            <div>
                {/* <Link
                    to="/"
                    className={window.location.pathname==="/" ? "nav-link active" : "nav-link"}
                > */}
                    <button 
                        type="button" 
                        className="btn btn-danger btn-lg"
                        onClick={this.onClick}
                    >End this Story
        
                    </button>
                {/* </Link> */}
            </div>
        );
    }    

}

export default EndButton;
