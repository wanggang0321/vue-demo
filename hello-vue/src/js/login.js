
// 要使用import，就需要在login.js和register.js中添加export导出语句

const loginForm = {
    template: '\
        <div>\
        <h2>登录页</h2> \
        用户名：<input type="text"><br/>\
        密码：<input type="password"><br/>\
        </div>\
    '
}
export default loginForm;