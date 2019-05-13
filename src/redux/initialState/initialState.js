const initialState = {
  contacts: {
    isFetching: false,
    errorFetching: null,
    isAddingContact: false,
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