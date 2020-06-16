
function TofesMeshichaCognos() {
	//debugger 
	var url = getElement("37648");
	var party_no   = getElement("4043").value;
	var party_type = getElement("4044").value;
	var party_req  = getElement("4045").value;
	var product    = getElement("3419").value;
	
	//var URL = url.value + "&docname=TofesMeshicha&company=6&prm=PartyNo=" + party_no + ",PartyType=" + party_type + ",PrSrndReqNo=" + party_req + ",Product=" + product;

	var URL = url.value + "=PartyNo=" + party_no + ",PartyType=" + party_type + ",PrSrndReqNo=" + party_req + ",Product=" + product + "&format=PDF";

	execCommand(48);
  window.open(URL);   
}
