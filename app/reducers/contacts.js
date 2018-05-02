const initialState = {
  contacts: [],
  contact: {},
  isLoading: false,
  isError: false,
  isSuccess: false
}

export default contactsReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ALL_CONTACTS_PENDING':
      return {...state, isLoading: true, isSuccess: false, isError: false}
    case 'ALL_CONTACTS_FULFILLED':
      return { ...state, isLoading: false, contacts: action.payload.data}
    case 'ALL_CONTACTS_REJECTED':
      return { ...state, isLoading: false, isError: true }

    case 'CREATE_CONTACT_PENDING':
      return {...state, isLoading: true, isSuccess: false, isError: false};
    case 'CREATE_CONTACT_FULFILLED':
      state.contacts.push(action.payload.data);
      return {...state, contacts: state.contacts, isLoading: false, isSuccess: true};
    case 'CREATE_CONTACT_REJECTED':
      return {...state, isLoading: false, isError: true};

    case 'UPDATE_CONTACT_PENDING':
      return {...state, isLoading: true, isSuccess: false, isError: false};
    case 'UPDATE_CONTACT_FULFILLED':
      const newContactsAfterUpdate = state.contacts.map(contact => {
        if (contact.objectId == action.payload.data.objectId) {
          return action.payload.data;
        }
        return contact;
      })
      return {...state, contacts: newContactsAfterUpdate, isLoading: false};
    case 'UPDATE_CONTACT_REJECTED':
      return {...state, isLoading: false, isError: true};

    case 'DELETE_CONTACT_PENDING':
      return {...state, isLoading: true, isSuccess: false, isError: false};
    case 'DELETE_CONTACT_FULFILLED':
      return {...state, isLoading: false, isSuccess: true};
    case 'DELETE_CONTACT_REJECTED':
      return {...state, isLoading: false, isError: true};

    case 'DELETE_CONTACT_LOCAL':
      const newContactsAfterDelete = state.contacts.filter(contact => contact.objectId != action.payload.objectId)
      return {...state, contacts:  newContactsAfterDelete, isLoading: false, isSuccess: true};

    default:
      return state;

  }
}

// export default contactsReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ALL_CONTACTS':
//       return { ...state, contacts: action.payload }
//     default:
//       return state;
//   }
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'ALL_CONTACTS':
//       return { ...state, contacts: action.payload }
//     default:
//       return state;
//   }
// }