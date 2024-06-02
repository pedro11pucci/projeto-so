import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
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

export const Header = ({ title, buttonText, buttonTo }) => {
    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <Button color="inherit" component={Link} to={buttonTo}>
                            {buttonText}
                        </Button>
                        <Button color="inherit">Sair</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}