import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContactList,
  StyledContactListItem,
  StyledDeleteButton,
} from './ContactList.styled';

import { deleteContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Loader } from 'components/Loader';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts && (
        <StyledContactList>
          {filteredContacts.map(({ _id, name, number }) => (
            <StyledContactListItem key={_id}>
              {name}: {number}
              <StyledDeleteButton onClick={() => dispatch(deleteContact(_id))}>
                Delete
              </StyledDeleteButton>
            </StyledContactListItem>
          ))}
        </StyledContactList>
      )}
    </>
  );
};
