import assert from "node:assert/strict";
import test from "node:test";
import { ACTOR, formNotebookBindingCandidate, notebookIdentity } from "../src/notebook.mjs";
test("modern-business notebook identity is bound while effects remain separately gated", () => { const identity = notebookIdentity(); assert.equal(identity.actor, ACTOR); assert.equal(identity.notebookId, "763fbe07-e786-4e23-9b33-b53f05230573"); assert.match(identity.creationReceipt, /^urn:sha256:/u); const candidate = formNotebookBindingCandidate(identity.url); assert.equal(candidate.notebookId, identity.notebookId); assert.deepEqual(candidate.authorityGranted, []); assert.throws(() => formNotebookBindingCandidate("https://example.com/notebook/67510ce7-79b3-4caa-b25c-28e0d3911b5a"), /exact NotebookLM/u); });
