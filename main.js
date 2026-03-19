/* ============================================================
   CONSPIRACY PARODY SITE — main.js
   ============================================================ */

/* ── Modal content data ──────────────────────────────────── */

const MODALS = {
  disappearance1: {
    title: 'The 11-Day Gap',
    body: `
      <p>Between January 14th and January 25th, <span class="circle-mark">no verified photographs</span>
      of Netanyahu emerged from any source. His press office released only <strong>two statements</strong>
      — both typed, neither signed in his distinctive ink.</p>
      <p>Coincidence? The last time a sitting PM disappeared for this long was... <em>never.</em></p>
      <div class="quote-tape">
        "We reached out to the Prime Minister's office 6 times and received only automated responses."
        <cite>— Anonymous journalist (name redacted for safety)</cite>
      </div>
      <div class="modal-verdict">SUSPICION RATING: ████████░░ 80%</div>`
  },

  cancel1: {
    title: 'Three Cancellations in One Week',
    body: `
      <p>On the week of March 3rd, Netanyahu cancelled:</p>
      <ul>
        <li>A scheduled cabinet briefing (reason: "scheduling conflict")</li>
        <li>A foreign minister meeting (reason: "health precaution")</li>
        <li>A public address that had already been announced</li>
      </ul>
      <p>His spokesman gave no real explanation. Three cancellations in five days.
      This has never happened before.</p>
      <div class="modal-verdict">SUSPICION RATING: ██████░░░░ 60%</div>`
  },

  handwriting: {
    title: 'The Signature Analysis',
    body: `
      <p>A comparison of Netanyahu's signatures from 2019 to recent documents reveals
      <em>statistical anomalies</em> according to anonymous graphologists.</p>
      <p>The pen pressure appears <strong>18% lighter</strong>. The loop on the final letter is 2 mm smaller.
      The crossing on the 't' in Binyamin has shifted 4 degrees counterclockwise.</p>
      <p>What does this mean? Either he is nervous, injured, dead, OR someone else is signing for him.</p>
      <div class="modal-verdict">SUSPICION RATING: ███░░░░░░░ 30% (but VERY sus)</div>`
  },

  photo1: {
    title: 'Photo Analysis: The Ear',
    body: `
      <p>Human ears are like fingerprints — no two are identical. A forensic comparison of Netanyahu's
      left ear from a 2018 photo versus a recent press photo reveals a <strong>0.3 mm discrepancy</strong>
      in the upper helix curvature.</p>
      <p>Our anonymous AI analysis tool (free, downloaded from a Telegram channel) detected this with
      <em>99.7% confidence</em>.</p>
      <p>The only explanation: body double.</p>
      <div class="modal-verdict">SUSPICION RATING: █████░░░░░ 50% (THE EARS DON'T LIE)</div>`
  },

  photo2: {
    title: 'The Blinking Pattern',
    body: `
      <p>In a 4-minute televised speech, Netanyahu blinked <strong>247 times</strong>. The average human
      blinks 15–20 times per minute, putting the expected range at 60–80 blinks.</p>
      <p>247 blinks. This is <em>three times the normal rate.</em></p>
      <p>Excessive blinking is a known stress indicator, ALSO a known sign that someone is reading a script
      under duress, AND ALSO possibly a sign that the person is a body double wearing uncomfortable contact
      lenses to change their eye color.</p>
      <div class="modal-verdict">SUSPICION RATING: ███████░░░ 70%</div>`
  },

  photo3: {
    title: 'Shadow Inconsistency',
    body: `
      <p>In a photo taken at 2:14 PM local time, Netanyahu's shadow falls at approximately a 42° angle.</p>
      <p>We calculated that given the GPS coordinates of Jerusalem, the date, and atmospheric refraction,
      the shadow should fall at <strong>41.3°</strong>.</p>
      <p>That is a 0.7-degree discrepancy. In a real photo, this would not happen. This photo is
      <em>composited</em>.</p>
      <div class="modal-verdict">SUSPICION RATING: ██░░░░░░░░ 20% (but 0.7 degrees!!!)</div>`
  },

  headline1: {
    title: "Why Won't They Just Say He's Alive?",
    body: `
      <p>Notice how no major outlet has run a headline saying "Netanyahu Is Alive And Well." They report on
      what he supposedly <em>did</em>, but never confirm basic existence.</p>
      <p>This is called <strong>plausible deniability by omission</strong>.</p>
      <p>If he is so alive, why not just SHOW us? Where is the livestream? One (1) livestream would settle
      this.</p>
      <div class="modal-verdict">CONCLUSION: MSM IS COMPLICIT</div>`
  },

  headline2: {
    title: 'The Wikipedia Edit',
    body: `
      <p>At 3:47 AM on a Tuesday, Netanyahu's Wikipedia page was edited 11 times in 4 minutes. The edits
      were made by accounts with names like "RealEditor45" and "WikiPatrol_2."</p>
      <p>Among the edits: the word "is" was changed from present tense in one sentence. It was changed back
      within minutes.</p>
      <p>Covering their tracks? You decide.</p>
      <div class="modal-verdict">VERY SUSPICIOUS: ████████████ 100%</div>`
  },

  headline3: {
    title: 'The AI-Generated Press Photo Theory',
    body: `
      <p>Using a free reverse image search tool, we found that Netanyahu's most recent "official" press photo
      has metadata showing it was created with Adobe Photoshop. PHOTOSHOP.</p>
      <p>Why would a real photograph need Photoshop? Checkmate.</p>
      <p><em>(Note: all professional photographs are edited in Photoshop. This does not deter us.)</em></p>
      <div class="modal-verdict">THEY EDITED THE PHOTO: CONFIRMED</div>`
  },

  logic1: {
    title: 'The Full Logic Chain',
    body: `
      <p>This is irrefutable. Every step follows from the last with cold, mathematical precision.</p>
      <ul>
        <li>He was seen less frequently</li>
        <li>Less frequency = hiding something</li>
        <li>Why hide? Guilt OR death</li>
        <li>If guilt: about what? Probably being dead</li>
        <li>Being dead is consistent with being dead</li>
        <li>Therefore: dead</li>
      </ul>
      <div class="modal-verdict">LOGIC: AIRTIGHT</div>`
  },

  doppelganger: {
    title: 'The Body Double Theory',
    body: `
      <p>It is well established that multiple world leaders employ body doubles. Saddam Hussein had at least 4.
      Therefore, Netanyahu could have a body double. Therefore, any sighting could be the double. Therefore,
      any sighting is suspect. Therefore, we cannot confirm he is alive. Q.E.D.</p>
      <p><strong>Known facts about body doubles:</strong></p>
      <ul>
        <li>They exist (Saddam had them)</li>
        <li>Netanyahu could have one</li>
        <li>The ear looks slightly different (see Exhibit B-1)</li>
      </ul>
      <div class="modal-verdict">BODY DOUBLE: PLAUSIBLE</div>`
  },

  debunk1: {
    title: 'Why Debunking Makes It More Sus',
    body: `
      <p>They say: "He gave a press conference on Tuesday."</p>
      <p>We say: Prove the Tuesday is real. How do you know it was Tuesday? The press conference recording
      could be from any day. Was it live? "Live" can be faked. Your "Tuesday" is showing.</p>
      <div class="modal-verdict">DEBUNK ATTEMPT: FAILED</div>`
  },

  debunk2: {
    title: 'Why Fact-Checkers Are Suspicious',
    body: `
      <p>The fact-checker article about this very topic was written by a journalist who has previously written
      factual articles about other things. This journalist is therefore part of the establishment.</p>
      <p>Also the fact-checking site has advertisers. Follow the money.</p>
      <div class="modal-verdict">FACT CHECKERS: COMPROMISED</div>`
  },

  debunk3: {
    title: 'Why Being Alive Is Suspicious',
    body: `
      <p>They say he's alive. But what if being "alive" is exactly what a dead person would want you to
      believe?</p>
      <p>Think about it. If you were dead and wanted to continue governing, you would DEFINITELY arrange for
      people to say you are alive. The cover story is perfect. Too perfect.</p>
      <div class="modal-verdict">ALIVE = THE PERFECT COVER STORY</div>`
  }
};

/* ── Modal helpers ───────────────────────────────────────── */

function openModal(id) {
  const data = MODALS[id];
  if (!data) return;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-body').innerHTML = data.body;
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

/* ── Wire up all data-modal cards ────────────────────────── */

document.querySelectorAll('[data-modal]').forEach(el => {
  el.addEventListener('click', () => openModal(el.dataset.modal));
});

document.getElementById('modal-close').addEventListener('click', closeModal);

document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});

/* ── Visitor counter ─────────────────────────────────────── */

let visitors = 1337042;
setInterval(() => {
  visitors += Math.floor(Math.random() * 3);
  document.getElementById('visitor-count').textContent = visitors.toLocaleString();
}, 3000);

/* ── Plausibility meter ──────────────────────────────────── */

setTimeout(() => {
  document.getElementById('plausibility-bar').style.width = '73%';
  document.getElementById('plausibility-val').textContent = '73% — HIGHLY SUSPICIOUS';
}, 800);

/* ── Fake countdown (counts up from a large number) ─────── */

let fakeSeconds = 847293;

function updateCountdown() {
  const h = Math.floor(fakeSeconds / 3600);
  const m = Math.floor((fakeSeconds % 3600) / 60);
  const s = fakeSeconds % 60;
  document.getElementById('countdown').textContent =
    String(h).padStart(2, '0') + ':' +
    String(m).padStart(2, '0') + ':' +
    String(s).padStart(2, '0');
  fakeSeconds++;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ── Redacted text toggle ────────────────────────────────── */

document.querySelectorAll('.redacted').forEach(el => {
  el.addEventListener('click', e => {
    e.stopPropagation();
    const revealed = el.classList.toggle('revealed');
    el.textContent = revealed ? el.dataset.text : el.dataset.text.replace(/./g, '█');
  });
});

/* ── Red string SVG ──────────────────────────────────────── */

function drawStrings() {
  const svg = document.getElementById('strings-svg');
  svg.innerHTML = '';

  const cards = document.querySelectorAll(
    '.note-card, .photo-card, .headline-card, .logic-chain, .countdown-card'
  );
  const positions = [];

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    positions.push({
      x: rect.left + window.scrollX + rect.width / 2,
      y: rect.top  + window.scrollY + 10
    });
  });

  const pairs = [
    [0,3],[1,4],[2,5],[3,6],[0,7],[4,8],[1,6],[5,9],[2,8]
  ];

  pairs.forEach(([a, b]) => {
    if (!positions[a] || !positions[b]) return;
    const p1 = positions[a];
    const p2 = positions[b];
    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2 + 40;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${p1.x} ${p1.y} Q ${mx} ${my} ${p2.x} ${p2.y}`);
    path.setAttribute('stroke', '#cc3300');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('fill', 'none');
    path.setAttribute('opacity', '0.55');
    svg.appendChild(path);
  });
}

setTimeout(drawStrings, 400);
window.addEventListener('resize', drawStrings);
