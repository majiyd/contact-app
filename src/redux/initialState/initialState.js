const initialState = {
  contacts: {
    contactList: [],
    newContact: {
      name: "",
      phoneNumer: "",
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