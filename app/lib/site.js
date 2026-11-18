// Small, framework-free behaviour layer for the CliffEleVen site.
// Used by the Next.js app (app/components/SiteBehaviour.tsx) and works the same
// in a plain static page. Returns a cleanup function.

export function initSite(doc) {
  const cleanups = [];
  const on = (target, type, handler, opts) => {
    target.addEventListener(type, handler, opts);
    cleanups.push(() => target.removeEventListener(type, handler, opts));
  };

  // ---- Header: solid background once the page scrolls ----
  const header = doc.querySelector("[data-header]");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    on(window, "scroll", onScroll, { passive: true });
  }

  // ---- Mobile menu ----
  const toggle = doc.querySelector("[data-menu-toggle]");
  const menu = doc.querySelector("[data-menu]");
  if (header && toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
      header.classList.toggle("menu-open", open);
      doc.body.classList.toggle("no-scroll", open);
    };
    setOpen(false);
    on(toggle, "click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    on(menu, "click", (e) => {
      if (e.target instanceof Element && e.target.closest("a")) setOpen(false);
    });
    on(doc, "keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
    on(window, "resize", () => {
      if (window.innerWidth > 820) setOpen(false);
    });
  }

  // ---- Reveal on scroll (only for elements that start below the fold) ----
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-pending");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    doc.querySelectorAll(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("is-pending");
        io.observe(el);
      }
    });
    cleanups.push(() => io.disconnect());
  }

  // ---- Footer year ----
  doc.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  // ---- Contact form ----
  const form = doc.querySelector("[data-contact-form]");
  if (form) {
    const status = form.querySelector("[data-form-status]");
    const button = form.querySelector('button[type="submit"]');
    const label = button ? button.querySelector("[data-label]") : null;
    const idleLabel = label ? label.textContent : "";

    const setStatus = (state, text) => {
      if (!status) return;
      status.dataset.state = state;
      status.textContent = text;
    };

    on(form, "submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const payload = {
        firstname: String(data.get("firstname") || "").trim(),
        lastname: String(data.get("lastname") || "").trim(),
        email: String(data.get("email") || "").trim(),
        telephoneNumber: String(data.get("telephoneNumber") || "").trim(),
        message: String(data.get("message") || "").trim(),
      };

      if (button) button.disabled = true;
      if (label) label.textContent = "Wird gesendet …";
      setStatus("pending", "");

      const post = (url) =>
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

      try {
        // The notification to the CliffEleVen team is what matters most.
        const adminRes = await post("/api/emails/toadmin");
        if (!adminRes.ok) throw new Error("admin mail failed");
        // Confirmation to the sender is best effort.
        post("/api/emails").catch(() => {});
        form.reset();
        setStatus("ok", `Danke, ${payload.firstname}! Deine Anfrage ist bei uns angekommen. Wir melden uns persönlich bei dir.`);
      } catch {
        setStatus(
          "error",
          "Deine Nachricht konnte gerade nicht gesendet werden. Prüfe deine Verbindung und versuche es in ein paar Minuten noch einmal."
        );
      } finally {
        if (button) button.disabled = false;
        if (label) label.textContent = idleLabel;
      }
    });
  }

  return () => cleanups.forEach((fn) => fn());
}
