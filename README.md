# Fortiche Style

**让页面像一张正在放映的电影海报。**

一个受 [Fortiche 官网](https://forticheprod.com/) 启发的 Codex 前端设计 skill。将大幅影像、超大窄体标题、手写旁白和票券式交互，整理成可用于自己项目的设计规则与代码起点。

[创作缘起](#为什么做这个项目) · [设计语言](#它能帮你做什么) · [安装](#安装) · [使用](#使用) · [预览](#预览) · [设计参考](fortiche-style/references/design-system.md)

## 为什么做这个项目

我真的很喜欢 Fortiche 的前端风格。第一次浏览它的官网时，那种强烈的视觉表达就让我印象很深：影像、巨大的标题、手写感的细节，以及页面之间的节奏，让我愿意停下来慢慢看。

尤其喜欢它把电影感和一点随性的创作气息放在一起。大画面和大字很有冲击力，小小的批注与票券细节又让页面有了自己的性格。这种感觉，也是我想在自己的前端项目里尝试的。

所以有了这个项目：把这份喜欢整理成一个可以反复使用的 skill。从配色、字体层级到构图和交互，一点点拆解，再尝试应用到自己的内容中。希望它也能给同样喜欢这种风格的人提供一个动手的起点。

## 先看一眼

![原创样例的桌面首屏](docs/preview-desktop.jpg)

*原创样例：抽象海报、窄体标题与手写旁白。完整页面还包含中文排版和票券式入口。*

本项目是独立的学习与设计研究，与 Fortiche 无隶属或合作关系。上图为本仓库的原创样例；设计来源与核查边界见文末说明。

## 它能帮你做什么

| 设计语言 | 落到页面上 |
| --- | --- |
| 电影感 | 主视觉占据大面积，内容围绕画面焦点组织 |
| 海报排版 | 巨型窄体标题与小号 credits 形成鲜明层级 |
| 创作者旁白 | 少量手写批注、斜线和箭头呼应内容 |
| 印刷物细节 | 纸灰、炭黑、珊瑚红，搭配硬边与票根 |
| 有节制的动态 | 画框反馈、局部位移、入场节奏及静态回退 |

适合创意工作室、个人作品集、影视与品牌展示页。支持中文排版、手机布局和局部组件改造；尊重项目原有技术栈，不要求 WordPress 或特定动画库。

### 同一种风格，也可以有不同分寸

| 表达强度 | 适合什么情况 | 会保留哪些特征 |
| --- | --- | --- |
| 轻量 | 已有产品、局部改造、内容较多 | 色彩、标题对比，以及一处票券或手写注释 |
| 标准 | 个人作品集、品牌首页 | 强主视觉、明暗章节、少量手写细节与交互反馈 |
| 鲜明 | 创意工作室、影视或活动专题 | 更大的标题比例、更明显的画框和局部动态 |

三种强度都以内容可读、手机可用为前提。你可以让它只改一个作品展示区，也可以让它组织整张首页。

## 安装

将本仓库中的 **`fortiche-style/` 子目录**放入个人 skills 目录。安装后的结构应为 `skills/fortiche-style/SKILL.md`，而不是再多嵌套一层仓库目录。

macOS / Linux 可使用以下命令。已有同名 skill 时会停止，避免覆盖你的修改：

```bash
git clone https://github.com/carefreelove/fortiche-style-skill.git
cd fortiche-style-skill
python3 - <<'PY'
from pathlib import Path
import os
import shutil

codex_dir = Path(os.environ.get("CODEX_HOME") or Path.home() / ".codex").expanduser()
destination = codex_dir / "skills" / "fortiche-style"
if destination.exists():
    raise SystemExit(f"已存在，未覆盖：{destination}")
destination.parent.mkdir(parents=True, exist_ok=True)
shutil.copytree("fortiche-style", destination)
print(f"已安装：{destination}")
PY
```

本仓库公开可读。Windows 用户可下载仓库 ZIP，解压后将 `fortiche-style/` 子目录复制到 `%USERPROFILE%\.codex\skills\`；如已设置 `CODEX_HOME`，则使用该目录下的 `skills/`。

更新时，在克隆的仓库中执行 `git pull --ff-only`，再将新版本复制到安装目录。若你修改过已安装的 skill，请先备份并比较差异；上面的安装命令不会自动覆盖它。

## 使用

在支持 Codex skills 的会话中明确调用，并说明页面用途、技术栈和真实内容：

```text
使用 $fortiche-style，为我制作一个中文个人作品集。
保留现有 React 技术栈，突出三个代表项目。
使用标准强度：大幅作品图、清晰的中文标题和少量手写注释。
联系入口使用票券样式，动效适度，优先保证手机可读。
```

也可以缩小范围或降低视觉强度：

```text
使用 $fortiche-style，只改造当前首页的作品展示区和联系入口。
保持其余页面结构，使用轻量表达，优先照顾手机浏览。
```

### 让结果更贴合你的项目

- **给出内容**：真实项目名称、简短介绍、图片或视频，比统一的占位文本更能帮助建立构图。
- **说明范围**：整站、单页或一个组件，都可以单独应用这套风格。
- **说明约束**：例如保留现有组件、优先中文阅读，或只使用静态图片。

没有视频也可以从静态海报或摄影开始。skill 提供设计判断与工作流程，最终效果取决于内容、素材、字体和具体实现；样例中的抽象 SVG 只是一个构图起点。

## 预览

下载仓库后，在浏览器中打开 `fortiche-style/assets/specimen.html`。GitHub 上的 [文件链接](fortiche-style/assets/specimen.html) 用于查看源码；运行预览也可以在仓库根目录启动本地服务：

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

浏览器访问 `http://127.0.0.1:8765/fortiche-style/assets/specimen.html`。样例没有构建步骤、外部字体、媒体或 JavaScript 依赖；字体效果随系统可用字体略有变化。

样例展示了主视觉、中文编辑式章节和三张可操作的票券，支持键盘跳转与手机单列布局。它没有影片播放或完整滚动动画；相关实现建议收录在设计参考中。

<details>
<summary>查看手机布局</summary>

<img src="docs/preview-mobile.jpg" width="390" alt="390px 宽度下的原创样例，包括主视觉、中文排版与纵向票券">

</details>

## 仓库内容

如果想先理解这套风格，可以按下面的顺序阅读：

| 文件 | 内容 |
| --- | --- |
| [SKILL.md](fortiche-style/SKILL.md) | skill 的适用范围、设计流程和验收重点 |
| [design-system.md](fortiche-style/references/design-system.md) | 配色、字体、构图与动效的具体取舍 |
| [fortiche.css](fortiche-style/assets/fortiche.css) | 可独立参考的样式基础，统一使用 `.ft` 作用域 |
| [source-notes.md](fortiche-style/references/source-notes.md) | 官网来源，以及确认事实与适配建议的区别 |

```text
fortiche-style/
├── SKILL.md                    # 触发范围、设计流程与验收重点
├── agents/openai.yaml          # 显示名称和调用提示
├── references/
│   ├── design-system.md        # 配色、字体、构图、动效与降级
│   └── source-notes.md         # 一手来源、核查日期与证据边界
└── assets/
    ├── fortiche.css            # 带 .ft 作用域的原创基础样式
    └── specimen.html           # 原创 SVG 与中英文排版样例
```

## 来源与验证

官网 HTML/CSS 的核查日期为 **2026-10-19**。颜色、字体角色和组件特征来自公开资源；中文适配、动效建议与样例代码是本项目的设计转译。完整记录见 [source-notes.md](fortiche-style/references/source-notes.md)。

当前验证情况：

- skill 已通过格式校验，文档中的本地文件链接已检查。
- 原创样例已在 1440px、390px 和 320px 宽度下检查，无横向溢出；键盘跳转可聚焦主要内容。
- 官网媒体加载受限，尚未完整实测其滚动和播放效果；源码中的动效配置与本地样例的实际效果分别记录。

本仓库不包含 Fortiche 的影片、标识或商业字体。用于自己的项目时，请替换为自己的品牌和可用素材；字体替代也会影响最终的排版气质。

## 交流与改进

如果你也喜欢这种风格，欢迎通过 [Issues](https://github.com/carefreelove/fortiche-style-skill/issues) 分享使用效果、排版问题或改进建议。反馈时附上页面截图、屏幕宽度和希望调整的地方，会更容易讨论具体设计。
