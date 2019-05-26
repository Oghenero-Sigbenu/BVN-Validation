import axios from "axios";
import React, {Component} from "react";
import BvnForm from "./BvnForm/BvnForm";


import "./Main.css"
class Main extends Component {
    state= {
        bvnnumber: "",
        data: null,
        error: null,
        isLoading: false
    };

 

    handleChange = e => {
        this.setState({
            bvnnumber: e.target.value,
            error: null,
            isloading: false,

           
        })
        console.log(this.state.bvn)
    }
    onSubmit = e => {
        this.setState({ isLoading: true});
        console.log("he click")
        axios
        .get(`${this.state.bvnnumber}?seckey=?seckey=FLWSECK-07c0d877df7db8f42465eade49459ebb-X`)
        .then(res => {
            this.setState({ data: res, loading: false});
        })
        .catch(e => this.setState({error: e, loading: false}));
        e.preventDefault();
      
    }

    
    render() {
        
        return(
            <div className="box">
                <BvnForm onSubmit={this.onSubmit} 
                handleChange={this.handleChange}
                bvn={this.state.bvnnumber}
                error={this.state.error}
                isLoading={this.state.isLoading}
                data={this.state.data}/>

            </div>
        )
    }
}

export default Main;