import React  from 'react';
import {
  Radio,
  Checkbox,
  TextField,
  InputLabel,
  Select,
  OutlinedInput,
  FormLabel,
} from '@material-ui/core';

export const InputComponent = (field) => (
  <div className="contactField">
    <InputLabel>{field.label}</InputLabel>
    <TextField
      margin="normal"
      label={field.placeholder}
      variant="outlined"
      type={field.type}
      className={`inputField ${field.meta.error && field.meta.touched ? 'has-error' : null}`}
      {...field.input}
    />
    <div className="text-error">
      {field.meta.touched ? field.meta.error : ''}
    </div>
  </div>
);

export const CheckboxGroupComponent = ({
  label,
  name,
  options,
  input,
  meta,
}) => (
  <div className="contactField">
    <label>{label}</label>
      { options.map((option, index) => (
        <div className="checkbox" key={index}>
          <label>
            <Checkbox
              margin="normal"
              type="checkbox"
              name={`${name}[${index}]`}
              value={option.name}
              checked={input.value.indexOf(option.name) !== -1}
              onChange={event => {
                const newValue = [...input.value];
                if(event.target.checked) {
                  newValue.push(option.name);
                } else {
                  newValue.splice(newValue.indexOf(option.name), 1);
                }
                return input.onChange(newValue);
              }}/>
            {option.name}
          </label>
        </div>))
      }
    <div className="text-error">
      {meta.touched ? meta.error : ''}
    </div>
  </div>
);

export const RadioComponent = ({
  input,
  options,
}) => (
  <div className="contactField">
    <FormLabel>Gender</FormLabel>
    {
      options.map((option, index) => (
        <div className="radioItem" key={index}>
          <label>
            <Radio
              type="radio"
              {...input}
              value={option.name}
              checked={input.value.indexOf(option.name) !== -1}
            />
            {option.name}
          </label>
        </div>
      ))
    }
  </div>
);

export const TextAreaComponent = (field) => (
  <div className="contactField">
    <InputLabel>{field.label}</InputLabel>
    <TextField
      margin="normal"
      label={field.placeholder}
      multiline
      rows="5"
      variant="outlined"
      className={`textField ${field.meta.error && field.meta.touched ? 'has-error' : null}`}
      {...field.input}
    />
    <div className="text-error">
      {field.meta.touched ? field.meta.error : ''}
    </div>
  </div>
);

export const SelectComponent = ({input, label, options, labelWidth}) => (
  <div className="contactField">
    <InputLabel>{label}</InputLabel>
    <Select
      margin="none"
      native
      {...input}
      input={
        <OutlinedInput
          name={label}
          labelWidth={labelWidth}
        />
      }
    >
      <option value="">Select</option>
      {options.map(el => (
        <option
          key={el}
          value={el.value}
        >
          {el}
        </option>
      ))
      }
    </Select>
  </div>
);

// export const SelectComponent = ({input, label, options}) => (
//   <div className="contactField">
//     <label>{label}</label>
//     <select
//       {...input}
//     >
//       <option value="">Select</option>
//       {options.map(el => (
//         <option
//           key={el}
//           value={el.value}
//         >
//           {el}
//         </option>
//       ))
//       }
//     </select>
//   </div>
// );

// export const RadioComponent = ({
//   input,
//   options,
// }) => (
//   <div className="radioField">
//     {
//       options.map((option, index) => (
//         <div className="radioItem" key={index}>
//           <label>
//             <input
//               type="radio"
//               {...input}
//               value={option.name}
//               checked={input.value.indexOf(option.name) !== -1}
//             />
//             {option.name}
//           </label>
//         </div>
//       ))
//     }
//   </div>
// );

export default {};