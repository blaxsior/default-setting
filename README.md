# default-setting
프로젝트에 필요한 기본 설정을 담은 레포지토리
## nodemon + ts-node을 esmodule 기반으로 실행하기
ts-node는 프로젝트의 tsconfig.json 파일 및 package.json 설정을 이용, 컴파일과 실행을 수행한다.   
이때 두 설정 파일의 기본 모듈 타입은 CommonJS이며, ts-node 역시 CommonJS에 대해 동작한다.   
프로젝트를 require & module.export 기반으로 동작하는 CommonJS로 컴파일하더라도 상관 없다면 설정은 바꿀 필요가 없다.   
그러나 파일을 es module로 컴파일하고 실행하고 싶다면 전체적인 설정을 es module에 맞게 변경할 필요가 있다.
### 설정 파일 생성
- package.json: yarn init
- tsconfig.json: tsc --init 후 "target": "ESNext"로 변경함.

### package.json
package.json 파일은 node를 실행할 때 관여하는 설정들이나 여러 메타데이터가 포함된다.
```
{
  "type": "module"
}
```
type을 module로 지정하여 코드를 es module 기반으로 해석하여 실행하게 만든다.
### tsconfig.json
tsconfig.json 파일은 타입스크립트 기반 코드를 자바스크립트로 컴파일할 때 사용될 옵션들이 포함된다.
```
"compilerOptions": {
    "module": "ESNext",
    "esModuleInterop": true
},
"ts-node": {
    "esm": true
}
```
- module을 ES_으로 지정하여 es module로 컴파일한다. 특정 버전이 필요한게 아니라면 ESNext로 지정하는게 편하다.   
- esModuleInterop: true로 설정하여 CommonJS 기반으로 작성된 라이브러리에 대한 호환성을 가진다.   
- ts-node의 esm: true로 설정하여 ts-node가 모듈 기반으로 실행되도록 설정한다.

### nodemon.json
nodemon의 커맨드라인 옵션들을 옮겨둔 것으로, 커맨드라인 옵션으로 줘도 상관없다.
```
{
    "watch": ["src"],
    "ext": "ts,json",
    "ignore": ["src/**/*.spec.ts"],
    "exec": "ts-node ./src/index.ts"
}
```
이외의 에러는 설정 파일을 참고하세요. node 버전이 문제일 수도 있습니다.