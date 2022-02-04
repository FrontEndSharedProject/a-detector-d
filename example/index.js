(async () => {
  let filePath = ~window.location.host.indexOf("localhost")
    ? "../src/index.js"
    : "/a-detector-d/src/index.js";
  const ADDetector = await import(/* @vite-ignore */ filePath);
  const isAdBlockerOn = await ADDetector.default();
  document.body.classList.add(isAdBlockerOn ? "on" : "off");
})();
