import { FormStyles, Input } from "./FormComponent.styles";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { departments } from "../../constants/constants";
import { formValidations } from "./FormComponent.utils";
import { FormValues } from "./FormComponent.type";

const FormComponent = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(formValidations),
  });

  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    console.log(data);
  };

  const uploadImage = (e: any) => {
    let file = e.target.files[0];
    if (file.size > 5e5) {
      window.alert("Please upload a file smaller than 500 KB");
      return "";
    }
    return e;
  };

  return (
    <FormStyles>
      <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="file"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                value={value}
                onChange={(event) => {
                  const e = uploadImage(event);
                  console.log(e);
                  if (e) onChange(e);
                }}
              />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
          )}
        />

        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              className="fields"
              label="Name"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Full name required" }}
        />
        <Controller
          rules={{ required: true }}
          control={control}
          name="gender"
          render={({ field }) => (
            <RadioGroup {...field} className="radio-btn">
              <FormControlLabel value="male" control={<Radio />} label="male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="other"
              />
            </RadioGroup>
          )}
        />
        <Controller
          control={control}
          name="department"
          defaultValue="Select Department"
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Department
              </InputLabel>
              <Select id="select" labelId="demo-simple-select-label" {...field}>
                {departments.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="student_reg_number"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              className="fields"
              label="Reg #"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "student_reg_number required" }}
        />
        <Controller
          name="phone_number"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              className="fields"
              label="Phone #"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              placeholder="+923456789234"
            />
          )}
          rules={{ required: "student_reg_number required" }}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              className="fields"
              label="Email"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="email"
              placeholder="emumba@gmail.com"
            />
          )}
          rules={{ required: "Email required" }}
        />
        <Controller
          name="address"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              className="fields"
              label="Home Address"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Email required" }}
        />

        <div>
          <Button fullWidth type="submit" variant="contained" color="primary">
            Register
          </Button>
        </div>
      </form>
    </FormStyles>
  );
};

export default FormComponent;
