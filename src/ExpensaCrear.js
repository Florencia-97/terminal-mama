import React, { Component }  from "react";
import ExpensaForm from "./ExpensaForm";
import { db, auth } from "./services/firebase"


class ExpensaCrear extends Component{

    constructor(props) {
        super(props);
        this.state = {
          user: auth().currentUser,
          info: [],
          readError: null,
          ultimoMes: [],
          isLoaded: false
        };
      }
    
    async componentDidMount() {
        this.setState({ readError: null });
        try {
          db.ref("expensas").orderByKey().limitToLast(1).on("value", snapshot => {
            snapshot.forEach((snap) => {
                let info = snap.val().info;
                this.setState({info: info, isLoaded: true});
            });
          }
          );
        } catch (error) {
          this.setState({ readError: error.message });
        }
    }

    render(){
        const isLoaded = this.state.isLoaded;
        return(
          isLoaded ?
            <ExpensaForm elems={this.state.info} user={this.state.user} /> : <h1>Loading</h1>
        )
    }

}

export default ExpensaCrear