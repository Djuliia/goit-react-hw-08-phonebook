import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileSection = styled.section`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const ProfileImage = styled.img`
  max-width: 100%;
  border-radius: 50%;
  margin-top: 10px;
`;

export const UpdateLink = styled(Link)`
  display: block;
  margin-top: 15px;
  text-decoration: none;
  color: #007bff;
`;
