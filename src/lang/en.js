export default {
  title: 'PaP',
  route: {
    dashboard: 'Dashboard',
    manage: 'Manage',
    manager: 'Manager',
    user: 'User',
    about: 'About us'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
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
        namePlaceholder: 'Please input name',
        account: 'Account',
        accountPlaceholder: 'Please input account',
        status: 'Status',
        query: 'Query',
        reset: 'Reset',
        selectStatus: {
          info: 'Select status',
          all: 'All',
          enable: 'Enabled',
          disable: 'Disabled',
          delete: 'Deleted'
        }
      }
    }
  },
  profile: {
    home: 'Home',
    logout: 'Log Oout'
  },
  about: {
    info: 'Any question you asked will be replied from fusang129@126.com.'
  }
}
