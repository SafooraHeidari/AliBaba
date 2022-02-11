import Box from "@mui/material/Box";
import SearchCard from './SearchCard';

export default function SearchCardContainer({flight}){
    return(
        <Box>
            {flight.map(fl =>
                    <SearchCard flight={fl}/>)}
        </Box>
    )
}