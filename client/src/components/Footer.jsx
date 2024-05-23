import React from 'react';
import { Container, Segment, List } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => {
  return (
    <Segment inverted vertical className="footer-segment"> {/* Add className */}
      <Container textAlign='center'>
        <p>&copy; 2024 Retrocade. All rights reserved.</p>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='/privacy'>
            Privacy Policy
          </List.Item>
          <List.Item as='a' href='/terms'>
            Terms of Service
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
