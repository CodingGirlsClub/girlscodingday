### 添加志愿者和作品步骤

1. fork 到自己的库
2. 将自己的库 pull 下来（这时候 origin 是自己的地址，不是公共地址）
3. checkout 子分支，本地修改
4. git add & commit
5. push 到自己的地址，也就是当前的 origin 地址
6. 在 github 上提交 pr

若有疑问，可以发邮件到  tutors@codingirls.club

#### 如何提交PR
- [Creating a pull request](https://help.github.com/articles/creating-a-pull-request/)
- [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)

### Contirbution Guide
- 本项目使用`compass`作为`sass`的构建工具，请先安装好相关环境。

  `compass`由`Ruby`的包管理工具gem安装，所以请先安装好Ruby环境，具体可以参考Ruby语言的[官方安装教程](https://www.ruby-lang.org/en/documentation/installation/)。

  ```bash
  $ gem install compass
  ```
- 修改样式时，请不要直接改动`css/style.css`文件，`compass`编译时会覆盖其中的内容。在`./scss/`文件夹中添加修改你的样式，输入`compass`指令便会把所有样式一并编译到`css/style.css`文件中。
  ```bash
  # 监听scss文件夹的修改并编译
  $ compass watch
  # 编译scss
  $ compass compile
  ```

