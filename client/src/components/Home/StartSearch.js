import React, { useEffect, useState } from 'react'

export const StartSearch = () => {

    const userRegister = JSON.parse(localStorage.getItem('emailUsuarioLogado'))

    const [user, setUser] = useState()

    useEffect(() => {

        fetch(`http://localhost:5000/get-user/${userRegister}`)
            .then(response => response.json())
            .then(user => {
                setUser(user)
                localStorage.setItem("usuarioLogado",JSON.stringify(user))
            })


    }, [])


    function goToHome() {
        window.location = '/questions'
    }

    return (
        <div>
            <div className='start'>
                <p className='pStart1'>¡Hola, {user && user.name_user}!</p>
                <p className='pStart'>A continuación, te haremos unas preguntas para encontrar la película que estás buscando</p>
                <button onClick={() => goToHome()} className="butStart">COMENZAR</button>
            </div>
        </div>
    )
}
