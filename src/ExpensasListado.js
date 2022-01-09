import React, { Component }  from "react";
import './App.css'
import {Link} from 'react-router-dom';
import { db, auth } from "./services/firebase"
import nombreMes from "./utils/mes"

import {
    List,
    ListItem,
    Icon,
    Button
} from "@chakra-ui/core";

import ExpensasDescargar from "./ExpensasDescargar";

class ExpensasListado extends Component {

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
                console.log(mapExpensa);
                meses.push(mapExpensa);
            });
            this.setState({ meses });
          });
        } catch (error) {
          this.setState({ readError: error.message });
        }
    }

    deleteExpensa(key){
        try {
            db.ref('expensas').child(key).remove();
        } catch(error){
            console.log("Error al eliminar");
            console.log(error);
        }
    }

    render(){
        if (this.state.meses.length === 0) {
            return (
                <section className="seccion-expensas-creadas">
                    Loading
                </section>
            )
        }
        return (
            <section className="seccion-expensas-creadas">
                <h1 className="sub-title">Expensas</h1>
                <List className="list-expensa">
                    {this.state.meses.map(mes => (
                        <ListItem className="list-expensa-row">
                            <div className="list-expensa-row-elem">
                                <h3>
                                    {nombreMes(parseInt(mes.mes))}
                                </h3>
                            </div>
                            <div className="list-expensa-row-elem list-expensa-btns">
                                {mes.info ? <ExpensasDescargar data={mes}/> : "."}
                                <Button variantColor = "red" variant="solid" onClick={() => this.deleteExpensa(mes.key)}>
                                    <Icon name="delete" size="20px" color="white" />
                                </Button>
                            </div>
                        </ListItem>
                    ))}
                </List>
                <Link to="/expensas/crear" className="crear-expensa-btn">
                    <Icon name="add" size="20px" color="red.500" />
                    Crear nuevo mes
                </Link>
            </section>
        );
    }
}

export default ExpensasListado