const initialState = {
  contacts: {
    contactList: [],
    newContact: {
      name: "",
      phoneNumber: "",
    },
  },
  ui:{
    pages: {
      isContactsPageVisible: false,
    },
    links:{
      isContactPageLinkActive: false,
    },
    notifications: [
      {
        id: 'notification-jvbe9dbp',
        type: 'success',
        message: 'Contact added successfully!',
      },
      {
        id: 'notification-jvbe9z9e',
        type: 'success',
        message: 'clicked success',
      },
      {
        id: 'notification-jvbeabl1',
        type: 'error',
        message: 'Failed to add contact',
      }
    ],
  }
}

export default initialState