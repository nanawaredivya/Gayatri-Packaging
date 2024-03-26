import { Grid, Typography } from '@mui/material'
import React from 'react'

const InfoAbout = () => {
    return (
        <Grid container spacing={2} sx={{backgroundColor: "#E0FFFF"}}>
            <Grid item xs={12} md={4}>
            <img src="/path/to/your/image.jpg" alt="Product Name" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography variant="body1"
                    sx={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#007FFF",
                        marginTop: "2rem"
                    }}>
                    GAYATRI PACKAGING
                </Typography>
                <Typography variant='body2'
                    sx={{
                        fontSize: "1rem",
                    }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias odit expedita, nemo repellendus tenetur minus animi ipsa ab beatae veritatis officiis tempora, ut ea est eos, aspernatur exercitationem repellat? Illo adipisci iusto beatae tempore accusantium provident facere quasi accusamus nesciunt eligendi, necessitatibus voluptatem ad. Excepturi aspernatur laboriosam a deleniti at.
                </Typography>
                <Typography variant='body2'
                    sx={{
                        fontSize: "1rem",
                        marginTop: "1rem",
                        marginBottom: "2rem"
                    }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias odit expedita, nemo repellendus tenetur minus animi ipsa ab beatae veritatis officiis tempora, ut ea est eos, aspernatur exercitationem repellat? Illo adipisci iusto beatae tempore accusantium provident facere quasi accusamus nesciunt eligendi, necessitatibus voluptatem ad. Excepturi aspernatur laboriosam a deleniti at.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default InfoAbout