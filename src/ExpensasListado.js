import React, { Component }  from "react";
import './App.css'
import {Link} from 'react-router-dom';
import { db } from "./services/firebase"
import nombreMes from "./utils/mes"

import {
    List,
    ListItem,
    Box,
    Icon,
    Button
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
                let mapExpensa = snap.val();
                mapExpensa.key = snap.key;
                console.log(mapExpensa);
                meses.push(mapExpensa);
            });
            this.setState({ meses });
            console.log(meses);
          });
        } catch (error) {
          this.setState({ readError: error.message });
        }
    }

    deleteExpensa(key){
        console.log(key);
        try {
            db.ref('expensas').child(key).remove();
        } catch(error){
            console.log("Error al eliminar");
            console.log(error);
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
                            {mes.info ? <ExpensasDescargar data={mes}/> : "."}
                            <Button variantColor = "red" variant="solid" onClick={() => this.deleteExpensa(mes.key)}>
                                <Icon name="delete" size="20px" color="white" />
                            </Button>
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