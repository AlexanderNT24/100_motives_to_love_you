import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const defaultTheme = createTheme();

export const CardLoginComponent = () => {
    const [isClicked, setIsClicked] = React.useState(false);
    const [randomTop, setRandomTop] = React.useState(0);
    const [randomLeft, setRandomLeft] = React.useState(0);

    const phrases = [
        "Eres la persona más importante en mi vida",
        "Te amo",
        "Mi bonita",
        "Mi preciosa",
        "Amor de mi vida",
        "Tú y yo, juntos para siempre",
        "Eres mi sueño hecho realidad",
        "Contigo todo es mejor",
        "Cada día te quiero más",
        "Eres mi sol en días nublados",
        "Eres mi refugio en días difíciles",
        "No puedo dejar de pensar en ti",
        "Eres la razón de mi sonrisa",
        "Tú y yo, un equipo invencible",
        "Eres la melodía de mi corazón",
        "Eres mi destino y mi camino",
        "Juntos construimos un amor eterno",
        "Eres mi todo",
        "Eres mi fuerza y mi inspiración",
        "Tú haces que mi corazón lata más fuerte",
        "Eres mi amor verdadero",
        "Tú eres mi hogar",
        "Eres el sueño que nunca quiero despertar",
        "Eres la razón por la que creo en el amor",
      ];
      

    const handleClick = (event) => {
        setIsClicked(true);
        setRandomTop(event.clientY);
        setRandomLeft(event.clientX);
    };

    const generatePhrases = () => {
        const numberRandom = Math.floor(Math.random() * phrases.length);
        console.log(numberRandom);
        return (
            <>
                <p>{phrases[numberRandom]}</p>
            </>
        );
    };


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid onClick={handleClick}
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                       
                    <Card>
                            <CardContent>
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography gutterBottom variant="h5" component="div">
                                    Ingresa
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                        Ingresar
                                    </Button>
                                </Typography>
                            </CardContent>
  
                    </Card>
                    {/* Renderizamos la frase si se ha hecho clic */}
                    {isClicked && (
                        <div
                            style={{
                                position: 'absolute',
                                top: randomTop,
                                left: randomLeft,
                                backgroundColor: '#fff',
                                padding: '10px',
                                borderRadius: '5px',
                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                zIndex: 9999,
                            }}
                        >
                            <Typography variant="body1" color="text.secondary">
                                {generatePhrases()}
                            </Typography>
                        </div>
                    )}
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
