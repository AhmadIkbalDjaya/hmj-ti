import { Box, InputLabel, TextField } from '@mui/material';

const style = {
  label: {
    color: '#121212',
    fontWeight: 600,
  },
  input: {
    border: '1px solid rgba(69, 79, 91, 0.38)',
    borderRadius: '4px',
  },
};

const InputComponent = ({
  id,
  label,
  required,
  type,
  multiline,
  name,
  handleChange,
  error,
  helperText,
}) => {
  return (
    <Box textAlign="left" display="flex" flexDirection="column" gap={1}>
      <InputLabel
        required={required}
        style={style.label}
        htmlFor={id}
        shrink={false}
      >
        {label}
      </InputLabel>
      <TextField
        multiline={multiline}
        rows={5}
        id={id}
        name={name}
        type={type}
        onChange={handleChange}
        size="small"
        error={error}
        helperText={helperText}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: style.input.border,
              borderRadius: style.input.borderRadius,
            },
            '&:hover fieldset': {
              borderColor: 'rgba(69, 79, 91, 0.38)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgba(69, 79, 91, 0.38)',
            },
          },
        }}
      ></TextField>
    </Box>
  );
};

export default InputComponent;
