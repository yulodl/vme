## Node 
- http.Server 里的 request 是 http.IncomingMessage extends stream.Readable
- stream.Readable 的readableFlowing 有三种状态状态 null true false

## Middleware
- 可以根据 request.readableFlowing 的值来判断请求是否被bodyParser.json 等处理过
- readableFlowing 是true后，再有middleware add data listener 会导致接口挂起
- body-parser & express-http-proxy 有共同的依赖 raw-body
