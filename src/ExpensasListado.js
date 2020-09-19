import React  from "react";
import './App.css'
import {Link} from 'react-router-dom';

import {
    List,
    ListItem,
    Box,
    Icon
} from "@chakra-ui/core";

import ExpensasDescargar from "./ExpensasDescargar";


function ExpensasListado() {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
    return (
        <Box p={4}>
            <h1 className="sub-title">Expensas</h1>
            <List className="list-expensa">
                {meses.map(mes => (
                    <ListItem className="list-expensa-item">
                        {mes}
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

export default ExpensasListado