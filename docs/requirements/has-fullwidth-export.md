---
loom_kind: requirement
id: 38475e17-c06a-4a3b-8627-6840781c8080
title: 新增 hasFullwidth 字符串全角判断导出
work_items:
  - id: has-fullwidth-impl
    title: 实现 hasFullwidth 导出与类型声明
    effort: 2
    expected_seconds: 900
    deliverable: index.js 具名导出 hasFullwidth 及 index.d.ts 类型
    completion: 按码点遍历字符串，任一全角字符返回 true；空串与非字符串返回 false
    depends_on: []
  - id: has-fullwidth-tests-readme
    title: 补充自动测试与 README 用法
    effort: 1
    expected_seconds: 600
    deliverable: test.js 新增 hasFullwidth 用例；README 增加用法示例
    completion: 覆盖全角/半角混合、空串、非字符串、增补平面字符，npm test 全部通过
    depends_on: [has-fullwidth-impl]
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
- 当前阶段：需求共创（已收口，待用户确认）
- 已完成：目标与行为细节经两轮问答确认，见上文"已确认行为"
- 阻碍：无
- 剩余工作：用户确认后分派实现
- 事实来源：用户 2026-11-13 问答答复；仓库现状 is-fullwidth-code-point v5.1.0
