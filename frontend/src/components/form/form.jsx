import React, { useState } from 'react';
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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Header } from '../header/header';

export const Form = () => {
  const [roomName, setRoomName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [responsible, setResponsible] = useState('');
  const [reason, setReason] = useState('');
  const [info, setInfo] = useState('');
  const [guests, setGuests] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      roomName,
      location,
      date,
      startTime,
      endTime,
      responsible,
      reason,
      info,
      guests,
      file,
    });
  };

    return (
        <><Header 
            title="Criar Nova Reserva"
            buttonText="Voltar para Home"
            buttonTo="/home"
        />
        <Container>
            <form onSubmit={handleSubmit}>
                <br></br>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nome da Sala"
                            fullWidth
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="file"
                            label="Foto Ilustrativa da Sala"
                            fullWidth
                            onChange={handleFileChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Local da Sala"
                            fullWidth
                            value={location}
                            onChange={(e) => setLocation(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="date"
                            label="Data de Uso"
                            fullWidth
                            value={date}
                            onChange={(e) => setDate(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="time"
                            label="Hora Início do Uso"
                            fullWidth
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="time"
                            label="Hora Final do Uso"
                            fullWidth
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Responsável pelo Uso"
                            fullWidth
                            value={responsible}
                            onChange={(e) => setResponsible(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Motivo do Uso"
                            fullWidth
                            multiline
                            rows={2}
                            value={reason}
                            onChange={(e) => setReason(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Informações em Geral"
                            fullWidth
                            multiline
                            rows={2}
                            value={info}
                            onChange={(e) => setInfo(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Convidados"
                            fullWidth
                            multiline
                            rows={2}
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">Criar Reserva</Button>
                    </Grid>
                </Grid>
            </form>
        </Container></>
    )
}