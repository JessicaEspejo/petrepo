import React from 'react';
import Select from 'react-select';

export default ({ onChange, options,optionsCiudad,optionsServicio, value, className }) => {

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "";
    };

    const defaultValue2 = (optionsCiudad, value) => {
        return optionsCiudad ? optionsCiudad.find(option => option.value === value) : "";
    };

    const defaultValue3 = (optionsServicio, value) => {
        return optionsServicio ? optionsServicio.find(option => option.value === value) : "";
    };
    return (
        <div className={className}>


            <Select
            placeholder='elige el tipo de mascota'
                value={defaultValue(options, value)}
                onChange={value => {
                    onChange(value)

                }} options={options} />

     <Select
            placeholder='elige el tipo de ciudad'
                value={defaultValue(optionsCiudad, value)}
                onChange={value => {
                    onChange(value)

                }} options={optionsCiudad} />


<Select
            placeholder='elige el tipo de servicio'
                value={defaultValue(optionsServicio, value)}
                onChange={value => {
                    onChange(value)

                }} options={optionsServicio} />
                    
        </div>
        

    )
}