import React, { Component }  from "react";
import './App.css'
import { db, auth } from "./services/firebase"
import nombreMes from "./utils/mes"

import {
    List,
    ListItem,
    Box
} from "@chakra-ui/core";

import ExpensasPDFButton from './ExpensasPDFButton';


class Local extends Component{

    constructor(props) {
        super(props);
        this.state = {
          user: auth().currentUser,
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
                let mapExpensa = snap.val();
                mapExpensa.key = snap.key;
                meses.push(mapExpensa);
            });
            this.setState({ meses });
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
                            {nombreMes(parseInt(mes.mes))}
                            {mes.info ? <ExpensasPDFButton porcentaje={this.props.porcentaje} 
                                    data={mes} btnName={"Descargar"} /> : "."}
                        </ListItem>
                    ))}
                </List>
            </Box>
        );
    }
}

export default Local