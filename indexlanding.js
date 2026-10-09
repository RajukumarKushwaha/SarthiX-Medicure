(function () {
  'use strict';
  var d = document, root = d.documentElement;
  var steps = [0.9, 1, 1.15, 1.3], idx = 1, senior = false;

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function applySize() {
    root.style.setProperty('--fs', steps[idx]);
    store('sx-size', idx);
  }
  function setSenior(on) {
    senior = on;
    idx = on ? 3 : 1;
    root.classList.toggle('senior', on);
    var b = d.getElementById('seniorToggle');
    if (b) {
      b.setAttribute('aria-pressed', on);
      b.textContent = on ? 'Senior mode band karein' : 'Senior mode chalu karein';
    }
    applySize();
    store('sx-senior', on ? '1' : '0');
  }

  // saved preferences
  var s = parseInt(load('sx-size'), 10);
  if (s >= 0 && s < steps.length) { idx = s; applySize(); }
  if (load('sx-senior') === '1') setSenior(true);

  // mobile menu
  var burger = d.getElementById('burger'), nav = d.getElementById('nav');
  function menu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu band karein' : 'Menu kholein');
  }
  burger.addEventListener('click', function () { menu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) menu(false); });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape') menu(false); });

  // text size and senior mode
  d.addEventListener('click', function (e) {
    var f = e.target.closest('[data-fs]');
    if (f) {
      idx = Math.max(0, Math.min(steps.length - 1, idx + parseInt(f.dataset.fs, 10)));
      applySize();
      return;
    }
    if (e.target.closest('#seniorToggle')) setSenior(!senior);
  });

  // search chips and form
  var q = d.getElementById('q'), status = d.getElementById('status');
  d.querySelector('.chips').addEventListener('click', function (e) {
    var c = e.target.closest('.chip');
    if (!c) return;
    q.value = c.textContent;
    q.focus();
  });
  d.getElementById('search').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = q.value.trim();
    status.textContent = v ? '"' + v + '" ke liye search jald shuru hoga.' : 'Pehle doctor, dawai ya report ka naam likhein.';
  });

  var medicineVisual = d.querySelector('.medicine-visual');
  var medicineCopyWrap = d.querySelector('.medicine-copy-wrap');
  var medicineCopies = d.querySelectorAll('.medicine-copy');
  d.querySelector('.mode-buttons').addEventListener('click', function (e) {
    var button = e.target.closest('[data-mode]');
    if (!button) return;
    medicineVisual.dataset.mode = button.dataset.mode;
    medicineCopyWrap.dataset.mode = button.dataset.mode;
    medicineCopies.forEach(function (copy) {
      copy.setAttribute('aria-hidden', copy.dataset.mode !== button.dataset.mode);
    });
    d.querySelectorAll('.mode-buttons button').forEach(function (item) {
      item.setAttribute('aria-pressed', item === button);
    });
  });

  // scroll reveal: only for blocks that start below the fold
  var items = d.querySelectorAll('.sh,.card,.txt,.medicine-visual,.dark,.join,.senior-img,.family,.cta');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (list) {
      list.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        io.unobserve(el);
        el.classList.add('in');
        setTimeout(function () { el.removeAttribute('data-r'); el.classList.remove('in'); }, 1000);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    var seen = new Map();
    items.forEach(function (el) {
      if (el.getBoundingClientRect().top < innerHeight * 0.9) return;
      var p = el.parentElement, n = seen.get(p) || 0;
      seen.set(p, n + 1);
      el.style.setProperty('--d', Math.min(n, 5) * 0.08 + 's');
      el.setAttribute('data-r', '');
      io.observe(el);
    });
  }
})();