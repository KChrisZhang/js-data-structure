# JavaScript 数据结构

1523501305000



## 进度

- Stack
- Queue


## 相关配置

### Jest

1 安装 jest

```
npm install jest --save-dev
```

2 初始化 package.json

```
npm init
```

3 添加测试钩子

```
// package.json

"scripts": {
	"test": "jest"
}
```

4 运行测试

```
npm test
```

### Babel

默认情况下，Jest 只支持本地所使用的 Node 版本的 js 特性（不支持 import、export等语法），所以在此处添加 babel 配置以获得语法支持。

1 安装 babel-preset-dev

```
npm install babel-preset-dev --save-dev
```

2 根目录下添加 .babelrc 文件

```
{
    “preset": ["env"]
}
```




## 日志更新

2018-4-12

- Stack
- Queue

