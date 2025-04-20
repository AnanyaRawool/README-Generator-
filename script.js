document.getElementById("readmeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const features = document.getElementById("features").value.trim().split(",");
    const usage = document.getElementById("usage").value.trim();
    const technologies = document.getElementById("technologies").value.trim().split(",");
  
    // Construct a single detailed paragraph
    const paragraph = 
  `# ${title}
  
  ${description.charAt(0).toUpperCase() + description.slice(1)}. This project includes features such as ${features.map(f => f.trim()).join(", ")}. Users can utilize this project for purposes like ${usage}. It is developed using technologies including ${technologies.map(t => t.trim()).join(", ")}.`;
  
    document.getElementById("output").textContent = paragraph;
  });
  
  function copyToClipboard() {
    const text = document.getElementById("output").textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("README copied to clipboard!");
    });
  }
  
  function downloadReadme() {
    const text = document.getElementById("output").textContent;
    const blob = new Blob([text], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "README.md";
    link.click();
  }
  