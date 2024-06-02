import React from 'react';
import ReactDOM from 'react-dom';
import {
  CssBaseline,
  Container,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@mui/material';
import { MeetingCard } from './card/card';
import { Header } from '../header/header';

const reservations = [
  {
    name: 'Sala de Reunião A',
    photoUrl: 'https://espacosaoluis.com.br/wp-content/uploads/2023/01/reuniao-4-1.jpg',
    location: 'Prédio 1, Andar 2',
    date: '2024-06-15',
    startTime: '14:00',
    endTime: '16:00',
    responsible: 'João Silva',
  },
  {
    name: 'Sala de Reunião B',
    photoUrl: 'https://i.pinimg.com/originals/8c/ac/21/8cac2121cf5252152c566fad392a917b.jpg',
    location: 'Prédio 2, Andar 3',
    date: '2024-06-16',
    startTime: '10:00',
    endTime: '12:00',
    responsible: 'Maria Souza',
  },
];

export const Home = () => (
<>
    <CssBaseline />
    <Header
      title="Reservas Feitas"
      buttonText="Criar Nova Reserva"
      buttonTo="/form"
    />
    <Container>
      <Box sx={{ flexGrow: 1, marginTop: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          {reservations.map((reservation, index) => (
            <Grid item key={index}>
              <MeetingCard
                reservation={reservation}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </>
);