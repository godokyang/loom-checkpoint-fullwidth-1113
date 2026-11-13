---
loom_kind: requirement
id: 38475e17-c06a-4a3b-8627-6840781c8080
title: 新增 hasFullwidth 字符串全角判断导出
work_items:
  - id: has-fullwidth-impl
    title: 实现 hasFullwidth 导出与类型声明
    deliverable: index.js 具名导出 hasFullwidth 及 index.d.ts 类型
    completion: 按码点遍历字符串，任一全角字符返回 true；空串与非字符串返回 false
    effort: 2
    depends_on: []
    expected_seconds: 900
    status: done
    self_check: hasFullwidth 按码点遍历（for...of），isFullWidth||isWide 与默认导出一致；空串与非字符串返回 false 不抛错；默认导出行为不变；tsd 通过；npm test 全部通过。成果已合入版本分支（f944837），独立验收 a5517b18 对 c810df71 复跑 4 个测试全绿确认。
  - id: has-fullwidth-tests-readme
    title: 补充自动测试与 README 用法
    deliverable: test.js 新增 hasFullwidth 用例；README 增加用法示例
    completion: 覆盖全角/半角混合、空串、非字符串、增补平面字符，npm test 全部通过
    effort: 0.5
    depends_on:
      - has-fullwidth-impl
    expected_seconds: 300
    status: done
    self_check: 用例覆盖全角（あ/谢/고）、半角、混合、空串、undefined/数字/null/对象等非字符串、增补平面字符 𠀀 及孤立代理对；npm test 全部通过，原有 main 测试不回归。成果已合入版本分支（90e0868），独立验收 a5517b18 对 c810df71 复跑确认。
  - id: has-fullwidth-readme-table
    title: README 输入输出对照表与逐行测试覆盖
    deliverable: readme.md hasFullwidth 输入输出对照表（纯 ASCII / 全角混合 / 增补平面三类）及 test.js 对应逐行用例
    completion: 对照表每行示例真实反映实现行为且每行有对应 test.js 用例；npm install && npm test（xo && ava && tsd）全部通过；默认导出与 hasFullwidth 行为及类型声明不变
    effort: 0.5
    depends_on:
      - has-fullwidth-tests-readme
    expected_seconds: 300
    status: done
    self_check: README 对照表覆盖 'abc'(false)、'abあc'(true)、'中文'(true)、'𠀀'(true)、''(false)，每行经 node 实际运行验证与实现一致并有 test.js 逐行用例；npm install && npm test（xo && ava && tsd）复验 4 个测试全部通过；默认导出与 index.d.ts 类型声明未改动。用户已在主会话确认收口并合入。
---
# 新增 hasFullwidth 字符串全角判断导出

## 目标
在 is-fullwidth-code-point 包中新增具名导出 `hasFullwidth(string)`，判断给定字符串是否包含至少一个全角字符；现有默认导出 `isFullwidthCodePoint(codePoint)` 保持不变。

## 已确认行为
- 命名：`hasFullwidth`，与现有命名风格一致。
- 输入：字符串；按完整 Unicode 码点遍历（正确处理代理对/增补平面字符，如 𠀀）。
- 判断标准：沿用底层依赖 `get-east-asian-width`（与现有实现一致）。
- 空字符串：返回 `false`。
- 非字符串输入（undefined、数字等）：返回 `false`，不抛错，与包现有静默风格一致。

## 完成条件
- `hasFullwidth` 具名导出可用，含 TypeScript 类型声明。
- 现有码点接口行为与测试不变。
- 测试覆盖全角、半角、混合、空串、非字符串、增补平面全角字符；`npm test`（xo && ava && tsd）全部通过。
- README 补充 `hasFullwidth` 用法示例。

## 工作事实
- 当前阶段：已完成并经版本独立验收（a5517b18 pass，绑定 c810df71）
- 已完成：hasFullwidth 导出与类型声明、自动测试、README 用法与输入输出对照表（逐行测试覆盖）；完整总结经用户确认（digest 831cc1b1）
- 阻碍：无
- 剩余工作：无
- 事实来源：用户 2026-11-13 问答答复与确认；仓库 is-fullwidth-code-point v5.1.0 + 本需求提交链（f944837、90e0868、c810df71）
