export function allContacts() {
  const contacts = [
    { name: 'Isa', number: '08899882299' },
    { name: 'Amin', number: '08899882291' },
    { name: 'Rehan', number: '088998822912' },
    { name: 'Azhar', number: '08899882293' },
    { name: 'Dafa', number: '08899882294' },
    { name: 'Hafidz', number: '08899882295' },
    { name: 'Alfan', number: '08899882296' },
  ]
  return {
    type: 'ALL_CONTACTS',
    payload: contacts
  }
}

export function createContact(value) {
  return {
    type: 'CREATE_CONTACT',
    payload: value
  }
}

export function updateContact(value) {
  return {
    type: 'UPDATE_CONTACT',
    payload: value
  }
}

export function deleteContact(value) {
  return {
    type: 'DELETE_CONTACT',
    payload: value
  }
}