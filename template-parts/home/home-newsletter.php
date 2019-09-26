<?php $newsletter_img = get_field('newsletter_img') ?>
<div id="newsletter-footer-container">
    <?php echo wp_get_attachment_image($newsletter_img, null, false, array('class' => 'container-header-img')) ?>
    <div class="newsletter">
        <?php dynamic_sidebar('newsletter-footer') ?>
    </div>
</div>
