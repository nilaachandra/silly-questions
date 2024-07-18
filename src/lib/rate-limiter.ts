const rateLimitMap = new Map<string, { lastRequestTime: number, requestCount: number }>();

const TIME_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

export const rateLimiter = (ip: string): boolean => {
  const currentTime = Date.now();
  const rateLimitInfo = rateLimitMap.get(ip);

  if (!rateLimitInfo) {
    rateLimitMap.set(ip, { lastRequestTime: currentTime, requestCount: 1 });
    return true;
  }

  const { lastRequestTime, requestCount } = rateLimitInfo;

  if (currentTime - lastRequestTime > TIME_WINDOW) {
    rateLimitMap.set(ip, { lastRequestTime: currentTime, requestCount: 1 });
    return true;
  }

  if (requestCount >= MAX_REQUESTS) {
    return false;
  }

  rateLimitMap.set(ip, { lastRequestTime, requestCount: requestCount + 1 });
  return true;
};
