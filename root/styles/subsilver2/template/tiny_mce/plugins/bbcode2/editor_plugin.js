/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

// Modified by eMosbat.com
//

(function() {
	tinymce.create('tinymce.plugins.BBCodePlugin', {
		init : function(ed, url) {
			var t = this, dialect = ed.getParam('bbcode_dialect', 'phpbb').toLowerCase();

			ed.onBeforeSetContent.add(function(ed, o) {
			// eMosbat modification
				o.content = custom_phpbb_bbcode2html(o.content);
			// eMosbat modification
				o.content = t['_' + dialect + '_bbcode2html'](o.content);
			});

			ed.onPostProcess.add(function(ed, o) {
				if (o.set) {
			// eMosbat modification
					o.content = custom_phpbb_bbcode2html(o.content);
			// eMosbat modification
					o.content = t['_' + dialect + '_bbcode2html'](o.content);
				}
				
				if (o.get) {
			// eMosbat modification
					o.content = custom_phpbb_html2bbcode(o.content);
			// eMosbat modification
					o.content = t['_' + dialect + '_html2bbcode'](o.content);
				}
			});
		},

		getInfo : function() {
			return {
				longname : 'phpBB BBCode Plugin',
				author : 'Moxiecode Systems AB, Modified by eMosbat',
				authorurl : 'http://www.eMosbat.com',
				infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/bbcode',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods

		// HTML -> BBCode in phpbb dialect
		_phpbb_html2bbcode : function(s) {
			s = tinymce.trim(s);

			function rep(re, str) {
				s = s.replace(re, str);
			};

			// example: <strong> to [b]
			rep(/<a.*?href=\"(.*?)\".*?>(.*?)<\/a>/gi,"[url=$1]$2[/url]");
			rep(/<span style=\"color: ?(.*?);\">(.*?)<\/span>/gi,"[color=$1]$2[/color]");
			rep(/<font.*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[color=$1]$2[/color]");

			// eMosbat modification
			rep(/<span style=\"font-size: (.*?)\%;\">(.*?)<\/span>/gi,"[size=$1]$2[/size]");
			// eMosbat modification

			rep(/<font>(.*?)<\/font>/gi,"$1");
			rep(/<img.*?src=\"(.*?)\".*?\/>/gi,"[img]$1[/img]");
			rep(/<\/(strong|b)>/gi,"[/b]");
			rep(/<(strong|b)>/gi,"[b]");
			rep(/<\/(em|i)>/gi,"[/i]");
			rep(/<(em|i)>/gi,"[i]");
			rep(/<\/u>/gi,"[/u]");
			rep(/<span style=\"text-decoration: ?underline;\">(.*?)<\/span>/gi,"[u]$1[/u]");
			rep(/<u>/gi,"[u]");
			rep(/<blockquote[^>]*>/gi,"[quote]");
			rep(/<\/blockquote>/gi,"[/quote]");
			rep(/<br \/>/gi,"\n");
			rep(/<br\/>/gi,"\n");
			rep(/<br>/gi,"\n");
			rep(/<p>/gi,"");
			rep(/<\/p>/gi,"\n");
			rep(/&nbsp;|\u00a0/gi," ");
			rep(/&quot;/gi,"\"");
			rep(/&lt;/gi,"<");
			rep(/&gt;/gi,">");
			rep(/&amp;/gi,"&");

			return s; 
		},

		// BBCode -> HTML from phpbb dialect
		_phpbb_bbcode2html : function(s) {
			s = tinymce.trim(s);

			function rep(re, str) {
				s = s.replace(re, str);
			};

			// eMosbat modification
			rep(/\[size=(.*?)\](.*?)\[\/size\]/gi,"<span style=\"font-size: $1\%\">$2</span>");
			rep(/\[size\](.*?)\[\/size\]/gi,"$1");
			// eMosbat modification

			// example: [b] to <strong>
			rep(/\n/gi,"<br />");
			rep(/\[b\]/gi,"<strong>");
			rep(/\[\/b\]/gi,"</strong>");
			rep(/\[i\]/gi,"<em>");
			rep(/\[\/i\]/gi,"</em>");
			rep(/\[u\]/gi,"<u>");
			rep(/\[\/u\]/gi,"</u>");
			rep(/\[url=([^\]]+)\](.*?)\[\/url\]/gi,"<a href=\"$1\">$2</a>");
			rep(/\[url\](.*?)\[\/url\]/gi,"<a href=\"$1\">$1</a>");
			rep(/\[img\](.*?)\[\/img\]/gi,"<img src=\"$1\" />");
			rep(/\[color=(.*?)\](.*?)\[\/color\]/gi,"<font color=\"$1\">$2</font>");


			return s; 
		}
	});

	// Register plugin
	tinymce.PluginManager.add('bbcode2', tinymce.plugins.BBCodePlugin);
})();