import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import './style.css';
import api from '../../services/api';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('id', id );
            localStorage.setItem('ong_name', response.data.name);

            history.push('/profile');
        } catch (err) {
            console.log(err);
            alert('ID não foi encontrdo');
        }
    }

    return (
        <div className="logon-container">
            <section className="form"> 
                <img src={logoImg} alt="Logo" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Seu ID"
                        value={id}
                        onChange={e => setId(e.target.value)} 
                    />
                    <button className="button" type="submit"> Entrar </button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" /> 
                        Não tenho cadastro 
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}
