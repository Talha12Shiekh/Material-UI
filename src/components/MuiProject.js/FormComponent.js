import { makeStyles, TextField } from "@material-ui/core";



export const  RenderInputText = ({label,value,onChange}) => {
  return <TextField
      label={label}
      fullWidth
      variant='outlined'
      margin='normal'
      value={value}
      onChange={onChange}
  />
}