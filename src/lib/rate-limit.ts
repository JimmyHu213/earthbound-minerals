const RATE_LIMIT_TTL = 3600; // 1 hour in seconds

export async function checkRateLimit(
  kv: KVNamespace,
  ip: string,
  limit: number,
): Promise<{ allowed: boolean }> {
  const key = `rate:${ip}`;
  const current = await kv.get(key);
  const count = current ? parseInt(current, 10) : 0;

  if (count >= limit) {
    return { allowed: false };
  }

  await kv.put(key, String(count + 1), { expirationTtl: RATE_LIMIT_TTL });
  return { allowed: true };
}
