import Box from "@mui/material/Box";
import theme from '../../theme';

const styles = {
    stops__label : {
        width: '6rem',
        height: '2px',
        backgroundColor: theme.palette.gray.two,
    },
    stop__point : {
        width: '.75rem',
        height: '.75rem',
        borderRadius: '50%',
        margin: '.5rem 1px .5rem 0',
        border: `solid 1px ${theme.palette.gray.two}`,
    }
}

export default function Route(){
    return(
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', color: theme.palette.gray.two, marginX: '10px'}}>
            <svg viewBox="0 0 24 24" width="2rem" height="2rem" fill="currentColor" data-v-74a4e05f="">
                <path d="M.601 12.008c0 .929.297 1.545 1.003 1.857.392.172.802.226 1.46.22l.362-.009 5.656-.24.26.368.326.493.42.659.87 1.41 1.573 2.626 1.678 2.855a2.204 2.204 0 0 0 1.858 1.155.9.9 0 0 0 .878-1.198l-3.018-8.582c-.008-.021-.002-.03.006-.03l6.447-.29.79 2.114.035.13c.257.593.77.862 1.287.761.61-.12 1.008-.711.889-1.322l-.005-.09.009-5.947c.05-.488-.338-1.007-.9-1.12-.546-.107-1.029.189-1.246.665l-.832 2.22-6.446-.29a.013.013 0 0 1-.011-.017l3.179-8.595a.9.9 0 0 0-.92-1.209l-.161.014c-.69.02-1.352.4-1.754 1.013L12.426 4.8l-1.21 2.02-.8 1.308-.54.86-.45.693-.238.347-.107.149-5.602-.264h-.623l-.16.007-.206.016c-1.287.127-1.889.767-1.889 2.072Z"
                      fill-rule="evenodd"/>
            </svg>
            <Box style={styles.stops__label}/>
            <Box style={styles.stop__point}/>
        </Box>
    )
}






