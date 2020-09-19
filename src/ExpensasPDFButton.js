import React, { Component } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ExpensasDoc from './ExpensasDoc';
import './App.css'

class ExpensasPDFButton extends Component{

  render(){
        return(
            <PDFDownloadLink
            document={<ExpensasDoc />}
            fileName="movielist.pdf"
            className="button-download">
                {this.props.porcentaje}
            {({ blob, url, loading, error }) => 
                (loading ? "Cargando" : this.props.porcentaje )
            }
          </PDFDownloadLink>
        );
      }
  }
  
  export default ExpensasPDFButton;