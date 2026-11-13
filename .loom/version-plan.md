---
shared_work:
  - id: co-create-planning
    title: 需求共创与版本规划
    deliverable: docs/requirements/has-fullwidth-export.md 及需求总结
    completion: '两轮问答完成需求定义与行为确认，正式需求文档（loom_kind: requirement，固定 id）已建立'
    effort: 1
    kind: planning
    depends_on: []
    expected_seconds: 600
    status: done
    self_check: 'docs/requirements/has-fullwidth-export.md 头部含 loom_kind: requirement 与唯一固定 id 38475e17-c06a-4a3b-8627-6840781c8080，正文含已确认行为、完成条件与工作事实小节；.loom/version-plan.md 由 loom_version_plan 校验写入，覆盖该需求 scope/effort 及 planning/validation 两项公共工作；总结已经用户页面确认（digest b3d9085d）。'
  - id: version-validation
    title: 版本独立验收
    deliverable: 版本独立验收报告与结论
    completion: 按固定提交独立验收：hasFullwidth 导出可用、行为符合已确认规则、现有接口不变、测试通过
    effort: 1
    kind: validation
    depends_on: []
    expected_seconds: 600
requirements:
  - requirement_id: 38475e17-c06a-4a3b-8627-6840781c8080
    scope: 在 is-fullwidth-code-point 包新增具名导出 hasFullwidth(string)：按完整码点遍历判断字符串是否含全角字符；空串与非字符串返回 false；保留现有默认导出不变；补自动测试与 README 用法，npm test 全部通过。
    effort: 3
    expected_seconds: 1500
---
# 版本计划

主 Agent 维护的公共工作与需求预算。
