<?php if ( !theme_dynamic_sidebar( 'top' ) ) : ?>
<?php $style = theme_get_option('theme_sidebars_style_top'); ?>

<?php ob_start();?><?php 
	echo theme_get_menu(array(
			'source' => theme_get_option('theme_vmenu_source'),
			'depth' => theme_get_option('theme_vmenu_depth'),
			'class' => 'art-vmenu'	
		)
	);
?>
<?php theme_wrapper('vmenu', array('title' => '', 'content' => ob_get_clean())); ?>

<?php endif; ?>