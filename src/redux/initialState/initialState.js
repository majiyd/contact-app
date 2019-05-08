const initialState = {
  contacts: {
    contactList: [
      {
        id: 'contact-jvehzf6m',
        name: 'Suleiman',
        number: '23422988',
      },
      {
        id: 'contact-jvehzyu9',
        name: 'Johann',
        number: '032437465',
      },
      {
        id: 'contact-jvei0dd6',
        name: 'davidson',
        number: '273-456-234',
      },
    ],
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
    notifications: [],
  }
}

export default initialState