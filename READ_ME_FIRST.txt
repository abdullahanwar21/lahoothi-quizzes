LAHOOTHI QUIZZES
================

What is in this folder
----------------------
index.html            The public website and the student portal.
admin/index.html      The admin panel. It opens at your-site/admin/
firebase-config.js    Your Firebase keys go here. It is the only file you edit.
banner.jpg            The homepage banner. You can change it later in Admin > Appearance.
firestore.rules.txt   The database rules. You paste them into Firebase once.

Quick start
-----------
1. Upload this whole folder (or the zip) at app.netlify.com/drop
   The site works at once with sample data. Nothing is saved yet.
2. Open your-site/admin/ and press "Enter as demo admin".
   Open the Setup page. It shows every Firebase step with the rules to copy.
3. Follow the steps. Put your keys in firebase-config.js.
   Upload the folder again in Netlify (Deploys > drag the folder).
4. Register on your site, set your role to SUPER_ADMIN in Firebase (step 6 of the guide),
   then log in at your-site/admin/

Short version of the Firebase steps
-----------------------------------
A. console.firebase.google.com > Create a project (free Spark plan).
B. Add a web app (</> icon). Copy the firebaseConfig values into firebase-config.js.
C. Authentication > Sign-in method > turn on Email/Password.
D. Firestore > Create database > Production mode. Rules tab > paste firestore.rules.txt > Publish.
E. Netlify: upload the folder. Firebase > Authentication > Settings > Authorized domains > add your netlify.app address.
F. Register on your site. Firestore > users > your document > change role to SUPER_ADMIN.
G. aistudio.google.com/apikey > Create API key. Admin > Settings > paste the key > Save > Test AI.
H. Admin > AI Builder: upload a PDF or PPTX, type its exact subject, chapter and topic, generate, review, publish.

Good to know
------------
- The keys in firebase-config.js are not secret. The database rules protect the data.
- The AI key is secret. It is saved in the database where only the Super Admin can read it.
- Lecture files are read on your own device. They are not uploaded or stored.
- To update the site later, upload the new folder again in Netlify. Your data stays in Firebase.

If you already set up Firebase with an older version
----------------------------------------------------
Paste the new firestore.rules.txt into Firestore > Rules and press Publish again.
The new version saves visual images in a new place called "visuals".
