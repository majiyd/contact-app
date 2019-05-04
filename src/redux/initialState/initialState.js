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
    }
  }
}

export default initialState