import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const Contact = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>Contact Us</Typography>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name="name"
                  render={({ input }) => (
                    <TextField
                      {...input}
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="email"
                  render={({ input }) => (
                    <TextField
                      {...input}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="mobile"
                  render={({ input }) => (
                    <TextField
                      {...input}
                      label="Mobile No"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="message"
                  render={({ input }) => (
                    <TextField
                      {...input}
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Container>
  );
};

export default Contact;
