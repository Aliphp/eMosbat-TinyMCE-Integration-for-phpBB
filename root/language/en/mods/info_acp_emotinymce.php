<?php
/**
* DO NOT CHANGE
*/
if (empty($lang) || !is_array($lang))
{
	$lang = array();
}
// DEVELOPERS PLEASE NOTE
//
// All language files should use UTF-8 as their encoding and the files must not contain a BOM.
//
// Placeholders can now contain order information, e.g. instead of
// 'Page %s of %s' you can (and should) write 'Page %1$s of %2$s', this allows
// translators to re-order the output of data while ensuring it remains correct
//
// You do not need this where single placeholders are used, e.g. 'Message %d' is fine
// equally where a string contains only two placeholders which are used to wrap text
// in a url you again do not need to specify an order e.g., 'Click %sHERE%s' is fine

$lang = array_merge($lang, array(
	'ACP_EMOTINYMCE_CONFIG_TITLE'			=> 'Editor Settings',
	'TITLE'									=> 'Editor Settings',
	'LEGEND1'								=> 'General',
	'LEGEND2'								=> 'Size',
	'LEGEND3'								=> 'Interface',
	'TITLE_EXPLAIN'							=> '',
	'ACP_CONFIG_ENABLE'						=> 'Status',
	'ACP_CONFIG_ENABLE_EXPLAIN'				=> 'Enable TinyMCE editor?',
	'ACP_CONFIG_DIR'						=> 'RTL direction',
	'ACP_CONFIG_DIR_EXPLAIN'				=> 'Right to Left languages',
	'ACP_CONFIG_SPELLCHECKER'				=> 'Spellchecker',
	'ACP_CONFIG_SPELLCHECKER_EXPLAIN'		=> 'Enable spellchecker?',
	'ACP_CONFIG_WIDTH'						=> 'Full Editor Width',
	'ACP_CONFIG_WIDTH_EXPLAIN'				=> '0 = default',
	'ACP_CONFIG_HEIGHT'						=> 'Full Editor Height',
	'ACP_CONFIG_HEIGHT_EXPLAIN'				=> '0 = default',
	'ACP_CONFIG_QWIDTH'						=> 'Quick Reply Width',
	'ACP_CONFIG_QWIDTH_EXPLAIN'				=> 'if addon is installed. (0 = default)',
	'ACP_CONFIG_QHEIGHT'					=> 'Quick Reply Height',
	'ACP_CONFIG_QHEIGHT_EXPLAIN'			=> 'if addon is installed. (0 = default)',
	'ACP_CONFIG_LANG'						=> 'Language',
	'ACP_CONFIG_CAPTION'					=> 'Button Text',
	'ACP_CONFIG_CAPTION_EXPLAIN'			=> 'Show buttons texts?',
	'ACP_CONFIG_TIP'						=> 'Button Tip',
	'ACP_CONFIG_TIP_EXPLAIN'				=> 'Show buttons tooltips?',
	'ACP_CONFIG_SKIN'						=> 'Skin',
	'ACP_CONFIG_SKIN_EXPLAIN'				=> 'Editor Skin',
	
	'_skins'									=> array(
															'default@' => 'Default',
															 'o2k7@' => 'o2k7',
															 'o2k7@sliver' => 'o2k7 Sliver',
															 'o2k7@black' => 'o2k7 Black',
														),
));
?>