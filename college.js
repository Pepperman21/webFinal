alert("working")

document.getElementById("amherst").addEventListener("click", function() {
  	document.getElementById("collegeAmherst").className = "visible";
    document.getElementById("amherst").classList.add("pageSelectTrue")
    document.getElementById("amherst").classList.remove("hovering")

  	document.getElementById("collegeHampshire").className = "notVisible";
    document.getElementById("hampshire").classList.remove("pageSelectTrue")
    document.getElementById("hampshire").classList.add("hovering")

  	document.getElementById("collegeHolyoke").className = "notVisible";
    document.getElementById("holyoke").classList.remove("pageSelectTrue")
    document.getElementById("holyoke").classList.add("hovering")

  	document.getElementById("collegeSmith").className = "notVisible";
    document.getElementById("smith").classList.remove("pageSelectTrue")
    document.getElementById("smith").classList.add("hovering")

  	document.getElementById("collegeUMass").className = "notVisible";
    document.getElementById("umass").classList.remove("pageSelectTrue")
    document.getElementById("umass").classList.add("hovering")

  }, false);

document.getElementById("hampshire").addEventListener("click", function() {
  	document.getElementById("collegeHampshire").className = "visible";
    document.getElementById("hampshire").classList.add("pageSelectTrue")
    document.getElementById("hampshire").classList.remove("hovering")


  	document.getElementById("collegeHolyoke").className = "notVisible";
    document.getElementById("holyoke").classList.remove("pageSelectTrue")
    document.getElementById("holyoke").classList.add("hovering")


  	document.getElementById("collegeSmith").className = "notVisible";
    document.getElementById("smith").classList.remove("pageSelectTrue")
    document.getElementById("smith").classList.add("hovering")


  	document.getElementById("collegeUMass").className = "notVisible";
    document.getElementById("umass").classList.remove("pageSelectTrue")
    document.getElementById("umass").classList.add("hovering")


  	document.getElementById("collegeAmherst").className = "notVisible";
    document.getElementById("amherst").classList.remove("pageSelectTrue")
    document.getElementById("amherst").classList.add("hovering")

  }, false);

document.getElementById("holyoke").addEventListener("click", function() {
  	document.getElementById("collegeHampshire").className = "notVisible";
    document.getElementById("hampshire").classList.remove("pageSelectTrue")
    document.getElementById("hampshire").classList.add("hovering")

  	document.getElementById("collegeHolyoke").className = "visible";
    document.getElementById("holyoke").classList.add("pageSelectTrue")
    document.getElementById("holyoke").classList.remove("hovering")

  	document.getElementById("collegeSmith").className = "notVisible";
    document.getElementById("smith").classList.remove("pageSelectTrue")
    document.getElementById("smith").classList.add("hovering")

  	document.getElementById("collegeUMass").className = "notVisible";
    document.getElementById("umass").classList.remove("pageSelectTrue")
    document.getElementById("umass").classList.add("hovering")

  	document.getElementById("collegeAmherst").className = "notVisible";
    document.getElementById("amherst").classList.remove("pageSelectTrue")
    document.getElementById("amherst").classList.add("hovering")

  }, false);

document.getElementById("smith").addEventListener("click", function() {
    document.getElementById("collegeHampshire").className = "notVisible";
    document.getElementById("hampshire").classList.remove("pageSelectTrue")
    document.getElementById("hampshire").classList.add("hovering")

    document.getElementById("collegeHolyoke").className = "visible";
    document.getElementById("holyoke").classList.remove("pageSelectTrue")
    document.getElementById("holyoke").classList.add("hovering")

    document.getElementById("collegeSmith").className = "notVisible";
    document.getElementById("smith").classList.add("pageSelectTrue")
    document.getElementById("smith").classList.remove("hovering")

    document.getElementById("collegeUMass").className = "notVisible";
    document.getElementById("umass").classList.remove("pageSelectTrue")
    document.getElementById("umass").classList.add("hovering")

    document.getElementById("collegeAmherst").className = "notVisible";
    document.getElementById("amherst").classList.remove("pageSelectTrue")
    document.getElementById("amherst").classList.add("hovering")

  }, false);

document.getElementById("umass").addEventListener("click", function() {
    document.getElementById("collegeHampshire").className = "notVisible";
    document.getElementById("hampshire").classList.remove("pageSelectTrue")
    document.getElementById("hampshire").classList.add("hovering")

    document.getElementById("collegeHolyoke").className = "visible";
    document.getElementById("holyoke").classList.remove("pageSelectTrue")
    document.getElementById("holyoke").classList.add("hovering")

    document.getElementById("collegeSmith").className = "notVisible";
    document.getElementById("smith").classList.remove("pageSelectTrue")
    document.getElementById("smith").classList.add("hovering")

    document.getElementById("collegeUMass").className = "notVisible";
    document.getElementById("umass").classList.add("pageSelectTrue")
    document.getElementById("umass").classList.remove("hovering")

    document.getElementById("collegeAmherst").className = "notVisible";
    document.getElementById("amherst").classList.remove("pageSelectTrue")
    document.getElementById("amherst").classList.add("hovering")

  }, false);