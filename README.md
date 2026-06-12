# Oregon or Bust

Mobile-only multiplayer road-trip game for the June 20-21, 2026 Seattle -> Oregon trip.

## Firebase setup

1. Create a Firebase project at <https://console.firebase.google.com> on the free Spark plan.
2. Build -> Realtime Database -> Create database -> test mode.
3. Project settings -> General -> Your apps -> Web app -> copy the config values.
4. Add those values to `.env.local` for local development, or to the same `NEXT_PUBLIC_FIREBASE_*` variables in Vercel.

Realtime Database test mode means anyone with the link can write data, and the default test rules expire in 30 days. That is acceptable for a trusted weekend game, but do not store anything sensitive.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

If Firebase is not configured yet, the setup screen includes **Start Local Test Mode**. This uses browser `localStorage` plus `BroadcastChannel` so you can test the game flow locally across multiple tabs on the same machine. It is not a replacement for Firebase on Vercel.

For multi-user local testing:

- Tap **Seed 12 Test Players** on the setup screen, or **Seed 12** from the local test banner.
- Use **Switch** to join manually as another player in the same tab.
- Open per-player tabs with `?local=1&player=Alex`, for example `http://127.0.0.1:3000/?local=1&player=Blake`.
- Add `reset=1` once to clear local test data before a run: `http://127.0.0.1:3000/?local=1&reset=1&player=Alex`.

Local mode serializes same-browser writes with the browser Web Locks API when available. The real 12-phone production test should still use Firebase Realtime Database, because that is the production sync layer.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Add the `NEXT_PUBLIC_FIREBASE_*` environment variables from `.env.example`.
4. Deploy.

Players just open the Vercel URL and type a display name. No accounts, email, OAuth, or verification.
