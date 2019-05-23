export default {
  title: 'PaP',
  language: {
    info: 'English',
    changeMessage: 'Switch Language Success!'
  },
  route: {
    dashboard: 'Dashboard',
    manage: 'Manage',
    manager: 'Manager',
    user: 'User',
    about: 'About us',
    login: 'Login'
  },
  login: {
    title: 'PaP System',
    login: 'Login',
    accountPlaceholder: 'Please input your account',
    passwordPlaceholder: 'Please input your password',
    tips: 'Welcome to PaP system'
  },
  logout: {
    title: 'Confirm Logout',
    message: 'You have been logged out, you can cancel to stay on this page, or log in again.',
    cancel: 'Cancel',
    reLogin: 'Re-Login'
  },
  views: {
    dashboard: {
      message: {
        prefix: 'Welcome ',
        suffix: ' to use ',
        sysname: ' Back manage System'
      }
    },
    manager: {
      tableHead: ['ID', 'Name', 'Account', 'CreateTime', 'UpdateTime', 'Options']
    },
    user: {
      tableHead: ['ID', 'Name', 'Account', 'Password', 'Status', 'CreateTime', 'UpdateTime', 'Options'],
      query: {
        name: 'Name',
        namePlaceholder: 'Please input a name',
        account: 'Account',
        accountPlaceholder: 'Please input an account',
        status: 'Status',
        selectStatus: {
          info: 'Select status',
          all: 'All',
          enabled: 'Enabled',
          disabled: 'Disabled',
          deleted: 'Deleted'
        }
      },
      opt: {
        query: 'Query',
        reset: 'Reset',
        create: 'Create',
        update: 'Update',
        createUser: 'Create User',
        updateUser: 'Update User',
        crackCourse: 'Crack Course',
        enable: 'Enable',
        disable: 'Disable',
        confirm: 'Confirm',
        cancel: 'Cancel'
      },
      data: {
        name: 'Name',
        phone: 'Phone',
        account: 'Account',
        password: 'Password',
        sites: 'Websites'
      }
    }
  },
  profile: {
    home: 'Home',
    logout: 'Log Out'
  },
  about: {
    info: 'Any question you asked will be replied from fusang129@126.com.'
  },
  404: {
    oops: 'OOPS!',
    message: 'The webmaster said that you can not enter this page...',
    info: 'Please check that the URL you entered is correct, or click the button below to return to the homepage.',
    returnHome: 'Back to home'
  }
}
