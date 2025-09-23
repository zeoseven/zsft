# ZSFT CLI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

ZSFT CLI 是 [ZSFT](https://fonts.zeoseven.com/) 所使用的命令行工具，通过快速简单的命令来对字体文件进行子集化、转换和拆分，为 Web 优化。

依靠 [fonttools](https://pypi.org/project/fonttools/) 的 Node.js 适配器 [@web-alchemy/fonttools](https://www.npmjs.com/package/@web-alchemy/fonttools) 和 [cn-font-split](https://www.npmjs.com/package/cn-font-split) ，ZSFT CLI 有着无与伦比的兼容性和效率。完美支持 TTF / OTF / WOFF / WOFF2。

## 🎈 安装

```bash
npm install -g zsft
```

## 📝 配置

在 npm 全局模块安装目录的 `node_modules/zsft/` 目录下创建 `config.json` 以配置 `zsft` 的默认行为。

可以执行 `npm root -g` 获取全局模块安装目录的位置。

## ✨ 基础命令

### 帮助

```bash
zsft -h
```

```bash
zsft split -h
```

### 转换

使用默认行为：从 `./main.ttf` 读取并输出到 `./main.woff2`

```bash
zsft
```

指定输入和输出

```bash
zsft ./main.ttf ./main.woff
```

### 子集化

使用默认行为：从 `./main.ttf` 读取并输出到 `./main.woff2`

```bash
zsft --text "Hello World"
```

指定输入和输出

```bash
zsft ./main.ttf ./main.woff2 --text "Hello World"
```

直接使用 config.json 中的 `defaultSubset` 或默认字符

```bash
zsft -m
```

### 拆分

将完整 TTF 或 OTF 字体拆分为多个 WOFF2 和 CSS 文件，便于在 Web 中按需加载。

```bash
zsft split ./myfont.ttf
```

这会输出到 `myfont/` 目录。

## 📑 完整文档

[fonts.zeoseven.com/docs/cli/](https://fonts.zeoseven.com/docs/cli/)

## 📜 许可证

MIT © ZeoSeven