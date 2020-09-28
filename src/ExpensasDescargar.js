import React from 'react';
import './App.css'
import ExpensasPDFButton from './ExpensasPDFButton';

import { Box } from "@chakra-ui/core";

function ExpensasDescargar(props){

  return(
        <Box p={4} className="download-buttons">
            <ExpensasPDFButton porcentaje={20} data={props.data} />
            <ExpensasPDFButton porcentaje={16} data={props.data} />
            <ExpensasPDFButton porcentaje={17} data={props.data} />
            <ExpensasPDFButton porcentaje={30} data={props.data} />
        </Box>
        );
  }
  
  export default ExpensasDescargar;