# Oregon or Bust QA Scenario Matrix

This matrix is the stability checklist for local and trip-day verification.

| Area | Scenario | Expected result | Status |
| --- | --- | --- | --- |
| Local mode | Open `?local=1&reset=1&player=Alex` | Local mode starts, reset runs once, URL no longer keeps `reset=1` | Fresh Browser pass |
| Local mode | Seed demo players | Ranks shows demo players, existing users are preserved, local-only purpose is clear | Live-user patched pass |
| Multi-user | Switch URL player to another seeded name | Player banner/hand/ranks update without resetting shared state | Fresh Browser pass |
| Multi-user | Switch local player from banner | Player query param is removed and reload does not silently restore previous player | Live-user patched pass |
| Navigation | Change tabs and reload | Active tab is reflected in `tab=` URL param and survives reload | Live-user patched pass |
| Navigation | Tap tabs while countdown updates | Countdown updates do not re-render/detach the tabbar mid-tap | Live-user patched pass |
| Route levels | Tap future level | Details open, completion remains locked | Fresh Browser pass after corrected assertion |
| Route levels | Complete levels 1-10 | Each level requires 3 tasks, unlocks in order, reload preserves progress | Fresh Browser pass |
| Route levels | Reopen from completed level | Selected and later levels/tasks reset atomically | Fresh Browser pass |
| Route levels | Route map on narrow viewport | Interactive route targets do not sit under fixed tabbar; no horizontal overflow | Live-user patched pass |
| Hot Seat | Spin with 12 players | Exactly one active dare, target is another player | Fresh Browser pass |
| Hot Seat | Target resolves dare | Current dare clears, deterministic history row remains | Fresh Browser pass |
| Hot Seat | Spin while dare active | Wheel and button show active target; spin is disabled; history empty copy says completed dares | Live-user patched pass |
| Cards | Play one card | In-app confirm appears, one card becomes used, cannot replay | Fresh Browser pass |
| Cards | Modal accessibility | Cancel is focused, Escape cancels, tabbar is inert, card buttons have unique names | Live-user patched pass |
| Missions | Upload/compress photo | Claim/photo/score either all succeed or matching claim/photo rolls back | Fixed rollback path; needs file-upload/browser verification |
| Missions | Tap mission without selecting file | User sees choose-photo/no-photo feedback; caption and photo affordance are visible | Live-user patched pass |
| Ranks | Score changes | Sorted scoreboard, no `NaN`, current player highlighted | Fresh Browser pass |
| Accessibility | Current tab state | Active tab exposes `aria-current` and `aria-pressed` | Live-user patched pass |
| Responsive | 280, 320, 375, 390, desktop shell | No horizontal overflow; tabbar and local banner fit | Live-user patched pass |
| Console | Full matrix | No browser console errors | Fresh Browser pass |

## Current Verification

- `npm run build` passes.
- `npm audit --omit=dev` reports 0 vulnerabilities.
- Static scan shows no remaining native `confirm()` calls.
- Fresh in-app Browser matrix completed on June 12, 2026:
  - 157 scenario assertions ran.
  - 156 passed directly.
  - 1 assertion was a harness mismatch: locked future levels intentionally render no `completeLevel` action instead of a disabled complete action.
  - Corrected locked-level assertion passed: Level 10 details open, no complete action exists, locked text is visible, no horizontal overflow, and no console errors.
- Live-user mini-agent wave completed on June 12, 2026:
  - 12 independent mini users tested with the in-app Browser only.
  - Findings fixed: countdown re-render detaching tab taps, card modal/tabbar accessibility, ambiguous card controls, Hot Seat active-state UX, mission tap feedback, local Switch URL mismatch, active-tab reload loss, narrow viewport overflow, and route-tab accessibility state.
  - Some local-mode state jumps were expected interference from multiple testers sharing one local Browser storage while other agents used `reset=1`; production Firebase/device testing remains required.

## Remaining Pre-Production Verification

The core local multiplayer matrix has passed in a fresh Browser session. Before trip-day production use, still verify:

1. Photo upload success, failure, and retry with actual image files.
2. Firebase production mode with real Realtime Database credentials, not only local mode.
3. A real multi-device smoke test on phones sharing the deployed URL.
