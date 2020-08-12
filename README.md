# Auto Dark Mode（目前仅支持macOS）

根据系统暗黑模式设置自动切换 HBuilderX 主题。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gho4n65crwg312f0u0kjn.gif)

与 VSCode 的 [Auto Dark Mode](https://github.com/LinusU/vscode-auto-dark-mode) 插件非常相似，实际上本插件正是使用了与 VSCode Auto Dark Mode 插件相同的[暗黑模式设置检测工具](https://github.com/LinusU/node-dark-mode-listener)。但是，与 VSCode Auto Dark Mode 插件不同的是，HBuilderX Auto Dark Mode 插件并不支持自动切换图标主题（因为觉得没必要）和 Windows （原因见下文【局限性】部分）。

## 安装

请前往[DCloud插件市场](https://ext.dcloud.net.cn/search?q=auto+dark+mode&cat1=1&cat2=11&orderBy=UpdatedDate)安装。

## 使用

### macOS

使用时会请求控制 System Events 和 HBuilderX 的权限，给予相应权限后方能正常运行。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gho35kaglaj30tk0ewq7l.jpg)

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gho320g8waj30y60u0tqx.jpg)

## 配置

| 配置项                       | 描述     | 默认值 |
| ------------------------- | ------ | --- |
| `autoDarkMode.lightTheme` | 亮色主题名称 | 绿柔  |
| `autoDarkMode.darkTheme`  | 暗色主题名称 | 雅蓝  |

### 可选主题

| 绿柔  | 酷黑  | 雅蓝  |
| --- | --- | --- |

（HBuilderX内置主题，可部分[自定义](https://ask.dcloud.net.cn/article/35776)）

## 局限性

### 主题

目前 HBuilderX（2.8.x）只提供3个内置主题，配置时只能从中选择（见上文【配置 - 可选主题】部分）。在图形化的插件配置界面可以直接从中选择。

虽然目前版本的 HBuilderX（2.8.x）支持部分界面颜色覆盖配置来自定义主题，但是这样做并不能覆盖编辑器文本颜色，编辑器文本颜色只能由内置主题决定。所以切换亮暗色主题只能是切换内置主题，不能靠替换颜色覆盖配置来实现，否则会出现看不清字的问题。

### 实现方式

在目前版本的 HBuilderX（2.8.x）中直接修改配置文件中的主题设置并不能正确地改变主题，反而会使 HBuilderX 的 UI 出现奇怪的问题。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gho49qc2b3g314t0u04qs.gif)

HBuilderX 命令中也没有改变主题的命令，所以目前找到的唯一能正确改变 HBuilderX 主题的方式就是点击菜单栏里的相关选项，因此要实现自动改变 HBuilderX 主题只能使用 GUI 自动化的方法直接操作 HBuilderX 的菜单项。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gho3xqmzkyj31cw0dm1kx.jpg)

#### macOS

在 macOS 上做到 GUI 自动化非常简单，一小段 AppleScript 就能实现点击菜单项。但是这样做需要申请额外权限，就会出现上文【使用】部分提到的需要访问 System Events 以及出现 “‘HBuilderX’想要控制‘HBuilderX’” 的搞笑情况。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gho35kaglaj30tk0ewq7l.jpg)

#### Windows

理论上这个插件依赖的[暗黑模式设置检测工具](https://github.com/LinusU/node-dark-mode-listener)也支持 Windows，要支持 Windows 也不是不可能，但是在 Windows 上怎么能自动化地点击菜单项我不知道。如果有人能帮忙支持 Windows 的话欢迎在 [GitHub](https://github.com/hi94740/hbuilderx-auto-dark-mode) 上提PR。

如果 HBuilderX 官方能改进主题配置功能或者直接支持暗黑模式就再好不过了。

# 感谢

[LinusU](https://github.com/LinusU) - 本插件依赖的[node-dark-mode-listener](https://github.com/LinusU/node-dark-mode-listener)的作者