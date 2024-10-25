import React, { useState, useEffect } from 'react';
import '../livroModelo/livromodelo.css';

// Função para escolher uma cor aleatória a partir de um array
const escolherCorAleatoria = (cores) => {
    return cores[Math.floor(Math.random() * cores.length)];
};

const LivroModelo = ({ 
    caminhoImagem = '/assets/images/ostresporquinhos.svg', 
    cores = ['#2C4A9C', '#F65E86', '#FA8B71', '#FACD5B', '#2C4A9C'] // Lista de cores específicas
}) => {
    const [corAtual, setCorAtual] = useState('');

    useEffect(() => {
        if (cores.length > 0) {
            setCorAtual(escolherCorAleatoria(cores)); // Escolhe uma cor da lista
        }
    }, [cores]);

    return (
        <>
            <div className='containerGeral'>
                <img className='imagemLivro' src={caminhoImagem} alt="Livro Modelo" />
                <svg width="214" height="315" viewBox="0 0 214 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_104_54)">
                        <path d="M4 50C4 22.3858 26.3858 0 54 0H190C201.046 0 210 8.95431 210 20V254C210 254.552 209.552 255 209 255H4V50Z" fill={corAtual} />
                    </g>
                    <g filter="url(#filter1_d_104_54)">
                        <path d="M4 258.286C4 251.501 9.5005 246 16.2857 246H210V279C210 284.523 205.523 289 200 289H34.7143C17.7513 289 4 275.249 4 258.286Z" fill={corAtual} />
                    </g>
                    <path d="M28 268C28 260.82 33.8203 255 41 255H210V281H41C33.8203 281 28 275.18 28 268Z" fill="#FFF6E0" />
                    <g filter="url(#filter2_d_104_54)">
                        <rect x="159" y="255" width="32" height="52" fill="#FDBB13" />
                    </g>
                    <defs>
                        <filter id="filter0_d_104_54" x="0" y="0" width="214" height="263" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_104_54" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_104_54" result="shape" />
                        </filter>
                        <filter id="filter1_d_104_54" x="0" y="246" width="214" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_104_54" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_104_54" result="shape" />
                        </filter>
                        <filter id="filter2_d_104_54" x="155" y="255" width="40" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_104_54" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_104_54" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </>
    );
};

export default LivroModelo;
