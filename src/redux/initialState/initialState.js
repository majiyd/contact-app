const initialState = {
  contacts: {
    contactList: [],
    newContact: {},
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