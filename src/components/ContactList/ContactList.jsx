import { Report } from 'notiflix/build/notiflix-report-aio';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import style from './ContactList.module.css';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filteredContacts = useSelector(selectFilteredContacts);

    const handleDelete = id => {
        dispatch(deleteContact(id));
    }

  return (
    <>
        {contacts.length === 0 ? (
            Report.info('Phonebook Info', 'Contact book is empty!',
              'Okay',
            )) : (
                <ul className={style.list}>
                        {filteredContacts.map(({id, name, number}) => (
                        <li className={style.item} key={id}>
                            <p>
                                {name}: {number}
                            </p>
                            <button className={style.button} type="button" onClick={() => handleDelete(id)} value="delete">Delete contact</button>
                        </li>
                    ))}
                </ul>
            )}
    </>
    )    
}
