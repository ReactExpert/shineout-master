# Checkbox *复选框*

Checkbox 可以单独使用。一组Checkbox使用时，使用一个Array类型的属性 data 来控制选项。

<example />

## API

### Checkbox

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | bool \| 'indeterminate' | 无 | checked 传入时为受控组件 |
| disabled | bool | false | 是否禁用 |
| htmlValue | any | true | 选中时返回值 |
| name | string | 无 | Form 存取数据的名称 |
| onChange | function(value,checked) | 无 | 选中时，value 为 htmlValue，checked 为 true<br />未选中时，value 为 undefined，checked 为 false |
| value | any | 无 | 如果 checked 未设置，checked 状态为 value === htmlValue |

### Checkbox.Group

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| data | array | 必填 | 数据项 |
| datum | object | 无 | 如果 format 和 prediction 属性无法满足需求，可以传入一个 [Datum.List](#/components/Datum.List) 对象，或者 Datum.List 配置来处理数据。 |
| defaultValue | array | | 初始值 |
| disabled | bool \| function | false | 如果 disabled 为 true，禁用全部选项，如果 disabled 为函数，根据函数反回结果禁用选项 |
| format | string \| function | d => d | 格式化 value<br />默认值，返回原始数据<br />为string时，会作为key从原始数据中获取值，相当于 (d) => d[format]<br /> 为函数时，以函数返回结果作为 value |
| name | string | 无 | Form 存取数据的名称 |
| keygen | string \| function(obj):string \| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |
| onChange | function(value) | 无 | value 为 datum.getValue() |
| prediction | function | (val, d) => val===format(d) | 默认使用 format 函数执行的结果来比较是否匹配，在某些情况下（例如返回原始数据的对象，更新数据时，生成了一个值相同，非同一个对象的选项），需要借助 prediction 函数来判断是否匹配 |
| renderItem | string \| function(d) | 必填 | 为 string 时，返回 d\[string]<br />为 function 时，返回函数结果 |
| value | array | | 在Form中，value会被表单接管，value无效 |