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
      isAddNewContactPageVisible: false
    },
    links:{
      isContactPageLinkActive: true,
    }
  }
}

export default initialState