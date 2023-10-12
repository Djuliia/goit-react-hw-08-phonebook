import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledBtn, StyledForm, StyledInput } from './LoginForm.styled';
import { Wrapper } from 'components/RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <StyledInput
            type="email"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
        </label>
        <label>
          Password
          <StyledInput type="password" name="password" />
        </label>
        <StyledBtn type="submit">Log In</StyledBtn>
      </StyledForm>
    </Wrapper>
  );
};
