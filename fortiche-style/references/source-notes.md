# 来源、证据与边界

核查日期：2026-10-19。对应 `https://forticheprod.com/` 当日返回的首页版本。

## 一手来源

- [官网首页](https://forticheprod.com/)：Showreel、作品章节、工作室、轮播与联系票券。
- [全局样式](https://forticheprod.com/wp-content/uploads/elementor/css/post-9.css)：颜色变量、基础背景、边距范围。
- [首页样式](https://forticheprod.com/wp-content/uploads/elementor/css/post-2297.css)：媒体高度、海报标题尺度、画框 hover 声明、票券边框与背景变化。
- [主题样式](https://forticheprod.com/wp-content/themes/fortiche/style.css)：字体角色及菜单、正文的类型映射。

官网样式链接部分使用 `fortiche.b-cdn.net`。此次该 CDN 的 TLS 连接失败，随后从同站源域名相同路径成功获取 CSS。不要把 CDN 失败解读为官网没有设计。

## 确认到的事实

- 全局颜色包含 `#141414`、`#ECEAE9`、`#FF364A` 与六种辅助色，已映射为本 skill 的语义 token。
- 主标题声明为 Druk，正文与小标题为 Monument Grotesk，装饰标题为 Skribblugh；源码声明不等同于本机已安装字体。
- 首页有静音、循环、行内播放的视频元素及静态背景图配置。
- 首屏 CSS 基准最小高度为 `75vh`，后续断点规则包含更小高度；作品标题包含 `18vw` 与较小断点值 `14.3vw`。
- 媒体容器声明静态画框与 hover 动态画框，手机断点使用静态变体。
- HTML motion 配置包含多组不同方向和速度的水平平移，以及局部旋转/纵向平移。
- 菜单注释的内联样式含手写文字、箭头式字符、红色及约 250ms hover 变化。
- 联系入口包含三张票券，CSS 声明 1px 边框、0 圆角、约 0.3s 背景变化和红色 hover 状态。

## 验证边界

此次浏览器能读取首页 DOM，但外链样式与媒体未正常加载；未验收官网完整渲染、滚动节奏、视频连续播放或移动端实际表现。设计事实主要来自官网 HTML/CSS；某项配置存在，不保证每个设备都实际执行。

本 skill 的动效时长区间、无障碍增强、中文适配、原创票根 CSS、示例 SVG 和组件结构是迁移建议，不应描述为官网精确实现。本地样本不是官网复刻截图。

用户要求像素级复现或最新版本时，重新获取实际可见的桌面与手机状态，再按证据调整；保留用户自己的品牌和内容约束。
