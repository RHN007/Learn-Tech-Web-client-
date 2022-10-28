import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why should I learn programming?</Accordion.Header>
        <Accordion.Body>
        Learning to code not only allows you to give machines instructions, but it also teaches you abstract thinking and problem-solving. In fact, problem-solving skills and creativity are key to becoming a successful computer programmer. Of course, you'll also need to know some coding languages to apply your knowledge
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>1. Grow in your current job</Accordion.Header>
        <Accordion.Body>
        Programming knowledge does not only benefit someone who works in computer science or related fields. For example, people who work in marketing, design, sales and customer relations for technology products can use programming training to grow their skill set at work. Marketing requires data collection and analysis of customer demographics and sales trends to guide advertising strategies, and designers with programming skills can create digital advertisements. People who work in customer-facing positions can use their programming knowledge to assist with queries about technical issues.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
};

export default FAQ;