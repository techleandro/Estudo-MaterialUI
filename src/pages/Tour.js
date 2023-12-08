import { BottomNavigation, Box, Container, Paper, Typography } from "@mui/material"
import ImageCollage from "../components/ImageCollage"
import CustomizedAccordions from "../components/Accordian"
import BasicModal from "../components/Modal"

const Tour = () => {
  return (
    
        <Container sx={{width: 900}}>
            <Typography variant="h3" component='h1' marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{
                display: "flex",
            }}>
                <img src="https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2019/10/Topo-Las-Vegas.jpg" alt=""  height={450} width={500} />

                <ImageCollage/>

            </Box>

            <Box>
            <Typography variant="h6" component='h4' marginTop={3}>
                About this ticket
            </Typography>

            <Typography variant="paragraph" component='p' marginTop={3}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos ullam officiis quas veniam asperiores, consequuntur rem, id odio officia facilis, dolores vel ad nesciunt aliquam iure quis. Illum aperiam autem tempora quas fugit perspiciatis deleniti accusantium, laboriosam eius laudantium!
            </Typography>
            </Box>

            <Box marginBottom={10}>
            <Typography variant="h6" component='h4' marginTop={3} marginBottom={2}>
                Frequently Asked Questions
            </Typography>

            <CustomizedAccordions/>
            </Box>

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal/>
        </BottomNavigation>
      </Paper>

        </Container>
    
  )
}

export default Tour