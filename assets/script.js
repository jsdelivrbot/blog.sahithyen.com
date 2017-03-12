var config = {
    kitId: 'hvf7lmk',
    scriptTimeout: 3000,
    async: true,
    active: () => {
      var dropcaps = document.querySelectorAll(".dropcap");
      Dropcap.layout(dropcaps, 3);
    }
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

tk.onload = tk.onreadystatechange = () => {
  if (f ||
    this.readyState &&
    this.readyState != "complete" &&
    this.readyState != "loaded") {
    return;
  }

  f = true;

  Typekit.load(config);
};

document.addEventListener("DOMContentLoaded", (event) => {
  s.parentNode.insertBefore(tk, s);
});
