# GameCenter-WZUT

#### 介绍
Vue期末大作业

一个简单的游戏游玩平台，主要有2048和贪吃蛇两个游戏。
主要界面分为注册界面、登录界面、主页、游戏选择界面、游戏介绍界面、制作人员界面、用户界面。
主要功能可进行用户登录且记录用户游玩的次数、总分、最高分记录。
如果未注册需先注册才可以进入主页。

主要游戏：
2048：《2048》是一款数字益智游戏，而《2048》的初始数字则是由2+2组成的基数4。在操作方面的不同则表现为一步一格的移动，变成更为爽快的一次到底。相同数字的方况在靠拢、相撞时会相加。系统给予的数字方块不是2就是4，玩家要想办法在这小小的16格范围中凑出「2048」这个数字方块。
贪吃蛇：用游戏把子上下左右控制蛇的方向，寻找吃的东西，每吃一口就能得到一定的积分，而且蛇的身子会越吃越长，身子越长玩的难度就越大，不能碰墙，不能咬到自己的身体，更不能咬自己的尾巴，等到了一定的分数，就能过关，然后继续玩下一关。

以Vue脚手架为主要编程方式，结合html、css、scss、JavaScript等语言进行辅助，使用vant为主要框架，以lib-flexible/flexible作为移动端适配工具对px和rem进行自动适配，通过vuex中的store和router等工具实现网页的重定向以及全局变量的读写。
#### 软件架构
软件架构说明
main.js中对需要使用的扩展库进行全局注册
App.vue设计全局框架
assets文件夹中存放图片、css等文件
components文件夹中存放主要界面的vue组件
router文件夹中存放页面定向主要数据文件
store中存放全局变量等
views存放主要组件且调用components中的文件

#### 安装教程
安装node.js,vuecli
下载zip，解压后使用npm run serve进行游戏

#### 使用说明
先注册登录后即可使用

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
