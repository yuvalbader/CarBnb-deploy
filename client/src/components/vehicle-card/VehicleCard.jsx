import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Devider from '@mui/material/Divider';
import StarRateIcon from '@mui/icons-material/StarRate';
import Box from '@mui/material/Box';


const styleBox1 = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  my: '10px',
};

const styleBox2 = {
  display: 'flex',
  justifyContent: 'flex-end',
  my: '10px',
};

const VehicleCard = ({ brand, model, year, rating, price, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={image} alt="Black BMW" />
      <CardContent>
        <Box sx={styleBox1}>
          <Typography
            gutterBottom
            variant="h6"
            fontWeight={'bold'}
            component="div"
          >
            {brand} {model} {year}
          </Typography>
          <Typography variant="h7" color="text.secondary">
            {rating}
            <StarRateIcon color="primary" fontSize={'10px'} />
          </Typography>
        </Box>
        <Devider />
        <Box sx={styleBox2}>
          <Typography gutterBottom variant="body1" fontWeight={'bold'}>
            ${price}/Day
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
