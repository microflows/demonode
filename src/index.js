import logics from "./internel/index"
import proto from "./hello.proto"

class myService {
  constructor(...args) {
    this.email = "gonorth@qq.com"
    this.name = "mfNode.js"
    this.version = "0.0.2"
    this.urls = ["https://github.com/microflows/mfNode.js"]
    this.author = ""
    this.description = ""
    this.icon = ""
    this.categories = ["demo"]
    this.resources = {
      "git":"https://github.com/microflows/mfNode.js"
    }
    this.proto = proto
    // handler your arguments here
    if (args) {}
  }

  init() {}
  instance() {
    return logics 
  }
}

export default function newService(...args) {
  return new myService(...args)
}

console.log("remote: " , newService().name)
