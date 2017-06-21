import React, { Component } from 'react'

import web from './web.png'
import github from  './github.png'
import './autor.css'

class Autor extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-6 col-xs-12">
                <a href="http://jhonnyvasquez.hol.es/public">
                    <img src={web} alt="web" className="img-fluid"/>
                </a>
            </div>
            <div className="col-md-6 col-xs-12">
                <hr className="hidden-xl-down hidden-lg-down hidden-sm-down" />
                <div className="card">
                    <div className="card-block">
                        <h3 className="card-title">Página web del autor</h3>
                        <p className="card-text">En mi página pueden ver una extracto informativo sobro mi experiencia y mi cv.</p>
                        <a href="http://jhonnyvasquez.hol.es/public" className="btn btn-primary"><i className="fa fa-globe" aria-hidden="true"></i> Visitar web</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 col-xs-12 _1">
                <h2>Github del autor</h2>
                <p>En este github encontraran algunos proyectos interesante para analizar.</p>
                <div className="list-group">
                    <a href="https://github.com/vanckruz" className="list-group-item active">Visitar repo </a>
                    <a href="https://github.com/vanckruz/trips-app-ionic4" className="list-group-item list-group-item-action">App de viajes ionic 4</a>
                    <a href="https://github.com/vanckruz/web-site-personal-cirujano" className="list-group-item list-group-item-action">Web administrable para un cirujano</a>
                    <a href="https://github.com/vanckruz/web-page-empresarial" className="list-group-item list-group-item-action">Web administrable para una empresa de diseño</a>
                    <a href="https://github.com/vanckruz/mi-web-de-contacto" className="list-group-item list-group-item-action">Mi web personal desarrollada en 2014</a>
                    <a href="https://github.com/vanckruz/clon-mercadolibre-laravel" className="list-group-item list-group-item-action">Clon visual de mercado libre - test</a>
                    <a href="https://github.com/vanckruz/app-discos-laravel" className="list-group-item list-group-item-action">App de discos - test </a>
                </div>
            </div>
            <div className="col-md-6 col-xs-12 _2">
                <div className="hidden-sm-down hidden-xs-down offset"></div>
                <a href="https://github.com/vanckruz">
                    <img src={github} alt="web" className="img-fluid"/>
                </a>
            </div>
        </div>        
      </div>
    );
  }
}

export default Autor
