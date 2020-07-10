## react.devlopment.js 读后感
- reconcil: prevProp prop 相互比较，有用到 hasOwnProperty
- fiber 应该是虚拟Dom的节点
- React 内部有个Scheduler，setState是异步的
- PureComponent shouldComponentUpdate 会去 shallowCompare props 和 state
- react(1k+) 比 react-dom(2w+) 代码量少很多
- SyntheticEvent 比 nativeEvent 兼容性更好，为了提高性能会被复用，所以只能异步使用它的属性而不是整个对象

## TODO
- hooks

## Quick Link
- [lifecycle diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
