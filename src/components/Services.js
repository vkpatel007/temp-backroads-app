import Title from './Title'
import { services } from '../data'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subTitle='services' />
      <div className="section-center services-center">
        {services.map(service => {
          return (
            <Service key={service.id} {...service} />
          )
        })}

        <article className="service">
          <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Services