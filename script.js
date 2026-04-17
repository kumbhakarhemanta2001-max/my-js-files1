<script>
    var qData = [
        { q: "ডোলেরায় SEZ অনুমোদন কোন কোম্পানির জন্য দেওয়া হয়েছে?", a: "Tata Semiconductor Manufacturing", opts: ["Infosys", "Tata Motors", "Tata Semiconductor Manufacturing", "Wipro"] },
        { q: "Tata Semiconductor প্রকল্পের বিনিয়োগের পরিমাণ কত?", a: "₹91,000 কোটি", opts: ["₹50,000 কোটি", "₹75,000 কোটি", "₹91,000 কোটি", "₹1,00,000 কোটি"] },
        { q: "World Voice Day কবে পালিত হয়?", a: "16 April", opts: ["15 April", "16 April", "17 April", "18 April"] },
        { q: "World Voice Day 2026-এর থিম কী ছিল?", a: "Caring for Our Voices", opts: ["Voice for All", "Healthy Living", "Caring for Our Voices", "Speak Up"] },
        { q: "মাসিক ছুটি (Menstrual Leave) সংক্রান্ত নির্দেশ কোন আদালত দিয়েছে?", a: "Karnataka High Court", opts: ["Supreme Court", "Delhi High Court", "Karnataka High Court", "Bombay High Court"] },
        { q: "মাসিক ছুটিকে কোন অনুচ্ছেদের অধীনে মৌলিক অধিকার হিসেবে স্বীকৃতি দেওয়া হয়েছে?", a: "Article 21", opts: ["Article 14", "Article 19", "Article 21", "Article 32"] },
        { q: "Sri Guru Bhairavaikya Mandira কোথায় অবস্থিত?", a: "Karnataka", opts: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"] },
        { q: "Sri Guru Bhairavaikya Mandira কে উদ্বোধন করেন?", a: "Narendra Modi", opts: ["Draupadi Murmu", "Narendra Modi", "Amit Shah", "Rajnath Singh"] },
        { q: "bob World Lite অ্যাপটি কোন ব্যাংক চালু করেছে?", a: "Bank of Baroda", opts: ["SBI", "PNB", "Bank of Baroda", "HDFC Bank"] },
        { q: "bob World Lite কোন ধরনের ব্যবহারকারীদের জন্য তৈরি?", a: "Feature phone users", opts: ["Smartphone users", "Laptop users", "Feature phone users", "Tablet users"] },
        { q: "Bank of Baroda কোন কোম্পানির সাথে অংশীদারিত্ব করেছে?", a: "Reliance Jio", opts: ["Airtel", "Vodafone", "Reliance Jio", "BSNL"] },
        { q: "Indian Navy Commanders Conference 2026 কোথায় অনুষ্ঠিত হয়েছে?", a: "New Delhi", opts: ["Mumbai", "Chennai", "New Delhi", "Kochi"] },
        { q: "Nausena Bhawan কোথায় অবস্থিত?", a: "New Delhi", opts: ["Mumbai", "New Delhi", "Goa", "Visakhapatnam"] },
        { q: "Indian Navy Conference-এর প্রধান ফোকাস কী ছিল?", a: "Maritime Security", opts: ["Air Security", "Cyber Security", "Maritime Security", "Border Security"] },
        { q: "Women’s Candidates Tournament 2026 কে জিতেছেন?", a: "R Vaishali", opts: ["Humpy", "Harika", "R Vaishali", "Magnus Carlsen"] },
        { q: "Women’s Candidates Tournament 2026 কোথায় অনুষ্ঠিত হয়েছিল?", a: "Cyprus", opts: ["Greece", "Cyprus", "Spain", "Italy"] },
        { q: "R Vaishali কোন খেলায় বিখ্যাত?", a: "Chess", opts: ["Tennis", "Cricket", "Chess", "Badminton"] },
        { q: "Koneru Humpy কোন ক্ষেত্রে পরিচিত?", a: "Chess", opts: ["Athletics", "Chess", "Shooting", "Boxing"] },
        { q: "R Vaishali-এর জয়ের মাধ্যমে কী অর্জিত হয়েছে?", a: "World Championship qualification", opts: ["Olympic qualification", "World Cup entry", "World Championship qualification", "Asian Games medal"] },
        { q: "Indian Navy Commanders Conference 2026 শুরু হয় কবে?", a: "14 April", opts: ["12 April", "13 April", "14 April", "15 April"] }
    ];

    var curQ = 0, userScore = 0, qTimer, secLeft = 15;

    function beginQuizNow() {
        document.getElementById("start-area").style.display = "none";
        document.getElementById("quiz-main-container").style.display = "block";
        loadQuestion();
    }

    function loadQuestion() {
        if (curQ >= qData.length) { showResult(); return; }
        secLeft = 15;
        document.getElementById("timer-box").innerHTML = secLeft;
        document.getElementById("quiz-progress").innerHTML = "প্রশ্ন: " + (curQ + 1) + "/20";
        document.getElementById("main-q-text").innerHTML = qData[curQ].q;
        var optsHtml = "";
        qData[curQ].opts.forEach(opt => {
            optsHtml += `<button class="opt-btn" onclick="checkAnswer(this, '${opt}')">${opt}</button>`;
        });
        document.getElementById("main-opt-container").innerHTML = optsHtml;
        startTimer();
    }

    function startTimer() {
        clearInterval(qTimer);
        qTimer = setInterval(() => {
            secLeft--;
            document.getElementById("timer-box").innerHTML = secLeft;
            if (secLeft <= 0) { checkAnswer(null, ""); }
        }, 1000);
    }

    function checkAnswer(btn, selected) {
        clearInterval(qTimer);
        var correct = qData[curQ].a;
        var btns = document.getElementsByClassName("opt-btn");
        for (let b of btns) {
            b.disabled = true;
            if (b.innerText === correct) b.classList.add("correct-ans");
        }
        if (selected === correct) {
            userScore++;
            document.getElementById("score-val").innerText = userScore;
        } else if (btn) {
            btn.classList.add("wrong-ans");
        }
        curQ++;
        setTimeout(loadQuestion, 1500);
    }

    function showResult() {
        document.getElementById("question-area").style.display = "none";
        document.getElementById("result-area").style.display = "block";
        document.getElementById("res-score").innerText = userScore + " / 20";
    }
</script>