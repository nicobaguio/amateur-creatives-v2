<?php $video_reel_img = get_field('video_reel') ?>
<div id="video-reel-container">
    <?php echo wp_get_attachment_image($video_reel_img, null, false, array('id' => 'container-header-img')) ?>
    <div class="video-embed-container">
        <?php
            $video_post = get_posts( array(
                'tag' => 'video',
                'posts_per_page' => '1'
            ));

            $video_post_id = $video_post[0] -> ID;
            $video_post_title = $video_post[0] -> post_title;
            $video_post_url = get_permalink($video_post[0]);
            $embed = get_field('video_embed', $video_post_id);
            $embed_str = 'https://www.youtube.com/embed/' . end(explode('=', $embed))
        ?>
        <div id="video-frame-wrapper">
        <iframe
            id="video-frame"
            src="<?php echo $embed_str ?>"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        </div>

    </div>
    <div id="video-title-container">
        <h2 id="video-title"><?php echo $video_post_title ?></h2>
        <h6><a id="video-link" href="<?php echo $video_post_url?>">Roll the clip!</a></h6>
    </div>
</div>