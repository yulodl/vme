## JS engine & rendering enging

- chrome = v8 + blink (forked from webkit)
- safari = JavaScriptCore + webkit
- firefox = SpiderMonkey + Gecko
- ie = Chakra + Trident
- earlier edge = Chakra + EdgeHTML

### lifecycle of a pixel

- TCP/IP handshake + connection
- Http get HTML
- parse html to DOM tree
- apply style
- layout with computed style
- paint 
- gpu raster & display .etc
