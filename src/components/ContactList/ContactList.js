import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContactList,
  StyledContactListItem,
  StyledDeleteButton,
} from './ContactList.styled';

import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
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
          {filteredContacts.map(({ id, name, number }) => (
            <StyledContactListItem key={id}>
              {name}: {number}
              <StyledDeleteButton onClick={() => dispatch(deleteContact(id))}>
                Delete
              </StyledDeleteButton>
            </StyledContactListItem>
          ))}
        </StyledContactList>
      )}
    </>
  );
};
