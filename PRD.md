# Metro Dash — Product Requirements Document

**दस्तऐवज स्थिती:** CEO demo साठी प्रस्तावित PRD  
**आवृत्ती:** 1.0  
**दिनांक:** 1 ऑक्टोबर 2026  
**लक्ष्य demo:** 2 ऑक्टोबर 2026  
**उत्पादन:** Metro Dash — तीन-lane endless runner browser game

## 1. सारांश

Metro Dash हा endless-runner शैलीतला, स्वतःची ओळख असलेला 3D browser game आहे. खेळाडू धावत्या रेल्वेमार्गावर तीन lanes मध्ये हालचाल करतो, येणाऱ्या trains व इतर अडथळ्यांना चुकवतो, coin rows गोळा करतो आणि शक्य तितका जास्त score मिळवतो. Game चे नाव, character design आणि artwork स्वतंत्र ठेवले जातात.

CEO demo साठी उद्दिष्ट म्हणजे एका browser link वर उघडणारा, सुरुवातीपासून game-over पर्यंत पूर्ण खेळता येणारा vertical slice दाखवणे. हा demo उत्पादनाच्या संपूर्ण व्यावसायिक आवृत्तीचा पर्याय नाही. त्यातून gameplay, visual direction आणि पुढील विकासासाठीची दिशा तपासता येईल.

## 2. समस्या आणि संधी

मोबाइल गेमची कल्पना केवळ संकल्पना किंवा स्क्रीनमधून समजावणे कठीण असते. छोटा पण चालणारा 3D demo प्रत्यक्ष नियंत्रण, वेग, अडथळे आणि score दाखवतो. यामुळे stakeholder feedback लवकर मिळतो आणि उत्पादनासाठी लागणारा पुढील scope ठरवता येतो.

## 3. उत्पादनाची दृष्टी

शिकायला सोपा, पटकन सुरू होणारा endless runner तयार करणे, ज्यात प्रत्येक प्रयत्नात खेळाडूला अजून थोडे पुढे जाण्याची आणि स्वतःचा score सुधारण्याची इच्छा होईल.

**उत्पादनाचा मुख्य संदेश:** “धावा, अडथळे चुकवा, नाणी गोळा करा, पुन्हा प्रयत्न करा.”

## 4. लक्ष्य वापरकर्ते

- हलके, पटकन खेळता येणारे मोबाइल किंवा browser games खेळणारे casual players.
- 10–30 सेकंदात controls समजून घेऊ इच्छिणारे नवीन खेळाडू.
- CEO आणि stakeholders, ज्यांना gameplay loop आणि visual direction प्रत्यक्ष पाहायची आहे.

## 5. उद्दिष्टे आणि मोजमाप

### Demo उद्दिष्टे

- Link उघडल्यानंतर खेळाडूला स्पष्ट start screen दिसावी.
- पहिल्या प्रयत्नात keyboard आणि touch controls काम करावेत.
- खेळाडूला lane बदलणे, उडी, slide, obstacle collision, coin collection, score आणि restart अनुभवता यावे.
- Demo दरम्यान अनपेक्षित error शिवाय खेळ सुरू, चालू आणि पुन्हा सुरू करता यावा.

### यश मोजमाप

| मोजमाप | Demo साठी अपेक्षा |
|---|---:|
| नवीन खेळाडूने 30 सेकंदांत सुरुवात करणे | होय |
| मुख्य controls स्पष्ट असणे | होय |
| Start ते game-over पर्यंत पूर्ण loop | पूर्ण |
| Restart ने नवीन run सुरू होणे | होय |
| Score आणि coins गोळा केल्यावर बदलणे | होय |

## 6. मुख्य gameplay loop

1. खेळाडू start screen वरून खेळ सुरू करतो.
2. character आपोआप पुढे धावतो.
3. खेळाडू तीन lanes मध्ये बदलतो, उडी मारतो किंवा खाली वाकतो.
4. अडथळा चुकवल्यास धाव सुरू राहते; coin घेतल्यास score वाढतो.
5. अडथळ्याला धडक लागल्यास run संपतो आणि अंतिम score दिसतो.
6. खेळाडू पुन्हा खेळू शकतो.

## 7. आवश्यकता

### P0 — CEO demo साठी आवश्यक

- 3D perspective camera, रेल्वेचे tracks, sleepers, trackside शहर, प्रकाश व छाया.
- धावणारा 3D character आणि दिसणारे run/jump/slide motion.
- तीन स्पष्ट lanes; डावे/उजवे input वापरून lane बदलणे.
- उडी, slide, धावती train आणि किमान दोन इतर obstacle प्रकार.
- एकेक नाणे आणि coin row pickup; pickup feedback आणि score वाढ.
- Collision नंतर game-over screen, अंतिम score आणि restart.
- Keyboard controls तसेच touch/swipe controls.
- Start screen आणि खेळ सुरू असताना score HUD.
- Browser मधून local किंवा hosted URL वर चालणारा demo.

### P1 — Demo नंतरच्या सुधारणा

- सर्वोच्च score साठवणे आणि परत दाखवणे.
- Sound effects, संगीत, pause आणि settings.
- विविध character, power-ups, missions आणि unlocks.
- अधिक वैविध्यपूर्ण आणि क्रमाने वाढणारी obstacle patterns.
- Mobile browser performance tuning व वेगवेगळ्या screen आकारांवर QA.

### P2 — व्यावसायिक उत्पादनासाठी विचार

- Art pipeline आणि custom rigged character/animation.
- progression, daily rewards, economy आणि content updates.
- analytics, crash reporting, privacy review, accessibility.
- backend/cloud save किंवा leaderboard (गरज निश्चित झाल्यानंतर).
- store release, monetization आणि live operations (व्यवसाय निर्णयानंतर).

## 8. Controls

| कृती | Keyboard | Touch |
|---|---|---|
| डावी lane | डावा बाण / A | डावीकडे swipe / डावे बटण |
| उजवी lane | उजवा बाण / D | उजवीकडे swipe / उजवे बटण |
| उडी | वरचा बाण / Space | वर swipe / उडी बटण |
| Slide | खालचा बाण / S | खाली swipe / slide बटण |

## 9. स्क्रीन आणि अवस्था

1. **Start:** खेळाचे नाव, एका ओळीत उद्दिष्ट, controls आणि स्पष्ट Start action.
2. **Gameplay:** 3D scene, score, touch controls आणि सततचा forward motion.
3. **Game over:** अंतिम score, पुन्हा खेळण्याचा action.
4. **Restart:** score व game state reset करून त्वरित नवीन run.

## 10. Acceptance criteria

- [ ] Start action दाबल्यावर overlay लपतो आणि character धावू लागतो.
- [ ] तीन lanes मध्ये input नुसार गुळगुळीत हालचाल होते.
- [ ] उडीमध्ये character जमिनीपासून वर जातो आणि पुन्हा जमिनीवर येतो.
- [ ] Slide animation obstacle प्रकाराशी सुसंगतपणे obstacle चुकवते.
- [ ] Coin player lane मध्ये collect range-मध्ये आल्यास नाहीसे होते आणि score वाढतो.
- [ ] Coin row मधील घेतलेली नाणी मोजली जातात आणि उरलेली नाणी पुढे चालू राहतात.
- [ ] Train player च्या lane मध्ये collision range-मध्ये आल्यास run संपतो.
- [ ] Obstacle collision झाल्यावर gameplay थांबतो आणि final score दाखवतो.
- [ ] Restart नंतर score शून्यापासून सुरू होतो आणि जुने obstacles दिसत नाहीत.
- [ ] Keyboard व on-screen/touch controls एकाच gameplay actions चालवतात.
- [ ] Common desktop browser मध्ये scene स्पष्ट दिसते आणि page layout मोडत नाही.

## 11. Demo scope आणि मर्यादा

उद्याच्या सादरीकरणासाठी योग्य लक्ष्य **पूर्ण playable demo vertical slice** आहे. त्यात game loop आणि मुख्य controls end-to-end असावेत. Photoreal character assets, अनेक पातळ्या, account system, online leaderboard, payments आणि store-ready release यांचा समावेश या तातडीच्या demo scope मध्ये नाही.

सध्याचा prototype browser मध्ये procedural 3D meshes वापरतो. त्यामुळे तो प्रत्यक्ष 3D आहे, पण final production character art किंवा photoreal asset समजू नये. अधिक वास्तवदर्शी परिणामासाठी स्वतंत्र character model, rig, animation, environment assets आणि performance QA आवश्यक आहे.

## 12. CEO demo flow (3–5 मिनिटे)

1. Start screen आणि game ची एक-वाक्याची कल्पना दाखवा.
2. Start करून left/right lane बदल दाखवा.
3. एक jump, एक slide आणि coin pickup दाखवा.
4. मुद्दाम obstacle ला धडकून game-over व score दाखवा.
5. Restart करून loop पूर्ण असल्याचे दाखवा.
6. Feedback मागा: visual direction, target platform, art quality, content/progression, release ambition.

### Demo success signal

CEO game loop समजून controls वापरून पाहू शकतो आणि पुढील टप्प्यांसाठी स्पष्ट product निर्णय किंवा अभिप्राय देऊ शकतो.

## 13. धोके आणि उपाय

| धोका | परिणाम | उपाय |
|---|---|---|
| Browser graphics support किंवा CDN अनुपलब्ध | 3D scene उघडणार नाही | सादरीकरणापूर्वी त्याच device/browser वर link तपासा; आवश्यक असल्यास demo device निश्चित करा |
| Touch controls वेगवेगळ्या फोनवर बदलतात | input चुकू शकतो | CEO demo आधी target device वर tap/swipe तपासा |
| Procedural character अपेक्षेपेक्षा कमी realistic | दृश्य polish कमी वाटू शकतो | demo ला gameplay/visual-direction prototype म्हणून मांडावे; पुढील टप्प्यात rigged asset करावे |
| एकाच track वरचे अडथळे अवघड किंवा अन्यायकारक वाटतात | खेळ पटकन संपतो | अडथळ्यांमधील अंतर, वेग आणि collision window जुळवून demo आधी सराव करावा |
| Local server/link host device-पुरते मर्यादित | CEO च्या device वर link न उघडणे | सादरीकरण त्याच संगणकावर करा किंवा CEO च्या device वर चालेल असे hosting आधी तयार करा; URL तपासा |

## 14. पुढील टप्पे

### उद्याच्या demo आधी

- P0 acceptance criteria तपासणे.
- ठरवलेल्या browser आणि screen आकारावर gameplay तपासणे.
- 3–5 मिनिटांचा demo run आधी करून पाहणे.
- Presentation device आणि URL उपलब्ध असल्याची खात्री करणे.

### Demo नंतर

- CEO feedback आणि product निर्णय नोंदवणे.
- Target platform (web, Android, iOS) व अपेक्षित visual fidelity निश्चित करणे.
- Production estimate, milestones, art/engineering team आणि release plan तयार करणे.
- त्यानुसार पुढील PRD version व technical plan मंजूर करणे.

## 15. निर्णयासाठी CEO कडून अभिप्राय

1. अंतिम लक्ष्य platform कोणता असावा: browser, Android, iOS की अनेक?
2. प्राथमिक उद्दिष्ट: internal demo, playable web release की पूर्ण commercial mobile game?
3. अपेक्षित art direction: stylized 3D की उच्च वास्तवदर्शी 3D?
4. Monetization/online features सुरुवातीच्या release मध्ये हवेत का?
5. Production साठी वेळ, team size आणि budget ची मर्यादा काय आहे?

## 16. Implementation status

**PRD P0 implementation:** कोडमध्ये समाविष्ट.

- 3D scene, trackside शहर, lighting/shadows आणि धावणारा animated character.
- Keyboard, swipe आणि on-screen controls.
- Smooth lane change, jump, slide, train/crate/barrier obstacles, coin rows आणि score.
- Start, game-over, restart आणि browser मध्ये सर्वोत्तम score जतन करणे.
- दुसऱ्या device वर trusted local network द्वारे demo चालवण्याची ऐच्छिक पद्धत `README.md` मध्ये दिली आहे.

**बाकी:** या बदलात acceptance criteria ची manual run-through केलेली नाही. CEO च्या स्वतःच्या device वर दाखवण्यासाठी public hosting तयार केलेली नाही; त्यासाठी निवडलेली hosting destination आवश्यक आहे. Three.js सध्या jsDelivr वरून लोड होते, त्यामुळे game सुरू करताना internet जोडणी लागते.
