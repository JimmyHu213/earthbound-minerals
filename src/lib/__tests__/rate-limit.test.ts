import { describe, it, expect, vi } from "vitest";
import { checkRateLimit } from "../rate-limit";

function createMockKV(storedValue: string | null = null) {
  return {
    get: vi.fn().mockResolvedValue(storedValue),
    put: vi.fn().mockResolvedValue(undefined),
  } as unknown as KVNamespace;
}

describe("checkRateLimit", () => {
  it("allows first request from an IP", async () => {
    const kv = createMockKV(null);
    const result = await checkRateLimit(kv, "192.168.1.1", 5);
    expect(result.allowed).toBe(true);
    expect(kv.put).toHaveBeenCalledWith("rate:192.168.1.1", "1", {
      expirationTtl: 86400,
    });
  });

  it("allows requests under the limit", async () => {
    const kv = createMockKV("3");
    const result = await checkRateLimit(kv, "192.168.1.1", 5);
    expect(result.allowed).toBe(true);
    expect(kv.put).toHaveBeenCalledWith("rate:192.168.1.1", "4", {
      expirationTtl: 86400,
    });
  });

  it("blocks requests at the limit", async () => {
    const kv = createMockKV("5");
    const result = await checkRateLimit(kv, "192.168.1.1", 5);
    expect(result.allowed).toBe(false);
    expect(kv.put).not.toHaveBeenCalled();
  });

  it("blocks requests over the limit", async () => {
    const kv = createMockKV("10");
    const result = await checkRateLimit(kv, "192.168.1.1", 5);
    expect(result.allowed).toBe(false);
  });
});
