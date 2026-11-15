# Lahoothi Quizzes

Nursing learning platform with lecture notes, AI-generated quizzes, assignments, and progress tracking.

## Live site (GitHub Pages)

**URL:** https://abdullahanwar21.github.io/lahoothi-quizzes/

### Enable Pages (one time)
1. Repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / folder: **/ (root)**
4. **Save**
5. Wait 1–2 minutes, then open the URL above.

### Required files on main branch
- `index.html` (root)
- `admin/index.html`
- `banner.jpg`
- `firebase-config.js` (already set)
- `firestore.rules.txt`

If `index.html` is missing, upload it: https://github.com/abdullahanwar21/lahoothi-quizzes/upload/main

## Firebase

1. Keys are in `firebase-config.js`.
2. Firestore rules: paste `firestore.rules.txt` → Publish.
3. Authentication → Email/Password enabled.
4. Authorized domains: add `abdullahanwar21.github.io`
5. Register on the live site → Firestore `users` → set `role` to `SUPER_ADMIN`.
6. Admin panel: https://abdullahanwar21.github.io/lahoothi-quizzes/admin/
7. Gemini API key: Admin → Settings.

## Structure

| File | Purpose |
|------|--------|
| `index.html` | Public site + student portal |
| `admin/index.html` | Super Admin panel |
| `firebase-config.js` | Firebase keys |
| `firestore.rules.txt` | Database security rules |
| `banner.jpg` | Homepage banner |
