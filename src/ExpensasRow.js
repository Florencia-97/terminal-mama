import React, { Component } from 'react';
import './App.css'

import {
    FormControl,
    Input,
    SimpleGrid,
  } from "@chakra-ui/core";

class ExpensasRow extends Component {

    render(){
        return(
            <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
                <FormControl isInvalid={this.props.errors.name}>
                <Input
                    name={this.props.i + ".name"}
                    placeholder="Nombre"
                    defaultValue={this.props.name}
                    ref={this.props.register({ validate: true })}
                />
                </FormControl>
                <FormControl isInvalid={this.props.errors.name}>
                <Input
                    name={this.props.i + ".value"}
                    placeholder="Valor"
                    defaultValue={this.props.value}
                    ref={this.props.register({ validate: true })}
                />
                </FormControl>
            </SimpleGrid>
        )
    }
}
  
  export default ExpensasRow;