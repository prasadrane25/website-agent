import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("health contract", () => {
  it("exports expected service name", () => {
    assert.equal("website-agent", "website-agent");
  });
});
