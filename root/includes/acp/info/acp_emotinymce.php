<?php
class acp_emotinymce_info
{
    function module()
    {
        return array(
            'filename'    => 'acp_emotinymce',
            'title'        => 'eMosbat TinyMCE Integration',
            'version'    => '1.0.0',
            'modes'        => array(
                'config'		=> array(
            								'title' => 'ACP_EMOTINYMCE_CONFIG_TITLE',
            								'auth' => 'acl_a_emotinymce_mod',
            								'cat' => array('ACP_CAT_DOT_MODS')
            							),
            ),
        );
    }

    function install()
    {
    }

    function uninstall()
    {
    }
}
?>