# Oregon or Bust

Mobile-only multiplayer road-trip game for the June 20-21, 2026 Seattle -> Oregon trip.

## Firebase setup

1. Create a Firebase project at <https://console.firebase.google.com> on the free Spark plan.
2. Build -> Realtime Database -> Create database. Use locked mode if Firebase asks.
3. Build -> Authentication -> Sign-in method -> enable **Anonymous**.
4. Project settings -> General -> Your apps -> Web app -> copy the config values.
5. Add those values to `.env.local` for local development, or to the same `NEXT_PUBLIC_FIREBASE_*` variables in Vercel.
6. In Realtime Database -> Rules, paste the contents of `database.rules.json` and publish them.
7. Seed the invite list in Realtime Database before sharing the link.

The rules block game writes until **June 20, 2026 at 12:00 AM Pacific** (`1781938800000` in Firebase server time), but invited players can join before then. Before the unlock time, the app shows a pre-trip lobby with checked-in avatars, a countdown, and lobby comments. Points, cards, route levels, photos, votes, hype, and hot seat actions stay locked until trip day. Do not leave Realtime Database in test mode.

This app is designed for a private trip link plus invited-player codes. A player chooses an invited name and enters that name's private code. Firebase Anonymous Auth binds that browser/device to the claimed name, and database rules prevent one claimed player from writing another player's hand, votes, hype, or route-level progress.

## Invite setup

Generate the Firebase seed JSON with one `Name=Code` pair per invited player:

```bash
npm run invites -- Alex=RIVER-482 Blake=FALLS-913 Casey=COAST-204
```

Paste the output into Realtime Database using the console's JSON import/merge flow. It creates:

- `invitedNames/{Name}: true`, which is safe for the app to read.
- `inviteCodes/{Name}/hash`, which rules can read but clients cannot.

Give each person only their own code. If someone changes phones or clears browser data, they can reclaim their name by entering the same code; the newest claim becomes the active device for that name.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

If Firebase is not configured yet, the setup screen includes **Start Local Test Mode**. This uses browser `localStorage` plus `BroadcastChannel` so you can test the game flow locally across multiple tabs on the same machine. It is not a replacement for Firebase on Vercel.

For multi-user local testing:

- Tap **Seed 15 Test Players** on the setup screen, or **Seed Demo** from the local test banner.
- Use **Switch** to join manually as another player in the same tab.
- Open per-player tabs with `?local=1&player=Alex`, for example `http://127.0.0.1:3000/?local=1&player=Blake`.
- Add `reset=1` once to clear local test data before a run: `http://127.0.0.1:3000/?local=1&reset=1&player=Alex`.
- Add `lobby=1` on localhost to preview the pre-trip lobby while still using local test data: `http://127.0.0.1:3000/?local=1&lobby=1`.
- Add `openIn=5` with `lobby=1` on localhost to simulate the trip unlocking after 5 seconds: `http://127.0.0.1:3000/?local=1&lobby=1&openIn=5&player=Alex`.

Local mode serializes same-browser writes with the browser Web Locks API when available. The real 12-phone production test should still use Firebase Realtime Database, because that is the production sync layer.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Add the `NEXT_PUBLIC_FIREBASE_*` environment variables from `.env.example`.
4. Deploy.

Players can open the Vercel URL before June 20, 2026, choose their invited name, and enter their private trip code to check into the lobby. On June 20, the lobby unlocks into the full game. No email, OAuth, or visible account setup.

## Production debugging

The app keeps a small sanitized debug log in each browser and, after Firebase Anonymous Auth is available, writes captured client errors to Realtime Database at `clientErrors`. The remote error rows include Firebase error codes, app state, route, auth readiness, browser info, and recent client failure context, but they do not include invite codes or Firebase secrets.

If a player hits an error and there is no useful row under `clientErrors`, ask them to tap **Copy Debug Log** after the error appears and send you the copied text.

The normal fix workflow is: inspect the Firebase `clientErrors` row or copied log, reproduce locally with `?local=1`, patch the repo, run `npm run build`, commit to `main`, push to GitHub, and let Vercel redeploy.
