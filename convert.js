function startConvert(bkyfile){
    var bkyxml = bkyfile.split("\n")
    var lstr
    var i;
    var bkstack;
    for(i=0;i<bkyxml.length;i++){
        lstr = bkyxml[i]
        lstr = String(lstr).replace(/<block type="math_compare"/g,"<block type=\"logic_compare\"")
    }
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(bkyfile),Blockly.getMainWorkspace())
}

function toCode(block){

}