// Clash_merge.yaml → FlClash JavaScript 覆写脚本
// 用法：在 FlClash 的脚本管理中新增/导入本文件，再为已有订阅选择此覆写脚本。
// 依赖已有订阅的 proxies / proxy-providers；本文件不包含节点或订阅地址。
// 保留附件 1 的分组、规则优先级、DNS 与 TUN 设置。
// 原订阅的策略组及规则由本脚本替换；节点、节点提供者及其他设置保留。
// 支持直接节点及 proxy-providers；空地区拒绝连接，避免意外直连。
// TUN 的实际启用状态及设备参数仍以 FlClash 客户端设置为准。

const main = (config) => {
  if (!config || typeof config !== "object" || Array.isArray(config)) {
    throw new Error("请在已有节点订阅上使用此覆写脚本。");
  }

  // 只使用标准 JavaScript，不依赖 require、文件系统或网络 API。
  const override = {
    "ipv6": false,
    "tun": {
      "enable": true,
      "stack": "mixed",
      "auto-route": true,
      "auto-detect-interface": true,
      "strict-route": true,
      "dns-hijack": [
        "any:53",
        "tcp://any:53"
      ]
    },
    "dns": {
      "enable": true,
      "listen": "0.0.0.0:1053",
      "ipv6": false,
      "enhanced-mode": "fake-ip",
      "fake-ip-range": "198.18.0.1/16",
      "fake-ip-filter-mode": "blacklist",
      "fake-ip-filter": [
        "*.lan"
      ],
      "nameserver": [
        "https://doh.pub/dns-query",
        "https://dns.alidns.com/dns-query"
      ],
      "default-nameserver": [
        "223.5.5.5",
        "223.6.6.6"
      ],
      "proxy-server-nameserver": [
        "https://doh.pub/dns-query"
      ]
    },
    "rule-providers": {
      "ads": {
        "type": "http",
        "behavior": "classical",
        "format": "yaml",
        "interval": 86400,
        "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/ads.yaml",
        "path": "./rules/PerfectRules-ads.yaml"
      },
      "ai": {
        "type": "http",
        "behavior": "classical",
        "format": "yaml",
        "interval": 86400,
        "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/ai.yaml",
        "path": "./rules/PerfectRules-ai.yaml"
      },
      "youtube": {
        "type": "http",
        "behavior": "classical",
        "format": "yaml",
        "interval": 86400,
        "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/youtube.yaml",
        "path": "./rules/PerfectRules-youtube.yaml"
      },
      "crypto": {
        "type": "http",
        "behavior": "classical",
        "format": "yaml",
        "interval": 86400,
        "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/crypto.yaml",
        "path": "./rules/PerfectRules-crypto.yaml"
      },
      "disney": {
        "type": "http",
        "behavior": "classical",
        "format": "yaml",
        "interval": 86400,
        "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/disney.yaml",
        "path": "./rules/PerfectRules-disney.yaml"
      },
      "apple": {
        "type": "http",
        "behavior": "classical",
        "format": "yaml",
        "interval": 86400,
        "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/apple.yaml",
        "path": "./rules/PerfectRules-apple.yaml"
      },
      "google": {
        "type": "http",
        "behavior": "classical",
        "format": "yaml",
        "interval": 86400,
        "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/google.yaml",
        "path": "./rules/PerfectRules-google.yaml"
      },
      "software": {
        "type": "http",
        "behavior": "classical",
        "format": "yaml",
        "interval": 86400,
        "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/software.yaml",
        "path": "./rules/PerfectRules-software.yaml"
      }
    },
    "proxy-groups": [
      {
        "name": "🚀 默认代理 [自选]",
        "type": "select",
        "proxies": [
          "♻️ 自动选择 [系统]",
          "🇭🇰 香港节点 [系统]",
          "🇯🇵 日本节点 [系统]",
          "🇸🇬 新加坡节点 [系统]",
          "🇺🇸 美国节点 [系统]",
          "🇹🇼 台湾节点 [系统]",
          "🌍 其他地区 [系统]",
          "🌐 全部节点 [系统]"
        ]
      },
      {
        "name": "🤖 AI服务 [自选]",
        "type": "select",
        "proxies": [
          "🇺🇸 美国节点 [系统]",
          "🇯🇵 日本节点 [系统]",
          "🇸🇬 新加坡节点 [系统]",
          "🇭🇰 香港节点 [系统]",
          "🇹🇼 台湾节点 [系统]",
          "🌍 其他地区 [系统]",
          "🌐 全部节点 [系统]",
          "DIRECT"
        ]
      },
      {
        "name": "📺 油管专用 [自选]",
        "type": "select",
        "proxies": [
          "🇭🇰 香港节点 [系统]",
          "🇺🇸 美国节点 [系统]",
          "🇯🇵 日本节点 [系统]",
          "🇸🇬 新加坡节点 [系统]",
          "🇹🇼 台湾节点 [系统]",
          "🌍 其他地区 [系统]",
          "🌐 全部节点 [系统]",
          "DIRECT"
        ]
      },
      {
        "name": "🎬 流媒体 [自选]",
        "type": "select",
        "proxies": [
          "🇺🇸 美国节点 [系统]",
          "🇯🇵 日本节点 [系统]",
          "🇭🇰 香港节点 [系统]",
          "🇸🇬 新加坡节点 [系统]",
          "🇹🇼 台湾节点 [系统]",
          "🌍 其他地区 [系统]",
          "🌐 全部节点 [系统]",
          "DIRECT"
        ]
      },
      {
        "name": "💬 电报专用 [自选]",
        "type": "select",
        "proxies": [
          "🇭🇰 香港节点 [系统]",
          "🇸🇬 新加坡节点 [系统]",
          "🇯🇵 日本节点 [系统]",
          "🇺🇸 美国节点 [系统]",
          "🇹🇼 台湾节点 [系统]",
          "🌍 其他地区 [系统]",
          "🌐 全部节点 [系统]",
          "DIRECT"
        ]
      },
      {
        "name": "Ⓜ️ 微软服务 [自选]",
        "type": "select",
        "proxies": [
          "🇯🇵 日本节点 [系统]",
          "🇸🇬 新加坡节点 [系统]",
          "🇺🇸 美国节点 [系统]",
          "🇭🇰 香港节点 [系统]",
          "🇹🇼 台湾节点 [系统]",
          "🌍 其他地区 [系统]",
          "🌐 全部节点 [系统]",
          "DIRECT"
        ]
      },
      {
        "name": "🍎 苹果服务 [自选]",
        "type": "select",
        "proxies": [
          "🇭🇰 香港节点 [系统]",
          "🇯🇵 日本节点 [系统]",
          "🇸🇬 新加坡节点 [系统]",
          "🇺🇸 美国节点 [系统]",
          "🇹🇼 台湾节点 [系统]",
          "🌍 其他地区 [系统]",
          "🌐 全部节点 [系统]",
          "DIRECT"
        ]
      },
      {
        "name": "🔍 谷歌服务 [自选]",
        "type": "select",
        "proxies": [
          "🇺🇸 美国节点 [系统]",
          "🇯🇵 日本节点 [系统]",
          "🇸🇬 新加坡节点 [系统]",
          "🇭🇰 香港节点 [系统]",
          "🇹🇼 台湾节点 [系统]",
          "🌍 其他地区 [系统]",
          "🌐 全部节点 [系统]",
          "DIRECT"
        ]
      },
      {
        "name": "💰 币圈专用 [自选]",
        "type": "select",
        "proxies": [
          "🇭🇰 香港节点 [系统]",
          "🇸🇬 新加坡节点 [系统]",
          "🇯🇵 日本节点 [系统]",
          "🇺🇸 美国节点 [系统]",
          "🇹🇼 台湾节点 [系统]",
          "🌍 其他地区 [系统]",
          "🌐 全部节点 [系统]",
          "DIRECT"
        ]
      },
      {
        "name": "🖥️ 软件分流 [自选]",
        "type": "select",
        "proxies": [
          "🚀 默认代理 [自选]",
          "♻️ 自动选择 [系统]",
          "🇭🇰 香港节点 [系统]",
          "🇯🇵 日本节点 [系统]",
          "🇸🇬 新加坡节点 [系统]",
          "🇺🇸 美国节点 [系统]",
          "🇹🇼 台湾节点 [系统]",
          "🌍 其他地区 [系统]",
          "🌐 全部节点 [系统]",
          "DIRECT"
        ]
      },
      {
        "name": "🌐 全部节点 [系统]",
        "type": "select",
        "include-all-proxies": true,
        "exclude-type": "Direct",
        "include-all-providers": true,
        "empty-fallback": "REJECT"
      },
      {
        "name": "♻️ 自动选择 [系统]",
        "type": "url-test",
        "include-all-proxies": true,
        "exclude-type": "Direct",
        "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "lazy": true,
        "include-all-providers": true,
        "empty-fallback": "REJECT"
      },
      {
        "name": "🇭🇰 香港节点 [系统]",
        "type": "url-test",
        "include-all-proxies": true,
        "filter": "(?i)🇭🇰|香港|港|\\bHK\\b|\\bHKG\\b|Hong[ -]?Kong",
        "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
        "exclude-type": "Direct",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "lazy": true,
        "include-all-providers": true,
        "empty-fallback": "REJECT"
      },
      {
        "name": "🇯🇵 日本节点 [系统]",
        "type": "url-test",
        "include-all-proxies": true,
        "filter": "(?i)🇯🇵|日本|日|\\bJP\\b|\\bJPN\\b|Japan|Tokyo|Osaka",
        "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
        "exclude-type": "Direct",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "lazy": true,
        "include-all-providers": true,
        "empty-fallback": "REJECT"
      },
      {
        "name": "🇸🇬 新加坡节点 [系统]",
        "type": "url-test",
        "include-all-proxies": true,
        "filter": "(?i)🇸🇬|新加坡|新国|\\bSG\\b|\\bSGP\\b|Singapore",
        "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
        "exclude-type": "Direct",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "lazy": true,
        "include-all-providers": true,
        "empty-fallback": "REJECT"
      },
      {
        "name": "🇺🇸 美国节点 [系统]",
        "type": "url-test",
        "include-all-proxies": true,
        "filter": "(?i)🇺🇸|美国|美|\\bUS\\b|\\bUSA\\b|United[ -]?States|America|Los[ -]?Angeles|New[ -]?York|San[ -]?Francisco",
        "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
        "exclude-type": "Direct",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "lazy": true,
        "include-all-providers": true,
        "empty-fallback": "REJECT"
      },
      {
        "name": "🇹🇼 台湾节点 [系统]",
        "type": "url-test",
        "include-all-proxies": true,
        "filter": "(?i)🇹🇼|台湾|台|\\bTW\\b|\\bTWN\\b|Taiwan|Taipei",
        "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
        "exclude-type": "Direct",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "lazy": true,
        "include-all-providers": true,
        "empty-fallback": "REJECT"
      },
      {
        "name": "🌍 其他地区 [系统]",
        "type": "select",
        "include-all-proxies": true,
        "exclude-filter": "(?i)(?:官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website)|(?:🇭🇰|香港|港|\\bHK\\b|\\bHKG\\b|Hong[ -]?Kong)|(?:🇯🇵|日本|日|\\bJP\\b|\\bJPN\\b|Japan|Tokyo|Osaka)|(?:🇸🇬|新加坡|新国|\\bSG\\b|\\bSGP\\b|Singapore)|(?:🇺🇸|美国|美|\\bUS\\b|\\bUSA\\b|United[ -]?States|America|Los[ -]?Angeles|New[ -]?York|San[ -]?Francisco)|(?:🇹🇼|台湾|台|\\bTW\\b|\\bTWN\\b|Taiwan|Taipei)",
        "exclude-type": "Direct",
        "include-all-providers": true,
        "empty-fallback": "REJECT"
      },
      {
        "name": "🛑 广告拦截 [系统]",
        "type": "select",
        "proxies": [
          "REJECT",
          "DIRECT"
        ]
      }
    ],
    "rules": [
      "RULE-SET,software,🖥️ 软件分流 [自选]",
      "GEOSITE,private,DIRECT",
      "GEOIP,private,DIRECT,no-resolve",
      "RULE-SET,ads,🛑 广告拦截 [系统]",
      "RULE-SET,ai,🤖 AI服务 [自选]",
      "RULE-SET,youtube,📺 油管专用 [自选]",
      "RULE-SET,crypto,💰 币圈专用 [自选]",
      "RULE-SET,disney,🎬 流媒体 [自选]",
      "GEOSITE,netflix,🎬 流媒体 [自选]",
      "RULE-SET,apple,🍎 苹果服务 [自选]",
      "RULE-SET,google,🔍 谷歌服务 [自选]",
      "GEOSITE,telegram,💬 电报专用 [自选]",
      "GEOSITE,microsoft,Ⓜ️ 微软服务 [自选]",
      "GEOSITE,CN,DIRECT",
      "GEOIP,CN,DIRECT,no-resolve",
      "MATCH,🚀 默认代理 [自选]"
    ]
  };

  config["mode"] = "rule";
  config["ipv6"] = override["ipv6"];

  // 保留客户端/订阅已提供的 device、address、MTU 等平台参数。
  config["tun"] = Object.assign({}, config["tun"] || {}, override["tun"]);
  config["dns"] = override["dns"];
  config["rule-providers"] = override["rule-providers"];
  config["proxy-groups"] = override["proxy-groups"];
  config["rules"] = override["rules"];

  return config;
};
