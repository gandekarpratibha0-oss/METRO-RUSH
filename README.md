# Metro Rush

Metro Rush हा Subway Surfers प्रकारच्या endless-runner gameplay ने प्रेरित, स्वतःची पात्रे आणि visuals असलेला मराठी 3D browser game आहे. यात तीन lanes, धावत्या trains, crates, overhead barriers, coin rows, magnet आणि jetpack power-ups, score, collision, game-over आणि restart आहेत.

## चालवण्याची पद्धत

1. या folder मध्ये Node.js उपलब्ध असलेल्या संगणकावर terminal उघडा.
2. `node server.js` चालवा.
3. त्याच संगणकावर `http://127.0.0.1:8765` उघडा.
4. “खेळ सुरू करा” दाबा. Magnet coins जवळ ओढतो; Jetpack काही सेकंद obstacles वरून उडवतो.

Three.js browser मध्ये jsDelivr वरून लोड होते, त्यामुळे पहिल्या वेळी इंटरनेट जोडणी आवश्यक आहे.

## Controls

- **डावी / उजवी lane:** ← / → किंवा A / D
- **उडी:** ↑ किंवा Space
- **Slide:** ↓ किंवा S
- **मोबाईल:** swipe किंवा स्क्रीनवरील buttons

## CEO demo flow

1. Start screen आणि controls दाखवा.
2. Lane बदलून track वर धावा.
3. Crate वरून उडी मारा, overhead barrier खाली slide करा, train चुकवा आणि coin row गोळा करा.
4. Obstacle ला धडकून game-over, score आणि coins दाखवा.
5. Restart करून नवीन run सुरू करा.

## CEO च्या दुसऱ्या device वर demo

Default server `127.0.0.1` वर असल्याने तो फक्त त्याच संगणकावर उघडेल. CEO च्या device वर दाखवायचे असल्यास, विश्वासार्ह कार्यालयीन Wi-Fi वर तात्पुरता चालवू शकता:

PowerShell:

```powershell
$env:HOST = '0.0.0.0'
node server.js
```

Demo संगणकाचा local IP CEO च्या device वर browser URL म्हणून वापरा: `http://<local-IP>:8765`. Windows Firewall ने network access विचारल्यास फक्त trusted private network साठी परवानगी द्या. इंटरनेटवर सार्वजनिकपणे उपलब्ध करायचे असल्यास हा तात्पुरता server वापरू नका; static hosting निवडून deployment करा.

## मुख्य फाइल्स

- `index.html` — UI, 3D scene, gameplay आणि power-ups
- `server.js` — local demo साठीचा छोटा HTTP server
- `PRD.md` — product requirements
