import { StyledBtn } from 'components/UserMenu/UserMenu.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';

const UpdateProfilePage = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleChange = e => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateAvatar(file));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="file" />
        <StyledBtn>Update avatar</StyledBtn>
      </form>
    </>
  );
};
export default UpdateProfilePage;
