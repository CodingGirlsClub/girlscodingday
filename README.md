### 添加志愿者信息

1. 切换到分支master
2. 修改 `volunteers.html` 页面，按照格式（在所支援的城市，按照姓氏拼音升序添加），添加个人信息。（个人照片请尽量使用其他图床。）
3. 提交 PR

若有疑问，可以发邮件到  tutors@codingirls.club

### 如何提交PR
- [Creating a pull request](https://help.github.com/articles/creating-a-pull-request/)
- [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)

### Contirbution Guide
本项目使用`compass`作为`sass`的构建工具。请先安装好相关环境。
`compass`由`Ruby`的包管理工具gem安装，所以请先安装好Ruby环境，具体可以参考Ruby语言的[官方安装教程](https://www.ruby-lang.org/en/documentation/installation/)。
```bash
$ gem install compass
```
修改样式时，请不要直接改动`css/style.css`文件，`compass`编译时会覆盖其中的内容。
在`./scss/`文件夹中添加修改你的样式，输入`compass`指令便会把所有样式一并编译到`css/style.css`文件中。
```bash
# 监听scss文件夹的修改并编译
$ compass watch
# 编译scss
$ compass compile
```
