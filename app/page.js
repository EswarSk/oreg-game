'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {

    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "PASTE_HERE",
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "PASTE_HERE",
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "PASTE_HERE",
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "PASTE_HERE",
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "PASTE_HERE",
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "PASTE_HERE",
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "PASTE_HERE"
    };

    const DECK = [
      { id: "dj", emoji: "🎧", name: "DJ Pass", desc: "You control the aux until the next stop. No skips allowed." },
      { id: "food", emoji: "🍔", name: "Restaurant Royale", desc: "Final say on one food stop. No debate, no democracy." },
      { id: "hangry", emoji: "😤", name: "Hangry Pass", desc: "Be as grumpy as you want for 1 hour. Nobody's allowed to take offense." },
      { id: "shotgun", emoji: "🪑", name: "Shotgun Seize", desc: "Claim the front seat for one full leg of the drive." },
      { id: "snooze", emoji: "⏰", name: "Snooze Shield", desc: "15 extra minutes of sleep on departure. Zero judgment." },
      { id: "papar", emoji: "📸", name: "Paparazzi Pass", desc: "Force an immediate group photo. Everyone must pose." },
      { id: "stop", emoji: "🚻", name: "Emergency Stop", desc: "Call one bathroom/snack stop. No questions asked." },
      { id: "kara", emoji: "🎤", name: "Karaoke Commander", desc: "Pick one person - they MUST sing a full chorus." },
      { id: "veto", emoji: "🧊", name: "Chill Card", desc: "Veto one plan change. The itinerary holds." },
      { id: "throne", emoji: "🛌", name: "Backseat Throne", desc: "Claim the whole back row for one nap leg." },
      { id: "navi", emoji: "🧭", name: "Navigator's Whim", desc: "Add one detour of your choice (max 20 min)." },
      { id: "snack", emoji: "🍿", name: "Snack Tax", desc: "Take one bite/handful of anyone's snack. They cannot refuse." },
      { id: "photo-director", emoji: "🎬", name: "Photo Director", desc: "Direct one group photo pose. Everyone follows your creative vision." },
      { id: "coffee", emoji: "☕", name: "Coffee Captain", desc: "Call one coffee stop or choose the coffee order timing." },
      { id: "window", emoji: "🌲", name: "Window Claim", desc: "Claim a window seat for one drive segment." },
      { id: "weather", emoji: "🌦️", name: "Weather Wizard", desc: "Choose indoor backup or outdoor courage for one iffy-weather moment." },
      { id: "souvenir", emoji: "🧢", name: "Souvenir Scout", desc: "Pick one souvenir-shop stop or five-minute browse window." },
      { id: "silence", emoji: "🤫", name: "Quiet Mile", desc: "Declare ten peaceful minutes. Low voices, no chaos." },
      { id: "view", emoji: "🔭", name: "Viewpoint Veto", desc: "Force one scenic pull-off vote to happen immediately." },
      { id: "stretch", emoji: "🧘", name: "Stretch Break", desc: "Call a quick stretch break at the next safe stop." },
      { id: "navigator", emoji: "🗺️", name: "Map Master", desc: "Take over navigation decisions until the next planned stop." },
      { id: "dessert", emoji: "🍩", name: "Dessert Decree", desc: "Choose the dessert or sweet-stop plan once." },
      { id: "memory", emoji: "📓", name: "Memory Keeper", desc: "Make everyone share one favorite moment before the next stop." },
      { id: "wild-photo", emoji: "🤳", name: "Selfie Strike", desc: "Call an instant selfie with whoever is closest to you." },
      { id: "hydration", emoji: "💧", name: "Water Warden", desc: "Make the crew hydrate before the next long drive leg." },
      { id: "fuel-boss", emoji: "⛽", name: "Fuel Boss", desc: "Call the next fuel stop or decide who scouts gas prices." },
      { id: "anthem", emoji: "🎶", name: "Bridge Anthem", desc: "Choose the song that plays over the next bridge or viewpoint." },
      { id: "tie-breaker", emoji: "⚖️", name: "Tie Breaker", desc: "Break one tied group vote with your final call." },
      { id: "car-reset", emoji: "🧼", name: "Car Reset Pass", desc: "When the crew does a car cleanup reset, you may sit out or appoint yourself supervisor. Everyone else handles the mess." },
      { id: "story", emoji: "📣", name: "Story Time", desc: "Pick someone to tell a road-trip story before the next stop." }
    ];

    const DARES = [
      "Sing a full chorus of any song, right now",
      "Narrate the next 2 minutes of the drive like David Attenborough",
      "Speak in an accent until the next stop",
      "Tell the group your most embarrassing story",
      "Do your best impression of someone in this car",
      "Give every person in the car a genuine compliment",
      "Do 10 jumping jacks at the next stop",
      "Order in a cowboy voice at the next food stop",
      "Let the group choose your next snack - you must finish it",
      "Perform a 30-second dramatic monologue about Oregon",
      "Text your mom \"I joined a folk band\" and show the reply",
      "Do a dance at the next scenic viewpoint",
      "Recite your phone number backwards in one try",
      "Trade one wild card with the person on your left (if you have one)"
    ];

    const MISSIONS = [
      { id: "m1", title: "Group photo on the Multnomah Falls bridge", pts: 25, tag: "Multnomah Falls" },
      { id: "m2", title: "Mist-soaked selfie behind a waterfall", pts: 25, tag: "Silver Falls" },
      { id: "m3", title: "Recreate a Goonies pose", pts: 30, tag: "Astoria" },
      { id: "m4", title: "Human pyramid (or brave attempt)", pts: 30, tag: "Vista House" },
      { id: "m5", title: "Proof you touched the Pacific", pts: 20, tag: "Cannon Beach" },
      { id: "m6", title: "Weirdest tax-free purchase", pts: 15, tag: "Anywhere in Oregon" },
      { id: "m7", title: "Mt. Hood + kayak in one frame", pts: 25, tag: "Trillium Lake" },
      { id: "m8", title: "Sneaky candid of someone napping", pts: 20, tag: "The car" },
      { id: "m9", title: "Best food shot of the trip", pts: 15, tag: "Any meal" },
      { id: "free", title: "Freestyle - any moment worth keeping", pts: 10, tag: "Anywhere" }
    ];

    const OPTIONS = {
      A: {
        name: "Option A - Peaks & Paddles",
        days: [
          "Sat: Multnomah Falls -> Timberline Lodge -> Vista House -> Kayak at Trillium Lake",
          "Sun: Silver Falls -> Cannon Beach -> Astoria Bridge -> home"
        ],
        stops: [
          "Seattle - 7:00 AM roll-out",
          "Multnomah Falls",
          "Timberline Lodge",
          "Vista House, Crown Point",
          "Kayak - Trillium Lake",
          "Silver Falls",
          "Cannon Beach",
          "Astoria Bridge -> home"
        ],
        stopDays: [1,1,1,1,1,2,2,2]
      },
      B: {
        name: "Option B - Falls & Finds",
        days: [
          "Sat: Multnomah Falls -> Silver Falls -> Vista House (if time) -> Timberline (if time)",
          "Sun: Tax-free shopping -> Cannon Beach -> Astoria Bridge -> home"
        ],
        stops: [
          "Seattle - 7:00 AM roll-out",
          "Multnomah Falls",
          "Silver Falls",
          "Vista House (if time)",
          "Timberline (if time)",
          "Tax-free shopping",
          "Cannon Beach",
          "Astoria Bridge -> home"
        ],
        stopDays: [1,1,1,1,1,2,2,2]
      }
    };

    const ROUTE_KEY = "main";
    const ROUTE_LEVELS = [
      {
        id: "level-01-seattle",
        name: "Seattle Roll-Out",
        day: 1,
        icon: "🏠",
        x: 30,
        y: 9,
        note: "Start the engine, settle the crew, and make the departure feel official.",
        tasks: [
          { id: "checkin", label: "Everyone is in the car" },
          { id: "fuel", label: "Fuel, coffee, or snacks handled" },
          { id: "photo", label: "Start-line photo or selfie taken" }
        ]
      },
      {
        id: "level-02-multnomah-falls",
        name: "Multnomah Falls",
        day: 1,
        icon: "💦",
        x: 66,
        y: 18,
        note: "The first big Oregon moment. Mist, bridge photos, and proof the trip has begun.",
        tasks: [
          { id: "arrive", label: "Crew reached the falls" },
          { id: "photo", label: "Bridge or waterfall photo captured" },
          { id: "moment", label: "Best view nominated by the crew" }
        ]
      },
      {
        id: "level-03-timberline-lodge",
        name: "Timberline Lodge",
        day: 1,
        icon: "🏔️",
        x: 38,
        y: 28,
        note: "Mountain checkpoint. Grab the lodge vibe and a proper Mt. Hood memory.",
        tasks: [
          { id: "arrive", label: "Crew checked in at the lodge" },
          { id: "photo", label: "Mountain or lodge photo captured" },
          { id: "snack", label: "Warm drink, snack, or viewpoint picked" }
        ]
      },
      {
        id: "level-04-vista-house",
        name: "Vista House",
        day: 1,
        icon: "🌁",
        x: 68,
        y: 39,
        note: "Columbia River Gorge panorama level. Quick stop, big view.",
        tasks: [
          { id: "arrive", label: "Crew reached Crown Point" },
          { id: "photo", label: "Group panorama or view shot captured" },
          { id: "pose", label: "One dramatic wind pose completed" }
        ]
      },
      {
        id: "level-05-trillium-lake",
        name: "Trillium Lake Kayak",
        day: 1,
        icon: "🛶",
        x: 34,
        y: 50,
        note: "Water level. This one is about the crew doing something together, not just passing through.",
        tasks: [
          { id: "arrive", label: "Crew reached the lake" },
          { id: "activity", label: "Kayak, walk, or lakeside hang completed" },
          { id: "photo", label: "Lake photo with Mt. Hood energy captured" }
        ]
      },
      {
        id: "level-06-silver-falls",
        name: "Silver Falls",
        day: 2,
        icon: "💦",
        x: 66,
        y: 60,
        note: "A second waterfall level with a different mood: trails, spray, and behind-the-falls bragging rights.",
        tasks: [
          { id: "arrive", label: "Crew reached Silver Falls" },
          { id: "walk", label: "Trail or viewpoint completed" },
          { id: "photo", label: "Waterfall proof captured" }
        ]
      },
      {
        id: "level-07-tax-free-shopping",
        name: "Tax-Free Shopping",
        day: 2,
        icon: "🛍️",
        x: 40,
        y: 70,
        note: "Supply-run level. Practical, chaotic, and probably snack-positive.",
        tasks: [
          { id: "arrive", label: "Crew reached the shopping stop" },
          { id: "purchase", label: "Weirdest or best purchase nominated" },
          { id: "snacks", label: "Next-road snacks secured" }
        ]
      },
      {
        id: "level-08-cannon-beach",
        name: "Cannon Beach",
        day: 2,
        icon: "🌊",
        x: 62,
        y: 80,
        note: "Coast level. Shoes optional, Haystack Rock mandatory.",
        tasks: [
          { id: "arrive", label: "Crew reached the beach" },
          { id: "ocean", label: "Someone touched the Pacific" },
          { id: "photo", label: "Haystack Rock or beach photo captured" }
        ]
      },
      {
        id: "level-09-astoria-bridge",
        name: "Astoria Bridge",
        day: 2,
        icon: "🌉",
        x: 35,
        y: 90,
        note: "Final Oregon landmark before the ride points back north.",
        tasks: [
          { id: "arrive", label: "Crew reached the bridge area" },
          { id: "photo", label: "Bridge photo captured" },
          { id: "recap", label: "Favorite trip moment picked" }
        ]
      },
      {
        id: "level-10-home",
        name: "Home Stretch",
        day: 2,
        icon: "🏁",
        x: 62,
        y: 96,
        note: "Finish line. Close the loop and crown the trip memories.",
        tasks: [
          { id: "arrive", label: "Crew made it back safely" },
          { id: "winner", label: "Leaderboard checked" },
          { id: "memory", label: "Best photo or moment chosen" }
        ]
      }
    ];

    const STOP_VIBES = [
      { id: "must", emoji: "🔥", label: "Must stop" },
      { id: "photo", emoji: "📸", label: "Photo op" },
      { id: "food", emoji: "🍔", label: "Food/fuel" },
      { id: "skip", emoji: "⏭️", label: "If time" }
    ];

    const STOP_ICONS = {
      seattle: "🏠",
      falls: "💦",
      lodge: "🏔️",
      vista: "🌁",
      kayak: "🛶",
      beach: "🌊",
      bridge: "🌉",
      shop: "🛍️",
      default: "📍"
    };

    const TABS = [
      ["home", "⛽", "Hype"],
      ["vote", "🗺️", "Route"],
      ["missions", "📸", "Missions"],
      ["hotseat", "🎯", "Hot Seat"],
      ["cards", "🃏", "Cards"],
      ["ranks", "🏆", "Ranks"]
    ];
    const REACTIONS = ["🔥", "😂", "❤️", "🤯"];
    const AVATAR_COLORS = ["#16463A", "#2C6B52", "#2E8FA3", "#F2762E", "#B33A3A", "#735C2B", "#2E5B7D", "#7B3F58", "#35674C", "#1E4D59", "#8A4C25", "#5A6A36"];
    const TRIP_OPEN_AT = new Date("2026-06-20T00:00:00-07:00").getTime();
    const TRIP_DEPART_AT = new Date("2026-06-20T07:00:00-07:00").getTime();
    const TRIP_WRAP_AT = new Date("2026-06-22T00:00:00-07:00").getTime();
    const TRIP_OPEN_LABEL = "June 20, 2026 at 12:00 AM PT";
    const APP_BUILD = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || process.env.NEXT_PUBLIC_APP_VERSION || "";
    const PRE_TRIP_ALLOWED_ACTIONS = new Set(["startLocal", "seedLocal", "switchLocal", "resetLocal", "confirmChoice", "join", "postLobbyComment", "copyDiagnostics"]);
    const LOCAL_TRIP_OPEN_AT = localTripOpenOverrideAt();

    const app = document.getElementById("app");
    const photoInput = document.getElementById("photoInput");
    let db = null;
    let firebaseApi = null;
    let authApi = null;
    let authService = null;
    let localChannel = null;
    let localMode = false;
    let photosQuery = null;
    let historyQuery = null;
    let handRef = null;
    let globalListenersAttached = false;
    let rosterListenerAttached = false;
    let lobbyListenerAttached = false;
    let countdownTimer = null;
    let rankDotTimer = null;
    let repairingHandFor = "";
    let photoPromptTimer = null;
    let feedBootstrapped = false;
    const seenFeedIds = new Set();
    let photosBootstrapped = false;
    let cacheWriteTimer = null;
    let queueFlushInProgress = false;

    const LOCAL_DB_KEY = "oob:local-db";
    const LOCAL_MODE_KEY = "oob:local-mode";
    const LOCAL_NAME_KEY = "oob:local-name";
    const DEBUG_LOG_KEY = "oob:debug-log";
    const DEBUG_LOG_LIMIT = 40;
    const STATE_CACHE_KEY = "oob:last-state:v2";
    const STATE_CACHE_VERSION = 2;
    const STATE_CACHE_TTL_MS = 14 * 24 * 60 * 60 * 1000;
    const ACTION_QUEUE_KEY = "oob:action-queue:v1";
    const ACTION_QUEUE_LIMIT = 80;
    const PHOTO_INITIAL_LIMIT = 8;
    const PHOTO_LOAD_STEP = 8;
    const PHOTO_CACHE_LIMIT = 3;
    const PHOTO_CACHE_MAX_BYTES = 180 * 1024;
    const LOCAL_LISTENERS = new Set();
    const LOCAL_TEST_NAMES = [
      "Alex", "Blake", "Casey", "Devon", "Emery", "Finley",
      "Gray", "Harper", "Indy", "Jules", "Kai", "Logan",
      "Milan", "Noor", "Parker"
    ];
    const LOCAL_DEMO_PHOTO =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='650' viewBox='0 0 900 650'%3E%3Crect width='900' height='650' fill='%23ecf4ee'/%3E%3Cpath d='M0 520 C140 470 210 560 360 510 C520 455 610 555 900 488 L900 650 L0 650 Z' fill='%232c6b52'/%3E%3Cpath d='M0 570 C160 520 260 610 430 555 C600 500 690 600 900 535 L900 650 L0 650 Z' fill='%2316463a'/%3E%3Ccircle cx='715' cy='125' r='64' fill='%23f2762e'/%3E%3Cpath d='M415 95 C360 200 500 245 430 365 C390 435 455 510 520 455 C585 400 545 330 605 250 C660 175 555 75 415 95 Z' fill='%232e8fa3'/%3E%3Cpath d='M470 110 C430 210 535 250 482 350 C450 410 500 455 545 415 C585 380 560 315 610 250 C650 195 590 120 470 110 Z' fill='%23ffffff' opacity='.72'/%3E%3Ctext x='48' y='94' fill='%2316463a' font-family='Arial,sans-serif' font-size='44' font-weight='700'%3EOregon or Bust%3C/text%3E%3Ctext x='52' y='144' fill='%232c6b52' font-family='Arial,sans-serif' font-size='28'%3ELocal demo photo%3C/text%3E%3C/svg%3E";

    const state = {
      mode: "boot",
      name: storedName(),
      nameDraft: "",
      inviteCodeDraft: "",
      invitedNames: [],
      authReady: false,
      authUid: "",
      tab: initialTab(),
      routeChoice: "A",
      selectedStopId: "",
      caption: "",
      pendingMissionId: "",
      revealCards: null,
      roster: [],
      scores: {},
      hype: { count: 0, by: {} },
      votes: {},
      stopVotes: {},
      routeProgress: {},
      feed: [],
      lobbyMessages: [],
      lobbyDraft: "",
      hand: [],
      hotseat: null,
      history: [],
      photos: [],
      optimisticPhotos: [],
      missionClaims: {},
      photoLimit: PHOTO_INITIAL_LIMIT,
      confirmDialog: null,
      connected: true,
      cacheRestored: false,
      cacheTs: 0,
      pendingActions: readQueuedActions().length,
      spinning: false,
      spinningName: "",
      activityDot: false,
      photoDot: false,
      rankDot: false,
      lastLeader: "",
      seenFullTank: false,
      hasDiagnostics: hasStoredDiagnostics(),
      loaded: {
        roster: false, scores: false, hype: false, votes: false, feed: false,
        hotseat: false, hand: false, photos: false, history: false, claims: false, stopVotes: false, routeProgress: false, invites: false, lobby: false
      }
    };

    function configMissing() {
      return Object.values(firebaseConfig).some(value => !value || String(value).includes("PASTE_HERE"));
    }

    function tripLocked() {
      return Date.now() < tripOpenAt() && (!localMode || localLobbyPreview());
    }

    function tripOpenAt() {
      return localMode && localLobbyPreview() && LOCAL_TRIP_OPEN_AT != null ? LOCAL_TRIP_OPEN_AT : TRIP_OPEN_AT;
    }

    function tripOpenLabel() {
      return localMode && localLobbyPreview() && LOCAL_TRIP_OPEN_AT != null ? "local test unlock" : TRIP_OPEN_LABEL;
    }

    function ensureTripOpen() {
      if (!tripLocked()) return true;
      toast(`Oregon or Bust opens ${tripOpenLabel()}.`);
      render();
      return false;
    }

    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
      })[char]);
    }

    function sanitizeName(raw) {
      return String(raw || "")
        .trim()
        .replace(/\s+/g, " ")
        .replace(/[.#$\[\]\/]/g, "")
        .slice(0, 20)
        .trim();
    }

    function queryPlayerName() {
      return sanitizeName(new URLSearchParams(location.search).get("player") || new URLSearchParams(location.search).get("user") || "");
    }

    function validTab(tab) {
      return TABS.some(([key]) => key === tab);
    }

    function initialTab() {
      const tab = new URLSearchParams(location.search).get("tab");
      return validTab(tab) ? tab : "home";
    }

    function updateTabParam(tab) {
      const url = new URL(location.href);
      if (!validTab(tab) || tab === "home") url.searchParams.delete("tab");
      else url.searchParams.set("tab", tab);
      history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }

    function clearLocalPlayerParam() {
      const url = new URL(location.href);
      url.searchParams.delete("player");
      url.searchParams.delete("user");
      history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }

    function localRequested() {
      const params = new URLSearchParams(location.search);
      return params.get("local") === "1" || params.get("test") === "1";
    }

    function localHostAllowed() {
      return ["localhost", "127.0.0.1", "::1"].includes(location.hostname);
    }

    function localBypassAllowed() {
      return localRequested() && localHostAllowed();
    }

    function localLobbyPreview() {
      const params = new URLSearchParams(location.search);
      return localHostAllowed() && localRequested() && (params.get("lobby") === "1" || params.get("pretrip") === "1");
    }

    function localTripOpenOverrideAt() {
      if (!localHostAllowed() || !localRequested()) return null;
      const params = new URLSearchParams(location.search);
      if (params.get("open") === "1" || params.get("unlock") === "1") return 0;
      if (!params.has("openIn")) return null;
      const openIn = Number(params.get("openIn") || "");
      if (!Number.isFinite(openIn) || openIn < 0 || openIn > 120) return null;
      return Date.now() + openIn * 1000;
    }

    function localResetRequested() {
      return new URLSearchParams(location.search).get("reset") === "1";
    }

    function clearLocalResetParam() {
      const url = new URL(location.href);
      if (!url.searchParams.has("reset")) return;
      url.searchParams.delete("reset");
      history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }

    function invitedNameOptions() {
      return localMode ? LOCAL_TEST_NAMES : state.invitedNames;
    }

    function normalizeInviteCode(raw) {
      return String(raw || "").trim().replace(/\s+/g, "").toUpperCase();
    }

    async function sha256Hex(value) {
      const bytes = new TextEncoder().encode(value);
      const hash = await crypto.subtle.digest("SHA-256", bytes);
      return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, "0")).join("");
    }

    function activeFirebaseUser() {
      return authService?.currentUser || null;
    }

    function waitForAuthUser(auth, timeoutMs = 5000) {
      return new Promise(resolve => {
        let settled = false;
        let timer = null;
        let unsubscribe = null;
        const finish = user => {
          if (settled) return;
          settled = true;
          if (timer) clearTimeout(timer);
          if (unsubscribe) unsubscribe();
          resolve(user || auth.currentUser || null);
        };
        timer = setTimeout(() => finish(auth.currentUser || null), timeoutMs);
        try {
          unsubscribe = authApi.onAuthStateChanged(
            auth,
            user => finish(user),
            error => {
              console.warn(error);
              finish(auth.currentUser || null);
            }
          );
          if (settled && unsubscribe) unsubscribe();
        } catch (error) {
          console.warn(error);
          finish(auth.currentUser || null);
        }
      });
    }

    function storedName() {
      try {
        if (localHostAllowed() && (localStorage.getItem(LOCAL_MODE_KEY) === "1" || localRequested())) {
          return queryPlayerName() || sessionStorage.getItem(LOCAL_NAME_KEY) || "";
        }
        return sanitizeName(localStorage.getItem("oob:name") || "");
      } catch {
        return "";
      }
    }

    function storeName(name) {
      if (localMode) sessionStorage.setItem(LOCAL_NAME_KEY, name);
      else localStorage.setItem("oob:name", name);
    }

    function clearStoredName() {
      if (localMode) sessionStorage.removeItem(LOCAL_NAME_KEY);
      else localStorage.removeItem("oob:name");
    }

    function hashName(name) {
      let h = 0;
      for (let i = 0; i < name.length; i++) h = ((h << 5) - h + name.charCodeAt(i)) | 0;
      return Math.abs(h);
    }

    function avatarColor(name) {
      return AVATAR_COLORS[hashName(name) % AVATAR_COLORS.length];
    }

    function avatar(name) {
      const initial = escapeHtml((name || "?").trim().charAt(0) || "?");
      return `<span class="avatar" style="background:${avatarColor(name)}">${initial}</span>`;
    }

    function id() {
      return (crypto.randomUUID && crypto.randomUUID()) || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }

    function clone(value) {
      if (value === undefined || value === null) return value;
      return JSON.parse(JSON.stringify(value));
    }

    function pathParts(path) {
      return String(path || "").split("/").filter(Boolean);
    }

    function localReadRoot() {
      try {
        return JSON.parse(localStorage.getItem(LOCAL_DB_KEY) || "{}") || {};
      } catch {
        return {};
      }
    }

    function localWriteRoot(root) {
      localStorage.setItem(LOCAL_DB_KEY, JSON.stringify(root || {}));
      localChannel?.postMessage({ type: "change", ts: Date.now() });
      localNotify();
    }

    function withLocalWriteLock(task) {
      if (navigator.locks?.request) return navigator.locks.request("oob-local-db", task);
      return Promise.resolve().then(task);
    }

    function localReadPath(path) {
      if (path === ".info/connected") return true;
      let cursor = localReadRoot();
      for (const part of pathParts(path)) {
        if (cursor == null || typeof cursor !== "object") return null;
        cursor = cursor[part];
      }
      return clone(cursor ?? null);
    }

    function localSetPath(path, value) {
      if (path === ".info/connected") return;
      const parts = pathParts(path);
      const root = localReadRoot();
      let cursor = root;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (cursor[part] == null || typeof cursor[part] !== "object") {
          cursor[part] = /^\d+$/.test(parts[i + 1]) ? [] : {};
        }
        cursor = cursor[part];
      }
      const key = parts[parts.length - 1];
      if (!parts.length) {
        localWriteRoot(value || {});
      } else if (value === null) {
        if (Array.isArray(cursor)) cursor.splice(Number(key), 1);
        else delete cursor[key];
        localWriteRoot(root);
      } else {
        cursor[key] = clone(value);
        localWriteRoot(root);
      }
    }

    function makeLocalSnapshot(value, key = null, constraints = []) {
      const constrainedValue = applyLocalConstraints(value, constraints);
      return {
        key,
        exists() {
          return constrainedValue !== null && constrainedValue !== undefined;
        },
        val() {
          return clone(constrainedValue);
        },
        forEach(callback) {
          if (constrainedValue == null || typeof constrainedValue !== "object") return false;
          Object.entries(constrainedValue).forEach(([childKey, childValue]) => {
            callback(makeLocalSnapshot(childValue, childKey));
          });
          return false;
        }
      };
    }

    function applyLocalConstraints(value, constraints) {
      if (value == null || typeof value !== "object" || Array.isArray(value)) return clone(value ?? null);
      let entries = Object.entries(value);
      const order = constraints.find(item => item.type === "orderByChild");
      if (order) {
        entries.sort((a, b) => {
          const av = a[1]?.[order.child] ?? 0;
          const bv = b[1]?.[order.child] ?? 0;
          return av === bv ? a[0].localeCompare(b[0]) : av > bv ? 1 : -1;
        });
      }
      const limit = constraints.findLast?.(item => item.type === "limitToLast")
        || [...constraints].reverse().find(item => item.type === "limitToLast");
      if (limit) entries = entries.slice(-limit.count);
      return Object.fromEntries(entries);
    }

    function localNotify() {
      LOCAL_LISTENERS.forEach(listener => {
        listener.callback(makeLocalSnapshot(localReadPath(listener.path), null, listener.constraints));
      });
    }

    function localRef(path, constraints = []) {
      return {
        on(eventName, callback) {
          if (eventName !== "value") throw new Error(`Unsupported local event: ${eventName}`);
          const listener = { path, constraints, callback };
          LOCAL_LISTENERS.add(listener);
          callback(makeLocalSnapshot(localReadPath(path), null, constraints));
          return () => LOCAL_LISTENERS.delete(listener);
        },
        off() {
          [...LOCAL_LISTENERS].forEach(listener => {
            if (listener.path === path) LOCAL_LISTENERS.delete(listener);
          });
        },
        once(eventName) {
          if (eventName !== "value") throw new Error(`Unsupported local event: ${eventName}`);
          return Promise.resolve(makeLocalSnapshot(localReadPath(path), null, constraints));
        },
        transaction(updater) {
          return withLocalWriteLock(() => {
            const current = localReadPath(path);
            const next = updater(clone(current));
            if (next === undefined) {
              return { committed: false, snapshot: makeLocalSnapshot(current) };
            }
            localSetPath(path, next);
            return { committed: true, snapshot: makeLocalSnapshot(next) };
          });
        },
        push(value) {
          return withLocalWriteLock(() => {
            const key = `local_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
            localSetPath(`${path}/${key}`, value);
            return { key };
          });
        },
        set(value) {
          return withLocalWriteLock(() => localSetPath(path, value));
        },
        remove() {
          return withLocalWriteLock(() => localSetPath(path, null));
        },
        orderByChild(child) {
          return localRef(path, [...constraints, { type: "orderByChild", child }]);
        },
        limitToLast(count) {
          return localRef(path, [...constraints, { type: "limitToLast", count }]);
        }
      };
    }

    function startLocalMode() {
      localMode = true;
      localStorage.setItem(LOCAL_MODE_KEY, "1");
      state.name = storedName();
      state.invitedNames = LOCAL_TEST_NAMES;
      state.loaded.invites = true;
      if (!state.nameDraft) state.nameDraft = state.name || "";
      localChannel = "BroadcastChannel" in window ? new BroadcastChannel("oob-local-db") : null;
      localChannel?.addEventListener("message", event => {
        if (event.data?.type === "change") localNotify();
      });
      window.addEventListener("storage", event => {
        if (event.key === LOCAL_DB_KEY) localNotify();
      });
      state.mode = "app";
      state.connected = true;
      attachLobbyListeners();
      if (!tripLocked()) {
        attachGlobalListeners();
        if (state.name) {
          attachPlayerListeners();
          ensureLocalPlayerJoined();
        }
        prepareActiveTab();
      } else if (state.name) {
        ensureLocalLobbyJoined();
      }
      startCountdown();
      render();
    }

    function wrapRef(baseRef, constraints = []) {
      const targetRef = constraints.length ? firebaseApi.query(baseRef, ...constraints) : baseRef;
      let unsubscribe = null;
      return {
        on(eventName, callback) {
          if (eventName !== "value") throw new Error(`Unsupported Firebase event: ${eventName}`);
          unsubscribe = firebaseApi.onValue(targetRef, callback);
          return unsubscribe;
        },
        off() {
          if (unsubscribe) {
            unsubscribe();
            unsubscribe = null;
            return;
          }
          firebaseApi.off(targetRef);
        },
        once(eventName) {
          if (eventName !== "value") throw new Error(`Unsupported Firebase event: ${eventName}`);
          return firebaseApi.get(targetRef);
        },
        transaction(updater) {
          return firebaseApi.runTransaction(baseRef, updater);
        },
        push(value) {
          return firebaseApi.push(baseRef, value);
        },
        set(value) {
          return firebaseApi.set(baseRef, value);
        },
        remove() {
          return firebaseApi.remove(baseRef);
        },
        orderByChild(child) {
          return wrapRef(baseRef, [...constraints, firebaseApi.orderByChild(child)]);
        },
        limitToLast(count) {
          return wrapRef(baseRef, [...constraints, firebaseApi.limitToLast(count)]);
        }
      };
    }

    function ref(path) {
      if (localMode) return localRef(path);
      return wrapRef(firebaseApi.ref(db, path));
    }

    function safeJsonParse(value, fallback) {
      try {
        return JSON.parse(value);
      } catch {
        return fallback;
      }
    }

    function truncate(value, max = 900) {
      const text = String(value ?? "");
      return text.length > max ? `${text.slice(0, max)}...` : text;
    }

    function storageGet(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    }

    function storageSet(key, value) {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch {
        return false;
      }
    }

    function storageRemove(key) {
      try {
        localStorage.removeItem(key);
      } catch {
        // Storage can fail in strict privacy modes; the app should still run live.
      }
    }

    function firebaseReady() {
      return localMode || Boolean(firebaseApi && db && activeFirebaseUser());
    }

    function canSyncNow() {
      if (localMode) return true;
      return firebaseReady() && state.connected && navigator.onLine !== false;
    }

    function isRetryableSyncError(error) {
      const text = `${error?.code || ""} ${error?.name || ""} ${error?.message || error || ""}`;
      return /network|offline|unavailable|disconnected|timeout|failed to fetch|client is offline|auth is still/i.test(text);
    }

    function readQueuedActions() {
      const rows = safeJsonParse(storageGet(ACTION_QUEUE_KEY) || "[]", []);
      return Array.isArray(rows) ? rows.filter(item => item && item.id && item.type).slice(-ACTION_QUEUE_LIMIT) : [];
    }

    function writeQueuedActions(rows) {
      const queue = Array.isArray(rows) ? rows.slice(-ACTION_QUEUE_LIMIT) : [];
      storageSet(ACTION_QUEUE_KEY, JSON.stringify(queue));
      state.pendingActions = queue.length;
      return queue;
    }

    function enqueueAction(type, payload) {
      const entry = {
        id: payload?.id || id(),
        type,
        name: payload?.name || state.name || "",
        ts: payload?.ts || Date.now(),
        payload: payload || {}
      };
      const queue = readQueuedActions();
      const existingIndex = queue.findIndex(item => item.id === entry.id);
      if (existingIndex >= 0) queue[existingIndex] = entry;
      else queue.push(entry);
      writeQueuedActions(queue);
      scheduleStateCache();
      return entry;
    }

    function readStateCache() {
      const cache = safeJsonParse(storageGet(STATE_CACHE_KEY) || "null", null);
      if (!cache || cache.version !== STATE_CACHE_VERSION || !cache.ts) return null;
      if (Date.now() - Number(cache.ts) > STATE_CACHE_TTL_MS) {
        storageRemove(STATE_CACHE_KEY);
        return null;
      }
      return cache;
    }

    function cacheAgeLabel(ts) {
      const seconds = Math.max(0, Math.round((Date.now() - Number(ts || 0)) / 1000));
      if (seconds < 60) return "just now";
      const minutes = Math.round(seconds / 60);
      if (minutes < 60) return `${minutes} min ago`;
      const hours = Math.round(minutes / 60);
      if (hours < 24) return `${hours} hr ago`;
      return `${Math.round(hours / 24)} day${hours >= 48 ? "s" : ""} ago`;
    }

    function safeArray(value, limit = 80) {
      return Array.isArray(value) ? value.slice(0, limit) : [];
    }

    function safeObject(value) {
      return value && typeof value === "object" && !Array.isArray(value) ? value : {};
    }

    function hydrateStateCache(renderNow = false) {
      if (localMode) return false;
      const cache = readStateCache();
      if (!cache) return false;
      const cachedName = sanitizeName(cache.name);
      if (cachedName && !state.name) state.name = cachedName;
      if (cachedName && !state.nameDraft) state.nameDraft = cachedName;
      state.invitedNames = safeArray(cache.invitedNames, 40);
      state.roster = safeArray(cache.roster, 40);
      state.scores = safeObject(cache.scores);
      state.hype = safeObject(cache.hype);
      state.votes = safeObject(cache.votes);
      state.stopVotes = safeObject(cache.stopVotes);
      state.routeProgress = safeObject(cache.routeProgress);
      state.feed = safeArray(cache.feed, 12);
      state.lobbyMessages = safeArray(cache.lobbyMessages, 50);
      state.hand = safeArray(cache.hand, 4);
      state.hotseat = cache.hotseat || null;
      state.history = safeArray(cache.history, 15);
      state.photos = safeArray(cache.photos, PHOTO_CACHE_LIMIT);
      state.missionClaims = safeObject(cache.missionClaims);
      state.tab = validTab(cache.tab) ? cache.tab : state.tab;
      state.selectedStopId = cache.selectedStopId || state.selectedStopId;
      state.routeChoice = cache.routeChoice || state.routeChoice;
      state.cacheRestored = true;
      state.cacheTs = Number(cache.ts || Date.now());
      state.pendingActions = readQueuedActions().length;
      state.loaded = {
        ...state.loaded,
        roster: true,
        scores: true,
        hype: true,
        votes: true,
        feed: true,
        hotseat: true,
        hand: state.hand.length > 0 || state.loaded.hand,
        photos: true,
        history: true,
        claims: true,
        stopVotes: true,
        routeProgress: true,
        invites: state.invitedNames.length > 0 || state.loaded.invites,
        lobby: true
      };
      if (state.name) state.mode = "app";
      if (renderNow && state.name) safeRender();
      return Boolean(state.name);
    }

    function cachedPhoto(photo) {
      if (!photo?.dataUrl || dataUrlBytes(photo.dataUrl) > PHOTO_CACHE_MAX_BYTES) return null;
      return {
        id: photo.id,
        name: photo.name,
        missionId: photo.missionId,
        missionTitle: photo.missionTitle,
        pts: photo.pts,
        caption: photo.caption || "",
        dataUrl: photo.dataUrl,
        ts: photo.ts || 0,
        reactions: photo.reactions || {}
      };
    }

    function scheduleStateCache() {
      if (localMode || !state.name || state.mode === "boot" || state.mode === "setup") return;
      clearTimeout(cacheWriteTimer);
      cacheWriteTimer = setTimeout(writeStateCache, 250);
    }

    function writeStateCache() {
      if (localMode || !state.name) return;
      const photos = state.photos.map(cachedPhoto).filter(Boolean).slice(0, PHOTO_CACHE_LIMIT);
      const cache = {
        version: STATE_CACHE_VERSION,
        ts: Date.now(),
        name: state.name,
        tab: state.tab,
        selectedStopId: state.selectedStopId,
        routeChoice: state.routeChoice,
        invitedNames: state.invitedNames.slice(0, 40),
        roster: state.roster.slice(0, 40),
        scores: state.scores,
        hype: state.hype,
        votes: state.votes,
        stopVotes: state.stopVotes,
        routeProgress: state.routeProgress,
        feed: state.feed.slice(0, 12),
        lobbyMessages: state.lobbyMessages.slice(0, 50),
        hand: state.hand.slice(0, 4),
        hotseat: state.hotseat,
        history: state.history.slice(0, 15),
        photos,
        missionClaims: state.missionClaims
      };
      if (!storageSet(STATE_CACHE_KEY, JSON.stringify(cache))) {
        cache.photos = [];
        storageSet(STATE_CACHE_KEY, JSON.stringify(cache));
      }
    }

    async function drainActionQueue() {
      if (queueFlushInProgress || !canSyncNow()) return;
      let queue = readQueuedActions();
      if (!queue.length) {
        writeQueuedActions([]);
        return;
      }
      queueFlushInProgress = true;
      const remaining = [];
      try {
        for (const entry of queue) {
          if (!canSyncNow()) {
            remaining.push(entry, ...queue.slice(queue.indexOf(entry) + 1));
            break;
          }
          try {
            await applyQueuedAction(entry);
          } catch (error) {
            if (isRetryableSyncError(error)) {
              remaining.push(entry, ...queue.slice(queue.indexOf(entry) + 1));
              break;
            }
            recordError("queue.action_dropped", error, { queuedType: entry.type, queuedId: entry.id });
          }
        }
      } finally {
        queueFlushInProgress = false;
        writeQueuedActions(remaining);
        if (!remaining.length && queue.length) toast("Saved updates synced.");
        render();
      }
    }

    async function applyQueuedAction(entry) {
      const payload = entry.payload || {};
      const name = sanitizeName(payload.name || entry.name || state.name);
      if (!name) throw new Error("Queued action is missing player name.");
      if (entry.type === "lobbyComment") {
        const text = String(payload.text || "").trim().slice(0, 120);
        if (!text) return;
        await ref(`lobbyMessages/${entry.id}`).set({ name, text, ts: Number(payload.ts || entry.ts || Date.now()) });
        return;
      }
      if (entry.type === "stopVote") {
        const route = payload.route || ROUTE_KEY;
        const stopId = payload.stopId || "";
        const vibe = payload.vibe || "";
        if (!stopId || !STOP_VIBES.some(item => item.id === vibe)) return;
        await ref(`stopVotes/${route}/${stopId}/${name}`).set(vibe);
        if (payload.feedText && payload.feedId) {
          await ref(`feed/${payload.feedId}`).set({ ts: Number(payload.ts || Date.now()), name, text: payload.feedText });
        }
        return;
      }
      if (entry.type === "levelTask") {
        const stopId = payload.stopId || "";
        const taskId = payload.taskId || "";
        const checked = Boolean(payload.checked);
        if (!stopId || !taskId) return;
        await ref(`routeProgress/${ROUTE_KEY}/players/${name}`).transaction(current => {
          current = current || {};
          if (current.completed?.[stopId]) return current;
          const tasks = current.tasks || {};
          const stopTasks = { ...(tasks[stopId] || {}) };
          if (checked) stopTasks[taskId] = { by: name, ts: Number(payload.ts || Date.now()) };
          else delete stopTasks[taskId];
          return {
            ...current,
            tasks: {
              ...tasks,
              [stopId]: stopTasks
            }
          };
        });
        return;
      }
      if (entry.type === "completeLevel") {
        const stopId = payload.stopId || "";
        const stop = routeStops().find(item => item.id === stopId);
        if (!stop) return;
        const stamp = { by: name, ts: Number(payload.ts || Date.now()), queueId: entry.id };
        let shouldAward = false;
        await ref(`routeProgress/${ROUTE_KEY}/players/${name}`).transaction(current => {
          current = current || {};
          const completed = current.completed || {};
          if (completed[stop.id]) return current;
          shouldAward = true;
          return {
            ...current,
            completed: {
              ...completed,
              [stop.id]: stamp
            }
          };
        });
        if (shouldAward) {
          await ref(`scores/${name}`).transaction(value => (Number(value) || 0) + 15);
          await ref(`feed/${payload.feedId || id()}`).set({
            ts: Number(payload.ts || Date.now()),
            name,
            text: `🏁 ${name} cleared Level ${stop.level}: ${stop.name} (+15)`
          });
        }
        return;
      }
      if (entry.type === "reaction") {
        const photoId = payload.photoId || "";
        const emoji = payload.emoji || "";
        if (!photoId || !REACTIONS.includes(emoji)) return;
        await Promise.all(REACTIONS
          .filter(item => item !== emoji)
          .map(item => ref(`photos/${photoId}/reactions/${item}/${name}`).remove()));
        await ref(`photos/${photoId}/reactions/${emoji}/${name}`).set(true);
      }
    }

    function storedDiagnostics() {
      try {
        if (!window.localStorage) return [];
        const rows = safeJsonParse(localStorage.getItem(DEBUG_LOG_KEY) || "[]", []);
        return Array.isArray(rows) ? rows : [];
      } catch {
        return [];
      }
    }

    function hasStoredDiagnostics() {
      return storedDiagnostics().length > 0;
    }

    function serializeError(error) {
      if (!error) return { message: "Unknown error" };
      if (typeof error === "string") return { message: truncate(error) };
      return {
        code: error.code || error.name || "",
        message: truncate(error.message || String(error)),
        stack: truncate(error.stack || "", 1600)
      };
    }

    function diagnosticSnapshot(extra = {}) {
      const codeInput = document.getElementById("inviteCodeInput");
      return {
        ts: new Date().toISOString(),
        clientTs: Date.now(),
        appBuild: APP_BUILD,
        eventUrl: location.href,
        mode: state.mode,
        localMode,
        tripLocked: tripLocked(),
        connected: state.connected,
        authReady: state.authReady,
        authUidTail: state.authUid ? state.authUid.slice(-8) : "",
        name: state.name || "",
        nameDraft: state.nameDraft || "",
        invitedNameCount: state.invitedNames.length,
        inviteCodeEntered: Boolean(state.inviteCodeDraft || codeInput?.value),
        tab: state.tab,
        loaded: { ...state.loaded },
        rosterCount: state.roster.length,
        lobbyMessageCount: state.lobbyMessages.length,
        online: navigator.onLine,
        userAgent: navigator.userAgent,
        ...extra
      };
    }

    function remoteDiagnosticPayload(entry) {
      const payload = clone(entry);
      payload.source = "client";
      payload.eventUrl = truncate(payload.eventUrl, 300);
      payload.userAgent = truncate(payload.userAgent, 260);
      if (payload.error) {
        payload.error = {
          code: truncate(payload.error.code || "", 120),
          message: truncate(payload.error.message || "", 900),
          stack: truncate(payload.error.stack || "", 1600)
        };
      }
      return payload;
    }

    async function sendRemoteDiagnostic(entry) {
      if (localMode || !firebaseApi || !db || !activeFirebaseUser()) return;
      try {
        await ref("clientErrors").push(remoteDiagnosticPayload(entry));
      } catch (error) {
        console.warn("Remote diagnostic did not sync", error);
      }
    }

    function recordDiagnostic(eventName, payload = {}) {
      const entry = {
        event: eventName,
        ...diagnosticSnapshot(payload)
      };
      const rows = [...storedDiagnostics(), entry].slice(-DEBUG_LOG_LIMIT);
      try {
        localStorage.setItem(DEBUG_LOG_KEY, JSON.stringify(rows));
      } catch {
        // Keep console diagnostics even when browser storage is unavailable.
      }
      state.hasDiagnostics = true;
      console.warn("[Oregon or Bust diagnostic]", entry);
      sendRemoteDiagnostic(entry);
      return entry;
    }

    function recordError(eventName, error, payload = {}) {
      return recordDiagnostic(eventName, {
        ...payload,
        error: serializeError(error)
      });
    }

    function diagnosticBundle() {
      return {
        app: "Oregon or Bust",
        generatedAt: new Date().toISOString(),
        current: diagnosticSnapshot(),
        logs: storedDiagnostics()
      };
    }

    function debugButtonHtml() {
      if (!state.hasDiagnostics) return "";
      return `<button class="btn ghost debug-copy" data-action="copyDiagnostics">COPY DEBUG LOG</button>`;
    }

    async function copyDiagnostics() {
      const text = JSON.stringify(diagnosticBundle(), null, 2);
      try {
        await navigator.clipboard.writeText(text);
        toast("Debug log copied. Send it to Eswar.");
      } catch (error) {
        try {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.setAttribute("readonly", "");
          textarea.style.position = "fixed";
          textarea.style.left = "-999px";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          textarea.remove();
          toast("Debug log copied. Send it to Eswar.");
        } catch (copyError) {
          recordError("diagnostics.copy_failed", copyError, { originalError: serializeError(error) });
          toast("Could not copy debug log.");
        }
      }
    }

    function friendlyJoinError(error) {
      const code = String(error?.code || "");
      const message = String(error?.message || "");
      if (code.includes("PERMISSION_DENIED") || /permission_denied|permission denied/i.test(message)) {
        return "Firebase rejected join. Publish latest rules and verify invite data.";
      }
      if (/auth|unauth/i.test(`${code} ${message}`)) {
        return "Auth did not start. Enable Anonymous sign-in in Firebase.";
      }
      if (/network|offline|unavailable/i.test(`${code} ${message}`)) {
        return "Network issue. Reopen the app and try again.";
      }
      return "Join did not sync. Copy debug log and send it.";
    }

    function lobbyMessageRows(snapshot) {
      const rows = [];
      snapshot.forEach(child => {
        const value = child.val();
        if (!value || typeof value !== "object") return;
        rows.push({
          id: child.key,
          name: sanitizeName(value.name) || "Guest",
          text: String(value.text || "").trim().slice(0, 120),
          ts: Number(value.ts || 0)
        });
      });
      return rows
        .filter(message => message.text)
        .sort((a, b) => (b.ts || 0) - (a.ts || 0) || String(b.id).localeCompare(String(a.id)))
        .slice(0, 50);
    }

    function toast(message) {
      const wrap = document.getElementById("toasts");
      const el = document.createElement("div");
      el.className = "toast";
      el.textContent = message;
      wrap.appendChild(el);
      setTimeout(() => el.remove(), 2500);
    }

    function spawnPointPop(delta, target) {
      if (!delta) return;
      const rect = target && target.getBoundingClientRect ? target.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 };
      const el = document.createElement("div");
      el.className = `point-pop ${delta < 0 ? "neg" : ""}`;
      el.textContent = `${delta > 0 ? "+" : ""}${delta} pts`;
      el.style.left = `${rect.left + rect.width / 2}px`;
      el.style.top = `${rect.top + 8}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 850);
    }

    function burstConfetti() {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const colors = ["#F2762E", "#2E8FA3", "#F7EDDC", "#B33A3A", "#2C6B52"];
      for (let i = 0; i < 34; i++) {
        const bit = document.createElement("i");
        bit.className = "confetti";
        bit.style.left = `${50 + (Math.random() * 34 - 17)}vw`;
        bit.style.top = `${34 + (Math.random() * 12 - 6)}vh`;
        bit.style.background = colors[i % colors.length];
        bit.style.setProperty("--dx", `${Math.random() * 260 - 130}px`);
        bit.style.setProperty("--dy", `${Math.random() * 240 + 80}px`);
        bit.style.setProperty("--rot", `${Math.random() * 760 - 380}deg`);
        document.body.appendChild(bit);
        setTimeout(() => bit.remove(), 950);
      }
    }

    function formatTime(ts) {
      if (!ts) return "";
      return new Intl.DateTimeFormat([], { hour: "numeric", minute: "2-digit" }).format(new Date(ts));
    }

    function formatDateTime(ts) {
      return new Intl.DateTimeFormat([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(ts));
    }

    function scoreRows() {
      return Object.entries(state.scores)
        .sort((a, b) => (Number(b[1]) || 0) - (Number(a[1]) || 0) || a[0].localeCompare(b[0]));
    }

    function tabReady(tab) {
      if (tab === "home") return state.loaded.feed && state.loaded.hype;
      if (tab === "vote") return state.loaded.stopVotes && state.loaded.routeProgress;
      if (tab === "missions") return state.loaded.photos && state.loaded.claims;
      if (tab === "hotseat") return state.loaded.hotseat && state.loaded.history;
      if (tab === "cards") return state.loaded.hand;
      if (tab === "ranks") return state.loaded.scores;
      return true;
    }

    function prepareActiveTab() {
      if (state.tab === "missions") ensurePhotosListener();
      if (state.tab === "hotseat") ensureHistoryListener();
    }

    function notifyRemoteFeedItems(items) {
      if (!feedBootstrapped) {
        items.forEach(item => { if (item?.id) seenFeedIds.add(item.id); });
        feedBootstrapped = true;
        return;
      }
      items
        .filter(item => item?.id && !seenFeedIds.has(item.id))
        .sort((a, b) => (a.ts || 0) - (b.ts || 0))
        .forEach(item => {
          seenFeedIds.add(item.id);
          if (item.name && item.name === state.name) return;
          if (state.tab !== "home") state.activityDot = true;
          toast(item.text || "New trip update.");
          navigator.vibrate?.(45);
        });
    }

    function photoLiveSignature(photo) {
      const reactions = REACTIONS
        .map(emoji => `${emoji}:${Object.keys(photo.reactions?.[emoji] || {}).sort().join(",")}`)
        .join(";");
      return `${photo.id}:${photo.ts || 0}:${reactions}`;
    }

    function photoWallChanged(previousPhotos, nextPhotos) {
      if (!photosBootstrapped) return false;
      const previous = new Map(previousPhotos.map(photo => [photo.id, photoLiveSignature(photo)]));
      if (previous.size !== nextPhotos.length) return true;
      return nextPhotos.some(photo => previous.get(photo.id) !== photoLiveSignature(photo));
    }

    async function pushFeed(text, name = state.name) {
      try {
        await ref("feed").push({ ts: Date.now(), name, text });
        pruneFeed();
      } catch (error) {
        console.warn(error);
      }
    }

    async function pruneFeed() {
      try {
        const snap = await ref("feed").orderByChild("ts").once("value");
        const rows = [];
        snap.forEach(child => rows.push([child.key, child.val()?.ts || 0]));
        rows.sort((a, b) => b[1] - a[1]).slice(50).forEach(([key]) => ref(`feed/${key}`).remove());
      } catch (error) {
        console.warn(error);
      }
    }

    async function postLobbyComment() {
      if (!state.name) return toast("Join the lobby first.");
      const text = String(state.lobbyDraft || document.getElementById("lobbyCommentInput")?.value || "").trim().slice(0, 120);
      if (!text) return toast("Write a comment first.");
      const ts = Date.now();
      const commentId = `comment_${ts}_${id().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 20)}`;
      const optimistic = { id: commentId, name: state.name, text, ts, queued: true };
      if (!canSyncNow()) {
        state.lobbyMessages = [optimistic, ...state.lobbyMessages.filter(item => item.id !== commentId)].slice(0, 50);
        state.lobbyDraft = "";
        enqueueAction("lobbyComment", { id: commentId, name: state.name, text, ts });
        toast("Comment saved. It will post when signal returns.");
        render();
        return;
      }
      try {
        await ref(`lobbyMessages/${commentId}`).set({ name: state.name, text, ts });
        state.lobbyDraft = "";
        render();
        pruneLobbyMessages();
      } catch (error) {
        if (isRetryableSyncError(error)) {
          state.lobbyMessages = [optimistic, ...state.lobbyMessages.filter(item => item.id !== commentId)].slice(0, 50);
          state.lobbyDraft = "";
          enqueueAction("lobbyComment", { id: commentId, name: state.name, text, ts });
          toast("Comment saved. It will retry when signal returns.");
          render();
          return;
        }
        recordError("lobby_comment.failed", error, { textLength: text.length });
        toast("Lobby comment did not post.");
        console.warn(error);
      }
    }

    async function pruneLobbyMessages() {
      try {
        const snap = await ref("lobbyMessages").orderByChild("ts").once("value");
        const rows = [];
        snap.forEach(child => rows.push([child.key, child.val()?.ts || 0, child.val()?.name || ""]));
        rows
          .sort((a, b) => b[1] - a[1])
          .slice(80)
          .filter(([, , name]) => name === state.name)
          .forEach(([key]) => ref(`lobbyMessages/${key}`).remove());
      } catch (error) {
        console.warn(error);
      }
    }

    async function addScore(name, delta, target) {
      if (!name || !delta) return;
      try {
        const result = await ref(`scores/${name}`).transaction(value => (Number(value) || 0) + delta);
        state.scores = { ...state.scores, [name]: Number(result.snapshot.val() || 0) };
        render();
        if (name === state.name) spawnPointPop(delta, target);
      } catch (error) {
        toast("Points did not sync. Try again.");
        console.warn(error);
      }
    }

    function setupScreen() {
      app.innerHTML = `
        <main class="setup">
          <div class="logo" style="margin:auto">OREGON<span>OR BUST</span><small>Seattle -> Oregon</small></div>
          <section class="setup-card stack">
            <h1 class="title">Almost there</h1>
            <p>The trip organizer needs to add the Firebase environment variables before the crew can play.</p>
            <code>NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_DATABASE_URL=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...</code>
            <p class="muted">Create a free Firebase project, enable Realtime Database in test mode, then add these values in Vercel or a local .env.local file.</p>
            <button class="btn falls" data-action="startLocal">START LOCAL TEST MODE</button>
            <button class="btn sand" data-action="seedLocal">ADD 15 TEST PLAYERS</button>
            ${debugButtonHtml()}
            <p class="muted mini" style="margin:0">Local test mode stores data in this browser and syncs across tabs on this machine. It is only for development.</p>
          </section>
        </main>`;
    }

    function bootScreen(message = "Starting the trip lobby...") {
      app.innerHTML = `
        <main class="setup">
          <div class="logo" style="margin:auto">OREGON<span>OR BUST</span><small>Seattle -> Oregon</small></div>
          <section class="setup-card stack">
            <h1 class="title">Loading Oregon or Bust</h1>
            <p>${escapeHtml(message)}</p>
            <p class="muted mini" style="margin:0">If this stays here, refresh once. If it still does not open, copy the debug log and send it to Eswar.</p>
            ${debugButtonHtml()}
          </section>
        </main>`;
    }

    function failureScreen(title, message) {
      app.innerHTML = `
        <main class="setup">
          <div class="logo" style="margin:auto">OREGON<span>OR BUST</span><small>Seattle -> Oregon</small></div>
          <section class="setup-card stack">
            <h1 class="title">${escapeHtml(title)}</h1>
            <p>${escapeHtml(message)}</p>
            <button class="btn falls" onclick="location.reload()">RELOAD APP</button>
            ${debugButtonHtml()}
          </section>
        </main>`;
    }

    function safeRender() {
      try {
        render();
      } catch (error) {
        recordError("render.failed", error);
        console.warn(error);
        failureScreen("App could not render", "Reload once. If this repeats, copy the debug log and send it to Eswar.");
      }
    }

    function handleUnhandledError(eventName, error) {
      recordError(eventName, error);
      console.warn(error);
      failureScreen("App hit a startup error", "Reload once. If this repeats, copy the debug log and send it to Eswar.");
    }

    function syncNoticeHtml() {
      if (localMode) return "";
      const queued = Number(state.pendingActions || 0);
      if (state.cacheRestored && !firebaseReady()) {
        return `<div class="offline">Showing saved trip screen from ${escapeHtml(cacheAgeLabel(state.cacheTs))}. Connecting...</div>`;
      }
      if (queued) {
        return `<div class="offline">Saved ${queued} update${queued === 1 ? "" : "s"} for retry when signal returns.</div>`;
      }
      if (!state.connected || navigator.onLine === false) {
        return `<div class="offline">Reconnecting... lightweight taps are saved; uploads may need a retry.</div>`;
      }
      return "";
    }

    function render() {
      if (state.mode === "boot") return bootScreen();
      if (state.mode === "setup") return setupScreen();
      if (!state.name) return renderJoin();
      if (tripLocked()) return renderLobby();
      if (state.revealCards) return renderReveal();
      renderApp();
    }

    function renderLobby() {
      const joined = state.roster.length ? state.roster : [state.name].filter(Boolean);
      app.innerHTML = `
        <main class="join lobby">
          <div class="logo" style="margin:auto">OREGON<span>OR BUST</span><small>Seattle -> Oregon</small></div>
          <section class="join-card stack lobby-card">
            ${syncNoticeHtml()}
            <div class="between">
              <div>
                <h1 class="title">Lobby</h1>
                <p class="muted">Game actions unlock ${tripOpenLabel()}.</p>
              </div>
              <div class="lobby-you">${avatar(state.name)}<span>${escapeHtml(state.name)}</span></div>
            </div>
            <div class="lobby-road" aria-hidden="true">
              <span>Seattle</span>
              <i></i>
              <strong>Oregon</strong>
            </div>
            <section class="panel sand" style="box-shadow:none">
              <h2 class="section-title" data-countdown-title>Unlock Countdown</h2>
              ${countdownHtml(tripOpenAt())}
            </section>
            <section class="panel" style="box-shadow:none">
              <div class="between">
                <h2 class="section-title" style="margin:0">Checked In</h2>
                <span class="mono mini">${joined.length}</span>
              </div>
              <div class="avatar-cloud">
                ${joined.map(name => `<div class="lobby-avatar">${avatar(name)}<span>${escapeHtml(name)}${name === state.name ? " (you)" : ""}</span></div>`).join("")}
              </div>
            </section>
            <section class="panel" style="box-shadow:none">
              <div class="between">
                <h2 class="section-title" style="margin:0">Lobby Comments</h2>
                <span class="mono mini">${state.lobbyMessages.length}</span>
              </div>
              <div class="lobby-comment-meta">
                <span>Newest first</span>
                ${state.lobbyMessages.length > 5 ? `<span>Scroll for older</span>` : ""}
              </div>
              <div class="lobby-messages" aria-live="polite" tabindex="0">
                ${state.lobbyMessages.length ? state.lobbyMessages.map(message => `
                  <div class="feed-row">
                    ${avatar(message.name)}
                    <div><strong>${escapeHtml(message.name)}</strong><br>${escapeHtml(message.text)}</div>
                    <time class="mono mini muted">${formatTime(message.ts)}</time>
                  </div>`).join("") : `<div class="empty">No comments yet. Drop the first road-trip thought.</div>`}
              </div>
              <label class="field-label" for="lobbyCommentInput">Comment</label>
              <input id="lobbyCommentInput" data-field="lobbyDraft" maxlength="120" autocomplete="off" placeholder="Hype, snack requests, arrival plans..." value="${escapeHtml(state.lobbyDraft)}">
              <button class="btn" data-action="postLobbyComment">POST COMMENT</button>
            </section>
            <p class="muted mini" style="margin:0">You are checked in. Points, cards, photos, route levels, and hot seat stay locked until trip day.</p>
            ${debugButtonHtml()}
          </section>
        </main>`;
      scheduleStateCache();
    }

    function renderJoin() {
      const names = invitedNameOptions();
      const inviteReady = localMode || state.loaded.invites;
      const selectedName = sanitizeName(state.nameDraft);
      const hasSelectedName = names.includes(selectedName);
      const nameOptions = [
        `<option value="" ${hasSelectedName ? "" : "selected"} disabled>Select your invited name</option>`,
        ...names.map(name => `<option value="${escapeHtml(name)}" ${name === selectedName ? "selected" : ""}>${escapeHtml(name)}</option>`)
      ].join("");
      const preTrip = tripLocked();
      app.innerHTML = `
        <main class="join">
          <div class="logo" style="margin:auto">OREGON<span>OR BUST</span><small>Seattle -> Oregon</small></div>
          <section class="join-card stack">
            <div>
              <h1 class="title">Seattle -> Oregon</h1>
              <p class="muted">June 20-21, 2026</p>
            </div>
            <p>${preTrip ? "Pick your invited name and enter your trip code to check into the pre-trip lobby." : "Pick your invited name and enter your trip code. Joining earns <strong>+25 pts</strong> and deals <strong>2 secret wild cards</strong>."}</p>
            ${inviteReady && !names.length ? `<div class="empty">The invite list is not loaded yet. Add invited names and code hashes in Firebase before sharing the link.</div>` : ""}
            ${inviteReady && names.length ? `
              <label class="field-label" for="nameInput">Invited player</label>
              <select id="nameInput" data-field="name">
                ${nameOptions}
              </select>
              ${localMode ? "" : `<label class="field-label" for="inviteCodeInput">Trip code</label>
              <input id="inviteCodeInput" data-field="inviteCode" maxlength="32" autocomplete="one-time-code" placeholder="Private invite code" value="${escapeHtml(state.inviteCodeDraft)}">`}
              <button class="btn" data-action="join">${preTrip ? "JOIN LOBBY" : "LET'S RIDE +25"}</button>
            ` : `<div class="empty">Loading invite list...</div>`}
            ${debugButtonHtml()}
          </section>
        </main>`;
    }

    function renderReveal() {
      app.innerHTML = `
        <main class="reveal">
          <div class="logo" style="margin:auto">OREGON<span>OR BUST</span><small>Your secret hand</small></div>
          <h1 class="title" style="color:var(--sand)">Cards dealt</h1>
          <div class="reveal-cards">
            ${state.revealCards.map(card => renderWildCard(card, -1, true)).join("")}
          </div>
          <button class="btn" data-action="finishReveal">LET'S RIDE -></button>
        </main>`;
    }

    function renderApp() {
      const content = !tabReady(state.tab)
        ? skeletonTab()
        : state.tab === "home" ? homeTab()
        : state.tab === "vote" ? voteTab()
        : state.tab === "missions" ? missionsTab()
        : state.tab === "hotseat" ? hotseatTab()
        : state.tab === "cards" ? cardsTab()
        : ranksTab();

      app.innerHTML = `
        <main class="screen stack">
          ${localMode ? `<div class="offline local-banner"><span>Local test mode${state.name ? ` - ${escapeHtml(state.name)}` : ""}</span><button data-action="seedLocal">Seed Demo</button><button data-action="switchLocal">Switch</button><button data-action="resetLocal">Reset</button></div>` : ""}
          ${syncNoticeHtml()}
          ${debugButtonHtml()}
          ${content}
        </main>
        ${confirmDialogHtml()}
        ${tabbar()}`;
      scheduleStateCache();
    }

    function confirmDialogHtml() {
      const dialog = state.confirmDialog;
      if (!dialog) return "";
      return `<div class="modal-backdrop" role="presentation">
        <section class="confirm-modal" role="dialog" aria-modal="true" aria-label="Confirm action">
          <h2 class="section-title">${escapeHtml(dialog.title || "Are you sure?")}</h2>
          <p>${escapeHtml(dialog.message)}</p>
          <div class="row">
            <button class="btn ghost" data-action="confirmChoice" data-choice="cancel">${escapeHtml(dialog.cancelText || "Cancel")}</button>
            <button class="btn red" data-action="confirmChoice" data-choice="ok">${escapeHtml(dialog.okText || "Confirm")}</button>
          </div>
        </section>
      </div>`;
    }

    function askConfirm(message, okText = "Confirm", title = "Are you sure?") {
      return new Promise(resolve => {
        state.confirmDialog = { message, okText, title, cancelText: "Cancel", resolve };
        render();
        requestAnimationFrame(() => document.querySelector("[data-action='confirmChoice'][data-choice='cancel']")?.focus());
      });
    }

    function resolveConfirm(choice) {
      const dialog = state.confirmDialog;
      state.confirmDialog = null;
      render();
      dialog?.resolve(choice === "ok");
    }

    function skeletonTab() {
      return `<div class="stack">
        <div class="skeleton" style="height:86px"></div>
        <div class="skeleton" style="height:170px"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
      </div>`;
    }

    function hotseatBanner() {
      const dare = state.hotseat;
      if (!dare || dare.status !== "open") return "";
      if (dare.target === state.name) {
        return `<button class="alert pulse" data-tab="hotseat">🚨 YOU'RE IN THE HOT SEAT - TAP TO SEE YOUR DARE</button>`;
      }
      return `<div class="alert slim">🎯 <strong>${escapeHtml(dare.target)}</strong> is in the hot seat right now...</div>`;
    }

    function homeTab() {
      const byMe = Number(state.hype.by?.[state.name] || 0);
      const paidLeft = Math.max(0, 30 - byMe);
      const tank = Math.min(1, (Number(state.hype.count) || 0) / 500);
      return `
        <div class="stack">
          ${hotseatBanner()}
          <div class="between">
            <div class="logo">OREGON<span>OR BUST</span><small>Road-trip game</small></div>
            <div class="tight" style="justify-items:end">
              ${avatar(state.name)}
              <span class="mono mini">${Number(state.scores[state.name] || 0)} pts</span>
            </div>
          </div>
          <section class="panel sand">
            <h2 class="section-title" data-countdown-title>${countdownTitle()}</h2>
            ${countdownHtml()}
          </section>
          <section class="panel dark">
            <div class="between">
              <h2 class="section-title" style="color:var(--sand);margin:0">Crew Hype Tank</h2>
              <span class="mono">${Number(state.hype.count || 0)}/500</span>
            </div>
            <div class="gauge-wrap">
              ${gaugeHtml(tank)}
              <p class="mini muted" style="color:rgba(247,237,220,.76);margin:0">${tank >= 1 ? "TANK FULL 🔥" : paidLeft ? `${paidLeft} paid pumps left for you` : "pump cap reached - still counts for the crew!"}</p>
              <button class="btn" data-action="pump">⛽ PUMP ${paidLeft ? "(+1 pt)" : "(crew only)"}</button>
            </div>
          </section>
          <section class="panel">
            <h2 class="section-title">Live Activity</h2>
            ${state.feed.length ? state.feed.map(event => `
              <div class="feed-row">
                ${avatar(event.name)}
                <div>${escapeHtml(event.text)}</div>
                <time class="mono mini muted">${formatTime(event.ts)}</time>
              </div>`).join("") : `<div class="empty">Quiet so far - go make some noise.</div>`}
          </section>
        </div>`;
    }

    function countdownTitle() {
      const now = Date.now();
      if (now >= TRIP_WRAP_AT) return "THAT WAS LEGENDARY 🌲";
      if (now >= TRIP_DEPART_AT) return "WE'RE ON THE ROAD 🎉";
      return "Countdown To Roll-Out";
    }

    function countdownHtml(target = TRIP_DEPART_AT) {
      let seconds = Math.max(0, Math.floor((target - Date.now()) / 1000));
      const days = Math.floor(seconds / 86400); seconds -= days * 86400;
      const hours = Math.floor(seconds / 3600); seconds -= hours * 3600;
      const minutes = Math.floor(seconds / 60); seconds -= minutes * 60;
      return `<div class="countdown" data-countdown>
        ${digit(days, "days")}
        ${digit(hours, "hrs")}
        ${digit(minutes, "min")}
        ${digit(seconds, "sec")}
      </div>`;
    }

    function digit(value, label) {
      return `<div class="digit"><strong>${String(value).padStart(2, "0")}</strong><span>${label}</span></div>`;
    }

    function gaugeHtml(tank) {
      const dash = Math.round(tank * 283);
      const angle = -90 + tank * 180;
      return `<svg class="gauge" viewBox="0 0 270 160" aria-label="Crew hype tank">
        <path d="M45 125 A90 90 0 0 1 225 125" fill="none" stroke="#16463A" stroke-width="20" stroke-linecap="round"/>
        <path class="progress" d="M45 125 A90 90 0 0 1 225 125" fill="none" stroke="#F2762E" stroke-width="20" stroke-linecap="round" stroke-dasharray="${dash} 283"/>
        <text x="35" y="148" fill="#F7EDDC" font-family="Bungee" font-size="16">E</text>
        <text x="222" y="148" fill="#F7EDDC" font-family="Bungee" font-size="16">F</text>
        <line class="needle" x1="135" y1="125" x2="135" y2="52" stroke="#F7EDDC" stroke-width="6" stroke-linecap="round" transform="rotate(${angle} 135 125)"/>
        <circle cx="135" cy="125" r="12" fill="#F7EDDC" stroke="#16463A" stroke-width="4"/>
      </svg>`;
    }

    function voteTab() {
      const stops = routeStops();
      const progress = routeLevelProgress(ROUTE_KEY, stops);
      const selected = selectedStopForRoute(ROUTE_KEY, stops);
      return `<div class="stack">
        <section class="panel dark route-level-panel">
          <div class="map-meta">
            <div>
              <p>Seattle to Oregon</p>
              <h1>Your Levels</h1>
            </div>
            <span class="route-pill">${progress.completedCount}/${progress.total}</span>
          </div>
          ${levelProgressHtml(progress)}
          ${routeLevelMapHtml(stops, selected, progress)}
        </section>
        ${levelDetailHtml(selected, progress)}
      </div>`;
    }

    function voteCard(key, count, total) {
      const option = OPTIONS[key];
      const pct = total ? Math.round(count / total * 100) : 0;
      const active = state.votes[state.name] === key;
      return `<button class="vote-card ${active ? "active" : ""}" data-action="vote" data-choice="${key}">
        <div class="between">
          <h3 class="bungee">${escapeHtml(option.name)}</h3>
          <span class="mono">${count} (${pct}%)</span>
        </div>
        ${option.days.map(day => `<div>${escapeHtml(day)}</div>`).join("")}
        <div class="bar"><span style="width:${pct}%"></span></div>
        ${active ? `<strong>✓ your pick</strong>` : `<span class="muted">Tap to vote</span>`}
      </button>`;
    }

    function routeSvg(choice) {
      const route = OPTIONS[choice];
      const stops = route.stops.map((stop, i) => {
        const y = 36 + i * 42;
        const x = i % 2 ? 185 : 84;
        const textX = i % 2 ? 24 : 112;
        const anchor = "start";
        const day = route.stopDays[i];
        const color = i === 0 ? "#F7EDDC" : day === 1 ? "#F2762E" : "#2E8FA3";
        const mark = i === 0 ? "🏠" : i;
        return `<g>
          <circle cx="${x}" cy="${y}" r="13" fill="${color}" stroke="#F7EDDC" stroke-width="3"/>
          <text x="${x}" y="${y + 5}" text-anchor="middle" font-size="${i === 0 ? 13 : 11}" font-family="Bungee" fill="#0C211B">${mark}</text>
          <text x="${textX}" y="${y - 2}" text-anchor="${anchor}" font-size="11" font-family="Outfit" font-weight="800" fill="#F7EDDC">${escapeHtml(stop)}</text>
          <text x="${textX}" y="${y + 13}" text-anchor="${anchor}" font-size="9" font-family="Space Mono" fill="${day === 1 ? "#F2762E" : "#2E8FA3"}">DAY ${day}</text>
        </g>`;
      }).join("");
      return `<svg class="route-svg" viewBox="0 0 280 350" role="img" aria-label="${escapeHtml(route.name)} route preview">
        <path d="M82 34 C220 70 38 100 188 138 C250 174 34 193 91 233 C148 272 230 282 174 326" fill="none" stroke="#16463A" stroke-width="28" stroke-linecap="round"/>
        <path d="M82 34 C220 70 38 100 188 138 C250 174 34 193 91 233 C148 272 230 282 174 326" fill="none" stroke="#F7EDDC" stroke-width="4" stroke-linecap="round" stroke-dasharray="10 12"/>
        ${stops}
      </svg>`;
    }

    function routeShortName(choice) {
      return OPTIONS[choice].name.replace(/^Option [AB]\s*-\s*/, "");
    }

    function stopSlug(value) {
      return String(value || "stop")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 34) || "stop";
    }

    function routeStops() {
      return ROUTE_LEVELS.map((stop, index) => ({
        ...stop,
        level: index + 1
      }));
    }

    function stopIcon(name, index) {
      const lower = String(name || "").toLowerCase();
      if (index === 0 || lower.includes("seattle")) return STOP_ICONS.seattle;
      if (lower.includes("falls")) return STOP_ICONS.falls;
      if (lower.includes("timberline") || lower.includes("lodge")) return STOP_ICONS.lodge;
      if (lower.includes("vista") || lower.includes("crown")) return STOP_ICONS.vista;
      if (lower.includes("kayak") || lower.includes("trillium")) return STOP_ICONS.kayak;
      if (lower.includes("cannon") || lower.includes("beach") || lower.includes("pacific")) return STOP_ICONS.beach;
      if (lower.includes("astoria") || lower.includes("bridge")) return STOP_ICONS.bridge;
      if (lower.includes("shop") || lower.includes("tax")) return STOP_ICONS.shop;
      return STOP_ICONS.default;
    }

    function routeProgressRoot(choice = ROUTE_KEY) {
      return state.routeProgress?.[choice || ROUTE_KEY] || {};
    }

    function playerRouteProgress(choice = ROUTE_KEY, name = state.name) {
      if (!name) return {};
      return routeProgressRoot(choice)?.players?.[name] || {};
    }

    function setPlayerRouteProgress(choice, name, progress) {
      const route = routeProgressRoot(choice);
      state.routeProgress = {
        ...state.routeProgress,
        [choice]: {
          ...route,
          players: {
            ...(route.players || {}),
            [name]: progress || {}
          }
        }
      };
    }

    function completedLevels(choice) {
      return playerRouteProgress(choice).completed || {};
    }

    function completedLevelData(choice, stopId) {
      return completedLevels(choice)?.[stopId] || null;
    }

    function levelTaskData(stopId) {
      return playerRouteProgress(ROUTE_KEY).tasks?.[stopId] || {};
    }

    function levelTasksDone(stop) {
      const taskData = levelTaskData(stop?.id);
      return Boolean(stop?.tasks?.length) && stop.tasks.every(task => taskData[task.id]);
    }

    function levelTaskCount(stop) {
      const taskData = levelTaskData(stop?.id);
      const done = (stop?.tasks || []).filter(task => taskData[task.id]).length;
      return { done, total: stop?.tasks?.length || 0 };
    }

    function routeLevelProgress(choice, stops = routeStops(choice)) {
      const completed = completedLevels(choice);
      const completedCount = stops.filter(stop => completed[stop.id]).length;
      const firstOpen = stops.findIndex(stop => !completed[stop.id]);
      const allDone = stops.length > 0 && firstOpen === -1;
      const currentIndex = allDone ? stops.length - 1 : Math.max(0, firstOpen);
      return {
        completed,
        completedCount,
        total: stops.length,
        currentIndex,
        currentStop: stops[currentIndex],
        allDone
      };
    }

    function selectedStopForRoute(choice, stops) {
      const selected = stops.find(stop => stop.id === state.selectedStopId);
      return selected || routeLevelProgress(choice, stops).currentStop || stops[0];
    }

    function levelStatus(choice, stop, progress) {
      if (completedLevelData(choice, stop.id)) return "complete";
      if (!progress.allDone && stop.level - 1 === progress.currentIndex) return "current";
      if (!progress.allDone && stop.level - 1 > progress.currentIndex) return "locked";
      return "open";
    }

    function levelProgressLabel(progress) {
      if (!progress.total) return "No levels loaded";
      if (progress.allDone) return `All ${progress.total} of your levels cleared`;
      return `Level ${progress.currentIndex + 1} of ${progress.total}: ${progress.currentStop?.name || "Next stop"}`;
    }

    function levelProgressHtml(progress) {
      const pct = progress.total ? Math.round(progress.completedCount / progress.total * 100) : 0;
      return `<div class="level-progress">
        <div class="between">
          <strong>${progress.completedCount}/${progress.total} personal levels complete</strong>
          <span class="mono mini">${pct}%</span>
        </div>
        <div class="level-bar"><span style="width:${pct}%"></span></div>
        <p>${escapeHtml(levelProgressLabel(progress))}</p>
      </div>`;
    }

    function levelControlHtml(stop, progress) {
      if (!stop) return "";
      const status = levelStatus(state.routeChoice, stop, progress);
      const completed = completedLevelData(state.routeChoice, stop.id);
      const action = completed
        ? `<button class="btn small ghost" data-action="reopenLevel" data-stop="${escapeHtml(stop.id)}">REOPEN</button>`
        : status === "current"
          ? `<button class="btn small" data-action="completeLevel" data-stop="${escapeHtml(stop.id)}">COMPLETE</button>`
          : `<button class="btn small ghost" disabled>${status === "locked" ? "LOCKED" : "WAIT"}</button>`;
      return `<div class="level-control ${status}">
        <div>
          <span class="mono mini">${status === "current" ? "Active level" : status === "complete" ? "Cleared level" : "Selected level"}</span>
          <strong>${stop.icon} Level ${stop.level}: ${escapeHtml(stop.name)}</strong>
        </div>
        ${action}
      </div>`;
    }

    function routeLevelMapHtml(stops, selected, progress) {
      const path = "M31 8 C73 17 18 25 66 38 C92 48 14 55 35 69 C55 82 75 80 36 91 C28 94 43 97 62 96";
      const progressStops = progress.allDone ? stops : stops.slice(0, Math.max(1, progress.currentIndex + 1));
      const progressPath = progressStops.length > 1 ? partialRoutePath(progressStops.length) : "";
      return `<div class="level-map" role="group" aria-label="Oregon route levels">
        <svg class="level-map-bg" viewBox="0 0 100 104" preserveAspectRatio="none" aria-hidden="true">
          <rect width="100" height="104" rx="7" fill="#102A22"/>
          <path d="${path}" fill="none" stroke="#7A4F2B" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="${path}" fill="none" stroke="#F7EDDC" stroke-width="1.7" stroke-linecap="round" stroke-dasharray="2.2 4.2"/>
          ${progressPath ? `<path d="${progressPath}" fill="none" stroke="#F2762E" stroke-width="5.2" stroke-linecap="round" stroke-linejoin="round"/>` : ""}
          <circle cx="86" cy="22" r="12" fill="#2E8FA3" opacity=".72"/>
          <path d="M5 91 C18 86 30 91 42 86 C54 81 66 89 96 80 L96 104 L5 104 Z" fill="#F7EDDC" opacity=".11"/>
          <path d="M75 6 L82 20 L67 20 Z M83 18 L92 35 L74 35 Z M70 25 L78 42 L60 42 Z" fill="#2C6B52" opacity=".78"/>
        </svg>
        ${stops.map(stop => levelNodeHtml(stop, selected, progress)).join("")}
      </div>`;
    }

    function partialRoutePath(count) {
      const paths = [
        "",
        "",
        "M31 8 C48 12 67 14 66 18",
        "M31 8 C73 17 18 25 38 28",
        "M31 8 C73 17 18 25 66 38",
        "M31 8 C73 17 18 25 66 38 C92 48 14 55 35 50",
        "M31 8 C73 17 18 25 66 38 C92 48 14 55 66 60",
        "M31 8 C73 17 18 25 66 38 C92 48 14 55 35 69 C38 70 39 70 40 70",
        "M31 8 C73 17 18 25 66 38 C92 48 14 55 35 69 C55 82 75 80 62 80",
        "M31 8 C73 17 18 25 66 38 C92 48 14 55 35 69 C55 82 75 80 36 91",
        "M31 8 C73 17 18 25 66 38 C92 48 14 55 35 69 C55 82 75 80 36 91 C28 94 43 97 62 96"
      ];
      return paths[Math.max(0, Math.min(paths.length - 1, count))];
    }

    function levelNodeHtml(stop, selected, progress) {
      const status = levelStatus(ROUTE_KEY, stop, progress);
      const active = selected?.id === stop.id;
      const completed = completedLevelData(ROUTE_KEY, stop.id);
      const taskCount = levelTaskCount(stop);
      const side = stop.x > 50 ? "left" : "right";
      const labelX = stop.x + (side === "left" ? -8 : 8);
      const labelAlign = side === "left" ? "right" : "left";
      const mark = completed ? "✓" : status === "locked" ? "🔒" : stop.level;
      return `<button class="level-node ${status} ${active ? "active" : ""}" style="left:${stop.x}%;top:${stop.y}%;" data-action="selectStop" data-stop="${escapeHtml(stop.id)}" aria-label="Level ${stop.level}: ${escapeHtml(stop.name)}">
          <span class="level-node-mark">${mark}</span>
          <span class="level-node-icon">${stop.icon}</span>
        </button>
        <button class="level-node-label side-${side} ${status} ${active ? "active" : ""}" style="left:${labelX}%;top:${stop.y}%;text-align:${labelAlign};" data-action="selectStop" data-stop="${escapeHtml(stop.id)}">
          <strong>L${stop.level}</strong>
          <span>${escapeHtml(stop.name)}</span>
          <em>${taskCount.done}/${taskCount.total}</em>
        </button>`;
    }

    function levelDetailHtml(stop, progress) {
      if (!stop) return "";
      const status = levelStatus(ROUTE_KEY, stop, progress);
      const completed = completedLevelData(ROUTE_KEY, stop.id);
      const taskCount = levelTaskCount(stop);
      const taskReady = levelTasksDone(stop);
      const buttonLabel = completed
        ? "REOPEN FROM HERE"
        : !taskReady
          ? `FINISH ${taskCount.total - taskCount.done} TASK${taskCount.total - taskCount.done === 1 ? "" : "S"}`
          : `COMPLETE LEVEL ${stop.level}`;
      const action = completed
        ? `<button class="btn ghost level-action" data-action="reopenLevel" data-stop="${escapeHtml(stop.id)}">${buttonLabel}</button>`
        : status === "current"
          ? `<button class="btn level-action" data-action="completeLevel" data-stop="${escapeHtml(stop.id)}" ${taskReady ? "" : "disabled"}>${buttonLabel}</button>`
          : `<button class="btn ghost level-action" disabled>${status === "locked" ? `CLEAR LEVEL ${progress.currentIndex + 1} FIRST` : "WAITING"}</button>`;
      return `<section class="panel sand level-detail ${status}">
        <div class="level-detail-head">
          <span class="stop-badge ${status}">${completed ? "✓" : status === "locked" ? "🔒" : stop.level}</span>
          <div>
            <p class="mono mini muted">LEVEL ${stop.level} OF ${progress.total} · DAY ${stop.day} · ${escapeHtml(levelStatusText(status, stop, progress))}</p>
            <h2 class="section-title">${stop.icon} ${escapeHtml(stop.name)}</h2>
          </div>
        </div>
        <p class="stop-signal">${escapeHtml(stop.note)}</p>
        ${completed ? `<p class="stop-signal">Cleared by <strong>you</strong>${completed.ts ? ` at ${formatTime(completed.ts)}` : ""}.</p>` : ""}
        <div class="level-checklist">
          ${(stop.tasks || []).map(task => levelTaskHtml(stop, task, status, completed)).join("")}
        </div>
        ${action}
      </section>`;
    }

    function levelTaskHtml(stop, task, status, completed) {
      const taskData = levelTaskData(stop.id);
      const done = taskData[task.id];
      const disabled = status === "locked" || Boolean(completed);
      return `<button class="level-task ${done ? "done" : ""}" data-action="toggleLevelTask" data-stop="${escapeHtml(stop.id)}" data-task="${escapeHtml(task.id)}" ${disabled ? "disabled" : ""}>
        <span class="task-box">${done ? "✓" : ""}</span>
        <span>
          <strong>${escapeHtml(task.label)}</strong>
          <em>${done ? `done by ${done.by === state.name ? "you" : escapeHtml(done.by || "you")}` : "tap when done"}</em>
        </span>
      </button>`;
    }

    function stopVoteData(route, stopId) {
      return state.stopVotes?.[route]?.[stopId] || {};
    }

    function stopVoteCounts(route, stopId) {
      const counts = Object.fromEntries(STOP_VIBES.map(vibe => [vibe.id, 0]));
      Object.values(stopVoteData(route, stopId)).forEach(vibe => {
        if (counts[vibe] !== undefined) counts[vibe]++;
      });
      return counts;
    }

    function stopVoteTotal(route, stopId) {
      return Object.keys(stopVoteData(route, stopId)).length;
    }

    function leadingVibe(counts) {
      const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
      if (!total) return null;
      return [...STOP_VIBES].sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0))[0];
    }

    function routeConsensus(choice) {
      const routeVotes = state.stopVotes?.[choice] || {};
      const counts = Object.fromEntries(STOP_VIBES.map(vibe => [vibe.id, 0]));
      Object.values(routeVotes).forEach(stop => {
        Object.values(stop || {}).forEach(vibe => {
          if (counts[vibe] !== undefined) counts[vibe]++;
        });
      });
      const winner = leadingVibe(counts);
      if (!winner) return "Crew stop energy is wide open";
      const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
      return `${winner.emoji} ${winner.label} leads ${counts[winner.id]}/${total}`;
    }

    function routeMapHtml(choice, stops, selected, progress) {
      const points = stops.map(stop => `${stop.x},${stop.y}`).join(" ");
      const progressStops = progress.allDone ? stops : stops.slice(0, Math.max(1, progress.currentIndex + 1));
      const progressPoints = progressStops.map(stop => `${stop.x},${stop.y}`).join(" ");
      return `<div class="route-board" role="group" aria-label="${escapeHtml(OPTIONS[choice].name)} ordered route map">
        <svg class="route-map-art" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect width="100" height="100" fill="#ECF4EE"/>
          <path d="M0 0 H72 C88 12 82 24 91 39 C101 56 84 69 95 100 H100 V0 Z" fill="#2E8FA3"/>
          <path d="M0 72 C18 65 28 78 42 70 C56 62 67 67 78 59 C88 52 92 58 100 55 V100 H0 Z" fill="#F7EDDC"/>
          <path d="M58 12 L66 0 L76 12 Z M65 21 L76 4 L88 21 Z M56 33 L66 16 L78 33 Z" fill="#16463A" opacity=".92"/>
          <path d="M62 8 L66 2 L70 8 Z M71 16 L76 8 L81 16 Z M62 28 L66 21 L71 28 Z" fill="#F7EDDC"/>
          <path d="M8 10 C20 15 22 24 17 35 C12 47 22 55 18 68 C15 77 18 86 13 96" fill="none" stroke="#2C6B52" stroke-width="2" opacity=".28"/>
          <path d="M74 2 C69 14 82 20 76 34 C70 49 82 55 78 69 C74 82 84 89 80 100" fill="none" stroke="#F7EDDC" stroke-width="3" opacity=".65"/>
          <polyline points="${points}" fill="none" stroke="#0C211B" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="${points}" fill="none" stroke="#F7EDDC" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 3"/>
          ${progressStops.length > 1 ? `<polyline points="${progressPoints}" fill="none" stroke="#F2762E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` : ""}
          <text x="9" y="9" font-family="Bungee" font-size="7" fill="#16463A">WA</text>
          <text x="9" y="95" font-family="Bungee" font-size="7" fill="#16463A">OR</text>
          <text x="71" y="94" font-family="Space Mono" font-size="4.2" fill="#0C211B">PACIFIC</text>
        </svg>
        <div class="route-map-title">
          <span>Seattle</span>
          <strong>Route Quest</strong>
          <span>Oregon</span>
        </div>
        ${stops.map(stop => {
          const active = selected?.id === stop.id;
          const status = levelStatus(choice, stop, progress);
          const mark = status === "complete" ? "✓" : status === "locked" ? "🔒" : stop.level;
          const voted = Boolean(stopVoteData(choice, stop.id)[state.name]);
          return `<button class="path-node ${status} ${active ? "active" : ""} ${voted ? "voted" : ""}" style="left:${stop.x}%;top:${stop.y}%;" data-action="selectStop" data-stop="${escapeHtml(stop.id)}" aria-label="${escapeHtml(stop.name)}">
            <span class="node-disc">${mark}</span>
            <span class="node-icon">${stop.icon}</span>
          </button>`;
        }).join("")}
      </div>
      ${mapDetailTrayHtml(selected, progress)}`;
    }

    function mapDetailTrayHtml(stop, progress) {
      if (!stop) return "";
      const counts = stopVoteCounts(state.routeChoice, stop.id);
      const total = stopVoteTotal(state.routeChoice, stop.id);
      const mine = stopVoteData(state.routeChoice, stop.id)[state.name];
      const winner = leadingVibe(counts);
      const completed = completedLevelData(state.routeChoice, stop.id);
      const status = levelStatus(state.routeChoice, stop, progress);
      const action = completed
        ? `<button class="btn small ghost" data-action="reopenLevel" data-stop="${escapeHtml(stop.id)}">REOPEN</button>`
        : status === "current"
          ? `<button class="btn small" data-action="completeLevel" data-stop="${escapeHtml(stop.id)}">COMPLETE</button>`
          : `<button class="btn small ghost" disabled>${status === "locked" ? "LOCKED" : "WAIT"}</button>`;
      return `<div class="map-detail-tray ${status}">
        <div class="tray-head">
          <span class="tray-level">${status === "complete" ? "✓" : status === "locked" ? "🔒" : stop.level}</span>
          <div>
            <p class="mono mini">Level ${stop.level} · Day ${stop.day} · ${escapeHtml(levelStatusText(status, stop, progress))}</p>
            <h3>${stop.icon} ${escapeHtml(stop.name)}</h3>
          </div>
          ${action}
        </div>
        <p>${completed ? `Cleared by you${completed.ts ? ` at ${formatTime(completed.ts)}` : ""}.` : status === "current" ? "Your active stop. Clear it to unlock your next level." : "Peek ahead and vote, but your route unlocks in order."}</p>
        <div class="tray-signal">
          <span>${winner ? `${winner.emoji} ${escapeHtml(winner.label)}` : "Crew signal open"}</span>
          <span class="mono">${total} vote${total === 1 ? "" : "s"}</span>
        </div>
        <div class="tray-vibes">
          ${STOP_VIBES.map(vibe => `<button class="${mine === vibe.id ? "active" : ""}" data-action="stopVote" data-stop="${escapeHtml(stop.id)}" data-vibe="${vibe.id}">
            <span>${vibe.emoji}</span><strong>${escapeHtml(vibe.label)}</strong><em class="mono">${counts[vibe.id] || 0}</em>
          </button>`).join("")}
        </div>
      </div>`;
    }

    function levelStatusText(status, stop, progress) {
      if (status === "complete") return "Cleared";
      if (status === "current") return "Now";
      if (status === "locked") return `Clear L${progress.currentIndex + 1} first`;
      return `L${stop.level}`;
    }

    function levelCaption(stop) {
      const name = String(stop.name || "");
      if (name.includes("Seattle")) return "Start line";
      if (name.includes("home")) return "Finish line";
      if (name.includes("if time")) return "Bonus stop";
      if (name.includes("shopping")) return "Supply run";
      if (name.includes("Kayak")) return "Water level";
      if (name.includes("Falls")) return "Mist level";
      if (name.includes("Beach")) return "Coast level";
      if (name.includes("Bridge")) return "Final crossing";
      return "Itinerary stop";
    }

    function stopDetail(stop, progress) {
      if (!stop) return "";
      const counts = stopVoteCounts(state.routeChoice, stop.id);
      const total = stopVoteTotal(state.routeChoice, stop.id);
      const mine = stopVoteData(state.routeChoice, stop.id)[state.name];
      const winner = leadingVibe(counts);
      const completed = completedLevelData(state.routeChoice, stop.id);
      const status = levelStatus(state.routeChoice, stop, progress);
      const action = completed
        ? `<button class="btn ghost level-action" data-action="reopenLevel" data-stop="${escapeHtml(stop.id)}">REOPEN FROM HERE</button>`
        : status === "current"
          ? `<button class="btn level-action" data-action="completeLevel" data-stop="${escapeHtml(stop.id)}">MARK LEVEL ${stop.level} COMPLETE</button>`
          : `<button class="btn ghost level-action" disabled>${status === "locked" ? `CLEAR LEVEL ${progress.currentIndex + 1} FIRST` : "WAITING ON PRIOR LEVEL"}</button>`;
      return `<section class="panel sand stop-detail">
        <div class="between stop-detail-head">
          <div>
            <p class="mono mini muted">LEVEL ${stop.level} OF ${progress.total} · DAY ${stop.day} · OPTION ${state.routeChoice}</p>
            <h2 class="section-title">${stop.icon} ${escapeHtml(stop.name)}</h2>
          </div>
          <span class="stop-badge ${status}">${status === "complete" ? "✓" : status === "locked" ? "🔒" : stop.level}</span>
        </div>
        <p class="stop-signal">${completed ? `Cleared by <strong>you</strong>${completed.ts ? ` at ${formatTime(completed.ts)}` : ""}.` : status === "current" ? "Your active level. Clear this stop to unlock your next place." : "Plan ahead here, but complete your itinerary in order."}</p>
        ${action}
        <p class="stop-signal">${winner ? `${winner.emoji} Crew signal: <strong>${escapeHtml(winner.label)}</strong>` : "First read is wide open."}</p>
        <div class="vibe-grid">
          ${STOP_VIBES.map(vibe => `<button class="vibe-btn ${mine === vibe.id ? "active" : ""}" data-action="stopVote" data-stop="${escapeHtml(stop.id)}" data-vibe="${vibe.id}">
            <span>${vibe.emoji}</span>
            <strong>${escapeHtml(vibe.label)}</strong>
            <em class="mono">${counts[vibe.id] || 0}</em>
          </button>`).join("")}
        </div>
      </section>`;
    }

    function missionsTab() {
      const photos = [...state.optimisticPhotos, ...state.photos].sort((a, b) => (b.ts || 0) - (a.ts || 0));
      return `<div class="stack">
        <section class="panel sand tight">
          <h1 class="section-title">Photo Missions</h1>
          <label class="field-label" for="captionInput">Caption for next post</label>
          <input id="captionInput" maxlength="80" data-field="caption" placeholder="Optional caption" value="${escapeHtml(state.caption)}">
          ${MISSIONS.map(mission => missionRow(mission)).join("")}
        </section>
        <section class="tight">
          <h2 class="section-title">The Wall</h2>
          ${photos.length ? photos.map(photoCard).join("") : `<div class="panel"><div class="empty">No photos yet - the first legendary moment is up for grabs.</div></div>`}
          ${state.photos.length >= state.photoLimit ? `<button class="btn sand" data-action="loadPhotos">Load ${PHOTO_LOAD_STEP} more</button>` : ""}
        </section>
      </div>`;
    }

    function missionRow(mission) {
      const names = Object.keys(state.missionClaims?.[mission.id] || {}).sort();
      return `<button class="mission" data-action="mission" data-mission="${mission.id}">
        <span>
          <strong>${escapeHtml(mission.title)}</strong>
          <span class="mini muted">📍 ${escapeHtml(mission.tag)}</span>
          ${names.length ? `<span class="done-names">✅ ${escapeHtml(names.join(", "))}</span>` : ""}
        </span>
        <span class="mission-side"><span class="pts">+${mission.pts}</span><span class="upload-chip" aria-label="Choose photo">📷</span><span class="upload-text">Photo</span></span>
      </button>`;
    }

    function photoCard(photo) {
      const counts = reactionCounts(photo);
      const mine = myReaction(photo);
      return `<article class="photo-card ${photo.posting ? "posting skeletonish" : ""}">
        ${photo.dataUrl ? `<img src="${escapeHtml(photo.dataUrl)}" alt="${escapeHtml(photo.missionTitle)}" loading="lazy">` : `<div class="photo-placeholder">Photo will reload when signal returns</div>`}
        <div class="photo-body">
          <div class="between">
            <div class="row">${avatar(photo.name)}<strong>${escapeHtml(photo.name)}</strong></div>
            <span class="mono mini">${photo.posting ? "posting..." : formatTime(photo.ts)}</span>
          </div>
          <div class="mission-tag">${escapeHtml(photo.missionTitle)} <span class="mono">+${Number(photo.pts || 0)}</span></div>
          ${photo.caption ? `<div>${escapeHtml(photo.caption)}</div>` : ""}
          <div class="reactions">
            ${REACTIONS.map(emoji => `<button class="reaction ${mine === emoji ? "active" : ""}" data-action="react" data-photo="${photo.id}" data-emoji="${emoji}" ${photo.posting ? "disabled" : ""}>${emoji} <span class="mono">${counts[emoji] || 0}</span></button>`).join("")}
          </div>
          ${photo.name === state.name && !photo.posting ? `<button class="btn small red photo-delete" data-action="deletePhoto" data-photo="${photo.id}">DELETE PHOTO</button>` : ""}
        </div>
      </article>`;
    }

    function reactionCounts(photo) {
      const out = {};
      REACTIONS.forEach(emoji => out[emoji] = Object.keys(photo.reactions?.[emoji] || {}).length);
      return out;
    }

    function myReaction(photo) {
      return REACTIONS.find(emoji => photo.reactions?.[emoji]?.[state.name]) || "";
    }

    function reactionNames(photo) {
      return [...new Set(REACTIONS.flatMap(emoji => Object.keys(photo.reactions?.[emoji] || {})))];
    }

    function hotseatTab() {
      const activeDare = state.hotseat && state.hotseat.status === "open";
      const spinText = activeDare
        ? `🎯 WAITING ON ${state.hotseat.target}`
        : state.spinning
          ? "🎯 SPINNING"
          : "🎯 SPIN THE WHEEL";
      return `<div class="stack">
        <section class="panel sand tight">
          <h1 class="section-title">Hot Seat</h1>
          <p class="muted" style="margin:0">Spin to throw a random crew member into the hot seat with a random dare. Spinning pays +3, surviving pays +25, chickening out costs -10.</p>
          <div class="wheel">
            ${state.spinning ? `<div><div class="mini muted" style="color:var(--falls)">LOCKING ON...</div><div class="wheel-name">${escapeHtml(state.spinningName || "???")}</div></div>` : activeDare ? `<div><div class="mini muted" style="color:rgba(247,237,220,.76)">ACTIVE DARE</div><div class="wheel-name">${escapeHtml(state.hotseat.target)}</div></div>` : `<div><div class="mini muted" style="color:rgba(247,237,220,.76)">READY</div><div class="wheel-name">SPIN</div></div>`}
          </div>
          <button class="btn" data-action="spin" ${state.spinning || activeDare ? "disabled" : ""}>${escapeHtml(spinText)}</button>
        </section>
        ${currentDare()}
        <section class="panel">
          <h2 class="section-title">Dare History</h2>
          ${state.history.length ? state.history.map(dare => `
            <div class="history-row">
              <span style="font-size:24px">${dare.status === "done" ? "🔥" : dare.status === "chickened" ? "🐔" : "⌛"}</span>
              <div><strong>${escapeHtml(dare.target)}</strong><br><span class="muted">${escapeHtml(dare.task)}</span></div>
              <time class="mono mini muted">${formatTime(dare.ts)}</time>
            </div>`).join("") : `<div class="empty">${activeDare ? "No completed dares yet." : "No completed dares yet - the wheel is ready."}</div>`}
        </section>
      </div>`;
    }

    function currentDare() {
      const dare = state.hotseat;
      if (!dare || dare.status !== "open") {
        return `<section class="panel"><div class="empty">No one is in the hot seat right now.</div></section>`;
      }
      const expired = Date.now() - Number(dare.ts || 0) > 30 * 60 * 1000;
      const mine = dare.target === state.name;
      return `<section class="panel ${mine ? "red" : "dark"} tight">
        <div class="between">
          <h2 class="section-title" style="color:inherit;margin:0">${mine ? "You're Up" : `${escapeHtml(dare.target)} Is Up`}</h2>
          <span class="mono mini">by ${escapeHtml(dare.by)}</span>
        </div>
        <p class="dare-task">${escapeHtml(dare.task)}</p>
        ${mine ? `
          <div class="row">
            <button class="btn moss" data-action="resolve" data-result="done">NAILED IT +25</button>
            <button class="btn red" data-action="resolve" data-result="chickened">CHICKEN OUT -10</button>
          </div>` : `<p class="muted" style="color:rgba(247,237,220,.76)">Waiting on ${escapeHtml(dare.target)}... apply peer pressure generously.</p>`}
        ${expired ? `<button class="btn ghost" data-action="expire">Mark expired</button>` : ""}
      </section>`;
    }

    function cardsTab() {
      return `<div class="stack">
        <section class="panel sand">
          <h1 class="section-title">Wild Cards</h1>
          <p class="muted" style="margin:0">Your secret powers. Use a card when you want its advantage; the crew follows the card. One use each.</p>
        </section>
        <div class="card-hand">
          ${state.hand.length ? state.hand.map((card, index) => renderWildCard(card, index, false)).join("") : missingHandHtml()}
        </div>
      </div>`;
    }

    function missingHandHtml() {
      if (!state.loaded.hand) {
        return `<div class="panel"><div class="empty">Your cards are still loading.</div></div>`;
      }
      return `<div class="panel tight">
        <div class="empty">No wild cards found for ${escapeHtml(state.name || "this player")}.</div>
        <button class="btn sand" data-action="repairHand">DEAL MY CARDS</button>
      </div>`;
    }

    function renderWildCard(card, index, reveal) {
      return `<article class="wild-card ${card.used ? "used" : ""}">
        <div class="emoji">${card.emoji}</div>
        <h3 class="bungee">${escapeHtml(card.name)}</h3>
        <p>${escapeHtml(card.desc)}</p>
        ${card.used ? `<p class="mono mini">✅ used ${formatDateTime(card.usedAt)}</p>` : reveal ? "" : `<button class="btn" data-action="playCard" data-index="${index}" aria-label="Use ${escapeHtml(card.name)} card for 5 points">USE CARD (+5)</button>`}
      </article>`;
    }

    function ranksTab() {
      const rows = scoreRows();
      const leaderScore = Math.max(1, Number(rows[0]?.[1] || 1));
      return `<div class="stack">
        <section class="panel sand">
          <h1 class="section-title">Leaderboard</h1>
          <p class="muted" style="margin:0">Everything pays: joining +25, votes +10, missions +10-30, hot seat +25, reactions, pumps, cards. Trip champion gets bragging rights and a doughnut from everyone else.</p>
        </section>
        <section class="panel">
          ${rows.length ? rows.map(([name, score], index) => {
            const rank = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : String(index + 1);
            const pct = Math.max(0, Math.min(100, (Number(score) || 0) / leaderScore * 100));
            return `<div class="rank-row ${name === state.name ? "you" : ""}">
              <strong class="mono">${rank}</strong>
              ${avatar(name)}
              <div><strong>${escapeHtml(name)}${name === state.name ? " (you)" : ""}</strong></div>
              <strong class="mono">${Number(score || 0)}</strong>
              <div class="rankbar"><span style="width:${pct}%"></span></div>
            </div>`;
          }).join("") : `<div class="empty">No scores yet. Impossible, but dramatic.</div>`}
        </section>
      </div>`;
    }

    function tabbar() {
      const openDare = state.hotseat && state.hotseat.status === "open";
      const locked = Boolean(state.confirmDialog);
      return `<nav class="tabbar ${locked ? "modal-locked" : ""}" aria-label="Main tabs">
        ${TABS.map(([key, icon, label]) => {
          const active = state.tab === key;
          const hasBadge = (key === "home" && state.activityDot) || (key === "missions" && state.photoDot) || (key === "hotseat" && openDare) || (key === "ranks" && state.rankDot);
          return `<button class="tab ${active ? "active" : ""}" data-tab="${key}" aria-current="${active ? "page" : "false"}" aria-pressed="${active ? "true" : "false"}" ${locked ? `disabled aria-disabled="true"` : ""}>
          <span class="ico">${icon}</span><span>${label}</span>
          ${hasBadge ? `<i class="badge-dot"></i>` : ""}
        </button>`;
        }).join("")}
      </nav>`;
    }

    function activatePlayerSession(name) {
      const clean = sanitizeName(name);
      if (!clean) return;
      const previousName = state.name;
      storeName(clean);
      state.name = clean;
      state.nameDraft = clean;
      if (previousName !== clean) {
        state.selectedStopId = "";
        state.revealCards = null;
      }
      attachLobbyListeners();
      if (!tripLocked()) {
        attachGlobalListeners();
        attachPlayerListeners();
        prepareActiveTab();
      }
    }

    async function join() {
      const clean = sanitizeName(state.nameDraft || document.getElementById("nameInput")?.value);
      const allowed = invitedNameOptions();
      if (!clean) return toast("Pick your invited name first.");
      if (!allowed.includes(clean)) return toast("That name is not on the invite list.");
      const code = normalizeInviteCode(state.inviteCodeDraft || document.getElementById("inviteCodeInput")?.value);
      if (!localMode && !code) return toast("Enter your private trip code.");
      try {
        if (!localMode) {
          const user = activeFirebaseUser();
          if (!user) return toast("Auth is still starting. Try again.");
          const codeHash = await sha256Hex(code);
          await ref(`players/${user.uid}`).set({
            name: clean,
            codeHash,
            joinedAt: Date.now()
          });
          await ref(`playerNames/${clean}`).set(user.uid);
        }
        await ref(`roster/${clean}`).transaction(current => current === true ? undefined : true);
        activatePlayerSession(clean);
        if (tripLocked()) {
          toast("You are checked into the lobby.");
          state.revealCards = null;
        } else {
          await ensureGameEntry(clean, document.querySelector("[data-action='join']"));
        }
        render();
      } catch (error) {
        recordError("join.failed", error, {
          selectedName: clean,
          selectedNameInInviteList: allowed.includes(clean),
          invitedNameCount: allowed.length
        });
        toast(friendlyJoinError(error));
        console.warn(error);
        render();
      }
    }

    async function ensureGameEntry(name, target) {
      if (!name || tripLocked()) return;
      const startId = id();
      try {
        const result = await ref(`gameStarts/${name}`).transaction(current => {
          if (current) return current;
          return { id: startId, ts: Date.now() };
        });
        const firstGameStart = result.committed && result.snapshot.val()?.id === startId;
        const cards = await ensurePlayerHand(name);
        if (firstGameStart) {
          await addScore(name, 25, target);
          await pushFeed(`🚗 ${name} hopped in the car (+25)`, name);
          if (cards && name === state.name) state.revealCards = cards;
        }
      } catch (error) {
        toast("Game start did not sync. Try again.");
        console.warn(error);
      }
    }

    function shuffleCards(cards) {
      const deck = [...cards];
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
    }

    function cardById(cardId) {
      return DECK.find(card => card.id === cardId);
    }

    function cardsFromIds(cardIds) {
      return cardIds
        .map(cardById)
        .filter(Boolean)
        .map(card => ({ ...card, used: false }));
    }

    async function claimUniqueCards(name) {
      const result = await ref("cardClaims").transaction(current => {
        const claims = current && typeof current === "object" && !Array.isArray(current) ? { ...current } : {};
        const alreadyMine = DECK.map(card => card.id).filter(cardId => claims[cardId] === name);
        if (alreadyMine.length >= 2) return claims;
        const claimed = new Set(Object.keys(claims).filter(cardId => claims[cardId]));
        const available = DECK.map(card => card.id).filter(cardId => !claimed.has(cardId));
        shuffleCards(available).slice(0, 2 - alreadyMine.length).forEach(cardId => {
          claims[cardId] = name;
        });
        return claims;
      });
      const claims = result.snapshot.val() || {};
      let cardIds = DECK.map(card => card.id).filter(cardId => claims[cardId] === name).slice(0, 2);
      if (cardIds.length < 2) {
        const fallback = shuffleCards(DECK.map(card => card.id))
          .filter(cardId => !cardIds.includes(cardId))
          .slice(0, 2 - cardIds.length);
        cardIds = [...cardIds, ...fallback];
      }
      return cardsFromIds(cardIds);
    }

    async function ensurePlayerHand(name) {
      const handSnap = await ref(`hands/${name}`).once("value");
      if (handSnap.exists()) return null;
      const cards = await claimUniqueCards(name);
      await ref(`hands/${name}`).set(cards);
      return cards;
    }

    async function repairHand() {
      if (!state.name) return;
      if (!ensureTripOpen()) return;
      try {
        const cards = await ensurePlayerHand(state.name);
        toast(cards ? "Fresh cards dealt." : "Cards are already dealt.");
      } catch (error) {
        toast("Cards did not deal. Try again.");
        console.warn(error);
      }
    }

    async function ensureLocalPlayerJoined() {
      if (!localMode || !state.name) return;
      try {
        const result = await ref(`roster/${state.name}`).transaction(current => current === true ? undefined : true);
        if (result.committed) {
          await ensurePlayerHand(state.name);
          await ref(`scores/${state.name}`).transaction(value => (Number(value) || 0) + 25);
          await pushFeed(`🚗 ${state.name} hopped in the car (+25)`);
        } else {
          await ensurePlayerHand(state.name);
        }
      } catch (error) {
        console.warn(error);
      }
    }

    async function ensureLocalLobbyJoined() {
      if (!localMode || !state.name || !tripLocked()) return;
      try {
        await ref(`roster/${state.name}`).transaction(current => current === true ? undefined : true);
      } catch (error) {
        console.warn(error);
      }
    }

    async function pump(target) {
      if (!ensureTripOpen()) return;
      try {
        await ref("hype/count").transaction(value => (Number(value) || 0) + 1);
        const result = await ref(`hype/by/${state.name}`).transaction(value => (Number(value) || 0) + 1);
        const newCount = Number(result.snapshot.val() || 0);
        if (newCount <= 30) await addScore(state.name, 1, target);
      } catch (error) {
        toast("Pump did not sync.");
        console.warn(error);
      }
    }

    async function vote(choice, target) {
      if (!ensureTripOpen()) return;
      const previous = state.votes[state.name];
      state.routeChoice = choice;
      state.votes = { ...state.votes, [state.name]: choice };
      render();
      let firstVote = false;
      try {
        const result = await ref(`votes/${state.name}`).transaction(current => {
          firstVote = current == null;
          return choice;
        });
        if (result.committed && firstVote) {
          await addScore(state.name, 10, target);
          await pushFeed(`🗳️ ${state.name} voted for Option ${choice} (+10)`);
        }
      } catch (error) {
        if (previous) state.votes[state.name] = previous; else delete state.votes[state.name];
        toast("Vote did not sync.");
        render();
        console.warn(error);
      }
    }

    async function stopVote(stopId, vibe, target) {
      if (!ensureTripOpen()) return;
      if (!stopId || !STOP_VIBES.some(item => item.id === vibe)) return;
      const route = ROUTE_KEY;
      const stopName = routeStops().find(item => item.id === stopId)?.name || "a route stop";
      const previous = state.stopVotes?.[route]?.[stopId]?.[state.name];
      state.selectedStopId = stopId;
      state.stopVotes = {
        ...state.stopVotes,
        [route]: {
          ...(state.stopVotes?.[route] || {}),
          [stopId]: {
            ...(state.stopVotes?.[route]?.[stopId] || {}),
            [state.name]: vibe
          }
        }
      };
      render();
      const ts = Date.now();
      const vibeLabel = STOP_VIBES.find(item => item.id === vibe)?.label || "vote";
      const feedText = previous !== vibe ? `🗺️ ${state.name} marked ${stopName}: ${vibeLabel}` : "";
      if (!canSyncNow()) {
        enqueueAction("stopVote", {
          id: `stop_${route}_${stopId}_${state.name}`,
          route,
          stopId,
          vibe,
          name: state.name,
          ts,
          feedId: feedText ? `feed_stop_${ts}_${id().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 20)}` : "",
          feedText
        });
        toast(`${vibeLabel} saved for retry.`);
        return;
      }
      try {
        await ref(`stopVotes/${route}/${stopId}/${state.name}`).set(vibe);
        toast(`${vibeLabel} marked.`);
        if (previous !== vibe) await pushFeed(`🗺️ ${state.name} marked ${stopName}: ${vibeLabel}`);
        target?.classList.add("active");
      } catch (error) {
        if (isRetryableSyncError(error)) {
          enqueueAction("stopVote", {
            id: `stop_${route}_${stopId}_${state.name}`,
            route,
            stopId,
            vibe,
            name: state.name,
            ts,
            feedId: feedText ? `feed_stop_${ts}_${id().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 20)}` : "",
            feedText
          });
          toast(`${vibeLabel} saved. It will retry when signal returns.`);
          return;
        }
        const routeVotes = { ...(state.stopVotes?.[route] || {}) };
        const stopVotes = { ...(routeVotes[stopId] || {}) };
        if (previous) stopVotes[state.name] = previous; else delete stopVotes[state.name];
        routeVotes[stopId] = stopVotes;
        state.stopVotes = { ...state.stopVotes, [route]: routeVotes };
        toast("Stop vote did not sync.");
        render();
        console.warn(error);
      }
    }

    function applyLocalLevelTask(stopId, taskId, checked, ts = Date.now()) {
      const current = playerRouteProgress(ROUTE_KEY, state.name);
      const tasks = { ...(current.tasks || {}) };
      const stopTasks = { ...(tasks[stopId] || {}) };
      if (checked) stopTasks[taskId] = { by: state.name, ts };
      else delete stopTasks[taskId];
      setPlayerRouteProgress(ROUTE_KEY, state.name, {
        ...current,
        tasks: {
          ...tasks,
          [stopId]: stopTasks
        }
      });
      state.selectedStopId = stopId;
    }

    async function toggleLevelTask(stopId, taskId) {
      if (!ensureTripOpen()) return;
      if (!state.name) return toast("Join the crew first.");
      const stops = routeStops();
      const stop = stops.find(item => item.id === stopId);
      const task = stop?.tasks?.find(item => item.id === taskId);
      if (!stop || !task) return;
      const checkedNext = !Boolean(levelTaskData(stopId)[taskId]);
      const ts = Date.now();
      if (!canSyncNow()) {
        applyLocalLevelTask(stopId, taskId, checkedNext, ts);
        enqueueAction("levelTask", {
          id: `task_${ROUTE_KEY}_${stopId}_${taskId}_${state.name}`,
          name: state.name,
          stopId,
          taskId,
          checked: checkedNext,
          ts
        });
        render();
        toast(checkedNext ? "Checklist saved for retry." : "Checklist clear saved for retry.");
        return;
      }
      let checked = false;
      try {
        const result = await ref(`routeProgress/${ROUTE_KEY}/players/${state.name}`).transaction(current => {
          current = current || {};
          const completed = current.completed || {};
          if (completed[stop.id]) return;
          const firstOpen = stops.findIndex(item => !completed[item.id]);
          const currentIndex = firstOpen === -1 ? stops.length - 1 : Math.max(0, firstOpen);
          if (stop.level - 1 > currentIndex) return;

          const tasks = current.tasks || {};
          const stopTasks = { ...(tasks[stopId] || {}) };
          if (stopTasks[taskId]) {
            delete stopTasks[taskId];
            checked = false;
          } else {
            stopTasks[taskId] = { by: state.name, ts: Date.now() };
            checked = true;
          }
          return {
            ...current,
            tasks: {
              ...tasks,
              [stopId]: stopTasks
            }
          };
        });
        if (!result.committed) return toast("That checklist is locked right now.");
        state.selectedStopId = stopId;
        setPlayerRouteProgress(ROUTE_KEY, state.name, result.snapshot.val() || {});
        render();
        toast(checked ? "Checklist item checked." : "Checklist item cleared.");
      } catch (error) {
        if (isRetryableSyncError(error)) {
          applyLocalLevelTask(stopId, taskId, checkedNext, ts);
          enqueueAction("levelTask", {
            id: `task_${ROUTE_KEY}_${stopId}_${taskId}_${state.name}`,
            name: state.name,
            stopId,
            taskId,
            checked: checkedNext,
            ts
          });
          render();
          toast("Checklist saved. It will retry when signal returns.");
          return;
        }
        toast("Checklist did not sync.");
        render();
        console.warn(error);
      }
    }

    async function completeLevel(stopId, target) {
      if (!ensureTripOpen()) return;
      if (!state.name) return toast("Join the crew first.");
      const route = ROUTE_KEY;
      const stops = routeStops();
      const progress = routeLevelProgress(route, stops);
      const stop = stops.find(item => item.id === stopId);
      if (!stop) return;
      if (progress.allDone) return toast("All your route levels are already complete.");
      if (progress.currentStop?.id !== stop.id) {
        return toast(`Level ${progress.currentIndex + 1} is up next.`);
      }
      if (!levelTasksDone(stop)) {
        return toast("Finish the level checklist first.");
      }

      const completionTs = Date.now();
      const queueId = `complete_${route}_${stop.id}_${state.name}_${completionTs}`;
      const stamp = { by: state.name, ts: completionTs, queueId };
      const nextStop = stops[stop.level] || stop;

      if (!canSyncNow()) {
        setPlayerRouteProgress(route, state.name, {
          ...playerRouteProgress(route, state.name),
          completed: {
            ...completedLevels(route),
            [stop.id]: stamp
          }
        });
        state.selectedStopId = nextStop.id;
        enqueueAction("completeLevel", {
          id: queueId,
          name: state.name,
          stopId: stop.id,
          ts: completionTs,
          feedId: `feed_complete_${completionTs}_${id().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 20)}`
        });
        render();
        toast(`Level ${nextStop.level === stop.level ? stop.level : nextStop.level} saved. Points sync when signal returns.`);
        return;
      }

      try {
        const result = await ref(`routeProgress/${route}/players/${state.name}`).transaction(current => {
          current = current || {};
          const completed = current.completed || {};
          if (completed[stop.id]) return;
          const firstOpen = stops.findIndex(item => !completed[item.id]);
          if (firstOpen === -1 || stops[firstOpen]?.id !== stop.id) return;
          const stopTasks = current.tasks?.[stop.id] || {};
          if (!stop.tasks.every(item => stopTasks[item.id])) return;
          return {
            ...current,
            completed: {
              ...completed,
              [stop.id]: stamp
            }
          };
        });
        if (!result.committed) {
          toast("Your level state changed. Check the current level and tasks.");
          return;
        }
        setPlayerRouteProgress(route, state.name, result.snapshot.val() || {});
        state.selectedStopId = nextStop.id;
        render();
        await addScore(state.name, 15, target);
        await pushFeed(`🏁 ${state.name} cleared Level ${stop.level}: ${stop.name} (+15)`, state.name);
        if (stop.level >= stops.length) {
          toast("All your route levels cleared!");
          burstConfetti();
        } else {
          toast(`Your Level ${nextStop.level} unlocked.`);
        }
        target?.classList.add("active");
      } catch (error) {
        if (isRetryableSyncError(error)) {
          setPlayerRouteProgress(route, state.name, {
            ...playerRouteProgress(route, state.name),
            completed: {
              ...completedLevels(route),
              [stop.id]: stamp
            }
          });
          state.selectedStopId = nextStop.id;
          enqueueAction("completeLevel", {
            id: queueId,
            name: state.name,
            stopId: stop.id,
            ts: completionTs,
            feedId: `feed_complete_${completionTs}_${id().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 20)}`
          });
          toast("Level saved. It will retry when signal returns.");
          render();
          return;
        }
        state.selectedStopId = stop.id;
        toast("Level did not sync.");
        render();
        console.warn(error);
      }
    }

    async function reopenLevel(stopId) {
      if (!ensureTripOpen()) return;
      if (!state.name) return toast("Join the crew first.");
      const route = ROUTE_KEY;
      const stops = routeStops();
      const stop = stops.find(item => item.id === stopId);
      if (!stop) return;
      const completed = completedLevels(route);
      const idsToRemove = stops
        .filter(item => item.level >= stop.level && completed[item.id])
        .map(item => item.id);
      if (!idsToRemove.length) return;
      if (!await askConfirm(`Reopen your Level ${stop.level} and reset your later completed levels?`, "Reopen", "Reopen your level?")) return;

      try {
        const result = await ref(`routeProgress/${route}/players/${state.name}`).transaction(current => {
          current = current || {};
          const nextCompleted = { ...(current.completed || {}) };
          const nextTasks = { ...(current.tasks || {}) };
          stops
            .filter(item => item.level >= stop.level)
            .forEach(item => {
              delete nextCompleted[item.id];
              delete nextTasks[item.id];
            });
          return {
            ...current,
            completed: nextCompleted,
            tasks: nextTasks
          };
        });
        if (!result.committed) return toast("Level reset did not sync.");
        setPlayerRouteProgress(route, state.name, result.snapshot.val() || {});
        state.selectedStopId = stop.id;
        render();
        await pushFeed(`↩️ ${state.name} reopened their Level ${stop.level}: ${stop.name}`);
        toast(`Your Level ${stop.level} is active again.`);
      } catch (error) {
        toast("Level reset did not sync.");
        render();
        console.warn(error);
      }
    }

    async function playCard(index, target) {
      if (!ensureTripOpen()) return;
      const card = state.hand[index];
      if (!card || card.used) return;
      if (!await askConfirm(`Use ${card.name} now? The whole crew will see this card's advantage.`, "Use card", "Use wild card?")) return;
      const prior = state.hand.map(item => ({ ...item }));
      const usedCard = { ...card, used: true, usedAt: Date.now() };
      delete usedCard.skipped;
      delete usedCard.skippedAt;
      state.hand[index] = usedCard;
      render();
      try {
        const result = await ref(`hands/${state.name}/${index}`).transaction(current => {
          if (!current || current.used) return;
          const next = { ...current, used: true, usedAt: Date.now() };
          delete next.skipped;
          delete next.skippedAt;
          return next;
        });
        if (result.committed) {
          await addScore(state.name, 5, target);
          await pushFeed(`🃏 ${state.name} used ${card.emoji} ${card.name.toUpperCase()}! ${card.desc} (+5)`);
        } else {
          toast("That card was already used.");
        }
      } catch (error) {
        state.hand = prior;
        toast("Card play did not sync.");
        render();
        console.warn(error);
      }
    }

    async function spin(target) {
      if (!ensureTripOpen()) return;
      const eligible = state.roster.filter(name => name !== state.name);
      if (!eligible.length) return toast("No one else has joined yet - share the link first!");
      if (state.hotseat && state.hotseat.status === "open") return toast("Someone's already in the hot seat - let them finish!");
      state.spinning = true;
      render();
      let ticks = 0;
      const interval = setInterval(() => {
        state.spinningName = eligible[ticks % eligible.length];
        ticks++;
        render();
      }, 90);
      await new Promise(resolve => setTimeout(resolve, 1800));
      clearInterval(interval);
      const chosen = eligible[Math.floor(Math.random() * eligible.length)];
      const task = DARES[Math.floor(Math.random() * DARES.length)];
      state.spinningName = chosen;
      render();
      await new Promise(resolve => setTimeout(resolve, 220));
      const dare = { id: id(), target: chosen, task, by: state.name, ts: Date.now(), status: "open" };
      try {
        const result = await ref("hotseat/current").transaction(current => current ? undefined : dare);
        if (!result.committed) {
          toast("Someone's already in the hot seat - let them finish!");
        } else {
          await addScore(state.name, 3, target);
          await pushFeed(`🎯 ${state.name} spun the wheel - ${chosen} is in the HOT SEAT!`);
        }
      } catch (error) {
        toast("Spin did not sync.");
        console.warn(error);
      } finally {
        state.spinning = false;
        state.spinningName = "";
        render();
      }
    }

    async function resolveDare(status, target) {
      if (!ensureTripOpen()) return;
      const dare = state.hotseat;
      if (!dare || dare.target !== state.name) return;
      const history = { ...dare, status, resolvedAt: Date.now() };
      try {
        await ref(`hotseat/history/${dare.id}`).set(history);
        const result = await ref("hotseat/current").transaction(current => {
          if (!current || current.id !== dare.id || current.status !== "open") return;
          return null;
        });
        if (!result.committed) {
          await ref(`hotseat/history/${dare.id}`).remove();
          return toast("That dare already changed.");
        }
        pruneHistory();
        if (status === "done") {
          await addScore(state.name, 25, target);
          await pushFeed(`🔥 ${state.name} SURVIVED the hot seat: "${dare.task}" (+25)`);
          burstConfetti();
        } else {
          await addScore(state.name, -10, target);
          await pushFeed(`🐔 ${state.name} chickened out of the hot seat (-10)`);
        }
      } catch (error) {
        toast("Dare did not resolve.");
        console.warn(error);
      }
    }

    async function expireDare() {
      if (!ensureTripOpen()) return;
      const dare = state.hotseat;
      if (!dare || Date.now() - Number(dare.ts || 0) <= 30 * 60 * 1000) return;
      const history = { ...dare, status: "expired", resolvedAt: Date.now() };
      try {
        await ref(`hotseat/history/${dare.id}`).set(history);
        const result = await ref("hotseat/current").transaction(current => {
          if (!current || current.id !== dare.id || current.status !== "open") return;
          return null;
        });
        if (!result.committed) {
          await ref(`hotseat/history/${dare.id}`).remove();
          return toast("That dare already changed.");
        }
        pruneHistory();
        await pushFeed(`⌛ ${dare.target}'s hot seat dare expired.`);
      } catch (error) {
        toast("Could not expire the dare.");
        console.warn(error);
      }
    }

    async function pruneHistory() {
      try {
        const snap = await ref("hotseat/history").orderByChild("ts").once("value");
        const rows = [];
        snap.forEach(child => rows.push([child.key, child.val()?.ts || 0]));
        rows.sort((a, b) => b[1] - a[1]).slice(15).forEach(([key]) => ref(`hotseat/history/${key}`).remove());
      } catch (error) {
        console.warn(error);
      }
    }

    function pickMission(missionId) {
      if (!ensureTripOpen()) return;
      const mission = MISSIONS.find(item => item.id === missionId);
      if (!mission) return;
      state.pendingMissionId = missionId;
      photoInput.value = "";
      clearTimeout(photoPromptTimer);
      toast(`Choose a photo for ${mission.title}.`);
      photoPromptTimer = setTimeout(() => {
        if (state.pendingMissionId === missionId) toast("No photo selected yet.");
      }, 1600);
      photoInput.click();
    }

    async function handlePhotoFile(file) {
      if (!ensureTripOpen()) return;
      const mission = MISSIONS.find(item => item.id === state.pendingMissionId);
      clearTimeout(photoPromptTimer);
      if (!mission) return;
      if (!file) {
        toast("No photo selected.");
        return;
      }
      if (!canSyncNow()) {
        toast("Photo upload needs signal. Try again when the connection is back.");
        return;
      }
      const photoId = id();
      const tempId = `temp-${photoId}`;
      const claimPath = `missionClaims/${mission.id}/${state.name}`;
      let wroteClaim = false;
      let postedPhoto = false;
      try {
        toast("Compressing photo...");
        const dataUrl = await compressImage(file);
        const caption = state.caption.trim().slice(0, 80);
        const tempPhoto = {
          id: tempId, name: state.name, missionId: mission.id, missionTitle: mission.title,
          pts: mission.pts, caption, dataUrl, ts: Date.now(), reactions: {}, posting: true
        };
        state.optimisticPhotos.unshift(tempPhoto);
        state.caption = "";
        render();

        let firstCompletion = false;
        const claimValue = { photoId, ts: Date.now() };
        const claim = await ref(claimPath).transaction(current => {
          firstCompletion = !current;
          return current || claimValue;
        });
        wroteClaim = claim.committed && firstCompletion;
        const pts = claim.committed && firstCompletion ? mission.pts : 10;
        const photo = {
          name: state.name,
          missionId: mission.id,
          missionTitle: mission.title,
          pts,
          caption,
          dataUrl,
          ts: Date.now(),
          reactions: {}
        };
        await ref(`photos/${photoId}`).set(photo);
        postedPhoto = true;
        await addScore(state.name, pts, document.querySelector(`[data-mission="${mission.id}"]`));
        await pushFeed(`📸 ${state.name} completed "${mission.title}" (+${pts})`);
        state.optimisticPhotos = state.optimisticPhotos.filter(item => item.id !== tempId);
        render();
      } catch (error) {
        if (postedPhoto) {
          try { await ref(`photos/${photoId}`).remove(); } catch (rollbackError) { console.warn(rollbackError); }
        }
        if (wroteClaim) {
          try {
            await ref(claimPath).transaction(current => current?.photoId === photoId ? null : current);
          } catch (rollbackError) {
            console.warn(rollbackError);
          }
        }
        state.optimisticPhotos = state.optimisticPhotos.filter(item => !item.posting);
        toast(error.message || "Photo did not post.");
        render();
        console.warn(error);
      }
    }

    function compressImage(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error("Could not read that photo."));
        reader.onload = () => {
          const img = new Image();
          img.onerror = () => reject(new Error("That image could not be opened."));
          img.onload = () => {
            const maxEdge = 520;
            const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
            const canvas = document.createElement("canvas");
            canvas.width = Math.max(1, Math.round(img.width * scale));
            canvas.height = Math.max(1, Math.round(img.height * scale));
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            let dataUrl = canvas.toDataURL("image/jpeg", .56);
            if (dataUrlBytes(dataUrl) > PHOTO_CACHE_MAX_BYTES) dataUrl = canvas.toDataURL("image/jpeg", .4);
            if (dataUrlBytes(dataUrl) > PHOTO_CACHE_MAX_BYTES) reject(new Error("Photo is still too large after compression."));
            else resolve(dataUrl);
          };
          img.src = reader.result;
        };
        reader.readAsDataURL(file);
      });
    }

    function dataUrlBytes(dataUrl) {
      const comma = dataUrl.indexOf(",");
      const base64 = comma >= 0 ? dataUrl.slice(comma + 1) : dataUrl;
      return Math.ceil(base64.length * 3 / 4);
    }

    async function deletePhoto(photoId) {
      if (!ensureTripOpen()) return;
      const photo = state.photos.find(item => item.id === photoId);
      if (!photo) return toast("Photo is already gone.");
      if (photo.name !== state.name) return toast("Only the person who posted this photo can delete it.");
      if (!canSyncNow()) return toast("Photo delete needs signal. Try again when the connection is back.");
      if (!await askConfirm("Delete this photo from the wall and reverse its photo/reaction points?", "Delete photo", "Delete photo?")) return;

      const priorPhotos = state.photos;
      const priorClaims = state.missionClaims;
      const reactors = reactionNames(photo).filter(name => name && name !== photo.name);
      const ownerDelta = -Number(photo.pts || 0) - reactors.length * 3;
      state.photos = state.photos.filter(item => item.id !== photoId);
      if (state.missionClaims?.[photo.missionId]?.[photo.name]?.photoId === photoId) {
        const missionClaim = { ...(state.missionClaims[photo.missionId] || {}) };
        delete missionClaim[photo.name];
        state.missionClaims = {
          ...state.missionClaims,
          [photo.missionId]: missionClaim
        };
      }
      render();

      try {
        const claimPath = `missionClaims/${photo.missionId}/${photo.name}`;
        await ref(claimPath).transaction(current => current?.photoId === photoId ? null : current);
        await ref(`photos/${photoId}`).remove();
        if (ownerDelta) await addScore(photo.name, ownerDelta);
        for (const reactor of reactors) await addScore(reactor, -2);
        await pushFeed(`🗑️ ${state.name} deleted a mission photo; points were adjusted.`);
        toast("Photo deleted.");
      } catch (error) {
        state.photos = priorPhotos;
        state.missionClaims = priorClaims;
        toast("Photo delete did not sync.");
        render();
        console.warn(error);
      }
    }

    async function react(photoId, emoji, target) {
      if (!ensureTripOpen()) return;
      const photo = state.photos.find(item => item.id === photoId);
      if (!state.name) return toast("Join the crew first.");
      if (!photo || !REACTIONS.includes(emoji)) return;
      const prior = JSON.parse(JSON.stringify(photo.reactions || {}));
      state.photos = state.photos.map(item => {
        if (item.id !== photoId) return item;
        const next = JSON.parse(JSON.stringify(item));
        next.reactions = next.reactions || {};
        REACTIONS.forEach(e => {
          next.reactions[e] = next.reactions[e] || {};
          delete next.reactions[e][state.name];
        });
        next.reactions[emoji] = next.reactions[emoji] || {};
        next.reactions[emoji][state.name] = true;
        return next;
      });
      render();
      const reactionTs = Date.now();
      if (!canSyncNow()) {
        enqueueAction("reaction", {
          id: `reaction_${photoId}_${state.name}`,
          name: state.name,
          photoId,
          emoji,
          ts: reactionTs
        });
        toast("Reaction saved for retry.");
        return;
      }
      const firstReaction = !REACTIONS.some(e => prior?.[e]?.[state.name]);
      try {
        await Promise.all(REACTIONS
          .filter(e => e !== emoji && prior?.[e]?.[state.name])
          .map(e => ref(`photos/${photoId}/reactions/${e}/${state.name}`).remove()));
        await ref(`photos/${photoId}/reactions/${emoji}/${state.name}`).set(true);
        if (firstReaction && photo.name !== state.name) {
          await addScore(state.name, 2, target);
          await addScore(photo.name, 3);
        }
        if (firstReaction) {
          await pushFeed(`${state.name} reacted ${emoji} to ${photo.name || "someone"}'s photo`, state.name);
        }
      } catch (error) {
        if (isRetryableSyncError(error)) {
          enqueueAction("reaction", {
            id: `reaction_${photoId}_${state.name}`,
            name: state.name,
            photoId,
            emoji,
            ts: reactionTs
          });
          toast("Reaction saved. It will retry when signal returns.");
          return;
        }
        state.photos = state.photos.map(item => item.id === photoId ? { ...item, reactions: prior } : item);
        toast("Reaction did not sync.");
        render();
        console.warn(error);
      }
    }

    function attachGlobalListeners() {
      if (globalListenersAttached) return;
      globalListenersAttached = true;
      ref(".info/connected").on("value", snap => {
        state.connected = snap.val() !== false;
        render();
        if (state.connected) drainActionQueue();
      });
      attachRosterListener();
      ref("scores").on("value", snap => {
        state.scores = snap.val() || {};
        const leader = scoreRows()[0]?.[0] || "";
        if (state.lastLeader && leader && leader !== state.lastLeader) {
          state.rankDot = true;
          clearTimeout(rankDotTimer);
          rankDotTimer = setTimeout(() => { state.rankDot = false; render(); }, 3000);
        }
        state.lastLeader = leader || state.lastLeader;
        state.loaded.scores = true;
        render();
      });
      ref("hype").on("value", snap => {
        const old = Number(state.hype.count || 0);
        state.hype = snap.val() || { count: 0, by: {} };
        const next = Number(state.hype.count || 0);
        if (!state.seenFullTank && old < 500 && next >= 500) {
          state.seenFullTank = true;
          burstConfetti();
        }
        state.loaded.hype = true;
        render();
      });
      ref("votes").on("value", snap => {
        state.votes = snap.val() || {};
        state.loaded.votes = true;
        render();
      });
      ref("stopVotes").on("value", snap => {
        state.stopVotes = snap.val() || {};
        state.loaded.stopVotes = true;
        render();
      });
      ref("routeProgress").on("value", snap => {
        state.routeProgress = snap.val() || {};
        state.loaded.routeProgress = true;
        render();
      });
      ref("feed").orderByChild("ts").limitToLast(10).on("value", snap => {
        const rows = [];
        snap.forEach(child => rows.push({ id: child.key, ...child.val() }));
        state.feed = rows.sort((a, b) => (b.ts || 0) - (a.ts || 0));
        notifyRemoteFeedItems(state.feed);
        state.loaded.feed = true;
        render();
      });
      ref("hotseat/current").on("value", snap => {
        const previousId = state.hotseat?.id;
        const previousTarget = state.hotseat?.target;
        state.hotseat = snap.val();
        if (state.hotseat && state.hotseat.id !== previousId && state.hotseat.target === state.name && previousTarget !== state.name) {
          navigator.vibrate?.(200);
        }
        state.loaded.hotseat = true;
        render();
      });
      ref("missionClaims").on("value", snap => {
        state.missionClaims = snap.val() || {};
        state.loaded.claims = true;
        render();
      });
    }

    function attachRosterListener() {
      if (rosterListenerAttached) return;
      rosterListenerAttached = true;
      ref("roster").on("value", snap => {
        state.roster = snap.exists() ? Object.keys(snap.val()).sort((a, b) => a.localeCompare(b)) : [];
        state.loaded.roster = true;
        render();
      });
    }

    function attachLobbyListeners() {
      attachRosterListener();
      if (lobbyListenerAttached) return;
      lobbyListenerAttached = true;
      ref("lobbyMessages").on("value", snap => {
        state.lobbyMessages = lobbyMessageRows(snap);
        state.loaded.lobby = true;
        render();
      });
    }

    function attachInviteListener() {
      ref("invitedNames").on("value", snap => {
        const rows = [];
        snap.forEach(child => {
          if (child.val()) rows.push(sanitizeName(child.key));
        });
        state.invitedNames = rows.filter(Boolean).sort((a, b) => a.localeCompare(b));
        state.loaded.invites = true;
        render();
      });
    }

    function attachPlayerListeners() {
      if (!state.name) return;
      if (handRef) handRef.off();
      handRef = ref(`hands/${state.name}`);
      handRef.on("value", snap => {
        const val = snap.val();
        state.hand = Array.isArray(val) ? val : Object.keys(val || {}).sort().map(key => val[key]);
        state.loaded.hand = true;
        render();
        if (!snap.exists() && state.name && repairingHandFor !== state.name) {
          repairingHandFor = state.name;
          ensurePlayerHand(state.name)
            .catch(error => {
              toast("Cards did not deal. Try again.");
              console.warn(error);
            })
            .finally(() => {
              if (repairingHandFor === state.name) repairingHandFor = "";
            });
        }
      });
    }

    function ensurePhotosListener(force = false) {
      if (photosQuery && !force) return;
      if (photosQuery) photosQuery.off();
      state.loaded.photos = false;
      photosQuery = ref("photos").orderByChild("ts").limitToLast(state.photoLimit);
      photosQuery.on("value", snap => {
        const rows = [];
        snap.forEach(child => rows.push({ id: child.key, ...child.val() }));
        const nextPhotos = rows.sort((a, b) => (b.ts || 0) - (a.ts || 0));
        if (state.tab !== "missions" && photoWallChanged(state.photos, nextPhotos)) state.photoDot = true;
        state.photos = nextPhotos;
        photosBootstrapped = true;
        state.loaded.photos = true;
        render();
      });
    }

    function ensureHistoryListener() {
      if (historyQuery) return;
      historyQuery = ref("hotseat/history").orderByChild("ts").limitToLast(15);
      historyQuery.on("value", snap => {
        const rows = [];
        snap.forEach(child => rows.push({ id: child.key, ...child.val() }));
        state.history = rows.sort((a, b) => ((b.resolvedAt || b.ts || 0) - (a.resolvedAt || a.ts || 0)));
        state.loaded.history = true;
        render();
      });
    }

    function startCountdown() {
      clearInterval(countdownTimer);
      countdownTimer = setInterval(() => {
        if (!tripLocked() && state.name && !globalListenersAttached) {
          attachGlobalListeners();
          attachPlayerListeners();
          prepareActiveTab();
          ensureGameEntry(state.name).finally(() => render());
          return;
        }
        if (!tripLocked() && document.querySelector(".join-card [data-countdown]")) {
          render();
          return;
        }
        if (tripLocked()) {
          const countdown = document.querySelector("[data-countdown]");
          if (countdown) countdown.outerHTML = countdownHtml(tripOpenAt());
          return;
        }
        if (!state.name || state.tab !== "home") return;
        const title = document.querySelector("[data-countdown-title]");
        const countdown = document.querySelector("[data-countdown]");
        if (!title || !countdown) return;
        title.textContent = countdownTitle();
        countdown.outerHTML = countdownHtml();
      }, 1000);
    }

    function registerServiceWorker() {
      if (!("serviceWorker" in navigator)) return;
      if (location.protocol !== "https:" && !localHostAllowed()) return;
      navigator.serviceWorker.register("/sw.js").catch(error => {
        recordError("service_worker.register_failed", error);
      });
    }

    window.addEventListener("online", () => {
      state.connected = true;
      render();
      drainActionQueue();
    });

    window.addEventListener("offline", () => {
      state.connected = false;
      render();
    });

    window.addEventListener("error", event => {
      recordError("window.error", event.error || event.message, {
        source: event.filename || "",
        line: event.lineno || 0,
        column: event.colno || 0
      });
      render();
    });

    window.addEventListener("unhandledrejection", event => {
      recordError("window.unhandledrejection", event.reason);
      render();
    });

    document.addEventListener("click", event => {
      const tab = event.target.closest("[data-tab]");
        if (tab) {
        if (state.confirmDialog) return;
        state.tab = tab.dataset.tab;
        if (state.tab === "home") state.activityDot = false;
        if (state.tab === "missions") state.photoDot = false;
        updateTabParam(state.tab);
        prepareActiveTab();
        render();
        requestAnimationFrame(() => window.scrollTo(0, 0));
        return;
      }
      const actionEl = event.target.closest("[data-action]");
      if (!actionEl) return;
      const action = actionEl.dataset.action;
      if (state.confirmDialog && action !== "confirmChoice") return;
      if (tripLocked() && !PRE_TRIP_ALLOWED_ACTIONS.has(action)) {
        ensureTripOpen();
        return;
      }
      if (action === "startLocal") startLocalMode();
      if (action === "seedLocal") seedLocalCrew();
      if (action === "switchLocal") switchLocalPlayer();
      if (action === "resetLocal") resetLocalGame();
      if (action === "join") join();
      if (action === "postLobbyComment") postLobbyComment();
      if (action === "copyDiagnostics") copyDiagnostics();
      if (action === "finishReveal") { state.revealCards = null; render(); }
      if (action === "confirmChoice") { resolveConfirm(actionEl.dataset.choice); return; }
      if (action === "pump") pump(actionEl);
      if (action === "vote") vote(actionEl.dataset.choice, actionEl);
      if (action === "routeToggle") { state.routeChoice = actionEl.dataset.choice; render(); }
      if (action === "selectStop") { state.selectedStopId = actionEl.dataset.stop; render(); }
      if (action === "stopVote") stopVote(actionEl.dataset.stop, actionEl.dataset.vibe, actionEl);
      if (action === "toggleLevelTask") toggleLevelTask(actionEl.dataset.stop, actionEl.dataset.task);
      if (action === "completeLevel") completeLevel(actionEl.dataset.stop, actionEl);
      if (action === "reopenLevel") reopenLevel(actionEl.dataset.stop);
      if (action === "spin") spin(actionEl);
      if (action === "resolve") resolveDare(actionEl.dataset.result, actionEl);
      if (action === "expire") expireDare();
      if (action === "playCard") playCard(Number(actionEl.dataset.index), actionEl);
      if (action === "repairHand") repairHand();
      if (action === "mission") pickMission(actionEl.dataset.mission);
      if (action === "react") react(actionEl.dataset.photo, actionEl.dataset.emoji, actionEl);
      if (action === "deletePhoto") deletePhoto(actionEl.dataset.photo);
      if (action === "loadPhotos") { state.photoLimit += PHOTO_LOAD_STEP; ensurePhotosListener(true); render(); }
    });

    document.addEventListener("input", event => {
      if (event.target.id === "nameInput") state.nameDraft = event.target.value;
      if (event.target.id === "inviteCodeInput") state.inviteCodeDraft = event.target.value;
      if (event.target.dataset.field === "lobbyDraft") state.lobbyDraft = event.target.value;
      if (event.target.dataset.field === "caption") state.caption = event.target.value;
    });

    document.addEventListener("change", event => {
      if (event.target.id === "nameInput") state.nameDraft = event.target.value;
      if (event.target.id === "inviteCodeInput") state.inviteCodeDraft = event.target.value;
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && state.confirmDialog) {
        event.preventDefault();
        resolveConfirm("cancel");
        return;
      }
      if (event.key === "Enter" && event.target.id === "nameInput") join();
      if (event.key === "Enter" && event.target.id === "lobbyCommentInput") postLobbyComment();
    });

    photoInput.addEventListener("change", event => handlePhotoFile(event.target.files?.[0]));

    function switchLocalPlayer() {
      if (!localMode) return;
      clearStoredName();
      clearLocalPlayerParam();
      if (handRef) handRef.off();
      handRef = null;
      state.name = "";
      state.nameDraft = "";
      state.selectedStopId = "";
      state.tab = "home";
      updateTabParam(state.tab);
      state.hand = [];
      state.loaded.hand = false;
      state.revealCards = null;
      render();
    }

    async function resetLocalGame() {
      if (!localMode) return;
      if (!await askConfirm("Reset all local test data on this browser?", "Reset", "Reset local test?")) return;
      localStorage.removeItem(LOCAL_DB_KEY);
      sessionStorage.removeItem(LOCAL_NAME_KEY);
      localStorage.setItem(LOCAL_MODE_KEY, "1");
      location.reload();
    }

    async function seedLocalCrew() {
      if (!localMode) startLocalMode();
      try {
        for (const [index, name] of LOCAL_TEST_NAMES.entries()) {
          await ref(`roster/${name}`).set(true);
          const scoreSnap = await ref(`scores/${name}`).once("value");
          if (!scoreSnap.exists()) await ref(`scores/${name}`).set(25 + (index % 4) * 3);
          await ensurePlayerHand(name);
          await ref(`hype/by/${name}`).transaction(value => Number(value || 0));
        }
        const demoMission = MISSIONS.find(mission => mission.id === "free") || MISSIONS[0];
        const demoPhotoSnap = await ref("photos/local-demo-photo").once("value");
        if (!demoPhotoSnap.exists()) {
          await ref("photos/local-demo-photo").set({
            name: "Blake",
            missionId: demoMission.id,
            missionTitle: demoMission.title,
            pts: demoMission.pts,
            caption: "Local test photo for reaction QA.",
            dataUrl: LOCAL_DEMO_PHOTO,
            ts: Date.now() - 1000,
            reactions: {}
          });
          await ref(`missionClaims/${demoMission.id}/Blake`).set({ photoId: "local-demo-photo", ts: Date.now() - 1000 });
        }
        await ref("feed").push({
          ts: Date.now(),
          name: "Local Test",
          text: "🧪 Added demo players to Ranks"
        });
        if (!state.name) {
          storeName(LOCAL_TEST_NAMES[0]);
          state.name = LOCAL_TEST_NAMES[0];
          attachPlayerListeners();
        }
        toast("Demo players added to Ranks.");
        render();
      } catch (error) {
        toast("Could not seed local test players.");
        console.warn(error);
      }
    }

    async function boot() {
      window.addEventListener("error", event => handleUnhandledError("window.error", event.error || event.message));
      window.addEventListener("unhandledrejection", event => handleUnhandledError("window.unhandledrejection", event.reason));
      registerServiceWorker();
      const restoredFromCache = hydrateStateCache(true);
      if (!restoredFromCache) bootScreen();
      const bootTimeout = setTimeout(() => {
        if (state.mode !== "boot") return;
        recordDiagnostic("boot.timeout", { firebaseConfigured: !configMissing() });
        bootScreen("Still connecting to the trip lobby. This is usually a slow network, blocked script, or Firebase startup issue.");
      }, 8000);
      if (localBypassAllowed()) {
        if (localResetRequested()) {
          localStorage.removeItem(LOCAL_DB_KEY);
          sessionStorage.removeItem(LOCAL_NAME_KEY);
          localStorage.setItem(LOCAL_MODE_KEY, "1");
          clearLocalResetParam();
        }
        startLocalMode();
        clearTimeout(bootTimeout);
        return;
      }
      if (configMissing()) {
        if (localResetRequested()) {
          localStorage.removeItem(LOCAL_DB_KEY);
          sessionStorage.removeItem(LOCAL_NAME_KEY);
          localStorage.setItem(LOCAL_MODE_KEY, "1");
          clearLocalResetParam();
        }
        if (localStorage.getItem(LOCAL_MODE_KEY) === "1" || localRequested()) {
          startLocalMode();
        } else {
          state.mode = "setup";
          render();
        }
        clearTimeout(bootTimeout);
        return;
      }
      try {
        const [appModule, databaseModule, authModule] = await Promise.all([
          import("@firebase/app"),
          import("@firebase/database"),
          import("@firebase/auth")
        ]);
        firebaseApi = databaseModule;
        authApi = authModule;
        const { getApps, initializeApp } = appModule;
        const { getDatabase } = databaseModule;
        const { getAuth, signInAnonymously } = authModule;
        const appInstance = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
        db = getDatabase(appInstance);
        authService = getAuth(appInstance);
        let authUser = await waitForAuthUser(authService);
        if (!authUser) {
          await signInAnonymously(authService);
          authUser = authService.currentUser;
        }
        state.authUid = authUser?.uid || authService.currentUser?.uid || "";
        state.authReady = Boolean(state.authUid);
        state.mode = "app";
        attachInviteListener();
        if (state.authUid) {
          const profileSnap = await ref(`players/${state.authUid}`).once("value");
          const profile = profileSnap.val();
          const profileName = sanitizeName(profile?.name);
          if (profileName) {
            try { await ref(`playerNames/${profileName}`).set(state.authUid); } catch (claimError) {
              recordError("boot.profile_claim_failed", claimError, { profileName });
              console.warn(claimError);
            }
            activatePlayerSession(profileName);
            if (!tripLocked()) await ensureGameEntry(profileName);
          } else if (!state.cacheRestored) {
            clearStoredName();
            state.name = "";
            state.nameDraft = "";
          }
        }
        startCountdown();
        drainActionQueue();
        safeRender();
      } catch (error) {
        recordError("boot.firebase_failed", error);
        console.warn(error);
        failureScreen("Firebase did not start", "Check the config block, Anonymous Auth, and Realtime Database URL.");
      } finally {
        clearTimeout(bootTimeout);
      }
    }

    boot();
  
  }, []);

  return (
    <>
      <div id="app" className="phone">
        <main className="setup">
          <div className="logo" style={{ margin: "auto" }}>
            OREGON<span>OR BUST</span><small>Seattle -&gt; Oregon</small>
          </div>
          <section className="setup-card stack">
            <h1 className="title">Loading Oregon or Bust</h1>
            <p>Starting the trip lobby...</p>
          </section>
        </main>
      </div>
      <div id="toasts" className="toast-wrap" aria-live="polite" />
      <input id="photoInput" type="file" accept="image/*" capture="environment" hidden />
    </>
  );
}
