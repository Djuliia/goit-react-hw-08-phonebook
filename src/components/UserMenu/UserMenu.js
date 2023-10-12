import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { StyledBtn, Wrapper } from './UserMenu.styled';
import { FaUserAlt } from 'react-icons/fa';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <FaUserAlt />
      <p>Welcome, {user.name}</p>
      <StyledBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledBtn>
    </Wrapper>
  );
};
