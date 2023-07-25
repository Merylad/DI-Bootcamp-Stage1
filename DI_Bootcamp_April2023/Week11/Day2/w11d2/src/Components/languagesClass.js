import { Component } from "react";
import React from "react";

class Vote extends Component {
    constructor(){
        super();
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
    }

    changeVote = (lang)=>{
        lang.votes++
        this.setState({languages:[...this.state.languages]})
    }

    render(){
        const {languages} = this.state
        return (
            <section>
                <h1>Vote your Language !</h1>
                {
                    languages.map((item, index)=>{
                        return (
                            <div className="Language" key = {index}>
                            <p>{item.votes}</p>
                            <p>{item.name}</p>
                            <button onClick={() => this.changeVote(item)}>Vote for me!</button>
                            </div>
                        )
                    })
                }
            </section>
        )
    }
}

export default Vote