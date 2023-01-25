import React from 'react'
import { useFormik } from 'formik'
import CustomSelect from '../HeaSection/CustomSelect'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker'

//este es para calendario desde cuando





// este es para seleccion multiple
const options = [
  { value: 'PUG', label: 'PUG' },
  { value: 'Pincher', label: 'Pincher' },
  { value: 'BullDog', label: 'BullDog' },
  { value: '  Chihuahua', label: ' Chihuahua' }

]
const optionsCiudad = [
  { value: 'Bogota', label: 'Bogota' },
  { value: 'Boyaca', label: 'Boyaca' },
  { value: 'Medellin', label: 'Medellin' },
  { value: 'Santa Martha', label: 'Santa Martha' }

]
const optionsServicio = [
  { value: 'VETRINARIA', label: 'VETERINARIA' },
  { value: 'hotel canino', label: 'hotel canino' },
  { value: 'Venta de Mascotas', label: 'Venta de Mascotas' },
  { value: 'painteradiestramiento', label: 'Painteradiestramiento' }

]

export function RegisterForm() {

  const validate = values => {
    const errors = {}

 
    if (!values.job) {
      errors.job = 'Required'
    }

    return errors
  }

  const formik = useFormik({

    initialValues: {
      email: '',
      job: ''
    },
    validate,
    onSubmit: values => {
      console.log(values)
    }

  })

  return (<div>

    <form onSubmit={formik.handleSubmit}>


      <CustomSelect
        className='input'
        onChange={value => formik.setFieldValue('job', value.value)}
        value={formik.values.job}
        options={options}
        optionsCiudad={optionsCiudad}
        optionsServicio={optionsServicio}
      />
      <div className="contenedor">
        <div className="grupo">
          <h1>Hola Mundo</h1>
        </div>
      </div>

      {formik.errors.job ? <div className='error'>{formik.errors.job}</div> : null}


      <button type="submit">buscar servicio cerca</button>

    </form>
  </div>)
}
