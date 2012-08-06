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
	insert_bbcode(tinyMCE.activeEditor,'[attachment=' + index + ']' + filename,'[/attachment]<span id="__caret">_</span>',true)
}


function insert_bbcode(ed,open,close,caret)
{

		        ed.focus();   
		        oldcnt = ed.selection.getContent(); 
		        ed.selection.setContent(open+oldcnt+(caret==false?'<span id="__caret">_</span>':'')+close);
		        
		        caretNode = ed.dom.get('__caret');
		        ed.dom.remove('__caret');

}

function add_default_buttons(ed,la_arr)
{
	
		        ed.addButton('quote', {
		        title : la_arr[0],
		        label : 'Quote',  
		        image : bbcode_images_path+'quote2.gif',
		        onclick : function() {
		        	insert_bbcode(ed,'[quote]','[/quote]',false);
		        }
		        });
		    
		        ed.addButton('code2', {
		        title : la_arr[1],
		        label : 'Code',
		        image : bbcode_images_path+'code2.gif',
		        onclick : function() {
		        	insert_bbcode(ed,'[code]','[/code]',false);
		        }
		        });
		    
		        ed.addButton('list', {
		        title : la_arr[2],
		        label : 'List',
		        image : bbcode_images_path+'list.gif',
		        onclick : function() {
		        	insert_bbcode(ed,'[list]','[/list]',false);
		        }
		        });
		    
		        ed.addButton('list2', {
		        title : la_arr[3],
		        label : 'List=',
		        image : bbcode_images_path+'list2.gif',
		        onclick : function() {
		        	insert_bbcode(ed,'[list=]','[/list]',false);
		        }
		        });
		    
		        ed.addButton('item', {
		        title : la_arr[4],
		        label : '[*]',
		        image : bbcode_images_path+'item.gif',
		        onclick : function() {
		        	insert_bbcode(ed,'[*]','[/*]',false);
		        }
		        });
		        
		        ed.addButton('flash', {
		        title : la_arr[5],
		        label : 'Flash',
		        image : bbcode_images_path+'flash.gif',
		        onclick : function() {
		        	insert_bbcode(ed,'[flash]','[/flash]',false);
		        }
		        });

	
}

function build_bbcode_regex(s,rg,rp)
{
		rgobj = new RegExp(rg,"gi");
		return s.replace(rgobj,rp);
}

