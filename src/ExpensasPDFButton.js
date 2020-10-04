import React from 'react';
import pdf from './utils/pdfExpensa'
import nombreMes from "./utils/mes"
import './App.css'

function ExpensasPDFButton(props) {

  let info = [];
  if (props.data) {
    for (const property in props.data.info) {
      var newOb = {"title": props.data.info[property]["name"], "value": props.data.info[property]["value"]};
      info.push(newOb);
    }
  }
  var porcentajeAPagar = parseInt(props.data.total) * parseInt(props.porcentaje) / 100;
  info.push({"title": "  " , "value": " "});
  info.push({"title": "Total" , "value": props.data.total});
  info.push({"title": "Porcentaje " + props.porcentaje + "%" , "value": porcentajeAPagar});

  return(
      <button className="btn-pdf" onClick={() => {
        // Mind we are dynamically setting filename to be the
        // users movie input text, this can be anything you want.
        const filename = `expensa${16}.pdf`
        // All we want for this example are:
        // Title, Release Date, Description, Vote Average
        // This is important to the function we are building
        // because it sets the order in which we will display data
        const headers = [
          {key: 'title', label: ' ', xPos:200},
          {key: 'value', label: ' ', xPos:500},
        ]

        //En extraInfo puedo agregar datos extra
        const extraInfo = {title: "Expensas mes " + nombreMes(parseInt(props.data.mes))}

        // Here's the call for our pdf function
        // Because of the placeholder code in our pdf.js file,
        // clicking on this should render a save dialog
        // and downloading should render an empty pdf
        pdf({data: info, headers, filename, extraInfo})
      }}>
      {props.porcentaje}
    </button>
    );

}
  
export default ExpensasPDFButton;