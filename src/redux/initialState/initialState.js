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
      isContactsPageVisible: true,
    },
    links:{
      isContactPageLinkActive: true,
    }
  }
}

export default initialState