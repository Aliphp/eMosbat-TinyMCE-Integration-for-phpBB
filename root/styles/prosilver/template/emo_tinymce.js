/**
* eMosbat's TinyMCE Integration
* Version 1.0
*/

function escapeReg(str)
{ 
 		
  		var specials = [ "-" , "[" , "]" , "/" , "{" , "}" , "(" , ")" , "*" , "+" , "?" , "." , "\\" , "^" , "$" , "|" ]; 
    	regex = RegExp('[' + specials.join('\\') + ']', 'g'); 
    	return str.replace(regex, "\\$&"); 
}


insert_text = function(text, spaces, popup)
{
				tinyMCE.activeEditor.focus();   
		        oldcnt = tinyMCE.activeEditor.selection.getContent();   
		        tinyMCE.activeEditor.selection.setContent(oldcnt+custom_phpbb_bbcode2html((spaces?' ':'')+text+(spaces?' ':'')));


}

attach_inline = function(index, filename)
{
				tinyMCE.activeEditor.focus();   
		        oldcnt = tinyMCE.activeEditor.selection.getContent();   
		        tinyMCE.activeEditor.selection.setContent(oldcnt+'[attachment=' + index + ']' + filename + '[/attachment]');
}

function add_default_buttons(ed,la_arr)
{
	
		        ed.addButton('quote', {
		        title : la_arr[0],
		        label : 'Quote',  
		        image : bbcode_images_path+'quote2.gif',
		        onclick : function() {    
		 
		        ed.focus();   
		        oldcnt = ed.selection.getContent(); 
		        ed.selection.setContent('[quote]'+oldcnt);
		        //opos = ed.selection.getBookmark();
		        ed.selection.setContent('[/quote]');
		        //if(oldcnt=='') ed.selection.moveToBookmark(opos);
		        }        
		        });
		    
		        ed.addButton('code2', {
		        title : la_arr[1],
		        label : 'Code',
		        image : bbcode_images_path+'code2.gif',
		        onclick : function() {    
		 
		        ed.focus();   
		        oldcnt = ed.selection.getContent(); 
		        ed.selection.setContent('[code]'+oldcnt);
		        //opos = ed.selection.getBookmark();
		        ed.selection.setContent('[/code]');
		        //if(oldcnt=='') ed.selection.moveToBookmark(opos);
		        }        
		        });
		    
		        ed.addButton('list', {
		        title : la_arr[2],
		        label : 'List',
		        image : bbcode_images_path+'list.gif',
		        onclick : function() {    
		 
		        ed.focus();   
		        oldcnt = ed.selection.getContent(); 
		        ed.selection.setContent('[list]'+oldcnt);
		        //opos = ed.selection.getBookmark();
		        ed.selection.setContent('[/list]');
		        //if(oldcnt=='') ed.selection.moveToBookmark(opos);
		        }        
		        });
		    
		        ed.addButton('list2', {
		        title : la_arr[3],
		        label : 'List=',
		        image : bbcode_images_path+'list2.gif',
		        onclick : function() {    
		 
		        ed.focus();   
		        oldcnt = ed.selection.getContent(); 
		        ed.selection.setContent('[list=]'+oldcnt);
		        //opos = ed.selection.getBookmark();
		        ed.selection.setContent('[/list]');
		        //if(oldcnt=='') ed.selection.moveToBookmark(opos);
		        }        
		        });
		    
		        ed.addButton('item', {
		        title : la_arr[4],
		        label : '[*]',
		        image : bbcode_images_path+'item.gif',
		        onclick : function() {    
		 
		        ed.focus();   
		        oldcnt = ed.selection.getContent(); 
		        ed.selection.setContent('[*]'+oldcnt);
		        //opos = ed.selection.getBookmark();
		        ed.selection.setContent('[/*]');
		        //if(oldcnt=='') ed.selection.moveToBookmark(opos);
		        }        
		        });
		        
		        ed.addButton('flash', {
		        title : la_arr[5],
		        label : 'Flash',
		        image : bbcode_images_path+'flash.gif',
		        onclick : function() {    
		 
		        ed.focus();   
		        oldcnt = ed.selection.getContent(); 
		        ed.selection.setContent('[flash=]'+oldcnt);
		        //opos = ed.selection.getBookmark();
		        ed.selection.setContent('[/flash]');
		        //if(oldcnt=='') ed.selection.moveToBookmark(opos);
		        }        
		        });

	
}


function build_bbcode_regex(s,rg,rp)
{
		rgobj = new RegExp(rg,"gi");
		return s.replace(rgobj,rp);
}