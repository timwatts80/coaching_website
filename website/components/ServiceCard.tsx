import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import ContactForm from './ContactForm';

interface ServiceCardProps {
    cardTitle: string;
    cardBody: string;
    cardAction: string;
    showButton?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ cardTitle, cardBody, cardAction, showButton }) => {
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const formattedCardBody = cardBody.split('\n\n').map((text, index) => (
        <Typography key={index} paragraph sx={{ color: `${theme.palette.primary.contrastText}`}}>
          {text}
        </Typography>
      ));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <Card elevation={14} sx={(theme) => ({ p: 2, display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid #313131', backgroundColor: '#121212', color: theme.palette.primary.contrastText, })}>
            <CardHeader 
                title={
                    <Typography variant="h2">
                        {cardTitle}
                    </Typography>
                } 
            />
            <Divider sx={(theme) => ({
                width: "75px",
                mx: 2,
                my: 2,
                border: `2px solid ${theme.palette.primary.main}`,
            })} />
            <CardContent sx={{ flexGrow: 1 }}>

                    {formattedCardBody}

            </CardContent>
            {showButton && (
                <CardActions sx={{ p: 2 }}>
                    <Button size="large" variant="contained" onClick={handleClickOpen}>{cardAction}</Button>
                </CardActions>
            )}
        </Card>
        <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="lg">
        <DialogContent sx={{ py: 0, }}>
          <Card sx={{ width: "100%", height: "100%", }}>
            <CardContent sx={{ mt: 0, textAlign: "center", }}>
              <Typography variant="h4" component="h4">
                {'Schedule a '}
                <strong style={{ color: theme.palette.primary.main }}>
                  {'free'}
                </strong>
                {' 30 min consultation'}
              </Typography>
            </CardContent>
            <Divider />
            <CardContent
              sx={{
                px: 0,
                my: 0,
                backgroundColor: theme.palette['grey']['200'],
                '&.MuiCardContent-root:last-child': {
                  py: 0
                }
              }}
            >
              <ContactForm />
            </CardContent>
          </Card>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ px: { xs: 2, md: 4 }, my: 1, }}>
          <Button
            fullWidth
            size="small"
            variant="contained"
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </>
    );
};

export default ServiceCard;

