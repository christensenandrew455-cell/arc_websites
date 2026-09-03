import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const source = (path) => readFile(new URL(path, root), "utf8");

test("the public site describes the current accepted-lead plans", async () => {
  const [home, terms] = await Promise.all([
    source("app/page.js"),
    source("app/terms/page.js"),
  ]);
  for (const price of ["$24.99", "$47.49", "$89.99", "$169.99"]) {
    assert.ok(home.includes(price));
    assert.ok(terms.includes(price));
  }
  assert.ok(home.includes("Only a request you accept uses your monthly accepted-lead allowance."));
  assert.ok(home.includes("Calls do not count toward the plan."));
  assert.ok(terms.includes("Repeated acceptance attempts, calls, declined leads, edits, and deletions do not count."));
});

test("the public site makes no retired feature or exact-appointment promise", async () => {
  const pages = await Promise.all([
    source("app/page.js"),
    source("app/about/page.js"),
    source("app/terms/page.js"),
    source("app/privacy/page.js"),
  ]);
  const combined = pages.join("\n");
  for (const retiredClaim of [
    "per AI receptionist call",
    "per 50 SMS message parts",
    "active approved employee",
    "assign the lead to an employee",
    "message customers through the ARK business number",
    "Tuesday at 2:30 is available",
  ]) {
    assert.equal(combined.includes(retiredClaim), false);
  }
  assert.ok(combined.includes("not a confirmed appointment"));
});

test("unused configuration and calculator modules stay removed", async () => {
  for (const path of [
    "app/homeConfig.js",
    "app/contact/contactConfig.js",
    "app/components/OpportunityCalculator.js",
  ]) {
    await assert.rejects(access(new URL(path, root)));
  }
});
