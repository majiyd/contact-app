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
    ],
  }
}

export default initialState