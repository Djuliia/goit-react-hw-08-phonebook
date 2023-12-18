import {
  ProfileImage,
  ProfileSection,
  //   UpdateLink,
} from 'components/Profile.styled';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { StyledLink } from 'components/AuthNav/AuthNav.styled';

const Profile = () => {
  const { name, email, avatarURL } = useSelector(selectUser);

  return (
    <ProfileSection>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <ProfileImage
        src={
          avatarURL.includes('gravatar')
            ? avatarURL
            : `http://localhost:8000/${avatarURL}`
        }
        alt={name}
      />
      <StyledLink to="update">Update profile</StyledLink>
    </ProfileSection>
  );
};

export default Profile;
