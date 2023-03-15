// import React, { useState } from 'react';
// import puppeteer from 'puppeteer';


// function BuscarPelicula() {

//   const [pelicula, setPelicula] = useState('');

//   const inputPeliUsuario = (event) => {
//     setPelicula(event.target.value);
//   };

//   const recogerPeli = async (event) => {

//     event.preventDefault();

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto('https://www.imdb.com/');

//     await page.type('#suggestion-search', pelicula);
//     await page.keyboard.press('Enter');

//     await page.waitForNavigation();

//     const resultado = await page.$eval('.findHeader', (element) => element.textContent);

//     console.log(resultado);

//     await browser.close();
//   };

//   return (
//     <form onSubmit={recogerPeli}>
//       <label>
//         Buscar película:
//         <input type="text" value={pelicula} onChange={inputPeliUsuario} />
//       </label>
//       <input type="submit" value="Buscar" />
//     </form>
//   );
// }

// export default BuscarPelicula;