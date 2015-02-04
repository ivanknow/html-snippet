/**
 * @author Ivan Rodrigues (@ivanknow)
 * @version 1.0.0 
 * @dependence jQuery
 */
 htmlMaker = function(){ 

		var tagVar = {tagName : "",attr : [],content : ""};
		function tag(tagName) {	tagVar.tagName = tagName;tagVar.attr = [];	return this;}
		
		function attr(attribute, value) {
			tagVar.attr.push({
				key : attribute,
				value : value
			});
			return this;
		}
		
		function updateAttr(attribute, value) {
			for (var t=0;t<tagVar.attr.length;t++) {
				if(tagVar.attr[t].key === attribute){

					tagVar.attr[t].value = value;
					return this;
				}
			}
			return this.attr(attribute, value);
		}
		
		function resetAttr(attribute, value) {
			tagVar.attr = [];
			return this;
		}
		
		function content(value) {
			if (typeof (value) === "object") {
				tagVar.content = value.show();
			} else {
				tagVar.content = value;
			}
			return this;
		}
		
		function show() {
			var htmlReturn = "<" + tagVar.tagName + " ";
			for ( var c in tagVar.attr) {
				htmlReturn += " " + tagVar.attr[c].key + "='"
						+ tagVar.attr[c].value + "' ";
			}
			htmlReturn += ">" + tagVar.content + "</" + tagVar.tagName + ">";
			return htmlReturn;
		}

		return {
			attr : attr,
			content : content,
			show : show,
			tag : tag,
			updateAttr : updateAttr
		};
	};

htmlSnippet = {
//call this function to load snippets
	init : function() {
		$( ".html-from-snippet" ).each(function() {
			var snippet = $(this).attr('snippet');
			var html = htmlSnippet.getSnippet(snippet);
			$(this).html(html.show());
		});
	},
	snippetValues : [
			{
				id : 'snippet-header',
				value : htmlMaker()
						.tag("h1")
						.attr("class","header")
						.content("Header")
			},
			{
				id : 'snippet-footer',
				value : htmlMaker()
						.tag("h1")
						.attr("class","header")
						.content("Footer")
			},
			{
				id : 'snippet-li',
				value : htmlMaker()
						.tag("li")
						.attr("class","header")
						.content("Item")
			},
			{
				id : 'snippet-td',
				value : htmlMaker()
						.tag("td")
			},
			{
				id : 'snippet-tr',
				value : htmlMaker()
						.tag("tr")
			}
	],
	getSnippet : function(id) {
		for (var i = 0; i < htmlSnippet.snippetValues.length; i++) {
			if (id === htmlSnippet.snippetValues[i].id) {
				return htmlSnippet.snippetValues[i].value;
			}
		}
		throw "Snippet ID is not found";
		return null;
	}
};


