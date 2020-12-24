# wechat-sharing
微信内嵌浏览器打开网页分享给好友或者分享到朋友圈的功能。根据官方的PHP后台的class改动之后，适合使用CMS的客户。只需在要分享的页面加上js就行了。

## 一些链接

### 微信 JS 接口签名校验工具
http://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign

### 微信公众平台接口调试工具
https://mp.weixin.qq.com/debug/cgi-bin/apiinfo?t=index&type=%E5%9F%BA%E7%A1%80%E6%94%AF%E6%8C%81&form=%E8%8E%B7%E5%8F%96access_token%E6%8E%A5%E5%8F%A3%20/token

## 注意事项
* 公众号设置 - 功能设置：设置js安全域名和业务域名
* 开发 - 基本配置： 启用AppID和AppSecret, 添加网站服务器 IP 作为白名单
* 如果是PHP端，别忘记安装 PHP7.4-curl之类的包
