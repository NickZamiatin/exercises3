import React, {
    Component
} from 'react';

// import RadioInput from './RadioInput'
//   <RadioInput obj= {this.state } />

class RadioInput extends Component {

    clicking = () =>{
        this.props.obj(this.state)
    }

    render(){
        return(
            <form onClick={this.clicking}>
              <h1 className="colorh1"  style={{color: this.state.font}}> Pick a color :</h1>
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                    {this.state.colors.map(color =>{
                        return  <option style={{backgroundColor:color.background }}>{color.background}</option>
                    })}
              </select>
            </div>
        </form>
        )
    }

}

export default RadioInput




class Button extends React.Component {

		state = {active: false};
	

	click() {
		this.setState({active: true});
	}

	render() {
		let classes = classnames('specialbutton', {active: this.state.active});
		return <button className={classes} onChange={this.click.bind(this)}>Click me</button>;
	}
}