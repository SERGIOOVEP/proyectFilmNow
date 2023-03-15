const puppeteer = require("puppeteer");




Scrap = {

    insertScrap: async (req, res) => {
        const { dates } = req.body;
        const user = ({ dates })
        console.log(user)

        try {

            (async () => {

                // Si headless esta en true, se oculta el chromium
                const browser = await puppeteer.launch({ headless: false });


                // Es como abrir una nueva página/pestaña en el navegador
                const page = await browser.newPage();

                // Para ir a una página en concreto.
                await page.goto("https://www.imdb.com");

                await page.type("#suggestion-search", user);

                await page.keyboard.press('Enter');

                await page.waitForNavigation();

                //Recogemos en un array los títulos
                const titulos = await page.$$eval("a.ipc-metadata-list-summary-item__t", (titles) =>
                    titles.map((title) => title.innerHTML)
                );
                //Recogemos en un array las imágenes
                const imagenes = await page.$$eval("img.ipc-image", (imgs) =>
                    imgs.map((img) => img.src)
                );


                const arrayPelis = [];
                for (let i = 0; i < 4; i++) {
                    const datosPeli = {
                        titulo: titulos[i],
                        img: imagenes[i],

                    };
                    arrayPelis.push(datosPeli);
                }

                res.json({
                    message: "scrap realizado",
                    arrayPelis
                })

                console.log(arrayPelis)
                await browser.close();
            })();

        } catch (error) {
            console.log(error)
            res.status(500)
            res.send(error.message)
        }
    }


}


module.exports = Scrap