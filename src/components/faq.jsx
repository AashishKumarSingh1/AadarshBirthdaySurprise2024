import "../App.css";
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const questions = [
  'What is the purpose of this website?',
  'Who is Aadarsh?',
  'How can I leave a birthday message for Aadarsh?',
  'What kind of content can I find on this website?',
  'How long will this website be available?',
  'Who created this website?',
  'How can I contact the creator of the website?'
];
const answers = [
  'This website is a special dedication to celebrate the 14th birthday of Aadarsh Kumar Singh. It aims to showcase memories and create a memorable experience for him and his loved ones.',
  'Aadarsh is my younger brother. He is an incredible person who brings joy and happiness to everyone around him. This website is a tribute to his wonderful personality and to celebrate his special day.',
  'You can leave a birthday message for Aadarsh by navigating to the "Say Happy Birthday " section on the website. There, you can write your heartfelt wishes and share your memories with him.',
  'The website features a variety of content including: a photo gallery showcasing memorable moments with Aadarsh, a message board for friends and family to leave birthday wishes and trivia about Aadarsh.',
  'This website will be available for a time period of 1 month as a digital keepsake for Aadarsh and his loved ones. It can be revisited anytime to relive the memories and celebrations.',
  'This website was lovingly created by me(Aashish Kumar Singh), as a special project to celebrate Aadarsh\'s 14th birthday. It is a token of love and appreciation for all the wonderful moments shared with Aadarsh.',
  'If you have any questions or need assistance, you can contact me at munnimanoj1973@gmail.com. I would be happy to help! or you can leave a message below.'
];
export default function FaqAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {questions.map((question, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}>
            <Typography >{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{answers[index]}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
