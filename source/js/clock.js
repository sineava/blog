function getIpInfo() {
  fetch("https://restapi.amap.com/v3/ip?key=e2b04289e870b005374ee030148d64fd&s=rsv3").then((c=>c.json())).then((c=>{
      fetch(`https://devapi.qweather.com/v7/weather/now?location=${c.rectangle.split(";")[0]}&key=b16a1fa0e63c46a4b8f28abfb06ae3fe`).then((c=>c.json())).then((e=>{
          if (document.getElementById("hexo_electric_clock")) {
              var a = c
                , s = e
                , n = document.getElementById("hexo_electric_clock");
              let r = "#000";
              switch (s.now.icon) {
              case "100":
                  r = "#fdcc45";
                  break;
              case "101":
                  r = "#fe6976";
                  break;
              case "102":
              case "103":
                  r = "#fe7f5b";
                  break;
              case "104":
              case "150":
              case "151":
              case "152":
              case "153":
              case "154":
              case "800":
              case "801":
              case "802":
              case "803":
              case "804":
              case "805":
              case "806":
              case "807":
                  r = "#2152d1";
                  break;
              case "300":
              case "301":
              case "305":
              case "306":
              case "307":
              case "308":
              case "309":
              case "310":
              case "311":
              case "312":
              case "313":
              case "314":
              case "315":
              case "316":
              case "317":
              case "318":
              case "350":
              case "351":
              case "399":
                  r = "#49b1f5";
                  break;
              case "302":
              case "303":
              case "304":
                  r = "#fdcc46";
                  break;
              case "400":
              case "401":
              case "402":
              case "403":
              case "404":
              case "405":
              case "406":
              case "407":
              case "408":
              case "409":
              case "410":
              case "456":
              case "457":
              case "499":
                  r = "#a3c2dc";
                  break;
              case "500":
              case "501":
              case "502":
              case "503":
              case "504":
              case "507":
              case "508":
              case "509":
              case "510":
              case "511":
              case "512":
              case "513":
              case "514":
              case "515":
                  r = "#97acba";
                  break;
              case "900":
              case "999":
                  r = "red";
                  break;
              case "901":
                  r = "#179fff;"
              }
              clock_box_html = `\n            <div class="clock-row">\n              <span id="card-clock-clockdate" class="card-clock-clockdate"></span>\n              <span class="card-clock-weather"><i class="qi-${s.now.icon}-fill" style="color: ${r}"></i> ${s.now.text} <span>${s.now.temp}</span> ℃</span>\n              <span class="card-clock-humidity">💧 ${s.now.humidity}%</span>\n            </div>\n            <div class="clock-row">\n              <span id="card-clock-time" class="card-clock-time"></span>\n            </div>\n            <div class="clock-row">\n              <span class="card-clock-windDir"> <i class="qi-gale"></i> ${s.now.windDir}</span>\n              <span class="card-clock-location">${a.city}</span>\n              <span id="card-clock-dackorlight" class="card-clock-dackorlight"></span>\n            </div>\n            `;
              var t = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
              function o() {
                  var c, e = new Date, a = l(e.getHours(), 2) + ":" + l(e.getMinutes(), 2) + ":" + l(e.getSeconds(), 2), s = l(e.getFullYear(), 4) + "-" + l(e.getMonth() + 1, 2) + "-" + l(e.getDate(), 2) + " " + t[e.getDay()], n = e.getHours();
                  if (n > 12 ? (n -= 12,
                  c = " P M") : c = " A M",
                  document.getElementById("card-clock-time")) {
                      var o = document.getElementById("card-clock-time")
                        , r = document.getElementById("card-clock-clockdate")
                        , d = document.getElementById("card-clock-dackorlight");
                      o.innerHTML = a,
                      r.innerHTML = s,
                      d.innerHTML = c
                  }
              }
              function l(c, e) {
                  for (var a = "", s = 0; s < e; s++)
                      a += "0";
                  return (a + c).slice(-e)
              }
              document.getElementById("card-clock-loading").innerHTML = "",
              n.innerHTML = clock_box_html;
              setInterval(o, 1e3);
              o()
          }
      }
      ))
  }
  ))
}
getIpInfo();
