import React from 'react'
import { Nav } from '../layout/Nav'
import { useEffect, useState } from 'react'


export const Personal = () => {

    const [films, setFilms] = useState([])

    const datesPersonal = JSON.parse(localStorage.getItem("usuarioLogado") || [])

    //FETCH  PARA MODIFICAR USUARIO
    const updateUser = async e => {

        e.preventDefault();

        let infoUpdate = {
            name_user: e.target.usuario.value,
            year_user: e.target.year.value,
            newEmail: e.target.email.value,
            email: datesPersonal.email
        }

        let infoUpdateLocal = {
            name_user: e.target.usuario.value,
            year_user: e.target.year.value,
            newEmail: e.target.email.value,
            email: e.target.email.value
        }

        let Metadatos = {
            method: 'POST',
            body: JSON.stringify(infoUpdate),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };

        fetch("http://localhost:5000/update-user", Metadatos)
            .then((res) => console.log(res))
            .then((res) => {
                localStorage.setItem("usuarioLogado", JSON.stringify(infoUpdateLocal))

            });

    }



    //FETCH PARA TRAERNOS LAS PELICULAS FAVORITAS DE CADA USUARIO

    const dates = JSON.parse(localStorage.getItem("usuarioLogado") || [])

    useEffect(() => {


        let emailUser = {
            email: dates.email

        }

        let Metadatos = {
            method: 'POST',
            body: JSON.stringify(emailUser),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };


        fetch("http://localhost:5000/favorites-films", Metadatos)
            .then((response) => response.json())
            .then((response) => {
                setFilms(response);

            })
            .catch((error) => {
                console.log('Error:', error);
            });


    }, []);


    //FETCH PARA ELIMINAR USUARIO DE LA BASE DE DATOS

    const deleteUser = async e => {

        e.preventDefault();

        let infoDelete = {
            email: datesPersonal.email
        }

        let Metadatos = {
            method: 'POST',
            body: JSON.stringify(infoDelete),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };

        fetch("http://localhost:5000/delete-user", Metadatos)
            .then((res) => console.log(res))
            .then((res) => {

            });

        localStorage.removeItem("usuarios");
        window.location = '/';

    }

    function returnGame() {
        window.location = '/questions'

    }


    return (
        <div>
            <Nav />

            <div className='divPersonal'>

                <div className='perLeft'>

                    <form onSubmit={updateUser} className='formPersonal'>
                        <h1 className='h1Personal'>Datos Personales</h1>
                        <h2>Nombre de usuario:</h2>
                        <input type="text" defaultValue={datesPersonal.name_user} name="usuario" />
                        <h2>Correo electrónico:</h2>
                        <input type="text" defaultValue={datesPersonal.newEmail ? datesPersonal.newEmail : datesPersonal.email} name="email" />
                        <h2>Año de nacimiento:</h2>
                        <input type="text" defaultValue={datesPersonal.year_user} name="year" />
                        <br />
                        {/* <h2>Contraseña:</h2> */}
                        {/* <input type="text" defaultValue={datesPersonal.pass} /> */}
                        <input type="submit" className="btnUpdate" value="Modificar Usuario" />
                    </form>

                </div>


                <div>
                    <button className='butReStart' onClick={() => returnGame()}>QUIERO BUSCAR OTRA PELÍCULA</button>
                </div>


                <div className='perRight'>
                    <h1 className='h1Personal'>Películas favoritas</h1>
                    {/* <p>{films}</p> */}
                    {films ? films.map((film, i) => {

                        return (
                            <div key={i} className="divFilmsFavo">

                                <p className='pNameFilm'>{film.name_film}</p>

                            </div>
                        )

                    })
                        : <p>"No hay películas guardadas"</p>}
                </div>


            </div>
            <form onSubmit={deleteUser}>
                <input type="submit" className="btnDelete" value="Eliminar Cuenta" defaultValue={datesPersonal.email} name="email" />
            </form>

        </div>
    )
}
