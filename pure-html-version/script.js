/**
 * LANDING PAGE DANIEL FALUCHI - SCRIPT.JS
 * Vanilla JavaScript interativo
 */

// FAQ Accordion Interativo
document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      if (!parent) return;

      const isActive = parent.classList.contains('active');

      // Fecha todos os outros itens se desejar comportamento exclusivo
      document.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('active');
      });

      // Se não estava ativo, abre
      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });

  // Abre o primeiro FAQ por padrão
  const firstFaq = document.querySelector('.faq-item');
  if (firstFaq) {
    firstFaq.classList.add('active');
  }
});
