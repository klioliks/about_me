// Мягкое появление блоков при прокрутке.
// Если понадобится — можно удалить этот файл, сайт останется рабочим.

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px",
  }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

// Эффект печати в заголовке hero: одна случайная фраза на визит, без цикла.
const heroTextTypeEl = document.getElementById("hero-text-type");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const heroGreetings = [
  "Привет, я собираю свой цифровой мир.",
  "Привет, я вяжу путь из честности и кода.",
  "Привет, даже хаос можно распутать.",
];

const pickedGreeting = heroGreetings[Math.floor(Math.random() * heroGreetings.length)];

if (heroTextTypeEl) {
  heroTextTypeEl.textContent = pickedGreeting;

  if (!prefersReducedMotion) {
    new TextType(heroTextTypeEl, {
      text: pickedGreeting,
      typingSpeed: 58,
      pauseDuration: 2400,
      initialDelay: 500,
      loop: false,
      showCursor: true,
      cursorCharacter: "✦",
      cursorBlinkDuration: 0.55,
      variableSpeed: { min: 42, max: 88 },
      startOnVisible: false,
    });
  }
}
