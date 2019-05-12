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
      isContactsPageVisible: true,
    },
    links:{
      isContactPageLinkActive: true,
    },
    notifications: [],
  }
}

export default initialState