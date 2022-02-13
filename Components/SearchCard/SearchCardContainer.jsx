import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchCard from './SearchCard';

// flight={flights}
export default function SearchCardContainer({flight}){

    return(
        <Box>
            {flight ? flight.map(fl => <SearchCard flight={fl}/>) : <Typography>No Flight</Typography>}
        </Box>
    )
}