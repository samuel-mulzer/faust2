import Script from "next/script"

export default function Citation({ citations }) {

    const items = citations.length
    const duration = items * 12

    return(
        <div id='citations'>
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

            <Script src="citations.js" />

            <style jsx>{`
                #citations {
                    position: relative;
                    width: 100%;
                    flex: 1 1 auto;
                    // border: 2px solid yellow;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    font-family: serif;
                    font-size: 2rem;
                    line-height: 20%;

                    transform: translateY(-30px);
                    opacity: 0;
                    transition: transform 1s ease, opacity 1s ease;
                }
                @media screen and (max-width: 18cm){
                    #citations {
                        font-size: 1.2rem;
                    }
                }
                .citation {
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    // border: 2px solid yellow;

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
                    ${(100 / items) + (100 / (2 * items * 10))}% {
                        transform: translateY(10px);
                        opacity: 0%;
                    }
                }
            `}</style>
        </div>
    )
}