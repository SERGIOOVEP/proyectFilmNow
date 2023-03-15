import React from 'react'

export const Scrap = () => {

    const [dates, setDates] = useState(false);

    const scraping = async e => {

        e.preventDefault();

        let loginDates = {
            email: e.target.email.value,
        }



        let Metadatos = {
            method: 'POST',
            body: JSON.stringify(loginDates),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };


        fetch("http://localhost:5000/scrap", Metadatos)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                setDates(response)
                console.log(response)
            })
    }



    return (


        <div>
            <NavBar />


            <form className='formRegister' onSubmit={loginUser}>

                <img src={filmnow3} className="ImgLogoFilm3" />
                <input className='inputLogin' placeholder='Correo electrónico' type="email" name='email' />
                <input className='inputLogin' placeholder='Contraseña' type="password" name='pass' />
                <input className='inputLogin' type="submit" value="Acceder" />

            </form>

        </div>
    )
}
