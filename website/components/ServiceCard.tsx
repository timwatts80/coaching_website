import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const ServiceCard = () => {
    return (
        <><Card elevation={14} sx={{ p: 2, }}>
            <CardHeader title="Embodiment" />
            <CardContent>
                <Typography variant="body2" component="p">
                    Strength & Fitness: Develop a personalized fitness routine to cultivate strength, endurance, and resilience.
                </Typography>
                <Typography variant="body2" component="p">
                    Healthy Masculinity:  Define and embody your authentic masculinity with confidence and a sense of groundedness.
                </Typography>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
                <Button size="large" variant="contained">Learn More</Button>
            </CardActions>
        </Card >
        </>
    );
};

export default ServiceCard;