const initialState = {
  contacts: [],
  contact: {},
  isLoading: false,
  isError: false,
  isSuccess: false
}

export default contactsReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ALL_CONTACTS':
      return { ...state, contacts: action.payload }

    case 'CREATE_CONTACT':
      state.contacts.push(action.payload);
      return {...state, contacts: state.contacts};

    case 'UPDATE_CONTACT':
      const newContactsAfterUpdate = state.contacts.map(contact => {
        if (contact.name == action.payload.name) {
          return action.payload;
        }
        return contact;
      })
      return {...state, contacts: newContactsAfterUpdate};

    case 'DELETE_CONTACT':
      const newContactsAfterDelete = state.contacts.filter(contact => contact.name != action.payload.name)
      return {...state, contacts: newContactsAfterDelete};

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