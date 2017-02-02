System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.0.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.8",
    "aurelia-materialize-bridge": "npm:aurelia-materialize-bridge@0.22.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.1.0",
    "fetch": "github:github/fetch@2.0.2",
    "jquery": "npm:jquery@2.2.4",
    "materialize": "github:Dogfalo/materialize@0.97.8",
    "nprogress": "github:rstacruz/nprogress@0.2.0",
    "text": "github:systemjs/plugin-text@0.0.9",
    "typescript": "npm:typescript@2.1.5",
    "github:Dogfalo/materialize@0.97.8": {
      "css": "github:systemjs/plugin-css@0.1.32",
      "jquery": "npm:jquery@2.2.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:rstacruz/nprogress@0.2.0": {
      "css": "github:systemjs/plugin-css@0.1.32"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:aurelia-bootstrapper@2.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.8",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.1.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.2.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.2.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.2.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.1"
    },
    "npm:aurelia-dependency-injection@1.3.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.2.0"
    },
    "npm:aurelia-framework@1.0.8": {
      "aurelia-binding": "npm:aurelia-binding@1.1.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.2.0"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.2.0"
    },
    "npm:aurelia-materialize-bridge@0.22.0": {
      "aurelia-binding": "npm:aurelia-binding@1.1.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-router": "npm:aurelia-router@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.2.0",
      "jquery": "npm:jquery@2.2.4",
      "materialize": "github:Dogfalo/materialize@0.97.8"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-pal-browser@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.1.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-templating-binding@1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.2.0"
    },
    "npm:aurelia-templating-resources@1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.1.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.2.0"
    },
    "npm:aurelia-templating-router@1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.1.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.2.0"
    },
    "npm:aurelia-templating@1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.1.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.3.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-support@0.4.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.9"
    },
    "npm:typescript@2.1.5": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "source-map-support": "npm:source-map-support@0.4.11"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "materialize-5ec9d9b1b9.js": [
      "github:Dogfalo/materialize@0.97.8.js",
      "github:Dogfalo/materialize@0.97.8/css/materialize.css!github:systemjs/plugin-css@0.1.32.js",
      "github:Dogfalo/materialize@0.97.8/css/materialize.css!github:systemjs/plugin-text@0.0.9.js",
      "github:Dogfalo/materialize@0.97.8/css/materialize.min.css!github:systemjs/plugin-text@0.0.9.js",
      "github:Dogfalo/materialize@0.97.8/js/materialize.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js"
    ],
    "app-build-acd6864915.js": [
      "app.css!github:systemjs/plugin-text@0.0.9.js",
      "app.html!github:systemjs/plugin-text@0.0.9.js",
      "app.js",
      "employee.html!github:systemjs/plugin-text@0.0.9.js",
      "employee.js",
      "employees.html!github:systemjs/plugin-text@0.0.9.js",
      "employees.js",
      "environment.js",
      "footer-bar.html!github:systemjs/plugin-text@0.0.9.js",
      "main.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.9.js",
      "nav-bar.js",
      "resources/elements/loading-indicator.js",
      "resources/index.js",
      "web-api.js",
      "welcome.css!github:systemjs/plugin-text@0.0.9.js",
      "welcome.html!github:systemjs/plugin-text@0.0.9.js",
      "welcome.js"
    ],
    "vendor-07c4cbc189.js": [
      "github:github/fetch@2.0.2.js",
      "github:github/fetch@2.0.2/fetch.js",
      "github:rstacruz/nprogress@0.2.0.js",
      "github:rstacruz/nprogress@0.2.0/nprogress.css!github:systemjs/plugin-css@0.1.32.js",
      "github:rstacruz/nprogress@0.2.0/nprogress.css!github:systemjs/plugin-text@0.0.9.js",
      "github:rstacruz/nprogress@0.2.0/nprogress.js",
      "github:systemjs/plugin-text@0.0.9.js",
      "github:systemjs/plugin-text@0.0.9/text.js",
      "npm:aurelia-binding@1.1.1.js",
      "npm:aurelia-binding@1.1.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@2.0.1.js",
      "npm:aurelia-bootstrapper@2.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.0.js",
      "npm:aurelia-dependency-injection@1.3.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.1.0.js",
      "npm:aurelia-fetch-client@1.1.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.8.js",
      "npm:aurelia-framework@1.0.8/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.2.0.js",
      "npm:aurelia-logging@1.2.0/aurelia-logging.js",
      "npm:aurelia-materialize-bridge@0.22.0.js",
      "npm:aurelia-materialize-bridge@0.22.0/autocomplete/autocomplete.js",
      "npm:aurelia-materialize-bridge@0.22.0/badge/badge.js",
      "npm:aurelia-materialize-bridge@0.22.0/box/box.js",
      "npm:aurelia-materialize-bridge@0.22.0/breadcrumbs/breadcrumbs.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/breadcrumbs/breadcrumbs.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/breadcrumbs/breadcrumbs.js",
      "npm:aurelia-materialize-bridge@0.22.0/breadcrumbs/instructionFilter.js",
      "npm:aurelia-materialize-bridge@0.22.0/button/button.js",
      "npm:aurelia-materialize-bridge@0.22.0/card/card.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/card/card.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/card/card.js",
      "npm:aurelia-materialize-bridge@0.22.0/carousel/carousel-item.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/carousel/carousel-item.js",
      "npm:aurelia-materialize-bridge@0.22.0/carousel/carousel.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/carousel/carousel.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/carousel/carousel.js",
      "npm:aurelia-materialize-bridge@0.22.0/char-counter/char-counter.js",
      "npm:aurelia-materialize-bridge@0.22.0/checkbox/checkbox.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/checkbox/checkbox.js",
      "npm:aurelia-materialize-bridge@0.22.0/chip/chip.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/chip/chip.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/chip/chip.js",
      "npm:aurelia-materialize-bridge@0.22.0/chip/chips.js",
      "npm:aurelia-materialize-bridge@0.22.0/click-counter.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/click-counter.js",
      "npm:aurelia-materialize-bridge@0.22.0/collapsible/collapsible.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/collection-header.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/collection-header.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/collection-header.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/collection-item.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/collection-item.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/collection-item.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/collection.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/collection.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/md-collection-selector.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/md-collection-selector.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/collection/md-collection-selector.js",
      "npm:aurelia-materialize-bridge@0.22.0/colors/colorValueConverters.js",
      "npm:aurelia-materialize-bridge@0.22.0/colors/md-colors.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/colors/md-colors.js",
      "npm:aurelia-materialize-bridge@0.22.0/common/attributeManager.js",
      "npm:aurelia-materialize-bridge@0.22.0/common/attributes.js",
      "npm:aurelia-materialize-bridge@0.22.0/common/constants.js",
      "npm:aurelia-materialize-bridge@0.22.0/common/events.js",
      "npm:aurelia-materialize-bridge@0.22.0/common/polyfills.js",
      "npm:aurelia-materialize-bridge@0.22.0/config-builder.js",
      "npm:aurelia-materialize-bridge@0.22.0/datepicker/datepicker-default-parser.js",
      "npm:aurelia-materialize-bridge@0.22.0/datepicker/datepicker.js",
      "npm:aurelia-materialize-bridge@0.22.0/dropdown/dropdown-element.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/dropdown/dropdown-element.js",
      "npm:aurelia-materialize-bridge@0.22.0/dropdown/dropdown-fix.js",
      "npm:aurelia-materialize-bridge@0.22.0/dropdown/dropdown.js",
      "npm:aurelia-materialize-bridge@0.22.0/exports.js",
      "npm:aurelia-materialize-bridge@0.22.0/fab/fab.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/fab/fab.js",
      "npm:aurelia-materialize-bridge@0.22.0/file/file.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/file/file.js",
      "npm:aurelia-materialize-bridge@0.22.0/footer/footer.js",
      "npm:aurelia-materialize-bridge@0.22.0/index.js",
      "npm:aurelia-materialize-bridge@0.22.0/input/input-prefix.js",
      "npm:aurelia-materialize-bridge@0.22.0/input/input-update-service.js",
      "npm:aurelia-materialize-bridge@0.22.0/input/input.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/input/input.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/input/input.js",
      "npm:aurelia-materialize-bridge@0.22.0/modal/modal-trigger.js",
      "npm:aurelia-materialize-bridge@0.22.0/modal/modal.js",
      "npm:aurelia-materialize-bridge@0.22.0/navbar/navbar.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/navbar/navbar.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/navbar/navbar.js",
      "npm:aurelia-materialize-bridge@0.22.0/pagination/pagination.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/pagination/pagination.js",
      "npm:aurelia-materialize-bridge@0.22.0/parallax/parallax.js",
      "npm:aurelia-materialize-bridge@0.22.0/progress/progress.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/progress/progress.js",
      "npm:aurelia-materialize-bridge@0.22.0/pushpin/pushpin.js",
      "npm:aurelia-materialize-bridge@0.22.0/radio/radio.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/radio/radio.js",
      "npm:aurelia-materialize-bridge@0.22.0/range/range.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/range/range.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/range/range.js",
      "npm:aurelia-materialize-bridge@0.22.0/scrollfire/scrollfire-patch.js",
      "npm:aurelia-materialize-bridge@0.22.0/scrollfire/scrollfire-target.js",
      "npm:aurelia-materialize-bridge@0.22.0/scrollfire/scrollfire.js",
      "npm:aurelia-materialize-bridge@0.22.0/scrollspy/scrollspy.js",
      "npm:aurelia-materialize-bridge@0.22.0/select/select.js",
      "npm:aurelia-materialize-bridge@0.22.0/sidenav/sidenav-collapse.js",
      "npm:aurelia-materialize-bridge@0.22.0/sidenav/sidenav.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/sidenav/sidenav.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/sidenav/sidenav.js",
      "npm:aurelia-materialize-bridge@0.22.0/slider/slider.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/slider/slider.js",
      "npm:aurelia-materialize-bridge@0.22.0/switch/switch.css!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/switch/switch.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-materialize-bridge@0.22.0/switch/switch.js",
      "npm:aurelia-materialize-bridge@0.22.0/tabs/tabs.js",
      "npm:aurelia-materialize-bridge@0.22.0/toast/toastService.js",
      "npm:aurelia-materialize-bridge@0.22.0/tooltip/tooltip.js",
      "npm:aurelia-materialize-bridge@0.22.0/transitions/fadein-image.js",
      "npm:aurelia-materialize-bridge@0.22.0/transitions/staggered-list.js",
      "npm:aurelia-materialize-bridge@0.22.0/validation/validationRenderer.js",
      "npm:aurelia-materialize-bridge@0.22.0/waves/waves.js",
      "npm:aurelia-materialize-bridge@0.22.0/well/md-well.html!github:systemjs/plugin-text@0.0.9.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.1.0.js",
      "npm:aurelia-pal-browser@1.1.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.2.0.js",
      "npm:aurelia-pal@1.2.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.1.1.js",
      "npm:aurelia-router@1.1.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.1.0.js",
      "npm:aurelia-task-queue@1.1.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.2.0.js",
      "npm:aurelia-templating-binding@1.2.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.2.0.js",
      "npm:aurelia-templating-resources@1.2.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.2.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.2.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.2.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.2.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.2.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.2.0/compose.js",
      "npm:aurelia-templating-resources@1.2.0/css-resource.js",
      "npm:aurelia-templating-resources@1.2.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.2.0/focus.js",
      "npm:aurelia-templating-resources@1.2.0/hide.js",
      "npm:aurelia-templating-resources@1.2.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.2.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.2.0/if.js",
      "npm:aurelia-templating-resources@1.2.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.2.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.2.0/repeat.js",
      "npm:aurelia-templating-resources@1.2.0/replaceable.js",
      "npm:aurelia-templating-resources@1.2.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.2.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/show.js",
      "npm:aurelia-templating-resources@1.2.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/with.js",
      "npm:aurelia-templating-router@1.0.1.js",
      "npm:aurelia-templating-router@1.0.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.1/route-href.js",
      "npm:aurelia-templating-router@1.0.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.1/router-view.js",
      "npm:aurelia-templating@1.2.0.js",
      "npm:aurelia-templating@1.2.0/aurelia-templating.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js"
    ]
  },
  depCache: {
    "employee.js": [
      "aurelia-framework",
      "aurelia-router",
      "./web-api"
    ],
    "employees.js": [
      "aurelia-framework",
      "./web-api"
    ],
    "main.js": [
      "jquery",
      "materialize",
      "./environment"
    ],
    "nav-bar.js": [
      "aurelia-router",
      "aurelia-framework"
    ],
    "resources/elements/loading-indicator.js": [
      "nprogress",
      "aurelia-framework"
    ],
    "web-api.js": [
      "aurelia-framework",
      "aurelia-fetch-client"
    ]
  }
});