import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  StyledBtn,
  StyledForm,
  StyledInput,
  Wrapper,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          Username
          <StyledInput type="text" name="name" pattern="[A-Za-z]{3,}" />
        </label>
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
        <StyledBtn type="submit">Register</StyledBtn>
      </StyledForm>
    </Wrapper>
  );
};
