import React from "react";

const InputForm = ({ name, value, type = 'text', onChange, onBlur, label }) => {
    return (
        <div>
            {label?.length > 0 ? <label htmlFor={name}>{label} : </label> : <></>}
            <input value={value} onBlur={onBlur} type={type} name={name} onChange={onChange} />
        </div>
    )
}

export default InputForm