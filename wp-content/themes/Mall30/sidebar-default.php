<?php
if ( !theme_dynamic_sidebar( 'default' ) ) : ?>
<?php $style = theme_get_option('theme_sidebars_style_default'); ?>

<?php ob_start();?>
      <ul>
        <?php wp_list_categories('show_count=1&title_li='); ?>
      </ul>
<?php theme_wrapper($style, array('title' => __('Categories', THEME_NS), 'content' => ob_get_clean())); ?>

<?php ob_start();?>
      <?php get_search_form(); ?> 
<?php theme_wrapper($style, array('title' => __('Search', THEME_NS), 'content' => ob_get_clean())); ?>

<?php endif; ?>