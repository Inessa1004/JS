function LinkAnnCognos() {  

	var url     = getElement("37648");
	var company = getElement("29173").value;
	var gn_proc_exec_no  = getElement("37026").value;

	var URL = url.value + "=" + gn_proc_exec_no + "&format=spreadsheetML";
	
	execCommand(48);
  window.open(URL);   
}