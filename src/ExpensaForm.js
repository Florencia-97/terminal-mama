import React  from "react";
import { useForm } from "react-hook-form";
import { db } from "./services/firebase.js"
import './App.css'

import {
  Button,
  Box
} from "@chakra-ui/core";

import ExpensasRow from "./ExpensasRow";

function ExpensaForm(props) {

  const { handleSubmit, errors, register, formState } = useForm();

  async function submitExpensa(map) {
    const today = new Date();
    try {
      await db.ref("expensas").push({
        info: map,
        date: today,
        mes: today.getMonth(),
        anio: today.getFullYear(),
        total: getMontoTotal(map),
        uid: props.user.uid
      });
      alert("Expensa creada correctamente!");
    } catch (error) {
      console.log(error);
      console.log("Falló");
    }
  }

  function getMontoTotal(info){
    var total = 0;
    for (const item in info) {
      total += parseInt(info[item]["value"]);
    }
    return total;
  }

  function onSubmit(values) {
    console.log(values);
    submitExpensa(values);
  }

  function returnForm(){

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="form-data">
        <Box p={8}>
            {props.elems.map( (elem, i) =>
                <ExpensasRow errors={errors} register={register} i={i}
                  name={elem.name} value={elem.value} />
            )}
          <Button
            mt={4}
            variantColor="teal"
            isLoading={formState.isSubmitting}
            type="submit">
            Crear
          </Button>
        </Box>
      </form>
    );
  }

  return (
    <Box p={8}>
      <h1 className="sub-title">Nuevo Mes</h1>
      {returnForm()}
    </Box>
  );
}
  
export default ExpensaForm;