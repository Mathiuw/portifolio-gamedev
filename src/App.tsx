import { useEffect, useRef } from 'react'
import startupSound from './assets/audio/95_startup.ogg'
import resumePdf from './downloads/Mateus_Sartori_GameDev_CV.pdf'
import './App.css'
import "98.css"

function App() {
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (hasPlayed.current) return;
    hasPlayed.current = true;

    const audio = new Audio(startupSound)
    audio.play().catch((err: unknown) =>{
      console.warn('Autoplay blocked, will retry on interaction:', err);
    })

  }, [])
  
  return (
    <>
      <section className="window app-shell" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <div className="title-bar" style={{height:15}}>
          <div className="title-bar-text">My Portfolio</div>
            <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <section id="header">
          <div className="status-bar-field" style={{margin:5, display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:16}}>
            <div style={{display:'flex', flexDirection:'column'}}>
              <h1>Mateus Sartori</h1>
              <h2>Gameplay Developer & Technical Artist</h2>
              <div style={{display:'flex', flex:110, margin: 5, gap: 18}}>
                <a href="mailto:mateus.augusto2003@gmail.com" target="_blank" rel="noopener noreferrer">
                  E-mail
                </a>
                <a href="https://github.com/Mathiuw" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/mateus-augusto-sartori-martins/" target="blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <div>
                  <a
                    href={resumePdf}
                    download="Mateus_Sartori_GameDev_CV.pdf"
                    className="button"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </section>

      <section id='tabs'>
          <menu role="tablist">
            <li role="tab" aria-selected="true"><a href="#tabs">About Me</a></li>
            <li role="tab"><a href="#tabs">Resume</a></li>
            <li role="tab"><a href="#tabs">Projects</a></li>
            <li role="tab"><a href="#tabs">Technical Art</a></li>
          </menu>
          <div className="window tab-panel" role="tabpanel" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <div className="window-body" style={{flex: 1}}>
              <p>the tab content</p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default App
