queueMicrotask((()=>{
  const o = function() {
      HoldLog.apply(console, arguments)
  }
    , c = new Date("04/01/2021 00:00:00");
  now1.setTime(now1.getTime() + 250);
  const n = (now1 - c) / 1e3 / 60 / 60 / 24
    , e = ["欢迎来到知秋`Blog!", "生活明朗, 万物可爱", "\n        \n           █████╗ ███╗   ██╗███████╗██╗  ██╗██╗██╗   ██╗██╗   ██╗\n          ██╔══██╗████╗  ██║╚══███╔╝██║  ██║██║╚██╗ ██╔╝██║   ██║\n          ███████║██╔██╗ ██║  ███╔╝ ███████║██║ ╚████╔╝ ██║   ██║\n          ██╔══██║██║╚██╗██║ ███╔╝  ██╔══██║██║  ╚██╔╝  ██║   ██║\n          ██║  ██║██║ ╚████║███████╗██║  ██║██║   ██║   ╚██████╔╝\n          ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝    ╚═════╝\n        \n        ", "知秋`Blog 已上线", Math.floor(n), "天", "©2020 By 知秋"]
    , t = ["NCC2-036", "调用前置摄像头拍照成功，识别为【小笨蛋】.", "Photo captured: ", "🤪"];
  setTimeout(o.bind(console, `\n%c${e[0]} %c ${e[1]} %c ${e[2]} %c${e[3]}%c ${e[4]}%c ${e[5]}\n\n%c ${e[6]}\n`, "color:#49b1f5", "", "color:#49b1f5", "color:#49b1f5", "", "color:#49b1f5", "")),
  setTimeout(o.bind(console, `%c ${t[0]} %c ${t[1]} %c \n${t[2]} %c\n${t[3]}\n`, "color:white; background-color:#4fd953", "", "", 'background:url("https://cdn.cbd.int/anzhiyu-blog@latest/img/post/common/tinggge.gif") no-repeat;font-size:450%')),
  setTimeout(o.bind(console, "%c WELCOME %c 你好，小笨蛋.", "color:white; background-color:#4f90d9", "")),
  setTimeout(console.warn.bind(console, "%c ⚡ Powered by 知秋 %c 你正在访问 知秋 的博客.", "color:white; background-color:#f0ad4e", "")),
  setTimeout(o.bind(console, "%c W23-12 %c 你已打开控制台.", "color:white; background-color:#4f90d9", "")),
  setTimeout(console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中.", "color:white; background-color:#d9534f", ""))
}
));
