import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const source = (path) => readFile(new URL(path, root), "utf8");

test("the website keeps detail behind an accessible question mark", async () => {
  const [infoTip, home, about] = await Promise.all([
    source("app/components/InfoTip.js"),
    source("app/page.js"),
    source("app/about/page.js"),
  ]);
  assert.ok(infoTip.includes('type="button"'));
  assert.ok(infoTip.includes("aria-expanded={open}"));
  assert.ok(infoTip.includes('role="dialog"'));
  assert.ok(infoTip.includes("createPortal"));
  assert.ok(infoTip.includes("Math.max(VIEWPORT_GUTTER, preferredLeft)"));
  assert.ok(home.includes("<InfoTip"));
  assert.ok(about.includes("<InfoTip"));
  assert.equal(home.includes("Repeated taps, calls, declines, edits, and deletions do not count."), false);
  assert.equal(about.includes("Why the real safeguards stay"), false);
});

test("the public support form uses short labels and no visible form directions", async () => {
  const [support, supportPage] = await Promise.all([
    source("app/support/SupportForm.js"),
    source("app/support/page.js"),
  ]);
  for (const label of ["Topic *", "Name *", "Email", "Phone", "Details *"]) assert.ok(support.includes(label));
  assert.ok(support.includes('["feedback", "Feedback"]'));
  assert.ok(support.includes("What should we improve? *"));
  assert.ok(supportPage.includes("await searchParams"));
  assert.ok(supportPage.includes("initialTopic={topic}"));
  assert.ok(support.includes("Screenshot requirements"));
  assert.equal(support.includes("Choose a topic and complete the short form."), false);
  assert.equal(support.includes("Provide at least one way for ARK to contact you."), false);
  assert.equal(support.includes("optional, JPG/PNG/WebP, 4 MB max"), false);
});

test("marketing pages no longer repeat long explanations", async () => {
  const [home, about, demo] = await Promise.all([
    source("app/page.js"),
    source("app/about/page.js"),
    source("app/demo/page.js"),
  ]);
  assert.ok(home.includes("ARK answers. You keep working."));
  assert.ok(home.includes("How each call is handled"));
  assert.ok(home.includes("What your business can customize"));
  assert.ok(about.includes("How each call is handled"));
  assert.ok(about.includes("What the business can customize"));
  for (const name of ["Taper Painting", "Robert", "Zahara"]) assert.ok(home.includes(name));
  assert.ok(home.includes("Pick a monthly lead limit."));
  assert.ok(demo.includes("Like it? Get started."));
  assert.ok(demo.includes("/support?topic=feedback"));
  assert.equal(home.includes("A ringing phone should not decide whether"), false);
  assert.equal(about.includes("The useful safeguards are the ones tied to real failures"), false);
  assert.equal(demo.includes("Play with it, test it your way"), false);
});
