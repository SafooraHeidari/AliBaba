import Box from "@mui/material/Box";
import {flights} from './../../data/data';
import SearchCard from './SearchCard'

export default function SearchCardContainer(){
    return(
        <Box>
            {flights.map(flight =>
                    <SearchCard flight={flight}/>)}
        </Box>
    )
}