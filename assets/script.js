var config = {
    kitId: 'hvf7lmk',
    scriptTimeout: 3000,
    async: false
  },
  h = document.documentElement,
  t = setTimeout(function() {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout),
  tk = document.createElement("script"),
  f = false,
  s = document.getElementsByTagName("script")[0],
  a;

h.className += " wf-loading";
tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
tk.async = true;

tk.onload = tk.onreadystatechange = function() {
  re = this.readyState;

  if (f ||
    this.readyState &&
    this.readyState != "complete" &&
    this.readyState != "loaded") {
    return;
  }

  f = true;
  clearTimeout(t);

  try {
    Typekit.load(config);

    Dropcap.layout(document.querySelectorAll(".dropcap"), 3);
  } catch (e) {}
};

s.parentNode.insertBefore(tk, s);
