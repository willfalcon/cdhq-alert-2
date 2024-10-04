<div class="alert" id="cdhq-alert" data-cookie="<?= $settings['cookie'] ?>" data-delay="<?= $settings['delay'] ?>">
  <div class="alert__inner fixed top-15 bg-orange z-10 left-1/2 -translate-x-1/2 pt-4 pr-16 pb-6 pl-8 -translate-y-full transition-all">
    <p class="alert__text text-white text-4xl font-bold"><?= $settings['text'] ?></p>
    <?php if ($settings['button']): ?>
      <a class="alert__button button bg-white text-orange inline-block py-2 px-4 mt-4 relative left-1/2 -translate-x-1/2" href="<?= $settings['button']['url'] ?>" target="<?= $settings['button']['target'] ?>">
        <?= $settings['button']['title'] ?>
      </a>
    <?php endif; ?>

    <button class="alert__close w-8 h-8 absolute right-2 top-1/2 -translate-y-1/2 border-none outline-white outline-1 p-0" id="close-alert" aria-label="Close alert">
      <span class="absolute top-1/2 left-1/2 bg-white h-1 w-full -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
      <span class="absolute top-1/2 left-1/2 bg-white h-1 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
    </button> 
  </div>
</div> 