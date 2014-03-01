
/**
 * Expose 'nodes-brick'
 */

module.exports = plugin;


function plugin(el, expr) {
	//this.nodes = this.nodes || {}
	this.nodes[expr] = el;
}

plugin.init = function(view) {
	view.nodes = {};
};