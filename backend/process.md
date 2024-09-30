❯ pwd

/Users/wangshangde/Desktop/git-practice/git-practice/backend

❯ ls -al

total 0
drwxr-xr-x@  2 wangshangde  staff   64  9 30 21:45 .
drwxr-xr-x  10 wangshangde  staff  320  9 30 21:45 ..

❯ npm init

❯ ls -la

total 8
drwxr-xr-x@  3 wangshangde  staff   96  9 30 21:48 .
drwxr-xr-x  10 wangshangde  staff  320  9 30 21:45 ..
-rw-r--r--   1 wangshangde  staff  203  9 30 21:48 package.json

❯ cat package.json

{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}

❯ npm install express

❯ ls -a
.                 node_modules      package.json
..                package-lock.json

❯ cat package.json

{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.21.0"
  }
}

❯ cd node_modules

❯ ls -a
.                        express                  object-inspect
..                       finalhandler             on-finished
.bin                     forwarded                parseurl
.package-lock.json       fresh                    path-to-regexp
accepts                  function-bind            proxy-addr
array-flatten            get-intrinsic            qs
body-parser              gopd                     range-parser
bytes                    has-property-descriptors raw-body
call-bind                has-proto                safe-buffer
content-disposition      has-symbols              safer-buffer
content-type             hasown                   send
cookie                   http-errors              serve-static
cookie-signature         iconv-lite               set-function-length
debug                    inherits                 setprototypeof
define-data-property     ipaddr.js                side-channel
depd                     media-typer              statuses
destroy                  merge-descriptors        toidentifier
ee-first                 methods                  type-is
encodeurl                mime                     unpipe
es-define-property       mime-db                  utils-merge
es-errors                mime-types               vary
escape-html              ms
etag                     negotiator

❯ curl http://localhost:3000/
Hello World!%   