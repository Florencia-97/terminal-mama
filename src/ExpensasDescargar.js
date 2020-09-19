import React, { Component } from 'react';
import './App.css'
import ExpensasPDFButton from './ExpensasPDFButton';

import { Box } from "@chakra-ui/core";

class ExpensasDescargar extends Component{

  render(){
        return(
            <Box p={4} className="download-buttons">
                <ExpensasPDFButton porcentaje={20} />
                <ExpensasPDFButton porcentaje={16} />
                <ExpensasPDFButton porcentaje={17} />
                <ExpensasPDFButton porcentaje={30} />
            </Box>
        );
      }
  }
  
  export default ExpensasDescargar;