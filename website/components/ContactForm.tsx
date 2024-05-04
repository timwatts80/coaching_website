import { useForm, ValidationError } from "@formspree/react";
import { Button, TextField, FormControl, FormHelperText, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

export default function ContactForm() {

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || '');

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <TextField id="name" type="name" name="name" label="Full Name" margin="normal" required />
      </FormControl>
      <FormControl fullWidth>
        <TextField id="email" type="email" name="email" label="Email Address" margin="normal" required />
        <FormHelperText error>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </FormHelperText>
      </FormControl>
      <FormControl fullWidth>
        <TextField id="message" name="message" label="Message" multiline rows={4} margin="normal" />
        <FormHelperText error>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </FormHelperText>
      </FormControl>
      <Button fullWidth variant="contained" size="large" type="submit" sx={{ mt: 1 }} disabled={state.submitting} >
        Submit
      </Button>
      <FormHelperText error>
        <ValidationError errors={state.errors} />
      </FormHelperText>
    </form>
  );
}
