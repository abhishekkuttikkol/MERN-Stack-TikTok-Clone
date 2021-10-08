import "./App.css";
import Video from "./Components/Video/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://r3---sn-hxb54vo-238l.googlevideo.com/videoplayback?expire=1633709972&ei=NBtgYdyNI4rhgAfro47ICg&ip=91.193.212.60&id=o-AGBeR4LiWv67PyFtxgK1Q4nccTpu7sTGenAOsg6_uC7d&itag=18&source=youtube&requiressl=yes&mh=1F&mm=31%2C29&mn=sn-hxb54vo-238l%2Csn-n8v7kn76&ms=au%2Crdu&mv=m&mvi=3&pcm2cms=yes&pl=22&initcwndbps=728750&vprv=1&mime=video%2Fmp4&ns=C5aBgkmXfdL39nA8R5Si748G&gir=yes&clen=2238930&ratebypass=yes&dur=29.952&lmt=1631315853924674&mt=1633687544&fvip=3&fexp=24001373%2C24007246&c=WEB&txp=6310224&n=ggD2JJkXnrV-rd0rihw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAKe4EQuNY2lT5U0kACrx-0MX5-qdhfNB9US6IfDK8xFhAiEAqGW_Bp2IfhDO24ijFRIhMqari46W3PpDxbV0Luk1TR4%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAJrsbUKPu75UkWp0FESn1HcPs00Rvqqv7255jk8m41f2AiBuXgnXHDocER8aeJxwP_WhuQQQj5oqd8fO5Ir5CQ684Q%3D%3D"
          channel="Abhishek"
          description="This is a MERN stack TikTok Clone"
          song="React js  node js"
          likes={100}
          shares={200}
          messages={12}
        />
        <Video
          url="https://r1---sn-jucj-4aoe.googlevideo.com/videoplayback?expire=1633718829&ei=zT1gYcmZGYm0wwS3nL_wDw&ip=200.233.148.140&id=o-AEcoS_kMBqu62Yhu6-c1oKV6KnlniuaSQmnbm41h3U3R&itag=22&source=youtube&requiressl=yes&mh=dx&mm=31%2C29&mn=sn-jucj-4aoe%2Csn-bg0ezn7z&ms=au%2Crdu&mv=m&mvi=1&pl=20&initcwndbps=693750&vprv=1&mime=video%2Fmp4&ns=SPD5ZfzB2h9j1YJEyzcEQzwG&cnr=14&ratebypass=yes&dur=8.962&lmt=1630771335672536&mt=1633696639&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=6211224&n=-FF5gcsGquhxLKoP9nB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJLTRN6czvaDmvO3jsJJlJULfO9phQh-5jr47zAjOkecAiADzmZjiLbhCTf3CDBtjgSy3p160qAMEBfwAOMpWDpFaQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAM1k47Ldk_hl0n13SItS3UHJ6atsDcQDaFMoTV-E2bzKAiEAxaUedZUMW4C10BohmqQ0ZpgGzWNoCltuns9nftHwDSM%3D&title=Yamaha%20r6%20whatsapp%20status%20%7C%7C%20superbikes%20whatsapp%20status%20%7C%7C%20The%20last%20voyager%20r6%20%7C%7C%20%23shorts"
          channel="Abhishek"
          description="This is a Yamaha R6"
          song="Original Audio"
          likes={100}
          shares={200}
          messages={12}
        />
      </div>
    </div>
  );
}

export default App;
