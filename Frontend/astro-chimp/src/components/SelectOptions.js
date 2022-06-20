import React from 'react'

function SelectOptions() {
  const options = [
    {
      label: "Text",
      value: "text",
    },
    {
      label: "Radio",
      value: "radio",
    },
    {
      label: "Checkbox",
      value: "checkbox",
    },
    {
      label: "Dropdown",
      value: "dropdown",
    }
  ]


  return (
    <div>
    <select>
      {options.map((option, index) => (
        console.log(option, index),
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
    </div>
  )
}

export default SelectOptions;