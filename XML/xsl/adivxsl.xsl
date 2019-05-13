<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">

    <html>
      <head>
	      <meta charset="utf-8"/>
	      <link rel="stylesheet" type="text/css" href="../CSS/EstiloIndex.css"/>
	      <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"/>
	      <title>Un cuento antes de dormir</title>
      </head>
      <body>

	    <!--Portada principal-->
	      <header>
		      <img src="../IMAGES/Portada.jpg"/>
	      </header>

	    <!--Menú de navegación-->
	      <nav>
          <ul id="menu">
			      <li><a href="../index.html">Inicio</a></li>
			      <li><a href="../HTML/Todo_cuentos.html?Inicio">Categorias</a>
				      <ul id="submenu">
					      <li><a href="../HTML/Todo_cuentos.html?Clasicos">Clásicos</a></li>
					      <li><a href="../HTML/Todo_cuentos.html?Disney">Disney</a></li>
					      <li><a href="../HTML/Todo_cuentos.html?Fabulas">Fábulas</a></li>
              </ul>
            </li>
			      <li><a href="Adivinanzas.xml">Adivinanzas</a></li>
			      <li><a href="../HTML/Colorea.html">Colorea</a></li>
			      <li><a href="../HTML/Manualidades.html">Manualidades</a></li>
			      <li><a href="../HTML/Contacto.html">Mándanos tu cuento</a></li>
		      </ul>
	      </nav>

	      <div id="cuerpo_principal">
	        <xsl:for-each select="adivinanzas/adivinanza">
	          <div class="bloques">
	            <a href="../HTML/Adivinanza.html?{@id}">
	              <img src="../IMAGES/Adivinanzas/interrogacion.jpg"/>
	              <p><xsl:value-of select="titulo"/></p>
              </a>
	            <xsl:value-of select="title"/>
            </div>
          </xsl:for-each>
	      </div>

	      <footer>
		      <a href="https://www.facebook.com/"><img src="../IMAGES/facebook.png" /></a>
		      <a href="https://twitter.com/?lang=es"><img src="../IMAGES/twitter.png" alt=""/></a>
		      <a href="https://www.instagram.com/?hl=es"><img src="../IMAGES/instagram.png" alt=""/></a>
	      </footer>


      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
