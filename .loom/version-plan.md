---
shared_work:
  - id: co-create-planning
    title: 需求共创与版本规划
    deliverable: docs/requirements/has-fullwidth-export.md 及需求总结
    completion: '两轮问答完成需求定义与行为确认，正式需求文档（loom_kind: requirement，固定 id）已建立；补充需求与完整总结已确认（digest 831cc1b1）'
    effort: 1
    kind: planning
    depends_on: []
    expected_seconds: 600
  - id: supplement-integration
    title: 补充成果整合合入
    deliverable: readme.md 输入输出对照表、test.js 逐行用例与需求文档工作事实更新经同步提交合入版本分支
    completion: 三文件变更提交合入，默认导出与类型声明零改动，npm test 通过
    effort: 1
    kind: integration
    depends_on:
      - co-create-planning
    expected_seconds: 600
    status: done
    self_check: 已核对 git diff：readme.md 新增 "Input and output" 表（'abc'→false、'abあc'→true、'中文'→true、'𠀀'→true、''→false）及"每行有对应测试"说明；test.js 新增 'hasFullwidth - readme input/output table' 测试逐行断言表格五行；需求文档工作事实更新。与需求工作区产物逐字节一致（cp 复制），接口零改动，符合已确认总结完成条件。公共工作 supplement-integration 完成：三文件变更已在主工作区待提交，随本次同步合入。
  - id: version-validation
    title: 版本独立验收
    deliverable: 版本独立验收报告与结论
    completion: 按固定提交独立验收：hasFullwidth 导出可用、行为符合已确认规则、现有接口不变、测试通过；补充合入后对新提交重新验收
    effort: 1
    kind: validation
    depends_on:
      - supplement-integration
    expected_seconds: 600
requirements:
  - requirement_id: 38475e17-c06a-4a3b-8627-6840781c8080
    scope: 在 is-fullwidth-code-point 包新增具名导出 hasFullwidth(string)：按完整码点遍历判断字符串是否含全角字符；空串与非字符串返回 false；保留现有默认导出不变；补自动测试与 README 用法（含输入输出对照表及对应测试），npm test 全部通过。
    effort: 3
    expected_seconds: 1500
---
# 版本计划

主 Agent 维护的公共工作与需求预算。
