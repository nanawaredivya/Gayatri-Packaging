import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Card, CardContent, CardMedia } from '@mui/material';
import { db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore'; // No need to import useState again

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const userCollectionRef = collection(db, "contactDetails")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(userCollectionRef, {
        name: name,
        email: email,
        phone: phone,
        message: message,
      });
      console.log('Form submitted');
      if (!alert('Message sent successfully!')) document.location = './Home';
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <Grid container spacing={2} sx={{ marginTop: '0.3rem' }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: 40, color: '#D35400', fontWeight: 'bold' }}>
          Contact Me
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem', marginLeft: '1rem', marginRight: '2rem', paddingInlineEnd: '2rem', paddingInlineStart: '2rem', paddingBlock: '1.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' }}>
          <CardMedia
            component="img"
            height="200"
            image="/Assets/contact.png"
            alt="Contact Image"
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Divya Nanaware
            </Typography>
            <Typography variant="body1" gutterBottom>
              As a React frontend developer, I specialize in creating engaging user interfaces and interactive web experiences.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#962ac9" }}>
              REACT-FRONTEND DEVELOPER
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: 9767425393
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: divyananaware28@gmail.com
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={7}>
        <Card sx={{ padding: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth 
                  sx={{ color: 'black', backgroundColor: '#DC7633', '&:hover': { backgroundColor: '#D35400' } }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Contact;
