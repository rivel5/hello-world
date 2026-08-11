# Chronicle: History You Remember

A free, local-first history learning PWA built around short cinematic lessons, retrieval practice, and spaced repetition.

## Included paths
- Bahamian History
- Caribbean History
- World History
- American History

## Learning design
- 5–10 minute micro-lessons
- retrieval before rereading
- visual/memory anchors
- explanatory quizzes
- 1, 3, 7, 14, 30, and 90 day spaced-review rhythm
- teach-back prompts
- cross-regional timeline

## Run locally
Serve this folder over HTTP so the service worker and installable PWA features work. For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

All progress is stored in the browser. No account or paid API is required.
