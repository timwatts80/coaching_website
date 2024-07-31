import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

interface ServiceCardProps {
    cardTitle: string;
    cardBody: string;
    cardAction: string;
    showButton?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ cardTitle, cardBody, cardAction, showButton }) => {
    return (
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
                <Typography
                    variant="body1"
                    component="p"
                    sx={(theme) => ({
                        lineHeight: 1.8,
                        color: `${theme.palette.primary.contrastText}`,
                    })}
                >
                    {cardBody}
                </Typography>
            </CardContent>
            {showButton && (
                <CardActions sx={{ p: 2 }}>
                    <Button size="large" variant="contained">{cardAction}</Button>
                </CardActions>
            )}
        </Card>
    );
};

export default ServiceCard;

