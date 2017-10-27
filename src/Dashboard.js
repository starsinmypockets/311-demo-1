import React, { Component } from 'react';
import Components from './components/Components.js'
import Card from './components/Card.js'

console.log("cc",Card)
export default class Dashboard extends Component {
  static propTypes = {
	}
  
	getTitle(title) {
    if (title) {
      return ( 
        <h1 className="dashboard-title">{title}</h1>
      )
    } else {
      return
    }
  }

  getRegion(region) {
    return (
      <div id={region.id} className={region.className} key={region.id} >
        {
          region.children.map(component => {
            console.log('component', component)
            if (Components.hasOwnProperty(component.type)) {
              let Component = Components[component.type];
              const cardProps = component.cardProps || {}
              const toCard = Object.assign(cardProps, {children: [<Component {...component}/>]})
              // wrap component in Card component and return
              return <Card {...toCard}/>
            } else {	
              return <p>"BAD COMPONENT DEFINITION"</p>
            } 
          })
        }
      </div>
    )
  }
  
  getRegions(regions) {
    return this.props.regions.map(region => this.getRegion(region))
  }

  render() {
    return (
      <div className="dashboard-container">           
        {this.getTitle(this.props.title)}
        {this.getRegions(this.props.regions)}
      </div>
    )
  }
}
