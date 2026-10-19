# Fortiche Style

**让页面像一张正在放映的电影海报。**

一个受 [Fortiche 官网](https://forticheprod.com/) 启发的 Codex 前端设计 skill：将大幅影像、超大窄体标题、手写旁白和票券式交互，转化为可以用于自己项目的设计规则与代码起点。

![原创样例的桌面首屏](docs/preview-desktop.jpg)

> 独立制作的风格研究与原创样例，与 Fortiche 无隶属或合作关系。截图展示本仓库样例，不是官网截图。

## 它能帮你做什么

| 设计语言 | 落到页面上 |
| --- | --- |
| 电影感 | 主视觉占据大面积，内容围绕画面焦点组织 |
| 海报排版 | 巨型窄体标题与小号 credits 形成鲜明层级 |
| 创作者旁白 | 少量手写批注、斜线和箭头呼应内容 |
| 印刷物细节 | 纸灰、炭黑、珊瑚红，搭配硬边与票根 |
| 有节制的动态 | 画框反馈、局部位移、入场节奏及静态回退 |

适合创意工作室、个人作品集、影视与品牌展示页。支持中文排版、手机布局和局部组件改造；尊重项目原有技术栈，不要求 WordPress 或特定动画库。

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

私有仓库需要先取得访问权限并完成 GitHub 身份验证。Windows 也可以手动复制该子目录到自己的 `.codex/skills/` 目录。

## 使用

在支持 Codex skills 的会话中明确调用：

```text
使用 $fortiche-style，为我制作一个中文个人作品集。
保留现有 React 技术栈，突出三个代表项目，整体表达鲜明，动效适度。
```

也可以缩小范围或降低视觉强度：

```text
使用 $fortiche-style，只改造当前首页的作品展示区和联系入口。
保持其余页面结构，使用轻量表达，优先照顾手机浏览。
```

skill 会依据任务选择轻量、标准或鲜明的表达程度。它提供设计判断与工作流程，最终效果还取决于真实文案、影像素材与字体。

## 预览

直接打开 [specimen.html](fortiche-style/assets/specimen.html)，或在仓库根目录启动本地服务：

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

浏览器访问 `http://127.0.0.1:8765/fortiche-style/assets/specimen.html`。样例没有构建步骤、外部字体、媒体或 JavaScript 依赖；字体效果随系统可用字体略有变化。

<details>
<summary>查看手机布局</summary>

<img src="docs/preview-mobile.jpg" width="390" alt="390px 宽度下的原创样例，包括主视觉、中文排版与纵向票券">

</details>

## 仓库内容

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

本地样例已检查桌面和手机布局；skill 已通过格式校验。官网媒体加载受限，尚未完整实测其滚动和播放效果。本仓库不包含 Fortiche 的影片、标识或商业字体；实际项目请使用自己的品牌和可用素材。
