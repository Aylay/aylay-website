<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"
    doctype-system="about:legacy-compat"/>

  <xsl:template match="/">
    <html lang="fr">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="robots" content="noindex"/>
      <title>Sitemap · Lucas Attali</title>
      <style>
        :root{
          --cobalt:#1F3DE6;--saffron:#FFB200;--coral:#FF5A4D;
          --paper:#F4F2EC;--card:#FBFAF6;--ink:#10131A;--muted:#56564E;
          --line:rgba(16,19,26,.12);
          --mono:ui-monospace,"SFMono-Regular",Menlo,Consolas,monospace;
          --sans:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
        }
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:var(--paper);color:var(--ink);font-family:var(--sans);
          line-height:1.6;-webkit-font-smoothing:antialiased}
        header{background:var(--cobalt);color:#F8F7F2;padding:28px clamp(20px,5vw,64px)}
        header .mono{font-family:var(--mono);font-size:12px;color:var(--saffron);
          letter-spacing:.06em;display:block;margin-bottom:8px}
        header h1{font-size:clamp(24px,4vw,36px);font-weight:700;letter-spacing:-.02em}
        main{max-width:1100px;margin:0 auto;padding:clamp(24px,4vw,48px) clamp(20px,5vw,64px)}
        .count{font-family:var(--mono);font-size:12px;color:var(--muted);margin-bottom:20px}
        table{width:100%;border-collapse:collapse;background:var(--card);
          border:1px solid var(--line);border-radius:12px;overflow:hidden}
        th{text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:.06em;
          text-transform:uppercase;color:var(--muted);padding:14px 18px;
          border-bottom:1px solid var(--line);background:rgba(31,61,230,.04)}
        td{padding:13px 18px;border-bottom:1px solid var(--line);vertical-align:top}
        tr:last-child td{border-bottom:none}
        tr:hover td{background:rgba(31,61,230,.03)}
        td.url a{font-family:var(--mono);font-size:13px;color:var(--cobalt);
          text-decoration:none;word-break:break-all}
        td.url a:hover{text-decoration:underline;text-decoration-color:var(--saffron);
          text-underline-offset:3px}
        .langs span{display:inline-block;font-family:var(--mono);font-size:11px;
          padding:3px 8px;margin:2px 4px 2px 0;border:1px solid var(--line);
          border-radius:6px;color:var(--muted)}
        .langs span.def{border-color:var(--saffron);color:var(--ink)}
        footer{max-width:1100px;margin:0 auto;padding:0 clamp(20px,5vw,64px) 40px;
          font-family:var(--mono);font-size:11px;color:var(--muted)}
      </style>
    </head>
    <body>
      <header>
        <span class="mono">sitemap.xml</span>
        <h1>Plan du site, Lucas Attali</h1>
      </header>
      <main>
        <p class="count">
          <xsl:value-of select="count(s:urlset/s:url)"/> URLs indexables (FR et EN)
        </p>
        <table>
          <thead>
            <tr><th>URL</th><th>Langues</th></tr>
          </thead>
          <tbody>
            <xsl:for-each select="s:urlset/s:url">
              <tr>
                <td class="url">
                  <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
                </td>
                <td class="langs">
                  <xsl:for-each select="xhtml:link">
                    <xsl:choose>
                      <xsl:when test="@hreflang = 'x-default'">
                        <span class="def"><xsl:value-of select="@hreflang"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span><xsl:value-of select="@hreflang"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </xsl:for-each>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </main>
      <footer>
        Vue lisible du sitemap. Les moteurs de recherche lisent le XML brut, cette feuille de style est ignorée par les robots.
      </footer>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
