# Publishing and editing the website

## 1. Publish it the first time (about 10 minutes)

1. Sign in to GitHub as **AnmarArif**.
2. Create a new repository. Name it exactly `AnmarArif.github.io`. Make it **Public**. Do not add a README.
3. On the empty repository page, click **uploading an existing file**.
4. Unzip the website folder on your computer. Open it, select everything inside it, and drag it into the upload area. Include the folders whose names start with `_`.
5. Click **Commit changes**.
6. Go to **Settings**, then **Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
7. Wait two or three minutes. The site will be live at https://anmararif.github.io

The **Actions** tab shows each build. A green tick means the update is live. A red cross means a typing mistake in a file, usually in a `.yml` file.

## 2. Everyday edits

Every file can be edited in the browser. Open the file on GitHub, click the pencil icon, make the change, then click **Commit changes**. The site updates in about a minute.

| To change | Edit this file |
|---|---|
| Office hours, office, title | `_data/profile.yml` |
| Course announcements | `_data/announcements.yml` |
| Course details, schedule, grading, GitHub Classroom link | `_data/courses.yml` |
| Publications | `_data/publications.yml` |
| Student research | `_data/students.yml` |
| Videos | `_data/videos.yml` |
| About text and research areas | `index.html` |
| CV page | `cv.html` |
| CV PDF | replace `assets/files/Anmar_Arif_CV.pdf` |
| Arabic page | `ar/index.html` |
| Links (Scholar, LinkedIn, YouTube) | `_config.yml` |

### Adding an announcement

Add a block at the top of `_data/announcements.yml`. Keep the spaces exactly as in the existing entries.

```yaml
- course: ee484
  date: 2026-10-12
  title: HW 1 released
  body: Accept the assignment from the GitHub Classroom link. Due Thursday 11:59 pm.
  pinned: true
```

Never post student names, IDs, phone numbers or grades. Grades go on LMS only.

### Adding a publication

Copy an existing entry in `_data/publications.yml`, put it at the top, and change the fields. Set `featured: true` to show it on the home page. Add only published work.

### Adding a student

Students appear without names by default. Add a name only after the student agrees in writing, and keep their email.

### Writing an article

1. Create a file in `_posts` named with the date and a short title, for example `_posts/2026-10-20-first-linear-program.md`.
2. Start it with the header block used in `_drafts/first-linear-program-in-python.md`. That draft is a ready example you can move into `_posts`.
3. Write in Markdown. Code goes between lines of three backticks.

## 3. Autograded homework for EE 484

1. Go to https://classroom.github.com and sign in. Create a classroom for EE 484.
2. Create a template repository with the starter notebook and a `tests` folder with pytest tests.
3. Create an assignment from that template and turn on autograding with the "Python" preset.
4. Put the assignment link in an announcement, and the classroom link in `classroom:` in `_data/courses.yml`.

Students accept the link, get a private copy, and see their score every time they push.

## 4. Your own domain (optional)

Buy a domain such as `anmararif.com`. In GitHub, go to Settings, then Pages, then Custom domain, and enter it. Then follow GitHub's DNS instructions at your domain registrar. HTTPS is turned on automatically.
