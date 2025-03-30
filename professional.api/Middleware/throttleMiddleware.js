const rateLimitStore = new Map(); // Store request counts

const rateLimitMiddleware = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress; // Get IP address
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 30; // Max requests per IP

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, startTime: now });
  } else {
    const requestData = rateLimitStore.get(ip);
    
    if (now - requestData.startTime > windowMs) {
      // Reset counter after time window expires
      requestData.count = 1;
      requestData.startTime = now;
    } else {
      requestData.count++;
    }
    if (requestData.count > maxRequests) {
      const retryAfter = Math.ceil((windowMs - (now - requestData.startTime)) / 1000 / 60); // Calculate retry time in minutes
      return res.status(429).json({ 
        error: `Too many requests, please try again ${retryAfter} minute(s)  later.`, 
      });
    }
  }

  next();
};

module.exports = rateLimitMiddleware;
