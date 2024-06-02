import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';

export const MeetingCard = ({ reservation }) => {
  const {
    name,
    photoUrl,
    location,
    date,
    startTime,
    endTime,
    responsible,
  } = reservation;

  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardMedia
        component="img"
        height="140"
        image={photoUrl}
        alt={`Foto da ${name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box component="span" fontWeight="fontWeightBold">Local: </Box>{location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box component="span" fontWeight="fontWeightBold">Data: </Box>{date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box component="span" fontWeight="fontWeightBold">Hora: </Box>{startTime} - {endTime}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box component="span" fontWeight="fontWeightBold">Responsável: </Box>{responsible}
        </Typography>
      </CardContent>
    </Card>
  );
};