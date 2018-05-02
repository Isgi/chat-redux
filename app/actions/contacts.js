import axios from 'axios';

export function allContacts() {
  return {
    type: 'ALL_CONTACTS',
    payload: axios({
      method: 'GET',
      url: 'https://api.backendless.com/18088355-9FEB-C777-FF4D-48F470D66000/751322A3-855A-4844-FFEC-8C646B7CE300/data/contacts'
    })
  }
}

export function createContact(value) {
  return {
    type: 'CREATE_CONTACT',
    payload: axios({
      method: 'POST',
      url: 'https://api.backendless.com/18088355-9FEB-C777-FF4D-48F470D66000/751322A3-855A-4844-FFEC-8C646B7CE300/data/contacts',
      data: value
    })
  }
}

export function updateContact(value) {
  return {
    type: 'UPDATE_CONTACT',
    payload: axios({
      method: 'PUT',
      url: `https://api.backendless.com/18088355-9FEB-C777-FF4D-48F470D66000/751322A3-855A-4844-FFEC-8C646B7CE300/data/contacts/${value.objectId}`,
      data: value
    })
  }
}

export function deleteContact(value) {
  return {
    type: 'DELETE_CONTACT',
    payload: axios({
      method: 'DELETE',
      url: `https://api.backendless.com/18088355-9FEB-C777-FF4D-48F470D66000/751322A3-855A-4844-FFEC-8C646B7CE300/data/contacts/${value.objectId}`
    }),
  }
}

export function deleteContactLocal(value) {
  return {
    type: 'DELETE_CONTACT_LOCAL',
    payload: value
  }
}