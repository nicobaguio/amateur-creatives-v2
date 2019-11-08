<?php
    $post_class = has_tag(array('patreon', 'Patreon')) ? "is-patreon" : null;
    global $post_idx;
    global $is_first;
    $is_first = $post_idx == 0;
    $desktop_class = $is_first ? "first" : null;
?>
<div class="post-container <?php echo "{$post_class} {$desktop_class}"?>">
    <?php
        $size_to_use = $is_first ? 'full' : 'card-thumbnail';
        // $size_to_use = 'card-thumbnail';
        $vertical_img = get_the_post_thumbnail_url(null, $size_to_use);
        $horizontal_img = wp_get_attachment_image_url( get_field('horizontal_featured_img') , $size_to_use);
        $url = get_post_permalink();
        $category_id = get_the_category()[0]->term_id;
        $image_id = get_term_meta($category_id, 'image', true );
        $image_data = wp_get_attachment_image_src( $image_id, 'full' );
    ?>
    <a href="<?php echo $url ?>">
        <div>
            <img src="<?php echo $is_first ? $horizontal_img : $vertical_img ?>" class="card-thumbnail">
            <img class="category-icon" src="<?php echo $image_data[0] ?>">
        </div>
        <div>
            <?php echo has_tag(array('patreon', 'Patreon')) ? '<h5><span class="patreon-tag">PATREON ONLY!</span></h5>' : null ?>
            <h1 class="card-title">
                <?php the_title(); ?>
            </h1>
            <?php echo $is_first ? '<h5 class="read-this">READ THIS</h5>' : null ?>
        </div>
    </a>
</div>