import { useForm, ValidationError } from "@formspree/react";
import { Button, TextField, FormControl, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

export default function ContactForm() {

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || '');

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <FormControl>
          <Grid item xs={6}>
            <Item>
              <TextField id="name" type="name" name="name" label="Full Name" />
            </Item>
          </Grid>
          <Grid xs={6}>
            <TextField id="email" type="email" name="email" label="Email Address" />
          </Grid>
          <FormHelperText error>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </FormHelperText>
        </FormControl>
        <FormControl>
          <TextField id="message" name="message" label="Message" multiline />
          <FormHelperText error>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </FormHelperText>
        </FormControl>
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
        <FormHelperText error>
          <ValidationError errors={state.errors} />
        </FormHelperText>
      </Grid>
    </form>
  );
}
