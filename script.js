    const options = document.querySelectorAll('.option');
    const totalPriceEl = document.getElementById('total-price');

    options.forEach(option => {
      const radio = option.querySelector('input[type="radio"]');
      radio.addEventListener('change', () => {
        options.forEach(o => {
          o.classList.remove('active');
          const s = o.querySelector('.selectors');
          if (s) s.style.display = 'none';
        });

        option.classList.add('active');
        const selectors = option.querySelector('.selectors');
        if (selectors) selectors.style.display = 'block';

        const price = parseFloat(option.getAttribute('data-price'));
        totalPriceEl.textContent = price.toFixed(2);
      });
    });
 
