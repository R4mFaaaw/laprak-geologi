const lessons = [
 {id:1,title:"Pengantar Geologi Struktur",desc:"Mengenal bentuk, geometri, dan deformasi batuan.",symbol:"⌁",body:"Geologi struktur mempelajari geometri, distribusi, orientasi, dan pembentukan struktur batuan akibat gaya atau tegasan pada kerak bumi. Pengamatan dilakukan pada hubungan bidang dan garis geologi, lalu digunakan untuk menafsirkan proses deformasi.",key:"Deformasi batuan dapat bersifat elastis, rapuh, atau duktil.",application:"Dalam pertambangan, struktur geologi memengaruhi kontinuitas lapisan, bentuk endapan, kestabilan lereng, arah penggalian, dan jalur aliran air tanah."},
 {id:2,title:"Simbol Struktur Geologi",desc:"Membaca lambang pada peta geologi.",symbol:"⌖",body:"Simbol struktur geologi adalah tanda pada peta untuk menggambarkan bentuk, arah, dan posisi struktur batuan. Contohnya simbol strike and dip, kekar, sesar normal, sesar naik, sesar mendatar, antiklin, dan sinklin.",key:"Simbol membantu menyajikan informasi lapangan secara ringkas dan seragam.",application:"Peta dengan simbol yang benar membantu tim eksplorasi membaca hubungan antarstruktur dan merencanakan pemetaan."},
 {id:3,title:"Struktur Garis & Bidang",desc:"Membedakan unsur geometri geologi.",symbol:"／",body:"Struktur geologi dapat direpresentasikan sebagai unsur garis dan unsur bidang. Struktur bidang memiliki orientasi permukaan, sedangkan struktur garis menunjukkan arah suatu unsur linear pada batuan.",key:"Jurus dan kemiringan digunakan untuk menyatakan orientasi suatu bidang.",application:"Pengukuran orientasi membantu membuat peta dan penampang geologi."},
 {id:4,title:"Foliasi",desc:"Mengenali susunan planar pada batuan.",symbol:"≋",body:"Foliasi merupakan kenampakan planar atau kesejajaran mineral/tekstur pada batuan yang berkaitan dengan deformasi dan metamorfisme. Dalam pengenalan struktur, foliasi dicatat sebagai salah satu unsur struktur bidang.",key:"Ingat: foliasi berkaitan dengan tekstur planar pada batuan.",application:"Pengenalan foliasi dapat membantu memahami fabric batuan dan arah deformasi."},
 {id:5,title:"Kekar",desc:"Rekahan tanpa pergeseran berarti.",symbol:"⌁",body:"Kekar merupakan rekahan atau retakan pada batuan akibat tekanan, tarikan, atau perubahan kondisi geologi. Pada kekar tidak terdapat pergeseran yang berarti antara kedua sisi batuan. Kekar dapat terbentuk karena aktivitas tektonik, pendinginan magma, atau pengurangan tekanan akibat erosi.",key:"Kekar = rekahan tanpa pergeseran yang berarti.",application:"Kekar dapat memengaruhi kekuatan massa batuan dan menjadi jalur masuk air."},
 {id:6,title:"Sesar",desc:"Patahan batuan yang mengalami pergeseran.",symbol:"↗",body:"Sesar adalah rekahan atau patahan pada batuan yang disertai pergeseran relatif antara satu blok dan blok lainnya. Berdasarkan arah gerak, laporan membahas sesar turun, sesar naik, dan sesar mendatar.",key:"Pembeda utama sesar dari kekar adalah adanya pergeseran relatif.",application:"Sesar dapat mengubah posisi lapisan dan menjadi pertimbangan penting untuk kestabilan lereng serta desain tambang."},
 {id:7,title:"Sesar Turun, Naik & Mendatar",desc:"Mengenali gerak blok pada bidang sesar.",symbol:"⇵",body:"Sesar turun (normal) terbentuk oleh gaya tarikan; hangingwall bergerak turun relatif terhadap footwall. Sesar naik terbentuk oleh gaya tekan; hangingwall bergerak naik relatif terhadap footwall. Sesar mendatar terbentuk oleh gaya geser dan pergeseran dominan horizontal, dapat dekstral (kanan) atau sinistral (kiri).",key:"Normal = hangingwall turun. Reverse = hangingwall naik. Strike-slip = geser mendatar.",application:"Jenis sesar membantu menafsirkan tegasan dan geometri struktur di area tambang."},
 {id:8,title:"Lipatan: Antiklin & Sinklin",desc:"Membaca lengkungan lapisan batuan.",symbol:"∿",body:"Lipatan adalah pembengkokan lapisan batuan akibat tekanan tektonik. Antiklin melengkung ke atas dan batuan tertua berada di inti. Sinklin melengkung ke bawah dan batuan termuda berada di inti. Bagian lipatan meliputi sayap (limb), sumbu lipatan (fold axis), dan bidang sumbu (axial plane).",key:"Antiklin: tua di inti. Sinklin: muda di inti.",application:"Lipatan dapat mengubah geometri dan kedalaman lapisan pembawa bahan galian."},
 {id:9,title:"Problema Tiga Titik",desc:"Menentukan jurus dan kemiringan bidang.",symbol:"△",body:"Problema tiga titik digunakan untuk menentukan arah jurus (strike) dan besar kemiringan (dip) suatu lapisan berdasarkan tiga titik pengamatan dengan ketinggian berbeda. Ketiga titik harus berada pada lapisan yang sama. Metode menghubungkan titik dan menentukan garis berketinggian sama.",key:"Syarat penting: tiga titik berada pada lapisan batuan yang sama.",application:"Dipakai untuk mengetahui orientasi lapisan dan menggambarkannya pada peta geologi."},
 {id:10,title:"Jurus & Kemiringan Semu",desc:"Memahami orientasi bidang batuan.",symbol:"∠",body:"Jurus (strike) adalah arah garis horizontal pada suatu bidang. Kemiringan sejati (true dip) adalah sudut maksimum bidang terhadap horizontal, diukur tegak lurus jurus. Kemiringan semu diukur pada arah selain tegak lurus jurus.",key:"Kemiringan semu selalu lebih kecil atau sama dengan kemiringan sejati.",application:"Penting saat membaca penampang yang tidak searah kemiringan sejati."},
 {id:11,title:"Kedalaman & Ketebalan",desc:"Mengukur posisi dan ukuran lapisan.",symbol:"↕",body:"Kedalaman adalah jarak vertikal dari permukaan tanah atau titik pengamatan menuju lapisan di bawah permukaan. Ketebalan adalah jarak antara batas atas dan bawah lapisan yang diukur tegak lurus bidang perlapisan.",key:"Ketebalan diukur tegak lurus bidang perlapisan, bukan selalu vertikal.",application:"Keduanya membantu pemetaan, eksplorasi, dan pemahaman kondisi bawah permukaan."},
 {id:12,title:"Singkapan & Diagram Palmer",desc:"Menyajikan sebaran, ketebalan, dan kedalaman.",symbol:"▥",body:"Grafik penyebaran singkapan menyajikan pola dan distribusi singkapan dari pengamatan lapangan. Diagram Palmer pada laporan digunakan untuk menggambarkan hubungan hasil pengukuran ketebalan dan kedalaman lapisan batuan.",key:"Diagram Palmer pada laporan menghubungkan ketebalan dan kedalaman.",application:"Penyajian data yang sistematis membantu interpretasi posisi lapisan dan kondisi bawah permukaan."}
];
const questions = [
 {q:"Apa yang dipelajari dalam geologi struktur?",a:["Geometri dan deformasi struktur batuan","Komposisi kimia air laut","Klasifikasi awan","Siklus hidup tumbuhan"],c:0,e:"Geologi struktur mempelajari geometri, distribusi, orientasi, dan pembentukan struktur batuan."},
 {q:"Rekahan tanpa pergeseran yang berarti disebut ...",a:["Sesar","Kekar","Sinklin","Antiklin"],c:1,e:"Kekar adalah rekahan pada batuan tanpa pergeseran yang berarti."},
 {q:"Pada sesar turun, hangingwall bergerak ...",a:["Naik relatif","Turun relatif","Mendatar saja","Tidak bergerak"],c:1,e:"Pada sesar normal/turun, hangingwall bergerak turun relatif terhadap footwall."},
 {q:"Batuan tertua pada lipatan antiklin berada di ...",a:["Sayap","Permukaan","Inti lipatan","Bidang sesar"],c:2,e:"Ciri antiklin dalam laporan: batuan tertua berada di bagian inti."},
 {q:"Batuan termuda pada lipatan sinklin berada di ...",a:["Inti lipatan","Sayap luar","Footwall","Bidang horizontal"],c:0,e:"Sinklin melengkung ke bawah dengan batuan termuda pada bagian inti."},
 {q:"Apa syarat tiga titik untuk problema tiga titik?",a:["Berbeda jenis batuan","Berada pada lapisan yang sama","Harus satu garis lurus","Berada di elevasi sama"],c:1,e:"Ketiga titik pengamatan harus berada pada lapisan batuan yang sama."},
 {q:"Kemiringan semu dibanding kemiringan sejati bernilai ...",a:["Selalu lebih besar","Selalu 90°","Lebih kecil atau sama","Selalu sama"],c:2,e:"Kemiringan semu memiliki nilai lebih kecil atau sama dengan kemiringan sebenarnya."},
 {q:"Ketebalan lapisan diukur ...",a:["Tegak lurus bidang perlapisan","Sejajar jurus","Vertikal selalu","Sejajar permukaan tanah"],c:0,e:"Ketebalan merupakan jarak antara batas lapisan yang diukur tegak lurus bidang perlapisan."},
 {q:"Sesar mendatar berkaitan dengan gaya ...",a:["Tarikan","Tekan","Geser","Gravitasi saja"],c:2,e:"Sesar mendatar terjadi akibat gaya geser dan perpindahan dominan horizontal."},
 {q:"Kekar dapat menjadi ...",a:["Jalur masuk air","Lapisan termuda","Sumbu lipatan","Kompas geologi"],c:0,e:"Kekar dapat menjadi jalur masuk air dan memengaruhi kekuatan massa batuan."},
 {q:"Jarak vertikal menuju lapisan di bawah permukaan disebut ...",a:["Jurus","Kedalaman","Ketebalan","Foliasi"],c:1,e:"Kedalaman adalah jarak vertikal dari permukaan atau titik pengamatan ke lapisan bawah permukaan."},
 {q:"Simbol struktur geologi digunakan untuk ...",a:["Menghias peta","Menunjukkan bentuk, arah, posisi struktur","Menentukan umur manusia","Mengukur curah hujan"],c:1,e:"Simbol menyajikan bentuk, arah, dan posisi struktur batuan pada peta."}
];
const flashcards = [
 ["Apa itu geologi struktur?","Ilmu yang mempelajari geometri, distribusi, orientasi, dan pembentukan struktur batuan akibat tegasan."],
 ["Apa itu kekar?","Rekahan pada batuan tanpa pergeseran yang berarti antara kedua sisinya."],
 ["Apa itu sesar?","Rekahan/patahan batuan yang disertai pergeseran relatif antarblok."],
 ["Apa ciri antiklin?","Lipatan melengkung ke atas dengan batuan tertua di bagian inti."],
 ["Apa ciri sinklin?","Lipatan melengkung ke bawah dengan batuan termuda di bagian inti."],
 ["Apa itu kemiringan semu?","Sudut kemiringan bidang yang diukur pada arah selain tegak lurus jurus."],
 ["Apa itu footwall?","Blok batuan yang berada di bawah bidang sesar."],
 ["Apa itu hangingwall?","Blok batuan yang berada di atas bidang sesar."]
];
const state = JSON.parse(localStorage.getItem("geogarden-riana") || '{"done":[],"xp":0,"correct":0}');
const save = () => localStorage.setItem("geogarden-riana",JSON.stringify(state));
const $ = s => document.querySelector(s);
function updateStats(){
 $("#statLessons").textContent=`${state.done.length} / ${lessons.length}`;
 $("#statXp").textContent=`${state.xp} XP`; $("#statCorrect").textContent=state.correct;
 const pct=Math.round(state.done.length/lessons.length*100);
 $("#overallBar").style.width=pct+"%"; $("#overallText").textContent=pct+"% perjalanan selesai";
 $("#lessonGrid").innerHTML=lessons.map(l=>`<button class="lesson-card" data-lesson="${l.id}"><div class="lesson-top"><span class="lesson-number">TOPIK ${String(l.id).padStart(2,"0")}</span><span class="lesson-symbol">${l.symbol}</span></div><h3>${l.title}</h3><p>${l.desc}</p><span class="lesson-status">${state.done.includes(l.id)?"✓ SUDAH DIPELAJARI":"BACA MATERI →"}</span></button>`).join("");
}
function award(n=5){state.xp+=n;save();updateStats()}
function openLesson(id){
 const l=lessons.find(x=>x.id===id); $("#lessonContent").innerHTML=`<div class="panel-kicker">TOPIK ${String(l.id).padStart(2,"0")} · GEOLOGY NOTES</div><h2>${l.title}</h2><p>${l.body}</p><div class="key-note"><b>Ingat ini:</b><br>${l.key}</div><h3>Hubungannya dengan pertambangan</h3><p>${l.application}</p><div class="panel-actions"><button class="small-button" id="markLesson">${state.done.includes(id)?"Sudah dipelajari ✓":"Tandai sudah dipelajari"}</button><button class="outline-button" id="lessonQuiz">Latihan topik ini</button></div>`;
 $("#lessonDialog").showModal();
 $("#markLesson").onclick=()=>{if(!state.done.includes(id)){state.done.push(id);award(10)}else updateStats();$("#markLesson").textContent="Sudah dipelajari ✓";};
 $("#lessonQuiz").onclick=()=>{$("#lessonDialog").close();startQuiz("multiple",id)};
}
$("#lessonGrid").addEventListener("click",e=>{const b=e.target.closest("[data-lesson]");if(b)openLesson(+b.dataset.lesson)});
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>$("#lessonDialog").close());
$("#resetProgress").onclick=()=>{if(confirm("Hapus semua progres belajar Riana di browser ini?")){state.done=[];state.xp=0;state.correct=0;save();updateStats()}};
let quizState=null;
function startQuiz(type,lessonId){
 let pool=questions.slice();
 if(lessonId){const map={1:[0],2:[11],5:[1,9],6:[8],7:[2,8],8:[3,4],9:[5],10:[6],11:[7],12:[11]};pool=pool.filter((q,i)=>(map[lessonId]||[]).includes(i));}
 if(type==="truefalse")pool=pool.map(q=>({q:q.q,a:["Benar","Salah"],c:0,e:q.e,tf:true}));
 if(type==="exam")pool=pool.sort(()=>Math.random()-.5).slice(0,10);
 else pool=pool.sort(()=>Math.random()-.5).slice(0, type==="multiple"?5:4);
 if(type==="flash"){startFlash();return}
 quizState={pool,index:0,score:0,answered:false,type};renderQuestion();
}
function renderQuestion(){
 const p=quizState.pool[quizState.index];if(!p){$("#quizPanel").innerHTML=`<div class="panel-kicker">SELESAI!</div><h2 class="panel-question">Kamu berhasil menyelesaikan latihan.</h2><p class="feedback">Skor: ${quizState.score} dari ${quizState.pool.length}. Terus berlatih, Riana!</p><button class="small-button" id="againQuiz">Coba lagi</button>`;$("#againQuiz").onclick=()=>startQuiz(quizState.type);award(quizState.score*5+5);return}
 quizState.answered=false;
 $("#quizPanel").classList.remove("hidden");
 $("#quizPanel").innerHTML=`<div class="panel-kicker">QUESTION ${quizState.index+1} / ${quizState.pool.length}</div><div class="panel-question">${p.q}</div><div class="answer-list">${p.a.map((a,i)=>`<button class="answer-option" data-answer="${i}">${String.fromCharCode(65+i)}. ${a}</button>`).join("")}</div><div class="feedback" id="feedback"></div><div class="panel-actions"><button class="small-button hidden" id="nextQuestion">Lanjutkan →</button><button class="outline-button" id="closeQuiz">Tutup</button></div>`;
 $("#quizPanel").querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>answer(+b.dataset.answer));
 $("#nextQuestion").onclick=()=>{quizState.index++;renderQuestion()};
 $("#closeQuiz").onclick=()=>$("#quizPanel").classList.add("hidden");
}
function answer(i){if(quizState.answered)return;quizState.answered=true;const p=quizState.pool[quizState.index];const ok=i===p.c;if(ok){quizState.score++;state.correct++;save();updateStats()}$("#quizPanel").querySelectorAll("[data-answer]").forEach((b,n)=>{b.disabled=true;if(n===p.c)b.classList.add("correct");if(n===i&&!ok)b.classList.add("wrong")});$("#feedback").textContent=(ok?"Tepat sekali! ":"Belum tepat. ")+p.e;$("#nextQuestion").classList.remove("hidden")}
function startFlash(){let i=0,show=false;const render=()=>{$("#quizPanel").classList.remove("hidden");$("#quizPanel").innerHTML=`<div class="panel-kicker">FLASHCARD ${i+1} / ${flashcards.length}</div><div class="flashcard" id="flashFace">${show?flashcards[i][1]:flashcards[i][0]}<small style="display:block;font:600 10px 'DM Sans';color:#8aafc5;margin-top:15px">${show?"KLIK UNTUK KEMBALI":"Klik kartu untuk melihat jawaban"}</small></div><div class="panel-actions"><button class="outline-button" id="prevFlash">Sebelumnya</button><button class="small-button" id="nextFlash">${i===flashcards.length-1?"Selesai":"Berikutnya"}</button></div>`;$("#flashFace").onclick=()=>{show=!show;render()};$("#prevFlash").onclick=()=>{i=Math.max(0,i-1);show=false;render()};$("#nextFlash").onclick=()=>{if(i===flashcards.length-1){award(10);$("#quizPanel").classList.add("hidden")}else{i++;show=false;render()}}};render()}
document.querySelectorAll("[data-quiz]").forEach(b=>b.onclick=()=>startQuiz(b.dataset.quiz));
let gameCleanup=null;
function gamePanel(html){$("#gamePanel").classList.remove("hidden");$("#gamePanel").innerHTML=html}
document.querySelectorAll("[data-game]").forEach(b=>b.onclick=()=>startGame(b.dataset.game));
function startGame(type){
 if(gameCleanup){gameCleanup();gameCleanup=null}
 if(type==="structure"){
 const items=[{name:"Antiklin",desc:"Lapisan melengkung ke atas; batuan tertua di inti."},{name:"Sinklin",desc:"Lapisan melengkung ke bawah; batuan termuda di inti."},{name:"Sesar",desc:"Rekahan dengan pergeseran relatif antarblok."},{name:"Kekar",desc:"Rekahan tanpa pergeseran yang berarti."}];
 let n=0,score=0;const draw=()=>{if(n>=items.length){gamePanel(`<h2>Permainan selesai!</h2><p class="feedback">Benar ${score} dari ${items.length}. Kamu mendapat ${score*5+5} XP.</p><button class="small-button" id="restartGame">Main lagi</button>`);award(score*5+5);$("#restartGame").onclick=()=>startGame(type);return}
 let item=items[n];let options=items.map(x=>x.name).sort(()=>Math.random()-.5);gamePanel(`<div class="panel-kicker">GAME 01 · KENALI STRUKTUR</div><div class="panel-question">${item.desc}</div><div class="answer-list">${options.map(x=>`<button class="answer-option" data-pick="${x}">${x}</button>`).join("")}</div><div class="feedback" id="gameFeedback"></div>`);$("#gamePanel").querySelectorAll("[data-pick]").forEach(b=>b.onclick=()=>{if($("#gameFeedback").textContent)return;const ok=b.dataset.pick===item.name;if(ok)score++;$("#gameFeedback").textContent=ok?"Benar! Bagus, Riana.":`Jawaban tepat: ${item.name}.`;setTimeout(()=>{n++;draw()},850)})};draw();
 } else if(type==="match"){
 const pairs=[["Kekar","Rekahan tanpa pergeseran berarti"],["Sesar","Rekahan disertai pergeseran"],["Antiklin","Lipatan dengan batuan tertua di inti"],["Sinklin","Lipatan dengan batuan termuda di inti"]];
 let selected=[],matched=[];const all=pairs.flatMap((p,i)=>[{id:i,side:0,text:p[0]},{id:i,side:1,text:p[1]}]).sort(()=>Math.random()-.5);
 const draw=()=>{gamePanel(`<div class="panel-kicker">GAME 02 · PASANGKAN ISTILAH</div><p class="feedback">Pilih satu istilah, lalu pilih penjelasan yang cocok.</p><div class="match-grid">${all.map((x,i)=>`<button class="match-item ${matched.includes(x.id)?"matched":""} ${selected.includes(i)?"selected":""}" data-match="${i}" ${matched.includes(x.id)?"disabled":""}>${x.text}</button>`).join("")}</div><div class="feedback" id="matchFeedback">${matched.length===4?"Semua pasangan benar! Hebat.":matched.length+" / 4 pasangan ditemukan."}</div>`);$("#gamePanel").querySelectorAll("[data-match]").forEach(b=>b.onclick=()=>{let i=+b.dataset.match;if(selected.includes(i))return;selected.push(i);if(selected.length===2){let a=all[selected[0]],c=all[selected[1]];if(a.id===c.id&&a.side!==c.side){matched.push(a.id);award(5)}else{$("#matchFeedback").textContent="Belum cocok, coba lagi."}selected=[];setTimeout(draw,500)}else draw()})};draw();
 } else {
 let n=0,score=0;const pool=questions.slice().sort(()=>Math.random()-.5).slice(0,6);
 const draw=()=>{if(n>=pool.length){gamePanel(`<h2>Ronda selesai!</h2><p class="feedback">Skor kamu ${score}/${pool.length}. XP bertambah ${score*5}.</p><button class="small-button" id="restartGame">Main lagi</button>`);award(score*5);$("#restartGame").onclick=()=>startGame(type);return}
 let q=pool[n];gamePanel(`<div class="panel-kicker">GAME 03 · RONDA INGATAN</div><div class="panel-question">${q.q}</div><div class="answer-list">${q.a.map((x,i)=>`<button class="answer-option" data-fast="${i}">${x}</button>`).join("")}</div><div class="feedback">Pertanyaan ${n+1} dari ${pool.length}</div>`);$("#gamePanel").querySelectorAll("[data-fast]").forEach(b=>b.onclick=()=>{if(b.disabled)return;const ok=+b.dataset.fast===q.c;if(ok)score++;$("#gamePanel").querySelectorAll("[data-fast]").forEach(x=>x.disabled=true);b.classList.add(ok?"correct":"wrong");setTimeout(()=>{n++;draw()},650)})};draw();
 }
 $("#gamePanel").scrollIntoView({behavior:"smooth",block:"center"});
}
updateStats();
