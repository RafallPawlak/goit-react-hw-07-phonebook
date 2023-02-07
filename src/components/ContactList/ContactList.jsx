import { Report } from 'notiflix/build/notiflix-report-aio';
import { selectFilter, selectContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import style from './ContactList.module.css';

export const ContactList = () => {
    // const contacts = useSelector(selectContacts);
    // const filters = useSelector( selectFilter);
     const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const statusFilter = useSelector(selectFilter);
    const filteredContacts = contacts.filter(contact => contact.name.includes(statusFilter));
    
    const handleDelete = id => {
        dispatch(deleteContact(id));
    }
    // const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()));
   
    

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
