<?php
/**
 * Plugin Name: CDHQ Alert Plugin
 * Description: Simple dismissible site-wide alert.
 * Author: Creative Distillery
 * Author URI: https://creativedistillery.com
 * Version: 2.0.0
 */

include_once(plugin_dir_path( __FILE__ ) . 'inc/require-plugins.php');
include_once(plugin_dir_path( __FILE__ ) . 'inc/debugging.php');

function cdhq_enqueue_assets() {
  $env = wp_get_environment_type();
  if (get_field('activate_alert', 'options')) {
    if ($env == 'development' || $env == 'local') {
      wp_enqueue_script( 'alert-script', plugins_url( '/dist/cdhq-alert.js', __FILE__ ), array(), null, true);
      wp_enqueue_style( 'alert-style', plugins_url( '/dist/styles.css', __FILE__ ) );
    } else {
      wp_enqueue_script( 'alert-script', plugins_url( '/dist/cdhq-alert.min.js', __FILE__ ), array(), null, true);
      wp_enqueue_style( 'alert-style', plugins_url( '/dist/styles.css', __FILE__ ) );
    }
  }
}

add_action( 'wp_enqueue_scripts', 'cdhq_enqueue_assets' );

add_action('wp_body_open', function() {
  $active = get_field('activate_alert', 'options');
  if (!$active) {
    return;
  }
  
  $settings = [];
  
  while (have_rows('alert_settings', 'options')): the_row();
    $expiration = get_sub_field('alert_expiration', false);
    $today = current_time('Y-m-d H:i:s');
    if ($expiration && $expiration < $today) {
      return;
    }

    $settings = [
      'text' => get_sub_field('alert_text'),
      'button' => get_sub_field('alert_button'),
      'delay' => get_sub_field('alert_delay'),
      'cookie' => get_field('cookie_id', 'options')
    ];
    
  endwhile;

  // Load template part from plugin directory
  include(plugin_dir_path(__FILE__) . 'parts/alert.php');
});