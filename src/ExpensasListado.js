import React, { Component }  from "react";
import './App.css'
import {Link} from 'react-router-dom';
import { db } from "./services/firebase"

import {
    List,
    ListItem,
    Box,
    Icon
} from "@chakra-ui/core";

import ExpensasDescargar from "./ExpensasDescargar";


class ExpensasListado extends Component {

    constructor(props) {
        super(props);
        this.state = {
        //   user: auth().currentUser,
          meses: [],
          readError: null,
        };
      }
    
    async componentDidMount() {
        this.setState({ readError: null });
        try {
          db.ref("expensas").on("value", snapshot => {
            let meses = [];
            snapshot.forEach((snap) => {
                meses.push(snap.val());
            });
            this.setState({ meses });
            console.log(meses);
          });
        } catch (error) {
          this.setState({ readError: error.message });
        }
    }

    render(){
        return (
            <Box p={4}>
                <h1 className="sub-title">Expensas</h1>
                <List className="list-expensa">
                    {this.state.meses.map(mes => (
                        <ListItem className="list-expensa-item">
                            {mes.timestamp}
                            <ExpensasDescargar />
                        </ListItem>
                    ))}
                </List>
                <Link to="/expensas/crear" className="crear-expensa-btn">
                    <Icon name="add" size="20px" color="red.500" />
                    Crear nuevo mes
                </Link>
            </Box>
        );
    }
}

export default ExpensasListado