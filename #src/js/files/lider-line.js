// **************************leader-line***********************************
const startElement = document.getElementById('location__dotted-start1');
const	 endElement = document.getElementById('location__dotted-end1');
new LeaderLine(startElement, endElement, {
	color: '#B98B4B', 
	size: 2,
	dash:true,
	endPlug:'behind',
});
const startElement2 = document.getElementById('location__dotted-start2');
const endElement2 = document.getElementById('location__dotted-end2');
new LeaderLine(startElement2, endElement2, {
	color: '#B98B4B', 
	size: 2,
	dash:true,
	endPlug:'behind',
});