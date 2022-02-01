import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Страниц информации</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
        distinctio eligendi esse eveniet fuga illum molestiae non rem,
        repudiandae velit!
      </p>
      <button className="btn" onClick={() => navigate('/')}>
        Обратно к списку дел
      </button>
    </>
  )
}

export default AboutPage
