const Header = () => (
    <header className="toolbar">
      <div id="image-container"></div>
      <script>
        const imgElement = document.createElement("img");
        imgElement.src = "assets/Rut_Logo.png";
        imgElement.alt = "Dynamic Image";
        imgElement.width = 400;
        imgElement.height = 300;
      
        document.getElementById("image-container").appendChild(imgElement);
      </script>
    </header>
  );
  
  export default Header;