import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sect11 = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
    <section>
    <div className="container">
      <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{background: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <b>Все ли ваши телефоны новые и оригинальные?</b>
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Все наши телефоны, каждый из которых можно найти на странице MacBro, новые и оригинальные. У нас есть соответствующие контракты
          с компаниями-производителями. Кроме того, если есть какие-либо проблемы с нашим продуктом, вы можете воспользоваться официальными услугами по ремонту.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{background: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              <b>Есть ли какие-либо дополнительные расходы, кроме тех, которые я вижу при подтверждении заказа?</b>
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>

            </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{background: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <b>Могу ли я вернуть устройство? Какова процедура возврата?</b>
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>

            </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{background: "none"}}cd>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <b>Почему на сайте MacBro у вас одна и та же модель по разным ценам?</b>
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>    
    </div>    
    </section>  
    </>
  )
}

export default Sect11