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
                    name={"name_"+ this.props.i}
                    placeholder="Nombre"
                    defaultValue={this.props.name}
                    ref={this.props.register({ validate: true })}
                />
                </FormControl>
                <FormControl isInvalid={this.props.errors.name}>
                <Input
                    name={"value_"+ this.props.i}
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