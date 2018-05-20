import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

class EndButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            storyId: this.props.storyId
        };
    }



    onClick = (e) => {
        e.preventDefault();

        const ID = this.props.storyId;
        let open = "false";
        let formData = new FormData();

        formData = { open }

        axios.put('/api/event/' + ID, formData)
        .then((result) => {
        console.log("promise completed");
        console.log(result);
        window.location.href="/";
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
