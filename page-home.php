<?php get_header(); ?>
<?php get_template_part( 'template-parts/home/blogposts', 'carousel' ); ?>
<?php get_template_part( 'template-parts/home/video', 'reel' ); ?>
<div id="card-link-container">
    <div id="shop-card-link" class="card-link">
        <a href="/shop">
            <svg class="circle-container"><circle class="circle" cx=50% cy=50%></circle></svg>
            <p>Shop</p>
        </a>
    </div>
    <div id="blogs-card-link" class="card-link">
        <a href="/blogs">
            <svg class="circle-container"><circle class="circle" cx=50% cy=50%></circle></svg>
            <p>Blogs</p>
        </a>
    </div>
    <div id="courses-card-link" class="card-link">
        <a href="/courses">
            <svg class="circle-container"><circle class="circle" cx=50% cy=50%></circle></svg>
            <p>Courses</p>
        </a>
    </div>
</div>
<?php get_footer(); ?>