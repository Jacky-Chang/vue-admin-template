export default {
  title: '爬爬',
  route: {
    dashboard: '首页',
    manage: '管理',
    manager: '管理员',
    user: '用户',
    about: '关于我们'
  },
  navbar: {
    dashboard: '首页',
    manage: '管理',
    manager: '管理员',
    user: '用户'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
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
        query: '查询',
        reset: '重置',
        selectStatus: {
          info: '请选择状态',
          all: '全部',
          enable: '已启用',
          disable: '已禁用',
          delete: '已删除'
        }
      }
    }
  },
  profile: {
    home: '首页',
    logout: '退出'
  },
  about: {
    info: '如有任何问题，都可以邮件咨询（fusang129@126.com）。我们会在第一时间回复您。'
  }
}
