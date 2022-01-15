export default function Citation({ citations }) {
    const items = citations.length
    const duration = items * 4

    return(
        <div className='citations'>
            {
                citations.map((citation, index) => {
                    return (
                        <div className='citation' key={index} style={{animationDelay: `${index * (duration / items)}s`}}>
                            {
                                citation.map((line, index) => {
                                    return <p key={index}>{line}</p>
                                })
                            }
                        </div>
                    )
                })
            }

            <style jsx>{`
                .citations {
                    position: relative;
                    width: 100%;
                    height: 20%;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    font-family: serif;
                    font-size: 2rem;
                    line-height: 40%;
                }
                @media screen and (max-width: 18cm){
                    .citations {
                        font-size: 1.2rem;
                    }
                }
                .citation {
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    animation-name: citation;
                    animation-duration: ${duration}s;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease;
                    color: var(--main-color);
                    opacity: 0%;
                }
            `}</style>
            <style>{`
                @keyframes citation {
                    ${0}% {
                        transform: translateY(-30px);
                        opacity: 0%;
                    }
                    ${100 / (items * 10)}% {
                        transform: translateY(0px);
                        opacity: 100%;
                    }
                    ${(100 / items)}% {
                        transform: translateY(0px);
                        opacity: 100%;
                    }
                    ${(100 / items) + (100 / (items * 16))}% {
                        transform: translateY(10px);
                        opacity: 0%;
                    }
                }
            `}</style>

        </div>
    )
}