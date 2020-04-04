## vue
- Observer 会挂在 observed 对象的 \_\_ob\_\_，也会通过Object.defineProperty把observed对象的属性转成setter、getter
- Observer 是通过Dep的`addSub removeSub depend notify` 实现的
- VNode 就是virtualDom，上面也会挂element
