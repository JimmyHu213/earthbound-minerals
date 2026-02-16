import { describe, it, expect, vi } from "vitest";
import { createJWT, appendToSheet } from "../google-sheets";

describe("createJWT", () => {
  it("creates a JWT with correct claims", async () => {
    const jwt = await createJWT(
      "test@example.iam.gserviceaccount.com",
      // RSA private key in PKCS8 PEM format (test-only key, not used anywhere)
      `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCdZ76mhZc4AVa6
QHIfRLRWsTExQqlt53GwQYo+gHEGIxoF23OtddCV6zrQ0b/UM5crbYA/igCvawjZ
Vda0FYPvVg1xZLg0DpfFeqnOM4ru8UlXhkbidFFwOggASJIRAtZrwYn4t1+gbvNG
btZ/bPR4p7ymzlzGQT9YZT08Midj2THOd9kPYlPkHc44cheRWojfpnT7cvIJ8318
binZ4ZyxiEXHRq79Vs7RXtyRuSG9ZD4GEiY83zqZXP+xU0ZRsRSJ34xxnITd6qwF
WT7I1tIxmDz2j+ekfeyjGScN7rZ+6xlM+OOmDPnx2YoHxl2BQvUo7PsCwLKWqBpl
nY1OZ+EHAgMBAAECggEANMXmJSVv9C56udpGiNY7kj85K3dan8bzlnD63QaqHjEh
leokJ/lyk/j4UK+qHYaofb5qO6NUpHuBzYAaimkWQWV7/1MR8R4dY2/DQ6eDQqYx
/T6/QEhYT4SdTx8Fnd9yLVGHpRQx4vOf67LYhoNsmZE/Tjus3ildCBF1TNvR2gce
cHJY45GeYYCFM9HhUMoTYar9vfxd6732SbvK0geqWVOdW0FfVOU6ntHlBSDwOJRf
4PbC5A21RrmHoAnxupq1trgTBhpuHpHQ8mZxPT7N0NAH8gy9RZbOjhxqluQU5f5i
hALcLAJZ0FQ2NVYGkP0bPlUoeyJrOGt2ELMIjhlgPQKBgQDVdrgS9pSdSLw/ZxIB
4S6nmvusotPpGBgDjjeEsaIf32j5q7Wap9Pc4vR5bMFL6182KpYYpyJ881Sl6d04
1W/a0bHBwacBnM10+UN+hNKmLrTyp8WVYm5V9KQOScZNiaSEwZOcDNXVhdXah2Zc
9B9LchaARpunXrh/MvvrJzijfQKBgQC8xVoUowM6ArJjvwqolj/WBDQ6yaVGbOjz
QtDTumFCW0WFmEmHssnCWquEkJgSexFSqf1kRppfYDj3SAo7XD6cqPKgIVitTvHM
MynY5j5JOYDcN5vQGgn+ldzVkl8XGog1todfvaFOveiRTTyCPNVRxJTLLmIaKaZZ
6PGmJdV10wKBgAE0hGGHBtvEd1ucR1u/W7YSh+03lh6wxiHvAZ08K4AmkL8oGwRe
gjGzDlJJLOYy0/zITMSi3Oz7qrStF1Skz9babDh90WWO7xID/j+OnGnXxanBDLqF
Lb5KfUqfXAFAD6+4MA8ne2WTNdvf+9H2ht60LDBZNbPCMyR0sztmo0k5AoGBAI/1
RSQ1yNElm1t8Jqm4o4gX/qjSfIs/pUtWqiC9o0xShKtEHtcwnrLsKJ9ZEdAOMIDF
CGu/eBzCKc9TDhKE327jXNyHcbQBX17lqcUymU+IXeATPG0wXmzbZuUs0f2xiyzD
PWvjFrARHdopd7qun9PSwdJNVh0zpBwvDJIzih1nAoGAb+cF2nAWNZUuuidAwtOS
mKuEayMDghFP88UwCm6UNxnzHzcWI1rJjXmM2eMHZT+yMKH/w/BhqmcjLEmmywMv
xqxVfMzKuytsi3gvlVGPT+BZI7fKcpmgAjJyqMIyrZ6uNbJLtJ03FCytkmgr6sOI
LG9gS0Pb9RhRnlb0Nhv2G78=
-----END PRIVATE KEY-----`,
      ["https://www.googleapis.com/auth/spreadsheets"],
    );

    const parts = jwt.split(".");
    expect(parts).toHaveLength(3);

    const header = JSON.parse(atob(parts[0].replace(/-/g, "+").replace(/_/g, "/")));
    expect(header.alg).toBe("RS256");
    expect(header.typ).toBe("JWT");

    const claims = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
    expect(claims.iss).toBe("test@example.iam.gserviceaccount.com");
    expect(claims.scope).toBe("https://www.googleapis.com/auth/spreadsheets");
    expect(claims.aud).toBe("https://oauth2.googleapis.com/token");
  });
});

describe("appendToSheet", () => {
  it("calls Sheets API with correct parameters", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ updates: { updatedRows: 1 } }),
    });
    vi.stubGlobal("fetch", mockFetch);

    await appendToSheet("fake-access-token", "sheet-id-123", [
      ["2026-02-16", "John", "john@example.com", "Acme", "555-0000", "Hello"],
    ]);

    expect(mockFetch).toHaveBeenCalledWith(
      "https://sheets.googleapis.com/v4/spreadsheets/sheet-id-123/values/Sheet1!A:F:append?valueInputOption=USER_ENTERED",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Authorization: "Bearer fake-access-token",
        }),
      }),
    );

    vi.unstubAllGlobals();
  });
});
