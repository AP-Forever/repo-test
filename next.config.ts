const originalFreeze = Object.freeze;
Object.freeze = function (obj: any) {
  if (Array.isArray(obj) && obj.length > 0 && typeof obj[0] === "number") {
    console.trace("=== FREEZING NUMBER ARRAY ===", obj);
  }
  return originalFreeze.call(this, obj);
};

module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 3840], // or your custom values
    // qualities: [75, 85, 90, 95]
  },
};
