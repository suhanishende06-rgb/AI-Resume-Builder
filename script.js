function generateResume(){

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const about = document.getElementById("about").value;
  const skills = document.getElementById("skills").value;

  document.getElementById("resumeName").innerText = name;
  document.getElementById("resumeRole").innerText = role;
  document.getElementById("resumeAbout").innerText = about;
  document.getElementById("resumeSkills").innerText = skills;

}
