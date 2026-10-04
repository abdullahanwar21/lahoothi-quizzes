# Lahoothi Quizzes

Nursing learning platform with lecture notes, AI-generated quizzes, assignments, and progress tracking.

## Live setup

1. Connect this repo to **Netlify** (Import from Git → select this repo).
2. Put your Firebase keys in `firebase-config.js`.
3. Paste `firestore.rules.txt` into Firebase Firestore → Rules → Publish.
4. Follow steps in `READ_ME_FIRST.txt`.

## Structure

| File | Purpose |
|------|--------|
| `index.html` | Public site + student portal |
| `admin/index.html` | Super Admin panel |
| `firebase-config.js` | Firebase keys (edit this) |
| `firestore.rules.txt` | Database security rules |
| `banner.jpg` | Homepage banner |

## Netlify settings

- **Build command**: leave empty
- **Publish directory**: `/` (root)

After deploy, add your Netlify domain under Firebase → Authentication → Authorized domains.
