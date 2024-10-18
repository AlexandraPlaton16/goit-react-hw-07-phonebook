import styled from 'styled-components';

// Main container with the background image
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative; /* Set position relative for overlay */
`;

// Overlay to enhance text readability
export const Overlay = styled.div`
  position: absolute; /* Cover the entire container */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
  z-index: 1; /* Ensure it's on top of the background */
`;

// Inner container for your content like forms or lists
export const InnerContainer = styled.div`
  max-width: 438px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(245, 245, 245, 0.9); /* Gray with 90% opacity */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
  position: relative; /* Ensure content is above the overlay */
  z-index: 2; /* Ensure it's above the overlay */
`;

export const Wrapper = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 20px 0; /* Add margin for spacing */
  padding: 10px; /* Add some padding */
  background-color: rgba(52, 73, 94, 0.7); /* Transparent #34495e */
  color: white; /* White text */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Optional shadow for depth */
`;

export const Title = styled.h1`
  color: #d5def5;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9); /* Text shadow for better visibility */
`;

export const SubTitle = styled.h2`
  color: #d5def5;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9); /* Text shadow for better visibility */
`;
