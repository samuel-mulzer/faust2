import Script from "next/script"

export default function Citation({ citations }) {

    const items = citations.length
    const duration = items * 10

    return(
        <div id='citations'>
            {
                citations.map((citation, index) => {
                    return (
                        <p className='citation' key={index} style={{animationDelay: `${index * (duration / items)}s`}}>
                            {
                                citation.map((line, line_index) => {
                                    return (
                                        <>
                                            <span className='line' key={line_index}>{line}</span>
                                            <br/>
                                        </>
                                    )
                                })
                            }
                        </p>
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

                    transition: transform 1s ease, opacity 1s ease;
                }
                .citation {
                    position: absolute;
                    padding: 5%;
                    // border: 2px solid yellow;

                    font-family: serif;
                    font-size: 2rem;
                    text-align: center;
                    line-height: 180%;

                    animation-name: citation;
                    animation-duration: ${duration}s;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease;
                    color: var(--main-color);
                    opacity: 0%;
                }
                @media screen and (max-width: 800px),
                screen and (max-height: 800px) {
                    .citation {
                        font-size: 1.8rem;
                    }
                }
                @media screen and (max-width: 600px), screen and (max-height: 600px){
                    .citation {
                        font-size: 1.5rem;
                    }
                }
                .line {
                    // border: 2px solid yellow;
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
                    ${(100 / items) - (100 / (2 * items * 10))}% {
                        transform: translateY(0px);
                        opacity: 100%;
                    }
                    ${(100 / items)}% {
                        transform: translateY(10px);
                        opacity: 0%;
                    }
                }
            `}</style>
        </div>
    )
}