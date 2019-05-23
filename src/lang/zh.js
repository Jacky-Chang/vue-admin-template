export default {
  title: '爬爬',
  language: {
    info: '中文',
    changeMessage: '切换语言成功！'
  },
  route: {
    dashboard: '首页',
    manage: '管理',
    manager: '管理员',
    user: '用户',
    about: '关于我们',
    login: '登录'
  },
  navbar: {
    dashboard: '首页',
    manage: '管理',
    manager: '管理员',
    user: '用户'
  },
  login: {
    title: '爬爬系统',
    login: '登录',
    accountPlaceholder: '请输入用户名',
    passwordPlaceholder: '请输入密码',
    tips: '欢迎使用爬爬管理系统'
  },
  logout: {
    title: '退出登录确认',
    message: '您已退出登录，您可以选择停留当前页面，或者重新登录。',
    cancel: '取消',
    reLogin: '重新登录'
  },
  views: {
    dashboard: {
      message: {
        prefix: '欢迎 ',
        suffix: '使用',
        sysname: '后台管理系统'
      }
    },
    manager: {
      tableHead: ['ID', '名字', '账号', '创建时间', '更新时间', '操作']
    },
    user: {
      tableHead: ['ID', '名字', '账号', '密码', '状态', '创建时间', '更新时间', '操作'],
      query: {
        name: '用户姓名',
        namePlaceholder: '请输入用户姓名',
        account: '用户账号',
        accountPlaceholder: '请输入用户账号',
        status: '用户状态',
        selectStatus: {
          info: '请选择状态',
          all: '全部',
          enabled: '已启用',
          disabled: '已禁用',
          deleted: '已删除'
        }
      },
      opt: {
        query: '查询',
        reset: '重置',
        create: '新增',
        createUser: '创建用户',
        updateUser: '更新用户',
        crackCourse: 'Crack Course',
        enable: 'Enable',
        disable: 'Disable',
        confirm: '确认',
        cancel: '取消'
      },
      data: {
        name: '用户姓名',
        phone: '用户手机',
        account: '用户账号',
        password: '用户密码',
        sites: '网站名称'
      }
    }
  },
  profile: {
    home: '首页',
    logout: '退出'
  },
  about: {
    info: '如有任何问题，都可以邮件咨询（fusang129@126.com）。我们会在第一时间回复您。'
  },
  404: {
    oops: '啊哦!',
    message: '系统管理员温馨提示：您不能访问该页面...',
    info: '请检查您访问的页面路径是否正确，或者点击下方按钮回到首页。',
    returnHome: '返回首页'
  }
}
