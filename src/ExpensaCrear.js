import React  from "react";
import { useForm } from "react-hook-form";
import { db } from "./services/firebase.js"
import './App.css'

import {
  Button,
  Box
} from "@chakra-ui/core";

import ExpensasRow from "./ExpensasRow";

function ExpensaCrear() {

  const { handleSubmit, errors, register, formState } = useForm();

  async function submitExpensa(map) {
    try {
      await db.ref("expensas").push({
        content: map,
        timestamp: Date.now()
      });
    } catch (error) {
      console.log("Falló");
    }
  }

  function onSubmit(values) {
    console.log(values);
    submitExpensa(values);
  }

  function returnForm(){

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="form-data">
        <Box p={8}>
          <ExpensasRow errors={errors} register={register} i={0}
                      name={"Municipal"} value={0} />
          <ExpensasRow errors={errors} register={register} i={1}
                      name={"Seguro inc. (c11)"} value={0} />
          <ExpensasRow errors={errors} register={register} i={2}
                      name={"Seguro resp civil. (c11)"} value={0} />
          <ExpensasRow errors={errors} register={register} i={3}
                      name={"Epen"} value={0} />
          <ExpensasRow errors={errors} register={register} i={4}
                      name={"Camuzzi"} value={0} />
          <ExpensasRow errors={errors} register={register} i={5}
                      name={"Jardinero"} value={0} />
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
  
export default ExpensaCrear;