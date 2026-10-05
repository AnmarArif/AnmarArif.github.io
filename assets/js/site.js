// Filter chips. A group of buttons with data-filter inside [data-filter-for="#list"].
// Items in the list carry data-tags="a b c". "all" shows everything.
document.querySelectorAll('[data-filter-for]').forEach(function (group) {
  var list = document.querySelector(group.getAttribute('data-filter-for'));
  if (!list) return;
  var buttons = group.querySelectorAll('[data-filter]');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      list.querySelectorAll('[data-tags]').forEach(function (item) {
        var tags = (item.getAttribute('data-tags') || '').split(' ');
        item.hidden = !(f === 'all' || tags.indexOf(f) !== -1);
      });
      var empty = list.querySelector('.filter-empty');
      if (empty) empty.hidden = list.querySelectorAll('[data-tags]:not([hidden])').length > 0;
      list.querySelectorAll('[data-group]').forEach(function (g) {
        g.hidden = g.querySelectorAll('[data-tags]:not([hidden])').length === 0;
      });
    });
  });
});

// Practice quiz. A .quiz block with buttons that have data-correct="true" or "false".
document.querySelectorAll('.quiz').forEach(function (quiz) {
  var out = quiz.querySelector('.quiz-feedback');
  quiz.querySelectorAll('button[data-correct]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var ok = btn.getAttribute('data-correct') === 'true';
      quiz.querySelectorAll('button[data-correct]').forEach(function (b) { b.classList.remove('right', 'wrong'); });
      btn.classList.add(ok ? 'right' : 'wrong');
      if (out) out.textContent = ok ? (btn.getAttribute('data-explain') || 'Correct.') : 'Not quite. Try again.';
    });
  });
});
