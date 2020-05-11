import React from "react"

import {Paper , TextField} from "@material-ui/core"

class Search extends React.Component{
    state={
        searchTerm:""
    }

    //It is very Important to Use Arrow functions inside React Classes, because if we use normal function/methods
    //we would need to bind the "this" element, instead, arrow functions doesent have it , indeed the "this" element
    //is gonna refeer to the "this" element of the class , thats our goal

    handleChange= (event)=> this.setState({searchTerm: event.target.value}); //updates the state with de value of the textfield

    handleSubmit=(event)=>{
        const{searchTerm}= this.state;
        //the line below , is the Equal of a "pass by props" in the parameter of a function based react component, instead in class based component we pass props like this 
        const {onFormSubmit} = this.props; 

        onFormSubmit(searchTerm)

        event.preventDefault()

    }
    


render(){
    return(
        <Paper elevation={6} style={{padding: "25px"}}>
            <form onSubmit={this.handleSubmit}>
                <TextField fullWidth laber="Search..." onChange={this.handleChange} />
            </form>
        </Paper>
    )
}
}

export default Search