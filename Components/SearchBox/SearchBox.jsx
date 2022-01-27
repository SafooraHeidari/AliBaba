import {Box, Container, Divider, Paper, Stack, Typography} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../styles/theme";


// const SearchContainer = styled('Container')({
//     height:'265px',
//     width:'1200px',
//     backgroundColor:theme.palette.white.main,
//     borderRadius:'8px',
//     boxShadow:'0 2px 1px -1px theme.palette.shadowButton.main',
//     border: 'solid 1px theme.palette.border1.main'
// })

export default function SearchBox(){
    return(
        <Container sx={{height:'265px', width:'1200px',backgroundColor:theme.palette.white.main,borderRadius:'8px',
            boxShadow:'0 2px 1px -1px theme.palette.shadowButton.main',border: 'solid 1px theme.palette.border1.main'}}>

            <Box sx={{height:'80px', display:'flex',flexDirection:'row'}}>
                <Box>
                    <svg viewBox="0 0 24 24" width="36px" height="36px" fill="currentColor"
                         className="block mx-auto mb-1">
                        <path d="M5.557 5.565c.45-.45.713-.435 1.163-.06l.105.09a.75.75 0 0 1 .112.105l.255.255 3 3.293a.667.667 0 0 0 .675.195l1.988-.555a.682.682 0 0 0 .48-.75l-.045-.165a.376.376 0 0 1 0-.09l.075-.105c.067-.075.135-.158.21-.233l.113-.105c.12-.12.247-.127.33-.052l.682.682a.667.667 0 0 0 .66.173l2.37-.675a1.013 1.013 0 0 1 .982.217l.06.06h-.052l-6.105 2.82a.676.676 0 0 0-.217 1.065l3.217 3.525a.667.667 0 0 0 .75.158l1.5-.698a.188.188 0 0 1 .248.038.173.173 0 0 1 0 .217L15 18.098l-.082.097a.165.165 0 0 1-.233.045.172.172 0 0 1-.068-.195l.075-.135.69-1.5a.668.668 0 0 0-.157-.75l-3.518-3.217a.674.674 0 0 0-1.072.217l-2.85 6.09-.045-.052h-.038a1.012 1.012 0 0 1-.202-.96l.682-2.385a.667.667 0 0 0-.172-.66l-.698-.705a.187.187 0 0 1 0-.263l.12-.127a2.36 2.36 0 0 1 .24-.218l.105-.075h.18a.674.674 0 0 0 .863-.45l.57-2.01a.683.683 0 0 0-.195-.682l-3.293-3-.187-.18a1.92 1.92 0 0 1-.465-.63c-.09-.24 0-.45.3-.788h.007Zm10.373 13.5 3.082-3.075a1.5 1.5 0 0 0 .24-1.965l-.06-.09a1.5 1.5 0 0 0-1.875-.435l-1.035.473-2.25-2.475 5.25-2.438h.06a1.328 1.328 0 0 0 .33-2.205l-.044-.105-.128-.09a2.318 2.318 0 0 0-2.198-.45l-1.95.54-.42-.427a1.56 1.56 0 0 0-2.182.082 3.761 3.761 0 0 0-.75.863v.075a.668.668 0 0 0-.06.24v.165l-1.012.277-2.806-3.052-.18-.188a4.337 4.337 0 0 0-.36-.285 2.002 2.002 0 0 0-3 .15 1.995 1.995 0 0 0-.6 2.25l.045.105c.23.474.563.889.975 1.215l3 2.753-.3 1.035h-.165a.646.646 0 0 0-.307.097 3.54 3.54 0 0 0-.75.585l-.24.248a1.553 1.553 0 0 0 .06 2.047l.435.443-.563 1.987a2.325 2.325 0 0 0 .533 2.25l.052.053A1.327 1.327 0 0 0 9 19.365v-.067l2.43-5.25 2.475 2.25-.473 1.035.068-.083a1.516 1.516 0 1 0 2.453 1.778"
                              fillRule="evenodd"/>
                    </svg>
                    <Typography>پرواز داخلی</Typography>
                </Box>
                <Box>
                    <svg viewBox="0 0 24 24" width="36px" height="36px" fill="currentColor"
                         className="block mx-auto mb-1">
                        <path d="M6.975 4.505a2.002 2.002 0 0 1 3-.15c.126.1.246.208.36.322l.18.188 2.76 3.052 1.012-.277v-.165a.668.668 0 0 1 .06-.24l.038-.075a3.72 3.72 0 0 1 .713-.863 1.56 1.56 0 0 1 2.204-.06l.42.428 1.973-.563a2.317 2.317 0 0 1 2.197.45l.105.09.053.053a1.327 1.327 0 0 1-.3 2.197h-.052l-5.25 2.438 2.25 2.475.99-.413a1.5 1.5 0 0 1 1.897.405l.067.09a1.5 1.5 0 0 1-.247 1.965l-3.082 3.075a1.523 1.523 0 1 1-2.468-1.785l-.037.06.472-1.035-2.475-2.25-2.43 5.25v.068a1.334 1.334 0 0 1-2.205.315l-.053-.053a2.25 2.25 0 0 1-.532-.93 5.4 5.4 0 0 0 1.32-1.042v.082a.99.99 0 0 0 .203.953h.044v.052-.037l2.813-6.12a.676.676 0 0 1 1.072-.218l3.518 3.218a.668.668 0 0 1 .157.75l-.69 1.5-.075.135a.173.173 0 0 0 .194.222.163.163 0 0 0 .107-.072l.082-.098 3.157-3.157a.172.172 0 0 0 0-.218.188.188 0 0 0-.247-.037l-1.5.697a.674.674 0 0 1-.75-.157l-3.225-3.428A.674.674 0 0 1 15 10.527l6.105-2.82h.052l-.06-.06a1.012 1.012 0 0 0-1.02-.255l-2.37.675a.675.675 0 0 1-.66-.172l-.682-.683c-.082-.075-.21-.067-.33.053l-.113.105c-.075.075-.142.157-.21.232l-.075.105a.376.376 0 0 0 0 .09l.045.165a.683.683 0 0 1-.48.75l-1.987.555a.675.675 0 0 1-.675-.195l-3-3.292-.255-.255-.105-.105-.105-.09c-.457-.375-.75-.39-1.17.06-.42.45-.39.547-.3.787.12.244.289.46.495.638l.188.18 3.3 3a.682.682 0 0 1 .187.682l-.525 2.108a5.437 5.437 0 0 0-.832-1.988 5.445 5.445 0 0 0-1.785-1.65L7.395 8.052a3.57 3.57 0 0 1-.975-1.215l-.045-.105a2.002 2.002 0 0 1 .6-2.227Zm-1.072 4.95a4.403 4.403 0 1 1 0 8.805 4.403 4.403 0 0 1 0-8.805Zm.93 4.942h-1.86c.032.73.195 1.45.48 2.123.09.22.222.422.39.592l.06.053.097-.023c.167-.17.3-.371.39-.592a6.157 6.157 0 0 0 .442-2.153Zm-2.948 0h-1.26a3.345 3.345 0 0 0 1.777 2.423 7.418 7.418 0 0 1-.517-2.423Zm5.295 0H7.92a7.629 7.629 0 0 1-.51 2.423 3.338 3.338 0 0 0 1.77-2.423Zm-4.785-3.502a3.353 3.353 0 0 0-1.77 2.422h1.26c.037-.83.21-1.648.51-2.422Zm3 0 .045.112c.271.743.428 1.521.465 2.31h1.26a3.338 3.338 0 0 0-1.755-2.422h-.015Zm-1.5-.353-.06.06c-.167.17-.3.372-.39.593a6.157 6.157 0 0 0-.48 2.122h1.867a6.157 6.157 0 0 0-.48-2.122A1.83 1.83 0 0 0 6 10.602l-.105-.06Z"
                              fillRule="evenodd"/>
                    </svg>
                    <Typography>پرواز خارجی</Typography>
                </Box>
                <Box>

                    <svg viewBox="0 0 24 24" width="36px" height="36px" fill="currentColor"
                         className="block mx-auto mb-1">
                        <path
                            d="m16.655 16.073.045.06 2.573 3.855a.645.645 0 0 1-1.028.75l-.045-.06-2.572-3.855a.645.645 0 0 1 1.027-.75Zm-7.852-.12a.637.637 0 0 1 .217.825l-.037.067L6.41 20.7a.645.645 0 0 1-.877.18.638.638 0 0 1-.21-.825v-.067l2.572-3.855a.63.63 0 0 1 .908-.18Zm6.397 2.46a.645.645 0 0 1 .075 1.282H9.41a.645.645 0 0 1-.075-1.282H15.2ZM13.91 16.5a.645.645 0 0 1 .075 1.282H10.7a.645.645 0 0 1-.075-1.282h3.285ZM15.523 3a3.217 3.217 0 0 1 3.21 3.202v7.073a1.93 1.93 0 0 1-1.95 1.928h-9a1.928 1.928 0 0 1-1.905-1.928V6.202A3.218 3.218 0 0 1 9.095 3h6.428Zm1.927 6.832-.832.413a4.575 4.575 0 0 1-1.8.465h-4.785a4.613 4.613 0 0 1-1.823-.383l-.195-.09-.825-.412v3.45a.645.645 0 0 0 .57.637h9.023a.645.645 0 0 0 .645-.637l.022-3.443Zm-8.55 1.5a.969.969 0 0 1 .536 1.706.967.967 0 1 1-.536-1.706Zm6.81 0a.967.967 0 1 1-.96.96.959.959 0 0 1 .96-.944v-.016Zm-.187-7.057H9.095A1.935 1.935 0 0 0 7.16 6.202v2.175l1.373.698c.39.194.817.309 1.252.338h4.823a3.39 3.39 0 0 0 1.275-.255l.165-.075 1.402-.706V6.202a1.928 1.928 0 0 0-1.815-1.927h-.112Zm-1.29.637a.645.645 0 0 1 .075 1.283h-3.93a.652.652 0 0 1-.645-.645.645.645 0 0 1 .57-.638h3.93Z"
                            fillRule="evenodd"/>
                    </svg>
                    <Typography>قطار</Typography>
                </Box>
                <Box>
                    <svg viewBox="0 0 24 24" width="36px" height="36px" fill="currentColor"
                         className="block mx-auto mb-1">
                        <path
                            d="M15.48 3a3.33 3.33 0 0 1 3.33 3.33h.668a1.335 1.335 0 0 1 1.327 1.23v2.1a.667.667 0 0 1-1.328.083V7.65h-.667v8.662a2.01 2.01 0 0 1-1.342 1.89v1.11a1.665 1.665 0 1 1-3.33 0v-.997h-3.75v.997a1.665 1.665 0 1 1-3.33 0v-1.11a2.01 2.01 0 0 1-1.335-1.89V7.65h-.646v1.995a.667.667 0 0 1-1.327.105v-2.1a1.343 1.343 0 0 1 1.23-1.335h.75A3.33 3.33 0 0 1 9.075 3h6.405ZM9.075 18.315h-.667v.997a.338.338 0 0 0 .667.06v-1.057Zm7.065 0h-.66v.997a.33.33 0 0 0 .545.259.337.337 0 0 0 .115-.199v-1.057Zm-9.06-5.648v3.646a.675.675 0 0 0 .585.667h9.143a.667.667 0 0 0 .667-.585v-3.75a14.287 14.287 0 0 1-10.395.023Zm1.732 1.178a.668.668 0 0 1 .668.667v1.073a.667.667 0 1 1-1.335 0v-1.073a.668.668 0 0 1 .668-.667Zm6.93 0a.668.668 0 0 1 .668.667v1.073a.667.667 0 1 1-1.335 0v-1.073a.668.668 0 0 1 .668-.667Zm-.262-9.532H9.075A1.995 1.995 0 0 0 7.08 6.195v5.055a12.982 12.982 0 0 0 10.388 0V6.315a2.003 2.003 0 0 0-1.988-2.002Zm-.645 1.335a.66.66 0 0 1 .645.667.653.653 0 0 1-.57.66H9.72a.668.668 0 0 1-.075-1.327h5.19Z"
                            fillRule="evenodd"/>
                    </svg>
                    <Typography>اتوبوس</Typography>
                </Box>
                <Box>
                    <svg viewBox="0 0 24 24" width="36px" height="36px" fill="currentColor"
                         className="block mx-auto mb-1">
                        <path
                            d="M12 3a3.376 3.376 0 0 1 3.351 3H16.5a2.25 2.25 0 0 1 2.25 2.25v3.095A3.001 3.001 0 0 1 21 14.25v2.25a1.5 1.5 0 0 1-1.5 1.5h-.75a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3H4.5a1.5 1.5 0 0 1-1.496-1.388L3 16.5v-2.25a3 3 0 0 1 2.25-2.902V8.25A2.25 2.25 0 0 1 7.5 6h1.146A3.375 3.375 0 0 1 12 3Zm5.25 9-.997.75a3.75 3.75 0 0 1-2.002.742l-.001.758a.75.75 0 0 1-1.495.088l-.005-.088v-.75h-1.5v.75a.75.75 0 0 1-1.495.088l-.005-.088v-.758a3.75 3.75 0 0 1-1.838-.625l-.165-.117L6.75 12v6a1.5 1.5 0 0 0 1.388 1.496l.112.004h7.5a1.5 1.5 0 0 0 1.5-1.5v-6Zm-3 4.5a.75.75 0 0 1 .088 1.495L14.25 18h-4.5a.75.75 0 0 1-.087-1.495l.087-.005h4.5Zm4.5-3.548V16.5h.75v-2.25a1.5 1.5 0 0 0-.683-1.258l-.066-.04Zm-13.5-.001-.056.033a1.5 1.5 0 0 0-.69 1.153l-.004.113v2.25h.75v-3.549ZM16.5 7.5h-9a.75.75 0 0 0-.75.75v1.875l1.898 1.425a2.25 2.25 0 0 0 1.102.436v-.736a.75.75 0 0 1 1.495-.088l.005.088V12h1.5v-.75a.75.75 0 0 1 1.495-.088l.005.088v.736a2.25 2.25 0 0 0 .97-.344l.132-.092 1.898-1.425V8.25a.75.75 0 0 0-.663-.745L16.5 7.5Zm-4.5-3c-.911 0-1.67.65-1.84 1.493L10.158 6h3.68l-.025-.104a1.876 1.876 0 0 0-1.69-1.392L12 4.5Z"/>
                    </svg>
                    <Typography>تور</Typography>
                </Box>
                <Box>
                    <svg viewBox="0 0 24 24" width="36px" height="36px" fill="currentColor"
                         className="block mx-auto mb-1">
                        <path
                            d="M14.655 3.75a.675.675 0 0 1 .67.59l.005.085h2.595A2.175 2.175 0 0 1 20.1 6.6v12.067a1.425 1.425 0 0 1-1.425 1.425H5.107c-.75 0-1.357-.607-1.357-1.357v-7.966a2.228 2.228 0 0 1 2.047-2.242v-.015a.675.675 0 0 1 1.345-.085l.005.085v.007h2.738v-1.92a2.175 2.175 0 0 1 2.047-2.17v-.004a.675.675 0 0 1 1.345-.085l.006.085h.697a.674.674 0 0 1 .675-.675Zm-4.77 6.12H5.97a.877.877 0 0 0-.545.196l-.073.067a.879.879 0 0 0-.251.63v7.972c0 .003.003.007.007.007h4.778V9.87h-.001Zm2.712-4.096h-.537a.825.825 0 0 0-.825.826v12.142h2.063v-1.305a1.425 1.425 0 0 1 1.313-1.42l.111-.005h.548c.788 0 1.425.638 1.425 1.425v1.304l1.98.001a.07.07 0 0 0 .052-.022l.017-.023.006-.03V6.6a.825.825 0 0 0-.825-.825h-3.27l-.01-.001h-2.048Zm2.673 11.588h-.547a.075.075 0 0 0-.075.075v1.304h.697v-1.304a.075.075 0 0 0-.023-.052l-.023-.017-.029-.006Zm-6.758-.99a.675.675 0 0 1 .085 1.345l-.085.005h-2.04a.676.676 0 0 1-.084-1.345l.084-.005h2.04Zm0-2.76a.675.675 0 0 1 .085 1.345l-.085.005h-2.04a.676.676 0 0 1-.084-1.345l.084-.005h2.04Zm5.46-.322a.675.675 0 0 1 .085 1.345l-.085.005h-1.364a.676.676 0 0 1-.085-1.345l.085-.005h1.364Zm3.406 0a.675.675 0 0 1 .084 1.345l-.084.005h-1.366a.676.676 0 0 1-.084-1.345l.084-.005h1.366Zm-8.866-2.438a.675.675 0 0 1 .085 1.345l-.085.005h-2.04a.676.676 0 0 1-.084-1.345l.084-.005h2.04Zm5.46-.292a.675.675 0 0 1 .085 1.345l-.085.005h-1.364a.676.676 0 0 1-.085-1.345l.085-.005h1.364Zm3.406 0a.675.675 0 0 1 .084 1.345l-.084.005h-1.366a.676.676 0 0 1-.084-1.345l.084-.005h1.366Zm-3.405-2.723a.675.675 0 0 1 .084 1.345l-.085.005h-1.364a.675.675 0 0 1-.085-1.344l.085-.006h1.364Zm3.405 0a.675.675 0 0 1 .084 1.345l-.084.005h-1.366a.675.675 0 0 1-.084-1.344l.084-.006h1.366Z"
                            fillRule="evenodd"/>
                    </svg>
                    <Typography>هتل</Typography>
                </Box>
                <Box>
                    <svg viewBox="0 0 32 32" width="36px" height="36px" fill="currentColor"
                         className="block mx-auto mb-1">
                        <path
                            d="M15.362 4.23a.777.777 0 011.099-.005l11.308 11.222a.777.777 0 01-.547 1.328h-1.42c.01.076.015.154.015.233v8.341a1.7 1.7 0 01-1.7 1.7H7.976a1.7 1.7 0 01-1.7-1.7v-8.341c0-.079.005-.157.016-.233H4.778a.777.777 0 01-.551-1.324L15.362 4.23zm8.964 12.632H7.766v8.632h5.771a1.817 1.817 0 01-.016-.247v-4.588a1.8 1.8 0 011.8-1.8h1.357a1.8 1.8 0 011.8 1.8v4.588c0 .084-.006.166-.017.247h5.865v-8.632zm-7.245 3.517h-2.163v5.114h2.163v-5.114zM10.74 18.86c.51 0 .922.414.922.924v2.307a.923.923 0 11-1.846 0v-2.307c0-.51.414-.924.924-.924zm10.523 0c.51 0 .923.414.923.924v2.307a.923.923 0 01-1.846 0v-2.307c0-.51.413-.924.923-.924zM15.917 5.875l-9.275 9.347 2.979-.001 5.766-6.142a.777.777 0 011.048-.078l.08.074 5.859 6.146h2.962l-9.419-9.346zm-.516 5.457l-3.65 3.89 3.65-.001v-3.889zm1.197.081v3.808h3.63l-3.63-3.808z"/>
                    </svg>
                    <Typography>ویلا و اقامتگاه</Typography>
                </Box>
            </Box>

            <Divider orientation="horizontal" flexItem />

            <Box>search here!</Box>

        </Container>
    )
}

